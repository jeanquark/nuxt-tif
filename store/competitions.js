import firebase from 'firebase'
import Noty from 'noty'

export const state = () => ({
    loadedCompetitions: []
})

export const mutations = {
    setCompetitions(state, payload) {
        state.loadedCompetitions = payload
    },
    createCompetition (state, payload) {
        state.loadedCompetitions.push(payload)
    },
    // updateCompetition (state, payload) {
    //     state.loadedCompetitions = payload
    // },
    deleteCompetition (state, competitionId) {
        const loadedCompetitions = state.loadedCompetitions
        state.loadedCompetitions.splice(loadedCompetitions.findIndex(competition => competition.id === competitionId), 1)
    }
}

export const actions = {
    // Load all competitions
    loadedCompetitions ({commit}) {
        console.log('loadedCompetitions')
        firebase.database().ref('/competitions/').once('value').then(function (snapshot) {
            const competitionsArray = []
            for (const key in snapshot.val()) {
                competitionsArray.push({ ...snapshot.val()[key], id: key})
            }
            commit('setCompetitions', competitionsArray)

            // snapshot.forEach(function(childSnapshot) {
            //     let childData = childSnapshot.val()
            // })
            // commit('setCompetitions', childData)

        })
    },

    // Create a new competition
    createCompetition ({commit, getters}, payload) {
        commit('setLoading', true, { root: true })
        console.log(payload)
        // return

        // Define key from competition slug
        const newCompetitionKey = payload.slug

        let updates = {}
        updates['/competitions/' + newCompetitionKey] = payload

        firebase.database().ref().update(updates).then(() => {
            new Noty({type: 'success', text: 'Competition ' + payload.name + ' enregistrée avec succès!', timeout: 5000, theme: 'metroui'}).show()
        }).catch((error) => {
            console.log(error)
            commit('setError', error, { root: true })
            new Noty({type: 'error', text: 'Competition non enregistrée. Erreur: ' + error, timeout: 5000, theme: 'metroui'}).show()
        })
    },

    // Update a competition
    updateCompetition ({commit, dispatch}, payload) {
        commit('setLoading', true, { root: true})
        console.log(payload)
        // return

        let updates = {}
        updates['/competitions/'] = payload

        firebase.database().ref().update(updates).then(() => {
            dispatch('loadedCompetitions');
            commit('setLoading', false, { root: true})
            new Noty({type: 'success', text: 'Competition modifiée avec succès!', timeout: 5000, theme: 'metroui'}).show()
        }).catch((error) => {
            console.log(error)
            commit('setLoading', false, { root: true})
            commit('setError', error, { root: true })
            new Noty({type: 'error', text: 'Competition non modifiée. Erreur: ' + error, timeout: 5000, theme: 'metroui'}).show()
        })
    },

    // Delete a competition
    deleteCompetition ({commit}, competitionId) {
        commit('setLoading', true, { root: true })
        firebase.database().ref('/competitions/' + competitionId).remove().then(() => {
            commit('deleteCompetition', competitionId)
            commit('setLoading', false, { root: true })
            new Noty({type: 'success', text: 'Competition supprimée avec succès!', timeout: 5000, theme: 'metroui'}).show()
        }).catch((error) => {
            console.log(error)
            new Noty({type: 'error', text: 'Erreur lors de la suppression de la competition. ' + error, timeout: 5000, theme: 'metroui'}).show()
        })       
    }
}

export const getters = {
    loadedCompetitions(state) {
        return state.loadedCompetitions
    }
}