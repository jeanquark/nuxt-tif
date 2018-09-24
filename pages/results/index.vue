<template>
	<div class="container-fluid">
		<!-- Header -->

		<!-- <div v-if="!loadedUser">
			<div style="position: fixed; left: 0px; top: 0px; width: 100%; height: 100%; z-index: 9999;
			  background: url('/images/loader.gif') 50% 50% no-repeat rgb(249,249,249);"></div>
		</div> -->
		
		<div v-if="loadedUser && loadedUser.level && loadedUser.level.value" v-cloak>
			<!-- <h1 class="text-center" style="color: #fff;">Loading...{{ loadedUser }}</h1> -->
			<div id="header" class="col-12 col-sm-12 col-md-12 col-lg-12 top-fixed">
				<div class="flex-container-header text-center">
					<div class="column">
						<div class="level-box" v-if="loadedUser && loadedUser.level"><i class="fa fa-star"></i> Niv. {{ loadedUser.level.value }} - <i class="fa fa-angle-double-up"></i> <span v-if="loadedUser.action">{{ loadedUser.action.value }} / 10</span></div>						
					</div>
					<div class="column">
						<div class="dollar-box" v-if="loadedUser && loadedUser.dollarFan"><i class="fa fa-dollar-sign"></i> {{ loadedUser.dollarFan.value }}</div>						
					</div>
					<div class="column">
						<div class="token-box" v-if="loadedUser && loadedUser.tokens"><i class="fa fa-certificate"></i> {{ loadedUser.tokens.value }}</div>					
					</div>
					<div class="columnButton text-right">
						<div class="quit-box" @click="logout"><i class="fa fa-times"></i></div>
					</div>
					<div class="columnButton text-right" v-if="loadedUser && loadedUser.status && loadedUser.status.value === 'admin'">
						<div class="quit-box" @click="goToAdmin"><i class="fa fa-tachometer-alt"></i></div>
					</div>
				</div>	
			
			</div><!-- End Header -->
			
			<!-- Content -->
			<div class="pxBottom">
				<div id="resultatHeader">
					<div class="flex-container-Resultat">
						<span class="resultatTitle">Résultats et classements</span>
					</div>
				</div>
				<div v-if="loadedUserTeams.length > 0">
					<div class="flex-container-modal-Title banner2 text-center">
						<h2>Tes équipes</h2>
					</div>
				</div>
				<div id="resultatBoxFlags" class="resultatBody">
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
				<div>
					<div class="flex-container-modal-Title banner text-center">
						<h2>Compétitions en cours</h2>
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
			</div>
			<!-- End Content -->
						
			<!-- footer -->
			<div id="footer" class="col-12 col-sm-12 col-md-12 col-lg-12">					
				<div id="dock-container">
					<div id="dock">
						<ul>
							<li>
								<a href="fanshop.html"><img src="/images/menuShop.png"></a>
								<span class="textMenu">FanShop</span></a>
							</li>
							<li>
								<a href="collection.html"><img src="/images/menuCollection.png"></a>
								<span class="textMenu">Collection</span></a>
							</li>
							<li>
								<nuxt-link to="/home"><img src="/images/menuHome.png"></next-link>
								<span class="textMenu">ThisIsFan</span></a>
							</li>
							<li>
								<a href="social.html"><img src="/images/menuSocial.png"></a>
								<span class="textMenu">Social</span></a>
							</li>
							<li id="active">
								<nuxt-link to="/results"><img src="/images/menuResultat.png"></next-link>
								<span class="textMenu">Résultats</span></a>
							</li>
						</ul>
					</div><!-- /#dock -->
				</div><!-- /#dock-container -->			
			</div><!-- /#footer -->
		</div>
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
		loadedUser () {
			return this.$store.getters['users/loadedUser']
		},
		loadedLevel () {
			return this.$store.getters['level/loadedLevel']
		},
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
