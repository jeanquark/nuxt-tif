import {Auth, GoogleAuthProvider, FacebookAuthProvider} from '~/plugins/firebase-client-init.js'
import firebase from 'firebase'
import axios from 'axios'
import Noty from 'noty'
import moment from 'moment'

function b64DecodeUnicode(str) {
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return decodeURIComponent(atob(str).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}

export const state = () => ({
    loadedUser: null,
    loadedAllUsers: [],
    loadedAvatarImages: [],
    loadedUserTeams: [],
    updateUser: null,
    loadedUserActions: []
})

export const mutations = {
    setLoadedUser (state, payload) {
        // console.log('entering setLoadedUser mutation')
        state.loadedUser = payload
    },
    setAllUsers (state, payload) {
        state.loadedAllUsers = payload
    },
    setAvatarImages (state, payload) {
        state.loadedAvatarImages = payload
    },
    setUserTeams (state, payload) {
        // console.log('call to setUserTeams mutation')
        state.loadedUserTeams = payload
    },
    setUpdateUser (state, payload) {
        // console.log('entering setUpdatedUser mutation')
        state.updateUser = payload
    },
    setUserActions (state, payload) {
        state.loadedUserActions = payload
    }
}

export const actions = {
    loadedAllUsers ({commit}) {
        try {
            firebase.database().ref('/users/').on('value', function (snapshot) {
                // console.log(snapshot.val())
                const usersArray = []
                for (const key in snapshot.val()) {
                    usersArray.push({ ...snapshot.val()[key]})
                }
                // console.log(postsArray)
                commit('setAllUsers', usersArray)
            })
        } catch(error) {
            console.log(error)
        }
    },
    async updateUserAccount ({commit, state, dispatch}, payload) {
        // We have to update user custom claims in token and user status in database
        console.log('async updateUserAccount')
        try {
            const userId = payload.user.id
            const userEmail = payload.user.email
            const action = payload.action
            let status = {}
            if (action == 'userToAdmin') {
                status = {
                    value: 'admin', 
                    updated_at: moment().unix()
                }
            } else if (action == 'adminToUser') {
                status = {
                    value: 'user',
                    updated_at: moment().unix()
                }
            }
            console.log('status: ', status)

            let promises = []
            promises.push(axios.post('/setCustomClaims', { userEmail, action }))
            promises.push(axios.post('/update-user-status', { userId, status }))

            axios.all(promises)
                .then(axios.spread(function (claims, status) {
                    console.log('claims: ', claims)
                    console.log('status: ', status)
                    new Noty({type: 'success', text: 'Successfully updated user status.', timeout: 5000, theme: 'metroui'}).show()
                }))
                .catch(error => {
                    console.log('error: ', error)
                    new Noty({type: 'error', text: 'Could not update user status.' + error, timeout: 5000, theme: 'metroui'}).show()
                })
        }
        catch(error) {
            console.log(error)
            throw new Error(error)
        }
    },
    
    loadedUser ({commit}, payload) {
        // console.log('Entering loadedUser action')
        return new Promise((resolve, reject) => {
            try {
                firebase.auth().onAuthStateChanged(user => {
                    if (user) {
                        const userId = user.uid

                        firebase.database().ref('users/' + userId).on('value', function (snapshot) {
                            console.log('Call to firebase user node')
                            const userArray = []
                            for (const key in snapshot.val()) {
                                userArray.push({ ...snapshot.val()[key], id: key})
                            }
                            commit('setLoadedUser', snapshot.val())
                            resolve()
                        })
                    } else {
                        console.log('No user is signed in')
                        resolve('Firebase onAuthStateChanged error')
                    } 
                })
            } catch (error) {
                console.log(error)
                reject(error)
                new Noty({type: 'error', text: 'LoadedUser failed. Error: ' + error, timeout: 5000, theme: 'metroui'}).show()
            }
        })
    },
    async updateUser ({commit}, payload) {
        try {
            // console.log(payload)
            const userId = firebase.auth().currentUser.uid
            firebase.database().ref('/users/' + userId).update(payload).then((response) => {
                new Noty({type: 'success', text: 'Modifications de l\'utilisateur effectuées avec succès', timeout: 5000, theme: 'metroui'}).show()
            }).catch(error => {
                new Noty({type: 'error', text: 'Aucune modification effectuée. ' + error, timeout: 5000, theme: 'metroui'}).show()
                console.log(error)
            })

        } catch(error) {
            new Noty({type: 'error', text: 'Modifications de l\'utilisateur non effectuées. Erreur: ' + error, timeout: 5000, theme: 'metroui'}).show()
            console.log(error)
        }
    },
    // async signUserIn ({commit}, payload) {
    //     try {
    //         let authData = await Auth.signInWithEmailAndPassword(payload.email, payload.password)
    //         // console.log(authData)
    //         const userId = authData.uid
    //         // First set loadedUser with temporary data from firebase auth
    //         commit('setLoadedUser', authData)
    //         commit('setLoading', false, { root: true })
    //         // Then asynchronously update loadedUser object with data from user node
    //         firebase.database().ref('/users/' + userId).on('value', function (snapshot) {
    //             commit('setLoadedUser', snapshot.val())
    //             console.log('loadedUser done')
    //         })
    //         console.log(userId)
    //     } 
    //     catch(error) {
    //         console.log(error)
    //         commit('setError', error, { root: true })
    //     }
    // },

    async loadedAvatarImages ({commit}) {
        try {
            firebase.database().ref('/avatar_images/').on('value', function (snapshot) {
                const imagesArray = []
                for (const key in snapshot.val()) {
                    imagesArray.unshift({ ...snapshot.val()[key]})
                }
                commit('setAvatarImages', imagesArray)
            })
        } 
        catch(error) {
            console.log(error)
            new Noty({type: 'error', text: 'Image non trouvée', timeout: 5000, theme: 'metroui'}).show()
            commit('setError', error, { root: true })
            commit('setLoading', false, { root: true })
        }
    },
    async loadedUserTeams ({commit, state}) {
        try {
            // console.log('Entering loadedUserTeams action')
            const userId = firebase.auth().currentUser.uid
            const userTeams = []
            const temp = []

            const userTeamsIds = await firebase.database().ref('/userTeams').child(userId).once('value')

            if (userTeamsIds.val()) {
                Object.keys(userTeamsIds.val()).forEach(function (team) {
                    temp.push(firebase.database().ref('/teams').child(team).once('value'))
                })
                const promises = await Promise.all(temp)
                promises.forEach(function (team) {
                    const teamObject = team.val()
                    teamObject['id'] = team.key
                    userTeams.push(teamObject)
                })
            }

            commit('setUserTeams', userTeams)
            return userTeams
        } 
        catch (error) {
            console.log(error)
            commit('setError', error, { root: true })
        }
    },
    
    async updateUserTeams ({commit, state, dispatch}, payload) {
        try {
            const userId = firebase.auth().currentUser.uid
            const newTeams = payload
            const oldTeams = await dispatch('loadedUserTeams')

            // List new teams
            const addedTeams = newTeams.filter(o => !oldTeams.find(o2 => o.slug === o2.slug))

            // List dropped teams
            const droppedTeams = oldTeams.filter(o => !newTeams.find(o2 => o.slug === o2.slug))

            // Check if user has enouph tokens
            const teams_diff = addedTeams.length - droppedTeams.length
            // console.log('teams_diff: ', teams_diff)

            const snapshot = await firebase.database().ref('game_parameters/costs/following_new_team').once('value')
            const tokens_cost = snapshot.val().tokens_cost
            // console.log('tokens_cost: ', tokens_cost)

            // Multiply by -1 to reflect for the fact that following more teams costs tokens
            const total_tokens_cost = (teams_diff * -1) * tokens_cost
            // console.log('total_tokens_cost: ', total_tokens_cost)

            const user_tokens = state.loadedUser.tokens.value
            console.log('user_tokens: ', user_tokens)

            if (user_tokens < Math.abs(total_tokens_cost)) {
                // new Noty({type: 'warning', text: 'Sorry, but you don\'t have enouph tokens to follow more teams. Get your tokens <nuxt-link to="/tokens">here</nuxt-link>', timeout: 5000, theme: 'metroui'}).show()
                this.$swal({
                    type: 'warning',
                    title: 'Oh no!',
                    text: 'Sorry, but you don\'t have enouph tokens to follow more teams.',
                    buttons: ['Get tokens', true],
                })
                .then((remain) => {
                    if (!remain) {
                        this.$router.push('/tokens')
                    }
                })
                return
            }

            let customText = ''
            if (teams_diff > 0) {
                customText = `You are following ${teams_diff} more ${teams_diff > 1 ? 'teams' : 'team'} than before. This will cost you ${Math.abs(total_tokens_cost)} tokens.`
            } else if (teams_diff < 0) {
                customText = `You are following ${Math.abs(teams_diff)} less ${Math.abs(teams_diff) > 1 ? 'teams' : 'team'} than you used to. You will therefore gain ${Math.abs(total_tokens_cost)} tokens.`
            } else {
                customText = 'You are following the same number of teams as before, so there is no cost for you.'
            }
            
            return this.$swal({
                title: 'Are you sure?',
                text: customText,
                icon: "warning",
                buttons: [
                    'No, cancel it!',
                    'Yes, I am sure!'
                ],
                dangerMode: true,
            }).then(function (isConfirm) {
                if (isConfirm) {

                    // 1) First delete all existing team references in userTeams node
                    firebase.database().ref('/userTeams/').child(userId).remove()

                    // 2) Then delete all existing user references in teamUsers node
                    firebase.database().ref('/teamUsers/').orderByChild(userId).equalTo(true).once('value', function (snapshot) {
                        snapshot.forEach(function(childSnapshot) {
                            console.log('Teams to delete: ', childSnapshot.key)
                            firebase.database().ref('/teamUsers').child(childSnapshot.key).child(userId).remove()
                        })
                    }).then(() => {
                        // 3) Save each team in userTeams node as well as the user in each teamUsers node
                        if (newTeams.length > 0) {
                            newTeams.forEach((team) => {
                                firebase.database().ref('/userTeams/').child(userId).update({[team.id]: true})
                                firebase.database().ref('/teamUsers/').child(team.id).update({[userId]: true})
                            })
                        } else {
                            new Noty({type: 'warning', text: 'You are not following any team', timeout: 5000, theme: 'metroui'}).show()
                        }
                        addedTeams.forEach((team) => {
                            new Noty({type: 'success', text: 'You are now also following ' + team.name + '. Future will tell whether it\'s a wise move or not &#9786;', timeout: 5000, theme: 'metroui'}).show()
                        })
                        droppedTeams.forEach((team) => {
                            new Noty({type: 'warning', text: 'You are no more following ' + team.name + ' &#x2639;', timeout: 5000, theme: 'metroui'}).show()
                        })
                    }).then(() => {
                        // 4) Reach out to the server to substract tokens from user account (user tokens cannot be modified from client)

                        return dispatch('updateUserTokens', {
                            operation: 'update_user_teams', 
                            amount: total_tokens_cost
                        }).then(response => {
                            console.log('response from vuex updateUserTeams action: ', response)
                            return response.data
                        }, error => {
                            console.error('error: ', error)
                        })
                    })
                } // if isConfirm
            }) // then
        } // try
        catch(error) {
            console.log(error)
            new Noty({type: 'error', text: 'Erreur lors de la sauvegarde des nouvelles équipes', timeout: 5000, theme: 'metroui'}).show()
            commit('setError', error, { root: true })
            commit('setLoading', false, { root: true })
        }
    },

    async updateUserTokens ({commit, state, dispatch}, payload) {
        // console.log('Entering updateUserTokens action')
        const userId = firebase.auth().currentUser.uid
        const user_tokens = state.loadedUser.tokens.value
        const snapshot = await firebase.database().ref('game_parameters/tokens_to_money_conversion_rate').once('value')
        const conversion_rate = snapshot.val().value
        const operation = payload.operation
        const amount = payload.amount
        // const total_cost = -Math.abs(parseInt(total_user_payment))
        // console.log('user_tokens: ', user_tokens)
        // console.log('conversion_rate: ', conversion_rate)
        // console.log('operation: ', operation)
        // console.log('amount: ', amount)

        return axios.post('/update-user-tokens', {
            userId,
            user_tokens,
            operation,
            amount,
            conversion_rate
        }).then((response) => {
            console.log('success')
            console.log('response from vuex action: ', response)
            return response.data
        }).catch(function (error) {
            console.log('error')
            console.log(error)
            return error
        })
    },

    async loadedUserActions ({commit, state, dispatch}, payload) {
        return new Promise((resolve, reject) => {
            try {
                const userId = firebase.auth().currentUser.uid
                firebase.database().ref('/userActions/' + userId).on('value', function (snapshot) {
                    const userActions = []
                    for (const key in snapshot.val()) {
                        userActions.push({ ...snapshot.val()[key], id: key})
                    }
                    commit('setUserActions', userActions)
                    resolve(userActions)
                })

            } 
            catch(error) {
                console.log(error)
                new Noty({type: 'error', text: 'User actions not found', timeout: 5000, theme: 'metroui'}).show()
                commit('setError', error, { root: true })
                commit('setLoading', false, { root: true })
                reject(error)
            }
        })
    },

    async updateUserActions ({commit}, payload) {
        try {
            const userId = firebase.auth().currentUser.uid
            console.log('payload: ', payload)
            firebase.database().ref('/userActions/' + userId + '/' + payload.today).update(payload.slots).then((response) => {
                new Noty({type: 'success', text: 'Actions updated successfully updated!', timeout: 5000, theme: 'metroui'}).show()
            }).catch(error => {
                new Noty({type: 'error', text: 'Sorry, your actions for the day could not be updated. ', timeout: 5000, theme: 'metroui'}).show()
                console.log(error)
            })

        } catch(error) {
            new Noty({type: 'error', text: 'Sorry, your actions for the day could not be updated', timeout: 5000, theme: 'metroui'}).show()
            console.log(error)
        }
    },
}

export const getters = {
    loadedUser (state) {
        return state.loadedUser
    },
    loadedAllUsers (state) {
        return state.loadedAllUsers
    },
    loadedAvatarImages (state) {
        return state.loadedAvatarImages
    },
    loadedUserTeams (state) {
        return state.loadedUserTeams
    },
    loadedUserActions (state) {
        return state.loadedUserActions
    }
}
