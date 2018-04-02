import {Auth, GoogleAuthProvider, FacebookAuthProvider} from '~/plugins/firebase-client-init.js'
// import firebase from 'firebase'

function buildUserObject (authData) {
  let { email, displayName, uid, photoURL } = authData.user
  let user = {}
  user['email'] = email
  user['name'] = displayName
  user['uid'] = uid
  user['picture'] = photoURL
  return user
}

function buildUserObject2 (authData) {
  let user = {}
  user['email'] = authData.email
  return user
}

export const state = () => ({
	user: null
})

export const mutations = {
	setUser (state, payload) {
        state.user = payload
    }
}

export const actions = {
	// nuxtServerInit ({ commit }, { req }) {
	//     if (req.user) {
	//       	// commit('setUser', req.user)
	//       	commit('users/setUser', req.user, { root: true })
	//     }
 //  	},
  	async signUserIn ({commit}, payload) {
    	console.log(payload)
    	try {
      		let authData = await Auth.signInWithEmailAndPassword(payload.email, payload.password)
      		console.log(authData)
      		commit('setUser', buildUserObject2(authData))
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
  	async signUserUp ({commit}, payload) {
    	console.log(payload)
    	try {
      		let authData = await Auth.createUserWithEmailAndPassword(payload.email, payload.password)
      		console.log(authData)
      		commit('setUser', buildUserObject2(authData))
    	} 
    	catch(error) {
      		console.log(error)
      		// commit('setError', error)
      		commit('setError', error, { root: true })
    	}
  	},
  	async signInWithGooglePopup ({commit}) {
    	commit('setLoading', true)
    	let authData = await Auth.signInWithPopup(GoogleAuthProvider)
    	commit('setUser', buildUserObject(authData))
    	commit('setLoading', false)
  	},
  	async signInWithFacebookPopup ({commit}) {
    	commit('setLoading', true)
    	let authData = await Auth.signInWithPopup(FacebookAuthProvider)
    	commit('setUser', buildUserObject(authData))
    	commit('setLoading', false)
  	},
  	async signOut ({commit}) {
    	await Auth.signOut()
    	commit('setUser', null)
  	}
}

export const getters = {
	activeUser(state) {
        return state.user
    }
}