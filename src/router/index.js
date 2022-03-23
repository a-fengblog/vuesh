import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index.vue'

Vue.use(VueRouter)

const routes = [
  // 进入项目展示的第一个页面  
  {
    path: '/',
    redirect: "/home"
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/home/search',
    name: 'search',
    component: () => import('../views/home/search/index.vue')
  },
  {
    path: '/content',
    name: 'content',
    component: () => import('../views/content/index.vue')
  },
  {
    path: '/home/map',
    name: 'map',
    component: () => import('../views/home/map/index.vue')
  },
  {
    path: '/home/pinpai',
    name: 'pinpai',
    component: () => import('../views/home/pinpai/index.vue')
  },
  {
    path: '/home/newgoods/:id', ///   /home/newgoods/1
    name: 'newgoods',
    component: () => import('../views/home/newgoods/index.vue')
  },
  {
    path: '/topic',
    name: 'topic',
    component: () => import('../views/topic/index.vue')
  },
  {
    path: '/opinion',
    name: 'opinion',
    component: () => import('../views/opinion/index.vue')
  },
  {
    path: '/collect',
    name: 'collect',
    component: () => import('../views/collect/index.vue')
  },
  {
    path: '/topic/detailaction',
    name: 'detailaction',
    component: () => import('../views/topic/detailaction/index.vue')
  },
  {
    path: '/category',
    name: 'category',
    component: () => import('../views/category/index.vue')
  },
  {
    path: '/category/prolist',
    name: 'categoryList',
    component: () => import('../views/category/prolist/index.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/cart/index.vue')
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('../views/order/index.vue')
  },
  {
    path: '/address',
    name: 'address',
    component: () => import('../views/address/index.vue')
  },
  {
    path: '/address/main',
    name: 'main',
    component: () => import('../views/address/main/index.vue')
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import('../views/mine/index.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
