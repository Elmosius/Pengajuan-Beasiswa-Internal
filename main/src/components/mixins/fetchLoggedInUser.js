import Api from '@/services/userAPI'

export default {
  data() {
    return {
      user: {},
      error: ''
    }
  },
  methods: {
    async fetchLoggedInUser() {
      try {
        const response = await Api.getLoggedInUser()
        this.user = response.data.data
      } catch (error) {
        console.error('Error fetching logged in user:', error)
        this.error = error.response.data.message
      }
    }
  }
}
