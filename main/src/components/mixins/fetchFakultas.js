import Api from '@/services/fakultasAPI'

export default {
  data() {
    return {
      fakultasList: []
    }
  },
  methods: {
    async fetchFakultas() {
      try {
        const response = await Api.getFakultas()
        this.fakultasList = response.data
      } catch (error) {
        console.error('Error fetching fakultas: ', error)
      }
    }
  }
}
