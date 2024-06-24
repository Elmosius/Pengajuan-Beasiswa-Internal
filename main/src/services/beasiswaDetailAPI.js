import axios from 'axios'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

const createBeasiswaWithFormData = (data) => {
  return axios.post(`${import.meta.env.VITE_API_URL}/beasiswa/details`, data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

const updateBeasiswaWithFormData = (id, data) => {
  return axios.put(`${import.meta.env.VITE_API_URL}/beasiswa/details/${id}`, data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

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
    return createBeasiswaWithFormData(data)
  },

  // update
  updateBeasiswa(id, data) {
    return updateBeasiswaWithFormData(id, data)
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
