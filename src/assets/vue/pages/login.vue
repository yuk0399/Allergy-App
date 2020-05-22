<template>
  <f7-login-screen class="home-login-screen">
    <f7-page login-screen>
      <img src="static/logo.jpg" width="189" height="144" alt />
      <f7-login-screen-title>DineWell Login</f7-login-screen-title>
      <f7-list form>
        <f7-list-input
          label="Email \ Username"
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
          Forgotten your Password?
          <br />By entering this site, you agree to our Terms and Conditions.
        </f7-block-footer>
      </f7-list>
    </f7-page>
  </f7-login-screen>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    signIn() {
      const self = this;
      const app = self.$f7;
      const router = self.$f7router;
      app.dialog.alert(
        `Username: ${self.username}<br>Password: ${self.password}`,
        () => {
          router.back();
        }
      );
    }
  }
};
</script>

<style lang="scss" scoped>
#loginOr {
  margin-bottom: 5px;
  margin-top: 5px;
}
</style>