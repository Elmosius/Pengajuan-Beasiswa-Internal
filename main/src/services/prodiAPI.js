import axios from 'axios'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default {
  //********** PROGRAMSTUDI ******************/

  // getall
  getProgramStudi() {
    return apiClient.get('/data/program-studi')
  },

  // getFakultasById
  getProgramStudiById(id) {
    return apiClient.get(`/data/program-studi/${id}`)
  },

  // create
  createProgramStudi(data) {
    return apiClient.post('/data/program-studi', data)
  },

  // update
  updateProgramStudi(id, data) {
    return apiClient.put(`/data/program-studi/${id}`, data)
  },

  // delete
  deleteProgramStudi(id) {
    return apiClient.delete(`/data/program-studi/${id}`)
  }
}
