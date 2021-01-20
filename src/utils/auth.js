import Cookies from 'js-cookie'

const TokenKey = 'vue_admin_template_token'
const UserName = 'UserName'
const TenId = 'tenId'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function setUserName(userName) {
  return localStorage.setItem(UserName, userName)
}

export function getUserName() {
  return localStorage.getItem(UserName)
}

export function setTenId(tenid) {
  return localStorage.setItem(TenId, tenid)
}

export function getTenId() {
  return localStorage.getItem(TenId)
}