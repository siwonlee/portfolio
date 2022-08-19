import { createRouter, createWebHistory } from "vue-router";
import Portfolio from "@/views/Portfolio.vue";
import Tutorial from "@/views/Tutorial.vue";
import Contact from "@/views/Contact.vue";

const routes = [
  { path: "/", name: "Portfolio", component: Portfolio },
  { path: "/tutorial", name: "Tutorial", component: Tutorial },
  { path: "/contact", name: "Contact", component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
