<template>
  <f7-app :params="f7params" class="color-theme-pink">
    <f7-views tabs >
      <!-- Tabbar for switching views-tabs -->
      <f7-toolbar tabbar labels bottom >
        
        <f7-link
          tab-link="#view-home"
          tab-link-active
          icon-ios="f7:home_fil"
          icon-aurora="f7:home_fil"
          icon-md="material:home"
          text="Restaurants"
        ></f7-link>
        <f7-link
          tab-link="#view-profile"
          icon-ios="f7:persons_round_fill"
          icon-aurora="f7:persons_round_fill"
          icon-md="material:group"
          text="My Profile"
        ></f7-link>
      </f7-toolbar>

      <!-- Your main view/tab, should have "view-main" class. It also has "tab-active" class -->
      <f7-view id="view-home" main tab tab-active url="/"></f7-view>

      <!-- Catalog View -->
      <f7-view id="view-profile" name="profile" tab url="/profile"></f7-view>

    </f7-views>
  </f7-app>
</template>
<script>
import { f7App, f7View } from "framework7-vue";
import routes from "./routes.js";

export default {
  components: {
    f7App,
    f7View
  },
  data() {
    return {
      f7params: {
        theme: "md",
        routes,
        id: "io.jok0436.DineWell",
        autoDarkTheme: true
      }
    };
  }
};
</script>
