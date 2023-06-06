import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.

      // component: () => import('../views/AboutView.vue')
    },
    {
      path: "/jobs",
      name: "jobs",
      component: ()=>import("../views/JobsView.vue")
    },
    {
      path: '/jobs/:id',
      name: 'Job_detail',
      component: ()=>import("../views/JobDetails.vue"),
      props: true
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/:catchAll(.*)',
      component: NotFound
    },
    {
      path: '/api',
      name: 'Api',
      component: ()=>import('../views/Api.vue')
    },
    {
      path: '/music',
      name: 'Music',
      component: ()=>import('../views/Musica.vue')
    }
  ]
})

export default router
