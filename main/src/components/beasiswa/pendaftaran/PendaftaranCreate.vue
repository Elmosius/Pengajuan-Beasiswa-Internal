<template>
  <div>
    <Layout>
      <div
        class="rounded-md border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1"
      >
        <form @submit.prevent="handleSubmit">
          <div class="max-w-full overflow-x-auto p-5">
            <h2 class="font-bold leading-7 text-gray-900 text-2xl">Create Periode Beasiswa</h2>
            <!-- munculin error -->
            <div v-if="error" class="p-3 2 mt-4 bg-red-200 text-red-800 rounded">
              {{ error }}
            </div>
            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
              <div class="sm:col-span-1">
                <label for="start_at" class="block text-sm font-medium leading-6 text-gray-900">
                  Start At
                </label>
                <div class="mt-2">
                  <input
                    v-model="pendaftaran.start_at"
                    type="date"
                    name="start_at"
                    id="start_at"
                    required
                    autofocus
                    class="block w-full indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="sm:col-span-1">
                <label for="end_at" class="block text-sm font-medium leading-6 text-gray-900">
                  End At
                </label>
                <div class="mt-2">
                  <input
                    v-model="pendaftaran.end_at"
                    type="date"
                    name="end_at"
                    id="end_at"
                    required
                    class="block w-full indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="sm:col-span-1">
                <label for="status" class="block text-sm font-medium leading-6 text-gray-900"
                  >Status</label
                >
                <div class="mt-2">
                  <select
                    v-model="pendaftaran.status"
                    id="status"
                    name="status"
                    required
                    class="block w-full indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-00 sm:text-sm sm:leading-6"
                  >
                    <option disabled value="">Choose Status</option>
                    <option value="1">Aktif</option>
                    <option value="0">Tidak Aktif</option>
                  </select>
                </div>
              </div>

              <div class="sm:col-span-1">
                <label for="periode" class="block text-sm font-medium leading-6 text-gray-900">
                  Periode
                </label>
                <div class="mt-2">
                  <input
                    v-model="pendaftaran.periode"
                    required
                    type="text"
                    name="periode"
                    id="periode"
                    minlength="2"
                    autofocus
                    placeholder="Genap 23/24"
                    class="block w-full indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="sm:col-span-2">
                <label for="beasiswa" class="block text-sm font-medium leading-6 text-gray-900">
                  Beasiswa
                </label>
                <div class="mt-2">
                  <select
                    v-model="selectedBeasiswa"
                    id="beasiswa"
                    name="beasiswa"
                    required
                    class="block w-full indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-00 sm:text-sm sm:leading-6"
                  >
                    <option disabled value="">Choose Beasiswa</option>
                    <option
                      v-for="beasiswa in beasiswaList.data"
                      :key="beasiswa.id"
                      :value="beasiswa.id"
                    >
                      {{ beasiswa.nama_beasiswa }}
                    </option>
                  </select>
                </div>
              </div>
            </div>

            <div class="mt-6 flex items-center justify-end gap-x-6">
              <router-link
                to="/beasiswa/pendaftaran"
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
import Api from '../../../services/pendaftaranBeasiswaAPI'
import fetchBeasiswa from '@/components/mixins/fetchBeasiswa'

export default {
  name: 'PendaftaranCreate',
  components: {
    Layout
  },
  data() {
    return {
      pendaftaran: {
        start_at: '',
        end_at: '',
        status: '',
        periode: ''
      },
      selectedBeasiswa: '',
      error: ''
    }
  },
  mixins: [fetchBeasiswa],
  async mounted() {
    await this.fetchBeasiswa()
  },
  methods: {
    async handleSubmit() {
      try {
        const data = {
          ...this.pendaftaran,
          beasiswa_id: this.selectedBeasiswa
        }
        await Api.createPendaftaran(data)
        alert('Pendaftaran created successfully!')
        this.$router.push('/beasiswa/pendaftaran')
      } catch (error) {
        console.error('Error creating pendaftaran:', error)
        this.error = error.response.data.message
      }
    }
  }
}
</script>
