<template>
  <div>
    <Layout>
      <div
        class="rounded-md border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1"
      >
        <form @submit.prevent="handleSubmit" action="">
          <div class="max-w-full overflow-x-auto p-5">
            <h2 class="font-bold leading-7 text-gray-900 text-2xl">Create Periode Beasiswa</h2>

            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
              <div class="sm:col-span-1">
                <label for="id" class="block text-sm font-medium leading-6 text-gray-900">
                  Start At
                </label>
                <div class="mt-2">
                  <input
                    v-model="beasiswa.id"
                    type="datetime-local"
                    name="start_at"
                    id="start_at"
                    placeholder="12345"
                    required
                    autofocus
                    class="block w-full indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="sm:col-span-1">
                <label
                  for="nama_beasiswa"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  End_at
                </label>
                <div class="mt-2">
                  <input
                    v-model="beasiswa.nama_beasiswa"
                    required
                    type="datetime-local"
                    name="end_at"
                    id="end_at"
                    placeholder="Beasiswa Internal Akademik"
                    minlength="5"
                    autofocus
                    class="block w-full indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="sm:col-span-1">
                <div class="">
                  <label for="status" class="block text-sm font-medium leading-6 text-gray-900"
                    >Status</label
                  >
                  <div class="mt-2">
                    <select
                      required
                      id="status"
                      name="status"
                      autocomplete="status"
                      class="block w-full indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-00 sm:text-sm sm:leading-6"
                    >
                      <option disabled selected value="">Choose Role</option>
                      <option value="1">Aktif</option>
                      <option value="0">Tidak Aktif</option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="sm:col-span-1">
                <label for="periode" class="block text-sm font-medium leading-6 text-gray-900">
                  Periode
                </label>
                <div class="mt-2">
                  <input
                    v-model="beasiswa.periode"
                    required
                    type="text"
                    name="periode"
                    id="periode"
                    minlength="2"
                    autofocus
                    placeholder="22/23"
                    class="block w-full indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
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
                Create
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

export default {
  name: 'PendaftaranCreate',
  components: {
    Layout
  },
  mixins: [],
  mounted() {},
  data() {
    return {
      beasiswa: {
        id: '',
        nama_beasiswa: '',
        deskripsi: '',
        periode: ''
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
