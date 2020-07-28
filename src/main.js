import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// axios  设置post请求头
import axios from "axios";
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.headers.post['Content-Type'] = 'application/json'
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
Vue.prototype.$axios = axios;

// 高德地图
import "./plugin/aMap";

// elementui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI, {
  size: "medium",
  i18n: (key, value) => i18n.t(key, value)
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
