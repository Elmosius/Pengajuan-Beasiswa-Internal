<template>
  <div>
    <Layout>
      <div
        class="rounded-md border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1"
      >
        <form @submit.prevent="handleSubmit" action="">
          <div class="max-w-full overflow-x-auto p-5">
            <h2 class="font-bold leading-7 text-gray-900 text-2xl">Create Program Studi</h2>
            <!-- munculin error -->
            <div v-if="error" class="p-3 mb-2 mt-4 bg-red-200 text-red-800 rounded">
              {{ error }}
            </div>
            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
              <div class="sm:col-span-1">
                <label for="id" class="block text-sm font-medium leading-6 text-gray-900"
                  >ID Program Studi</label
                >
                <div class="mt-2">
                  <input
                    v-model="program_studi.id"
                    autofocus
                    type="text"
                    name="id"
                    id="id"
                    placeholder="12345"
                    required
                    class="block w-full indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <!-- program studi -->
              <div class="sm:col-span-1">
                <div class="">
                  <label
                    for="program_studi_id"
                    class="block text-sm font-medium leading-6 text-gray-900"
                    >Fakultas</label
                  >
                  <div class="mt-2">
                    <select
                      required
                      v-model="program_studi.fakultas_id"
                      id="fakultas_id"
                      name="fakultas_id"
                      autocomplete="fakultas_id"
                      class="block w-full indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-00 sm:text-sm sm:leading-6"
                    >
                      <option disabled selected value="">Choose Fakultas</option>
                      <option
                        v-for="fakultas in fakultasList.data"
                        :value="fakultas.id"
                        :key="fakultas.id"
                      >
                        {{ fakultas.nama_fakultas }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="sm:col-span-1">
                <label
                  for="nama_program_studi"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Nama Program Studi</label
                >
                <div class="mt-2">
                  <input
                    v-model="program_studi.nama_program_studi"
                    autofocus
                    required
                    type="text"
                    name="nama_program_studi"
                    id="nama_program_studi"
                    placeholder="Teknik Informatika"
                    class="block w-full indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div class="mt-6 flex items-center justify-end gap-x-6">
              <router-link
                :to="'/data/program-studi'"
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
import prodiAPI from '@/services/prodiAPI'
import fetchFakultas from '@/components/mixins/fetchFakultas'

export default {
  name: 'ProgramStudiCreate',
  components: {
    Layout
  },
  mixins: [fetchFakultas],
  data() {
    return {
      program_studi: {
        id: '',
        nama_program_studi: '',
        fakultas_id: ''
      },
      error: ''
    }
  },
  mounted() {
    this.fetchFakultas()
  },
  methods: {
    async handleSubmit() {
      try {
        console.info(this.program_studi)
        await prodiAPI.createProgramStudi(this.program_studi)
        alert('Program Studi created successfully!')
        this.$router.push('/data/program-studi')
      } catch (error) {
        console.error('Error creating program studi:', error)
        this.error = error.response.data.message
      }
    }
  }
}
</script>
