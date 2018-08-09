// import Vue from 'vue'
import Vuex from 'vuex'
import {Auth, GoogleAuthProvider, FacebookAuthProvider} from '~/plugins/firebase-client-init.js'
import firebase from 'firebase'
// import VueI18n from 'vue-i18n';
// import Locales from '~/lang/en-US.js';

// Vue.use(VueI18n);

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

const createStore = () => {
  return new Vuex.Store({
    state: {
      user: null,
      error: null,
      loading: false,
      loadedPosts: []
    },
    mutations: {
      setUser (state, payload) {
        state.user = payload
      },
      setLoading (state, payload) {
        state.loading = payload
      },
      clearError (state) {
        state.error = null
      },
      setError (state, payload) {
        // console.log(payload)
        state.error = payload
      },
      setPosts(state, posts) {
        state.loadedPosts = posts
      }
    },

    actions: {
      nuxtServerInit ({ commit }, { req }) {
        if (req.user) {
          commit('setUser', req.user)
        }
      },

      loadedPosts ({commit}) {
        firebase.database().ref('/posts/').on('value', function (snapshot) {
          // console.log(snapshot.val())
          const postsArray = []
          for (const key in snapshot.val()) {
            postsArray.push({ ...snapshot.val()[key], id: key})
          }
          // console.log(postsArray)
          commit('setPosts', postsArray)
        })
      }, // end loadedUser

      async signUserIn ({commit}, payload) {
        console.log(payload)
        try {
          let authData = await Auth.signInWithEmailAndPassword(payload.email, payload.password)
          console.log(authData)
          commit('setUser', buildUserObject2(authData))
        } 
        catch(error) {
          console.log(error)
          commit('setError', error)
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
          commit('setError', error)
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
      },

      clearError ({commit}) {
        commit('clearError')
      }
    },
    getters: {
      isLoading(state, getters) {
        return state.loading
      },
      error(state) {
        return state.error
      },
      activeUser(state) {
        return state.user
      },
      loadedPosts(state) {
        return state.loadedPosts
      }
    }
  })
}

export default createStore
