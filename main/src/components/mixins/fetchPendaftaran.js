import Api from '@/services/pendaftaranBeasiswaAPI'

export default {
  data() {
    return {
      pendaftaranList: []
    }
  },
  methods: {
    async fetchPendaftaran() {
      try {
        const response = await Api.getPendaftaran()
        this.pendaftaranList = response.data.data
      } catch (error) {
        console.error('Error fetching pendaftaran: ', error)
      }
    }
  }
}
