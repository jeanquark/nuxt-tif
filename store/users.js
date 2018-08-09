import {Auth, GoogleAuthProvider, FacebookAuthProvider} from '~/plugins/firebase-client-init.js'
import firebase from 'firebase'
// import admin from 'firebase-admin'
import axios from 'axios'
// import setUser from '../helpers/setUser'
import Noty from 'noty'
import moment from 'moment'
// import sweetAlert from '~/plugins/vue-sweetalert2.js'
// import vueSweetAlert from 'vue-sweetalert2'
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
        // console.log('entering setLoadedUser mutation')
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
        console.log(payload)
        state.loadedUserTeams = payload
        // const payload2 = Object.freeze(payload)
        // state.loadedUserTeams = payload2
        // state.loadedUserTeams = {activity: 'Sport'}
    },
    setUpdateUser (state, payload) {
        // console.log('entering setUpdatedUser mutation')
        // console.log(payload)
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
                    dispatch('updateUser', {
                        status: {
                            value: 'admin', 
                            updated_at: moment().unix()
                        },
                        id: user.uid
                    })
                } else if (action == 'adminToUser') {
                    dispatch('updateUser', {
                        status: {
                            value: 'user',
                            updated_at: moment().unix()
                        }, 
                        id: user.uid
                    })
                }
                // commit('setLoading', false, { root: true })
            }).catch(error => {
                console.log(error)
            })
        }
        catch(error) {
            console.log(error)
            throw new Error(error)
        }
    },
    // async loadedUser ({commit}, payload) {
    //     try {
    //         // const userId = firebase.auth().currentUser.uid
    //         // firebase.database().ref('/posts/' + userId).on('value', function (snapshot) {
    //         //     console.log(snapshot.val())
    //         //     commit('setLoadedUser', snapshot.val())
    //         // })
    //         console.log('Entering loadedUser')
    //         // console.log('payload: ', payload)
    //         // console.log('FIREBASE.AUTH().CURRENTUSER: ', firebase.auth())
    //         // firebase.auth().onAuthStateChanged(function(user) {
    //         return await firebase.auth().onAuthStateChanged(user => {
    //             setTimeout(() => {
    //                 if (user) {
    //                     // console.log('User: ', user)
    //                     // console.log('Email: ', user.email)
    //                     const userId = user.uid
    //                     // console.log(userId)
    //                     firebase.database().ref('users/' + userId).on('value', function (snapshot) {
    //                         // console.log(snapshot.val())
    //                         console.log('Call to firebase user node')
    //                         // commit('setLoadedUser', snapshot.val())
    //                         // const user = setUser(snapshot.val())
    //                         // commit('setUser', user)
    //                         // const userArray = []
    //                         // for (const key in snapshot.val()) {
    //                         //     userArray.push(snapshot.val())
    //                         // }
    //                         // commit('setLoadedUser', userArray)
    //                         const userArray = []
    //                         for (const key in snapshot.val()) {
    //                             userArray.push({ ...snapshot.val()[key], id: key})
    //                         }
    //                         // console.log(postsArray)
    //                         // commit('setLoadedUser', userArray)
    //                         commit('setLoadedUser', snapshot.val())
    //                         return 'abc'
    //                     })
    //                 } else {
    //                     console.log('No user is signed in')
    //                 }
    //             }, 3000)
                
    //         })
    //         // const userId = firebase.auth().currentUser.uid
    //         // const userId = 'EaCQBRrmLYV6QPPS3JVY1jMMtV62'
    //         // const userId = payload
    //         // console.log(userId)
    //         // console.log(userId)
    //         // firebase.database().ref('users/' + userId).on('value')
            
    //     } catch (error) {
    //         new Noty({type: 'error', text: 'LoadedUser failed. Error: ' + error, timeout: 5000, theme: 'metroui'}).show()
    //         console.log(error)
    //     }
    // },
    loadedUser ({commit}, payload) {
        console.log('Entering loadedUser action')
        return new Promise((resolve, reject) => {
            // setTimeout(() => {
            //     console.log('LoadedUser done')
            //     resolve({value: 'abc'})
            // }, 5000)
            try {
                console.log('Entering loadedUser')
                firebase.auth().onAuthStateChanged(user => {
                    if (user) {
                        const userId = user.uid

                        firebase.database().ref('users/' + userId).on('value', function (snapshot) {
                            console.log('Call to firebase user node')
                            const userArray = []
                            for (const key in snapshot.val()) {
                                userArray.push({ ...snapshot.val()[key], id: key})
                            }
                            commit('setLoadedUser', snapshot.val())
                            resolve()
                        })
                    } else {
                        console.log('No user is signed in')
                        resolve('Firebase onAuthStateChanged error')
                    } 
                })
            } catch (error) {
                console.log(error)
                reject(error)
                new Noty({type: 'error', text: 'LoadedUser failed. Error: ' + error, timeout: 5000, theme: 'metroui'}).show()
            }
        })
    },
    async updateUser ({commit}, payload) {
        try {
            console.log(payload)
            const userId = payload.id
            // const userId = firebase.auth().currentUser.uid
            // console.log(userId)
            firebase.database().ref('/users/' + userId).update(payload).then((response) => {
                new Noty({type: 'success', text: 'Modifications de l\'utilisateur effectuées avec succès', timeout: 5000, theme: 'metroui'}).show()
            }).catch(error => {
                new Noty({type: 'error', text: 'Aucune modification effectuée. ' + error, timeout: 5000, theme: 'metroui'}).show()
                console.log(error)
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
    // async signUserUp ({commit}, payload) {
    //     console.log(payload)
    //     commit('setLoading', true, { root: true })
    //     try {
    //         let authData = await Auth.createUserWithEmailAndPassword(payload.email, payload.password)
    //         console.log(authData)

    //         // Save user in database
    //         const newUserKey = firebase.database().ref().child('/users').push().key

    //         authData['status'] = 'user'
    //         authData['id'] = newUserKey

    //         firebase.database().ref('/users/' + newUserKey).set(buildUserObject(authData))

    //         // Load user in store
    //         commit('setLoadedUser', buildUserObject(authData))
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
    // async signInWithGooglePopup ({commit}) {
    //     commit('setLoading', true, { root: true })
    //     try {
    //         let authData = await Auth.signInWithPopup(GoogleAuthProvider)
    //         console.log(authData)

    //         // Save user in database
    //         // const newUserKey = firebase.database().ref().child('/users').push().key
    //         authData['status'] = 'user'
    //         newUserKey = authData['id']
    //         console.log(newUserKey)
    //         console.log('authData:')
    //         console.log(authData)

    //         firebase.database().ref('/users/' + newUserKey).set(buildUserObjectOAuth(authData))

    //         // Load user in store
    //         commit('setLoadedUser', buildUserObject(authData))
    //         new Noty({type: 'success', text: 'Utilisateur enregistré avec succès!', timeout: 5000, theme: 'metroui'}).show()
    //         commit('setLoading', false, { root: true })
    //     } 
    //     catch(error) {
    //         console.log(error)
    //         new Noty({type: 'error', text: 'Utilisateur n\'a pas pu être enregistré', timeout: 5000, theme: 'metroui'}).show()
    //         commit('setError', error, { root: true })
    //         commit('setLoading', false, { root: true })
    //     }
    // },
    // async signInWithFacebookPopup ({commit}) {
    //     commit('setLoading', true)
    //     let authData = await Auth.signInWithPopup(FacebookAuthProvider)
    //     commit('setLoadedUser', buildUserObject(authData))
    //     commit('setLoading', false)
    // },
    // async signOut ({commit}) {
    //     commit('setLoading', true, { root: true })
    //     await Auth.signOut()
    //     commit('setLoadedUser', null)
    //     commit('setLoading', false, { root: true })
    //     // new Noty({type: 'success', text: 'You successfully logged out!', timeout: 5000, theme: 'metroui'}).show()
    //     // return redirect('/')
    //     // setTimeout(function() {
    //     //   commit('setLoadingPage', false, { root: true })
    //     // }, 1000)
    // },
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
            // let abc = [
            //     { "activity": { "name": "Sport", "slug": "sport" }, "category": { "name": "Football", "slug": "football" }, "comp_id": "1204", "competitions": { "english_premier_league_2018_2019": true }, "country": "England", "football_api_id": "9002", "image": "arsenal.png", "name": "Arsenal", "slug": "arsenal", "type": "club", "id": "arsenal" }, 
            //     { "activity": { "name": "Sport", "slug": "sport" }, "category": { "name": "Football", "slug": "football" }, "comp_id": "1204", "competitions": { "english_premier_league_2018_2019": true }, "country": "England", "football_api_id": "9053", "image": "bournemouth.png", "name": "Bournemouth", "slug": "bournemouth", "type": "club", "id": "bournemouth" }
            // ]
            // return abc
            console.log('Entering loadedUserTeams action')
            const userId = firebase.auth().currentUser.uid
            // const userId = this.loadedUser.id
            // let userTeamsIds = []
            // let userTeams = []

            // return firebase.database().ref('/userTeams').child(userId).once('value')
            //     .then(snapshot => {
            //         for (const key in snapshot.val()) {
            //             userTeamsIds.push(key)
            //         }
            //         // return userTeamsIds
            //     })
            //     .then(() => {
            //         for (const teamId of userTeamsIds) {
            //             firebase.database().ref('/teams').child(teamId).once('value', function (snapshot) {
            //                 let team = {...snapshot.val(), id: snapshot.key}
            //                 userTeams.push(team)
            //             })
            //         }
            //         commit('setUserTeams', userTeams)
            //         // return userTeams
            //     })
            //     // .then(() => {
            //     //     commit('setUserTeams', userTeams)
            //     //     return userTeams
            //     // })
            //     .catch (error => {
            //         console.log(error)
            //     })
                
                // With async/await
                const snapshot1 = await firebase.database().ref('/userTeams').child(userId).once('value')
                // const abc = snapshot1
                // console.log('abc ', abc)
                console.log(Object.keys(snapshot1.val()))
                const userTeamsIds = Object.keys(snapshot1.val())
                const results = []
                userTeamsIds.forEach(function (team) {
                    results.push(firebase.database().ref('/teams').child(team).once('value'))
                })
                const values = await Promise.all(results)
                console.log('values ', values)
                const userTeams = []
                values.forEach(function (team) {
                    // console.log('team.key: ', team.key)
                    const team2 = team.val()
                    team2['id'] = team.key
                    userTeams.push(team2)
                })
                // console.log('values[0] ', values[0].key)
                // console.log('userTeams: ', userTeams)
                commit('setUserTeams', userTeams)
                return userTeams
        } 
        catch (error) {
            console.log(error)
            commit('setError', error, { root: true })
        }
    },
    // async updateUserTeams ({commit, state, dispatch}, payload) {
    //     // console.log(payload)
    //     try {
    //         // let oldTeams = []
    //         const newTeams = payload
    //         // console.log(payload)
    //         // const oldTeams = dispatch('loadedUserTeams').then(function(result) {
    //         //     console.log(result)
    //         //     return result
    //         // })
    //         // const oldTeams = [
    //         //     { "activity": { "name": "Sport", "slug": "sport" }, "category": { "name": "Football", "slug": "football" }, "comp_id": "1204", "competitions": { "english_premier_league_2018_2019": true }, "country": "England", "football_api_id": "9002", "image": "arsenal.png", "name": "Arsenal", "slug": "arsenal", "type": "club", "id": "arsenal" },
    //         //     { "activity": { "name": "Sport", "slug": "sport" }, "category": { "name": "Football", "slug": "football" }, "comp_id": "1204", "competitions": { "english_premier_league_2018_2019": true }, "country": "England", "football_api_id": "9053", "image": "bournemouth.png", "name": "Bournemouth", "slug": "bournemouth", "type": "club", "id": "bournemouth" },
    //         //     { "activity": { "name": "Sport", "slug": "sport" }, "category": { "name": "Football", "slug": "football" }, "comp_id": "1204", "competitions": { "english_premier_league_2018_2019": true }, "country": "England", "football_api_id": "9065", "image": "brighton.png", "name": "Brighton", "slug": "brighton", "type": "club", "id": "brighton" }
    //         // ]
    //         const snapshot3 = await dispatch('loadedUserTeams')
    //         // console.log(snapshot.val())
    //         const oldTeams = snapshot3
    //         // const oldTeams = []
    //         // console.log(snapshot3)
    //         // console.log(snapshot3.length)
    //         // for (team in snapshot3) {
    //         //     oldTeams.push(team)
    //         // }

    //         console.log('oldTeams: ', oldTeams)
    //         console.log('newTeams: ', newTeams)
    //         return
    //         // dispatch('loadedUserTeams').then(response => {
    //         //     console.log(response)
    //         //     oldTeams = response
    //         //     // for (team of response) {
    //         //     //     oldTeams.push(team)
    //         //     // }
    //         //     // response.forEach(function (team) {
    //         //     //     oldTeams.push(team)
    //         //     // })
    //         // }).then(() => {
    //         //     console.log('oldTeams: ', oldTeams[0])
    //         //     console.log('newTeams: ', newTeams)
    //         //     return
    //         // })
    
    //         const addedTeams = newTeams.filter(o => !oldTeams.find(o2 => o.slug === o2.slug))
    //         addedTeams.forEach((team) => {
    //             new Noty({type: 'success', text: 'You are now also following ' + team.name + '. Future will tell whether it\'s a wise move or not &#9786;', timeout: 5000, theme: 'metroui'}).show()
    //         })
    //         const droppedTeams = oldTeams.filter(o => !newTeams.find(o2 => o.slug === o2.slug))
    //         droppedTeams.forEach((team) => {
    //             new Noty({type: 'warning', text: 'You are no more following ' + team.name + '&#x2639;', timeout: 5000, theme: 'metroui'}).show()
    //         })

    //         const diff2 = addedTeams.length - droppedTeams.length
    //         console.log('diff: ', diff2)

    //         const snapshot2 = await firebase.database().ref('game_parameters/costs/following_new_team').once('value')
    //         // console.log(snapshot.val())
    //         const tokens_cost2 = snapshot2.val().tokens_cost
    //         console.log(tokens_cost2)

    //         const cost = diff2 * tokens_cost2
    //         console.log('cost ', cost)


    //         console.log('oldTeams: ', oldTeams)
    //         console.log('newTeams: ', newTeams)
    //         return

            

    //         // // const userId = firebase.auth().currentUser.uid
    //         // // const teams = payload.selectedTeams
    //         // // console.log(teams)
    //         // const userId = firebase.auth().currentUser.uid
    //         // const newUserTeams = payload.selectedTeams
    //         // const oldUserTeams = []
    //         // // console.log('payload', payload)
    //         // // console.log('newUserTeams: ', newUserTeams)
    //         // // console.log('oldUserTeams: ', oldUserTeams)
    //         // // return
            
    //         // firebase.database().ref('/userTeams').child(userId).once('value', function (snapshot) {
    //         //     console.log(snapshot.val())
    //         //     oldUserTeams.push(snapshot.val())
    //         // }).then(() => {
    //         //     console.log('payload: ', payload)
    //         //     console.log('newUserTeams: ', newUserTeams)
    //         //     console.log('oldUserTeams: ', oldUserTeams)
    //         // })

    //         return this.loadedUserTeams

    //         return

    //         if (state.loadedUser && state.loadedUser.tokens && state.loadedUser.tokens.value < 1000) {
    //             new Noty({type: 'warning', text: 'You don\'t have enouph tokens to follow a more teams', timeout: 5000, theme: 'metroui'}).show()
    //             return
    //         } else {
    //             new Noty({type: 'error', text: 'You don\'t have enouph tokens to follow a new team', timeout: 5000, theme: 'metroui'}).show()
    //             return
    //         }
    //         // return
    //         // console.log(payload.selectedTeams.length)
    //         // return
    //         // const teams = payload
    //         // firebase.database().ref('/game_parameters/costs/following_new_team').once('value')
    //         // .then(function(snapshot) {
    //         //     console.log(snapshot.val())
    //         //     console.log(snapshot.val().tokens_cost)
    //         //     const diff = payload.selectedTeams.length - payload.loadedUserTeams.length
    //         //     if (diff > 0) { // If user chose to follow more teams than before
    //         //         console.log('User selected more teams than he previously had. Therefore it costs him tokens')
    //         //         console.log(diff)
    //         //     }
    //         // })
    //         // sweetAlert('Hello Vue world!!!')

    //         const snapshot = await firebase.database().ref('game_parameters/costs/following_new_team').once('value')
    //         // console.log(snapshot.val())
    //         const tokens_cost = snapshot.val().tokens_cost
    //         console.log(tokens_cost)
    //         // Check whether user is following more teams than before
    //         const diff = payload.selectedTeams.length - payload.loadedUserTeams.length
    //         if (diff > 0) { // If user chose to follow more teams than before
    //             console.log('User selected more teams than he previously had. Therefore it will cost him a few tokens')
    //             console.log(diff)
    //             // alert('It will cost you 10 tokens')
    //             // this.$swal('Hello word!')
    //             return this.$swal({
    //                 title: 'Are you sure?',
    //                 text: 'You are following ' + diff + ' more teams. This will cost you ' + diff * tokens_cost + ' tokens',
    //                 icon: "warning",
    //                 buttons: [
    //                     'No, cancel it!',
    //                     'Yes, I am sure!'
    //                 ],
    //                 // confirmButtonColor: '#000000',
    //                 // cancel: {
    //                 //     text: "No, cancel it!",
    //                 // },
    //                 // confirm: {
    //                 //     text: "Yes, I am sure!",
    //                 // },
    //                 dangerMode: true,
    //             }).then(function(isConfirm) {
    //                 if (isConfirm) {
    //                     console.log(userId)
    //                     console.log(teams)
    //                     // return
    //                     // 1) First delete all existing team references in userTeams node
    //                     firebase.database().ref('/userTeams/').child(userId).remove()

    //                     // 2) Then delete all existing user references in teamUsers node
    //                     firebase.database().ref('/teamUsers/').orderByChild(userId).equalTo(true).once('value', function (snapshot) {
    //                         // console.log(snapshot.val())
    //                         snapshot.forEach(function(childSnapshot) {
    //                             console.log(childSnapshot.key)
    //                             firebase.database().ref('/teamUsers').child(childSnapshot.key).child(userId).remove()
    //                         })
    //                     }).then(() => {
    //                         // 3) Save each team in userTeams node && user in each teamUsers node
    //                         if (teams.length > 0) {
    //                             teams.forEach((team) => {
    //                                 firebase.database().ref('/userTeams/').child(userId).update({[team.id]: true})
    //                                 firebase.database().ref('/teamUsers/').child(team.id).update({[userId]: true})

    //                                 new Noty({type: 'success', text: 'You are following ' + team.name + '. Future will tell whether it\'s a wise move or not&#9786;', timeout: 5000, theme: 'metroui'}).show()
    //                             })
    //                         } else {
    //                             new Noty({type: 'warning', text: 'You are not following any team', timeout: 5000, theme: 'metroui'}).show()
    //                         }
    //                     }).then(() => {
    //                         // 4) Reach out to the server to substract tokens from user account (user tokens cannot be modified from client)
    //                         // const tokens = 10
    //                         // const userId = 'EaCQBRrmLYV6QPPS3JVY1jMMtV62'
    //                         // axios.post('/update-user-tokens', {
    //                         //     tokens,
    //                         //     userId
    //                         // }).then((response) => {
    //                         //     console.log('success')
    //                         //     console.log(response)
    //                         //     new Noty({type: 'success', text: '10 tokens have been deducted from your account', timeout: 5000, theme: 'metroui'}).show()
    //                         // }).catch(function (error) {
    //                         //     console.log('error')
    //                         //     console.log(error)
    //                         //     new Noty({type: 'error', text: 'Could not remove token from your account', timeout: 5000, theme: 'metroui'}).show()
    //                         // })
    //                     })
                    
    //                 }
    //             })
    //         }
            
    //     } 
    //     catch(error) {
    //         console.log(error)
    //         new Noty({type: 'error', text: 'Erreur lors de la sauvegarde des nouvelles équipes', timeout: 5000, theme: 'metroui'}).show()
    //         commit('setError', error, { root: true })
    //         commit('setLoading', false, { root: true })
    //     }
    // },






    async updateUserTeams ({commit, state, dispatch}, payload) {
        try {
            const userId = firebase.auth().currentUser.uid
            const newTeams = payload
            const oldTeams = await dispatch('loadedUserTeams')

            // List new teams
            const addedTeams = newTeams.filter(o => !oldTeams.find(o2 => o.slug === o2.slug))

            // List dropped teams
            const droppedTeams = oldTeams.filter(o => !newTeams.find(o2 => o.slug === o2.slug))

            // Check if user has enouph tokens
            const teams_diff = addedTeams.length - droppedTeams.length
            console.log('teams_diff: ', teams_diff)

            const snapshot = await firebase.database().ref('game_parameters/costs/following_new_team').once('value')
            const tokens_cost = snapshot.val().tokens_cost
            console.log(tokens_cost)

            const total_cost = teams_diff * tokens_cost
            console.log('total_cost: ', total_cost)

            const user_tokens = state.loadedUser.tokens.value
            console.log('user_tokens: ', user_tokens)

            if (user_tokens < total_cost) {
                new Noty({type: 'warning', text: 'You don\'t have enouph tokens to follow more teams', timeout: 5000, theme: 'metroui'}).show()
                return
            }

            let customText = ''
            if (teams_diff > 0) {
                customText = `You are following ${teams_diff} more ${teams_diff > 1 ? 'teams' : 'team'} than before. This will cost you ${total_cost} tokens.`
            } else if (teams_diff < 0) {
                customText = `You are following ${Math.abs(teams_diff)} less ${Math.abs(teams_diff) > 1 ? 'teams' : 'team'} than before. You will therefore gain ${Math.abs(total_cost)} tokens.`
            } else {
                customText = 'You are following the same number of teams as before, so there is no cost for you.'
            }
            
            return this.$swal({
                title: 'Are you sure?',
                text: customText,
                icon: "warning",
                buttons: [
                    'No, cancel it!',
                    'Yes, I am sure!'
                ],
                dangerMode: true,
            }).then(function (isConfirm) {
                if (isConfirm) {
                    // console.log('userId: ', userId)
                    // console.log('newTeams: ', newTeams)

                    // 1) First delete all existing team references in userTeams node
                    firebase.database().ref('/userTeams/').child(userId).remove()

                    // 2) Then delete all existing user references in teamUsers node
                    firebase.database().ref('/teamUsers/').orderByChild(userId).equalTo(true).once('value', function (snapshot) {
                        snapshot.forEach(function(childSnapshot) {
                            console.log('Teams to delete: ', childSnapshot.key)
                            firebase.database().ref('/teamUsers').child(childSnapshot.key).child(userId).remove()
                        })
                    }).then(() => {
                        // 3) Save each team in userTeams node as well as the user in each teamUsers node
                        if (newTeams.length > 0) {
                            newTeams.forEach((team) => {
                                firebase.database().ref('/userTeams/').child(userId).update({[team.id]: true})
                                firebase.database().ref('/teamUsers/').child(team.id).update({[userId]: true})
                            })
                        } else {
                            new Noty({type: 'warning', text: 'You are not following any team', timeout: 5000, theme: 'metroui'}).show()
                        }
                        addedTeams.forEach((team) => {
                            new Noty({type: 'success', text: 'You are now also following ' + team.name + '. Future will tell whether it\'s a wise move or not &#9786;', timeout: 5000, theme: 'metroui'}).show()
                        })
                        droppedTeams.forEach((team) => {
                            new Noty({type: 'warning', text: 'You are no more following ' + team.name + ' &#x2639;', timeout: 5000, theme: 'metroui'}).show()
                        })
                    }).then(() => {
                        // 4) Reach out to the server to substract tokens from user account (user tokens cannot be modified from client)
                        axios.post('/update-user-tokens', {
                            userId,
                            total_cost,
                            user_tokens
                        }).then((response) => {
                            console.log('success')
                            console.log(response)
                            new Noty({type: 'success', text: `${total_cost} tokens have been ${total_cost > 0 ? 'added to' : 'deducted from'} your account`, timeout: 5000, theme: 'metroui'}).show()
                        }).catch(function (error) {
                            console.log('error')
                            console.log(error)
                            new Noty({type: 'error', text: 'Could not update tokens amount of your account', timeout: 5000, theme: 'metroui'}).show()
                        })
                    })
                } // if isConfirm
            }) // then
        } // try
        catch(error) {
            console.log(error)
            new Noty({type: 'error', text: 'Erreur lors de la sauvegarde des nouvelles équipes', timeout: 5000, theme: 'metroui'}).show()
            commit('setError', error, { root: true })
            commit('setLoading', false, { root: true })
        }
    },

    async updateUserTokens ({commit, state, dispatch}, payload) {
        console.log('Entering updateUserTokens action')
        console.log(parseInt(payload))
        const userId = firebase.auth().currentUser.uid
        const total_cost = -Math.abs(parseInt(payload))
        const user_tokens = state.loadedUser.tokens.value

        const snapshot = await firebase.database().ref('game_parameters/tokens_to_money_conversion_rate').once('value')
        const conversion_rate = snapshot.val().value

        console.log('userId: ', userId)
        console.log('total_cost: ', total_cost)
        console.log('user_tokens: ', user_tokens)
        console.log('conversion_rate: ', conversion_rate)
        return
        axios.post('/update-user-tokens', {
            userId,
            total_cost,
            user_tokens
        }).then((response) => {
            console.log('success')
            console.log(response)
            new Noty({type: 'success', text: `${total_cost} tokens have been ${total_cost > 0 ? 'added to' : 'deducted from'} your account`, timeout: 5000, theme: 'metroui'}).show()
        }).catch(function (error) {
            console.log('error')
            console.log(error)
            new Noty({type: 'error', text: 'Could not update tokens amount of your account', timeout: 5000, theme: 'metroui'}).show()
        })
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
