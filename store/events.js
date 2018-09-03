import firebase from 'firebase'
import Noty from 'noty'
import axios from 'axios'
import moment from 'moment'

// let events = {
            //     '100_vs_101_on_31-08-2018': {
            //         homeTeam: {
            //             id: 100,
            //             name: 'Neuchâtel Xamax'
            //         },
            //         awayTeam: {
            //             id: 101,
            //             name: 'FC Sion'
            //         },
            //         score: {
            //             winner: 'homeTeam',
            //             fullTime: {
            //                 homeTeam: 3,
            //                 awayTeam: 1
            //             }
            //         }
            //     },
            //     '102_vs_103_on_31-08-2018': {
            //         homeTeam: {
            //             id: 102,
            //             name: 'Lausanne Sport'
            //         },
            //         awayTeam: {
            //             id: 103,
            //             name: 'FC Basel'
            //         },
            //         score: {
            //             winner: 'DRAW',
            //             fullTime: {
            //                 homeTeam: 2,
            //                 awayTeam: 2
            //             }
            //         }
            //     }
            // }

export const state = () => ({
    loadedEvents: [],
    loadedLiveEvents: []
})

export const mutations = {
    setEvents(state, payload) {
        state.loadedEvents = payload
    },
    setLiveEvents(state, payload) {
        state.loadedLiveEvents = payload
    },
    createEvent (state, payload) {
        state.loadedEvents.push(payload)
        state.loadedUserEvents.push(payload)
    },
    deleteEvent (state, id) {
        const loadedEvents = state.loadedEvents
        state.loadedEvents.splice(loadedEvents.findIndex(event => event.id === id), 1)
    }
}

export const actions = {
    // Load all events
    loadedEvents ({commit}) {
        firebase.database().ref('/events_new2/').on('value', function (snapshot) {
            const eventsArray = []
            for (const key in snapshot.val()) {
                eventsArray.push({ ...snapshot.val()[key], id: key})
            }

            commit('setEvents', eventsArray)
        })
    },
    loadedLiveEvents ({commit}) {
        try {
            firebase.database().ref('/events_new/').orderByChild('status').equalTo('live').on('value', function (snapshot) {
                // console.log(snapshot.val())
                const liveEventsArray = []
                for (const key in snapshot.val()) {
                    liveEventsArray.push({ ...snapshot.val()[key]})
                }
                // console.log(postsArray)
                commit('setLiveEvents', liveEventsArray)
            })
        } catch(error) {
            console.log(error)
        }
    },

    // Create a new event
    createEvent ({commit, getters}, payload) {
        commit('setLoading', true, { root: true })

        // Generate new unique key
        const newEventKey = firebase.database().ref().child('/events_new/').push().key

        let updates = {}
        updates['/events_new/' + newEventKey] = payload

        firebase.database().ref().update(updates).then(() => {
            new Noty({type: 'success', text: 'Événement ' + payload.name + ' enregistré avec succès!', timeout: 5000, theme: 'metroui'}).show()
        }).catch((error) => {
            console.log(error)
            commit('setError', error, { root: true })
            new Noty({type: 'error', text: 'Événement non enregistré. Erreur: ' + error, timeout: 5000, theme: 'metroui'}).show()
        })
    },

    // Update an event
    updateEvent ({commit, dispatch}, payload) {
        commit('setLoading', true, { root: true})
        console.log(payload)

        let updates = {}
        updates['/events_new/'] = payload

        firebase.database().ref().update(updates).then(() => {
            // dispatch('loadedEvents');
            commit('setLoading', false, { root: true})
            new Noty({type: 'success', text: 'Changements dans le noeud "events" effectués avec succès!', timeout: 5000, theme: 'metroui'}).show()
        }).catch((error) => {
            console.log(error)
            commit('setLoading', false, { root: true})
            commit('setError', error, { root: true })
            new Noty({type: 'error', text: 'Changements non effectués. Erreur: ' + error, timeout: 5000, theme: 'metroui'}).show()
        })
    },

    // Update match result
    async updateMatchResult ({commit, dispatch}, payload) {
        commit('setLoading', true, { root: true})
        console.log(payload)
        // return

        // Retrieve both teams data
        // const localteam = await firebase.database().ref('/competitions/' + payload.competition_id + '/teams').child(payload.localteam_id).once('value')
        // const visitorteam = await firebase.database().ref('/competitions/' + payload.competition_id + '/teams').child(payload.localteam_id).once('value')
        // console.log(localteam)
        // console.log(visitorteam)
        // return
        // const snapshot = await firebase.database().ref('/competitions/' + payload.competition_id + '/teams').child(payload.localteam_id).once('value')
        // // const localteam = snapshot1.val()
        // console.log(snapshot)
        // const visitorteam = await firebase.database().ref('/competitions/' + payload.competition_id + '/teams').child(payload.localteam_id).once('value')

        // console.log(localteam)

        // const eventref = firebase.database().ref('/competitions/' + 'world_cup_2018' + '/teams').child('brasil')
        
        // return

        // Update the ranking only if the match is over
        if (payload.match_status === 'played' && payload.match_type === 'group_stage') {
            const snapshot1 = await firebase.database().ref('/competitions/' + payload.competition.slug + '/teams').child(payload.localteam.slug).once('value')
            const oldLocalTeamData = snapshot1.val()
            const snapshot2 = await firebase.database().ref('/competitions/' + payload.competition.slug + '/teams').child(payload.visitorteam.slug).once('value')
            const oldVisitorTeamData = snapshot2.val()
            console.log(oldLocalTeamData)
            console.log(oldVisitorTeamData)

            // Update standings
            let updates = {}
            // Localteam won
            if (payload.localteam_score > payload.visitorteam_score) {
                console.log('localteam won')
                console.log(payload)
                console.log(payload.competition.slug)
                console.log(payload.localteam.slug)
                console.log(payload.visitorteam.slug)
                updates['/competitions/' + payload.competition.slug + '/teams/' + payload.localteam.slug + '/wins'] = oldLocalTeamData.wins + 1
                updates['/competitions/' + payload.competition.slug + '/teams/' + payload.localteam.slug + '/goals_scored'] = oldLocalTeamData.goals_scored + payload.localteam_score
                updates['/competitions/' + payload.competition.slug + '/teams/' + payload.localteam.slug + '/goals_conceded'] = oldLocalTeamData.goals_conceded + payload.visitorteam_score
                updates['/competitions/' + payload.competition.slug + '/teams/' + payload.localteam.slug + '/points'] = oldLocalTeamData.points + 3

                updates['/competitions/' + payload.competition.slug + '/teams/' + payload.visitorteam.slug + '/losses'] = oldVisitorTeamData.losses + 1
                updates['/competitions/' + payload.competition.slug + '/teams/' + payload.visitorteam.slug + '/goals_scored'] = oldVisitorTeamData.goals_scored + payload.visitorteam_score
                updates['/competitions/' + payload.competition.slug + '/teams/' + payload.visitorteam.slug + '/goals_conceded'] = oldVisitorTeamData.goals_conceded + payload.localteam_score
            // Visitorteam won
        } else if (payload.localteam_score < payload.visitorteam_score ) {
            console.log('visitorteam won')
            updates['/competitions/' + payload.competition.slug + '/teams/' + payload.visitorteam.slug + '/wins'] = oldVisitorTeamData.wins + 1
            updates['/competitions/' + payload.competition.slug + '/teams/' + payload.visitorteam.slug + '/goals_scored'] = oldVisitorTeamData.goals_scored + payload.visitorteam_score
            updates['/competitions/' + payload.competition.slug + '/teams/' + payload.visitorteam.slug + '/goals_conceded'] = oldVisitorTeamData.goals_conceded + payload.localteam_score
            updates['/competitions/' + payload.competition.slug + '/teams/' + payload.visitorteam.slug + '/points'] = oldVisitorTeamData.points + 3

            updates['/competitions/' + payload.competition.slug + '/teams/' + payload.localteam.slug + '/losses'] = oldLocalTeamData.losses + 1
            updates['/competitions/' + payload.competition.slug + '/teams/' + payload.localteam.slug + '/goals_scored'] = oldLocalTeamData.goals_scored + payload.localteam_score
            updates['/competitions/' + payload.competition.slug + '/teams/' + payload.localteam.slug + '/goals_conceded'] = oldLocalTeamData.goals_conceded + payload.visitorteam_score
            // Draw and no penalties
        } else if (payload.localteam_score === payload.visitorteam_score && !payload.penalty_shootout) {
            console.log('draw')
            updates['/competitions/' + payload.competition.slug + '/teams/' + payload.localteam.slug + '/draws'] = oldLocalTeamData.draws + 1
            updates['/competitions/' + payload.competition.slug + '/teams/' + payload.localteam.slug + '/goals_scored'] = oldLocalTeamData.goals_scored + payload.localteam_score
            updates['/competitions/' + payload.competition.slug + '/teams/' + payload.localteam.slug + '/goals_conceded'] = oldLocalTeamData.goals_conceded + payload.visitorteam_score
            updates['/competitions/' + payload.competition.slug + '/teams/' + payload.localteam.slug + '/points'] = oldLocalTeamData.points + 1

            updates['/competitions/' + payload.competition.slug + '/teams/' + payload.visitorteam.slug + '/draws'] = oldVisitorTeamData.draws + 1
            updates['/competitions/' + payload.competition.slug + '/teams/' + payload.visitorteam.slug + '/goals_scored'] = oldVisitorTeamData.goals_scored + payload.visitorteam_score
            updates['/competitions/' + payload.competition.slug + '/teams/' + payload.visitorteam.slug + '/goals_conceded'] = oldVisitorTeamData.goals_conceded + payload.localteam_score
            updates['/competitions/' + payload.competition.slug + '/teams/' + payload.visitorteam.slug + '/points'] = oldVisitorTeamData.points + 1
            // Draw and penalties
        } else if (payload.localteam_score === payload.visitorteam_score && payload.penalty_shootout) {

        }

            // console.log(payload.localteam_score)
            // console.log(payload.visitorteam_score)

            // Update localteam standing
            // firebase.database().ref('/competitions/' + payload.competition.slug + '/teams').child(payload.localteam.slug).once('value').then(function(snapshot) {
            //     console.log(snapshot.val())
            //     const oldLocalTeamData = snapshot.val()
            //     console.log(payload)

            //     try {
            //         firebase.database().ref().update(updates)
            //             new Noty({type: 'success', text: 'Le résultat a été mis à jour.', timeout: 5000, theme: 'metroui'}).show()
            //     } catch(error) {
            //         new Noty({type: 'error', text: 'Le résultat n\'a pas pu être mis à jour. Erreur: ' + error, timeout: 5000, theme: 'metroui'}).show()
            //         console.log(error)
            //     }
            //     // firebase.database().ref('/competitions/world_cup_2018/teams').child('brasil').set({
            //     //   wins: oldLocalTeamData.wins + 1
            //     // })
            // })

            try {
                firebase.database().ref().update(updates)
                new Noty({type: 'success', text: 'Le classement pour le match ' + payload.name + ' a été mis à jour.', timeout: 5000, theme: 'metroui'}).show()
            } catch(error) {
                new Noty({type: 'error', text: 'Le classement n\'a pas pu être mis à jour. Erreur: ' + error, timeout: 5000, theme: 'metroui'}).show()
                console.log(error)
            }
            // return
        }            

        // Update match result in events node
        let updates = {}
        updates['/events_new/' + payload.event_id + '/localteam_score'] = payload.localteam_score
        updates['/events_new/' + payload.event_id + '/visitorteam_score'] = payload.visitorteam_score
        updates['/events_new/' + payload.event_id + '/match_status'] = payload.match_status
        updates['/events_new/' + payload.event_id + '/match_type'] = payload.match_type
        try {
            firebase.database().ref().update(updates)
            new Noty({type: 'success', text: 'Le résultat du match ' + payload.name + ' a été mis à jour.', timeout: 5000, theme: 'metroui'}).show()
        } catch(error) {
            new Noty({type: 'error', text: 'Le résultat n\'a pas pu être mis à jour. Erreur: ' + error, timeout: 5000, theme: 'metroui'}).show()
            console.log(error)
        }

    },

    async createMultipleEvents ({commit}, payload) {
        commit('setLoading', true, { root: true })
        // console.log('payload: ', payload)
        // return

        let url = ''
        if (payload.competition.id === 'all') { // All competitions
            url = 'https://api.football-data.org/v2/matches?dateFrom=' + payload.startDate + '&&dateTo=' + payload.endDate
        } else {
            url = 'https://api.football-data.org/v2/competitions/' + payload.competition.id + '/matches?dateFrom=' + payload.startDate + '&&dateTo=' + payload.endDate
        }


        // console.log('url: ', url)
        // return

        try {
            const response = await axios.get(url, {
                headers: {'X-Auth-Token': '3b3cd98fb2c441c9a9dff5a212a9e5f3'}
            })

            let events = {}

            for (let match of response.data.matches) {
                // console.log('Match: ', match)
                const date = moment(match.utcDate).format('DD-MM-YYYY')
                const id = match.homeTeam.id + '_vs_' + match.awayTeam.id + '_on_' + date
                events[id] = match
            }
            // console.log('events: ', events)
            
            let updates = {}
            updates['/events_new2/'] = events

            const snapshot = await firebase.database().ref().update(updates)
            commit('setLoading', false, { root: true })
            console.log('snapshot: ', snapshot)
            new Noty({type: 'success', text: 'Changements dans le noeud "events_new2" effectués avec succès!', timeout: 5000, theme: 'metroui'}).show()
        } catch(error) {
            commit('setLoading', false, { root: true })
            new Noty({type: 'error', text: 'Sorry, an error occured while sending your api request.', timeout: 5000, theme: 'metroui'}).show()
        }
    },

    // Delete an event
    deleteEvent ({commit}, eventId) {
        commit('setLoading', true, { root: true })
        firebase.database().ref('/events_new/' + eventId).remove().then(() => {
            // commit('deleteEvent', eventId)
            commit('setLoading', false, { root: true })
            new Noty({type: 'success', text: 'Événement supprimé avec succès!', timeout: 5000, theme: 'metroui'}).show()
        }).catch((error) => {
            console.log(error)
            new Noty({type: 'error', text: 'Erreur lors de la suppression de l\'événement. ' + error, timeout: 5000, theme: 'metroui'}).show()
        })
    }
}

export const getters = {
    loadedEvents(state) {
        return state.loadedEvents
    },
    loadedLiveEvents(state) {
        return state.loadedLiveEvents
    }
}