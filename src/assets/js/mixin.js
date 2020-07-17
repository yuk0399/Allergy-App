export const mixin = {
  computed: {
    alert_message() {
      return this.$store.getters.alert_message;
    }
  },
  watch: {
    alert_message(value) {
      const self = this;
      this.showToast(value);
      setTimeout(() => {
        self.$store.commit("setAlertMessage", null);
      }, 200);
    }
  },
  methods: {
    showToast(text) {
      const self = this;
      // Create toast
      if (!self.toast || self.toast.destroyed) {
        self.toast = self.$f7.toast.create({
          text: text,
          // icon: '<i class="f7-icons">exclamationmark_triangle</i>',
          position: "center",
          closeTimeout: 2000,
          destroyOnClose: true
        });
      }
      // Open it
      self.toast.open();
    }
  }
};
