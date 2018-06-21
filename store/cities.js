import firebase from 'firebase'

export const state = () => ({
	loadedCities: []
})

export const mutations = {
	setCities(state, payload) {
        state.loadedCities = payload
    }
}

export const actions = {
	loadedCities ({commit}) {
    	firebase.database().ref('/cities/').once('value').then(function (snapshot) {
	      	// console.log(snapshot.val())
	      	const citiesArray = []
	      	for (const key in snapshot.val()) {
	        	citiesArray.push({ ...snapshot.val()[key], id: key})
	      	}
	      	// console.log(postsArray)
	      	// setTimeout(function() {
	      		commit('setCities', citiesArray)
	      	// }, 200)
	    })
  	},
}

export const getters = {
	loadedCities(state) {
        return state.loadedCities
    }
}