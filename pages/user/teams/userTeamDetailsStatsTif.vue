<template>
	<div class="container-fluid">
		<!-- The Modal OtherTeamDetail -->
		<div id="modalBox">
			<div class="modal-dialog modal-lg">
			  	<div class="modal-content">
					<!-- Modal Header -->
					<div class="modal-header">
					  <span class="modal-title">Statistiques "TIF" <span class="modal-title-Sub">(Tes équipes)</span></span>
						<nuxt-link to="/user/teams/userTeamDetails">
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true" class="white-text"><i class="fa fa-arrow-circle-left"></i></span>
							</button>
						</nuxt-link>					
					</div>
					<!-- Modal body -->
					<div id="modalBoxContent" class="modal-bodyProfil text-center">
						<div class="flex-container-modalProfil">
							<div class="columnProfil"><img src="/images/flags/163.png" class="imgModalFlags"/> <span class="modal-Team-Title">Equipe de Suisse</span> <img src="/images/flags/163.png" class="imgModalFlags"/></div>
						</div>
						<div class="flex-container-modal-Niveau text-center">
							<div class="columnProfil"><span class="modal-Team-Activity">Coupe du Monde</br>Russie</br>Football - 2018</span></div>
						</div>
					</div>
					<div class="flex-container-modalMenuResultats">
						<nuxt-link to="/userTeamDetailsStatsTif" style="flex-grow: 1" data-toggle="tooltip" data-placement="bottom" title="Calendrier et résultats"><span class="textModalMenuResultats">Stats TIF</span></nuxt-link>
						<nuxt-link to="/userTeamDetailsRankingTif" style="flex-grow: 1" data-toggle="tooltip" data-placement="bottom" title="Classement individuel TIF"><span class="textModalMenuResultats">Classements TIF</span></nuxt-link>
						<nuxt-link to="/userTeamDetailsTrophyTif" style="flex-grow: 1" data-toggle="tooltip" data-placement="bottom" title="Classement individuel TIF"><span class="textModalMenuResultats">Trophées TIF</span></nuxt-link>
					</div>
					<div id="modalTitle" class="modal-body">
						<div class="flex-container-modal-Title banner2 text-center">
							<h2>Statistiques "TIF"</br> Coupe du Monde - Russie - 2018</br> <span class="modal-title-Sub">(classements provisoires)</span></h2>
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
					  	<nuxt-link to="/user/teams/userTeamDetails">
					  		<button type="button" class="btn btn-danger" data-dismiss="modal">Sortir d'ici !</button>
					  	</nuxt-link>
					</div>
			  	</div><!-- /.modal-content -->
			</div><!-- /.modal-dialog -->
		</div><!-- /#modalBox -->
		<!-- End Modal OtherTeamDetail -->						
	</div><!-- /.container-fluid -->
</template>

<script>
  	export default {
    	layout: 'layoutFront',
  	}
</script>

<style>

</style>
