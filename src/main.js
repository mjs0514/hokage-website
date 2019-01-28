import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import 'expose-loader?$!expose-loader?jQuery!jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
