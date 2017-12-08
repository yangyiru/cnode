import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import Detail from '@/pages/detail'
import Message from '@/pages/message'
import Login from '@/pages/login'
import Me from '@/pages/me'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: 'cnode',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail,
      meta: {
        requireAuth: false
      }
    },
    {
      path: '*',
      redirect: '/home'
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
        requireAuth: false
      }
    }
  ]
})
