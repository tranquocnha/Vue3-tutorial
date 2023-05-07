import { createRouter, createWebHistory } from "vue-router";
import Home from "../page/Home.vue";
import Transaction from "../page/Transactions.vue";
import TransactionDetail from "../page/Transactions-detail.vue";
import NotFound from "../page/404.vue";

const routes = [
  {
    path: "/",
    component: Home,
    name: "over-view",
  },
  {
    path: "/transaction",
    component: Transaction,
    name: "transaction-route",
  },
  {
    path: "/transaction/:id",
    component: TransactionDetail,
    name: "transaction-detail",
  },
  {
    path: "/ts",
    redirect: "/transaction",
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
