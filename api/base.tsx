import axios from 'axios'
import { storage } from '@/utils/cookie'
import { camelizeKeys } from 'humps';

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_API_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
})

axiosClient.interceptors.request.use(
  (config) => {
    const token = storage.getToken()
    if (token) config.headers['Authorization'] = `Bearer ${token}`

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axiosClient.interceptors.response.use(
  function (response) {
    if (response.headers['content-type'].indexOf('application/json') > -1) {
      response.data = camelizeKeys(response.data);
    }
    return response?.data
  },
  function (error) {
    return Promise.reject(error?.response?.data)
  }
)

export default axiosClient
