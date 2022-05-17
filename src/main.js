import { createApp } from 'vue'
import router from './router'
import MainPage from './MainPage.vue'

createApp(MainPage).use(router).mount('#app')

const app = createApp({})

app.component(
    'MainPage',
    'HomePage',
    'Resume'
)
