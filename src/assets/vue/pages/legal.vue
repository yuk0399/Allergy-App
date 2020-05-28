<template>
  <f7-popup
    class="terms-popup"
    :opened="popupOpened"
    @popup:closed="popupOpened = false"
    closeOnEscape
    swipeToClose
  >
    <f7-page>
      <f7-navbar title="Terms and Conditions">
        <f7-nav-right>
          <f7-link popup-close>Close</f7-link>
        </f7-nav-right>
      </f7-navbar>
      <f7-block>
        <p>We collect personal information from you, including information about your:</p>
        <ul>
          <li>name</li>
          <li>contact information</li>
          <li>location</li>
          <li>computer or network</li>
          <li>interactions with us</li>
          <li>reviews and favourite restaurants</li>
        </ul>
        <p>We collect your personal information in order to:</p>
        <ul>
          <li>Provide the best possible user experience within the app and as a result of using the app.</li>
        </ul>
        <p>Providing some information is optional. If you choose not to create an account with name, email and favourite dining spots, we will be unable to provide a personalised experience that remembers your preferences.</p>
        <p>We keep your information safe by storing it in encrypted files and it will only be accessed for the purpose of maintaining your personalised experience within the app.</p>
        <p>We keep your information for 2 years at which point we securely destroy it by securely erasing all data collected.</p>
        <p>You have the right to ask for a copy of any personal information we hold about you, and to ask for it to be corrected if you think it is wrong. If you&rsquo;d like to ask for a copy of your information, or to have it corrected, please contact us at hello@dinewell.co.nz, or PO Box 1507, Christchurch, 8140.</p>
        <p>&nbsp;</p>
      </f7-block>
    </f7-page>
  </f7-popup>
</template>
    
<script>
export default {
  data() {
    return {
      popupOpened: false
    };
  }
};
</script>
<style>
</style>

