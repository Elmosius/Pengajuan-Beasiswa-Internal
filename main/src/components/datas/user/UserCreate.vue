<template>
  <div>
    <Layout>
      <div
        class="rounded-md border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1"
      >
        <form>
          <div class="max-w-full overflow-x-auto p-5">
            <h2 class="font-bold leading-7 text-gray-900 text-2xl">Create User</h2>

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
                <div class="">
                  <label for="role" class="block text-sm font-medium leading-6 text-gray-900"
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
                      <option>Admin</option>
                      <option>Program Studi</option>
                      <option>Mahasiswa</option>
                    </select>
                  </div>
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
                      <option>Aktif</option>
                      <option>Tidak Aktif</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- program studi -->
              <div class="sm:col-span-1">
                <div class="">
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
                      <option>72 - Teknik Informatika</option>
                      <option>73 - Sistem Informasi</option>
                    </select>
                  </div>
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
                    required
                    type="password"
                    name="password"
                    id="password"
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
                    autofocus
                    required
                    type="confirm_password"
                    name="confirm_password"
                    id="confirm_password"
                    placeholder="Masukkan password baru sebelumnya"
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

export default {
  name: 'UserCreate',
  components: {
    Layout
  },
  mixins: [fetchProdi],
  data() {
    return {
      user: {
        role_id: '',
        program_studi_id: '',
        nama: '',
        email: '',
        password: '',
        status: ''
      }
    }
  },
  mounted() {
    this.fetchFakultas()
  },
  methods: {
    async handleSubmit() {
      try {
        console.info(this.user)
        await Api.createUser(this.user)
        alert('User created successfully!')
        this.$router.push('/data/users')
      } catch (error) {
        console.error('Error creating user:', error)
      }
    }
  }
}
</script>
