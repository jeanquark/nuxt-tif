import {Auth, GoogleAuthProvider, FacebookAuthProvider} from '~/plugins/firebase-client-init.js'
import firebase from 'firebase'
import axios from 'axios'
import setUser from '../helpers/setUser'
import Noty from 'noty'
// import i18n from 'vue-i18n'

export const state = () => ({
})

export const mutations = {
}

export const actions = {
    async signUserIn ({commit}, payload) {
        console.log(payload)
        try {
            // setTimeout(() => {
            //     console.log('waiting')
            //     return
            // }, 3000)

            commit('setLoading', true, { root: true })
            let authData = await Auth.signInWithEmailAndPassword(payload.email, payload.password)
            console.log(authData)
            const userId = authData.uid
            // First set loadedUser with temporary data from firebase auth
            // commit('/users/setLoadedUser', authData)
            // commit('users/setLoadedUser', authData, { root: true })

            // Then asynchronously update loadedUser object with data from user node
            // firebase.database().ref('/users/' + userId).on('value', function (snapshot) {
            //     // commit('/users/setLoadedUser', snapshot.val())
            //     commit('users/setLoadedUser', snapshot.val(), { root: true })
            //     commit('setLoading', false, { root: true })
            //     console.log('loadedUser done')
            // })
            const snapshot = await firebase.database().ref('/users/' + userId).once('value')
            commit('users/setLoadedUser', snapshot.val(), { root: true })
            commit('setLoading', false, { root: true })
            console.log('loadedUser done')
            // commit('setUser', buildUserObject2(authData))
            // console.log(userId)
        } 
        catch(error) {
            console.log(error)
            // commit('setError', error)
            // commit['errors/setError', error]
            // commit('../errors/setError', error)
            // this.$store.commit('errors/setError', error)
            commit('setError', error, { root: true })
        }
    },
    // async signUserIn ({commit, dispatch}, payload) {
    //     console.log(payload)
    //     commit('setLoading', true, { root: true })
    //     // window.location.replace("http://stackoverflow.com")
    //     // return
    //     // return redirect('/')
    //     // redirect('/')
    //     // this.$nuxt.$router.replace({ path: '/admin' })
    //     // this.$router.replace({ path: '/admin' })
    //     // return this.$router.replace({ path: '/admin' })
    //     // this.$router.replace('/home')
    //     // this.$router.go('/admin')
    //     // try {
    //     //   // return redirect('/')
    //     //   // this.$router.push({ path: '/home' })
    //     //   this.$router.replace({ path: '/admin' })
    //     // }
    //     // catch(error) {
    //     //   console.log(error)
    //     //   return
    //     // }
    //     try {
    //         let authData = await Auth.signInWithEmailAndPassword(payload.email, payload.password)
    //         console.log('authData:')
    //         console.log(authData)
    //         // console.log(authData.getIdToken())

    //         // Check user status based on user token
    //         let userStatus = Auth.currentUser.getIdToken().then((idToken) => {
    //             console.log('idToken: ' + idToken)
    //             const payload = JSON.parse(b64DecodeUnicode(idToken.split('.')[1]))
    //             // Confirm the user is an Admin.
    //             console.log(payload)

    //             if (!!payload['admin']) {
    //                 console.log('User is admin')
    //             } else {
    //                 console.log('User is not an admin')
    //             }
    //         })
    //         // .then(() => {
    //         //     // this.loadedUser()
    //         //     console.log(authData)
    //         //     const userId = authData.uid
    //         //     firebase.database().ref('users/' + userId).on('value', function (snapshot) {
    //         //         console.log(snapshot.val())
    //         //         const user = setUser(snapshot.val())
    //         //         commit('setUser', user)
    //         //         commit('setLoading', false, { root: true })
    //         //         // this.$route.replace('/home')
    //         //         // this.$router.replace({ path: '/home' })
    //         //     })
    //         // })
    //         const userId = authData.uid
    //         await firebase.database().ref('/users/' + userId).on('value', function (snapshot) {
    //             commit('setLoadedUser', snapshot.val())
    //             commit('setLoading', false, { root: true })
    //             // return redirect('/home')
    //             // this.$router.replace('/home')
    //             // router.push({ name: 'Home' })
    //             // window.location.replace("http://stackoverflow.com")
    //             // this.$router.replace({ path: '/home' })
    //             console.log('await done')
    //             // redirect('/home')
    //             // window.location.replace('http://localhost:3000/home')
    //         })
    //         // commit('setUser', setUser(authData))
            
    //     }
    //     catch(error) {
    //         console.log(error)
    //         // commit('setError', error)
    //         // commit['errors/setError', error]
    //         // commit('../errors/setError', error)
    //         // this.$store.commit('errors/setError', error)
    //         commit('setError', error, { root: true })
    //         commit('setLoading', false, { root: true })
    //     }
    // },
    // async signUserUp ({commit}, payload) {
    //     console.log(payload)
    //     commit('setLoading', true, { root: true })
    //     try {
    //         let authData = await Auth.createUserWithEmailAndPassword(payload.email, payload.password)
    //         console.log(authData)

    //         // Save user in database
    //         const newUserKey = await firebase.database().ref().child('/users').push().key

    //         authData['status'] = 'user'
    //         authData['id'] = newUserKey
    //         const userObject = setUser(authData)
    //         console.log(userObject)

    //         const user = await firebase.database().ref('/users/' + newUserKey).set(userObject)

    //         // Load user in store
    //         commit('setLoadedUser', userObject)
    //         // this.$toast.success('Successfully signed up!')
    //         commit('setLoading', false, { root: true })
    //     } 
    //     catch(error) {
    //         console.log(error)
    //         // commit('setError', error)
    //         commit('setError', error, { root: true })
    //         commit('setLoading', false, { root: true })
    //     }
    // },
    async signInWithGooglePopup ({commit}) {
        try {
            commit('setLoading', true, { root: true })
            let authData = await Auth.signInWithPopup(GoogleAuthProvider)
            console.log(authData)
            const userId = authData.user.uid

            // Check if user already exists in database
            let user = await firebase.database().ref('/users/' + userId).once('value')
            console.log(user)

            // If not save new user in database
            if (!user) {
                console.log('new user')
                const newUserKey = userId
                let user = firebase.database().ref('/users/' + newUserKey).set(userObject)
            }

            // console.log(i18n.t('pages.index.welcome'))
            // console.log(this.app.i18n.t('messages.login.success'))
            // let abc = this.app.i18n.t('messages.login.success')
            // Load user in store
            commit('users/setLoadedUser', user, { root: true })
            new Noty({type: 'success', text: this.app.i18n.t('messages.login.success'), timeout: 5000, theme: 'metroui'}).show()
            // new Noty({type: 'success', text: i18n.t('pages.index.welcome'), timeout: 5000, theme: 'metroui'}).show()
            commit('setLoading', false, { root: true })
            console.log('signInWithGooglePopup done')
        } 
        catch(error) {
            console.log(error)
            new Noty({type: 'error', text: this.app.i18n.t('messages.login.error'), timeout: 5000, theme: 'metroui'}).show()
            commit('setError', error, { root: true })
            commit('setLoading', false, { root: true })
        }
    },
    async signInWithFacebookPopup ({commit}) {
        commit('setLoading', true)
        let authData = await Auth.signInWithPopup(FacebookAuthProvider)
        commit('setLoadedUser', buildUserObject(authData))
        commit('setLoading', false)
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
