import axios from 'axios'
import Cookies from 'js-cookie'

export const BASE_URL = 'http://localhost:5000/api'


const api = axios.create({ baseURL: BASE_URL })
// This for the client side
api.interceptors.request.use((config) => {
    const jwt = Cookies.get('jwt')
    if (jwt) {
        config.headers.Authorization = ''
        delete config.headers.Authorization
        config.headers.Authorization = `Bearer ${jwt}`
    }
    return config
})
export default api