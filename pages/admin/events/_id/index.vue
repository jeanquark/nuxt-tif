<template>
	<v-layout>
	    <v-flex xs12 sm10 offset-sm1>
		    <v-breadcrumbs divider="/">
		  		<v-breadcrumbs-item
			        v-for="link in links"
			        :key="link.text"
			        :disabled="link.disabled"
			        :to="link.to"
			        :exact="true"
			      >
		    		{{ link.text }}
		  		</v-breadcrumbs-item>
			</v-breadcrumbs>
	      	<v-card class="mt-4">
	      		<v-form>
					<v-card-title class="primary-title">
						<v-card-text class="text-md-center">
							<!-- <h3>Edit event "{{ this.event.name }}"</h3> -->
						</v-card-text>
					</v-card-title>
					<v-container fluid>
					   
					</v-container>
				</v-form>
	      	</v-card>
	      	<!-- {{ this.event }} -->

			<football-event :event="event" v-if="selectedCategory.slug === 'football'"></football-event>

	    </v-flex>
    </v-layout>
</template>

<script>
  	import FootballEvent from '~/components/football/EventEdit'
	export default {
		layout: 'layoutBack',
		components: { FootballEvent },
		created () {
			// Retrieve event by url id param
			// console.log(this.$route.params.id)
			const eventId = this.$route.params.id
			this.event = this.$store.getters['events/loadedEvents'].find(event => (event.id === eventId))
			// console.log(event)
			// this.name = event.name
			// this.loadedEvent = event
		},
		data () {
			return {
				selectedActivity: {
					name: 'Sport',
					slug: 'sport'
				},
        		selectedCategory: {
        			name: 'Football',
        			slug: 'football'
        		},
        		name: '',
        		event: '',
        		categories: [],
				links: [
					{
						text: 'Dashboard',
						to: '/admin/',
						disabled: false
					}, 
					{
						text: 'Events',
						to: '/admin/events',
						disabled: false
					},
					{
						text: 'Edit event',
						disabled: true
					}
				]
			}
		},
		computed: {
			loadedEvents () {
				return this.$store.getters['events/loadedEvents']
			},
			loadedEvent () {
				return this
			}
		}
	}
</script>