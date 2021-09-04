import Home from '@/pages/Home/Home.vue'
import About from '@/pages/About/About.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/about', component: About },
  { path: '/', component: Home },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
