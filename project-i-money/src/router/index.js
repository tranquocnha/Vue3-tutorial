import { createRouter, createWebHistory } from "vue-router";
import { projectAuth } from "../config/firebase";

//Authu Guards
const requireAuth = (next) => {
  const user = projectAuth.currentUser;

  if (!user) {
    next({ name: "Login", params: {} });
  } else {
    next();
  }
};

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/index.vue"),
  },
  {
    path: "/register",
    name: "Register",
    meta: {
      layout: "auth",
    },
    component: () => import("../views/register.vue"),
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      layout: "auth",
    },
    component: () => import("../views/login.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../views/profile.vue"),
    beforeEnter: requireAuth,
  },
  {
    path: "/logout",
    name: "Logout",
    component: () => import("../views/logout.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
