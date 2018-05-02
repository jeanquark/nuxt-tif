<template>
	<div class="container-fluid">
		<!-- The Modal Team -->
		<div id="modalBox">
			<div class="modal-dialog modal-lg">
				<div class="modal-content">
					<!-- Modal Header -->
					<div class="modal-header">
					  	<span class="modal-title">Trophée en détail... <span class="modal-title-Sub">(Tes équipes)</span></span>
						<nuxt-link to="/userTeamnDetailsTrophyTif">
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true" class="white-text"><i class="fa fa-arrow-circle-left"></i></span>
							</button>
						</nuxt-link>					
					</div>
					<!-- Modal body -->
					<div id="modalBoxContent" class="modal-body">
						<div class="flex-container-modal-BigTitle">
							<h1>Champion du Monde</h1>
						</div>
						<div class="flex-container-BoxGoodies">
							<div style="flex-grow: 1">
								<img src="/images/cup/cup.png" class="imgModalBoxNews"/>
							</div>
						</div>
						<div class="flex-container-modalAvatar">
							<div class="infoBoxGoodies" style="flex-grow: 1">
								<p class="boxText-70">Champion du monde de football - Russie - 2018</p>
								<p>
								<span class="orangered">Compétition :</span> Coupe du monde</br>
								<span class="orangered">Activité :</span> Football</br>
								<span class="orangered">Année/Saison :</span> 2018</br>
								<span class="orangered">Lieu de l'événement</span> Russie</br>
								</p>
								<p>
								<span class="orangered">Gains</span></br></br>
									5 Tokens à tous les fans de l'équipe de Suisse de football au moment de la victoire
								</p>
								<p class="boxText-70"><span class="orangered">Archives :</span></br>
									Il est possible de voir le détail de cette <nuxt-link to="/competitionDetails">compétition</nuxt-link> ! 
								</p>
							</div>
						</div>
					</div>
					<!-- Modal footer -->
					<div class="modal-footer">
					  	<nuxt-link to="/user/teams/userTeamsDetailsTrophyTif">
					  		<button type="button" class="btn btn-danger" data-dismiss="modal">J'ai vu, merci !</button>
					  	</nuxt-link>
					</div>
				</div><!-- /.modal-content -->
			</div><!-- /.modal-dialog -->
		</div><!-- /#modalBox -->
		<!-- End Modal Team -->
	</div><!-- /.container-fluid -->
</template>

<script>
  	export default {
    	layout: 'layoutFront',
  	}
</script>

<style>

</style>
