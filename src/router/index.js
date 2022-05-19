import { createWebHistory, createRouter } from "vue-router"
import Main from "@/MainPage.vue"
import Home from "@/components/Home.vue"
import Resume from "@/components/Resume.vue"
import { nextTick } from "vue"

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
        component: Home
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

// router.beforeEach((to, from) => {
//     console.log("beforeEach")
//     console.log(to)
//     return to
// })

export default router