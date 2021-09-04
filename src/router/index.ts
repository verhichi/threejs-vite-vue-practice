import { createRouter, createWebHistory } from 'vue-router'

import About from '@/pages/About/About.vue'
import Home from '@/pages/Home/Home.vue'

const routes = [
  { path: '/about', component: About },
  { path: '/', component: Home },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
