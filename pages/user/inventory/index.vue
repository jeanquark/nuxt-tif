<template>
	<div class="container-fluid">
		<!-- The Modal Goodies -->
		<div id="modalBox">
			<div class="modal-dialog modal-lg" role="document">
				<div class="modal-content">
					<!-- Modal Header -->
					<div class="modal-header">
						<span class="modal-title">Mes Goodies</span>
						<nuxt-link to="/home">
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true" class="white-text"><i class="fa fa-arrow-circle-left"></i></span>
							</button>
						</nuxt-link>					
					</div>
					<!-- Modal body -->
					<div id="modalBoxContent" class="modal-body">
						<div class="flex-container-modal-MyTeam">
							<h1>Ton inventaire...</h1>
						</div>
						<div class="flex-container-modal-Title banner2 text-center">
							<h2>Tes fringes <span class="infoBoxToken" v-tooltip="'Habille-toi avec les couleurs de ton équipe préférée avant de participer à un Event.'"><i class="infoTesEquipes fa fa-info-circle"></i></span></h2>
						</div>
						<div class="flex-container-modal-Goodies-Img">
							<span class="OtherTeam"><img src="/images/actions/cloakroom.png" class="imgModalAvatar"/><div class="overlay"><div class="textActivity">Vide</div><div class="textInfo">Extras</div></div></span>
							<span class="OtherTeam"><img src="/images/actions/hat.png" class="imgModalAvatar"/><div class="overlay"><div class="textActivity">Casquette officielle</div><div class="textInfo">Tête</div></div></span>
							<span class="OtherTeam"><img src="/images/actions/cloakroom.png" class="imgModalAvatar"/><div class="overlay"><div class="textActivity">Vide</div><div class="textInfo">Extras</div></div></span>
							<span class="OtherTeam"><img src="/images/actions/cloakroom.png" class="imgModalAvatar"/><div class="overlay"><div class="textActivity">Vide</div><div class="textInfo">Corps</div></div></span>
							<span class="OtherTeam"><img src="/images/actions/clothes.png" class="imgModalAvatar"/><div class="overlay"><div class="textActivity">Maillot officiel</div><div class="textInfo">Corps</div></div></span>
							<span class="OtherTeam"><img src="/images/actions/cloakroom.png" class="imgModalAvatar"/><div class="overlay"><div class="textActivity">Vide</div><div class="textInfo">Corps</div></div></span>
						</div>
						<div class="flex-container-modal-Title banner2 text-center">
							<h2>Ton appartement / Ta déco <span class="infoBoxToken" v-tooltip="'La déco de ton appartement aura de l\'importance si tu regardes le match à la TV !'"><i class="infoTesEquipes fa fa-info-circle"></i></span></h2>
						</div>
						<div class="flex-container-modal-Goodies-Img">
							<span class="OtherTeam"><img src="/images/actions/cloakroom.png" class="imgModalAvatar"/><div class="overlay"><div class="textActivity">Vide</div><div class="textInfo">Déco</div></div></span>
							<span class="OtherTeam"><img src="/images/actions/bier.png" class="imgModalAvatar"/><div class="overlay"><div class="textActivity">Chope de bière</div><div class="textInfo">Déco</div></div></span>
							<span class="OtherTeam"><img src="/images/actions/cloakroom.png" class="imgModalAvatar"/><div class="overlay"><div class="textActivity">Vide</div><div class="textInfo">Déco</div></div></span>
						</div>
					</div>
					<div id="modalBoxContent" class="modal-body">
						<div class="flex-container-modal-Title banner2 text-center">
							<h2>Ta garde-robe et ta cave</h2>
						</div>
						<div class="flex-container-modal-OtherTeam">
							<h6>Choisis ta déco et tes fringues !</h6>
						</div>
						<div class="flex-container-modal-FanShop-Goodies">
							<nuxt-link to="/user/inventory/boxDetailsUserGoodies" class="OtherTeam">
								<div class="textBoxFanshopGoodies">Maillot officiel</div>
								<div class="textBoxGoodiesTeam">Suisse - Football</div>								
								<div class="textBoxGoodiesNiveau">Vêtement - Niv.1</div>
								<img src="/images/actions/hat.png" class="imgModalGoodies"/></br>
								<div class="progress">
									<span class="progress-value">6 / 10 <i class="fa fa-download"></i></span>
									<div class="progress-bar orangeredProgress" role="progressbar" aria-valuenow="100" aria-valuemin="100" aria-valuemax="100" style="width: 100%;"></div>
								</div>
								<div class="textBoxGoodies">+ d'infos</div>
							</nuxt-link>
							<nuxt-link to="/user/inventory/boxDetailsUserGoodies" class="OtherTeam">
								<div class="textBoxFanshopGoodies">Maillot officiel</div>
								<div class="textBoxGoodiesTeam">Suisse - Football</div>								
								<div class="textBoxGoodiesNiveau">Vêtement - Niv.1</div>
								<img src="/images/actions/clothes.png" class="imgModalGoodies"/></br>
								<div class="progress">
									<span class="progress-value">6 / 10 <i class="fa fa-download"></i></span>
									<div class="progress-bar orangeredProgress" role="progressbar" aria-valuenow="100" aria-valuemin="100" aria-valuemax="100" style="width: 100%;"></div>
								</div>
								<span class="textBoxGoodies">+ d'infos</span>
							</nuxt-link>
							<nuxt-link to="/user/inventory/boxDetailsUserGoodies" class="OtherTeam">
								<div class="textBoxFanshopGoodies">Maillot officiel</div>
								<div class="textBoxGoodiesTeam">Suisse - Football</div>								
								<div class="textBoxGoodiesNiveau">Vêtement - Niv.1</div>
								<img src="/images/actions/bier.png" class="imgModalGoodies"/></br>
								<div class="progress">
									<span class="progress-value">6 / 10 <i class="fa fa-download"></i></span>
									<div class="progress-bar orangeredProgress" role="progressbar" aria-valuenow="100" aria-valuemin="100" aria-valuemax="100" style="width: 100%;"></div>
								</div>
								<span class="textBoxGoodies">+ d'infos</span>
							</nuxt-link>
						</div>	
					</div>
					<div id="modalBoxContent" class="modal-body">
						<div class="flex-container-modal-OtherTeam">
							<h1>Envie de faire 2-3 achats ?</h1>
						</div>
						<div class="flex-container-modal-Title banner text-center">
							<h2>Rendez-vous au shop <span class="infoBoxToken" v-tooltip="'Si tu veux te rendre au fanShop, clique sur "Rendez-vous au shop !'"><i class="infoTesEquipes fa fa-info-circle"></i></span></h2>
						</div>
						<div class="flex-container-modal-OtherTeam">
							<h6>Quelques produits...</h6>
						</div>
						<div class="flex-container-modal-FanShop-Goodies-No">
							<nuxt-link to="/user/inventory/boxDetailsOtherGoodies" class="OtherTeam">
								<div class="textBoxFanshopGoodiesNo">Maillot officiel</div>
								<div class="textBoxGoodiesTeamNo">Suisse - Football</div>								
								<div class="textBoxGoodiesNiveauNo">Vêtement - Niv.1</div>
								<img src="/images/actions/clothes.png" class="imgModalGoodiesNo"/></br>
								<div class="progress">
									<span class="progress-value">6 / 10 <i class="fa fa-download"></i></span>
									<div class="progress-bar goodiesNoProgress" role="progressbar" aria-valuenow="100" aria-valuemin="100" aria-valuemax="100" style="width: 100%;"></div>
								</div>
								<span class="textBoxGoodiesDollar">50 $fans</span></br>
								<span class="textBoxGoodiesNo">+ d'infos</span>
							</nuxt-link>
							<nuxt-link to="/user/inventory/boxDetailsOtherGoodies" class="OtherTeam">
								<div class="textBoxFanshopGoodiesNo">Maillot officiel</div>
								<div class="textBoxGoodiesTeamNo">Suisse - Football</div>								
								<div class="textBoxGoodiesNiveauNo">Vêtement - Niv.1</div>
								<img src="/images/actions/clothes.png" class="imgModalGoodiesNo"/></br>
								<div class="progress">
									<span class="progress-value">6 / 10 <i class="fa fa-download"></i></span>
									<div class="progress-bar goodiesNoProgress" role="progressbar" aria-valuenow="100" aria-valuemin="100" aria-valuemax="100" style="width: 100%;"></div>
								</div>
								<span class="textBoxGoodiesDollar">50 $fans</span></br>
								<span class="textBoxGoodiesNo">+ d'infos</span>
							</nuxt-link>
							<nuxt-link to="/user/inventory/boxDetailsOtherGoodies" class="OtherTeam">
								<div class="textBoxFanshopGoodiesNo">Maillot officiel</div>
								<div class="textBoxGoodiesTeamNo">Suisse - Football</div>								
								<div class="textBoxGoodiesNiveauNo">Vêtement - Niv.1</div>
								<img src="/images/actions/clothes.png" class="imgModalGoodiesNo"/></br>
								<div class="progress">
									<span class="progress-value">6 / 10 <i class="fa fa-download"></i></span>
									<div class="progress-bar goodiesNoProgress" role="progressbar" aria-valuenow="100" aria-valuemin="100" aria-valuemax="100" style="width: 100%;"></div>
								</div>
								<span class="textBoxGoodiesDollar">50 $fans</span></br>
								<span class="textBoxGoodiesNo">+ d'infos</span>
							</nuxt-link>
						</div>
					</div>
					<!-- Modal footer -->
					<div class="modal-footer">
					  	<nuxt-link to="/home">
					  		<button type="button" class="btn btn-danger" data-dismiss="modal">Annule tout !</button>
					  	</nuxt-link>
					  	<nuxt-link to="/home">
					  		<button type="button" class="btn btn-success" data-dismiss="modal">Allez, valide !</button>
					  	</nuxt-link>
					</div>
				</div><!-- /.modal-content -->
			</div><!-- /.modal-dialog -->
		</div><!--/#modalBox -->
		<!-- End Modal Goodies -->		
	</div><!-- /.container-fluid -->
</template>

<script>
  	export default {
    	layout: 'layoutFront',
  	}
</script>

<style>

</style>
