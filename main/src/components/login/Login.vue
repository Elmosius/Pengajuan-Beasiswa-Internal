<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
    <div class="w-full max-w-md bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div class="p-6">
        <h2 class="text-2xl font-bold text-center text-gray-900 dark:text-white mb-5">Login</h2>
        <div v-if="error" class="p-3 mb-2 bg-red-200 text-red-800 rounded">
          {{ error }}
        </div>
        <form @submit.prevent="handleLogin">
          <div class="mb-4">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your email
            </label>
            <input
              type="email"
              id="email"
              v-model="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Insert your email"
              required
            />
          </div>
          <div class="mb-4">
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              v-model="password"
              placeholder="Insert your password"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div class="flex items-center mb-4">
            <input
              id="remember"
              type="checkbox"
              v-model="remember"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Remember me
            </label>
          </div>
          <button
            type="submit"
            class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Api from '@/services/userAPI'

export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
      remember: false,
      error: ''
    }
  },
  methods: {
    async handleLogin() {
      try {
        const response = await Api.login({
          email: this.email,
          password: this.password
        })
        console.log('Login successful:', response)
        // Simpan token ke localStorage
        localStorage.setItem('token', response.data.token)
        this.$router.push('/')
      } catch (error) {
        console.error('Login failed:', error.response.data.message)
        this.error = error.response.data.message
      }
    }
  }
}
</script>
