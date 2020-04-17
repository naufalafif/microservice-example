import request from '@/utils/request'

export function fetchList() {
  return request({
    url: '/task',
    method: 'get'
  })
}

export function addRecord(payload) {
  return request({
    url: '/task',
    method: 'post',
    data: payload
  })
}

export function deleteRecord(id) {
  return request({
    url: `/task/${id}`,
    method: 'delete'
  })
}