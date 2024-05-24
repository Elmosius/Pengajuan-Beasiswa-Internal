import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/components/dashboard/Dashboard.vue'
import Fakultas from '@/components/datas/fakultas/Fakultas.vue'
import FakultasCreate from '@/components/datas/fakultas/FakultasCreate.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/data/fakultas',
    name: 'Fakultas',
    component: Fakultas
  },
  {
    path: '/data/fakultas-create',
    name: 'FakultasCreate',
    component: FakultasCreate
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
