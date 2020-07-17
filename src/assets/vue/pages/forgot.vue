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
        <f7-button round fill @click="forgetPassword" title="Reset Password">Reset Password</f7-button>
      </f7-block>
    </f7-page>
  </f7-popup>
</template>
    
<script>
import {mixin} from '../../js/mixin'
import firebase from 'firebase'

export default {
  data() {
    return {
      popupOpened: false,
      email: ""
    };
  },
  methods: {
    forgetPassword() {
        console.log('forgetPassword')
        const self = this
        var auth = firebase.auth();
        if (this.email != null) {
            auth.sendPasswordResetEmail(this.email).then(function () {
                self.$store.commit('setAlertMessage', 'An reset email has been sent')
                self.$f7.popup.close(".forgot-popup");
            }).catch(function (error) {
                self.$store.commit('setAlertMessage', error)
            });
        } else {
            self.$store.commit('setAlertMessage', 'Please enter your email')
        }
    }
  }
};
</script>
<style>
</style>

