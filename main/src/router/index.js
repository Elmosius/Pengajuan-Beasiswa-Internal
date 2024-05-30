import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/components/dashboard/Dashboard.vue'
import Fakultas from '@/components/datas/fakultas/Fakultas.vue'
import ProgramStudi from '@/components/datas/program_studi/ProgramStudi.vue'
import User from '@/components/datas/user/User.vue'
import FakultasCreate from '@/components/datas/fakultas/FakultasCreate.vue'
import ProgramStudiCreate from '@/components/datas/program_studi/ProgramStudiCreate.vue'
import UserCreate from '@/components/datas/user/UserCreate.vue'

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
  },
  {
    path: '/data/program-studi',
    name: 'ProgramStudi',
    component: ProgramStudi
  },
  {
    path: '/data/program-studi-create',
    name: 'ProgramStudiCreate',
    component: ProgramStudiCreate
  },
  {
    path: '/data/user',
    name: 'User',
    component: User
  },
  {
    path: '/data/user-create',
    name: 'UserCreate',
    component: UserCreate
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
