import firebase from 'firebase'

export const state = () => ({
	loadedCompetitions: []
})

export const mutations = {
	setCompetitions(state, payload) {
        state.loadedCompetitions = payload
    },
    // setCompetitionsByCompetition (state, competition_id) {
    //     state.loadedCompetitions.filter(team => team.competition_id === 1)
    // } 
}

export const actions = {
	loadedCompetitions ({commit}) {
    	firebase.database().ref('/competitions/').on('value', function (snapshot) {
	      	const competitionsArray = []
	      	for (const key in snapshot.val()) {
	        	competitionsArray.push({ ...snapshot.val()[key]})
	      	}
	      	// console.log(postsArray)
	      	commit('setCompetitions', competitionsArray)
	    })
  	}
}

export const getters = {
	loadedCompetitions(state) {
        return state.loadedCompetitions
    }
}