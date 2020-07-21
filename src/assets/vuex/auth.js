import firebase from "firebase";

const AuthModule = {
  state: {
    signed_in: false,
    signed_up: false,
    display_name: null,
    allergies: new Map()
  },
  getters: {
    signed_in: state => state.signed_in,
    signed_up: state => state.signed_up,
    display_name: state => state.display_name,
    allergies: state => state.allergies,
  },
  mutations: {
    setSignedIn(state, payload) {
      state.signed_in = payload;
    },
    setSignedUp(state, payload) {
      state.signed_up = payload;
    },
    setDisplayName(state, payload) {
      state.display_name = payload;
    },
    setAllergies(state, payload) {
      state.allergies = payload;
    }
  },
  actions: {
    async signIn({ commit }, payload) {
      console.log("Start Login");
      console.log(payload);
      await firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          var userId = firebase.auth().currentUser.uid;
          firebase
            .database()
            .ref('/users/' + userId)
            .once("value").then(function(snapshot) {
              var username = (snapshot.val() && snapshot.val().display_name) || 'Anonymous';
              console.log("setAlertMessage", `Welcome ${username}`);

              commit("setDisplayName", username);
              commit("setAllergies", snapshot.val().allergies);
              console.log("before setSignedIn: True");
              commit("setSignedIn", true);
              console.log("after setSignedIn: True");
            });
        })
        .catch(function(error) {
          console.log(error);
          commit("setAlertMessage", error);
        });
    },
    async signUp({ commit }, payload) {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then(data => {
          firebase
            .database()
            .ref("users")
            .child(data.user.uid)
            .set({
              userId: data.user.uid,
              email: payload.email,
              display_name: payload.name,
              location: payload.location,
              owned_restaulant_id: null,
              allergies: {
                gluten: false,
                dairy: false,
                soy: false,
                egg: false,
                peanuts: false,
                seafood: false
              }
            }).then(() => {
              commit("setSignedUp", true);
              console.log("updated profile");
            })
            .catch(err => {
              console.log(err.message);
              commit("setAlertMessage", err.message);
            });
        })
        .catch(err => {
          console.log(err.message);
          commit("setAlertMessage", err.message);
        });
    },
    signOut({ commit }) {
      firebase
        .auth()
        .signOut()
        .then(() => {
          commit("setSignedIn", false);
        });
    }
  }
};
export default AuthModule;
