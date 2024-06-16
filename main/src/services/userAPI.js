import axios from 'axios'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default {
  //********** USER ****************/

  // getall
  getUser() {
    return apiClient.get('/data/program-studi')
  },

  // getFakultasById
  getUserById(id) {
    return apiClient.get(`/data/program-studi/${id}`)
  },

  // create
  createUser(data) {
    return apiClient.post('/data/program-studi', data)
  },

  // update
  updateUser(id, data) {
    return apiClient.put(`/data/program-studi/${id}`, data)
  },

  // delete
  deleteUser(id) {
    return apiClient.delete(`/data/program-studi/${id}`)
  }
}
