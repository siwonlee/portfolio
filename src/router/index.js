import { createRouter, createWebHistory } from "vue-router";
import Portfolio from "@/views/Portfolio_old.vue";
import Tutorial from "@/views/Tutorial.vue";

const routes = [
  { path: "/", name: "Portfolio", component: Portfolio },
  { path: "/tutorial", name: "Tutorial", component: Tutorial },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
