import Api from '@/services/roleAPI'

export default {
  data() {
    return {
      roleList: []
    }
  },
  methods: {
    async fetchRoles() {
      try {
        const response = await Api.getRoles()
        this.roleList = response.data
      } catch (error) {
        console.error('Error fetching role: ', error)
      }
    }
  }
}
