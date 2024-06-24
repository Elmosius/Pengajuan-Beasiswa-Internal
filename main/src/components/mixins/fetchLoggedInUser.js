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
        const userData = await Api.getLoggedInUser()
        this.user = userData
      } catch (error) {
        console.error('Error fetching logged in user:', error)
        this.error = error.response ? error.response.data.message : error.message
      }
    }
  }
}
