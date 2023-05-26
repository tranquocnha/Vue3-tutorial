import { createRouter, createWebHistory } from "vue-router";

const requireAuth = (to, from, next) => {
  const user = localStorage.getItem("login");

  if (!user) next({ name: "Login", params: {} });
  else next();
};

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login/index.vue"),
  },
  {
    path: "/logout",
    name: "Logout",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/logout/index.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/register/index.vue"),
  },
  {
    path: "/list",
    name: "List",
    meta: {
      layout: "auth",
    },
    beforeEnter: requireAuth,
    component: () => import("../views/Admin/ListNote/index.vue"),
  },
  {
    path: "/create",
    name: "Create",
    meta: {
      layout: "auth",
    },
    beforeEnter: requireAuth,
    component: () => import("../views/Admin/CreateNote/index.vue"),
  },
  {
    path: "/update/:id",
    name: "Update",
    meta: {
      layout: "auth",
    },
    beforeEnter: requireAuth,
    component: () => import("../views/Admin/UpdateNote/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
