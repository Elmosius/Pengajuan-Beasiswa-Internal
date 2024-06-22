import Api from '@/services/beasiswaDetailAPI'

export default {
  data() {
    return {
      beasiswaDetailList: []
    }
  },
  methods: {
    async fetchBeasiswaDetails() {
      try {
        const response = await Api.getBeasiswaDetails()
        this.beasiswaDetailList = response.data
      } catch (error) {
        console.error('Error fetching beasiswa: ', error)
      }
    }
  }
}
