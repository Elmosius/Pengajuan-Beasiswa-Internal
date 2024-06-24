<template>
  <div>
    <Layout>
      <WelcomeBanner>
        <div class="relative flex justify-between items-center">
          <div>
            <h1 class="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold mb-3">
              Beasiswa {{ pendaftaran.nama_beasiswa }} Periode {{ pendaftaran.periode }}
            </h1>
            <p class="dark:text-indigo-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ex?
            </p>
          </div>
        </div>
      </WelcomeBanner>

      <div
        class="rounded-md border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1"
      >
        <div class="max-w-full overflow-x-auto">
          <table class="w-full table-auto">
            <thead>
              <tr class="bg-gray-100 text-left dark:bg-meta-4">
                <th class="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                  NRP
                </th>
                <th class="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                  Nama Mahasiswa
                </th>
                <th class="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                  Program Studi
                </th>
                <th class="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                  Status Fakultas
                </th>
                <th class="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                  Status Prodi
                </th>
                <th class="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                  Tanggal Pengumpulan
                </th>
                <th class="py-4 px-4 font-medium text-black dark:text-white" v-if="isAuthorized(['Fakultas', 'Prodi'])">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="b in filteredBeasiswa" :key="b.id">
                <td class="py-5 px-4 xl:pl-11">
                  <p class="text-black dark:text-white">{{ b.user_id }}</p>
                </td>
                <td class="py-5 px-4">
                  <p class="text-black dark:text-white">{{ b.nama }}</p>
                </td>
                <td class="py-5 px-4">
                  <p class="text-black dark:text-white">
                    {{ b.nama_fakultas }} - {{ b.nama_program_studi }}
                  </p>
                </td>
                <td class="py-5 px-4">
                  <p class="text-black dark:text-white">{{ b.status_1 }}</p>
                </td>
                <td class="py-5 px-4">
                  <p class="text-black dark:text-white">{{ b.status_2 }}</p>
                </td>
                <td class="py-5 px-4">
                  <p class="text-black dark:text-white">
                    {{ formatDate(b.created_at) }}
                  </p>
                </td>
                <td class="py-5 px-4" v-if="isAuthorized(['Fakultas', 'Prodi'])">
                  <div class="flex items-center space-x-3.5">
                    <router-link
                      :to="`/laporan/approval/${b.id}/${b.user_id}`"
                      class="hover:text-purple-500"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                    </router-link>
                  </div>
                </td>
              </tr>
              <!-- Tambahkan baris lain sesuai kebutuhan -->
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  </div>
</template>

<script>
import Layout from '../Layout.vue'
import WelcomeBanner from '../dashboard/WelcomeBanner.vue'
import fetchBeasiswaDetailByPendaftaranId from '../mixins/fetchBeasiswaDetailByPendaftaranId'
import fetchPendaftaranById from '../mixins/fetchPendaftaranById'
import fetchLoggedInUser from '../mixins/fetchLoggedInUser'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'LihatLaporanDetail',
  components: {
    Layout,
    WelcomeBanner
  },
  mixins: [fetchBeasiswaDetailByPendaftaranId, fetchPendaftaranById, fetchLoggedInUser],
  data() {
    return {}
  },
  async mounted() {
    await this.fetchBeasiswaDetailByPendaftaranId()
    await this.fetchPendaftaranById()
    await this.fetchLoggedInUser()
  },
  computed: {
    filteredBeasiswa() {
      return this.beasiswa
        .filter((b) => {
          if (this.user.nama_role === 'Fakultas') {
            return b.nama_fakultas === this.user.nama_fakultas && b.status_2 === '1'
          } else if (this.user.nama_role === 'Prodi') {
            console.info(b.nama_program_studi)
            console.info(this.user.nama_program_studi)
            return b.nama_program_studi === this.user.nama_program_studi
          }
          return true
        })
        .map((b) => ({
          ...b,
          status_1: b.status_1 === '1' ? 'Disetujui' : 'Tidak Disetujui',
          status_2: b.status_2 === '1' ? 'Disetujui' : 'Tidak Disetujui'
        }))
    }
  },
  methods: {
    isAuthorized(requiredRoles) {
      const role = localStorage.getItem('role')
      return requiredRoles.includes(role)
},
    formatDate(dateString) {
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(dateString).toLocaleDateString('id-ID', options)
    }
  }
}
</script>
