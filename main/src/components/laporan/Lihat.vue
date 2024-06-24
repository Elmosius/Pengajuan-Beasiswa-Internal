<template>
  <div>
    <Layout>
      <WelcomeBanner>
        <div class="relative flex justify-between items-center">
          <div>
            <h1 class="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold mb-3">
              Lihat Laporan Pengajuan Beasiswa
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
                  Periode
                </th>
                <th class="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                  Tanggal Pendaftaran
                </th>
                <th class="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                  Nama Beasiswa
                </th>
                <th class="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                  Deskripsi
                </th>
                <th class="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                  Status
                </th>

                <th class="py-4 px-4 font-medium text-black dark:text-white">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="p in formattedPendaftaranList" :key="p.id">
                <td class="py-5 px-4 xl:pl-11">
                  <p class="text-black dark:text-white">{{ p.periode }}</p>
                </td>
                <td class="py-5 px-4">
                  <p class="text-black dark:text-white">
                    {{ formatDate(p.start_at) }} - {{ formatDate(p.end_at) }}
                  </p>
                </td>
                <td class="py-5 px-4">
                  <p class="text-black dark:text-white">{{ p.nama_beasiswa }}</p>
                </td>
                <td class="py-5 px-4">
                  <p class="text-black dark:text-white">{{ p.deskripsi }}</p>
                </td>
                <td class="py-5 px-4">
                  <p class="text-black dark:text-white">{{ p.status }}</p>
                </td>

                <td class="py-5 px-4">
                  <div class="flex items-center space-x-3.5">
                    <router-link
                      :to="`/laporan/lihat-pengajuan/${p.id}`"
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
import fetchPendaftaran from '../mixins/fetchPendaftaran'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'LihatLaporan',
  components: {
    Layout,
    WelcomeBanner
  },
  mixins: [fetchPendaftaran],
  data() {
    return {
      pendaftaranList: []
    }
  },
  mounted() {
    this.fetchPendaftaran()
  },
  computed: {
    formattedPendaftaranList() {
      return this.pendaftaranList.map((p) => ({
        ...p,
        status: p.status === '1' ? 'Aktif' : 'Tidak Aktif'
      }))
    }
  },
  methods: {
    formatDate(dateString) {
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(dateString).toLocaleDateString('id-ID', options)
    }
  }
}
</script>
