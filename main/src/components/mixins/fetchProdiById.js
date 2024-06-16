import prodiAPI from '@/services/prodiAPI'

export default {
  data() {
    return {
      program_studi: {
        id: '',
        nama_program_studi: '',
        fakultas_id: ''
      }
    }
  },
  methods: {
    async fetchProdiById() {
      const prodiId = this.$route.params.id
      try {
        const response = await prodiAPI.getProgramStudiById(prodiId)
        this.program_studi = response.data.data[0]
      } catch (error) {
        console.error('Error fetching prodi: ', error)
      }
    }
  }
}
