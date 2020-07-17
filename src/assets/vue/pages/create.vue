<template>
  <f7-popup
    class="create-popup"
    :opened="popupOpened"
    @popup:closed="popupOpened = false"
    closeOnEscape
    swipeToClose
  >
    <f7-page>
      <f7-navbar title="Sign Up">
        <f7-nav-right>
          <f7-link popup-close>Close</f7-link>
        </f7-nav-right>
      </f7-navbar>
      <f7-list form>
        <f7-block>Start looking for great resturants near you!</f7-block>
        <f7-list-input
          label="Email"
          type="text"
          placeholder="Your email"
          :value="email"
          @input="email = $event.target.value"
        ></f7-list-input>
        <f7-list-input
          label="Password"
          type="password"
          placeholder="Your password"
          :value="password"
          @input="password = $event.target.value"
        ></f7-list-input>
        <br />
        <f7-button round fill @click="signUp" title="Create Account">Create Account</f7-button>
        <f7-block v-if="showMessage" :text-color="messageTextColor">{{message}}</f7-block>
      </f7-list>
    </f7-page>
  </f7-popup>
</template>
    
<script>
import { mixin } from '../../js/mixin';

export default {
  data() {
    return {
      popupOpened: false,
      email: "",
      password: "",
      showMessage: false,
      messageTextColor: "blue",
      message: "n/a"
    };
  },
  mixins: [mixin],
  mounted() {
    this.$store.watch(
      (state, getters) => getters.signed_up,
      (newValue, oldValue) => {
         if (newValue == true) {
           this.$f7.popup.close(".create-popup");
         }
      }
    )
  },
  methods: {
    signUp() {
      var payload = {}
      payload.email = this.email
      payload.password = this.password
      this.$store.dispatch('signUp', payload)
    }
  }
};
</script>
<style>
</style>

