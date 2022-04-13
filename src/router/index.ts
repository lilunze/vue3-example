/*
 * @Author: lilunze
 * @LastEditors: lilunze
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

// 静态路由配置
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    meta: {
      permission: 'home'
    },
    component: () => import('../pages/home.vue')
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('../pages/auth.vue')
  }
]

// 动态路由
// const asyncRoutes: Array<RouteRecordRaw> = []

const router = createRouter({
  history: createWebHistory(), // hash模式：createWebHashHistory, history模式：createWebHistory
  // scrollBehavior: () => ({
  //   y: 0,
  // }),
  routes
})

export default router
