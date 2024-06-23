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
  getBeasiswaDetails() {
    return apiClient.get('/beasiswa/details')
  },

  // getBeasiswaDetailById
  getBeasiswaDetailById(id) {
    return apiClient.get(`/beasiswa/details/${id}`)
  },

  // getBeasiswaDetailByUserId
  getBeasiswaDetailByUserId(userId) {
    return apiClient.get(`/beasiswa/details/user/${userId}`)
  },

  // getBeasiswaDetailByPendaftaranId
  getBeasiswaDetailByPendaftaranId(pendaftaranId) {
    return apiClient.get(`/beasiswa/details/pendaftaran/${pendaftaranId}`)
  },

  // getBeasiswaDetailByPendaftaranUserId
  getBeasiswaDetailByPendaftaranUserId(pdId, userId) {
    return apiClient.get(`/beasiswa/details/pendaftaran/${pdId}/user/${userId}`)
  },

  // create
  createBeasiswa(data) {
    return apiClient.post('/beasiswa/details', data)
  },

  // update
  updateBeasiswa(id, data) {
    return apiClient.put(`/beasiswa/details/${id}`, data)
  },

  // update status
  updateBeasiswaStatus(id, data) {
    return apiClient.put(`/beasiswa/details/status/${id}`, data)
  },

  // delete
  deleteBeasiswa(id) {
    return apiClient.delete(`/beasiswa/details/${id}`)
  }
}
