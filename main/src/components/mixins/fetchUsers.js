import Api from '@/services/userAPI'

export default {
  data() {
    return {
      userList: []
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
