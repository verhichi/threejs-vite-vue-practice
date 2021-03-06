import { createRouter, createWebHistory } from 'vue-router'

import Fundamental from '@/pages/Basics/Fundamental/Fundamental.vue'
import Responsive from '@/pages/Basics/Responsive/Responsive.vue'
import Primitives from '@/pages/Fundamentals/Primitives/Primitives.vue'
import Home from '@/pages/Home/Home.vue'

const routes = [
  { path: '/basics/fundamental', component: Fundamental },
  { path: '/basics/responsive', component: Responsive },
  { path: '/fundamentals/primitives', component: Primitives },
  { path: '/', component: Home },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
