<template>
  <f7-app :params="f7params" class="color-theme-pink">
    <f7-view url="/" :main="true">
      <f7-navbar>
        <div class="title">DineWell</div>
      </f7-navbar>
    </f7-view>
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