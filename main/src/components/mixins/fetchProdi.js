import prodiAPI from '@/services/prodiAPI'

export default {
  data() {
    return {
      prodiList: []
    }
  },
  methods: {
    async fetchProdi() {
      try {
        const response = await prodiAPI.getProgramStudi()
        this.prodiList = response.data
      } catch (error) {
        console.error('Error fetching prodi: ', error)
      }
    }
  }
}
