import request from '@/utils/request'

export function getMapCsv () {
  return request({
    url: '/auth/getMapCsv',
    method: 'get'
  })
}
