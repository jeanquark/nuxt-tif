import firebase from 'firebase'
import axios from 'axios'
import Noty from 'noty'

axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'

export const state = () => ({
	loadedTeams: []
})

export const mutations = {
	setTeams(state, payload) {
        state.loadedTeams = payload
    },
    createTeam (state, payload) {
        state.loadedTeams.push(payload)
    },
    deleteTeam (state, teamId) {
        const loadedTeams = state.loadedTeams
        state.loadedTeams.splice(loadedTeams.findIndex(team => team.id === teamId), 1)
    }
}

export const actions = {
	// Load all teams
	loadedTeams ({commit}) {
    	firebase.database().ref('/teams/').once('value').then(function (snapshot) {
	      	// console.log(snapshot.val())
	      	const teamsArray = []
	      	for (const key in snapshot.val()) {
	        	teamsArray.push({ ...snapshot.val()[key], id: key})
	      	}
	      	// console.log(postsArray)
	      	commit('setTeams', teamsArray)
	    })
  	},

  	// Create a new team
    createTeam ({commit, getters}, payload) {
    	console.log(payload)
        commit('setLoading', true, { root: true })

        // Generate new unique key
        const newTeamKey = firebase.database().ref().child('/teams/').push().key

        let updates = {}
        updates['/teams/' + newTeamKey] = payload

        firebase.database().ref().update(updates).then(() => {
            commit('setLoading', false, { root: true })
            new Noty({type: 'success', text: 'Équipe ' + payload.name + ' enregistrée avec succès!', timeout: 5000, theme: 'metroui'}).show()
        }).catch((error) => {
            console.log(error)
            commit('setLoading', false, { root: true })
            commit('setError', error, { root: true })
            new Noty({type: 'error', text: 'Équipe non enregistrée. Erreur: ' + error, timeout: 5000, theme: 'metroui'}).show()
        })
    },

    // Delete a team
    deleteTeam ({commit}, teamId) {
        commit('setLoading', true, { root: true })
        firebase.database().ref('/teams/' + teamId).remove().then(() => {
            commit('deleteTeam', teamId)
            commit('setLoading', false, { root: true })
            new Noty({type: 'success', text: 'Équipe supprimée avec succès!', timeout: 5000, theme: 'metroui'}).show()
        }).catch((error) => {
            console.log(error)
            new Noty({type: 'error', text: 'Erreur lors de la suppression de l\'équipe. ' + error, timeout: 5000, theme: 'metroui'}).show()
        })       
    }
}

export const getters = {
	loadedTeams(state) {
        return state.loadedTeams
    }
}