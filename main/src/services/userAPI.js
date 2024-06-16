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
    return apiClient.get('/data/users')
  },

  // getFakultasById
  getUserById(id) {
    return apiClient.get(`/data/users/${id}`)
  },

  // create
  createUser(data) {
    return apiClient.post('/data/users', data)
  },

  // update
  updateUser(id, data) {
    return apiClient.put(`/data/users/${id}`, data)
  },

  // delete
  deleteUser(id) {
    return apiClient.delete(`/data/users/${id}`)
  }
}
