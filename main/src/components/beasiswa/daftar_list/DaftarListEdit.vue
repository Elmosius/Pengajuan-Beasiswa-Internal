<template>
  <div>
    <Layout>
      <div
        class="rounded-md border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1"
      >
        <form @submit.prevent="updateBeasiswa" action="">
          <div class="max-w-full overflow-x-auto p-5">
            <h2 class="font-bold leading-7 text-gray-900 text-2xl">Create Beasiswa</h2>

            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
              <div class="sm:col-span-1">
                <label for="id" class="block text-sm font-medium leading-6 text-gray-900">
                  Kode Beasiswa
                </label>
                <div class="mt-2">
                  <input
                    v-model="beasiswa.id"
                    type="text"
                    name="id"
                    id="id"
                    maxlength="5"
                    placeholder="12345"
                    readonly
                    class="block w-full indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="sm:col-span-1">
                <label
                  for="nama_beasiswa"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Nama Beasiswa
                </label>
                <div class="mt-2">
                  <input
                    v-model="beasiswa.nama_beasiswa"
                    required
                    type="text"
                    name="nama_beasiswa"
                    id="nama_beasiswa"
                    placeholder="Beasiswa Internal Akademik"
                    minlength="5"
                    autofocus
                    class="block w-full indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="sm:col-span-1">
                <label for="deskripsi" class="block text-sm font-medium leading-6 text-gray-900">
                  Deskripsi
                </label>
                <div class="mt-2">
                  <textarea
                    v-model="beasiswa.deskripsi"
                    required
                    name="deskripsi"
                    id="deskripsi"
                    minlength="5"
                    autofocus
                    placeholder="1. IPK harus 3.5
  2. Harus aktif berorganisasi"
                    rows="1"
                    class="block w-full indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="mt-6 flex items-center justify-end gap-x-6">
              <router-link
                :to="'/beasiswa/daftar-list'"
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
import Api from '../../../services/daftarListBeasiswaAPI'
import fetchBeasiswaById from '@/components/mixins/fetchBeasiswaById'

export default {
  name: 'DaftarListEdit',
  components: {
    Layout
  },
  mixins: [fetchBeasiswaById],
  mounted() {
    this.fetchBeasiswaById()
  },
  methods: {
    async updateBeasiswa() {
      try {
        const updated = {
          nama_beasiswa: this.beasiswa.nama_beasiswa,
          deskripsi: this.beasiswa.deskripsi,
        }
        await Api.updateBeasiswa(this.beasiswa.id, updated)
        this.$router.push('/beasiswa/daftar-list')
      } catch (error) {
        console.error('Error updating beasiswa: ', error)
      }
    }
  }
}
</script>
