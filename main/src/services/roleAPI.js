import axios from 'axios'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default {
  //********** ROLE ****************/

  // getall
  getRoles() {
    return apiClient.get('/roles')
  },

  // getFakultasById
  getRoleById(id) {
    return apiClient.get(`/roles/${id}`)
  },

  // create
  createRole(data) {
    return apiClient.post('/roles', data)
  },

  // update
  updateRole(id, data) {
    return apiClient.put(`/roles/${id}`, data)
  },

  // delete
  deleteRole(id) {
    return apiClient.delete(`/roles/${id}`)
  }
}
