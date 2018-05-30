import Vue from 'vue'
import App from './App.vue'
import './assets/css/logo.css'
import router from "./router/router"
import $ from 'jquery'

import iView from 'iview'
Vue.use(iView)

import axios from 'axios'
import VueAxios from 'vue-axios'//实现axios全局引入
Vue.use(VueAxios,axios)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
