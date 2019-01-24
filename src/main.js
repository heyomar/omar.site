import Vue from 'vue'
import App from './App.vue'
import router from './router'
import bulma from 'bulma'
import './styles/base.sass'
const eva = require('eva-icons');

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')