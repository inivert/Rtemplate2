import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Menu from '../views/Menu.vue'
import FindUs from '../views/FindUs.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { transition: 'slide-left' }
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu,
      meta: { transition: 'slide-right' }
    },
    {
      path: '/find-us',
      name: 'findUs',
      component: FindUs,
      meta: { transition: 'slide-right' }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: { transition: 'slide-right' }
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
      meta: { transition: 'slide-right' }
    }
  ]
})

export default router 