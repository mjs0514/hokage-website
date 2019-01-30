import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import 'expose-loader?$!expose-loader?jQuery!jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VModal from 'vue-js-modal'

Vue.use(VModal, {dynamic: true})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
