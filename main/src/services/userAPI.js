import axios from 'axios'
import router from '@/router'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = token.startsWith('Bearer ') ? token : `Bearer ${token}`
    console.log('Authorization Header:', config.headers.Authorization)
  }
  return config
})

// kalau token abis
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token')
      router.push('/login')
    }
    return Promise.reject(error)
  }
)

export default {
  //********** USER ****************/

  // login
  async login(credentials) {
    const response = await apiClient.post('/auth/login', credentials)
    console.log('Token from login response:', response.data.token)
    localStorage.setItem('token', response.data.token)
    console.log('Token saved to localStorage:', localStorage.getItem('token'))
    return response
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
  },

  // user
  async getLoggedInUser() {
    const response = await apiClient.get('/auth/user')
    return response.data.user
  }
}
