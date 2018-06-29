import firebase from 'firebase'
import Noty from 'noty'

export const state = () => ({
    loadedStatistics: []
})

export const mutations = {
    setStatistics(state, payload) {
        state.loadedStatistics = payload
    }
}

export const actions = {
    loadedStatistics ({commit}) {
        try {
            firebase.database().ref('/statistics/').once('value').then(function (snapshot) {
                commit('setStatistics', snapshot.val())
            })
        } catch(error) {
          console.log(error)
        }
    },
    async updatedStatistics ({commit, dispatch, rootState, rootGetters}) {
        try {
            // let abc = commit('competitions/setCompetitions', false, { root: true })
            // console.log(abc)
            // const totalCompetitions2 = rootState.competitions
            // console.log(totalCompetitions2)
            // if (rootState.competitions.loadedCompetitions.length > 0) {
            //     console.log(rootState.competitions.loadedCompetitions)
            // }

            // firebase.database().ref('/competitions/').once('value').then(function (snapshot) {
            //     // console.log(snapshot.val())
            //     const totalCompetitions = Object.keys(snapshot.val()).length
            // })

            // let data = new Promise((resolve, reject) => {
            //     // resolve(commit('competitions/setCompetitions', false, { root: true }))
            //     resolve(dispatch('competitions/loadedCompetitions', false, { root: true }))
            //     // resolve(dispatch('teams/loadedTeams', false, { root: true }))
            //     // console.log('abc')
            //     // return abc
            // })
            // data.then((data) => {
            //     console.log('def')
            //     // let abc = rootState.competitions.loadedCompetitions.length
            //     // console.log(abc)
            //     // // console.log(JSON.parse(JSON.stringify(rootState.competitions.loadedCompetitions)))
            //     // console.log({...rootState.competitions})
            //     console.log(data)
            //     // const competitions = [];
            //     // let abc = rootState.competitions
            //     // for (let competition of abc) {
            //     //     competitions.push(competition)
            //     // })
            //     // console.log(competitions)
            //     // console.log(rootState.teams)
            //     // console.log(rootState.competitions.loadedCompetitions)
            //     // console.log(rootState.competitions.loadedCompetitions.length)
            // })
            const competitions = await firebase.database().ref('/competitions/').once('value')
            const totalCompetitions = Object.keys(competitions.val()).length

            const sports = await firebase.database().ref('/categories/').once('value')
            const totalSports = Object.keys(sports.val()).length

            const teams = await firebase.database().ref('/teams/').once('value')
            const totalTeams = Object.keys(teams.val()).length

            const fans = await firebase.database().ref('/users/').once('value')
            const totalFans = Object.keys(fans.val()).length

            const totalPlayers = 0
            const totalPoints = 0

            // return
            let updates = {}
            updates['competitions/value'] = totalCompetitions
            updates['teams/value'] = totalTeams
            updates['fans/value'] = totalFans
            updates['players/value'] = totalPlayers
            updates['sports/value'] = totalSports
            updates['points/value'] = totalPoints

            firebase.database().ref('/statistics/game/').update(updates).then(() => {
                new Noty({type: 'success', text: 'Statistiques mises à jour avec succès!', timeout: 5000, theme: 'metroui'}).show()
            }).catch((error) => {
                console.log(error)
                new Noty({type: 'error', text: 'Les statistiques n\'ont pas pu être mises à jour. Erreur: ' + error, timeout: 5000, theme: 'metroui'}).show()
            })
            return

            const payload = {
                "game": {
                    "competitions": {
                        "name": "Compétitions en cours",
                        "slug": "competitions",
                        "value": totalComp
                    },
                    "fans": {
                        "name": "Fans",
                        "slug": "fans",
                        "value": 1
                    },
                    "sports": {
                        "name": "Sports différents",
                        "slug": "sports",
                        "value": 1
                    },
                    "teams": {
                        "name": "Équipes dans la base de données",
                        "slug": "teams",
                        "value": 1
                    },
                    "players": {
                        "name": "Joueurs dans la base de données",
                        "slug": "players",
                        "value": 1
                    },
                    "points": {
                        "name": "Points de ferveur / match",
                        "slug": "points",
                        "value": 1
                    }
                }
            }
            firebase.database().ref('/statistics/').update(payload)
        } catch(error) {
            console.log(error)
        }
    }
}

export const getters = {
    loadedStatistics(state) {
        return state.loadedStatistics
    }
}
