<template>
  <div>
    <Layout>
      <div
        class="rounded-md border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1"
      >
        <form @submit.prevent="handleSubmit" action="">
          <div class="max-w-full overflow-x-auto p-5">
            <h2 class="font-bold leading-7 text-gray-900 text-2xl">
              Registrasi Beasiswa {{ pendaftaran.nama_beasiswa }}
            </h2>

            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
              <div class="sm:col-span-1">
                <label for="id" class="block text-sm font-medium leading-6 text-gray-900">
                  NRP
                </label>
                <div class="mt-2">
                  <input
                    v-model="user.id"
                    type="text"
                    name="id"
                    id="id"
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
                    name="nama_beasiswa"
                    id="nama_beasiswa"
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
                    name="id"
                    id="id"
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
                    name="id"
                    id="id"
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
                    v-model="beasiswa.id"
                    type="text"
                    name="id"
                    id="id"
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
                    v-model="beasiswa.id"
                    type="number"
                    name="id"
                    id="id"
                    min="0"
                    placeholder="600"
                    required
                    autofocus
                    class="block w-full indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="sm:col-span-1">
                <label for="id" class="block text-sm font-medium leading-6 text-gray-900">
                  Transkrip Nilai
                </label>
                <div class="mt-2">
                  <input
                    type="file"
                    name="id"
                    id="id"
                    maxlength="5"
                    placeholder="12345"
                    required
                    autofocus
                    class="block w-full indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="sm:col-span-1">
                <label for="id" class="block text-sm font-medium leading-6 text-gray-900">
                  Surat Rekomendasi Dosen
                </label>
                <div class="mt-2">
                  <input
                    type="file"
                    name="id"
                    id="id"
                    maxlength="5"
                    placeholder="12345"
                    required
                    autofocus
                    class="block w-full indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="sm:col-span-1">
                <label for="id" class="block text-sm font-medium leading-6 text-gray-900">
                  Surat Rekomendasi Dosen
                </label>
                <div class="mt-2">
                  <input
                    type="file"
                    name="id"
                    id="id"
                    maxlength="5"
                    placeholder="12345"
                    required
                    autofocus
                    class="block w-full indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="sm:col-span-1">
                <label for="id" class="block text-sm font-medium leading-6 text-gray-900">
                  Surat Pernyataan Tidak Menerima Beasiswa lain
                </label>
                <div class="mt-2">
                  <input
                    type="file"
                    name="id"
                    id="id"
                    maxlength="5"
                    placeholder="12345"
                    required
                    autofocus
                    class="block w-full indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="sm:col-span-1">
                <label for="id" class="block text-sm font-medium leading-6 text-gray-900">
                  Dokumen Lainnya
                </label>
                <div class="mt-2">
                  <input
                    type="file"
                    name="id"
                    id="id"
                    maxlength="5"
                    placeholder="12345"
                    required
                    autofocus
                    class="block w-full indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div class="mt-6 flex items-center justify-end gap-x-6">
              <router-link
                :to="'/beasiswa/pendaftaran'"
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
import Api from '../../../services/userAPI'
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
        status_2: '0'
      }
    }
  },
  methods: {
    async handleSubmit() {
      try {
        console.info(this.beasiswa)
        await Api.createBeasiswa(this.beasiswa)
        alert('Beasiswa created successfully!')
        this.$router.push('/beasiswa/daftar-list')
      } catch (error) {
        console.error('Error creating beasiswa:', error)
      }
    }
  }
}
</script>
