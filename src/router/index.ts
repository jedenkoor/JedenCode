import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import MainPage from '@/pages/MainPage.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'main',
    component: MainPage
  },
  {
    path: '/404',
    name: 'notFound',
    component: NotFoundPage
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
