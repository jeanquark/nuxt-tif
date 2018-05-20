import firebase from 'firebase'
import axios from 'axios'

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

  	// Create a new competition
    createTeam ({commit, getters}, payload) {
    	// payload['image'] = payload.slug
    	console.log(payload.image)
    	const base64Image = payload.image

    	// 1) First try saving the team image on the server images folder
		const imageType = base64Image.substring("data:image/".length, base64Image.indexOf(";base64"))
		console.log(imageType)

		const imageName = payload.slug + '.' + imageType
		console.log(imageName)

		const url = '/images/'

		axios.post('/images/', {})
		// this.$axios.$post('/static/images/teams/', base64Image)
		// axios.post('https://firebasestorage.googleapis.com/v0/b/thisisfan-71532.appspot.com/o/images%2Favatars%2Fbackground10_body2_skin10_face1__RHhcGpLRSgRNm1ByOA9j7qASopf1?alt=media&token=7699e2e1-4962-4431-b330-7246036f2721', base64Image, {headers: {'Content-Type': 'multipart/form-data'}})
		.then(response => {
			console.log(response)
	    })
	    .catch(e => {
	    	console.log(e)
	    })

		// 2) Only then can you copy entries on database


        // commit('setLoading', true, { root: true })

        // // Generate new unique key
        // const newTeamKey = firebase.database().ref().child('/teams/').push().key

        // let updates = {}
        // updates['/teams/' + newTeamKey] = payload

        // firebase.database().ref().update(updates).then(() => {
        //     new Noty({type: 'success', text: 'Équipe ' + payload.name + ' enregistrée avec succès!', timeout: 5000, theme: 'metroui'}).show()
        // }).catch((error) => {
        //     console.log(error)
        //     commit('setError', error, { root: true })
        //     new Noty({type: 'error', text: 'Équipe non enregistrée. Erreur: ' + error, timeout: 5000, theme: 'metroui'}).show()
        // })
    },
}

export const getters = {
	loadedTeams(state) {
        return state.loadedTeams
    }
}