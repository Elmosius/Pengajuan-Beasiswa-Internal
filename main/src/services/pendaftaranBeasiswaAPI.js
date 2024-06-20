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
  getPendaftaran() {
    return apiClient.get('/beasiswa/pendaftaran')
  },

  // getFakultasById
  getPendaftaranById(id) {
    return apiClient.get(`/beasiswa/pendaftaran/${id}`)
  },

  // create
  createPendaftaran(data) {
    return apiClient.post('/beasiswa/pendaftaran', data)
  },

  // update
  updatePendaftaran(id, data) {
    return apiClient.put(`/beasiswa/pendaftaran/${id}`, data)
  },

  // delete
  deletePendaftaran(id) {
    return apiClient.delete(`/beasiswa/pendaftaran/${id}`)
  }
}
