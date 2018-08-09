// import Vue from 'vue'
// import Vuex from 'vuex'
// import {Auth, GoogleAuthProvider, FacebookAuthProvider} from '~/plugins/firebase-client-init.js'
// import firebase from 'firebase'

// Separate Module States
// import moduleFirebase from './modules/firebase.js'

// import VueLoading from 'vuex-loading'
// export const plugins = [ VueLoading ]


// import firebase from 'firebase'
// import { Auth } from '~/plugins/firebase-client-init.js'
// import admin from 'firebase-admin'
// import setUser from '../helpers/setUser'
import moment from 'moment'
export const strict = false
// import router from '../router'

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
    // ORIGINAL nuxtServerInit function
    // nuxtServerInit ({commit}, {req}) {
    //     if (req.user) {
    //         console.log('Entering nuxtServerInit')
    //         console.log(req.user)
    //         commit('users/setUser', req.user, { root: true })
    //     }
    // },

    async nuxtServerInit ({commit, dispatch}, {req}) {
        // // try {
        // if (req.user) {
        //     console.log('Entering nuxtServerInit')
        //     console.log('req.user: ', req.user)
        //     // commit('users/setUser', req.user, { root: true })
        //     const userId = req.user.uid
        //     // console.log('ABC')
        //     console.log('userId: ', userId)
        //     // console.log(userId)
        //     // const userData = ''
        //     // await firebase.database().ref('/users/' + userId).once('value').then(function (snapshot) {
        //     await firebase.database().ref('/users/' + userId).on('value', function (snapshot) {
        //     // await admin.database().ref('/users/' + userId).on('value', function (snapshot) {
        //         commit('users/setLoadedUser', snapshot.val(), { root: true })
        //         console.log('End of nuxtServerInit')
        //     })
        //     // const authData = {
        //     //   avatar: '',
        //     //   email: 'test2@test.com',
        //     //   id: 'RHhcGpLRSgRNm1ByOA9j7qASopf1',
        //     //   status: 'user'
        //     // }
        //     // commit('users/setUser', authData, {root: true})
        // }
        // // }
        // // catch (e) {
        // //     console.log(e)
        // // }


        console.log('Entering nuxtServerInit', moment().format("DD-MM-YYYY HH:mm:ss"))
        if (req.user) {
            console.log('User is logged in from nuxtServerInit')
            const userId = req.user.uid
            console.log('userId: ', userId)
            // dispatch('users/loadedUser', userId, { root: true})
            commit('users/setLoadedUser', req.user, { root: true })
            // router.push({'path': '/'})
        } else {
            console.log('User is not logged in from nuxtServerInit')
        }
    },
    // setLoading ({commit, payload}) {
    //   commit('setLoading', payload)
    // },
    clearError ({commit}) {
        commit('clearError')
    },
    // async sendEmail (payload) {
    //     // commit('setLoading', true, { root: true })
    //     console.log('async sendEmail')
    //     try {
    //         console.log(payload)
    //         return this.$axios.$post('/send-email', {data: payload}).then((response) => {
    //             console.log('success')
    //             console.log(response)
    //         })
    //     }
    //     catch(error) {
    //         console.log(error)
    //     }
    // },
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