import Api from '@/services/beasiswaDetailAPI'

export default {
  data() {
    return {
      beasiswa: {},
      error: ''
    }
  },
  methods: {
    async fetchBeasiswaDetailById() {
      const beasiswaDetailId = this.$route.params.id
      try {
        const response = await Api.getBeasiswaDetailById(beasiswaDetailId)
        this.beasiswa = response.data.data[0]
      } catch (error) {
        console.error('Error fetching beasiswa: ', error)
        this.error = error.response.data.message
      }
    }
  }
}
