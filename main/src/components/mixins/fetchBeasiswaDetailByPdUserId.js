import Api from '@/services/beasiswaDetailAPI'

export default {
  data() {
    return {
      beasiswaDetail: {},
      error: ''
    }
  },
  methods: {
    async fetchBeasiswaDetailByPendaftaranUserId() {
      const { pendaftaranId, userId } = this.$route.params
      try {
        const response = await Api.getBeasiswaDetailByPendaftaranUserId(pendaftaranId, userId)
        this.beasiswaDetail = response.data.data[0]
      } catch (error) {
        console.error('Error fetching beasiswa: ', error)
        this.error = error.response ? error.response.data.message : error.message
      }
    }
  }
}
