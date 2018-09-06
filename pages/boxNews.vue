<template>
	<div class="container-fluid">
		<!-- The Modal Team -->
		<div id="modalBox">
			<div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <!-- Modal Header -->
                    <div class="modal-header text-center">
                        <span class="modal-title">News "TIF" <span class="modal-title-Sub">(Compétition)</span></span>
                        <nuxt-link to="/home">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" class="white-text"><i class="fa fa-arrow-circle-left"></i></span>
                        </button>
                    </nuxt-link>         
                </div>
				<!-- Modal body -->
				<div id="modalBoxContent" class="modal-body">
					<div class="flex-container-modal-BigTitle">
						<h1>Nouvelle compétition !</h1>
					</div>
					<div class="flex-container-BoxGoodies">
						<div style="flex-grow: 1">
							<img src="images/flags/200.png" class="imgModalBoxNews"/>
						</div>
					</div>
					<div class="flex-container-modalAvatar">
						<div class="infoBoxGoodies" style="flex-grow: 1">
							<p class="boxText-70">ThisIsFan.com est heureux de vous annoncer qu'une nouvelle compétition a été ajoutée à son jeu !</p>
							<p>
							<span class="orangered">Activité :</span> Sport - Football</br>
							<span class="orangered">Type :</span> Championnat</br>
							<span class="orangered">Pays :</span> France</br>
							<span class="orangered">Saison :</span> 2018-2019</br>
							</p>
							<p>
							<span class="orangered">Equipes</span></br>
								Angers, Nantes, Toulouse, Angers, Nantes, Toulouse, Angers, Nantes, Toulouse, Angers, Nantes, Toulouse, Angers, Nantes, Toulouse, Angers, Nantes, Toulouse, Angers, Nantes
							</p>
							<p class="boxText-70"><span class="orangered">Attention:</span></br>
								Début du championnat le samedi 21 août 2018
							</p>
						</div>
					</div>
				</div>
				<!-- Modal footer -->
				<div class="modal-footer">
					<nuxt-link to="/home">
						<button type="button" class="btn btn-danger" data-dismiss="modal">Fermer</button>
					</nuxt-link>
				</div>
			  </div>
			</div>
		</div>
		<!-- End Modal Team -->
	</div><!-- /.container-fluid -->
</template>

<script>
	import axios from 'axios'
	export default {
		layout: 'layoutFront',
		created () {
		},
		computed: {
			loadedUser () {
				return this.$store.getters['users/loadedUser']
			},
		},
		methods: {
		}
	}
</script>

<style scoped>

</style>
