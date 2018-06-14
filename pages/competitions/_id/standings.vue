<template>
	<div class="container-fluid">	
		<!-- The Modal OtherTeamDetail -->
		<div id="modalBox">
			<div class="modal-dialog modal-lg">
			  	<div class="modal-content" v-if="loadedCompetition">
					<!-- Modal Header -->
					<div class="modal-header">
					  	<span class="modal-title">Résultats et classements<span class="modal-title-Sub">(Tes équipes)</span></span>
					  	<!-- competition id: {{ this.competition_id }}<br /><br /> -->
					  	<!-- loadedCompetition : {{ this.loadedCompetition }}<br /><br /> -->
					  	<!-- loadedCompetitionTeams: <span v-if="loadedCompetition != ''">{{ this.loadedCompetition.teams }}</span><br /><br /> -->
					  	<!-- loadedCompetitionTeams: <span v-if="loadedCompetition != ''">{{ this.loadedCompetitionTeams }}</span><br /><br /> -->
					  	<!-- loadedCompetitionTeams: {{ this.loadedCompetition }}</span><br /><br /> -->
					  	<!-- loadedCompetitionGroups: {{ loadedCompetitionGroups }}<br /><br /> -->

                        <nuxt-link :to="'/teams/'" class="">
							<i class="fa fa-arrow-circle-left fa-2x"></i>
						</nuxt-link> 
	            	</div>
					<!-- Modal body -->
					<div id="modalBoxContent" class="modal-bodyProfil text-center">
						<div class="flex-container-modalProfil">
							<div class="columnProfil"><img :src="'/images/competitions/' + loadedCompetition.image" class="imgModalFlags"/> <span class="modal-Team-Title">{{ loadedCompetition.name }}</span> <img :src="'/images/competitions/' + loadedCompetition.image" class="imgModalFlags"/></div>
						</div>
						<div class="flex-container-modal-Niveau text-center">
							<div class="columnProfil"><span class="modal-Team-Competition">Coupe du Monde</br>Football - 2018</br>International</span></div>
						</div>
					</div>
					<div class="flex-container-modalMenuResultats">
						<a href="mesEquipesDetailsResultats.html" style="flex-grow: 1" data-toggle="tooltip" data-placement="bottom" title="Calendrier et résultats de la phase de poule"><span class="textModalMenuResultats">Phase de groupes</span></a>
						<a href="mesEquipesDetailsResultats_3.html" style="flex-grow: 1" data-toggle="tooltip" data-placement="bottom" title="Classement de la phase de poule"><span class="textModalMenuResultats">Classements</span></a>
						<a href="mesEquipesDetailsResultats_2.html" style="flex-grow: 1" data-toggle="tooltip" data-placement="bottom" title="Calendrier et résultats de la phase finale"><span class="textModalMenuResultats">Phase finale</span></a>
					</div>
					<div id="modalTitle" class="modal-body" v-if="loadedCompetition.teams" v-for="group of loadedCompetitionGroups">
						<div>
							<div class="flex-container-modal-Title banner2 text-center">
								<h2>Groupe {{ group }}</h2>
							</div>
							<div class="flex-container-modal-Action">
								<table class="table tableTextClassement">
								  	<thead>
										<tr>
											<th class="col1 thTif"></th>
											<th class="col2 thTif"></th>
											<th class="col3 thTif text-center" data-toggle="tooltip" data-placement="bottom" title="Matches joués durant la compétition">MJ</th>
											<th class="col3 thTif text-center" data-toggle="tooltip" data-placement="bottom" title="But pour / But contre">But</th>
											<th class="col3 thTif text-center" data-toggle="tooltip" data-placement="bottom" title="Nombre de points">Pts</th>
										</tr>
								  	</thead>
								  	<tbody v-for="(team, index) of loadedCompetitionTeams.filter(team => team.group === group).sort((a, b) => a.goals_scored < b.goals_scored).sort((a, b) => a.goals_scored - a.goals_conceded < b.goals_scored - b.goals_conceded).sort((a, b) => a.points < b.points)">
								  		<tr class="trResultat" :class="[ index % 2 === 0 ? '' : odd]">
											<td class="tdTif1 text-center">{{ index + 1 }}</td>
											<td class="tdTif"><a href="autresEquipesDetails.html" class="linkEvent"><img :src="'/images/teams/' + team.slug + '.png'" class="imgModalAgendaFlags"/>{{ team.name }}</a></td>
											<td class="tdTif1 text-center">{{ team.wins + team.draws + team.losses }}</td>
											<td class="tdTif1 text-center">{{ team.goals_scored }}:{{ team.goals_conceded}}</td>
											<td class="tdTif1 text-center">{{ team.points }}</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>




					<!-- Modal footer -->
					<div class="modal-footer">
					  	<nuxt-link :to="'/teams/'"><button type="button" class="btn btn-danger" data-dismiss="modal">Sortir d'ici !</button></nuxt-link>
					</div>
			  	</div><!-- /.modal-content -->
			</div><!-- /.modal-dialog -->
		</div><!-- /#modalBox -->						
	</div><!-- /.container-fluid -->
</template>

<script>
	export default {
		layout: 'layoutFront',
		created () { 
			this.$store.dispatch('competitions/loadedCompetitions')
		},
		data () {
			return {
				competition_id: this.$route.params.id,
				odd: 'odd',
			}
		},
		computed: {
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

<style scoped>
	.odd {
		background: LightSteelBlue;
	}
</style>