import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/index/index.vue";
import Login from "../views/index/login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/Index",
    name: "Index",
    component: Home
  },
  {
    path: "/",
    name: "Login",
    component: Login
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
