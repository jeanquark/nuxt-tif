import firebase from 'firebase'

export const state = () => ({
	loadedActions: []
})

export const mutations = {
	setActions(state, payload) {
        state.loadedActions = payload
    }
}

export const actions = {
	loadedActions ({commit}) {
    	return firebase.database().ref('/actionsDiary/').once('value').then(function (snapshot) {
	      	const actionsArray = []
	      	for (const key in snapshot.val()) {
	        	actionsArray.push({ ...snapshot.val()[key], id: key})
	      	}
	      	commit('setActions', actionsArray)
	      	return actionsArray
	    })
  	}
}

export const getters = {
	loadedActions(state) {
        return state.loadedActions
    }
}