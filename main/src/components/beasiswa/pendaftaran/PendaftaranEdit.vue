<template>
  <div>
    <Layout>
      <div
        class="rounded-md border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1"
      >
        <form @submit.prevent="updatePendaftaran">
          <div class="max-w-full overflow-x-auto p-5">
            <h2 class="font-bold leading-7 text-gray-900 text-2xl">Edit Periode Beasiswa</h2>
            <!-- munculin error -->
            <div v-if="error" class="p-3 mt-4 bg-red-200 text-red-800 rounded">
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
                <label for="status" class="block text-sm font-medium leading-6 text-gray-900">
                  Status
                </label>
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
                to="/beasiswa/daftar-list"
                class="text-sm font-semibold leading-6 text-gray-900"
              >
                Cancel
              </router-link>
              <button
                type="submit"
                class="rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Update
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
import fetchPendaftaranById from '@/components/mixins/fetchPendaftaranById'
import fetchBeasiswa from '@/components/mixins/fetchBeasiswa'

export default {
  name: 'PendaftaranEdit',
  components: {
    Layout
  },
  mixins: [fetchPendaftaranById, fetchBeasiswa],
  async mounted() {
    await this.fetchPendaftaranById()
    await this.fetchBeasiswa()
    this.selectedBeasiswa = this.pendaftaran.beasiswa_id
    this.pendaftaran.start_at = this.formatDate(this.pendaftaran.start_at)
    this.pendaftaran.end_at = this.formatDate(this.pendaftaran.end_at)
  },
  methods: {
    async updatePendaftaran() {
      try {
        const updated = {
          start_at: this.pendaftaran.start_at,
          end_at: this.pendaftaran.end_at,
          status: this.pendaftaran.status,
          periode: this.pendaftaran.periode,
          beasiswa_id: this.selectedBeasiswa
        }
        await Api.updatePendaftaran(this.pendaftaran.id, updated)
        alert('Pendaftaran updated successfully!')
        this.$router.push('/beasiswa/pendaftaran')
      } catch (error) {
        console.error('Error updating pendaftaran: ', error)
        this.error = error.response.data.message
      }
    },
    formatDate(dateString) {
      const date = new Date(dateString)
      const year = date.getFullYear()
      const month = ('0' + (date.getMonth() + 1)).slice(-2)
      const day = ('0' + date.getDate()).slice(-2)
      return `${year}-${month}-${day}`
    }
  }
}
</script>
