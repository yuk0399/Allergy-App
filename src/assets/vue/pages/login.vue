<template>
  <f7-login-screen class="home-login-screen">
    <legal />
    <forgot />
    <create />
    <f7-page login-screen>
      <img src="static/logo.jpg" id="logo" />
      <f7-login-screen-title>DineWell</f7-login-screen-title>
      <f7-list form>
        <f7-list-input
          label="Email"
          type="text"
          placeholder="Your email"
          :value="username"
          @input="username = $event.target.value"
        ></f7-list-input>
        <f7-list-input
          label="Password"
          type="password"
          placeholder="Your password"
          :value="password"
          @input="password = $event.target.value"
        ></f7-list-input>
      </f7-list>
      <f7-list>
        <f7-button fill @click="signIn" title="Sign In">Sign In</f7-button>
        <f7-block-footer id="loginOr">
          <i>Or</i>
        </f7-block-footer>
        <f7-button fill @click="signUp" title="Create Account">Create Account</f7-button>
        <f7-block-footer>
          <a @click="forgotPassword">Forgotten your Password?</a>
          <br />By entering this site, you agree to our
          <a @click="showTerms">Terms and Conditions.</a>
        </f7-block-footer>
      </f7-list>
    </f7-page>
  </f7-login-screen>
</template>

<script>
import legal from "./legal";
import forgot from "./forgot";
import create from "./create";
import { mixin } from '../../js/mixin';

export default {
  components: {
    legal,
    forgot,
    create
  },
  data() {
    return {
      username: "",
      password: "",
      openLegal: false
    };
  },
  mixins: [mixin],
  mounted() {
    this.$store.watch(
      (state, getters) => getters.signed_in,
      (newValue, oldValue) => {
         if (newValue == true) {
          this.$f7.loginScreen.close(".home-login-screen");
        }
      }
    )
  },
  methods: {
    signIn() {
      console.log('signin')
      var payload = {}
      payload.email = this.username
      payload.password = this.password
      this.$store.dispatch('signIn', payload)
    },
    signUp() {
      this.$f7.popup.open(".create-popup");
    },
    forgotPassword() {
      this.$f7.popup.open(".forgot-popup");
    },
    showTerms() {
      this.$f7.popup.open(".terms-popup");
    }
  }
};
</script>

<style lang="scss" scoped>
#loginOr {
  margin-bottom: 5px;
  margin-top: 5px;
}

#logo {
  display: block;
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;
}
</style>
