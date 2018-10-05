<template>
	<div class="container-fluid">
		
		<!-- The Modal Goodies -->
		<div id="modalBox">
			<div class="modal-dialog modal-lg" role="document">
			  <div class="modal-content">
				<!-- Modal Header -->
				<div class="modal-header">
					<span class="modal-title">Event <span class="modal-title-Sub">( {{ new Date() | moment('dddd, MMMM Do YYYY') }} )</span></span>
					<nuxt-link to="/"><button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" class="white-text"><i class="fas fa-arrow-circle-left"></i></span>
                	</button></nuxt-link>					
            	</div>
				<!-- Modal body -->
				<div id="modalBoxContent" class="modal-body">
					<div class="flex-container-modal-box-title">
						<h1>Tous les événements du jour</h1>
						<p style="color: #000;">
							<!-- loadedEvents: {{ loadedEvents }}<br /><br /> -->
							<!-- loadedUserTeamsEvents: {{ loadedUserTeamsEvents }}<br /><br /> -->
							<!-- userEvents: {{ userEvents }}<br /><br /> -->
							<!-- events: {{ events }}<br /><br /> -->
						</p>
					</div>
					<div class="flex-container-modal-Title banner2 text-center">
						<h2>Mes équipes <span class="infoEvent"><i class="infoTesEquipes fas fa-info-circle"></i></span></h2>

					</div>

					<!-- Loading placeholder -->
					
					<div class="flex-container-modal-Action">
						<table class="table tableText">
						  	<tbody>
								<tr class="borderResultat" v-for="event of userEvents">
									<td class="tdScore text-left">
										<nuxt-link :to="'/user/events/' + event.id" class="linkEvent">
											{{ event.date }}</br>
											{{ convertToLocaltime(event.timestamp) }}
										</nuxt-link>
									</td>
								  	<td class="tdScore1 text-center">
								  		<a href="mesEquipesDetails.html" class="linkEvent"><img v-lazy="'/images/teams/' + event.home_team.slug + '.png'" class="imgModalAgendaFlags"/> {{ event.home_team.name }}</a>
								  	</td>
								  	<td class="tdScore2 text-center">
										<nuxt-link :to="'/user/events/' + event.id" class="linkEvent">
											<transition name="fade" mode="out-in" :duration="{ enter: 3000, leave: 2000 }">
												<span class="" style="float: right; padding: 15px;" :key="getHomeTeamScore(event.score)" v-if="event.status === 'IN PLAY' || event.status === 'FINISHED'">
													{{ getHomeTeamScore(event.score) }}
												</span>
											</transition>
											<span>-</br><span :class="[event.status === 'IN PLAY' ? 'in_play' : '']">{{ event.status }}</span></span>
											<transition name="fade" mode="out-in" :duration="{ enter: 3000, leave: 2000 }">
												<span class="" style="float: left; padding: 15px;" :key="getVisitorTeamScore(event.score)" v-if="event.status === 'IN PLAY' || event.status === 'FINISHED'">
													{{ getVisitorTeamScore(event.score) }}
												</span>
											</transition>
										</nuxt-link>
								  	</td>
								  	<td class="tdScore1 text-right" style="width: 30%;">
								  		<a href="autresEquipesDetails.html" class="linkEvent">{{ event.visitor_team.name }} <img v-lazy="'/images/teams/' + event.visitor_team.slug + '.png'" class="imgModalAgendaFlags"/></a>
								  	</td>
									<td class="tdScore text-right">
										<nuxt-link :to="'/user/events/' + event.id" class="linkEvent">
								  			<span v-if="event.competition">{{ event.competition.name }}<br /></span>
								  			<span v-if="event.round">{{ event.round.name }}<br /></span>
										</nuxt-link>
									</td>
								</tr>	
						  	</tbody>
						</table>
					</div>
					<div class="flex-container-modal-Title banner text-center">
						<h2>Tous les autres évenements du jour <span class="infoOtherEvent"><i class="infoTesEquipes fas fa-info-circle"></i></span></h2>
					</div>
					<!-- Loading placeholder -->
					<div class="ph-item" v-for="n in 4" v-if="events.length < 1">
						<div class="ph-col-2">
							<div class="ph-avatar"></div>
						</div>
						<div>
							<div class="ph-row">
								<div class="ph-col-4 empty"></div>
								<div class="ph-col-4 big"></div>
								<div class="ph-col-4 empty"></div>
							</div>
							<div class="ph-row">
								<div class="ph-col-4 empty"></div>
								<div class="ph-col-4"></div>
								<div class="ph-col-4 empty"></div>
							</div>
							<div class="ph-row">
								<div class="ph-col-4 empty"></div>
								<div class="ph-col-4"></div>
								<div class="ph-col-4 empty"></div>
							</div>
							<div class="ph-row">
								<div class="ph-col-4 empty"></div>
								<div class="ph-col-4"></div>
								<div class="ph-col-4 empty"></div>
							</div>
						</div>
						<div class="ph-col-2">
							<div class="ph-avatar"></div>
						</div>
					</div>
					<div class="flex-container-modal-Action">
						<table class="table tableText">
						  	<tbody>
								<tr class="borderResultat" v-for="event of events">
									<td class="tdScore text-left">
										<nuxt-link :to="'/user/events/' + event.id" class="linkEvent">
											{{ event.date }}</br>
											{{ convertToLocaltime(event.timestamp) }}
										</nuxt-link>
									</td>
								  	<td class="tdScore1 text-left">
								  		<a href="mesEquipesDetails.html" class="linkEvent"><img v-lazy="'/images/teams/' + event.home_team.slug + '.png'" class="imgModalAgendaFlags"/> {{ event.home_team.name }}</a>
								  	</td>
								  	<td class="tdScore2 text-center">
										<nuxt-link :to="'/user/events/' + event.id" class="linkEvent">
											<transition name="fade" mode="out-in" :duration="{ enter: 3000, leave: 2000 }">
												<span class="" style="float: left; padding: 15px;" :key="getHomeTeamScore(event.score)" v-if="event.status === 'IN PLAY' || event.status === 'FINISHED'">
													{{ getHomeTeamScore(event.score) }}
												</span>
											</transition>
											<span>-</br><span :class="[event.status === 'IN PLAY' ? 'in_play' : '']">{{ event.status }}</span></span>
											<transition name="fade" mode="out-in" :duration="{ enter: 3000, leave: 2000 }">
												<span class="" style="float: right; padding: 15px;" :key="getVisitorTeamScore(event.score)" v-if="event.status === 'IN PLAY' || event.status === 'FINISHED'">
													{{ getVisitorTeamScore(event.score) }}
												</span>
											</transition>
										</nuxt-link>
								  	</td>
								  	<td class="tdScore1 text-right" style="width: 30%;">
								  		<a href="autresEquipesDetails.html" class="linkEvent">{{ event.visitor_team.name }} <img v-lazy="'/images/teams/' + event.visitor_team.slug + '.png'" class="imgModalAgendaFlags"/></a>
								  	</td>
									<td class="tdScore text-right">
										<nuxt-link :to="'/user/events/' + event.id" class="linkEvent">
								  			<span v-if="event.competition">{{ event.competition.name }}<br /></span>
								  			<span v-if="event.round">{{ event.round.name }}<br /></span>
										</nuxt-link>
									</td>
								</tr>	
						  	</tbody>
						</table>
					</div>
				</div>
				<!-- Modal footer -->
				<div class="modal-footer">
				  	<a href="index.html"><button type="button" class="btn btn-danger" data-dismiss="modal">Rien de m'intéresse !</button></a>
				</div>
			  </div>
			</div>
		</div>
		<!-- End Modal Goodies -->
	</div>
</template>

<script>
	import moment from 'moment'
	// import 'vue2-animate/dist/vue2-animate.min.css'
	export default {
		layout: 'layoutFront',
		async created () {
			const userTeamsIds = []
			// let userTeams
			// if (this.$store.getters['users/loadedUserTeams'].length < 1) {
			// 	userTeams = await this.$store.dispatch('users/loadedUserTeams')
			// } else {
			// 	userTeams = this.$store.getters['users/loadedUserTeams']
			// }

			// for (let team of userTeams) {
			// 	userTeamsIds.push(team.livescore_api_id)
			// }
			// console.log('userTeamsIds: ', userTeamsIds)

			// const today = moment().format('YYYY-MM-DD')
			// // const today = '2018-09-18'
			// console.log('today: ', today)

			if (this.$store.getters['events/loadedEvents'].length < 1) {
				await this.$store.dispatch('events/loadedEvents')
			}

			// const todayEvents = this.$store.getters['events/loadedEvents']
			// 	.filter(event => (event.date === today))
			// 	.sort((a, b) => a.timestamp - b.timestamp)
			// console.log('todayEvents: ', todayEvents)
			// console.log('userTeamsIds2: ', userTeamsIds)
			// for (let event of todayEvents) {
			// 	// console.log('event: ', event)
			// 	if (userTeamsIds.includes(event.home_team.id) || userTeamsIds.includes(event.visitor_team.id)) {
			// 	// if (userTeamsIds.includes('20')) {
			// 		this.userEvents.push(event)
			// 	} else {
			// 		this.events.push(event)
			// 	}
			// }
			// console.log('userEvents: ', this.userEvents)
			// console.log('events: ', this.events)
			console.log(moment('2018-09-28 19:30:00').utc().format('X'))
		},
		data () {
			return {
				// events: [],
				// userEvents: []
				show: true
			}
		},
		computed: {
			userEvents () {
				const today = moment().format('YYYY-MM-DD')
				const userTeamIds = ["17", "20", "5", "6", "7", "0"]
				return this.$store.getters['events/loadedEvents']
					.filter(event => (event.date === today))
					.filter(event => (userTeamIds.includes(event.home_team.id) || userTeamIds.includes(event.visitor_team.id)))
					.sort((a, b) => a.timestamp - b.timestamp)
			},
			events () {
				const today = moment().format('YYYY-MM-DD')
				const userTeamIds = ["17", "20", "5", "6", "7", "0"]
				return this.$store.getters['events/loadedEvents']
					.filter(event => (event.date === today))
					.filter(event => (!userTeamIds.includes(event.home_team.id)))
					.filter(event => (!userTeamIds.includes(event.visitor_team.id)))
					.sort((a, b) => a.timestamp - b.timestamp)
			}
		},
		methods: {
			convertToLocaltime (timestamp) {
				const utcDiff = new Date().getTimezoneOffset()
				// const utcDiff = '60'
				console.log('utcDiff: ', utcDiff)
				if (utcDiff > 0) {
					return moment.unix(timestamp).add(utcDiff, 'minutes').format("HH:mm")
				} else {
					return moment.unix(timestamp).subtract(utcDiff, 'minutes').format("HH:mm")
				}
			},
			getHomeTeamScore (score) {
				if (!score) return
				return score.substring(0, 2)
			},
			getVisitorTeamScore (score) {
				if (!score) return
				return score.slice(-2)
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
	/* Vuejs transitions*/
	.fade-enter-active, .fade-leave-active {
	  transition: opacity 5s;
	  background-color: yellow;
	}
	.fade-enter, .fade-leave-to {
	  opacity: 0;
	}

	/*.fade-enter {
        opacity: 0;
        background-color: orange;
    }
    .fade-leave {
     }
    .fade-enter-active {
        transition-property: opacity;
        transition-duration: 3s;
        transition-delay: 2s;
    }
    .fade-leave-active {
     }
    .fade-enter-to {
        background-color: orange;
    }
    .fade-leave-to {
        
    }*/

    /* In play flash animation */
    .in_play {
    	color: green;
    	-webkit-animation: flash linear 1s infinite;
		animation: flash linear 1s infinite;
    }
    @-webkit-keyframes flash {
		0% { opacity: 1; } 
		50% { opacity: .1; } 
		100% { opacity: 1; }
	}
	@keyframes flash {
		0% { opacity: 1; } 
		50% { opacity: .1; } 
		100% { opacity: 1; }
	}
    .ph-row {
    	margin-bottom: 0px;
    }
    .ph-item {
    	margin-bottom: 0px;
    	padding: 5px 15px;
    }
    .ph-avatar {
    	margin-bottom: 0px;
    }
</style>