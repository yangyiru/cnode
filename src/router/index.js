import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import Message from '@/pages/message'
import Login from '@/pages/login'
import Me from '@/pages/me'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: 'cnode',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/login',
      component: Login,
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/message',
      component: Message,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/me',
      component: Me,
      meta: {
        requireAuth: true
      }
    }
  ]
})
