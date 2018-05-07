import firebase from 'firebase'

export const state = () => ({
	loadedTeams: []
})

export const mutations = {
	setTeams(state, payload) {
        state.loadedTeams = payload
    },
    // setTeamsByCompetition (state, competition_id) {
    //     state.loadedTeams.filter(team => team.competition_id === 1)
    // } 
}

export const actions = {
	loadedTeams ({commit}) {
    	firebase.database().ref('/teams/').on('value', function (snapshot) {
	      	// console.log(snapshot.val())
	      	const teamsArray = []
	      	for (const key in snapshot.val()) {
	        	teamsArray.push({ ...snapshot.val()[key]})
	      	}
	      	// console.log(postsArray)
	      	commit('setTeams', teamsArray)
	    })
  	}
}

export const getters = {
	loadedTeams(state) {
        return state.loadedTeams
    }
}