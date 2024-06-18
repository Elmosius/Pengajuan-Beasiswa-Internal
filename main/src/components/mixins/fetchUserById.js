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
        password: '',
        confirm_password: '',
        status: ''
      },
      error: ''
    }
  },
  methods: {
    async fetchUserById() {
      const userId = this.$route.params.id
      try {
        const response = await Api.getUserById(userId)
        const data = response.data.data[0]
        this.user = {
          id: data.id,
          role_id: data.role_id,
          program_studi_id: data.program_studi_id,
          nama: data.nama,
          email: data.email,
          status: data.status,
          password: '',
          confirm_password: ''
        }
      } catch (error) {
        console.error('Error fetching user: ', error)
        this.error = error.message
      }
    }
  }
}
