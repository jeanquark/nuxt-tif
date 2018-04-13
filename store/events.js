import firebase from 'firebase'

export const state = () => ({
	loadedEvents: []
})

export const mutations = {
	setEvents(state, payload) {
        state.loadedEvents = payload
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
	loadedEvents ({commit}) {
    	try {
    		firebase.database().ref('/events_new/').on('value', function (snapshot) {
		      	// console.log(snapshot.val())
		      	const eventsArray = []
		      	for (const key in snapshot.val()) {
		        	eventsArray.push({ ...snapshot.val()[key]})
		      	}
		      	// console.log(postsArray)
		      	commit('setEvents', eventsArray)
		    })
		} catch(error) {
			console.log(error)
		}
  	},
  	createEvent ({commit, getters}, payload) {
  		// console.log('createEvent')
  		try {
  			console.log(payload)
			const newEventKey = firebase.database().ref().child('/events_new/').push().key
			let updates = {}
			updates['/events/' + newEventKey] = payload
			firebase.database().ref().update(updates)
			this.$toast.success('Successfully added event!')
  		} catch(error) {
  			console.log(error)
      		commit('setError', error, { root: true })
      		this.$toast.error('Could not add event.')
  		}
  	}
}

export const getters = {
	loadedEvents(state) {
        return state.loadedEvents
    }
}