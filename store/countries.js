import firebase from 'firebase'

export const state = () => ({
	loadedCountries: []
})

export const mutations = {
	setLoadedCountries(state, payload) {
        state.loadedCountries = payload
    }
}

export const actions = {
	// Load all countries
	loadedCountries ({commit}) {
    	firebase.database().ref('/countries/').once('value').then(function (snapshot) {
	      	// console.log(snapshot.val())
	      	const countriesArray = []
	      	for (const key in snapshot.val()) {
	        	countriesArray.push({ ...snapshot.val()[key], id: key})
	      	}
	      	commit('setLoadedCountries', countriesArray)
	    })
  	}
}

export const getters = {
	loadedCountries(state) {
        return state.loadedCountries
    }
}