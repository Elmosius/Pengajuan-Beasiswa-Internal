import Api from '@/services/beasiswaDetailAPI'

export default {
  data() {
    return {
      beasiswa: [],
      error: ''
    }
  },
  methods: {
    async fetchBeasiswaDetailByPendaftaranId() {
      const pendaftaranId = this.$route.params.id
      try {
        const response = await Api.getBeasiswaDetailByPendaftaranId(pendaftaranId)
        this.beasiswa = response.data.data
      } catch (error) {
        console.error('Error fetching beasiswa: ', error)
        this.error = error.response.data.message
      }
    }
  }
}
