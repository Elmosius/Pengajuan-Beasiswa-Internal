<template>
  <div>
    <Layout>
      <div
        class="rounded-md border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1"
      >
        <form @submit.prevent="handleSubmit" action="">
          <div class="max-w-full overflow-x-auto p-5">
            <h2 class="font-bold leading-7 text-gray-900 text-2xl">
              Pengajuan Beasiswa {{ pendaftaran.nama_beasiswa }}
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
                    v-model="user.id"
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
                    v-model="user.email"
                    required
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
                    v-model="user.nama_fakultas"
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
                    v-model="user.nama_program_studi"
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
                    required
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
                    required
                    autofocus
                    class="block w-full indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="sm:col-span-1">
                <label for="id" class="block text-sm font-medium leading-6 text-gray-900">
                  Transkrip Nilai (.pdf)
                </label>
                <div class="mt-2">
                  <input
                    ref="transkrip_nilai"
                    type="file"
                    name="transkrip_nilai"
                    id="transkrip_nilai"
                    required
                    accept=".pdf"
                    autofocus
                    class="block w-full indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="sm:col-span-1">
                <label for="id" class="block text-sm font-medium leading-6 text-gray-900">
                  Surat Rekomendasi Dosen (.pdf)
                </label>
                <div class="mt-2">
                  <input
                    ref="surat_rekomendasi_dosen"
                    type="file"
                    name="surat_rekomendasi_dosen"
                    id="surat_rekomendasi_dosen"
                    required
                    accept=".pdf"
                    autofocus
                    class="block w-full indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="sm:col-span-1">
                <label for="id" class="block text-sm font-medium leading-6 text-gray-900">
                  Surat Pernyataan Tidak Menerima Beasiswa lain (.pdf)
                </label>
                <div class="mt-2">
                  <input
                    ref="surat_pernyataan"
                    type="file"
                    name="surat_pernyataan"
                    id="surat_pernyataan"
                    accept=".pdf"
                    required
                    autofocus
                    class="block w-full indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="sm:col-span-1">
                <label for="id" class="block text-sm font-medium leading-6 text-gray-900">
                  Dokumen Lainnya (.pdf)
                </label>
                <div class="mt-2">
                  <input
                    ref="dokumen_lainnya"
                    type="file"
                    name="dokumen_lainnya"
                    id="dokumen_lainnya"
                    accept=".pdf"
                    required
                    autofocus
                    class="block w-full indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div class="mt-6 flex items-center justify-end gap-x-6">
              <router-link
                :to="'/beasiswa/pendaftaran-daftar'"
                type="button"
                class="text-sm font-semibold leading-6 text-gray-900"
              >
                Cancel
              </router-link>
              <button
                type="submit"
                class="rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Ajukan
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
import fetchPendaftaranById from '@/components/mixins/fetchPendaftaranById'

export default {
  name: 'DaftarBeasiswa',
  components: {
    Layout
  },
  mixins: [fetchLoggedInUser, fetchPendaftaranById],
  async mounted() {
    await this.fetchLoggedInUser()
    await this.fetchPendaftaranById()
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
        dokumen: {
          transkrip_nilai: null,
          surat_rekomendasi_dosen: null,
          surat_pernyataan: null,
          dokumen_lainnya: null
        }
      },
      error: ''
    }
  },
  methods: {
    async handleSubmit() {
      try {
        const formData = new FormData()
        formData.append('pendaftaran_id', Number(this.beasiswa.pendaftaran_id))
        formData.append('user_id', this.user.id)
        formData.append('beasiswa_id', this.pendaftaran.beasiswa_id)
        formData.append('ipk', this.beasiswa.ipk)
        formData.append('poin_portofolio', this.beasiswa.poin_portofolio)
        formData.append('status_1', this.beasiswa.status_1)
        formData.append('status_2', this.beasiswa.status_2)

        const dokumen = [
          { jenis_doc_id: 1, path: this.$refs.transkrip_nilai.files[0] },
          { jenis_doc_id: 2, path: this.$refs.surat_rekomendasi_dosen.files[0] },
          { jenis_doc_id: 3, path: this.$refs.surat_pernyataan.files[0] },
          { jenis_doc_id: 4, path: this.$refs.dokumen_lainnya.files[0] }
        ]

        dokumen.forEach((doc, index) => {
          formData.append(`dokumen[${index}][jenis_doc_id]`, doc.jenis_doc_id)
          formData.append(`dokumen[${index}][path]`, doc.path.name)
        })

        await Api.createBeasiswa(formData)
        alert('Beasiswa telah diajukan !')
        this.$router.push('/beasiswa/history')
      } catch (error) {
        console.error('Error creating beasiswa:', error)
        this.error = error.response.data.message
      }
    }
  }
}
</script>
