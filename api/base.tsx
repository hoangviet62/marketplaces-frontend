import axios from 'axios'
import cookie from 'js-cookie'

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

axiosClient.interceptors.request.use(
  (config) => {
    const token = cookie.get('token')
    if (token) config.headers['Authorization'] = `Bearer ${token}`
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axiosClient.interceptors.response.use(
  function (response) {
    return response?.data
  },
  function (error) {
    // let res = error.response
    //   if (res.status == 401) {
    //     window.location.href = “https://example.com/login”;
    //   }
    //   console.error(“Looks like there was a problem. Status Code: “ + res.status);
    return Promise.reject(error)
  }
)

export default axiosClient
