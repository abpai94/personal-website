import { createWebHistory, createRouter } from "vue-router"
import Main from "@/MainPage.vue"
import Home from "@/components/Home.vue"
import Resume from "@/components/Resume.vue"

const routes = [
    {
        path: "/",
        name: "MainPage",
        component: Main,
        meta: {
            title: 'Abhishek Pai | Software Engineer'
        }
    },
    {
        path: "/home",
        name: "HomePage",
        component: Home,
        meta: {
            title: 'Abhishek Pai | Home'
        }
    },
    {
        path: "/resume",
        name: "Resume",
        component: Resume,
        meta: {
            title: 'Abhishek Pai | Resume'
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

// Vue.use(router);