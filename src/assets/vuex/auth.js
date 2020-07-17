import firebase from "firebase";

const AuthModule = {
  state: {
    signed_in: false,
    signed_up: false
  },
  getters: {
    signed_in: state => state.signed_in,
    signed_up: state => state.signed_up
  },
  mutations: {
    setSignedIn(state, payload) {
      state.signed_in = payload;
    },
    setSignedUp(state, payload) {
      state.signed_up = payload;
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
          console.log("setAlertMessage", `Welcome ${user.displayName}`);
          commit("setAlertMessage", `Welcome ${user.displayName}`);
          commit("setSignedIn", true);
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
              commit("setSignedUp", true);
              console.log("Signedup");
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
