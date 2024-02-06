import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/home-page.vue'
import ResumePage from '../views/resume-page.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/resume',
        name: 'resume',
        component: ResumePage
    }
];


const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;