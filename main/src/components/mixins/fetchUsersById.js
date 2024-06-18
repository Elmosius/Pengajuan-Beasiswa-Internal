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
    async fetchUsers() {
      try {
        const response = await Api.getUser()
        this.userList = response.data
      } catch (error) {
        console.error('Error fetching user: ', error)
      }
    }
  }
}
