//配置路由
import { createRouter, createWebHistory } from "vue-router";
import Login from "@/pages/Login/index.vue";
import Main from "@/pages/Main/index.vue";
import error from "@/pages/404/index.vue";
import CommentManage from "@/pages/CommentManage/index.vue";
import UserManage from "@/pages/UserManage/index.vue";
import PersonManage from "@/pages/PersonManage/index.vue";
import NewArticle from "@/pages/NewArticle/index.vue";
import ArticleManage from "@/pages/ArticleManage/index.vue";
import ClassfiedManage from "@/pages/ClassifiedManage/index.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/Login",
            component: Login,
        },
        {
            path: "/",
            component: Main,
            children: [
                {
                    path: "/commentManage",
                    component: CommentManage,
                },
                {
                    path: "/userManage",
                    component: UserManage,
                },
                {
                    path: "/personManage",
                    component: PersonManage,
                }, {
                    path: "/newarticle",
                    component: NewArticle,
                },
                {
                    path: "/articleManage",
                    component: ArticleManage,
                },
                {
                    path: "/classfiedManage",
                    component: ClassfiedManage,
                }
            ]
        },
        {
            path: "/:catchAll(.*)",
            component: error,
        }
    ],
})

export default router





