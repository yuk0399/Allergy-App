<template>
  <f7-page>
    <login />
  </f7-page>
</template>
<script>
import login from "./login";

export default {
  components: {
    login
  },
  data() {
    return {};
  },
  mounted() {
    const self = this;
    const app = self.$f7;
    if (this.$store.getters.userLoggedIn) {
    } else {
      app.loginScreen.open(".home-login-screen");
    }
  },
  methods: {}
};
</script>