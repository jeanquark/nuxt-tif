import firebase from 'firebase'

export const state = () => ({
	loadedContinents: []
})

export const mutations = {
	setLoadedContinents(state, payload) {
        state.loadedContinents = payload
    }
}

export const actions = {
	// Load all Continents
	loadedContinents ({commit}) {
    	firebase.database().ref('/continents/').once('value').then(function (snapshot) {
	      	// console.log(snapshot.val())
	      	const continentsArray = []
	      	for (const key in snapshot.val()) {
	        	continentsArray.push({ ...snapshot.val()[key], id: key})
	      	}
	      	commit('setLoadedContinents', continentsArray)
	    })
  	}
}

export const getters = {
	loadedContinents(state) {
        return state.loadedContinents
    }
}