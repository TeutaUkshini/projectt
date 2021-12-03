import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

Vue.prototype.$loggedIn = sessionStorage.getItem("userIsLogged") !== null;

new Vue({
  router,
  vuetify,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
