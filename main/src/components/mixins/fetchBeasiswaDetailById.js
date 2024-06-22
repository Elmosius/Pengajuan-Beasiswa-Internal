import Api from '@/services/beasiswaDetailAPI'

export default {
  data() {
    return {
      beasiswaDetail: [],
      error: ''
    }
  },
  methods: {
    async fetchBeasiswaDetailById() {
      const beasiswaDetailId = this.$route.params.id
      try {
        const response = await Api.getBeasiswaDetailById(beasiswaDetailId)
        this.pendaftaran = response.data.data
      } catch (error) {
        console.error('Error fetching pendaftaran: ', error)
        this.error = error.response.data.message
      }
    }
  }
}
