import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import '../public/iconfont/iconfont.css'

axios.defaults.baseURL = 'http://localhost:3001'
Vue.prototype.axios = axios;
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
