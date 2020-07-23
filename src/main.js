import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// axios
import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
Vue.prototype.$axios = axios;

// 高德地图
import "./plugin/aMap";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
