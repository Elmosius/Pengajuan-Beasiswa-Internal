import Api from '@/services/daftarListBeasiswaAPI'

export default {
  data() {
    return {
      beasiswa: {
        id: '',
        nama_beasiswa: '',
        deskripsi: '',
        periode: ''
      },
      error: ''
    }
  },
  methods: {
    async fetchBeasiswaById() {
      const beasiswaId = this.$route.params.id
      try {
        const response = await Api.getBeasiswaById(beasiswaId)
        this.beasiswa = response.data.data[0]
      } catch (error) {
        console.error('Error fetching beasiswa: ', error)
      }
    }
  }
}
