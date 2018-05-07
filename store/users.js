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
}

export const actions = {
	// nuxtServerInit ({ commit }, { req }) {
	//     if (req.user) {
	//       	// commit('setUser', req.user)
	//       	commit('users/setUser', req.user, { root: true })
	//     }
 //  	},
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
    }
}