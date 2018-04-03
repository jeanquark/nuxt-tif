import firebase from 'firebase'

export const state = () => ({
	loadedTypes: []
})

export const mutations = {
	setTypes(state, payload) {
        state.loadedTypes = payload
    }
}

export const actions = {
	loadedTypes ({commit}) {
    	firebase.database().ref('/types/').on('value', function (snapshot) {
	      	// console.log(snapshot.val())
	      	const typesArray = []
	      	for (const key in snapshot.val()) {
	        	typesArray.push({ ...snapshot.val()[key]})
	      	}
	      	// console.log(postsArray)
	      	commit('setTypes', typesArray)
	    })
  	},
}

export const getters = {
	loadedTypes(state) {
        return state.loadedTypes
    }
}