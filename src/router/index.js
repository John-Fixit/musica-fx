import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: ()=>import("../views/Home.vue")
    },
    {
      path: '/popular-music',
      name: 'popular',
      component: ()=>import("../views/PopularMusic.vue")
    },
    {
      path: '/new-music',
      name: 'Music',
      component: ()=>import('../views/NewMusic.vue')
    },
    {
      path: '/:catchAll(.*)',
      component: NotFound
    }
  ]
})

export default router
