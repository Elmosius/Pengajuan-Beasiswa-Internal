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
                    {{ bd.status_1 }}
                  </p>
                </td>
                <td class="py-5 px-4">
                  <div class="flex items-center space-x-3.5">
                    <router-link
                      :to="`/beasiswa/pendaftaran-edit/${bd.id}`"
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

                    <button @click="confirmDelete(bd.id)" class="hover:text-purple-500">
                      <svg
                        class="fill-current"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.7535 2.47502H11.5879V1.9969C11.5879 1.15315 10.9129 0.478149 10.0691 0.478149H7.90352C7.05977 0.478149 6.38477 1.15315 6.38477 1.9969V2.47502H4.21914C3.40352 2.47502 2.72852 3.15002 2.72852 3.96565V4.8094C2.72852 5.42815 3.09414 5.9344 3.62852 6.1594L4.07852 15.4688C4.13477 16.6219 5.09102 17.5219 6.24414 17.5219H11.7004C12.8535 17.5219 13.8098 16.6219 13.866 15.4688L14.3441 6.13127C14.8785 5.90627 15.2441 5.3719 15.2441 4.78127V3.93752C15.2441 3.15002 14.5691 2.47502 13.7535 2.47502ZM7.67852 1.9969C7.67852 1.85627 7.79102 1.74377 7.93164 1.74377H10.0973C10.2379 1.74377 10.3504 1.85627 10.3504 1.9969V2.47502H7.70664V1.9969H7.67852ZM4.02227 3.96565C4.02227 3.85315 4.10664 3.74065 4.24727 3.74065H13.7535C13.866 3.74065 13.9785 3.82502 13.9785 3.96565V4.8094C13.9785 4.9219 13.8941 5.0344 13.7535 5.0344H4.24727C4.13477 5.0344 4.02227 4.95002 4.02227 4.8094V3.96565ZM11.7285 16.2563H6.27227C5.79414 16.2563 5.40039 15.8906 5.37227 15.3844L4.95039 6.2719H13.0785L12.6566 15.3844C12.6004 15.8625 12.2066 16.2563 11.7285 16.2563Z"
                          fill=""
                        />
                        <path
                          d="M9.00039 9.11255C8.66289 9.11255 8.35352 9.3938 8.35352 9.75942V13.3313C8.35352 13.6688 8.63477 13.9782 9.00039 13.9782C9.33789 13.9782 9.64727 13.6969 9.64727 13.3313V9.75942C9.64727 9.3938 9.33789 9.11255 9.00039 9.11255Z"
                          fill=""
                        />
                        <path
                          d="M11.2502 9.67504C10.8846 9.64692 10.6033 9.90004 10.5752 10.2657L10.4064 12.7407C10.3783 13.0782 10.6314 13.3875 10.9971 13.4157C11.0252 13.4157 11.0814 13.4157 11.1096 13.4157C11.4752 13.3875 11.7564 13.1063 11.7846 12.7407L11.9533 10.2657C11.9814 9.90004 11.7283 9.61879 11.3627 9.59067C11.3346 9.59067 11.2783 9.59067 11.2502 9.67504Z"
                          fill=""
                        />
                        <path
                          d="M6.78769 10.2658C6.75957 9.90018 6.47832 9.64693 6.11269 9.67505C5.74707 9.70318 5.49382 9.95643 5.52194 10.3221L5.69069 12.7971C5.71882 13.1064 6.0282 13.4158 6.39382 13.4158C6.42194 13.4158 6.4782 13.4158 6.50632 13.4158C6.87207 13.3876 7.12532 13.1064 7.15345 12.7408L6.98469 10.2658H6.78769Z"
                          fill=""
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
              <h2 class="font-medium">Apa kamu yakin, karena data tidak bisa kembali?</h2>
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
import Api from '../../../services/pendaftaranBeasiswaAPI'
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
        await Api.deletePendaftaran(this.selectedPendaftaranId)
        this.closeModal()
        this.fetchPendaftaran()
      } catch (error) {
        console.error('Error deleting pendaftaran: ', error)
      }
    },
    formatDate(dateString) {
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(dateString).toLocaleDateString('id-ID', options)
    }
  }
}
</script>
