import { createWebHistory, createRouter } from "vue-router";
import Main from "@/MainPage.vue"
import Home from "@/components/Home.vue";
import Resume from "@/components/Resume.vue";

const routes = [
    {
        path: "/",
        name: "MainPage",
        component: Main
    },
    {
        path: "/home",
        name: "HomePage",
        component: Home
    },
    {
        path: "/resume",
        name: "Resume",
        component: Resume
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router