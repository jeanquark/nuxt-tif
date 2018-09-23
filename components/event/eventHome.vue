<template>
	<div>
	<!-- <div v-if="2 + 3 === 6"> -->
		<div class="modal-footer">
			<button type="button" class="btn btn-success" data-dismiss="modal" @click="addEvent" v-if="loadedEventUsersHomeTeam < 1 && loadedEventUsersVisitorTeam < 1">Je veux participer à cet événement!</button>
			<button type="button" class="btn btn-warning" data-dismiss="modal" @click="addEvent" v-else>Me désinscrire de l'événement</button>
		</div>
		<div class="flex-container-modal-matchStats banner2 text-center">
			<h2>Fans participants à l'événement</h2>
			<p style="color: #000;">
				<!-- loadedEventUsersHomeTeam: {{ loadedEventUsersHomeTeam }}<br /><br /> -->
				<!-- loadedEventUsersVisitorTeam: {{ loadedEventUsersVisitorTeam }}<br /><br /> -->
			</p>
		</div>
		<div class="flex-container-fanParticipant">
			<table class="table tableText">
			  <tbody>
				<tr class="borderMatchAgenda">
					<td class="matchAgenda text-center">
						<div v-for="user of loadedEventUsersHomeTeam">
							<img :src="user.avatar" class="imgModalAgendaFlags"/>
						</div>
					</td>
				  	<td class="matchAgenda text-center">
				  		<div v-for="user of loadedEventUsersVisitorTeam">
							<img :src="user.avatar" class="imgModalAgendaFlags" data-toggle="tooltip" data-placement="top" :title="user.username" />
						</div>
				  	</td>
				</tr>	
			  </tbody>
			</table>
		</div>
		<div class="flex-container-modal-matchStats banner2 text-center">
			<h2>Actions utilisées durant l'événement</h2>
		</div>
		<div class="flex-container-modal-OtherTeam">
			<h5>Tu n'as pas encore participé au match !</h5>
		</div>
		<div class="flex-container-modal-matchStats banner2 text-center">
			<h2>Actions collectives réalisées par les fans</h2>
		</div>
		<div class="flex-container-fanParticipant">
			<table class="table tableText">
			  <tbody>
				<tr class="borderMatchAgenda">
					<td class="matchAgenda text-center">
						<img src="/images/actions/chanter.png" class="imgModalAgendaFlags"/>
						<img src="/images/actions/chanter.png" class="imgModalAgendaFlags"/>
						<img src="/images/actions/chanter.png" class="imgModalAgendaFlags"/>
						<img src="/images/actions/chanter.png" class="imgModalAgendaFlags"/>
						<img src="/images/actions/chanter.png" class="imgModalAgendaFlags"/>
						<img src="/images/actions/chanter.png" class="imgModalAgendaFlags"/>
						<img src="/images/actions/chanter.png" class="imgModalAgendaFlags"/>
					</td>
				  <td class="matchAgenda text-center">
						<img src="/images/actions/chanter.png" class="imgModalAgendaFlags"/>
						<img src="/images/actions/chanter.png" class="imgModalAgendaFlags"/>
						<img src="/images/actions/chanter.png" class="imgModalAgendaFlags"/>
						<img src="/images/actions/chanter.png" class="imgModalAgendaFlags"/>
						<img src="/images/actions/chanter.png" class="imgModalAgendaFlags"/>
						<img src="/images/actions/chanter.png" class="imgModalAgendaFlags"/>
						<img src="/images/actions/chanter.png" class="imgModalAgendaFlags"/>
						<img src="/images/actions/chanter.png" class="imgModalAgendaFlags"/>
						<img src="/images/actions/chanter.png" class="imgModalAgendaFlags"/>
						<img src="/images/actions/chanter.png" class="imgModalAgendaFlags"/>
						<img src="/images/actions/chanter.png" class="imgModalAgendaFlags"/>
						<img src="/images/actions/chanter.png" class="imgModalAgendaFlags"/>
						<img src="/images/actions/chanter.png" class="imgModalAgendaFlags"/>
				  </td>
				</tr>	
			  </tbody>
			</table>
		</div>
		<div class="flex-container-modal-matchStats banner2 text-center">
			<h2>Actions collectives en cours</h2>
		</div>
		<div class="flex-container-modal-OtherTeam">
			<h5>Il faut que tu aies participés au match pour pouvoir prendre part aux actions collectives !</h5>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['event'],
		created () {
			console.log('event3: ', this.event)
		},
		data () {
			return {

			}
		},
		computed: {
			loadedEventUsersHomeTeam () {
				console.log('event2: ', this.event)
				const homeTeamId = this.event.home_team.id
				console.log('homeTeamId: ', homeTeamId)
				return this.$store.getters['events/loadedEventUsers'].filter(team => (team.supported_team.id === homeTeamId))
			},
			loadedEventUsersVisitorTeam () {
				const visitorTeamId = this.event.visitor_team.id
				console.log('visitorTeamId: ', visitorTeamId)
				return this.$store.getters['events/loadedEventUsers'].filter(team => (team.supported_team.id === visitorTeamId))
			}
		},
		methods: {
			addEvent () {
				console.log('addEvent')
				return this.$emit('page', 'eventTeam')
				this.$store.dispatch('users/updateUserEvents', this.event)
			}
		}
	}
</script>

<style scoped>
</style>