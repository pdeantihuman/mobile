import Vue from 'vue'
import App from './App.vue'
import './assets/css/logo.css'
import router from "./router/router"
import $ from 'jquery'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// Vue.config.productionTip = false

/* eslint-disable no-new */
//vue1.*写法：
// new Vue({
//     el: '#app',
//     template: '<App/>',
//     components: { App }
// })
