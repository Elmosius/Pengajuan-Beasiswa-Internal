<template>
  <div>
    <Layout>
      <div
        class="rounded-md border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1"
      >
        <div class="max-w-full overflow-x-auto p-5">
          <h2 class="font-bold leading-7 text-gray-900 text-2xl">
            Approval {{ beasiswaDetail.nama }} Beasiswa {{ beasiswaDetail.nama_beasiswa }} Periode
            {{ beasiswaDetail.periode }}
          </h2>
          <!-- munculin error -->
          <div v-if="error" class="p-3 mb-2 mt-4 bg-red-200 text-red-800 rounded">
            {{ error }}
          </div>
          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
            <div class="sm:col-span-1">
              <label for="id" class="block text-sm font-medium leading-6 text-gray-900">
                NRP
              </label>
              <div class="mt-2">
                <input
                  v-model="beasiswaDetail.user_id"
                  type="text"
                  name="user_id"
                  id="user_id"
                  readonly
                  placeholder="12345"
                  class="block w-full indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div class="sm:col-span-1">
              <label for="email" class="block text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <div class="mt-2">
                <input
                  v-model="beasiswaDetail.email"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Beasiswa Internal Akademik"
                  readonly
                  class="block w-full indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div class="sm:col-span-1">
              <label for="nama_fakultas" class="block text-sm font-medium leading-6 text-gray-900">
                Fakultas
              </label>
              <div class="mt-2">
                <input
                  v-model="beasiswaDetail.nama_fakultas"
                  type="text"
                  name="nama_fakultas"
                  id="nama_fakultas"
                  placeholder="12345"
                  readonly
                  class="block w-full indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div class="sm:col-span-1">
              <label
                for="nama_program_studi"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Program Studi
              </label>
              <div class="mt-2">
                <input
                  v-model="beasiswaDetail.nama_program_studi"
                  type="text"
                  name="nama_program_studi"
                  id="nama_program_studi"
                  readonly
                  placeholder="12345"
                  class="block w-full indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div class="sm:col-span-1">
              <label for="ipk" class="block text-sm font-medium leading-6 text-gray-900">
                IPK
              </label>
              <div class="mt-2">
                <input
                  v-model="beasiswaDetail.ipk"
                  type="text"
                  name="ipk"
                  id="ipk"
                  maxlength="4"
                  placeholder="4.0"
                  readonly
                  class="block w-full indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div class="sm:col-span-1">
              <label
                for="poin_portofolio"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Poin Portofolio
              </label>
              <div class="mt-2">
                <input
                  v-model="beasiswaDetail.poin_portofolio"
                  type="number"
                  name="poin_portofolio"
                  id="poin_portofolio"
                  placeholder="600"
                  readonly
                  class="block w-full indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div class="sm:col-span-1">
              <label for="status_1" class="block text-sm font-medium leading-6 text-gray-900">
                Status Fakultas
              </label>
              <div class="mt-2">
                <select
                  v-model="status_1"
                  name="status_1"
                  id="status_1"
                  class="block w-full indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option value="0">Tidak Disetujui</option>
                  <option value="1">Disetujui</option>
                </select>
              </div>
            </div>

            <div class="sm:col-span-1">
              <label for="status_2" class="block text-sm font-medium leading-6 text-gray-900">
                Status Prodi
              </label>
              <div class="mt-2">
                <select
                  v-model="status_2"
                  name="status_2"
                  id="status_2"
                  class="block w-full indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option value="0">Tidak Disetujui</option>
                  <option value="1">Disetujui</option>
                </select>
              </div>
            </div>

            <div
              class="sm:col-span-1"
              v-for="(dokumen, index) in beasiswaDetail.dokumen"
              :key="index"
            >
              <label
                :for="'dokumen_' + index"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                {{ dokumen.jenis_dokumen }} (.pdf)
              </label>
              <div class="mt-2">
                <a
                  :href="getFileUrl(dokumen.path)"
                  target="_blank"
                  class="text-blue-600 underline text-xs"
                >
                  Lihat {{ dokumen.jenis_dokumen }}
                </a>
              </div>
            </div>
          </div>

          <div class="mt-6 flex items-center justify-end gap-x-6">
            <button
              @click="goBack"
              type="button"
              class="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancel
            </button>
            <button
              @click="approveBeasiswa"
              class="rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Approve
            </button>
          </div>
        </div>
      </div>
    </Layout>
  </div>
</template>

<script>
import Layout from '../Layout.vue'
import fetchBeasiswaDetailByPendaftaranUserId from '../mixins/fetchBeasiswaDetailByPdUserId'
import Api from '@/services/beasiswaDetailAPI'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Approval',
  components: {
    Layout
  },
  mixins: [fetchBeasiswaDetailByPendaftaranUserId],
  async mounted() {
    await this.fetchBeasiswaDetailByPendaftaranUserId()
  },
  data() {
    return {
      error: '',
      status_1: '0',
      status_2: '0'
    }
  },
  methods: {
    getFileUrl(path) {
      return `http://localhost:3000${path}`
    },
    async approveBeasiswa() {
      try {
        const data = {
          status_1: this.status_1,
          status_2: this.status_2
        }

        await Api.updateBeasiswaStatus(this.beasiswaDetail.id, data)
        alert('Pendaftaran approved successfully!')
        this.$router.push(`/laporan/lihat-pengajuan/${this.beasiswaDetail.pendaftaran_id}`)
      } catch (error) {
        console.error('Error approving pendaftaran: ', error)
        this.error = error.response ? error.response.data.message : error.message
      }
    },
    goBack() {
      this.$router.go(-1)
    }
  },
  watch: {
    beasiswaDetail(newDetail) {
      this.status_1 = newDetail.status_1 || '0'
      this.status_2 = newDetail.status_2 || '0'
    }
  }
}
</script>
