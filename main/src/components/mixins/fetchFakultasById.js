import Api from '@/services/fakultasAPI'

export default {
  data() {
    return {
      fakultas: {
        id: '',
        nama_fakultas: ''
      }
    }
  },
  methods: {
    async fetchFakultasById() {
      const fakultasId = this.$route.params.id
      try {
        const response = await Api.getFakultasById(fakultasId)
        this.fakultas = response.data.data[0]
      } catch (error) {
        console.error('Error fetching fakultas: ', error)
      }
    }
  }
}
