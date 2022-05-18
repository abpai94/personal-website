import { createApp } from 'vue'
import router from './router'
import MainPage from './MainPage.vue'
import Home from "@/components/Home.vue"
import Resume from "@/components/Resume.vue"
import 'typeface-roboto/index.css'

createApp(MainPage).use(router).mount('#app')

const app = createApp({
    MainPage,
    Home,
    Resume
})

app.component(
    'MainPage',
    'HomePage',
    'Resume'
)