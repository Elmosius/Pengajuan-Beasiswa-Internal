import axios from 'axios'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default {
  // getall
  getFakultas() {
    return apiClient.get('/data/fakultas')
  },

  // getFakultasById
  getFakultasById(id) {
    return apiClient.get(`/data/fakultas/${id}`)
  },

  // create
  createFakultas(data) {
    return apiClient.post('/data/fakultas', data)
  },

  // update
  updateFakultas(id, data) {
    return apiClient.put(`/data/fakultas/${id}`, data)
  },

  // delete
  deleteFakultas(id) {
    return apiClient.delete(`/data/fakultas/${id}`)
  }
}
