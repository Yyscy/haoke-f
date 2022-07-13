import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    // 默认
    path: '/',
    component: () => import('@/views/Login/login')
  },
  {
    // 登录
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/login')
  },
  {
    // 注册
    path: '/signin',
    name: 'signin',
    component: () => import('@/views/Login/signin')
  }
]

const router = new VueRouter({
  routes
})

export default router
