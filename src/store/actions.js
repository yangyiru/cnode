import * as types from './mutation-types'
export default {
  setUserInfo ({commit}, user) {
    window.window.sessionStorage.user = JSON.stringify(user)
    commit(types.SET_USERINFO, user)
  }
}
