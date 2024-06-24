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
import PendaftaranEdit from '@/components/beasiswa/pendaftaran/PendaftaranEdit.vue'
import Pengajuan from '@/components/beasiswa/pendaftaran/Pengajuan.vue'
import PengajuanEdit from '@/components/beasiswa/pendaftaran/PengajuanEdit.vue'
import History from '@/components/beasiswa/pendaftaran/History.vue'

import LihatLaporanPengajuan from '@/components/laporan/Lihat.vue'
import LihatLaporanPengajuanDetail from '@/components/laporan/LihatDetail.vue'
import Approval from '@/components/laporan/Approval.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true, role: ['Admin', 'Mahasiswa', 'Fakultas', 'Prodi'] }
  },

  // Login
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
    meta: { requiresGuest: true }
  },

  // FAKULTAS
  {
    path: '/data/fakultas',
    name: 'Fakultas',
    component: Fakultas,
    meta: { requiresAuth: true, role: ['Admin', 'Fakultas', 'Prodi'] }
  },
  {
    path: '/data/fakultas-create',
    name: 'FakultasCreate',
    component: FakultasCreate,
    meta: { requiresAuth: true, role: ['Admin'] }
  },
  {
    path: '/data/fakultas-edit/:id',
    name: 'FakultasEdit',
    component: FakultasEdit,
    meta: { requiresAuth: true, role: ['Admin'] }
  },

  // PROGRAM STUDI
  {
    path: '/data/program-studi',
    name: 'ProgramStudi',
    component: ProgramStudi,
    meta: { requiresAuth: true, role: ['Admin', 'Fakultas', 'Prodi'] }
  },
  {
    path: '/data/program-studi-create',
    name: 'ProgramStudiCreate',
    component: ProgramStudiCreate,
    meta: { requiresAuth: true, role: ['Admin'] }
  },
  {
    path: '/data/program-studi-edit/:id',
    name: 'ProgramStudiEdit',
    component: ProgramStudiEdit,
    meta: { requiresAuth: true, role: ['Admin'] }
  },

  // USER
  {
    path: '/data/users',
    name: 'User',
    component: User,
    meta: { requiresAuth: true, role: ['Admin', 'Fakultas', 'Prodi'] }
  },
  {
    path: '/data/user-create',
    name: 'UserCreate',
    component: UserCreate,
    meta: { requiresAuth: true, role: ['Admin'] }
  },
  {
    path: '/data/user-edit/:id',
    name: 'UserEdit',
    component: UserEdit,
    meta: { requiresAuth: true, role: ['Admin'] }
  },

  // DAFTARLIST BEASISWA
  {
    path: '/beasiswa/daftar-list',
    name: 'DaftarList',
    component: DaftarList,
    meta: { requiresAuth: true, role: ['Admin', 'Fakultas', 'Prodi'] }
  },
  {
    path: '/beasiswa/daftar-list-create',
    name: 'DaftarListCreate',
    component: DaftarListCreate,
    meta: { requiresAuth: true, role: ['Admin'] }
  },
  {
    path: '/beasiswa/daftar-list-edit/:id',
    name: 'DaftarListEdit',
    component: DaftarListEdit,
    meta: { requiresAuth: true, role: ['Admin'] }
  },

  // PENDAFTARAN
  {
    path: '/beasiswa/pendaftaran',
    name: 'Pendaftaran',
    component: Pendaftaran,
    meta: { requiresAuth: true, role: ['Admin', 'Fakultas', 'Prodi', 'Mahasiswa'] }
  },
  {
    path: '/beasiswa/pendaftaran-create',
    name: 'PendaftaranCreate',
    component: PendaftaranCreate,
    meta: { requiresAuth: true, role: ['Fakultas', 'Prodi'] }
  },
  {
    path: '/beasiswa/pendaftaran-edit/:id',
    name: 'PendaftaranEdit',
    component: PendaftaranEdit,
    meta: { requiresAuth: true, role: ['Fakultas', 'Prodi'] }
  },
  {
    path: '/beasiswa/pendaftaran-daftar/:id',
    name: 'Pengajuan',
    component: Pengajuan,
    meta: { requiresAuth: true, role: ['Mahasiswa'] }
  },
  {
    path: '/beasiswa/pendaftaran-daftar-edit/:id',
    name: 'EditPengajuan',
    component: PengajuanEdit,
    meta: { requiresAuth: true, role: ['Mahasiswa'] }
  },
  {
    path: '/beasiswa/history',
    name: 'History',
    component: History,
    meta: { requiresAuth: true, role: ['Mahasiswa'] }
  },

  // LAPORAN
  {
    path: '/laporan/lihat-pengajuan',
    name: 'LihatLaporan',
    component: LihatLaporanPengajuan,
    meta: { requiresAuth: true, role: ['Fakultas', 'Prodi', 'Admin'] }
  },
  {
    path: '/laporan/lihat-pengajuan/:id',
    name: 'LihatLaporanDetail',
    component: LihatLaporanPengajuanDetail,
    meta: { requiresAuth: true, role: ['Fakultas', 'Prodi', 'Admin'] }
  },
  {
    path: '/laporan/approval/:pendaftaranId/:userId',
    name: 'Approval',
    component: Approval,
    meta: { requiresAuth: true, role: ['Fakultas', 'Prodi'] }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('token')
  const userRole = localStorage.getItem('role') // Peran pengguna disimpan di local storage

  if (to.matched.some((record) => record.meta.requiresAuth) && !isLoggedIn) {
    // Jika route memerlukan auth dan user tidak login, redirect ke login
    next('/login')
  } else if (to.matched.some((record) => record.meta.requiresGuest) && isLoggedIn) {
    // Jika route memerlukan guest dan user sudah login, redirect ke dashboard
    next('/')
  } else if (to.matched.some((record) => record.meta.requiresAuth && record.meta.role)) {
    // Jika route memerlukan auth dan memiliki peran khusus
    if (to.meta.role.includes(userRole)) {
      next() // Jika peran pengguna termasuk dalam peran yang diizinkan, lanjutkan
    } else {
      next('/') // Jika tidak, redirect ke dashboard atau halaman lain
    }
  } else {
    next() // Selalu memanggil next()!
  }
})

export default router
