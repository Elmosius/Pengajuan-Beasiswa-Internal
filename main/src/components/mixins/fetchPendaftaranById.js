import Api from '@/services/pendaftaranBeasiswaAPI'

export default {
  data() {
    return {
      pendaftaran: {
        id: '',
        start_at: '',
        end_at: '',
        status: '',
        periode: '',
        beasiswa_id: ''
      },
      error: '',
      selectedBeasiswa: ''
    }
  },
  methods: {
    async fetchPendaftaranById() {
      const pendaftaranId = this.$route.params.id
      try {
        const response = await Api.getPendaftaranById(pendaftaranId)
        this.pendaftaran = response.data.data[0]
      } catch (error) {
        console.error('Error fetching pendaftaran: ', error)
        this.error = error.response.data.message
      }
    }
  }
}
