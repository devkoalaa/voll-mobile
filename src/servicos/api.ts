import axios from 'axios'

const api = axios.create({
    // baseURL: "http://192.168.200.132:3000"
    baseURL: "http://10.91.110.85:3000"
})

export default api