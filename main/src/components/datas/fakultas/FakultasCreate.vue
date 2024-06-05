<template>
  <div>
    <Layout>
      <div
        class="rounded-md border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1"
      >
        <form @submit.prevent="handleSubmit" action="">
          <div class="max-w-full overflow-x-auto p-5">
            <h2 class="font-bold leading-7 text-gray-900 text-2xl">Create Fakultas</h2>

            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
              <div class="sm:col-span-1">
                <label for="id" class="block text-sm font-medium leading-6 text-gray-900">
                  ID Fakultas
                </label>
                <div class="mt-2">
                  <input
                    v-model="fakultas.id"
                    type="text"
                    name="id"
                    id="id"
                    placeholder="12345"
                    required
                    class="block w-full indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="sm:col-span-1">
                <label
                  for="nama_fakultas"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Nama Fakultas
                </label>
                <div class="mt-2">
                  <input
                    v-model="fakultas.nama_fakultas"
                    required
                    type="text"
                    name="nama_fakultas"
                    id="nama_fakultas"
                    placeholder="Fakultas Teknologi Informasi"
                    class="block w-full indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div class="mt-6 flex items-center justify-end gap-x-6">
              <button type="button" class="text-sm font-semibold leading-6 text-gray-900">
                Cancel
              </button>
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
import Api from '../../../services/fakultasAPI'

export default {
  name: 'FakultasCreate',
  components: {
    Layout
  },
  data() {
    return {
      fakultas: {
        id: '',
        nama_fakultas: ''
      }
    }
  },
  methods: {
    async handleSubmit() {
      try {
        console.info(this.fakultas)
        await Api.createFakultas(this.fakultas)
        alert('Fakultas created successfully!')
        this.$router.push('/data/fakultas')
        this.fakultas.id = ''
        this.fakultas.nama_fakultas = ''
      } catch (error) {
        console.error('Error creating fakultas:', error)
      }
    }
  }
}
</script>
