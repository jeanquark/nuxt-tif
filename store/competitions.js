import firebase from 'firebase'
import Noty from 'noty'
import axios from 'axios'

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
    // deleteCompetition (state, competitionId) {
    //     const loadedCompetitions = state.loadedCompetitions
    //     state.loadedCompetitions.splice(loadedCompetitions.findIndex(competition => competition.id === competitionId), 1)
    // }
}

export const actions = {
    // Load all competitions
    loadedCompetitions ({commit}) {
        // console.log('loadedCompetitions')
        // firebase.database().ref('/competitions/').once('value').then(function (snapshot) {
        firebase.database().ref('/competitions/').on('value', function (snapshot) {
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
        // commit('setLoading', true, { root: true })
        console.log(payload)

        // Define key from competition slug
        const newCompetitionKey = payload.slug

        let updates = {}
        // Update competition node for each team that is part of the competition
        for (let team in payload.teams) {
            updates['/teams/' + team + '/competitions/' + newCompetitionKey] = true
        }
        // Update competitions node
        updates['/competitions/' + newCompetitionKey] = payload


        firebase.database().ref().update(updates).then(() => {
            commit('setLoading', false, { root: true })
            new Noty({type: 'success', text: 'Competition ' + payload.name + ' enregistrée avec succès!', timeout: 5000, theme: 'metroui'}).show()
        }).catch((error) => {
            console.log(error)
            commit('setError', error, { root: true })
            commit('setLoading', false, { root: true })
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
            dispatch('loadedCompetitions')
            commit('setLoading', false, { root: true })
            new Noty({type: 'success', text: 'Competition modifiée avec succès!', timeout: 5000, theme: 'metroui'}).show()
        }).catch((error) => {
            console.log(error)
            commit('setLoading', false, { root: true })
            commit('setError', error, { root: true })
            new Noty({type: 'error', text: 'Competition non modifiée. Erreur: ' + error, timeout: 5000, theme: 'metroui'}).show()
        })
    },

    // Delete a competition
    deleteCompetition ({commit, dispatch, rootState}, competition) {
        console.log(competition)
        const competitionId = competition.id
        commit('setLoading', true, { root: true })

        // Get all teams
        const teams = rootState.teams.loadedTeams

        let updates = {}
        // Delete competition for each team that is part of the competition in teams node
        for (let team of teams) {
            if (team.competitions[competitionId]) {
                updates['/teams/' + team.slug + '/competitions/' + competitionId] = null                
            }
        }
        // Delete competition in competitions node
        updates['/competitions/' + competitionId] = null

        firebase.database().ref().update(updates).then(() => {
            new Noty({type: 'success', text: 'Compétition supprimée avec succès!', timeout: 5000, theme: 'metroui'}).show()

            // Delete image on server
            axios.post('/delete-image', {
                name: competition.image,
                folder: 'competitions'
            }).then((response) => {
                // console.log('successfully deleted competition image!')
                console.log(response.data)
                commit('setLoading', false, { root: true })
                if (response.data) {
                    new Noty({type: 'success', text: 'Image de la competition supprimée avec succès!', timeout: 5000, theme: 'metroui'}).show()
                } else {
                    new Noty({type: 'warning', text: 'Aucune image de la competition n\'a été supprimée!', timeout: 5000, theme: 'metroui'}).show()
                }
            }).catch(function (error) {
                console.log('error')
                console.log(error)
                commit('setLoading', false, { root: true })
                new Noty({type: 'error', text: 'L\'image de la competition n\'a pas pu être supprimée!', timeout: 5000, theme: 'metroui'}).show()
            })
        }).catch((error) => {
            console.log(error)
            commit('setLoading', false, { root: true })
            new Noty({type: 'error', text: 'Erreur lors de la suppression de la compétition. ' + error, timeout: 5000, theme: 'metroui'}).show()
        })       
    }
}

export const getters = {
    loadedCompetitions(state) {
        return state.loadedCompetitions
    }
}