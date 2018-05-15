import firebase from 'firebase'

export const state = () => ({
	loadedCategories: []
})

export const mutations = {
	setCategories(state, payload) {
        state.loadedCategories = payload
    }
}

export const actions = {
	loadedCategories ({commit}) {
    	firebase.database().ref('/categories/').once('value').then(function (snapshot) {
	      	// console.log(snapshot.val())
	      	const categoriesArray = []
	      	for (const key in snapshot.val()) {
	        	categoriesArray.push({ ...snapshot.val()[key], id: key})
	      	}
	      	// console.log(postsArray)
	      	commit('setCategories', categoriesArray)
	    })
  	},
}

export const getters = {
	loadedCategories(state) {
        return state.loadedCategories
    }
}