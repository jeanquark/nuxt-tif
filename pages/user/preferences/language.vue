<template>
	<div class="container-fluid">
		<!-- The Modal Langues -->
		<div id="modalBox">
			<div class="modal-dialog modal-lg">
			  <div class="modal-content">
				<!-- Modal Header -->
				<div class="modal-header">
					<span class="modal-title">Languages <span class="modal-title-Sub">(Tes Paramètres)</span></span>
					<nuxt-link to="/user/preferences">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true" class="white-text"><i class="fa fa-arrow-circle-left"></i></span>
						</button>
					</nuxt-link>					
				</div>
				<!-- Modal body -->
				<div id="modalBoxContent" class="modal-body">
					<div class="flex-container-modal-MyTeam">
						<h1>Tu parles comment ?</h1>
					</div>
					<div class="flex-container-modal-Parametre">
						<div class="flex-container-modal-Niveau">
							<div class="columnParametreButtonLangue">
								français
							</div>
						</div>
						<div class="flex-container-modal-Niveau">
							<div class="columnParametreButtonLangue">
								english
							</div>
						</div>
						<div class="flex-container-modal-Niveau">
							<div class="columnParametreButtonLangue">
								deutsch
							</div>
						</div>
						<div class="flex-container-modal-Niveau">
							<div class="columnParametreButtonLangue">
								spanish
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
		<!-- End Modal Langues -->	
	</div>
</template>

<script>
  export default {
    layout: 'layoutFront',
  }
</script>

<style>

</style>