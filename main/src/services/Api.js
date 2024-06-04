import axios from 'axios'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default {
  // get all fakultas
  getFakultas() {
    return apiClient.get('/data/fakultas')
  },

  // delete
  deleteFakultas(id) {
    return apiClient.delete(`/data/fakultas/${id}`)
  }
}
