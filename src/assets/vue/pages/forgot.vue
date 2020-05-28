<template>
  <f7-popup
    class="forgot-popup"
    :opened="popupOpened"
    @popup:closed="popupOpened = false"
    closeOnEscape
    swipeToClose
  >
    <f7-page>
      <f7-navbar title="Reset Password">
        <f7-nav-right>
          <f7-link popup-close>Close</f7-link>
        </f7-nav-right>
      </f7-navbar>
      <f7-block>
        Enter the Email Address associated with your account and we'll email you instructions on how to reset your password.
        <br />
        <br />
        <f7-input
          label="Email"
          type="text"
          placeholder="Email"
          :value="email"
          @input="email = $event.target.value"
        ></f7-input>
        <br />
        <f7-button round fill @click="reset" title="Reset Password">Reset Password</f7-button>
      </f7-block>
      <f7-block v-if="showMessage" :text-color="messageTextColor">{{message}}</f7-block>
    </f7-page>
  </f7-popup>
</template>
    
<script>
export default {
  data() {
    return {
      popupOpened: false,
      email: "",
      showMessage: false,
      messageTextColor: "blue",
      message: "n/a"
    };
  },
  methods: {
    reset() {
      this.showMessage = true;
      this.messageTextColor = "red";
      this.message = "Something went wrong!";
    }
  }
};
</script>
<style>
</style>

