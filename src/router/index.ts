import {createRouter, createWebHistory} from "vue-router";
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import Scriptcat from "@/views/Scriptcat.vue";
import OCS from "@/views/OCS.vue";
import NCVT from "@/views/NCVT.vue";
import PutDemand from "@/views/PutDemand.vue";
import NotFound from "@/views/404.vue";

const routes = [
  {path: "/", redirect: "/scriptcat"},
  {path: "/scriptcat", component: Scriptcat},
  {path: "/ocs", component: OCS},
  {path: "/ncvt", component: NCVT},
  {path: "/demand", component: PutDemand},
  {path: "/404", component: NotFound},
  {path: "/:pathMatch(.*)*", redirect: "/404"}
]
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 监听路由变化并更新进度条
router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
