import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import Vuelidate from "vuelidate";

Vue.use(Vuelidate);

axios.defaults.baseURL = "https://parlorgame-scores.firebaseio.com";
axios.defaults.headers.get["Accepts"] = "app/json";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
