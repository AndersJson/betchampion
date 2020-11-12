import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/home",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
  },
  {
    path: "/group",
    name: "Group",
    component: () =>
      import(/* webpackChunkName: "group" */ "../views/Group.vue"),
  },
  {
    path: "/games",
    name: "Games",
    component: () =>
      import(/* webpackChunkName: "games" */ "../views/Games.vue"),
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
