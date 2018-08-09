import {Auth, GoogleAuthProvider, FacebookAuthProvider} from '~/plugins/firebase-client-init.js'
import firebase from 'firebase'
import axios from 'axios'
// import setUser from '../helpers/setUser'
import Noty from 'noty'
import moment from 'moment'
// import i18n from 'vue-i18n'

// function buildUserObject (payload) {
//     // let { email, displayName, uid, photoURL, pseudo, country, year_birth, language } = authData.user
//     // let user = {}
//     // user['email'] = email
//     // user['name'] = displayName
//     // user['uid'] = uid
//     // user['picture'] = photoURL
//     // user['isAdmin'] = authData.isAdmin
//     // user['pseudo'] = pseudo
//     // user['country'] = country
//     // user['year_birth'] = year_birth
//     // user['language'] = language
//     // return user
//     // let { email, uid } = authData.user
//     let user = {}
//     user.id = payload.id,
//     user.email = payload.email,
//     user.username = payload.username,
//     user.country = {
//         name: payload.country.name,
//         slug: payload.country.slug
//     },
//     user.language = {
//         name: payload.language.name,
//         slug: payload.language.slug
//     },
//     user.level = {
//         value: 1,
//         updated_at: moment().unix()
//     },
//     user.tokens = {
//         value: 10,
//         udpated_at: moment().unix()
//     },
//     user.status = {
//         value: 'user',
//         updated_at: moment().unix()
//     },
//     user._created_at = moment().unix(),
//     user._updated_at = moment().unix()


//     // user['id'] = uid
//     // // user['status'] = 'user'
//     // user['status'] = {
//     //     name: 'User',
//     //     slug: 'user'
//     // }
//     // user['tokens'] = {
//     //     value: 10
//     // },
//     // user['level'] = {
//     //     value: 1
//     // }
//     return user
// }

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
            return 
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
    async signUserUp ({commit}, payload) {
        // console.log(payload)
        // return
        commit('setLoading', true, { root: true })

        // // Check if user email is already registered
        // // const user = await firebase.database().ref('/users').child(payload.email).once('value')
        // // console.log('user: ', user)
        // // return
        // Auth.createUserWithEmailAndPassword(payload.email, payload.password).catch(function(error) {
        //   // Handle Errors here.
        //   var errorCode = error.code;
        //   var errorMessage = error.message;
        //   // ...
        //   console.log(error)
        // });

        try {
            let authData = await Auth.createUserWithEmailAndPassword(payload.email, payload.password)
            // Auth.createUserWithEmailAndPassword(payload.email, payload.password)
            console.log('authData: ', authData)
            const userId = authData.uid
            console.log('userId: ', userId)
            // Add user id to payload
            payload['id'] = userId
            console.log('payload: ', payload)

            return axios.post('/register-new-user', {
                type: 'form',
                data: payload
            }).then((response) => {
                console.log('success')
                console.log(response)
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
            // new Noty({type: 'error', text: this.app.i18n.t('messages.login.error'), timeout: 5000, theme: 'metroui'}).show()
            console.log(error)
            if (error.code === 'auth/email-already-in-use') {
                new Noty({type: 'error', text: error.message, timeout: 5000, theme: 'metroui'}).show()
            }
            // return
            // new Noty({type: 'error', text: error, timeout: 5000, theme: 'metroui'}).show()
            // commit('setError', error, { root: true })
            commit('setLoading', false, { root: true })
            // return response()->json({code: 500, message: 'error'});
            // return response.status(500)
            throw new Error(error)
        }

            // const newUserKey = authData.uid
            // payload['id'] = newUserKey
            // console.log('payload: ', payload)
            // const newUser = buildUserObject(payload)
            // console.log('newUser: ', newUser)
            // // return

            // // Save user in database
            // // const newUserKey = firebase.database().ref().child('/users').push().key

            // // authData['status'] = 'user'
            // // authData['id'] = newUserKey

            // firebase.database().ref('/users/' + newUserKey).set(newUser)

            // // Load user in store
            // commit('setLoadedUser', newUser)
            // // this.$toast.success('Successfully signed up!')
            // commit('setLoading', false, { root: true })



            
        // } 
        // catch(error) {
        //     console.log(error)
        //     // commit('setError', error)
        //     commit('setError', error, { root: true })
        //     commit('setLoading', false, { root: true })
        // }
    },
    // async signInWithGooglePopup ({commit}) {
    //     try {
    //         commit('setLoading', true, { root: true })
    //         let authData = await Auth.signInWithPopup(GoogleAuthProvider)
    //         console.log(authData)
    //         // console.log('getIdToken:')
    //         // console.log(authData.user.getIdToken())
    //         // console.log(authData.user.getIdToken().claims)
    //         // console.log(authData.user.getIdToken().claims.admin)
    //         const userId = authData.user.uid

    //         // Check if user already exists in database
    //         let user = await firebase.database().ref('/users/' + userId).once('value')
    //         // let user = {}
    //         // await firebase.database().ref('/users/' + userId).on('value', function(snapshot) {
    //         //     user = snapshot.val()
    //         // })
    //         // console.log(user)
    //         // return
    //         console.log(user.val())
    //         const registeredUser = user.val()

    //         // If user does not exists, save new user in database
    //         if (!registeredUser) {
    //             console.log('new user')
    //             const newUserKey = userId
    //             let user = firebase.database().ref('/users/' + newUserKey).set(buildUserObjectOAuth(authData))
    //         } else {
    //             console.log('user already registered')
    //         }

    //         // Load user in store
    //         commit('users/setLoadedUser', registeredUser, { root: true })
    //         if (!registeredUser) {
    //             new Noty({type: 'success', text: this.app.i18n.t('messages.registration.success'), timeout: 5000, theme: 'metroui'}).show()
    //         } else {
    //             new Noty({type: 'success', text: this.app.i18n.t('messages.login.success'), timeout: 5000, theme: 'metroui'}).show()        
    //         }
    //         // new Noty({type: 'success', text: i18n.t('pages.index.welcome'), timeout: 5000, theme: 'metroui'}).show()
    //         commit('setLoading', false, { root: true })
    //         console.log('signInWithGooglePopup done')
    //     } 
    //     catch(error) {
    //         console.log(error)
    //         new Noty({type: 'error', text: this.app.i18n.t('messages.login.error'), timeout: 5000, theme: 'metroui'}).show()
    //         commit('setError', error, { root: true })
    //         commit('setLoading', false, { root: true })
    //     }
    // },
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
