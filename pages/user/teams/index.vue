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
						<div class="flex-container-modal-box-title">
							<h1>Tu supportes {{ loadedUserTeams.length }} équipe(s)...</h1>
						</div>
						<div v-if="loadedUserTeams.length > 0">
							<div class="flex-container-modal-Title banner2 text-center">
								<h2>Tes équipes</h2>
							</div>
							<div class="flex-container-MesEquipes">
								<div class="OtherTeam" v-for="team in loadedUserTeams">
									<span v-if="team">
										<img v-lazy="'/images/teams/' + team.image" class="imgModalFlagTeam" />
										<nuxt-link :to="'/user/teams/' + team.slug" class="overlay">
											<div class="textActivity">{{ team.category.name }}<br />{{ team.name }}<br /><br />+Infos</div>
	 									</nuxt-link>
									</span>
								</div>
							</div>
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
						<div class="flex-container-modal-OtherTeam-Img" v-if="loadedCompetitions != ''">
							<div class="OtherTeam" v-for="competition in loadedCompetitions">
								<img :src="'/images/competitions/' + competition.image" class="imgModalFlagTeam"/>
								<nuxt-link :to="'/user/competitions/' + competition.slug" class="overlayOtherTeam">
									<div class="textActivity">{{ competition.category.name}}<br />{{ competition.name}}<br /><span v-for="country in competition.countries" v-if="competition.countries">{{ country.name }}</span><br />+Infos</div>
								</nuxt-link>
							</div>
						</div>
						
						<!-- Loading placeholder -->
						<div class="ph-item" v-else>
							<div class="col-md-2">
						        <div class="ph-picture"></div>
							</div>
							<div class="col-md-2">
						        <div class="ph-picture"></div>
							</div>
							<div class="col-md-2">
						        <div class="ph-picture"></div>
							</div>
							<div class="col-md-2">
						        <div class="ph-picture"></div>
							</div>
							<div class="col-md-2">
						        <div class="ph-picture"></div>
							</div>
							<div class="col-md-2">
						        <div class="ph-picture"></div>
							</div>
						</div>
					</div>
					<!-- Modal footer -->
					<div class="modal-footer">
					  	<nuxt-link to="/home">
					  		<button type="button" class="btn btn-danger" data-dismiss="modal">Fermer</button>
					  	</nuxt-link>
					</div>
			  	</div><!-- /.modal-content -->
			</div><!-- /.modal-dialog -->
		</div><!-- /.modal-box -->		
	</div><!-- /.container-fluid -->
</template>

<script>
  export default {
    layout: 'layoutFront',
    data () {
    	return {

    	}
    },
    created () {
    	// if (Object.keys(this.$store.getters['competitions/loadedCompetitions']).length === 0) {
    		this.$store.dispatch('competitions/loadedCompetitions')
    	// }

    	// if (Object.keys(this.$store.getters['users/loadedUserTeams']).length === 0) {
    		this.$store.dispatch('users/loadedUserTeams')
    	// }
		
    	// if (Object.keys(this.$store.getters['users/loadedTeams']).length === 0) {
    		// this.$store.dispatch('users/loadedTeams')
    	// }
	},
    computed: {
    	loadedCompetitions () {
    		return this.$store.getters['competitions/loadedCompetitions']
    	},
    	loadedUserTeams () {
            return this.$store.getters['users/loadedUserTeams']
        },
		loadedTeams () {
			return this.$store.getters['users/loadedTeams']
		}
    }
  }
</script>

<style>

</style>
