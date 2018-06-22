import {Auth, GoogleAuthProvider, FacebookAuthProvider} from '~/plugins/firebase-client-init.js'
import firebase from 'firebase'
// import admin from 'firebase-admin'
import axios from 'axios'
import setUser from '../helpers/setUser'
import Noty from 'noty'
// import Router from 'vue-router'

function buildUserObjectOAuth (authData) {
    let { email, displayName, uid, photoURL, pseudo, country, year_birth, language } = authData.user
    let user = {}
    user['email'] = email
    user['name'] = displayName
    user['uid'] = uid
    user['picture'] = photoURL
    user['isAdmin'] = authData.isAdmin
	user['pseudo'] = pseudo
	user['country'] = country
	user['year_birth'] = year_birth
	user['language'] = language
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
    loadedUserTeams: [],
    updateUser: null,
})

export const mutations = {
    setLoadedUser (state, payload) {
        console.log('entering setLoadedUser mutation')
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
    },
    setUpdateUser (state, payload) {
        console.log('entering setUpdatedUser mutation')
        console.log(payload)
        state.updateUser = payload
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
            // commit('setLoading', true, { root: true })
            console.log('async updateUserAccount')
            try {
                // console.log(payload)
                const userEmail = payload.userEmail
                const action = payload.action

                return this.$axios.$post('/setCustomClaims', { userEmail: userEmail, action: action }).then((user) => {
                    // console.log('successfully called setCustomClaims method.')
                    // console.log('called ' + action)
                    // console.log(user)

                    if (action == 'userToAdmin') {
                        dispatch('updateUser', {status: 'admin', id: user.uid})
                    } else if (action == 'adminToUser') {
                        dispatch('updateUser', {status: 'user', id: user.uid})
                    }
                    // commit('setLoading', false, { root: true })
                })
            }
            catch(error) {
                console.log(error)
            }
    },
    async loadedUser ({commit}) {
        try {
            // const userId = firebase.auth().currentUser.uid
            // firebase.database().ref('/posts/' + userId).on('value', function (snapshot) {
            //     console.log(snapshot.val())
            //     commit('setLoadedUser', snapshot.val())
            // })
            console.log('Entering loadedUser')
            const userId = firebase.auth().currentUser.uid
            console.log(userId)
            // console.log(userId)
            // firebase.database().ref('users/' + userId).on('value')
            firebase.database().ref('users/' + userId).on('value', function (snapshot) {
                console.log(snapshot.val())
                // commit('setLoadedUser', snapshot.val())
                // const user = setUser(snapshot.val())
                // commit('setUser', user)
                // const userArray = []
                // for (const key in snapshot.val()) {
                //     userArray.push(snapshot.val())
                // }
                // commit('setLoadedUser', userArray)
                const userArray = []
                for (const key in snapshot.val()) {
                    userArray.push({ ...snapshot.val()[key], id: key})
                }
                // console.log(postsArray)
                commit('setLoadedUser', userArray)

            })
        } catch (error) {
            new Noty({type: 'error', text: 'LoadedUser failed. Error: ' + error, timeout: 5000, theme: 'metroui'}).show()
            console.log(error)
        }
    },
    async updateUser ({commit}, payload) {
        try {
            // console.log(payload)
            const userId = payload.id
            // console.log(userId)
            firebase.database().ref('/users/' + userId).update(payload).then((response) => {
                new Noty({type: 'success', text: 'Modifications de l\'utilisateur effectuées avec succès', timeout: 5000, theme: 'metroui'}).show()
            }).catch(e => {
                console.log(e)
            })

        } catch(error) {
            new Noty({type: 'error', text: 'Modifications de l\'utilisateur non effectuées. Erreur: ' + error, timeout: 5000, theme: 'metroui'}).show()
            console.log(error)
        }
    },
    async signUserIn ({commit}, payload) {
        console.log(payload)
        try {
            let authData = await Auth.signInWithEmailAndPassword(payload.email, payload.password)
            console.log(authData)
            const userId = authData.uid
            // First set loadedUser with temporary data from firebase auth
            commit('setLoadedUser', authData)
            commit('setLoading', false, { root: true })
            // Then asynchronously update loadedUser object with data from user node
            firebase.database().ref('/users/' + userId).on('value', function (snapshot) {
                commit('setLoadedUser', snapshot.val())
                console.log('loadedUser done')
            })
            // commit('setUser', buildUserObject2(authData))
            console.log(userId)
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
            commit('setLoadedUser', buildUserObject(authData))
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
            // const newUserKey = firebase.database().ref().child('/users').push().key
            authData['status'] = 'user'
            newUserKey = authData['id']
            console.log(newUserKey)
            console.log('authData:')
            console.log(authData)

            firebase.database().ref('/users/' + newUserKey).set(buildUserObjectOAuth(authData))

            // Load user in store
            commit('setLoadedUser', buildUserObject(authData))
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
        commit('setLoadedUser', buildUserObject(authData))
        commit('setLoading', false)
    },
    async signOut ({commit}) {
        commit('setLoading', true, { root: true })
        await Auth.signOut()
        commit('setLoadedUser', null)
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
            // const user = this
            const userId = state.loadedUser.id
            // return userId
            console.log(userId)
            let userTeamsIds = []
            let userTeams = []
            // console.log('DEF')
            // let ghi = function() {
                // return new Promise(function (resolve, reject) {
                    // firebase.database().ref('/userTeams').child(userId).on('value', function (snapshot) {
                    firebase.database().ref('/userTeams').child(userId).once('value', function (snapshot) {
                        console.log(snapshot.val())
                        for (const key in snapshot.val()) {
                            userTeamsIds.push(key)
                        }
                        if (userTeamsIds.length > 0) {
                            userTeamsIds.forEach((teamId) => {
                                firebase.database().ref('/teams').child(teamId).once('value', function (childSnapshot) {
                                // firebase.database().ref('/teams').child(userTeamsIds[0]).on('value', function (childSnapshot) {
                                    userTeams.push(childSnapshot.val())
                                    // commit('setUserTeams', userTeams)
                                })
                            })
                            // return resolve()
                            // console.log(userTeams)
                        }

                    }).then(() => {
                        console.log(userTeams)
                        commit('setUserTeams', userTeams)
                    })
                // })
            // }
            // ghi().then(() => {
            //     console.log(userTeams)
            //     commit('setUserTeams', userTeams)
            // })
            // return
            // setTimeout(() => {
            //     commit('setUserTeams', userTeams)
            // }, 3000)





            // // return
            // // const userId = firebase.auth().currentUser.uid
            // const userId = state.loadedUser.user_id
            // // firebase.database().ref('/userTeams/').child(userId).on('value')
            // //     .then(function (snapshot) {
            // //         // console.log(snapshot.val())
            // //         const userTeamsArray = []
            // //         // const userTeamsArray = snapshot.val()

            // //         for (const key in snapshot.val()) {
            // //             // console.log(key)
            // //             // userTeamsArray.push({ ...snapshot.val()[key]})
            // //             // userTeamsArray.push({[key]: snapshot.val()[key]})
            // //             // for (const teamId in key) {
            // //             //     userTeamsArray.push({[key]: teamId})
            // //             // }
            // //             userTeamsArray.push(key)
            // //         }
            // //         // console.log(userTeamsArray)
            // //         // commit('setUserTeams', userTeamsArray)
            // //     })
            // //     .then(function (childSnapshot) {

            // //     })
            // let userTeamsIds = []
            // let userTeams = []
            // let abc = []
            // // const teamIds = ['-LBVgvOsCUALzowK576H', '-LBVgvR__QJEcYxQ7a7g', '-LBVgvSq8Kukah-OB-ib']
            // // let promise = new Promise((resolve, reject) => {
            // firebase.database().ref('userTeams').child(userId).on('value', function (snapshot) {
            //     console.log(snapshot.val())
            //     for (const key in snapshot.val()) {
            //         userTeamsIds.push(key)
            //     }
            //     // userTeamsIds.forEach((teamId) => {
            //     if (userTeamsIds.length > 0) {
            //         firebase.database().ref('/teams').child(userTeamsIds[0]).on('value', function (childSnapshot) {
            //         // firebase.database().ref('/teams').child(teamId).on('value', function (childSnapshot) {
            //             userTeams.push(childSnapshot.val())
            //             // for (const key in childSnapshot.val()) {
            //             //     userTeamsIds.push(key)
            //             //     abc.push(key)
            //             // }
            //             commit('setUserTeams', userTeams)
            //         })
            //     }
            //         // commit('setUserTeams', userTeams)
            //     // })
            //     // setTimeout(() => {
            //     //     commit('setUserTeams', userTeams)
            //     // }, 3000)

            //     // const start = async () => {
            //     //   await Promise.all(userTeamsIds.map(async teamId => {
            //     //     // await waitFor(50)
            //     //     // console.log(num)
            //     //     firebase.database().ref('/teams').child(teamId).on('value', function (childSnapshot) {
            //     //         userTeams.push(childSnapshot.val())
            //     //     })
            //     //   }))
            //     //   console.log('Done')
            //     // }
            //     // start()
            //     // commit('setUserTeams', userTeams)
            //     console.log(userTeamsIds)
            //     console.log(userTeams)
            //     // resolve(userTeams)
            // })
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
                if (teams.length > 0) {
                    teams.forEach((team) => {
                        firebase.database().ref('/userTeams/').child(userId).update({[team.id]: true})
                        firebase.database().ref('/teamUsers/').child(team.id).update({[userId]: true})

                        new Noty({type: 'success', text: 'You are following ' + team.name + '. Future will tell whether it\'s a wise move or not&#9786;', timeout: 5000, theme: 'metroui'}).show()
                    })
                } else {
                    new Noty({type: 'warning', text: 'You are not following any team anymore', timeout: 5000, theme: 'metroui'}).show()
                }
            }).then(() => {
                commit('setUserTeams', teams)
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
