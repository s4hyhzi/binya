import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/sys/login',
    method: 'post',
    data
  })
}

export function getInfo(params) {
  return request({
    url: '/sys/selectTenant',
    method: 'put',
    data: params
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}

export function code(currdatetime) {
  return request({
    url: `sys/randomImage/${currdatetime}`,
    method: 'get'
  })
}