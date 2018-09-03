<template>
	<div class="container-fluid">
		
		<!-- The Modal Goodies -->
		<div id="modalBox">
			<div class="modal-dialog modal-lg" role="document">
			  <div class="modal-content">
				<!-- Modal Header -->
				<div class="modal-header">
					<span class="modal-title">Event <span class="modal-title-Sub">(Jeudi, 5 avril 2018))</span></span>
					<nuxt-link to="/"><button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" class="white-text"><i class="fas fa-arrow-circle-left"></i></span>
                	</button></nuxt-link>					
            	</div>
				<!-- Modal body -->
				<div id="modalBoxContent" class="modal-body">
					<div class="flex-container-modal-MyTeam">
						<h1>Tous les "Event" du jour</h1>
						<p style="color: #000;">
							<!-- loadedEvents: {{ loadedEvents }}<br /><br /> -->
							<!-- ordered loadedEvents: {{ loadedEvents.sort((a, b) => b.date - a.date)}}<br /><br /> -->
						</p>
					</div>
					<div class="flex-container-modal-Title banner2 text-center">
						<h2>Mes équipes <span class="infoEvent"><i class="infoTesEquipes fas fa-info-circle"></i></span></h2>
					</div>
					<div class="flex-container-modal-Action">
						<table class="table tableText">
						  <tbody>
							<tr class="borderResultat">
							  <td class="tdResultat1 text-left"><a href="mesEquipesDetails.html" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Suisse</a></td>
							  <td class="tdResultat text-center"><a href="matchEncours.html" class="linkEvent">Football</br>Amical</br>05.04.2018</br>17:00</br>Ouvert</a></td>
							  <td class="tdResultat1 text-right"><a href="autresEquipesDetails.html" class="linkEvent">Brésil <img src="/images/flags/25.png" class="imgModalAgendaFlags"/></a></td>
							</tr>	
						  </tbody>
						</table>
					</div>
					<div class="flex-container-modal-Title banner text-center">
						<h2>Tous les autres "Event" <span class="infoOtherEvent"><i class="infoTesEquipes fas fa-info-circle"></i></span></h2>
					</div>
					<div class="flex-container-modal-Action">
						<table class="table tableText">
						  	<tbody>
								<tr class="borderResultat" v-for="event in loadedEvents">
									<td class="tdResultat1 text-left"><a href="autresEquipesDetails.html" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/><span :class="{ 'green-color': event.score.winner === 'HOME_TEAM', 'red-color': event.score.winner === 'AWAY_TEAM'}">{{ event.homeTeam.name }}</span></a></td>
									<td class="tdResultat text-center"><a href="matchTermine.html" class="linkEvent">Football</br>{{ event.utcDate | moment('DD-MM-YYYY') }}</br><span v-if="event.score && event.score.fullTime">{{ event.score.fullTime.homeTeam }} - {{ event.score.fullTime.awayTeam }}<br /></span>{{ event.status }}</a></td>
									<td class="tdResultat1 text-right"><a href="autresEquipesDetails.html" class="linkEvent"><span :class="{'green-color': event.score.winner === 'AWAY_TEAM', 'red-color': event.score.winner === 'HOME_TEAM'}">&nbsp;{{ event.awayTeam.name }}</span> <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></a></td>
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
	export default {
		layout: 'layoutFront',
		created () {
			this.$store.dispatch('events/loadedEvents')
		},
		data () {
			return {

			}
		},
		computed: {
			loadedEvents () {
				// return this.$store.getters['events/loadedEvents']
                return this.$store.getters['events/loadedEvents'].sort((a, b) => b.date - a.date)
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