import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/common/Home'
import Login from '@/components/common/Login'
import SignUp from '@/components/common/SignUp'
import Notice from '@/components/news/Notice'
import Event from '@/components/news/Event'
import Update from '@/components/news/Update'
import Guide from '@/components/guide/Guide'
import Match from '@/components/record/Match'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/notice',
      name: 'Notice',
      component: Notice
    },
    {
      path: '/event',
      name: 'Event',
      component: Event
    },
    {
      path: '/update',
      name: 'Update',
      component: Update
    },
    {
      path: '/guide',
      name: 'Guide',
      component: Guide
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      name: 'Match',
      path: '/match',
      component: Match,
      props: true // routing할때 param전달하기 위해 추가해야함
    }
  ]
})
