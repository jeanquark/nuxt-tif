<template>
	<div class="container-fluid">
	
		<!-- The Modal OtherTeamDetail -->
		<div id="modalBox">
			<div class="modal-dialog modal-lg">
			  <div class="modal-content-resultats">
				<!-- Modal Header -->
				<div class="modal-header">
				  <span class="modal-title">Pleins d'infos ! <span class="modal-title-Sub">(autres équipes)</span></span>
					<nuxt-link to="/">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    		<span aria-hidden="true" class="white-text"><i class="fas fa-arrow-circle-left"></i></span>
                		</button>
                	</nuxt-link>					
            	</div>
				<!-- Modal body -->
				<div id="modalBoxContent" class="modal-bodyOtherTeam text-center">
					<div class="flex-container-modalProfil">
						<div class="columnProfil"><img src="images/flags/25.png" class="imgModalFlags"/> <span class="modal-Team-Title">Brésil</span> <img src="images/flags/25.png" class="imgModalFlagsRight"/></div>
					</div>
					<div class="flex-container-modal-Niveau text-center">
						<div class="columnProfil"><span class="modal-Team-Activity">Football</span></div>
					</div>
				</div>
				<div id="modalTitle" class="modal-body">
					<div class="flex-container-modal-Title banner text-center">
						<h2>Info</h2>
					</div>
					<div class="panel">
						<div class="flex-container-modal-Action">
							<table class="table tableText">
							  <tbody>
								<tr class="borderInfo">
								  <td class="tdInfo text-left">Nom de l'équipe : Brésil</td>
								  <td class="tdInfo text-left">Entraîneur : Prénom Nom</td>
								</tr>								
								<tr class="borderInfo">
								  <td class="tdInfo text-left">Président : Prénom Nom</td>
								  <td class="tdInfo text-left">Fondation : 1970</td>
								</tr>								
								<tr class="borderInfo">
								  <td class="tdInfo text-left">Site internet : www.psg.fr</td>
								  <td class="tdInfo text-left">Couleur : bleu et rouge</td>
								</tr>
								<tr class="borderInfo">
								  <td class="tdInfo text-left">Stade : Parc des Princes</td>
								  <td class="tdInfo text-left">Capacité : 123456 places</td>
								</tr>
							  </tbody>
							</table>
						</div>
					</div>
				</div>


				<div id="modalTitle" class="modal-body">
					<div class="flex-container-modal-Title banner text-center">
						<h2>Calendrier et Résultats</h2>
					</div>
					<div class="">
						<div class="flex-container-modal-Action">
							<h6 class="tdTitleMatchEnd">Match terminé</h6>
							<table class="table tableText">
							  <tbody>
								<tr class="borderResultat">
								  <td class="tdScore text-left"><a href="matchTermine.html" class="linkEvent">27.03.2018</br>20:00</a></td>
								  <td class="tdScore1 text-center"><a href="mesEquipesDetails.html" class="linkEvent"><img src="images/flags/25.png" class="imgModalAgendaFlags"/> Brésil</a></td>
								  <td class="tdScore2 text-center">2 - 2</td>
								  <td class="tdScore1 text-center"><a href="autresEquipesDetails.html" class="linkEvent">Panama <img src="images/flags/163.png" class="imgModalAgendaFlags"/></a></td>
								  <td class="tdScore text-right"><a href="matchTermine.html" class="linkEvent">Match amical</a></td>
								</tr>								
								<tr class="borderResultat">
								  <td class="tdScore text-left"><a href="matchTermine.html" class="linkEvent">27.03.2018</br>20:00</a></td>
								  <td class="tdScore1 text-center"><a href="mesEquipesDetails.html" class="linkEvent"><img src="images/flags/25.png" class="imgModalAgendaFlags"/> Brésil</a></td>
								  <td class="tdScore2 text-center">2 - 2</td>
								  <td class="tdScore1 text-center"><a href="autresEquipesDetails.html" class="linkEvent">Panama <img src="images/flags/163.png" class="imgModalAgendaFlags"/></a></td>
								  <td class="tdScore text-right"><a href="matchTermine.html" class="linkEvent">Match amical</br>27.03.2018</a></td>
								</tr>								
							  </tbody>
							</table>
						</div>
						<div class="flex-container-modal-Action">
							<h6 class="tdTitleMatchEnd">Match en cours</h6>
							<table class="table tableText">
							  <tbody>
								<tr class="borderResultat">
								  <td class="tdScore text-left"><a href="matchTermine.html" class="linkEvent">27.03.2018</br>20:00</a></td>
								  <td class="tdScore1 text-center"><a href="mesEquipesDetails.html" class="linkEvent"><img src="images/flags/25.png" class="imgModalAgendaFlags"/> Brésil</a></td>
								  <td class="tdScore2 text-center">2 - 2</td>
								  <td class="tdScore1 text-center"><a href="autresEquipesDetails.html" class="linkEvent">Panama <img src="images/flags/163.png" class="imgModalAgendaFlags"/></a></td>
								  <td class="tdScore text-right"><a href="matchTermine.html" class="linkEvent">Match amical</a></td>
								</tr>								
								<tr class="borderResultat">
								  <td class="tdScore text-left"><a href="matchTermine.html" class="linkEvent">27.03.2018</br>20:00</a></td>
								  <td class="tdScore1 text-center"><a href="mesEquipesDetails.html" class="linkEvent"><img src="images/flags/25.png" class="imgModalAgendaFlags"/> Brésil</a></td>
								  <td class="tdScore2 text-center">2 - 2</td>
								  <td class="tdScore1 text-center"><a href="autresEquipesDetails.html" class="linkEvent">Panama <img src="images/flags/163.png" class="imgModalAgendaFlags"/></a></td>
								  <td class="tdScore text-right"><a href="matchTermine.html" class="linkEvent">Match amical</br>27.03.2018</a></td>
								</tr>								
							  </tbody>
							</table>
						</div>
						<div class="flex-container-modal-Action">
							<h6 class="tdTitleMatchEnd">Match à venir</h6>
							<table class="table tableText">
							  <tbody>
								<tr class="borderResultat">
								  <td class="tdScore text-left"><a href="matchTermine.html" class="linkEvent">27.03.2018</br>20:00</a></td>
								  <td class="tdScore1 text-center"><a href="mesEquipesDetails.html" class="linkEvent"><img src="images/flags/25.png" class="imgModalAgendaFlags"/> Brésil</a></td>
								  <td class="tdScore2 text-center">2 - 2</td>
								  <td class="tdScore1 text-center"><a href="autresEquipesDetails.html" class="linkEvent">Panama <img src="images/flags/163.png" class="imgModalAgendaFlags"/></a></td>
								  <td class="tdScore text-right"><a href="matchTermine.html" class="linkEvent">Match amical</a></td>
								</tr>								
								<tr class="borderResultat">
								  <td class="tdScore text-left"><a href="matchTermine.html" class="linkEvent">27.03.2018</br>20:00</a></td>
								  <td class="tdScore1 text-center"><a href="mesEquipesDetails.html" class="linkEvent"><img src="images/flags/25.png" class="imgModalAgendaFlags"/> Brésil</a></td>
								  <td class="tdScore2 text-center">2 - 2</td>
								  <td class="tdScore1 text-center"><a href="autresEquipesDetails.html" class="linkEvent">Panama <img src="images/flags/163.png" class="imgModalAgendaFlags"/></a></td>
								  <td class="tdScore text-right"><a href="matchTermine.html" class="linkEvent">Match amical</br>27.03.2018</a></td>
								</tr>								
							  </tbody>
							</table>
						</div>
					</div>
				</div>


				<div id="modalTitle" class="modal-body">
					<div class="flex-container-modal-Title banner text-center" style="cursor: pointer;" @click="showStanding = !showStanding">
						<h2>Classement &nbsp;&nbsp;<i :class="[showStanding ? 'fas fa-chevron-up' : 'fas fa-chevron-down']"></i></h2>
					</div>
				</div>
				<vue-slide-up-down :active="showStanding" :duration="1500">
				    <team-standing></team-standing>
				</vue-slide-up-down>


				<div id="modalTitle" class="modal-body">
					<div class="flex-container-modal-Title banner text-center" style="cursor: pointer;" @click="showStatistics = !showStatistics">
						<h2>Statistiques &nbsp;&nbsp;<i :class="[showStatistics ? 'fas fa-chevron-up' : 'fas fa-chevron-down']"></i></h2>
					</div>
				</div>
				<vue-slide-up-down :active="showStatistics" :duration="2000">
				    <team-statistics></team-statistics>
				</vue-slide-up-down>


				<div id="modalTitle" class="modal-body">
					<div class="flex-container-modal-Title banner text-center" style="cursor: pointer;" @click="showAwards = !showAwards">
						<h2>Palmarès &nbsp;&nbsp;<i :class="[showAwards ? 'fas fa-chevron-up' : 'fas fa-chevron-down']"></i></h2>
					</div>
				</div>
				<vue-slide-up-down :active="showAwards">
				    <team-awards></team-awards>
				</vue-slide-up-down>


				<div id="modalTitle" class="modal-body">
					<div class="flex-container-modal-Title banner2 text-center" style="cursor: pointer;" @click="showStandingTIF = !showStandingTIF">
						<h2>Classement "TIF" &nbsp;&nbsp;<i :class="[showStandingTIF ? 'fas fa-chevron-up' : 'fas fa-chevron-down']"></i></h2></h2>
					</div>
				</div>
				<vue-slide-up-down :active="showStandingTIF">
				    <team-standing-tif></team-standing-tif>
				</vue-slide-up-down>


				<div id="modalTitle" class="modal-body">
					<div class="flex-container-modal-Title banner2 text-center" style="cursor: pointer;" @click="showStatisticsTIF = !showStatisticsTIF">
						<h2>Statistiques "TIF" &nbsp;&nbsp;<i :class="[showStatisticsTIF ? 'fas fa-chevron-up' : 'fas fa-chevron-down']"></i></h2></h2>
					</div>
				</div>
				<vue-slide-up-down :active="showStatisticsTIF">
				    <team-statistics-tif></team-statistics-tif>
				</vue-slide-up-down>


				<div id="modalTitle" class="modal-body">
					<div class="flex-container-modal-Title banner2 text-center" style="cursor: pointer;" @click="showAwardsTIF = !showAwardsTIF">
						<h2>Palmarès "TIF" &nbsp;&nbsp;<i :class="[showAwardsTIF ? 'fas fa-chevron-up' : 'fas fa-chevron-down']"></i></h2>
					</div>
				</div>
				<vue-slide-up-down :active="showAwardsTIF">
				    <team-awards-tif></team-awards-tif>
				</vue-slide-up-down>

				<!-- Modal footer -->
				<div class="modal-footer">
				  <a href="competitionsEquipes.html"><button type="button" class="btn btn-danger" data-dismiss="modal">Sortir d'ici !</button></a>
				  <a href="mesEquipes.html"><button type="button" class="btn btn-warning" data-dismiss="modal">Devenir fan - Coût 3 <i class="fas fa-certificate"></i></button></a>
				</div>
			  </div>
			</div>
		</div>
		<!-- End Modal OtherTeamDetail -->
	</div>
</template>

<script>
	import VueSlideUpDown from 'vue-slide-up-down'
	import teamStanding from '~/components/team/standing.vue'
	import teamStatistics from '~/components/team/statistics.vue'
	import teamAwards from '~/components/team/awards.vue'
	import teamStandingTif from '~/components/team/standingTIF.vue'
	import teamStatisticsTif from '~/components/team/statisticsTIF.vue'
	import teamAwardsTif from '~/components/team/awardsTIF.vue'
	export default {
		layout: 'layoutFront',
		components: {
			VueSlideUpDown,
			teamStanding,
			teamStatistics,
			teamAwards,
			teamStandingTif,
			teamStatisticsTif,
			teamAwardsTif
		},
		created () { 
			// this.$store.dispatch('teams/loadedTeams')
			// this.$store.dispatch('competitions/loadedCompetitions')
			
   //          if (Object.keys(this.$store.getters['competitions/loadedCompetitions']).length === 0) {
   //              this.$store.dispatch('competitions/loadedCompetitions')
   //          }
   //          if (Object.keys(this.$store.getters['teams/loadedTeams']).length === 0) {
   //              this.$store.dispatch('teams/loadedTeams')
   //          }
   //          if (Object.keys(this.$store.getters['users/loadedUserTeams']).length === 0) {
   //              this.$store.dispatch('users/loadedUserTeams')
   //          }
   //          for (let team of this.loadedUserTeams) {
   //              this.selectedTeams.push(team)
   //          }
        },
		data () {
			return {
				// team_id: this.$route.params.id,
                showStanding: false,
                showStatistics: false,
                showAwards: false,
                showStandingTIF: false,
                showStatisticsTIF: false,
                showAwardsTIF: false,
                active: false
			}
		},
		computed: {
           	loadedUserTeams () {
           	},
			loadedTeams () {
				return this.$store.getters['teams/loadedTeams'].find(team => team.slug === this.team_id)
			},
            loadedTeamsByCompetition () {
                // const teams = []
                // const competition_id = this.competition_id
                // this.$store.getters['teams/loadedTeams'].forEach(function (team) {
                //     if (team.competitions) {
                //         if (team['competitions'][competition_id]) {
                //             teams.push(team)
                //         }
                //     }
                // })
                // return teams
            },
			loadedCompetition () {
				// return this.$store.getters['competitions/loadedCompetitions'].find(competition => competition.slug === this.competition_id)
			},
			loadedCompetitionGroups () {

			},
			loadedCompetitionTeams () {

			}
		},
        methods: {
            selectTeam (team) {

            }
        }
	}
</script>

<style>
	/*.fade-enter-active, .fade-leave-active {
	  transition: opacity 2.5s;
	}
	.fade-enter, .fade-leave-to {
	  opacity: 0;
	}*/
</style>