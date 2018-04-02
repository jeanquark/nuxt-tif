// import Vue from 'vue'
// import Vuex from 'vuex'
// import {Auth, GoogleAuthProvider, FacebookAuthProvider} from '~/plugins/firebase-client-init.js'
// import firebase from 'firebase'

// Separate Module States
// import moduleFirebase from './modules/firebase.js'

export const state = () => ({
    loading: false,
    error: null
})

export const mutations = {
    setLoading (state, payload) {
      state.loading = payload
    },
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
    nuxtServerInit ({ commit }, { req }) {
        if (req.user) {
            // commit('setUser', req.user)
            commit('users/setUser', req.user, { root: true })
        }
    },
    clearError ({commit}) {
      commit('clearError')
    }
}

export const getters = {
    loading (state) {
      return state.loading
    },
    error (state) {
      return state.error
    }
}

// export const store = new Vuex.Store({
//   modules: {
//     moduleFirebase: moduleFirebase,
//   },
//   state: {
//     loading: false,
//     error: null
//   },
//   mutations: {
    
//   },
//   actions: {
//     clearError ({commit}) {
//       commit('clearError')
//     }
//   },
//   getters: {
//     loading (state) {
//       return state.loading
//     },
//     error (state) {
//       return state.error
//     }
//   }
// })