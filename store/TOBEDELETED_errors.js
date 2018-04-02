export const state = () => ({
    error: null
})

export const mutations = {
    setError (state, payload) {
      console.log('setError mutation called')
      console.log(payload)
      state.error = payload
    },
    clearError (state) {
      state.error = null
    }
}

export const actions = {
    clearError ({commit}) {
      commit('clearError')
    }
}

export const getters = {
    error (state) {
      return state.error
    }
}