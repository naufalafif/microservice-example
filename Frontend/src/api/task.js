import request from '@/utils/request'

export function fetchList() {
    return request({
      url: '/task',
      method: 'get'
    })
  }