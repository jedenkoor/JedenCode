import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '@/pages/MainPage'
import NotFoundPage from '@/pages/NotFoundPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainPage
  },
  {
    name: 'notFound',
    component: NotFoundPage,
    path: '/404'
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
