import axios from 'axios'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default {
  //********** DAFTAR LIST BEASISWA ******************/

  // getall
  getBeasiswa() {
    return apiClient.get('/beasiswa')
  },

  // getFakultasById
  getBeasiswaById(id) {
    return apiClient.get(`/beasiswa/${id}`)
  },

  // create
  createBeasiswa(data) {
    return apiClient.post('/beasiswa', data)
  },

  // update
  updateBeasiswa(id, data) {
    return apiClient.put(`/beasiswa/${id}`, data)
  },

  // delete
  deleteBeasiswa(id) {
    return apiClient.delete(`/beasiswa/${id}`)
  }
}
