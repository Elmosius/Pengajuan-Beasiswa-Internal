import Api from '@/services/beasiswaDetailAPI'

export default {
  data() {
    return {
      beasiswaDetail: {},
      error: ''
    }
  },
  methods: {
    async fetchBeasiswaDetailByUserId(userId) {
      try {
        const response = await Api.getBeasiswaDetailByUserId(userId)
        this.beasiswaDetail = response.data.data
      } catch (error) {
        console.error('Error fetching beasiswa detail by user id: ', error)
        this.error = error.response ? error.response.data.message : error.message
      }
    }
  }
}
