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
          label="Name"
          type="text"
          placeholder="Your display name"
          :value="name"
          @input="name = $event.target.value"
        ></f7-list-input>
        <f7-list-input
          label="Location"
          type="select"
          :value="location"
          @input="location = $event.target.value"
          defaultValue="suburb"
          placeholder="Please choose..."
          >
          <option value="city">Christchurch City</option>
          <option value="suburb">Christchurch Suburb</option>
        </f7-list-input>
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
      name: "",
      location: "",
      email: "",
      password: ""
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
      payload.name = this.name
      payload.location = this.location
      this.$store.dispatch('signUp', payload)
    }
  }
};
</script>
<style>
</style>

