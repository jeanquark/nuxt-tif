import firebase from 'firebase'

export const state = () => ({
	loadedStadiums: []
})

export const mutations = {
	setStadiums(state, payload) {
        state.loadedStadiums = payload
    }
}

export const actions = {
	loadedStadiums ({commit}) {
		console.log('Entering stadiums actions')
		// firebase.database().ref('/stadiums/').on('value', function (snapshot) {
    	firebase.database().ref('/stadiums/').on('value', function (snapshot) {
			console.log('abc')
	      	console.log(snapshot.val())
	      	const stadiumsArray = []
	      	for (const key in snapshot.val()) {
	        	stadiumsArray.push({ ...snapshot.val()[key]})
	      	}
	      	commit('setStadiums', stadiumsArray)
	    })
  	},
}

export const getters = {
	loadedStadiums(state) {
        return state.loadedStadiums
    }
}