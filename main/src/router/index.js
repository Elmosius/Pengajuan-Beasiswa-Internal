import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/components/dashboard/Dashboard.vue'

import LoginPage from '@/components/login/Login.vue'

import Fakultas from '@/components/datas/fakultas/Fakultas.vue'
import FakultasCreate from '@/components/datas/fakultas/FakultasCreate.vue'
import FakultasEdit from '@/components/datas/fakultas/FakultasEdit.vue'

import ProgramStudi from '@/components/datas/program_studi/ProgramStudi.vue'
import ProgramStudiCreate from '@/components/datas/program_studi/ProgramStudiCreate.vue'
import ProgramStudiEdit from '@/components/datas/program_studi/ProgramStudiEdit.vue'

import User from '@/components/datas/user/User.vue'
import UserCreate from '@/components/datas/user/UserCreate.vue'
import UserEdit from '@/components/datas/user/UserEdit.vue'

import DaftarList from '@/components/beasiswa/daftar_list/DaftarList.vue'
import DaftarListCreate from '@/components/beasiswa/daftar_list/DaftarListCreate.vue'
import DaftarListEdit from '@/components/beasiswa/daftar_list/DaftarListEdit.vue'

import Pendaftaran from '@/components/beasiswa/pendaftaran/Pendaftaran.vue'
import PendaftaranCreate from '@/components/beasiswa/pendaftaran/PendaftaranCreate.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true }
  },

  // Login
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
    meta: { requiresGuest: true }
  },

  // Fakultas
  {
    path: '/data/fakultas',
    name: 'Fakultas',
    component: Fakultas,
    meta: { requiresAuth: true }
  },
  {
    path: '/data/fakultas-create',
    name: 'FakultasCreate',
    component: FakultasCreate,
    meta: { requiresAuth: true }
  },
  {
    path: '/data/fakultas-edit/:id',
    name: 'FakultasEdit',
    component: FakultasEdit,
    meta: { requiresAuth: true }
  },

  // Program Studi
  {
    path: '/data/program-studi',
    name: 'ProgramStudi',
    component: ProgramStudi,
    meta: { requiresAuth: true }
  },
  {
    path: '/data/program-studi-create',
    name: 'ProgramStudiCreate',
    component: ProgramStudiCreate,
    meta: { requiresAuth: true }
  },
  {
    path: '/data/program-studi-edit/:id',
    name: 'ProgramStudiEdit',
    component: ProgramStudiEdit,
    meta: { requiresAuth: true }
  },

  // User
  {
    path: '/data/users',
    name: 'User',
    component: User,
    meta: { requiresAuth: true }
  },
  {
    path: '/data/user-create',
    name: 'UserCreate',
    component: UserCreate,
    meta: { requiresAuth: true }
  },
  {
    path: '/data/user-edit/:id',
    name: 'UserEdit',
    component: UserEdit,
    meta: { requiresAuth: true }
  },

  // DaftarList Beasiswa
  {
    path: '/beasiswa/daftar-list',
    name: 'DaftarList',
    component: DaftarList,
    meta: { requiresAuth: true }
  },
  {
    path: '/beasiswa/daftar-list-create',
    name: 'DaftarListCreate',
    component: DaftarListCreate,
    meta: { requiresAuth: true }
  },
  {
    path: '/beasiswa/daftar-list-edit/:id',
    name: 'DaftarListEdit',
    component: DaftarListEdit,
    meta: { requiresAuth: true }
  },

  // Pendaftaran
  {
    path: '/beasiswa/pendaftaran',
    name: 'Pendaftaran',
    component: Pendaftaran,
    meta: { requiresAuth: true }
  },
  {
    path: '/beasiswa/pendaftaran-create',
    name: 'PendaftaranCreate',
    component: PendaftaranCreate,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Perloginan (Navigation Guard)
router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('token')
  if (to.matched.some((record) => record.meta.requiresAuth) && !isLoggedIn) {
    // Jika route memerlukan auth dan user tidak login, redirect ke login
    next('/login')
  } else if (to.matched.some((record) => record.meta.requiresGuest) && isLoggedIn) {
    // Jika route memerlukan guest dan user sudah login, redirect ke dashboard
    next('/')
  } else {
    next() // Selalu memanggil next()!
  }
})

export default router
