<template>
  <f7-page>
    <f7-navbar>
        <div class="title">DineWell</div>
      </f7-navbar>
    <login />
    <resturants />
  </f7-page>
</template>
<script>
import login from "./login";
import resturants from "./resturants";

export default {
  components: {
    login,
    resturants
  },
  data() {
    return {};
  },
  mounted() {
    const self = this;
    const app = self.$f7;
    if (this.$store.getters.signed_in) {
    } else {
      app.loginScreen.open(".home-login-screen");
    }
  },
  methods: {}
};
</script>
