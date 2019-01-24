import Vue from 'vue'
import App from './App.vue'
import router from './router'
import EvaIcons from 'vue-eva-icons'
import bulma from 'bulma'
import './styles/base.sass'

Vue.use(EvaIcons)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')