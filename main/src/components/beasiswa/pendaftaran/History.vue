<template>
  <div>
    <Layout>
      <WelcomeBanner>
        <div class="relative flex justify-between items-center">
          <div>
            <h1 class="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold mb-3">
              History
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
                  Nama Beasiswa
                </th>
                <th class="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">NRP</th>
                <th class="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                  Nama Mahasiswa
                </th>
                <th class="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                  Program Studi
                </th>
                <th class="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                  Email
                </th>
                <th class="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">IPK</th>
                <th class="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                  Periode Beasiswa
                </th>
                <th class="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                  Waktu Pendaftaran
                </th>
                <th class="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                  Status
                </th>
                <th class="py-4 px-4 font-medium text-black dark:text-white">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="bd in beasiswaDetail" :key="bd.id">
                <td class="py-5 px-4 xl:pl-11">
                  <p class="text-black dark:text-white">{{ bd.nama_beasiswa }}</p>
                </td>
                <td class="py-5 px-4">
                  <p class="text-black dark:text-white">{{ bd.user_id }}</p>
                </td>
                <td class="py-5 px-4">
                  <p class="text-black dark:text-white">{{ bd.nama }}</p>
                </td>
                <td class="py-5 px-4">
                  <p class="text-black dark:text-white">
                    {{ bd.nama_fakultas }} - {{ bd.nama_program_studi }}
                  </p>
                </td>
                <td class="py-5 px-4">
                  <p class="text-black dark:text-white">
                    {{ bd.email }}
                  </p>
                </td>
                <td class="py-5 px-4">
                  <p class="text-black dark:text-white">
                    {{ bd.ipk }}
                  </p>
                </td>
                <td class="py-5 px-4">
                  <p class="text-black dark:text-white">
                    {{ bd.periode }}
                  </p>
                </td>
                <td class="py-5 px-4">
                  <p class="text-black dark:text-white">
                    {{ formatDate(bd.start_at) }} s/d {{ formatDate(bd.end_at) }}
                  </p>
                </td>

                <td class="py-5 px-4">
                  <p class="text-black dark:text-white">
                    {{ getStatus(bd.status_1, bd.status_2) }}
                  </p>
                </td>
                <td class="py-5 px-4">
                  <div class="flex items-center space-x-3.5">
                    <router-link
                      v-if="isWithinDateRange(bd.start_at, bd.end_at)"
                      :to="`/beasiswa/pendaftaran-daftar-edit/${bd.id}`"
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
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                        />
                      </svg>
                    </router-link>

                    <button
                      @click="confirmDelete(bd.id)"
                      class="hover:text-purple-500"
                      v-if="isWithinDateRange(bd.start_at, bd.end_at)"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <!-- modal -->
          <Modal :isOpen="isModalOpen" @close="closeModal">
            <template v-slot:header>
              <h2 class="font-medium">Apa kamu yakin ingin tidak mengajukan beasiswamu?</h2>
            </template>
            <template v-slot:footer>
              <button
                class="bg-red-600 hover:bg-red-800 mx-3 text-white font-medium py-1 px-4 rounded"
                @click="closeModal"
              >
                Close
              </button>
              <button
                class="bg-blue-500 hover:bg-blue-800 text-white font-medium py-1 px-4 rounded"
                @click="deletePendaftaran"
              >
                Delete
              </button>
            </template>
          </Modal>
        </div>
      </div>
    </Layout>
  </div>
</template>

<script>
import Layout from '../../Layout.vue'
import WelcomeBanner from '../../dashboard/WelcomeBanner.vue'
import Api from '../../../services/beasiswaDetailAPI'
import Modal from '@/components/modal/Modal.vue'
import fetchLoggedInUser from '@/components/mixins/fetchLoggedInUser'
import fetchBeasiswaDetailByUserId from '@/components/mixins/fetchBeasiswaDetailByUserId'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'History',
  components: {
    Layout,
    WelcomeBanner,
    Modal
  },
  data() {
    return {
      beasiswaDetailList: [],
      isModalOpen: false,
      selectedPendaftaranId: null,
      error: ''
    }
  },
  mixins: [fetchLoggedInUser, fetchBeasiswaDetailByUserId],
  async mounted() {
    await this.fetchLoggedInUser()
    await this.fetchBeasiswaDetailByUserId(this.user.id)
  },

  methods: {
    isWithinDateRange(start_at, end_at) {
      const currentDate = new Date()
      return new Date(start_at) <= currentDate && currentDate <= new Date(end_at)
    },
    openModal() {
      this.isModalOpen = true
    },
    closeModal() {
      this.isModalOpen = false
      this.selectedPendaftaranId = null
    },
    confirmDelete(id) {
      this.selectedPendaftaranId = id
      this.openModal()
    },
    async deletePendaftaran() {
      if (!this.selectedPendaftaranId) return
      try {
        await Api.deleteBeasiswa(this.selectedPendaftaranId)
        this.closeModal()
        alert('Pengajuan berhasil dibatalkan!')
        this.fetchBeasiswaDetailByUserId(this.user.id)
      } catch (error) {
        console.error('Error deleting pendaftaran: ', error)
        alert('Error deleting pendaftaran: ', error)
      }
    },
    formatDate(dateString) {
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(dateString).toLocaleDateString('id-ID', options)
    },
    getStatus(status_1, status_2) {
      if (status_1 === '1') {
        return 'Disetujui Fakultas'
      } else if (status_2 === '1') {
        return 'Disetujui Prodi'
      } else {
        return 'Dalam Proses'
      }
    }
  }
}
</script>
