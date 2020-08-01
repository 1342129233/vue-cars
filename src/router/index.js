import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/index/index.vue";
import Login from "../views/index/login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Home,
    children: [
      {
        path: "/user",
        name: "User",
        component: () => import("../views/user/index")
      }
    ]
  },
  {
    path: "/Login",
    name: "Login",
    hidden: true,
    component: Login,
    meta: {
      title: "登录"
    }
  }
  // {
  //   path: '*',
  //   component: () => import('@/views/error-page/404'),
  //   hidden: true
  // }
];

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
