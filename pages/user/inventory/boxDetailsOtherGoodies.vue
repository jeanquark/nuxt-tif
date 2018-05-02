<template>
	<div class="container-fluid">
		<!-- The Modal Team -->
		<div id="modalBox">
			<div class="modal-dialog modal-lg">
			  	<div class="modal-content-fanShop">
					<!-- Modal Header -->
					<div class="modal-header">
					  	<span class="modal-title">Suisse <span class="modal-title-Sub">(Football - Equipe nationale) (FanShop)</span></span>
						<nuxt-link to="/user/inventory">
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true" class="white-text"><i class="fa fa-arrow-circle-left"></i></span>
							</button>
						</nuxt-link>					
					</div>
					<!-- Modal body -->
					<div id="modalBoxContent" class="modal-body">
						<div class="flex-container-modal-BigTitle">
							<h1>Maillot officiel</h1>
						</div>
						<div class="flex-container-BoxGoodies">
							<div style="flex-grow: 1">
								<img src="/images/actions/clothes.png" class="imgModalBoxGoodies"/>
							</div>
						</div>
						<div class="flex-container-modalAvatar">
							<div class="infoBoxGoodies" style="flex-grow: 1">
								<p class="boxText-70">Petite description en quelques mots du matériel.</p>
								<p>
								<span class="MediumSlateBlue">Type :</span> Vêtement - Extras</br>
								<span class="MediumSlateBlue">Niveeau :</span> Niveau 1</br>
								<span class="MediumSlateBlue">Etat :</span> Neuf</br>
								<span class="MediumSlateBlue">Lié à :</span> Equipe nationale de Suisse (football)</br>
								<span class="MediumSlateBlue">Couleurs :</span> Rouge et blanc</br>
								<span class="MediumSlateBlue">Nb d'utilisation possible :</span> 25 / 25 <i class="fa fa-download"></i>
								</p>
								<p>
								<span class="MediumSlateBlue">Point de ferveur</span></br>
									Sur ton canapé, au pub, devant l'écrant géant et au stade (VIP, Kop et tribune)
								</p>
								<p class="boxText-70"><span class="MediumSlateBlue">Attention:</span></br>
									A chaque fois que tu utilises une carte "Goodies", celle-ci perd de sa valeur.
								</p>
							</div>
						</div>
					</div>
					<!-- Modal footer -->
					<div class="modal-footer">
					  	<nuxt-link to="/user/inventory">
					  		<button type="button" class="btn btn-danger" data-dismiss="modal">Ne pas acheter</button>
					  	</nuxt-link>
					  	<nuxt-link to="/user/inventory">
					  		<button type="button" class="btn btn-success" data-dismiss="modal">Coût : 20 $fans</button>
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
