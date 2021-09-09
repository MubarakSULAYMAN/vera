export const strict = false

export const state = () => ({
  userInfo: null,
})

export const mutations = {
  SET_USER_INFO(state, payload) {
    state.userInfo = payload
  },
}

export const actions = {
  updateUserInfo({ commit }, payload) {
    commit('SET_USER_INFO', payload)
  },
}
