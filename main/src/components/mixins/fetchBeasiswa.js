import Api from '@/services/daftarListBeasiswaAPI'

export default {
  data() {
    return {
      beasiswaList: []
    }
  },
  methods: {
    async fetchBeasiswa() {
      try {
        const response = await Api.getBeasiswa()
        this.beasiswaList = response.data
      } catch (error) {
        console.error('Error fetching beasiswa: ', error)
      }
    }
  }
}
