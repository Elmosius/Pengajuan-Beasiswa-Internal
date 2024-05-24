import { createRouter, createWebHashHistory } from 'vue-router'
import Dashboard from '../components/dashboard/Dashboard.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
