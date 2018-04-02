import firebase from 'firebase'

export const state = () => ({
	loadedPosts: []
})

export const mutations = {
	setPosts(state, payload) {
        state.loadedPosts = payload
    }
}

export const actions = {
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
  	},
}

export const getters = {
	loadedPosts(state) {
        return state.loadedPosts
    }
}