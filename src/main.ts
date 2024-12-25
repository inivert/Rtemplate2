import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'

// Import PrimeVue styles
import 'primevue/resources/themes/lara-light-amber/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeflex/primeflex.css'

// Import routes
import Home from './views/Home.vue'
import Menu from './views/Menu.vue'
import FindUs from './views/FindUs.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/menu', component: Menu },
    { path: '/find-us', component: FindUs },
    { path: '/about', component: About },
    { path: '/contact', component: Contact }
  ]
})

const app = createApp(App)

// Use plugins
app.use(PrimeVue, { ripple: true })
app.use(MotionPlugin)

// Register PrimeVue components
app.component('PButton', Button)

app.use(router)
app.mount('#app')
