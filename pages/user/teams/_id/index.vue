<template>
		<div class="container-fluid">
		
			<!-- The Modal OtherTeamDetail -->
			<div id="modalBox">
				<div class="modal-dialog modal-lg">
				  <div class="modal-content">
					<!-- Modal Header -->
					<div class="modal-header">
					  <span class="modal-title">Pleins d'infos ! <span class="modal-title-Sub">(Tes équipes)</span></span>
						<a href="mesEquipes.html"><button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true" class="white-text"><i class="fas fa-arrow-circle-left"></i></span>
                    	</button></a>					
                	</div>
					<!-- Modal body -->
					<div id="modalBoxContent" class="modal-bodyOtherTeam text-center">
						<div class="flex-container-modalProfil">
							<div class="columnProfil"><img :src="'/images/teams/' + loadedTeams.slug + '.png'" class="imgModalFlags"/> <span class="modal-Team-Title">{{ loadedTeams.name }}</span> <img :src="'/images/teams/' + loadedTeams.slug + '.png'" class="imgModalFlagsRight"/></div>
						</div>
						<div class="flex-container-modal-Niveau text-center">
							<div class="columnProfil"><span class="modal-Team-Activity">{{ loadedTeams.category.name }}</span></div>
						</div>
					</div>
					<div class="flex-container-modalMenuResultats">
						<nuxt-link :to="'/competitions/' + 'world_cup_2018' + '/standings'" style="flex-grow: 1" data-toggle="tooltip" data-placement="bottom" title="Calendrier et résultats"><span class="textModalMenuResultats">Résultats/Classements</br>(En cours)</span></nuxt-link>						
						<a href="mesEquipesDetailsStatsTif.html" style="flex-grow: 1" data-toggle="tooltip" data-placement="bottom" title="Classement individuel TIF"><span class="textModalMenuResultats">Stats/Trophées TIF</br>(En cours/archives)</span></a>
					</div>
					<div id="modalTitle" class="modal-body">
						<div class="flex-container-modal-Title banner2 text-center">
							<h2>Les prochains matches</h2>
						</div>
						<div class="flex-container-modal-Action">
							<table class="table tableText">
							  <tbody>
								<tr class="borderResultatTermine">
								  <td class="tdResultat1 text-left"><a href="mesEquipesDetails.html" class="linkEvent"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> Suisse</a></td>
								  <td class="tdResultat text-center"><a href="matchTermine.html" class="linkEvent">Amical</br>27.03.2018</br>0 - 0</br>Terminé</a></td>
								  <td class="tdResultat1 text-right"><a href="autresEquipesDetails.html" class="linkEvent">Panama <img src="images/flags/163.png" class="imgModalAgendaFlags"/></a></td>
								</tr>								
								<tr class="borderResultat">
								  <td class="tdResultat1 text-left"><a href="autresEquipesDetails.html" class="linkEvent"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> Espagne</a></td>
								  <td class="tdResultat text-center"><a href="matchResultat.html" class="linkEvent">Amical</br>03.06.2018</br>1 - 1</br>En cours</a></td>
								  <td class="tdResultat1 text-right"><a href="mesEquipesDetails.html" class="linkEvent">Suisse <img src="images/flags/163.png" class="imgModalAgendaFlags"/></a></td>
								</tr>								
								<tr class="borderResultat">
								  <td class="tdResultat1 text-left"><a href="mesEquipesDetails.html" class="linkEvent"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> Suisse</a></td>
								  <td class="tdResultat text-center"><a href="matchEncours.html" class="linkEvent">Amical</br>06.06.2018</br>1 - 1</br>En cours</a></td>
								  <td class="tdResultat1 text-right"><a href="autresEquipesDetails.html" class="linkEvent">Japon <img src="images/flags/163.png" class="imgModalAgendaFlags"/></a></td>
								</tr>
								<tr class="borderResultat">
								  <td class="tdResultat1 text-left"><a href="autresEquipesDetails.html" class="linkEvent"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</a></td>
								  <td class="tdResultat text-center"><a href="matchAgenda.html" class="linkEvent">CM</br>17.06.2018</br>20:00</br>Agenda</a></td>
								  <td class="tdResultat1 text-right"><a href="mesEquipesDetails.html" class="linkEvent">Suisse <img src="images/flags/163.png" class="imgModalAgendaFlags"/></a></td>
								</tr>
								<tr class="borderResultat">
								  <td class="tdResultat1 text-left"><a href="autresEquipesDetails.html" class="linkEvent"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> Serbie</a></td>
								  <td class="tdResultat text-center"><a href="matchAgenda.html" class="linkEvent">CM</br>22.06.2018</br>20:00</br>Agenda</a></td>
								  <td class="tdResultat1 text-right"><a href="mesEquipesDetails.html" class="linkEvent">Suisse <img src="images/flags/163.png" class="imgModalAgendaFlags"/></a></td>
								</tr>
							  </tbody>
							</table>
						</div>
					</div>
					<div id="modalTitle" class="modal-body">
						<div class="flex-container-modal-Title banner2 text-center">
							<h2>Classement "TIF"</br> Coupe du Monde - 2018 - International</h2>
						</div>
						<div class="flex-container-modal-Action">
							<table class="table tableTextClassement">
							  <thead>
								<tr>
								  <th class="col1 thTif"></th>
								  <th class="col2 thTif"></th>
								  <th class="col4 thTif text-center" data-toggle="tooltip" data-placement="bottom" title="Matches joués durant la compétition">MJ</th>
								  <th class="col4 thTif text-center" data-toggle="tooltip" data-placement="bottom" title="Moyenne fan/match ayant participé à la compétition">MFans</th>
								  <th class="col4 thTif text-center" data-toggle="tooltip" data-placement="bottom" title="Total fan ayant participé à la compétition">TFans</th>
								  <th class="col4 thTif text-center" data-toggle="tooltip" data-placement="bottom" title="Moyenne PF/match remporté par les fans durant la compétition">MPF</th>
								  <th class="col4 thTif text-center" data-toggle="tooltip" data-placement="bottom" title="Total PF remporté par les fans durant la compétition">TPF</th>
								</tr>
							  </thead>
							  <tbody>
								<tr class="trResultat1">
								  <td class="tdTif1 text-center">1</td>
								  <td class="tdTif"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> Panama</td>
								  <td class="tdTif1 text-center">0</td>
								  <td class="tdTif1 text-center">0</td>
								  <td class="tdTif1 text-center">0</td>
								  <td class="tdTif1 text-center">0</td>
								  <td class="tdTif1 text-center">0</td>
								</tr>
								<tr class="trResultat1">
								  <td class="tdTif1 text-center">2</td>
								  <td class="tdTif"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> France</td>
								  <td class="tdTif1 text-center">0</td>
								  <td class="tdTif1 text-center">0</td>
								  <td class="tdTif1 text-center">0</td>
								  <td class="tdTif1 text-center">0</td>
								  <td class="tdTif1 text-center">0</td>
								</tr>
								<tr class="trResultat1">
								  <td class="tdTif1 text-center">3</td>
								  <td class="tdTif"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> Suisse</td>
								  <td class="tdTif1 text-center">0</td>
								  <td class="tdTif1 text-center">0</td>
								  <td class="tdTif1 text-center">0</td>
								  <td class="tdTif1 text-center">0</td>
								  <td class="tdTif1 text-center">0</td>
								</tr>
								<tr class="trResultat1">
								  <td class="tdTif1 text-center">4</td>
								  <td class="tdTif"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> Belgique</td>
								  <td class="tdTif1 text-center">0</td>
								  <td class="tdTif1 text-center">0</td>
								  <td class="tdTif1 text-center">0</td>
								  <td class="tdTif1 text-center">0</td>
								  <td class="tdTif1 text-center">0</td>
								</tr>
								<tr class="trResultat1">
								  <td class="tdTif1 text-center">5</td>
								  <td class="tdTif"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> Russie</td>
								  <td class="tdTif1 text-center">0</td>
								  <td class="tdTif1 text-center">0</td>
								  <td class="tdTif1 text-center">0</td>
								  <td class="tdTif1 text-center">0</td>
								  <td class="tdTif1 text-center">0</td>
								</tr>
							  </tbody>
							</table>
						</div>	
					</div>
					<div id="modalTitle" class="modal-body">
						<div class="flex-container-modal-Title banner2 text-center">
							<h2>Statistiques "TIF"</br> Coupe du Monde - 2018 - International <span class="modal-title-Sub">(classements provisoires)</span></h2>
							
						</div>
						<div class="flex-container-modal-Action">
							<div class="flex-container-modal-Niveau">
								<div class="columnClassementTexte">
									Moyenne de PF / match
								</div>
								<div class="columnClassementNumber2">
									0.00
								</div>
								<div class="columnClassement2">
									1er
								</div>
							</div>
							<div class="flex-container-modal-Niveau">
								<div class="columnClassementTexte">
									Total de PF durant la compétition
								</div>
								<div class="columnClassementNumber2">
									0.00
								</div>
								<div class="columnClassement2">
									1er
								</div>
							</div>
							<div class="flex-container-modal-Niveau">
								<div class="columnClassementTexte">
									Nombre de fans
								</div>
								<div class="columnClassementNumber2">
									1
								</div>
								<div class="columnClassement2">
									1er
								</div>
							</div>
							<div class="flex-container-modal-Niveau">
								<div class="columnClassementTexte">
									Moyenne de fans par match
								</div>
								<div class="columnClassementNumber2">
									0
								</div>
								<div class="columnClassement2">
									1er
								</div>
							</div>
							<div class="flex-container-modal-Niveau">
								<div class="columnClassementTexte">
									Total fans durant la compétition
								</div>
								<div class="columnClassementNumber2">
									0.00
								</div>
								<div class="columnClassement2">
									1er
								</div>
							</div>
							<div class="flex-container-modal-Niveau">
								<div class="columnClassementTexte">
									Nb d'actions "Event" réalisées
								</div>
								<div class="columnClassementNumber2">
									0.00
								</div>
								<div class="columnClassement2">
									1er
								</div>
							</div>
							<div class="flex-container-modal-Niveau">
								<div class="columnClassementTexte">
									Nb d'actions "Collectives" réalisées
								</div>
								<div class="columnClassementNumber2">
									0.00
								</div>
								<div class="columnClassement2">
									1er
								</div>
							</div>
						</div>	
					</div>
					<!-- Modal footer -->
					<div class="modal-footer">
					  <a href="resultat.html"><button type="button" class="btn btn-danger" data-dismiss="modal">Sortir d'ici !</button></a>
					</div>
				  </div>
				</div>
			</div>
			<!-- End Modal OtherTeamDetail -->
						
		</div>
</template>

<script>
	export default {
		layout: 'layoutFront',
		created () { 
			this.$store.dispatch('teams/loadedTeams')
			this.$store.dispatch('competitions/loadedCompetitions')
		},
		data () {
			return {
				team_id: this.$route.params.id,
				odd: 'odd',
				competition_id: this.$route.params.id,
			}
		},
		computed: {
			loadedTeams () {
				return this.$store.getters['teams/loadedTeams'].find(team => team.slug === this.team_id)
			},
			loadedCompetition () {
				return this.$store.getters['competitions/loadedCompetitions'].find(competition => competition.slug === this.competition_id)
			},
			loadedCompetitionGroups () {
				console.log('entering loadedCompetitionGroups')
				let competition = this.$store.getters['competitions/loadedCompetitions'].find(competition => competition.slug === this.competition_id)
				console.log(competition)
				const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
				let groupsArray = []
				for (let i = 0; i < competition.groups_number; i++) {
					if (competition.groups_format === 'letters') {
						groupsArray.push(alphabet[i])
					} else  {
						groupsArray.push(i + 1)
					}
				}
				return groupsArray
				// return [
				// 	{
				// 		'name': 'A',
				// 		'slug': 'a'
				// 	},
				// 	{
				// 		'name': 'E',
				// 		'slug': 'e'
				// 	}
				// ]
			},
			loadedCompetitionTeams () {
				let competition = this.$store.getters['competitions/loadedCompetitions'].find(competition => competition.slug === this.competition_id)
				console.log(competition.teams)
				let teamsArray = []
				for (let team in competition.teams) {
					console.log(competition.teams[team])
					teamsArray.push(competition.teams[team])
				}
				console.log(teamsArray)

				// let teams = []
				return teamsArray
				
				return [
					{
						'name': 'Brazil',
						'slug': 'brazil',
						'wins': 1,
						'points': 6,
						'group': 'E',
						'draws': 0,
						'losses': 0,
						'goals_scored': 4,
						'goals_conceded': 1,
					},
					{
						'name': 'Switzerland',
						'slug': 'switzerland',
						'wins': 0,
						'points': 0,
						'group': 'E',
						'draws': 0,
						'losses': 1,
						'goals_scored': 1,
						'goals_conceded': 4,
					},
					{
						'name': 'Costa Rica',
						'slug': 'costa_rica',
						'wins': 1,
						'points': 3,
						'group': 'E',
						'draws': 0,
						'losses': 0,
						'goals_scored': 2,
						'goals_conceded': 0,
					},
					{
						'name': 'Serbia',
						'slug': 'serbia',
						'wins': 0,
						'points': 0,
						'group': 'E',
						'draws': 0,
						'losses': 1,
						'goals_scored': 0,
						'goals_conceded': 2,
					},
					{
						'name': 'Russia',
						'slug': 'russia',
						'wins': 1,
						'points': 3,
						'group': 'A',
						'draws': 0,
						'losses': 0,
						'goals_scored': 3,
						'goals_conceded': 0,
					},
					{
						'name': 'Saudi Arabia',
						'slug': 'saudi_arabia',
						'wins': 0,
						'points': 0,
						'group': 'A',
						'draws': 0,
						'losses': 1,
						'goals_scored': 0,
						'goals_conceded': 3,
					},
					{
						'name': 'Egypt',
						'slug': 'egypt',
						'wins': 0,
						'points': 1,
						'group': 'A',
						'draws': 1,
						'losses': 0,
						'goals_scored': 1,
						'goals_conceded': 1,
					},
					{
						'name': 'Uruguay',
						'slug': 'uruguay',
						'wins': 0,
						'points': 1,
						'group': 'A',
						'draws': 1,
						'losses': 0,
						'goals_scored': 1,
						'goals_conceded': 1,
					},
				]
				
			}
		}
	}
</script>

<style>

</style>
