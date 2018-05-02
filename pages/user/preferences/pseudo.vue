<template>
	<div class="container-fluid">
		<!-- The Modal Pseudo -->
		<div id="modalBox">
			<div class="modal-dialog modal-lg">
				<div class="modal-content loginmodal-container">
					<!-- Modal Header -->
					<div class="modal-header">
					  	<span class="modal-title">Ton pseudo <span class="modal-title-Sub">(Tes Paramètres)</span></span>
						<nuxt-link to="/user/preferences">
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true" class="white-text"><i class="fa fa-arrow-circle-left"></i></span>
							</button>
						</nuxt-link>					
					</div>
					<!-- Modal body -->
					<div id="modalBoxContent" class="modal-body">
						<div class="flex-container-modal-MyTeam">
							<h1>C'est quoi ton pseudo ?</h1>
						</div>
						<form>
							<input type="text" name="Pseudo1234567" placeholder="Pseudo1234567">
						</form>
						<div class="flex-container-modal-Pseudo">
							<div class="flex-container-modal-Niveau">
								<div class="columnParametreButtonPseudo">
									Attention : tu peux changer ton pseudo, mais sache que tes amis te trouveront plus difficilement ensuite...
								</div>
							</div>
						</div>
					</div>
					<!-- Modal footer -->
					<div class="modal-footer">
						<nuxt-link to="/user/preferences"><button type="button" class="btn btn-danger" data-dismiss="modal">Annule tout !</button></nuxt-link>
						<nuxt-link to="/user/preferences"><button type="button" class="btn btn-success" data-dismiss="modal">Allez, valide !</button></nuxt-link>
					</div>
				</div>
			</div>
		</div>			
		<!-- End Modal Pseudo -->
	</div>
</template>

<script>
  	export default {
    	layout: 'layoutFront',
  	}
</script>

<style>

</style>
