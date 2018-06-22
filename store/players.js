import firebase from 'firebase'
import axios from 'axios'
import Noty from 'noty'

axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'

export const state = () => ({
	loadedPlayers: []
})

export const mutations = {
	setPlayers(state, payload) {
        state.loadedPlayers = payload
    },
    createPlayer (state, payload) {
        state.loadedPlayers.push(payload)
    },
    deletePlayer (state, playerId) {
        const loadedPlayers = state.loadedPlayers
        state.loadedPlayers.splice(loadedPlayers.findIndex(player => player.id === playerId), 1)
    }
}

export const actions = {
	// Load all players
	loadedPlayers ({commit}) {
    	firebase.database().ref('/players/').orderByChild('slug').once('value').then(function (snapshot) {
	      	console.log(snapshot.val())
	      	const playersArray = []
	      	for (const key in snapshot.val()) {
	        	playersArray.push({ ...snapshot.val()[key], id: key})
	      	}
	      	// console.log(postsArray)
	      	commit('setPlayers', playersArray)
	    })
  	},

  	// Create a new player
    createPlayer ({commit, getters}, payload) {
    	console.log(payload)
        commit('setLoading', true, { root: true })

        // Generate new unique key
        const newPlayerKey = firebase.database().ref().child('/players/').push().key

        let updates = {}
        updates['/players/' + newPlayerKey] = payload

        firebase.database().ref().update(updates).then(() => {
            commit('setLoading', false, { root: true })
            new Noty({type: 'success', text: 'Personne ' + payload.name + ' enregistrée avec succès!', timeout: 5000, theme: 'metroui'}).show()
        }).catch((error) => {
            console.log(error)
            commit('setLoading', false, { root: true })
            commit('setError', error, { root: true })
            new Noty({type: 'error', text: 'Personne non enregistrée. Erreur: ' + error, timeout: 5000, theme: 'metroui'}).show()
        })
    },

    // Update a player
    updatePlayer ({commit, dispatch}, payload) {
        commit('setLoading', true, { root: true})
        // console.log(payload)
        let updates = {}
        updates['/players/'] = payload

        firebase.database().ref().update(updates).then(() => {
            dispatch('loadedPlayers')
            commit('setLoading', false, { root: true})
            new Noty({type: 'success', text: 'Changements dans le noeud "players" effectués avec succès!', timeout: 5000, theme: 'metroui'}).show()
        }).catch((error) => {
            console.log(error)
            commit('setLoading', false, { root: true})
            commit('setError', error, { root: true })
            new Noty({type: 'error', text: 'Changements non effectués. Erreur: ' + error, timeout: 5000, theme: 'metroui'}).show()
        })
    },

    // Delete a player
    deletePlayer ({commit}, playerId) {
        commit('setLoading', true, { root: true })
        firebase.database().ref('/players/' + playerId).remove().then(() => {
            commit('deletePlayer', playerId)
            commit('setLoading', false, { root: true })
            new Noty({type: 'success', text: 'Personne supprimée avec succès!', timeout: 5000, theme: 'metroui'}).show()
        }).catch((error) => {
            console.log(error)
            new Noty({type: 'error', text: 'Erreur lors de la suppression de la personne. ' + error, timeout: 5000, theme: 'metroui'}).show()
        })       
    }
}

export const getters = {
	loadedPlayers(state) {
        return state.loadedPlayers
    }
}