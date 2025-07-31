import {createRouter, createWebHistory} from "vue-router";
import Scriptcat from "@/views/Scriptcat.vue";
import OCS from "@/views/OCS.vue";
import NCVT from "@/views/NCVT.vue";
import NotFound from "@/views/404.vue";

const routes = [
  { path: "/", redirect: "/scriptcat" },
  {path: "/scriptcat", component: Scriptcat},
  {path: "/ocs", component: OCS},
  {path: "/ncvt", component: NCVT},
  {path: "/404", component: NotFound},
  {path: "/:pathMatch(.*)*", redirect: "/404"}
]
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
