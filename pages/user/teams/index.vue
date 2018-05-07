<template>
	<div class="container-fluid">
		<!-- The Modal Team -->
		<div id="modalBox">
			<div class="modal-dialog modal-lg">
			  	<div class="modal-content">
					<!-- Modal Header -->
					<div class="modal-header">
					  	<span class="modal-title">Tes équipes</span>
						<nuxt-link to="/home">
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true" class="white-text"><i class="fa fa-arrow-circle-left"></i></span>
							</button>
						</nuxt-link>					
					</div>
					<!-- Modal body -->
					<div id="modalBoxContent" class="modal-body">
						<div class="flex-container-modal-MyTeam">
							<h1>Tu supportes 7 équipes...</h1>
						</div>
						<div class="flex-container-modal-Title banner2 text-center">
							<h2>Tes équipes</h2>
						</div>
						<div class="flex-container-MesEquipes">
							<div class="OtherTeam"><img src="/images/flags/163.png" class="imgModalAvatar"/><nuxt-link to="/userTeamDetails" class="overlay"><div class="textActivity">Football</br>Suisse</br></br>+Infos</div></nuxt-link></div>
						</div>	
					</div>
					<div id="modalBoxContent" class="modal-body">
						<div class="flex-container-modal-OtherTeam">
							<h1>Supporter une nouvelle équipe ?</h1>
						</div>
						<div class="flex-container-modal-Title banner text-center">
							<h2>Compétitions en cours / à venir</h2>
						</div>
						<div class="flex-container-modal-OtherTeam">
							<h6>Choisis ta compétition</h6>
						</div>
						<div class="flex-container-modal-OtherTeam-Img" v-for="competition in loadedCompetitions">
							<div class="OtherTeam">
								<img :src="'/images/competitions/' + competition.image" class="imgModalAvatar"/>
								<nuxt-link :to="'/user/competitions/' + competition.slug" class="overlayOtherTeam">
									<div class="textActivity">{{ competition.name}}</br>{{ competition.country }}</br>{{ competition.year }}</br></br>+Infos</div>
								</nuxt-link>
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
	</div>
</template>

<script>
  export default {
    layout: 'layoutFront',
    data () {
    	return {

    	}
    },
    created () {
    	this.$store.dispatch('competitions/loadedCompetitions')
    },
    computed: {
    	loadedCompetitions () {
    		return this.$store.getters['competitions/loadedCompetitions']
    	}
    }
  }
</script>

<style>

</style>
