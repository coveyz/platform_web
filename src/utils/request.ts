import axios from 'axios'
// import store from '@/model'
import { getToken } from '@/utils/auth'
import { errorMessage } from '@/utils/tools'

const http = axios.create({})

http.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

http.interceptors.response.use(
  (response) => {
    console.log('http-interceptors-resopnse=>', response)
    return response
  },
  (error) => {
    errorMessage(error)
    return Promise.reject(error)
  }
)

export default http