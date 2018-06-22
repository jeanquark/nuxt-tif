import firebase from 'firebase'
import axios from 'axios'
import Noty from 'noty'

axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'

export const state = () => ({
	loadedStadiums: []
})

export const mutations = {
	setStadiums(state, payload) {
        state.loadedStadiums = payload
    },
    createStadium (state, payload) {
        state.loadedStadiums.push(payload)
    },
    deleteStadium (state, stadiumId) {
        const loadedStadiums = state.loadedStadiums
        state.loadedStadiums.splice(loadedStadiums.findIndex(stadium => stadium.id === stadiumId), 1)
    }
}

export const actions = {
	// Load all stadiums
	loadedStadiums ({commit}) {
    	firebase.database().ref('/stadiums/').orderByChild('slug').once('value').then(function (snapshot) {
	      	// console.log(snapshot.val())
	      	const stadiumsArray = []
	      	for (const key in snapshot.val()) {
	        	stadiumsArray.push({ ...snapshot.val()[key], id: key})
	      	}
	      	// console.log(postsArray)
	      	commit('setStadiums', stadiumsArray)
	    })
  	},

  	// Create a new stadium
    createStadium ({commit, getters}, payload) {
    	console.log(payload)
        commit('setLoading', true, { root: true })

        // Generate new unique key
        const newStadiumKey = firebase.database().ref().child('/stadiums/').push().key

        let updates = {}
        updates['/stadiums/' + newStadiumKey] = payload

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

    // Update a stadium
    updateStadium ({commit, dispatch}, payload) {
        commit('setLoading', true, { root: true})
        // console.log(payload)
        let updates = {}
        updates['/stadiums/'] = payload

        firebase.database().ref().update(updates).then(() => {
            dispatch('loadedStadiums')
            commit('setLoading', false, { root: true})
            new Noty({type: 'success', text: 'Changements dans le noeud "stadiums" effectués avec succès!', timeout: 5000, theme: 'metroui'}).show()
        }).catch((error) => {
            console.log(error)
            commit('setLoading', false, { root: true})
            commit('setError', error, { root: true })
            new Noty({type: 'error', text: 'Changements non effectués. Erreur: ' + error, timeout: 5000, theme: 'metroui'}).show()
        })
    },

    // Delete a stadium
    deleteStadium ({commit}, stadiumId) {
        commit('setLoading', true, { root: true })
        firebase.database().ref('/stadiums/' + stadiumId).remove().then(() => {
            commit('deleteStadium', stadiumId)
            commit('setLoading', false, { root: true })
            new Noty({type: 'success', text: 'Équipe supprimée avec succès!', timeout: 5000, theme: 'metroui'}).show()
        }).catch((error) => {
            console.log(error)
            new Noty({type: 'error', text: 'Erreur lors de la suppression de l\'équipe. ' + error, timeout: 5000, theme: 'metroui'}).show()
        })       
    }
}

export const getters = {
	loadedStadiums(state) {
        return state.loadedStadiums
    }
}