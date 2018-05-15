import firebase from 'firebase'

export const state = () => ({
	loadedActivities: []
})

export const mutations = {
	setActivities(state, payload) {
        state.loadedActivities = payload
    }
}

export const actions = {
	loadedActivities ({commit}) {
    	firebase.database().ref('/activities/').once('value').then(function (snapshot) {
	      	// console.log(snapshot.val())
	      	const activitiesArray = []
	      	for (const key in snapshot.val()) {
	        	activitiesArray.push({ ...snapshot.val()[key], id: key})
	      	}
	      	// console.log(postsArray)
	      	// setTimeout(function() {
	      		commit('setActivities', activitiesArray)
	      	// }, 200)
	    })
  	},
}

export const getters = {
	loadedActivities(state) {
        return state.loadedActivities
    }
}