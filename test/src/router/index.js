import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/components/body/Main'
import Sub from '@/components/body/Sub'

Vue.use(VueRouter);

export default new VueRouter({
  routes: [{
    path: '/',
    redirect: '/A/A0'
  }, {
    name: 'gnb',
    path: '/:gnbMenu',
    component: Main,
    children: [{
      name: 'lnb',
      path: ':lnbMenu',
      component: Sub
    }]
  }]
});
