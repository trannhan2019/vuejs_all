import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Dashboard from "../views/Dashboard.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },

    {
      path: "/dashboard",
      name: "Dashboard",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Dashboard.vue"),
    },

    {
      path: "/login",
      name: "Login",
      component: () => import("../views/auth/Login.vue"),
    },

    {
      path: "/register",
      name: "Register",
      component: () => import("../views/auth/Register.vue"),
    },
  ],
});

export default router;
