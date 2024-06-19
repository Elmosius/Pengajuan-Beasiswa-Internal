import axios from 'axios'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = token
  }
  return config
})

export default {
  //********** USER ****************/

  // login
  login(credentials) {
    return apiClient.post('/auth/login', credentials).then((response) => {
      // Simpan token ke localStorage
      localStorage.setItem('token', response.data.token)
      return response
    })
  },

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
