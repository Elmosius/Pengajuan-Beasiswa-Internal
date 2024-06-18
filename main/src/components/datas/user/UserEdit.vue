<template>
  <div>
    <Layout>
      <div
        class="rounded-md border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1"
      >
        <form @submit.prevent="handleSubmit">
          <div class="max-w-full overflow-x-auto p-5">
            <h2 class="font-bold leading-7 text-gray-900 text-2xl">Edit User</h2>
            <!-- munculin error -->
            <div v-if="error" class="p-3 mb-2 mt-4 bg-red-200 text-red-800 rounded">
              {{ error }}
            </div>
            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
              <!-- id -->
              <div class="sm:col-span-1">
                <label for="id" class="block text-sm font-medium leading-6 text-gray-900"
                  >ID User</label
                >
                <div class="mt-2">
                  <input
                    v-model="user.id"
                    autofocus
                    type="text"
                    name="id"
                    id="id"
                    placeholder="12345"
                    required
                    minlength="5"
                    maxlength="10"
                    class="block w-full indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <!-- nama -->
              <div class="sm:col-span-1">
                <label for="nama" class="block text-sm font-medium leading-6 text-gray-900"
                  >Nama</label
                >
                <div class="mt-2">
                  <input
                    v-model="user.nama"
                    autofocus
                    required
                    type="text"
                    name="nama"
                    id="nama"
                    minlength="3"
                    placeholder="Elmosius Suli"
                    class="block w-full indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <!-- email -->
              <div class="sm:col-span-1">
                <label for="email" class="block text-sm font-medium leading-6 text-gray-900"
                  >Email</label
                >
                <div class="mt-2">
                  <input
                    v-model="user.email"
                    autofocus
                    required
                    type="email"
                    name="email"
                    id="email"
                    placeholder="2272008@maranatha.ac.id"
                    class="block w-full indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <!-- role -->
              <div class="sm:col-span-1">
                <label for="role_id" class="block text-sm font-medium leading-6 text-gray-900"
                  >Role</label
                >
                <div class="mt-2">
                  <select
                    v-model="user.role_id"
                    required
                    id="role_id"
                    name="role_id"
                    autocomplete="role_id"
                    class="block w-full indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-00 sm:text-sm sm:leading-6"
                  >
                    <option disabled selected value="">Choose Role</option>
                    <option v-for="role in roleList.data" :key="role.id" :value="role.id">
                      {{ role.nama_role }}
                    </option>
                  </select>
                </div>
              </div>
              <!-- status -->
              <div class="sm:col-span-1">
                <div class="">
                  <label for="status" class="block text-sm font-medium leading-6 text-gray-900"
                    >Status</label
                  >
                  <div class="mt-2">
                    <select
                      v-model="user.status"
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
              <!-- program studi -->
              <div class="sm:col-span-1">
                <label
                  for="program_studi_id"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Program Studi</label
                >
                <div class="mt-2">
                  <select
                    v-model="user.program_studi_id"
                    required
                    id="program_studi_id"
                    name="program_studi_id"
                    autocomplete="program_studi_id"
                    class="block w-full indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-00 sm:text-sm sm:leading-6"
                  >
                    <option disabled selected value="">Choose Program Studi</option>
                    <option v-for="prodi in prodiList.data" :key="prodi.id" :value="prodi.id">
                      {{ prodi.fakultas_id }} - {{ prodi.nama_program_studi }}
                    </option>
                  </select>
                </div>
              </div>
              <!-- password -->
              <div class="sm:col-span-1">
                <label for="password" class="block text-sm font-medium leading-6 text-gray-900"
                  >Password</label
                >
                <div class="mt-2">
                  <input
                    v-model="user.password"
                    autofocus
                    type="password"
                    name="password"
                    id="password"
                    minlength="8"
                    placeholder="Masukkan password baru"
                    class="block w-full indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <!-- confirm password -->
              <div class="sm:col-span-1">
                <label
                  for="confirm_password"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Confirm Password</label
                >
                <div class="mt-2">
                  <input
                    v-model="user.confirm_password"
                    type="password"
                    name="confirm_password"
                    id="confirm_password"
                    minlength="8"
                    placeholder="Ulangi password baru"
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
import Api from '@/services/userAPI'
import fetchProdi from '@/components/mixins/fetchProdi'
import fetchRoles from '@/components/mixins/fetchRoles'

export default {
  name: 'UserCreate',
  components: {
    Layout
  },
  mixins: [fetchProdi, fetchRoles],
  data() {
    return {
      user: {
        id: '',
        role_id: '',
        program_studi_id: '',
        nama: '',
        email: '',
        password: '',
        confirm_password: '',
        status: ''
      },
      error: ''
    }
  },
  mounted() {
    this.fetchProdi()
    this.fetchRoles()
  },
  methods: {
    async updateUser() {
      try {
        const updated = {
          nama_program_studi: this.program_studi.nama_program_studi,
          fakultas_id: this.program_studi.fakultas_id
        }
        await Api.updateUser(this.user.id, updated)
        this.$router.push('/data/program-studi')
      } catch (error) {
        console.error('Error updating prodi: ', error)
      }
    }
  }
}
</script>
