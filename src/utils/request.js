import axios from 'axios'

const service = axios.create({
  baseURL: 'http://39.106.193.254:10010/isoftstone/dms',
  timeout: 5000// 请求超时时间
})
service.interceptors.request.use((req) => {
  return req
})
service.interceptors.response.use((res) => {
  return res.data
})
export default service// 最后导出
