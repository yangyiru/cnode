import * as types from './mutation-types'

const mutations = {
  [types.SET_USERINFO] (state, user) {
    state.userInfo = user
  }
}

export default mutations
