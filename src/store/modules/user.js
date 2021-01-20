import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken, getUserName, getTenId, setTenId, setUserName } from '@/utils/auth'
import { resetRouter } from '@/router'
import { data } from 'autoprefixer'

const getDefaultState = () => {
  return {
    token: getToken(),
    name: '',
    avatar: '',
    userName: getUserName(),
    tenId: Number(getTenId())
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_USERNAME: (state, userName) => {
    state.userName = userName
  },
  SET_TENID: (state, tenId) => {
    state.tenId = tenId
  }
}

const actions = {
  setTenId({ commit }, tenId) {
    console.log(tenId)
    commit('SET_TENID', tenId)
  },
  setUserName({ commit }, userName) {
    console.log(userName)
    commit('SET_USERNAME', userName)
  },
  // user login
  login({ commit }, userInfo) {
    const { username, password, captcha, checkKey, remember_me } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password, captcha: captcha, checkKey: checkKey, remember_me, remember_me }).then(response => {
        commit('SET_TOKEN', response.token)
        setToken(response.token)
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo({ commit }) {
    return new Promise((resolve, reject) => {
      const { tenId, userName } = state
      console.log(tenId)
      getInfo({ loginTenId: tenId, username: userName }).then(res => {
        if (!data) {
          return reject('Verification failed, please Login again.')
        }
        const { username, tenId } = res.userInfo
        commit('SET_USERNAME', username)
        commit('SET_TENID', tenId)
        setTenId(tenId)
        setUserName(username)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        removeToken() // must remove  token  first
        resetRouter()
        commit('RESET_STATE')
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

