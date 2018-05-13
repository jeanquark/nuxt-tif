// import Vue from 'vue'
// import Vuex from 'vuex'
// import {Auth, GoogleAuthProvider, FacebookAuthProvider} from '~/plugins/firebase-client-init.js'
// import firebase from 'firebase'

// Separate Module States
// import moduleFirebase from './modules/firebase.js'

// import VueLoading from 'vuex-loading'
// export const plugins = [ VueLoading ]
import firebase from 'firebase'
import setUser from '../helpers/setUser'
export const strict = false

export const state = () => ({
    loading: false,
    loadingPage: false,
    error: null
})

export const mutations = {
    setLoading (state, payload) {
      state.loading = payload
    },
    setLoadingPage (state, payload) {
      state.loadingPage = payload
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
            commit('users/setUser', req.user, { root: true })
            // const userId = req.user.id
            // console.log(userId)
            // firebase.database().ref('/users/' + userId).once('value').then(() => {
            //   const user = setUser(snapshot.val())
            //   commit('users/setUser', user, { root: true })
            // })
        }
    },
    // setLoading ({commit, payload}) {
    //   commit('setLoading', payload)
    // },
    clearError ({commit}) {
      commit('clearError')
    }
}

export const getters = {
    loading (state) {
      return state.loading
    },
    loadingPage (state) {
      return state.loadingPage
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