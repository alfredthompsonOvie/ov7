import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/portfolio',
      name: 'portfolioView',
      component: () => import('../views/portfolio/PortfolioView.vue')
    },
    {
      path: '/portfolio/:id',
      name: 'projectDetailsView',
      component: () => import('../views/portfolio/ProjectDetailsView.vue'),
      props: true,
    },
    {
      path: '/contact',
      name: 'ContactView',
      component: () => import('../views/ContactView.vue')
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    if (to.hash ) {
      return { el: to.hash, top: 5, behavior: "smooth"};
    }
    if (savedPosition) {
  
      return savedPosition;
    } 
    return {
      top: 0,
      behavior: "smooth"
    }
  },
})

export default router
