<template>
	<div class="container-fluid">
	
		<!-- The Modal OtherTeamDetail -->
		<div id="modalBox">
			<div class="modal-dialog modal-lg">
			  <div class="modal-content-resultats">
				<!-- Modal Header -->
				<div class="modal-header">
				  <span class="modal-title">Pleins d'infos ! <span class="modal-title-Sub">(autres équipes)</span></span>
					<a href="competitionsEquipes.html">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    	<span aria-hidden="true" class="white-text"><i class="fas fa-arrow-circle-left"></i></span>
                		</button>
                	</a>					
            	</div>
				<!-- Modal body -->
				<div id="modalBoxContent" class="modal-bodyOtherTeam text-center">
					<div class="flex-container-modalProfil">
						<div class="columnProfil"><img :src="'/images/teams/' + loadedTeams.slug + '.png'" class="imgModalFlags"/> <span class="modal-Team-Title" @>{{ loadedTeams.name }} <i class="fa fa-star"></i></span> <img :src="'/images/teams/' + loadedTeams.slug + '.png'" class="imgModalFlagsRight"/></div>
					</div>
					<div class="flex-container-modal-Niveau text-center">
						<div class="columnProfil"><span class="modal-Team-Activity">{{ loadedTeams.category.name }}</span></div>
					</div>
				</div>
				<div id="modalTitle" class="modal-body">
					<div class="flex-container-modal-Title banner text-center accordion">
						<h2>Info</h2>
					</div>
					<div class="panel">
						<div class="flex-container-modal-Action">
							<table class="table tableText">
							  <tbody>
								<tr class="borderResultatTermine">
								  <td class="tdInfo text-left">Nom de l'équipe :</td>
								  <td class="tdInfo1 text-left">Brésil</td>
								  <td class="tdInfo text-left">Entraîneur :</td>
								  <td class="tdInfo1 text-left">Prénom nom</td>
								</tr>								
								<tr class="borderResultat">
								  <td class="tdInfo text-left">Fondation :</td>
								  <td class="tdInfo1 text-left">Prénom nom</td>
								  <td class="tdInfo text-left">Fondation :</td>
								  <td class="tdInfo1 text-left">1970</td>
								</tr>								
								<tr class="borderResultat">
								  <td class="tdInfo text-left">Site internet :</td>
								  <td class="tdInfo1 text-left">www.psg.fr</td>
								  <td class="tdInfo text-left">Couleur :</td>
								  <td class="tdInfo1 text-left">Bleu et rouge</td>
								</tr>
								<tr class="borderResultat">
								  <td class="tdInfo text-left">Stade :</td>
								  <td class="tdInfo1 text-left">Parc des Princes</td>
								  <td class="tdInfo text-left">Capacité :</td>
								  <td class="tdInfo1 text-left">123456 places</td>
								</tr>
							  </tbody>
							</table>
						</div>
					</div>
				</div>
				<div id="modalTitle" class="modal-body">
					<div class="flex-container-modal-Title banner text-center accordion">
						<h2>Palmarès</h2>
					</div>
					<div class="panel">
						<div class="palmares">
							<div class="palmaresBox">
								<div class="detailsPalmaresBox">
									<span class="titrecompet">Titre de la compétition</span>
									<span class="nbcompet">6</span>
								</div>
								<div class="anneePalmares">
									1920. 1928, 1965, 1974, 2000, 2012
								</div>
							</div>
						</div>
						<div class="palmares">
							<div class="palmaresBox">
								<div class="detailsPalmaresBox">
									<span class="titrecompet">Titre de la compétition</span>
									<span class="nbcompet">6</span>
								</div>
								<div class="anneePalmares">
									1920. 1928, 1965, 1974, 2000, 2012
								</div>
							</div>
						</div>
						<div class="palmares">
							<div class="palmaresBox">
								<div class="detailsPalmaresBox">
									<span class="titrecompet">Titre de la compétition</span>
									<span class="nbcompet">6</span>
								</div>
								<div class="anneePalmares">
									1920. 1928, 1965, 1974, 2000, 2012
								</div>
							</div>
						</div>
						<div class="palmares">
							<div class="palmaresBox">
								<div class="detailsPalmaresBox">
									<span class="titrecompet">Titre de la compétition</span>
									<span class="nbcompet">6</span>
								</div>
								<div class="anneePalmares">
									1920. 1928, 1965, 1974, 2000, 2012
								</div>
							</div>
						</div>
						<div class="palmares">
							<div class="palmaresBox">
								<div class="detailsPalmaresBox">
									<span class="titrecompet">Titre de la compétition</span>
									<span class="nbcompet">6</span>
								</div>
								<div class="anneePalmares">
									1920. 1928, 1965, 1974, 2000, 2012
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id="modalTitle" class="modal-body">
					<div class="flex-container-modal-Title banner text-center accordion">
						<h2>Calendrier et Résultats</h2>
					</div>
					<div class="panel">
						<div class="flex-container-modal-Action">
							<h6 class="tdTitleMatchEnd">Match terminé</h6>
							<table class="table tableText">
							  <tbody>
								<tr class="borderResultat">
								  <td class="tdScore text-left"><a href="matchTermine.html" class="linkEvent">27.03.2018</br>20:00</a></td>
								  <td class="tdScore1 text-center"><a href="mesEquipesDetails.html" class="linkEvent"><img src="images/flags/25.png" class="imgModalAgendaFlags"/> Brésil</a></td>
								  <td class="tdScore2 text-center">2 - 2</td>
								  <td class="tdScore1 text-center"><a href="autresEquipesDetails.html" class="linkEvent">Panama <img src="images/flags/163.png" class="imgModalAgendaFlags"/></td>
								  <td class="tdScore text-right"><a href="matchTermine.html" class="linkEvent">Match amical</a></td>
								</tr>								
								<tr class="borderResultat">
								  <td class="tdScore text-left"><a href="matchTermine.html" class="linkEvent">27.03.2018</br>20:00</a></td>
								  <td class="tdScore1 text-center"><a href="mesEquipesDetails.html" class="linkEvent"><img src="images/flags/25.png" class="imgModalAgendaFlags"/> Brésil</a></td>
								  <td class="tdScore2 text-center">2 - 2</td>
								  <td class="tdScore1 text-center"><a href="autresEquipesDetails.html" class="linkEvent">Panama <img src="images/flags/163.png" class="imgModalAgendaFlags"/></td>
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
								  <td class="tdScore1 text-center"><a href="autresEquipesDetails.html" class="linkEvent">Panama <img src="images/flags/163.png" class="imgModalAgendaFlags"/></td>
								  <td class="tdScore text-right"><a href="matchTermine.html" class="linkEvent">Match amical</a></td>
								</tr>								
								<tr class="borderResultat">
								  <td class="tdScore text-left"><a href="matchTermine.html" class="linkEvent">27.03.2018</br>20:00</a></td>
								  <td class="tdScore1 text-center"><a href="mesEquipesDetails.html" class="linkEvent"><img src="images/flags/25.png" class="imgModalAgendaFlags"/> Brésil</a></td>
								  <td class="tdScore2 text-center">2 - 2</td>
								  <td class="tdScore1 text-center"><a href="autresEquipesDetails.html" class="linkEvent">Panama <img src="images/flags/163.png" class="imgModalAgendaFlags"/></td>
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
								  <td class="tdScore1 text-center"><a href="autresEquipesDetails.html" class="linkEvent">Panama <img src="images/flags/163.png" class="imgModalAgendaFlags"/></td>
								  <td class="tdScore text-right"><a href="matchTermine.html" class="linkEvent">Match amical</a></td>
								</tr>								
								<tr class="borderResultat">
								  <td class="tdScore text-left"><a href="matchTermine.html" class="linkEvent">27.03.2018</br>20:00</a></td>
								  <td class="tdScore1 text-center"><a href="mesEquipesDetails.html" class="linkEvent"><img src="images/flags/25.png" class="imgModalAgendaFlags"/> Brésil</a></td>
								  <td class="tdScore2 text-center">2 - 2</td>
								  <td class="tdScore1 text-center"><a href="autresEquipesDetails.html" class="linkEvent">Panama <img src="images/flags/163.png" class="imgModalAgendaFlags"/></td>
								  <td class="tdScore text-right"><a href="matchTermine.html" class="linkEvent">Match amical</br>27.03.2018</a></td>
								</tr>								
							  </tbody>
							</table>
						</div>
					</div>
				</div>
				<div id="modalTitle" class="modal-body">
					<div class="flex-container-modal-Title banner text-center">
						<h2>Classement - Phase de groupes - Groupe A</br>Coupe du Monde - 2018 - International</h2>
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
						  <tbody>
							<tr class="trResultat">
							  <td class="tdTif1 text-center">1</td>
							  <td class="tdTif"><a href="autresEquipesDetails.html" class="linkEvent"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</a></td>
							  <td class="tdTif1 text-center">0</td>
							  <td class="tdTif1 text-center">0:0</td>
							  <td class="tdTif1 text-center">0</td>
							</tr>
							<tr class="trResultat">
							  <td class="tdTif1 text-center">2</td>
							  <td class="tdTif"><a href="autresEquipesDetails.html" class="linkEvent"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> Costa Rica</a></td>
							  <td class="tdTif1 text-center">0</td>
							  <td class="tdTif1 text-center">0:0</td>
							  <td class="tdTif1 text-center">0</td>
							</tr>
							<tr class="trResultat">
							  <td class="tdTif1 text-center">3</td>
							  <td class="tdTif"><a href="autresEquipesDetails.html" class="linkEvent"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> Serbie</a></td>
							  <td class="tdTif1 text-center">0</td>
							  <td class="tdTif1 text-center">0:0</td>
							  <td class="tdTif1 text-center">0</td>
							</tr>
							<tr class="trResultat">
							  <td class="tdTif1 text-center">4</td>
							  <td class="tdTif"><a href="autresEquipesDetails.html" class="linkEvent"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> Suisse</a></td>
							  <td class="tdTif1 text-center">0</td>
							  <td class="tdTif1 text-center">0:0</td>
							  <td class="tdTif1 text-center">0</td>
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
							  <td class="tdTif1 text-center">12</td>
							  <td class="tdTif"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> Panama</td>
							  <td class="tdTif1 text-center">0</td>
							  <td class="tdTif1 text-center">0</td>
							  <td class="tdTif1 text-center">0</td>
							  <td class="tdTif1 text-center">0</td>
							  <td class="tdTif1 text-center">0</td>
							</tr>
							<tr class="trResultat1">
							  <td class="tdTif1 text-center">13</td>
							  <td class="tdTif"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> France</td>
							  <td class="tdTif1 text-center">0</td>
							  <td class="tdTif1 text-center">0</td>
							  <td class="tdTif1 text-center">0</td>
							  <td class="tdTif1 text-center">0</td>
							  <td class="tdTif1 text-center">0</td>
							</tr>
							<tr class="trResultat1">
							  <td class="tdTif1 text-center">14</td>
							  <td class="tdTif"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</td>
							  <td class="tdTif1 text-center">0</td>
							  <td class="tdTif1 text-center">0</td>
							  <td class="tdTif1 text-center">0</td>
							  <td class="tdTif1 text-center">0</td>
							  <td class="tdTif1 text-center">0</td>
							</tr>
							<tr class="trResultat1">
							  <td class="tdTif1 text-center">15</td>
							  <td class="tdTif"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> Belgique</td>
							  <td class="tdTif1 text-center">0</td>
							  <td class="tdTif1 text-center">0</td>
							  <td class="tdTif1 text-center">0</td>
							  <td class="tdTif1 text-center">0</td>
							  <td class="tdTif1 text-center">0</td>
							</tr>
							<tr class="trResultat1">
							  <td class="tdTif1 text-center">16</td>
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
                    <button class="btn btn-warning" @click="selectTeam">Devenir fan - Coût 3 <i class="fas fa-certificate"></i></button>
                    <nuxt-link to="/user/teams">
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Fermer</button>
                    </nuxt-link>
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
			
            if (Object.keys(this.$store.getters['competitions/loadedCompetitions']).length === 0) {
                this.$store.dispatch('competitions/loadedCompetitions')
            }
            if (Object.keys(this.$store.getters['teams/loadedTeams']).length === 0) {
                this.$store.dispatch('teams/loadedTeams')
            }
            if (Object.keys(this.$store.getters['users/loadedUserTeams']).length === 0) {
                this.$store.dispatch('users/loadedUserTeams')
            }
            for (let team of this.loadedUserTeams) {
                this.selectedTeams.push(team)
            }
        },
		data () {
			return {
				team_id: this.$route.params.id,
				odd: 'odd',
				competition_id: this.$route.params.id,
                isActive: false,
                selectedTeams: []
			}
		},
		computed: {
           loadedUserTeams () {
                // return this.selectedTeams.push({id: '-LBVgvOsCUALzowK576H', name: 'Argentina'}, {id: '-LBVgvOxY6A_ylDQBOmp', name: 'Australia'}, {id: '-LBVgvR__QJEcYxQ7a7g'})
                // return this.$store.getters['users/loadedUserTeams']
                // const abc = [{id: '-LBVgvOsCUALzowK576H'}, {id: '-LBVgvOxY6A_ylDQBOmp'}, {id: '-LBVgvR__QJEcYxQ7a7g'}]
                // return abc
                // const userTeams = []
                // 1) First retrieve all userteam ids
                const teamIds = this.$store.getters['users/loadedUserTeams']
                // return teamIds
                console.log(teamIds)
                // return teamIds

                // 2) Then get complete team data
                const teams = []
                teamIds.forEach((teamId) => {
                    console.log(teamId)
                    let abc = this.loadedTeamsByCompetition.find(team => team.id === teamId)
                    teams.push(abc)
                })
                console.log(teams)
                // for (let teamId in teamIds) {
                //     console.log(teamId)
                //     if (teamId.hasOwnProperty()) {
                //         console.log('abc')
                //         console.log(lunch[key]); // value (ex. turkey)
                //     }
                // }
                // console.log(teams)
                // return
                // console.log(teamIds)
                // this.loadedTeamsByCompetition.forEach((team) => {
                //     if (teamIds.find(el => el === team.id)) {
                //         userTeams.push({id: team.id, name: team.name})
                //     }
                // })
                // console.log(userTeams)
                // return this.$store.getters['users/loadedUserTeams']
                // console.log(this.loadedTeamsByCompetition)
                // let def = this.loadedTeamsByCompetition.filter(el => el.id === '-LBVgvOsCUALzowK576H')
                // let ghi = teamIds.some(el => this.loadedTeamsByCompetition.includes(el))
                // console.log(ghi)
                let def = teams.map(obj => {
                    let rObj = {}
                    rObj['id'] = obj.id
                    rObj['name'] = obj.name
                    this.selectedTeams.push(rObj)
                    return rObj
                })
                console.log(def)
                // this.selectedTeams.push(def)
               return def
              const abc = [{id: '-LBVgvOsCUALzowK576H', name: 'Argentina'}, {id: '-LBVgvOxY6A_ylDQBOmp', name: 'Australia'}, {id: '-LBVgvR__QJEcYxQ7a7g', name: 'Republic of Korea'}]
              // this.selectedTeams.push(abc)
                return abc

           },
           abc () {
                return this.selectedTeams.push[{id: '-LBVgvOsCUALzowK576H', name: 'Argentina'}, {id: '-LBVgvOxY6A_ylDQBOmp', name: 'Australia'}, {id: '-LBVgvR__QJEcYxQ7a7g', name: 'Republic of Korea'}]
             },
			loadedTeams () {
				return this.$store.getters['teams/loadedTeams'].find(team => team.slug === this.team_id)
			},
            loadedTeamsByCompetition () {
                const teams = []
                const competition_id = this.competition_id
                this.$store.getters['teams/loadedTeams'].forEach(function (team) {
                    if (team.competitions) {
                        if (team['competitions'][competition_id]) {
                            teams.push(team)
                        }
                    }
                })
                return teams
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
		},
        methods: {
            selectTeam (team) {
                // this.isActive = !this.isActive
                console.log('selectTeam')
                console.log(team.id)
                // const selectedTeam = {id: team.id, name: team.name}
                const selectedTeam = team
                console.log(selectedTeam)
                // return
                // console.log(selectedTeam)
                const index = this.selectedTeams.findIndex(el => el.id === team.id)
                console.log('index: ' + index)
                console.log('saveTeams')
                console.log(this.selectedTeams)
                this.$router.replace('/user/teams')
				this.$store.dispatch('users/updateUserTeams', this.selectedTeams)
                if (!this.selectedTeams.find(el => el.id === selectedTeam.id)) {
                    this.selectedTeams.push(selectedTeam)
                } else {
                    this.selectedTeams.splice(index, 1)
                }
            }
        }
	}
</script>
<style>

</style>
