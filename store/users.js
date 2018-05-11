import {Auth, GoogleAuthProvider, FacebookAuthProvider} from '~/plugins/firebase-client-init.js'
import firebase from 'firebase'
// import admin from 'firebase-admin'
import axios from 'axios'
import setUser from '../helpers/setUser'
import Noty from 'noty'

function buildUserObjectOAuth (authData) {
    let { email, displayName, uid, photoURL } = authData.user
    let user = {}
    user['email'] = email
    user['name'] = displayName
    user['uid'] = uid
    user['picture'] = photoURL
    user['isAdmin'] = authData.isAdmin
    return user
}

function buildUserObject (authData) {
    // let user = {}
    // user['email'] = authData.email
    // user['id'] = authData.id
    // user['status'] = 'user'
    // return user
    let user = {
        email: authData.email,
        id: authData.id,
        status: authData.status
    }
    return user
}

function b64DecodeUnicode(str) {
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return decodeURIComponent(atob(str).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}


export const state = () => ({
    loadedUser: null,
    loadedAllUsers: [],
    loadedAvatarImages: [],
    loadedUserTeams: []
})

export const mutations = {
    setUser (state, payload) {
        state.loadedUser = payload
    },
    setAllUsers (state, payload) {
        state.loadedAllUsers = payload
    },
    setAvatarImages (state, payload) {
        state.loadedAvatarImages = payload
    },
    setUserTeams (state, payload) {
        console.log('call to setUserTeams mutation')
        state.loadedUserTeams = payload
    }
}

export const actions = {
    // nuxtServerInit ({ commit }, { req }) {
    //     if (req.user) {
    //          // commit('setUser', req.user)
    //          commit('users/setUser', req.user, { root: true })
    //     }
 //     },
    loadedAllUsers ({commit}) {
        try {
            firebase.database().ref('/users/').on('value', function (snapshot) {
                // console.log(snapshot.val())
                const usersArray = []
                for (const key in snapshot.val()) {
                    usersArray.push({ ...snapshot.val()[key]})
                }
                // console.log(postsArray)
                commit('setAllUsers', usersArray)
            })
        } catch(error) {
            console.log(error)
        }
    },
    async updateUserAccount ({commit, state, dispatch}, payload) {
            console.log('async updateUserAccount')
            try {
                // admin.auth().getUserByEmail('test3@test.com').then((user) => {
                //     admin.auth().setCustomUserClaims(user.uid, null)
                // })
                console.log(payload)
                const userEmail = payload.userEmail
                // const uid = payload.uid
                const action = payload.action

                // // this.$axios.$post('/setCustomClaims', {userEmail: userEmail})
                // // $.post('/setCustomClaims', {userEmail: userEmail}, (data, status) => {})
                // // this.$axios({ method: 'post', url: '/setCustomClaims', data: {firstName: 'Fred', lastName: 'Flintstone'}})
                // // await this.$axios.$post('/setCustomClaims', { userEmail: 'jm.kleger@gmail.com' })
                // await this.$axios.$post('/setCustomClaims', { userEmail: userEmail, action: action })
                // // dispatch('updateUser', {status: 'admin'})
                // console.log('successfully called setCustomClaims ' + action + ' method.')
                // console.log('called ' + action)
                // console.log(user2)
                // const userId = "-L9jQ_OL56RapwI3K1C7"
                // const user = state.loadedAllUsers.find(user => user.email === userEmail)
                // console.log(user)

                // if (action == 'userToAdmin') {
                //     dispatch('updateUser', {status: 'admin', id: user.id})
                // } else if (action == 'adminToUser') {
                //     dispatch('updateUser', {status: 'user', id: user.id})
                // }
                // this.$toast.success('Successfully updated ' + userEmail + ' account!')


                return this.$axios.$post('/setCustomClaims', { userEmail: userEmail, action: action }).then((user) => {
                    console.log('successfully called setCustomClaims method.')
                    console.log('called ' + action)
                    console.log(user)

                    const user2 = state.loadedAllUsers.find(user => user.email === userEmail)

                    if (action == 'userToAdmin') {
                        dispatch('updateUser', {status: 'admin', id: user2.id})
                    } else if (action == 'adminToUser') {
                        dispatch('updateUser', {status: 'user', id: user2.id})
                    }
                    this.$toast.success('Successfully updated account!')
                })
            }
            catch(error) {
                console.log(error)
            }
    },
    loadedUser ({commit}) {
        console.log('Entering loadedUser')
        const userId = firebase.auth().currentUser.uid
        console.log(userId)
        // console.log(userId)
        // firebase.database().ref('users/' + userId).on('value')
        firebase.database().ref('users/' + userId).on('value', function (snapshot) {
            const userArray = []
            for (const key in snapshot.val()) {
                userArray.push({ ...snapshot.val()[key]})
            }
            commit('setUser', userArray)
        })
    },
    async updateUser ({commit}, payload) {
        try {
            // const userId = firebase.auth().currentUser.uid
            // console.log(userId)
            // let updateObj = payload
            // console.log(updateObj)
            const userId = payload.id
            return firebase.database().ref('/users/' + userId).update(payload)

        } catch(error) {
            console.log(error)
        }
    },
    // updateUserAccountToAdmin ({commit}, payload) {
    //     console.log('async updateUserAccountToAdmin')
    //     console.log(payload)
    //     const userEmail = 'jm.kleger@gmail.com'
    //     this.$axios.$post('/setCustomClaims', {userEmail: userEmail})
    //     // this.$axios.$get('/setCustomClaims')
    //       .then(response => {
    //         console.log('response')
    //       })
    //       .catch(e => {
    //         console.log(e)
    //       })
    // },
    // async checkUserCustomClaim () {
    //     console.log('checkUserCustomClaim')
    //     return 'abc'
    // },
    async signUserIn ({commit, dispatch}, payload) {
        console.log(payload)
        commit('setLoading', true, { root: true })
        // return
        // return redirect('/admin')
        // redirect('/')
        // this.$nuxt.$router.replace({ path: '/admin' })
        // this.$router.replace({ path: '/admin' })
        // return this.$router.replace({ path: '/admin' })
        // this.$router.replace('/')
        // this.$router.go('/admin')
        // try {
        //   // return redirect('/')
        //   // this.$router.push({ path: '/home' })
        //   this.$router.replace({ path: '/admin' })
        // }
        // catch(error) {
        //   console.log(error)
        //   return
        // }
        try {
            let authData = await Auth.signInWithEmailAndPassword(payload.email, payload.password)
            // console.log(authData)
            // console.log(authData.getIdToken())

            // Check user status based on user token
            let userStatus = Auth.currentUser.getIdToken().then((idToken) => {
                console.log('idToken: ' + idToken)
                const payload = JSON.parse(b64DecodeUnicode(idToken.split('.')[1]))
                // Confirm the user is an Admin.
                console.log(payload)

                if (!!payload['admin']) {
                        console.log('User is admin')
                } else {
                        console.log('User is not an admin')
                }
            })
            // commit('setUser', buildUserObjectFromSignUp(authData))
            commit('setUser', setUser(authData))
            commit('setLoading', false, { root: true })
            // new Noty({type: 'success', text: 'You successfully signed in!', timeout: 5000, theme: 'metroui'}).show()
            // return
            // this.$router.replace('/home')
            // return redirect('/home')
        }
        catch(error) {
            console.log(error)
            // commit('setError', error)
            // commit['errors/setError', error]
            // commit('../errors/setError', error)
            // this.$store.commit('errors/setError', error)
            commit('setError', error, { root: true })
            commit('setLoading', false, { root: true })
        }
    },
    async signUserUp ({commit}, payload) {
        console.log(payload)
        commit('setLoading', true, { root: true })
        try {
            let authData = await Auth.createUserWithEmailAndPassword(payload.email, payload.password)
            console.log(authData)

            // Save user in database
            const newUserKey = firebase.database().ref().child('/users').push().key

            authData['status'] = 'user'
            authData['id'] = newUserKey

            firebase.database().ref('/users/' + newUserKey).set(buildUserObject(authData))

            // Load user in store
            commit('setUser', buildUserObject(authData))
            // this.$toast.success('Successfully signed up!')
            commit('setLoading', false, { root: true })
        } 
        catch(error) {
            console.log(error)
            // commit('setError', error)
            commit('setError', error, { root: true })
            commit('setLoading', false, { root: true })
        }
    },
    async signInWithGooglePopup ({commit}) {
        commit('setLoading', true, { root: true })
        try {
            let authData = await Auth.signInWithPopup(GoogleAuthProvider)
            console.log(authData)

            // Save user in database
            const newUserKey = firebase.database().ref().child('/users').push().key
            authData['status'] = 'user'
            authData['id'] = newUserKey

            firebase.database().ref('/users/' + newUserKey).set(buildUserObjectOAuth(authData))

            // Load user in store
            commit('setUser', buildUserObject(authData))
            new Noty({type: 'success', text: 'Utilisateur enregistré avec succès!', timeout: 5000, theme: 'metroui'}).show()
            commit('setLoading', false, { root: true })
        } 
        catch(error) {
            console.log(error)
            new Noty({type: 'error', text: 'Utilisateur n\'a pas pu être enregistré', timeout: 5000, theme: 'metroui'}).show()
            commit('setError', error, { root: true })
            commit('setLoading', false, { root: true })
        }
    },
    async signInWithFacebookPopup ({commit}) {
        commit('setLoading', true)
        let authData = await Auth.signInWithPopup(FacebookAuthProvider)
        commit('setUser', buildUserObject(authData))
        commit('setLoading', false)
    },
    async signOut ({commit}) {
        commit('setLoading', true, { root: true })
        await Auth.signOut()
        commit('setUser', null)
        commit('setLoading', false, { root: true })
        // new Noty({type: 'success', text: 'You successfully logged out!', timeout: 5000, theme: 'metroui'}).show()
        // return redirect('/')
        // setTimeout(function() {
        //   commit('setLoadingPage', false, { root: true })
        // }, 1000)
    },
    // signOut ({commit}) {
    //   commit('setLoading', true, { root: true })
    //   firebase.auth().signOut().then(() => {
    //     // return redirect('/')
    //     // this.$router.replace({ path: '/' })
    //     commit('setUser', null)
    //     commit('setLoading', false, { root: true })
    //     new Noty({type: 'success', text: 'You successfully logged out!', timeout: 5000, theme: 'metroui'}).show()
    //     // return router.replace('/')
    //     // window.location.href = "https://google.ch"
    //     // return redirect('/')
    //   }).catch(function(error) {
    //       console.log(error)
    //   })
    //   // this.$router.replace({ path: '/' })
    // },

    async loadedAvatarImages ({commit}) {
        try {
            firebase.database().ref('/avatar_images/').on('value', function (snapshot) {
                const imagesArray = []
                for (const key in snapshot.val()) {
                    imagesArray.unshift({ ...snapshot.val()[key]})
                }
                commit('setAvatarImages', imagesArray)
            })
        } 
        catch(error) {
            console.log(error)
            new Noty({type: 'error', text: 'Image non trouvée', timeout: 5000, theme: 'metroui'}).show()
            commit('setError', error, { root: true })
            commit('setLoading', false, { root: true })
        }
    },
    async loadedUserTeams ({commit, state}) {
        try {
            const userTeams1 = []
            const team1 = {
              "activity" : {
                "name" : "Sport",
                "slug" : "sport"
              },
              "alpha2" : "UY",
              "alpha3" : "URY",
              "capitale" : "Montevideo",
              "category" : {
                "name" : "Football",
                "slug" : "football"
              },
              "code" : 858,
              "competitions" : {
                "world_cup_2018" : true
              },
              "continent_en" : "America",
              "continent_fr" : "Amérique",
              "couleur1" : "bleu",
              "couleur2" : "noir",
              "couleur3" : "",
              "flags" : "images/flags/183.jpg",
              "hymne" : "Orientales, la Patria o la tumba",
              "hymne_son" : "",
              "icon" : "images/flags/icon/183.png",
              "id" : "-LBVgvTA8hEe39qNgaIv",
              "image" : "uruguay.png",
              "langue" : "Espagnol",
              "map" : "images/carte/183.gif",
              "name" : "Uruguay",
              "name_fr" : "Uruguay",
              "slug" : "uruguay",
              "small_flags" : "images/flags/small_flags/183.jpg"
            }
            const team2 = {
              "activity" : {
                "name" : "Sport",
                "slug" : "sport"
              },
              "alpha2" : "SE",
              "alpha3" : "SWE",
              "capitale" : "Stockholm",
              "category" : {
                "name" : "Football",
                "slug" : "football"
              },
              "code" : 752,
              "competitions" : {
                "world_cup_2018" : true
              },
              "continent_en" : "Europa",
              "continent_fr" : "Europe",
              "couleur1" : "jaune",
              "couleur2" : "bleu",
              "couleur3" : "",
              "flags" : "images/flags/161.jpg",
              "hymne" : "Du gamla, du fria",
              "hymne_son" : "",
              "icon" : "images/flags/icon/161.png",
              "id" : "-LBVgvShxjCtTvfi7X9N",
              "image" : "sweden.png",
              "langue" : "Suédois",
              "map" : "images/carte/161.gif",
              "name" : "Sweden",
              "name_fr" : "Suède",
              "slug" : "sweden",
              "small_flags" : "images/flags/small_flags/161.jpg"
            }

            userTeams1.push(team1)
            userTeams1.push(team2)
            // commit('setUserTeams', userTeams1)
            // return userTeams1

            // const userId = firebase.auth().currentUser.uid
            const userId = state.loadedUser.user_id
            // firebase.database().ref('/userTeams/').child(userId).on('value')
            //     .then(function (snapshot) {
            //         // console.log(snapshot.val())
            //         const userTeamsArray = []
            //         // const userTeamsArray = snapshot.val()

            //         for (const key in snapshot.val()) {
            //             // console.log(key)
            //             // userTeamsArray.push({ ...snapshot.val()[key]})
            //             // userTeamsArray.push({[key]: snapshot.val()[key]})
            //             // for (const teamId in key) {
            //             //     userTeamsArray.push({[key]: teamId})
            //             // }
            //             userTeamsArray.push(key)
            //         }
            //         // console.log(userTeamsArray)
            //         // commit('setUserTeams', userTeamsArray)
            //     })
            //     .then(function (childSnapshot) {

            //     })
            let userTeamsIds = []
            let userTeams = []
            let abc = []
            // const teamIds = ['-LBVgvOsCUALzowK576H', '-LBVgvR__QJEcYxQ7a7g', '-LBVgvSq8Kukah-OB-ib']
            // let promise = new Promise((resolve, reject) => {
            firebase.database().ref('userTeams').child(userId).on('value', function (snapshot) {
                console.log(snapshot.val())
                for (const key in snapshot.val()) {
                    userTeamsIds.push(key)
                }
                // userTeamsIds.forEach((teamId) => {
                if (userTeamsIds.length > 0) {
                    firebase.database().ref('/teams').child(userTeamsIds[0]).on('value', function (childSnapshot) {
                    // firebase.database().ref('/teams').child(teamId).on('value', function (childSnapshot) {
                        userTeams.push(childSnapshot.val())
                        // for (const key in childSnapshot.val()) {
                        //     userTeamsIds.push(key)
                        //     abc.push(key)
                        // }
                        commit('setUserTeams', userTeams)
                    })
                }
                    // commit('setUserTeams', userTeams)
                // })
                // setTimeout(() => {
                //     commit('setUserTeams', userTeams)
                // }, 3000)

                // const start = async () => {
                //   await Promise.all(userTeamsIds.map(async teamId => {
                //     // await waitFor(50)
                //     // console.log(num)
                //     firebase.database().ref('/teams').child(teamId).on('value', function (childSnapshot) {
                //         userTeams.push(childSnapshot.val())
                //     })
                //   }))
                //   console.log('Done')
                // }
                // start()
                // commit('setUserTeams', userTeams)
                console.log(userTeamsIds)
                console.log(userTeams)
                // resolve(userTeams)
            })
            // })
            // .then(() => {
            //     console.log('abc')
            //     commit('setUserTeams', userTeams)
            // })

            // setTimeout(() => {
            //     commit('setUserTeams', userTeams)
            // }, 3000)
            // var p = new Promise(function(resolve, reject) {  
            //     setTimeout(() => resolve(4), 5000);
            // })
            // p.then((res) => {
            //     console.log('resolved')
            // })

            // promise.then((res) => {
            //     console.log('promise resolved')
            //     console.log(res)
            //     commit('setUserTeams', res)
            // })

            // teamIds.forEach((teamId) => {
                // console.log(teamId)
                // firebase.database().ref('/teams').child(teamIds[2]).on('value', function (snapshot) {
                //     userTeams.push(snapshot.val())
                //     // return userTeams
                //     commit('setUserTeams', userTeams)

                // })
            // })
            // console.log(userTeams)
            // return userTeams
        } 
        catch(error) {
            console.log(error)
            commit('setError', error, { root: true })
        }
    },
    async updateUserTeams ({commit}, payload) {
        // console.log(payload)
        try {
            const userId = firebase.auth().currentUser.uid
            const teams = payload

            // 1) First delete all existing team references in userTeams node
            firebase.database().ref('/userTeams/').child(userId).remove()

            // 2) Then delete all existing user references in teamUsers node
            firebase.database().ref('/teamUsers/').orderByChild(userId).equalTo(true).once('value', function (snapshot) {
                // console.log(snapshot.val())
                snapshot.forEach(function(childSnapshot) {
                    console.log(childSnapshot.key)
                    firebase.database().ref('/teamUsers').child(childSnapshot.key).child(userId).remove()
                })
            }).then(() => {
                // console.log('Done')
                // console.log(teams)
                // 3) Save each team in userTeams node && user in each teamUsers node
                teams.forEach((team) => {
                    firebase.database().ref('/userTeams/').child(userId).update({[team.id]: true})
                    firebase.database().ref('/teamUsers/').child(team.id).update({[userId]: true})

                    new Noty({type: 'success', text: 'You are following ' + team.name + '. Future will tell whether it\'s a wise move or not&#9786;', timeout: 5000, theme: 'metroui'}).show()
                })
            })
        } 
        catch(error) {
            console.log(error)
            new Noty({type: 'error', text: 'Erreur lors de la sauvegarde des nouvelles équipes', timeout: 5000, theme: 'metroui'}).show()
            commit('setError', error, { root: true })
            commit('setLoading', false, { root: true })
        }
    }
}

export const getters = {
    loadedUser (state) {
        return state.loadedUser
    },
    loadedAllUsers (state) {
        return state.loadedAllUsers
    },
    loadedAvatarImages (state) {
        return state.loadedAvatarImages
    },
    loadedUserTeams (state) {
        return state.loadedUserTeams
    }
}