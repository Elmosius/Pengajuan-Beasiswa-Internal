import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/components/dashboard/Dashboard.vue'
import Layout from '@/components/Layout.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Layout
  },
  {
    path: '/data/fakultas',
    name: 'fakultas',
    component: Dashboard
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
