import {Auth, GoogleAuthProvider, FacebookAuthProvider} from '~/plugins/firebase-client-init.js'
import firebase from 'firebase'
import axios from 'axios'
import Noty from 'noty'
import moment from 'moment'

export const state = () => ({

})

export const mutations = {

}

export const actions = {
    async signUserIn ({commit}, payload) {
        console.log(payload)
        try {
            commit('setLoading', true, { root: true })
            let authData = await Auth.signInWithEmailAndPassword(payload.email, payload.password)
            // console.log(authData)
            const userId = authData.uid
            const snapshot = await firebase.database().ref('/users/' + userId).once('value')
            commit('users/setLoadedUser', snapshot.val(), { root: true })
            commit('setLoading', false, { root: true })
        } 
        catch(error) {
            console.log(error)
            commit('setError', error, { root: true })
            return 
        }
    },
    
    async signUserUp ({commit}, payload) {
        commit('setLoading', true, { root: true })
        try {
            let authData = await Auth.createUserWithEmailAndPassword(payload.email, payload.password)
            // console.log('authData: ', authData)
            const userId = authData.uid

            // Add user id to payload
            payload['id'] = userId
            // console.log('payload: ', payload)

            return axios.post('/register-new-user', {
                type: 'form',
                data: payload
            }).then((response) => {
                // console.log('success')
                // console.log(response)
                commit('users/setLoadedUser', response.data, { root: true })
                commit('setLoading', false, { root: true })
                new Noty({type: 'success', text: 'You\'ve just registered successfully', timeout: 5000, theme: 'metroui'}).show()
            }).catch(function (error) {
                console.log('error: ', error)
                commit('setLoading', false, { root: true })
                new Noty({type: 'error', text: 'Sorry, an error occured during your registration process.', timeout: 5000, theme: 'metroui'}).show()
            })
        }
        catch(error) {
            console.log(error)
            if (error.code === 'auth/email-already-in-use') {
                new Noty({type: 'error', text: error.message, timeout: 5000, theme: 'metroui'}).show()
            }
            commit('setLoading', false, { root: true })
            throw new Error(error)
        }
    },
    
    async signInWithGooglePopup ({commit}) {
        try {
            commit('setLoading', true, { root: true })
            let authData = await Auth.signInWithPopup(GoogleAuthProvider)
            const userId = authData.user.uid

            // Check if user already exists in database
            const snapshot = await firebase.database().ref('/users/' + userId).once('value')
            const registeredUser = snapshot.val()

            // If user does not exists, save user data in database at the user node
            if (!registeredUser) {
                return axios.post('/register-new-user', {
                    type: 'oauth',
                    data: authData,
                }).then((response) => {
                    // Load newly registered user in store
                    commit('users/setLoadedUser', response.data, { root: true })
                    commit('setLoading', false, { root: true })
                    new Noty({type: 'success', text: this.app.i18n.t('messages.registration.success'), timeout: 10000, theme: 'metroui'}).show()
                }).catch(function (error) {
                    commit('setLoading', false, { root: true })
                    new Noty({type: 'error', text: 'Sorry, an error occured during your registration process.', timeout: 5000, theme: 'metroui'}).show()
                })
            } else {
                // Load user in store
                commit('users/setLoadedUser', registeredUser, { root: true })
                commit('setLoading', false, { root: true })
                new Noty({type: 'success', text: this.app.i18n.t('messages.login.success'), timeout: 5000, theme: 'metroui'}).show()        
            }
        } 
        catch(error) {
            new Noty({type: 'error', text: this.app.i18n.t('messages.login.error'), timeout: 5000, theme: 'metroui'}).show()
            commit('setError', error, { root: true })
            commit('setLoading', false, { root: true })
        }
    },
    async signInWithFacebookPopup ({commit}) {
        try {
            commit('setLoading', true, { root: true })
            let authData = await Auth.signInWithPopup(FacebookAuthProvider)
            const userId = authData.user.uid

            // Check if user already exists in database
            const snapshot = await firebase.database().ref('/users/' + userId).once('value')
            const registeredUser = snapshot.val()

            // If user does not exists, save user data in database at the user node
            if (!registeredUser) {
                return axios.post('/register-new-user', {
                    type: 'oauth',
                    data: authData,
                }).then((response) => {
                    // Load newly registered user in store
                    commit('users/setLoadedUser', response.data, { root: true })
                    commit('setLoading', false, { root: true })
                    new Noty({type: 'success', text: this.app.i18n.t('messages.registration.success'), timeout: 10000, theme: 'metroui'}).show()
                }).catch(function (error) {
                    commit('setLoading', false, { root: true })
                    new Noty({type: 'error', text: 'Sorry, an error occured during your registration process.', timeout: 5000, theme: 'metroui'}).show()
                })
            } else {
                // Load user in store
                commit('users/setLoadedUser', registeredUser, { root: true })
                commit('setLoading', false, { root: true })
                new Noty({type: 'success', text: this.app.i18n.t('messages.login.success'), timeout: 5000, theme: 'metroui'}).show()        
            }
        } 
        catch(error) {
            new Noty({type: 'error', text: this.app.i18n.t('messages.login.error'), timeout: 5000, theme: 'metroui'}).show()
            commit('setError', error, { root: true })
            commit('setLoading', false, { root: true })
        }
    },
    async signOut ({commit}) {
        commit('setLoading', true, { root: true })
        await Auth.signOut()
        commit('users/setLoadedUser', null, { root: true })
        commit('setLoading', false, { root: true })
    }
}

export const getters = {

}
