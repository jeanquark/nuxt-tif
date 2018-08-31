<template>
	<div>
		<h3 v-if="this.loading">Call the API for next week matches...</h3>
		<h4 v-if="!this.loading">Done!</h4>
	</div>
</template>

<script>
	import firebase from 'firebase'
	import axios from 'axios'
	import moment from 'moment'
	export default {
		layout: 'layoutFront',
		created () {
			// loading = true
			const startDate = moment().format('YYYY-MM-DD')
			console.log('startDate: ', startDate)
			const endDate = moment().add(7, 'days').format('YYYY-MM-DD')
			console.log('endDate: ', endDate)
            const url = 'https://api.football-data.org/v2/matches?dateFrom=' + startDate + '&&dateTo=' + endDate
            console.log('url: ', url)
            // return

            axios.get(url, {
                headers: {'X-Auth-Token': '3b3cd98fb2c441c9a9dff5a212a9e5f3'}
            }).then((response) => {
            	console.log('response: ', response)
            	let events = {}

	            for (let match of response.data.matches) {
	                // console.log('Match: ', match)
	                const date = moment(match.utcDate).format('DD-MM-YYYY')
	                const id = match.homeTeam.id + '_vs_' + match.awayTeam.id + '_on_' + date
	                events[id] = match
	            }
	            console.log('events: ', events)

	            let updates = {}
		        updates['/events_new2/'] = events

		        firebase.database().ref().update(updates).then((snapshot) => {
		        	this.loading = false
		        	console.log('snapshot', snapshot)
		        	console.log('Successfully updated firebase database with new events')
		        }).catch((error) => {
		            console.log(error)
		        })
            }).catch(error => {
            	console.log(error)
            })
        },
        data () {
        	return {
        		loading: true
        	}
        }
	}
</script>