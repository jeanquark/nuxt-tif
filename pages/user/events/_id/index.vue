<template>
	<div class="container-fluid">
		
		<!-- The Modal YourTeam -->
		<div id="modalBox">
			<div class="modal-dialog modal-lg">
			  	<div class="modal-content">
				  	<!-- Modal Header -->
					<div class="modal-header">
						<span class="modal-title">Event <span class="modal-title-Sub">( {{ new Date() | moment('dddd, MMMM Do YYYY') }} )</span></span>
						<nuxt-link to="/user/events"><button type="button" class="close" data-dismiss="modal" aria-label="Close">
	                    <span aria-hidden="true" class="white-text"><i class="fas fa-arrow-circle-left"></i></span>
	                	</button></nuxt-link>				
	            	</div>

					<!-- Modal body -->
					<div id="modalBoxContent" class="matchBox" v-if="loadedEvent.home_team && loadedEvent.visitor_team">
						<div class="resumeMatch">
							<div class="flex-container-match">
								<div class="left">Competition id</br>{{ loadedEvent.league_id }}</div>
								<div class="center text-center">{{ loadedEvent.date }}</br>{{ loadedEvent.time }}</div>
								<!-- <div class="right">Match de groupes</br>Groupe A</div> -->
								<!-- <p style="color: #000;">
									loadedEvent: {{ loadedEvent }}<br /><br />
									eventUsers: {{ loadedEventUsers }}<br /><br />
									loadedEvent2: {{ loadedEvent2('h') }}<br /><br />
								</p> -->
							</div>
							<div class="flex-container-match-flagMatch">
								<div class="flagMatch"><img :src="'/images/teams/' + loadedEvent.home_team.slug + '.png'" class="imgModalMatchFlags"/></div>
								<div class="scorePF">1234.99 PF</div>
								<div class="statutMatch" v-if="loadedEvent.status === 'IN PLAY'">En cours</br>{{ loadedEvent.time }} minutes</div>
								<div class="scorePF">1369.74 PF</div>
								<div class="flagMatch"><img :src="'/images/teams/' + loadedEvent.visitor_team.slug + '.png'" class="imgModalMatchFlags"/></div>
							</div>
							<div class="flex-container-teamMatch">
								<div class="teamMatch center">{{ loadedEvent.home_team.name }}</div>
								<div class="scoreReal center" v-if="loadedEvent.status === 'IN PLAY'">Score réel</br>{{ loadedEvent.score }}</div>
								<div class="scoreReal center" v-if="loadedEvent.status === 'FINISHED'">Match terminé</br>{{ loadedEvent.ft_score }}</div>
								<div class="scoreReal center" v-if="loadedEvent.status === 'SCHEDULED'">Débute à {{ loadedEvent.time }}</br></div>
								<div class="teamMatch center">{{ loadedEvent.visitor_team.name }}</div>
							</div>
							<div class="flex-container-teamMatch">
								<div class="matchInfo">
									<span if="loadedEvent.events">
										<!-- {{ this.homeEvents }} -->
										<div v-for="event in loadedEvent.events">
											<p v-if="event.home_away === 'h'">
												{{ event.event }}&nbsp;-&nbsp;{{ event.time }}min&nbsp;-&nbsp;{{ event.player }}
											</p>
										</div>
										<!-- <ul v-for="event in loadedEvent.events">
											<li v-if="event.home_away === 'h'">{{ event }}</li>
										</ul> -->
										<!-- {{ loadedEvent.events }} -->
										<!-- {{ loadedEvent.events.filter(event => (event.home_away === 'h')) }} -->
									</span>
								</div>
								<div class="matchInfoRight">
									<div v-for="event in loadedEvent.events">
										<p v-if="event.home_away === 'a'">
											{{ event.event }}&nbsp;-&nbsp;{{ event.time }}min&nbsp;-&nbsp;{{ event.player }}
										</p>
									</div>
									<!-- But : 12e - Buteur no 1</br> -->
									<!-- Carton jaune : 25e - Joueur no 12 -->
								</div>
							</div>
							<div class="flex-container-match-tonScore">
								<div class="tonScore center">Ton score</br><span class="orangered">0.00 PF</span></div>
							</div>
							<div class="flex-container-match-barreProgression">
								<div class="barreProgression center">Barre de progression du score</br>
									<div class="progress">
										<div class="progress-bar blue" role="progressbar" style="width:45%">
										{{ loadedEvent.home_team.name }}
										</div>
										<div class="progress-bar red" role="progressbar" style="width:55%">
										{{ loadedEvent.visitor_team.name }}
										</div>
									</div> 								
								</div>
							</div>
						</div>
					</div>
					<div id="modalTitle" class="modal-body-match" v-if="event.home_team">
						<event-home v-if="page === 'eventHome'" :event="event" v-on:page="page = 'eventTeam'"></event-home>
						<event-team v-if="page === 'eventTeam'" :event="event" v-on:page="page ='eventHome'"></event-team>
					</div>
				</div><!-- /.modal-content -->
			</div><!-- /.modal-dialog -->
		</div><!-- /#modal-box -->
	</div><!-- /.container-fluid -->
</template>

<script>
	import eventHome from '~/components/event/eventHome.vue'
	import eventTeam from '~/components/event/eventTeam.vue'
	export default {
		layout: 'layoutFront',
		components: {
			eventHome,
			eventTeam
		},
		// props: ['page'],
		created () {
			if (!this.$store.getters['events/loadedEvents'].length > 0) {
				this.$store.dispatch('events/loadedEvents').then(() => {
					const id = this.$route.params.id
					console.log('id: ', id)
					const event = this.$store.getters['events/loadedEvents'].find(event => (event.id === id))
					// const event2 = this.$store.getters['events/loadedEvents'].find(event => (event.id === '2018-09-22_liverpool_vs_southampton'))
					console.log('event: ', event)
					this.$store.dispatch('events/loadedEventUsers', event)
					this.event = event
				})
			} else {
				const id = this.$route.params.id
				console.log('id: ', id)
				const event = this.$store.getters['events/loadedEvents'].find(event => (event.id === id))
				// const event2 = this.$store.getters['events/loadedEvents'].find(event => (event.id === '2018-09-22_liverpool_vs_southampton'))
				console.log('event: ', event)
				this.$store.dispatch('events/loadedEventUsers', event)
				this.event = event
			}
		},
		data () {
			return {
				page: 'eventHome',
				event: {},
				// homeEvents: [],
				// awayEvents: []
			}
		},
		computed: {
			loadedEvent () {
				const id = this.$route.params.id
				return this.$store.getters['events/loadedEvents'].find(event => (event.id === id))
			},
			loadedEventUsers () {
				return this.$store.getters['events/loadedEventUsers']
				// console.log('abc', abc)
				// return abc
			}
		},
		methods: {
			addEvent () {
				console.log('addEvent')
				this.$store.dispatch('users/updateUserEvents', this.event)
			}
		}
	}
</script>

<style scoped>
	.green-color {
		color: green;
	}
	.red-color {
		color: red;
	}
</style>