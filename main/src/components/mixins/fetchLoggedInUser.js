import Api from '@/services/userAPI'

export default {
  data() {
    return {
      user: {
        id: '',
        role_id: '',
        program_studi_id: '',
        nama: '',
        email: '',
        status: ''
      },
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
