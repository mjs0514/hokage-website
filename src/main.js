import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import 'expose-loader?$!expose-loader?jQuery!jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VModal from 'vue-js-modal'
import moment from 'moment'
import VueMomentJS from 'vue-momentjs'

Vue.use(VModal, {dynamic: true})
Vue.use(VueMomentJS, moment)
//Vue.use(require('vue-moment'));

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
