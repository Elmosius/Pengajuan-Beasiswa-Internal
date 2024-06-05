import axios from 'axios'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default {
  //********** PROGRAMSTUDI ******************/
  // getall
  getProgramStudi() {
    return apiClient.get('/data/prodi')
  }
}
