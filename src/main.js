import { createApp } from 'vue'
import Home from './components/Home.vue'
import router from './router'
// import NavigationBar from './components/NavigationBar.vue';
// import Resume from './components/Resume.vue'

createApp(Home).use(router).mount('#app')
// createApp(NavigationBar).mount('navigationbar')
// createApp(Resume).mount('resume')


const app = createApp({})

app.component(
    'HomePage'
)