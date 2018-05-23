import firebase from 'firebase'

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
		firebase.database().ref('/events_new/').on('value', function (snapshot) {
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