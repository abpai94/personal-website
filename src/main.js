import { createApp } from 'vue'
import router from './router'
import MainPage from './MainPage.vue'
import Home from "@/components/Home.vue"
import Resume from "@/components/Resume.vue"
import 'typeface-roboto/index.css'
import { createTransformContext } from '@vue/compiler-core'

createApp(MainPage)
    .use(router)
    .mount('#MainPage')

createApp(Home)
    .use(router)
    // .mount('#Home')