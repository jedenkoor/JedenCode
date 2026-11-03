import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { MainPage } from '@/pages/main'
import { NotFoundPage } from '@/pages/not-found'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'main',
    component: MainPage
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: NotFoundPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
