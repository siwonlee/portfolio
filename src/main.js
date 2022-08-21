import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "./index.css";
import "./assets/tailwind.css";

import router from "@/router";
// import VueSidebarMenuAkahon from "./components/Sidebar-menu-akahon.vue";
// import VueSidebarMenuAkahon from "./components/Sidebar";
createApp(App).use(router).mount("#app");
