import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/index/index.vue";
import Login from "../views/index/login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Home
  },
  {
    path: '/Login',
    name: 'Login',
    hidden: true,
    component: Login,
    meta: {
      title: '登录'
    }
  },
  {
    path: '*',
    component: () => import('@/views/error-page/404'),
    hidden: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
