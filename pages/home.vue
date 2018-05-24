<template>
	<div class="container-fluid">
		<!-- Header -->
			<div id="header" class="col-12 col-sm-12 col-md-12 col-lg-12 top-fixed">
			
				<div class="flex-container-header text-center">
					<div class="column">
						<span class="level-box"><i class="fa fa-star"></i> Niv. 1 - <i class="fa fa-angle-double-up"></i> 1 / 10</span>						
					</div>
					<div class="column">
						<div class="dollar-box"><i class="fa fa-dollar-sign"></i> 500</div>						
					</div>
					<div class="column">
						<div class="token-box"><i class="fa fa-certificate"></i> 5</div>					
					</div>
					<div class="columnButton text-right">
						<div class="quit-box" @click="logout"><i class="fa fa-times"></i></div>					
					</div>
					<div class="columnButton text-right">
						<div class="quit-box"><nuxt-link to="/admin"><i class="fa fa-share-alt"></i></nuxt-link></div>					
					</div>
				</div>	
			
			</div>

    <!-- End Header -->

		<!-- Propriété du joueur -->
		<div id="proprieteJoueur" class="col-12 col-sm-12 col-md-12 col-lg-12">

			<div class="flex-container-playerPropriety">
				<nuxt-link to="/user/avatar" class="boxShadow" style="flex-basis: 60px"><img src="/images/avatar.png" class="imgAvatar"/></nuxt-link>
				<nuxt-link to="/user" class="boxShadow flex-container-modalProfil" style="flex-grow: 1">
					<div class="columnProfil"><img src="/images/163.png" class="imgModalProprieteFlags"/> <span class="modal-Propriete" v-if="user">{{ user.pseudo }}</span> <span class="modal-ProprietePlace boxShadow"><img src="/images/cup.png" class="imgModalProprieteCup"/> 1863ème</span></div>
				</nuxt-link>
				<nuxt-link to="/user/preferences" class="boxShadow"  style="flex-basis: 60px"><img src="/images/parametre.png" class="imgParametre"/></nuxt-link>
			</div>

		</div>
		<!-- End Propriété du joueur -->
											
		<!-- Team&Goodies du joueur -->
		<div id="teamGoodies" class="col-12 col-sm-12 col-md-12 col-lg-12">
			<div class="flex-container-teamGoodies">
			  <nuxt-link to="user/teams" class="boxShadow" style="flex-grow: 1"><span class="textTitle">Tes équipes</span></nuxt-link>
			  <nuxt-link to="user/inventory" class="boxShadow" style="flex-grow: 1"><span class="textTitle">Ton inventaire</span></nuxt-link>
			</div>
		</div>
		<!-- End Team&Goodies du joueur -->
					
		<!-- Expérience -->
		<div id="experience" class="col-12 col-sm-12 col-md-12 col-lg-12">
			<div class="flex-container-experience">
			  <a href="mesActions.html" class="darkred" style="flex-grow: 1"><span class="textXP">XP / Actions</span></a>
			</div>
		</div>
		<!-- End Expérience -->
		
		<!-- Lieu événement -->
		<div id="localisation" class="col-12 col-sm-12 col-md-12 col-lg-12">
			<div class="flex-container-localisation2">
			  <a href="mesClassements.html" style="flex-basis: 60px"><img src="/images/cup.png" class="imgCup2 boxShadow"/></a>
			  <a href="mesEvent.html" style="flex-grow: 1"><img src="/images/stadium.jpg" class="imgLocalisation"/></a>
			  <a href="mrfan.html" style="flex-basis: 60px"><img src="/images/mrFan.png" class="imgCup2 boxShadow"/></a>
			</div>
		</div>
		<!-- End Lieu événement -->
					
		<!-- Evénement -->
		<div id="event" class="col-12 col-sm-12 col-md-12 col-lg-12">

			<div class="flex-container-event">
			  <a href="mesEvent.html" class="darkturquoise" style="flex-grow: 1"><span class="textEvent">Event</span></a>
			</div>

		</div>
		<!-- End Evénement -->
			
		<!-- footer -->
		<div id="footer" class="col-12 col-sm-12 col-md-12 col-lg-12">
		
			<!-- News -->
			<div id="news" class="col-12 col-sm-12 col-md-12 col-lg-12">
				<div class="flex-container-news">
				  <a href="boxNews.html" class="flex-contrainer-column" style="flex-grow: 1">
					<div class="DodgerBlue" style="flex-grow: 1"><span class="newsTitle">NEWS</span></div>
					<div style="flex-grow: 1"><img src="/images/newsCompetition.png" class="imgNews"/></div>
				  </a>
				  <a href="boxNews.html" class="flex-contrainer-column" style="flex-grow: 1">
					<div class="DodgerBlue" style="flex-grow: 1"><span class="newsTitle">NEWS</span></div>
					<div style="flex-grow: 1"><img src="/images/newsTif.png" class="imgNews"/></div>
				  </a>
				  <a href="boxNews.html" class="flex-contrainer-column" style="flex-grow: 1">
					<div class="DodgerBlue" style="flex-grow: 1"><span class="newsTitle">NEWS</span></div>
					<div style="flex-grow: 1"><img src="/images/newsEvent.png" class="imgNews"/></div>
				  </a>
				  <a href="boxNews.html" class="flex-contrainer-column" style="flex-grow: 1">
					<div class="DodgerBlue" style="flex-grow: 1"><span class="newsTitle">NEWS</span></div>
					<div style="flex-grow: 1"><img src="/images/newsGoodies.png" class="imgNews"/></div>
				  </a>
				</div>
			</div>
			<!-- End News -->
						
			<div id="dock-container">
				<div id="dock">
					<ul>
					  <li>
						<a href="fanshop.html"><img src="/images/menuShop.png">
						<span class="textMenu">FanShop</span></a>
					  </li>
					  <li>
						<a href="collection.html"><img src="/images/menuCollection.png">
						<span class="textMenu">Collection</span></a>
					  </li>
					  <li id="active">
						 <a href="index.html"><img src="/images/menuHome.png">
						 <span class="textMenu">ThisIsFan</span></a>
					  </li>
					  <li>
						 <a href="social.html"><img src="/images/menuSocial.png">
						 <span class="textMenu">Social</span></a>
					  </li>
					  <li>
						 <a href="resultat.html"><img src="/images/menuResultat.png">
						 <span class="textMenu">Résultat</span></a>
					  </li>
					</ul>
				</div>
			</div>
			
		</div>
		<!-- End footer -->
	</div><!-- /.container-fluid -->
</template>

<script>
	export default {
		layout: 'layoutFront',
		computed: {
			user () {
				return this.$store.getters['users/loadedUser']
			}
		},
		methods: {
			logout() {
				// return this.$store.dispatch('users/signOut')
				this.$store.dispatch('users/signOut').then(() => {
					// console.log('abc')
	          		// this.$router.push('/')
	          		// this.$router.replace({ path: '/' })
                	this.$router.replace('/')
	        	})
	        }
		}
	}
</script>

<style>

</style>
