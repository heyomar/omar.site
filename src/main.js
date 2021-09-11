import { createApp } from 'vue'
import App from './App.vue'
import './styles/app.css'
import router from './router/index'

// import EvaIcons from 'vue-eva-icons'
// Vue.use(EvaIcons)

createApp(App).use(router).mount('#app')
