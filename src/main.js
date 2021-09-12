import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import './styles/app.css'

import EvaIcons from 'vue-eva-icons'
Vue.use(EvaIcons)

createApp(App).use(router).mount('#app')
