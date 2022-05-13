import { createApp } from 'vue'
import App from './App.vue'
// import NavigationBar from './components/NavigationBar.vue';
import Resume from './components/Resume.vue'

createApp(App).mount('#app')
// createApp(NavigationBar).mount('#navigationbar')
createApp(Resume).mount('resume')


const app = createApp({})

app.component(
    'Resume'
)