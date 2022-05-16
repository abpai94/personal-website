import { createWebHistory, createRouter } from "vue-router";
import Resume from "@/components/Resume.vue";
import Home from "@/components/Home.vue";

const routes = [
    {
        path: "/",
        name: "Home",
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