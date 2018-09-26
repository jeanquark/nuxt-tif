<template>
		<div class="container-fluid">
		
			<!-- The Modal Player -->
			<div id="modalBox">
				<div class="modal-dialog modal-lg">
				  <div class="modal-content">
					<!-- Modal Header -->
					<div class="modal-header">
						<span class="modal-title">Ton profil</span>
						<a href="index.html"><button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true" class="white-text"><i class="fas fa-arrow-circle-left"></i></span>
                    	</button></a>					
                	</div>
					<!-- Modal body -->
					<div id="modalBoxContentProfil" class="modal-bodyProfil text-center">
						<div class="flex-container-modalProfil text-center">
							<div class="columnProfil"><img src="/images/163.png" class="imgModalProprieteFlags2"/><span class="modal-Profil" v-if="loadedUser"> {{ loadedUser.username }}</span> <span class="modal-Age"> (20) </span><span v-if="loadedUser && loadedUser.avatar"><img :src="loadedUser.avatar.url" class="imgModalAvatarProfil"/></span></div>
						</div>
						<div class="flex-container-modal-Niveau-Classement text-center">
							<div class="columnProfil"><img src="/images/cup.png" class="imgModalProprieteCup"/> <span class="modal-Place">1234567ème</span> <img src="/images/cup.png" class="imgModalProprieteCup"/></div>
						</div>
					</div>
					<div id="modalTitle" class="modal-body">
						<div class="flex-container-modal-Title banner2 text-center">
							<h2>Niveau / PF / Competences / $fans / Tokens</h2>
						</div>
						<div class="flex-container-Niveau-Header">
							<div class="column1">
								<span class="PF-Team-box">
									Point Ferveur</br>
									<span class="PF-Number-box" v-if="loadedUser">{{ loadedUser.level.value }}</span>
									Tes équipes
								</span>						
							</div>
							<div class="column2">
								<div class="imgModalLevel">
									<img src="/images/level/level.png" class="imgModalLevelImg"/>
								</div>
								<div class="Level-Number-box">
									1
								</div>
							</div>
							<div class="column1">
								<span class="PF-Team-box">
									Point Ferveur</br>
									<span class="PF-Number-box">00.25</span>
									Autres équipes
								</span>						
							</div>
						</div>
						<div class="flex-container-modal-Niveau-PF">
							<div class="flex-container-modal-Niveau">
								<div class="columnNiveauImg">
									<i class="fas fa-dumbbell fa-lg"></i>							
								</div>
								<div class="columnNiveauTexte">
									Force
								</div>
								<div class="columnNiveauNumber" v-if="loadedUser">
									{{ loadedUser.skillStrength.value }}
								</div>
							</div>
							<div class="flex-container-modal-Niveau">
								<div class="columnNiveauImg">
									<i class="fab fa-creative-commons-sampling fa-lg"></i>						
								</div>
								<div class="columnNiveauTexte">
									Endurance
								</div>
								<div class="columnNiveauNumber" v-if="loadedUser">
									{{ loadedUser.skillEndurance.value }}
								</div>
							</div>
							<div class="flex-container-modal-Niveau">
								<div class="columnNiveauImg">
									<i class="fas fa-brain fa-lg"></i>							
								</div>
								<div class="columnNiveauTexte">
									Intelligence
								</div>
								<div class="columnNiveauNumber" v-if="loadedUser">
									{{ loadedUser.skillIntelligence.value }}
								</div>
							</div>
							<div class="flex-container-modal-Niveau">
								<div class="columnNiveauImg">
									<i class="fas fa-users fa-lg"></i>						
								</div>
								<div class="columnNiveauTexte">
									Social
								</div>
								<div class="columnNiveauNumber" v-if="loadedUser">
									{{ loadedUser.skillSocial.value }}
								</div>
							</div>
							<div class="flex-container-modal-Niveau">
								<div class="columnNiveauImg">
									<i class="fas fa-gavel fa-lg"></i>						
								</div>
								<div class="columnNiveauTexte">
									Autorité
								</div>
								<div class="columnNiveauNumber" v-if="loadedUser">
									{{ loadedUser.skillAuthority.value }}
								</div>
							</div>
							<div class="flex-container-modal-Niveau">
								<div class="columnNiveauImg">
									<i class="fas fa-comments-dollar fa-lg"></i>							
								</div>
								<div class="columnNiveauTexte">
									Baratin
								</div>
								<div class="columnNiveauNumber" v-if="loadedUser">
									{{ loadedUser.skillSpiel.value }}
								</div>
							</div>
							<div class="flex-container-modal-Niveau">
								<div class="columnNiveauImg">
									<i class="fas fa-palette fa-lg"></i>							
								</div>
								<div class="columnNiveauTexte">
									Créativité
								</div>
								<div class="columnNiveauNumber" v-if="loadedUser">
									{{ loadedUser.skillCreativity.value }}
								</div>
							</div>
							<div class="flex-container-modal-Niveau">
								<div class="columnNiveauImg">
									<i class="fas fa-chart-line fa-lg"></i>						
								</div>
								<div class="columnNiveauTexte">
									Mental
								</div>
								<div class="columnNiveauNumber" v-if="loadedUser">
									{{ loadedUser.skillMental.value }}
								</div>
							</div>
						</div>
						<div class="flex-container-Niveau-Header text-center">
							<div class="column1">
								<span class="PF-Team-box">
									<div class="dollar-box" v-if="loadedUser && loadedUser.dollarFan"><i class="fa fa-dollar-sign"></i> {{ loadedUser.dollarFan.value }}</div>						
								</span>						
							</div>
							<div class="column1">
								<span class="PF-Team-box">
									<div class="token-box" v-if="loadedUser && loadedUser.tokens"><i class="fa fa-certificate"></i> {{ loadedUser.tokens.value }}</div>					
								</span>						
							</div>
						</div>
					</div>
					<div id="modalTitle" class="modal-body">
						<div class="flex-container-modal-Title banner2 text-center">
							<h2>Statistiques "Action Cards"</h2>
						</div>
						<div class="flex-container-modal-Action">
							<div class="flex-container-modal-Niveau">
								<div class="columnActionTexte">
									Nombre de cartes "Action Diary" débloquées
								</div>
								<div class="columnActionNumber">
									12 / 50
								</div>
							</div>
							<div class="flex-container-modal-Niveau">
								<div class="columnActionTexte">
									Nombre de cartes "Action Event" débloquées
								</div>
								<div class="columnActionNumber">
									5 / 50
								</div>
							</div>
							<div class="flex-container-modal-Niveau">
								<div class="columnActionTexte">
									Nombre de cartes "Action Inventory" achetées
								</div>
								<div class="columnActionNumber">
									0
								</div>
							</div>
							<div class="flex-container-modal-Niveau">
								<div class="columnActionTexte">
									Nombre de cartes "Special Action" achetées
								</div>
								<div class="columnActionNumber">
									0
								</div>
							</div>
						</div>	
					</div>
					<div id="modalTitle" class="modal-body">
						<div class="flex-container-modal-Title banner2 text-center">
							<h2>Statistiques "Jeux"</h2>
						</div>
						<div class="flex-container-modal-Action">
							<div class="flex-container-modal-Niveau">
								<div class="columnActionTexte">
									Tu es Fan de ?
								</div>
								<div class="columnGameNumber">
									1 équipe
								</div>
							</div>
							<div class="flex-container-modal-Niveau">
								<div class="columnActionTexte">
									Event - Nb de participations
								</div>
								<div class="columnGameNumber">
									0
								</div>
							</div>
							<div class="flex-container-modal-Niveau">
								<div class="columnActionTexte">
									Compétition - Nb de compétitions jouées
								</div>
								<div class="columnGameNumber">
									0
								</div>
							</div>
							<div class="flex-container-modal-Niveau">
								<div class="columnActionTexte">
									Action - Nb d'actions réalisées
								</div>
								<div class="columnGameNumber">
									0
								</div>
							</div>
							<div class="flex-container-modal-Niveau">
								<div class="columnActionTexte">
									Trophée - Nb de trophées gagnés
								</div>
								<div class="columnGameNumber">
									1
								</div>
							</div>
							<div class="flex-container-modal-Niveau">
								<div class="columnActionTexte">
									Action collective - Nb d'actions lancées
								</div>
								<div class="columnGameNumber">
									0
								</div>
							</div>
						</div>	
					</div>
					<!-- Modal footer -->
					<div class="modal-footer">
					  <a href="index.html"><button type="button" class="btn btn-danger" data-dismiss="modal">Fermer</button></a>
					</div>
				  </div>
				</div>
			</div>
			<!-- End Modal Player -->
						
		</div>
</template>

<script>
  export default {
    layout: 'layoutFront',
    computed: {
            loadedUser () {
                return this.$store.getters['users/loadedUser']
            },
            loadedLevel () {
                return this.$store.getters['level/loadedLevel']
            },
            loadedNews () {
                return this.$store.getters['news/loadedNews']
            }
        }
  }
</script>

<style>

</style>
