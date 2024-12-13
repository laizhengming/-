//配置路由
import { createRouter, createWebHistory } from "vue-router";
import Login from "@/pages/Login/index.vue";
import Main from "@/pages/Main/index.vue";
import error  from "@/pages/404/index.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: Login,
        },
        {
            path: "/main",
            component: Main,
        },
        {
            path: "/:catchAll(.*)",
            component: error,
        }
    ],
})

export default router





