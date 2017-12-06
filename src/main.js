// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'lib-flexible'  // 适配方案
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fastclick from 'fastclick' // 解决移动端click时间延时300ms问题
import 'assets/css/index.less'

fastclick.attach(document.body)
Vue.config.productionTip = false

// 路由守卫
router.beforeEach((to, from, next) => {
  console.log('全局路由控制')
  if (to.matched.some(route => route.meta.requireAuth)) {
    let user = window.window.sessionStorage.user
    user = user && JSON.parse(user)
    user = {...store.state.userInfo, ...user}
    console.log(user)
    if (user.userId) {
      next()
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
