import axios from 'axios'
import store from '@/model'
import { getToken, removeToken, removeUserInfo } from '@/utils/auth'
import { errorMessage } from '@/utils/tools'

const http = axios.create({})

http.interceptors.request.use(
  (config) => {

    if (store.getState().user.token) {
      config.headers.Authorization = getToken()
    }

    config.headers['Access-Control-Expose-Headers'] = 'Content-Disposition'
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
    if (error.response && error.response.status === 401) {
      errorMessage('用户登录超时 请重新登录')
      setTimeout(() => {
        removeToken()
        removeUserInfo()
        window.location.replace('/user/login')
      }, 500);
    }
    errorMessage(error)
    return Promise.reject(error)
  }
)

export default http