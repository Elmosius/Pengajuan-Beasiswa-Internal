<template>
  <div>
    <Layout>
      <div
        class="rounded-md border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1"
      >
        <form @submit.prevent="updatePengajuan" action="">
          <div class="max-w-full overflow-x-auto p-5">
            <h2 class="font-bold leading-7 text-gray-900 text-2xl">
              Edit Pengajuan Beasiswa {{ beasiswa.nama_beasiswa }} -
              {{ beasiswa.periode }}
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
                    v-model="beasiswa.user_id"
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
                <label
                  for="nama_beasiswa"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email
                </label>
                <div class="mt-2">
                  <input
                    v-model="beasiswa.email"
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
                <label for="id" class="block text-sm font-medium leading-6 text-gray-900">
                  Fakultas
                </label>
                <div class="mt-2">
                  <input
                    v-model="beasiswa.nama_fakultas"
                    type="text"
                    name="fakultas_id"
                    id="fakultas_id"
                    placeholder="12345"
                    readonly
                    class="block w-full indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="sm:col-span-1">
                <label for="id" class="block text-sm font-medium leading-6 text-gray-900">
                  Program Studi
                </label>
                <div class="mt-2">
                  <input
                    v-model="beasiswa.nama_program_studi"
                    type="text"
                    name="program_studi_id"
                    id="program_studi_id"
                    readonly
                    placeholder="12345"
                    class="block w-full indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="sm:col-span-1">
                <label for="id" class="block text-sm font-medium leading-6 text-gray-900">
                  IPK
                </label>
                <div class="mt-2">
                  <input
                    v-model="beasiswa.ipk"
                    type="text"
                    name="ipk"
                    id="ipk"
                    maxlength="4"
                    placeholder="4.0"
                    autofocus
                    class="block w-full indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="sm:col-span-1">
                <label for="id" class="block text-sm font-medium leading-6 text-gray-900">
                  Poin Portofolio
                </label>
                <div class="mt-2">
                  <input
                    v-model="beasiswa.poin_portofolio"
                    type="number"
                    name="poin_portofolio"
                    id="poin_portofolio"
                    placeholder="600"
                    autofocus
                    class="block w-full indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="sm:col-span-1" v-for="(dokumen, index) in beasiswa.dokumen" :key="index">
                <label
                  :for="'dokumen_' + index"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  {{ dokumen.jenis_dokumen }} (.pdf)
                </label>
                <div class="mt-2">
                  <input
                    :ref="'dokumen_' + index"
                    type="file"
                    :name="'dokumen_' + index"
                    :id="'dokumen_' + index"
                    accept=".pdf"
                    class="block w-full indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div v-if="dokumen.path">
                  <a
                    :href="getFileUrl(dokumen.path)"
                    target="_blank"
                    class="text-blue-600 underline text-xs"
                  >
                    Lihat {{ dokumen.jenis_dokumen }} sebelumnya
                  </a>
                </div>
              </div>
            </div>

            <div class="mt-6 flex items-center justify-end gap-x-6">
              <router-link
                :to="'/beasiswa/history'"
                type="button"
                class="text-sm font-semibold leading-6 text-gray-900"
              >
                Cancel
              </router-link>
              <button
                type="submit"
                class="rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Edit
              </button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  </div>
</template>

<script>
import Layout from '../../Layout.vue'
import Api from '../../../services/beasiswaDetailAPI'
import fetchLoggedInUser from '@/components/mixins/fetchLoggedInUser'
import fetchBeasiswaDetailById from '@/components/mixins/fetchBeasiswaDetailById'

export default {
  name: 'EditPengajuan',
  components: {
    Layout
  },
  mixins: [fetchLoggedInUser, fetchBeasiswaDetailById],
  async mounted() {
    await this.fetchLoggedInUser()
    await this.fetchBeasiswaDetailById()
  },
  data() {
    return {
      beasiswa: {
        pendaftaran_id: '',
        user_id: '',
        beasiswa_id: '',
        ipk: '',
        poin_portofolio: '',
        status_1: '0',
        status_2: '0',
        dokumen: []
      },
      error: ''
    }
  },
  methods: {
    async updatePengajuan() {
      try {
        const formData = new FormData()
        formData.append('pendaftaran_id', Number(this.beasiswa.pendaftaran_id))
        formData.append('user_id', this.beasiswa.user_id)
        formData.append('beasiswa_id', this.beasiswa.beasiswa_id)
        formData.append('ipk', this.beasiswa.ipk)
        formData.append('poin_portofolio', this.beasiswa.poin_portofolio)
        formData.append('status_1', this.beasiswa.status_1)
        formData.append('status_2', this.beasiswa.status_2)

        const jenisDoc = []

        this.beasiswa.dokumen.forEach((dokumen, index) => {
          const file = this.$refs['dokumen_' + index][0].files[0]
          if (file) {
            formData.append(`dokumen[${index}][path]`, file)
            jenisDoc.push({ jenis_doc_id: dokumen.jenis_doc_id })
          } else {
            formData.append(`dokumen[${index}][path]`, dokumen.path)
            jenisDoc.push({ jenis_doc_id: dokumen.jenis_doc_id })
          }
        })

        formData.append('jenis_doc', JSON.stringify(jenisDoc))

        await Api.updateBeasiswa(this.beasiswa.id, formData)
        alert('Pendaftaran updated successfully!')
        this.$router.push('/beasiswa/history')
      } catch (error) {
        console.error('Error updating pendaftaran: ', error)
        this.error = error.response.data.message
      }
    },
    getFileUrl(path) {
      return `http://localhost:3000${path}`
    }
  }
}
</script>
