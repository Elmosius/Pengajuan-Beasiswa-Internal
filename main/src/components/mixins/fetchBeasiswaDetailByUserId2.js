import Api from '@/services/beasiswaDetailAPI'

export default {
  data() {
    return {
      beasiswaDetail: {},
      error: ''
    }
  },
  methods: {
    async fetchBeasiswaDetailByUserId() {
      const userId = this.$route.params.id
      try {
        const response = await Api.getBeasiswaDetailByUserId(userId)
        this.beasiswaDetail = response.data.data
      } catch (error) {
        console.error('Error fetching beasiswa: ', error)
        this.error = error.response.data.message
      }
    }
  }
}
