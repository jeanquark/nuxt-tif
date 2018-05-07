<template>
	<div class="container-fluid">
		<!-- Header -->
		<div id="header" class="col-12 col-sm-12 col-md-12 col-lg-12 top-fixed">
			<div class="flex-container-header" style="background: #ccc;" v-if="user">
				<h3>{{ user.email }}</h3>
				<button class="btn btn-danger" @click="logout">Logout</button>
			</div>
			<div class="flex-container-header">
				<div class="column">
					<span class="level-box"><i class="fa fa-star"></i> Niv. 1 - <i class="fa fa-angle-double-up"></i> 1 / 10</span>						
				</div>
				<div class="column">
					<div class="dollar-box"><i class="fa fa-dollar-sign"></i> 500</div>						
				</div>
				<div class="column">
					<div class="token-box"><i class="fa fa-certificate"></i> 5</div>					
				</div>
			</div>
		
		</div>
		<!-- End Header -->

		<!-- Propriété du joueur -->
		<div id="proprieteJoueur" class="col-12 col-sm-12 col-md-12 col-lg-12">

			<div class="flex-container-playerPropriety">
				<nuxt-link to="/user/avatar" class="boxShadow" style="flex-basis: 60px"><img src="avatar.png" class="imgAvatar"/></nuxt-link>
				<nuxt-link to="/user" class="boxShadow flex-container-modalProfil" style="flex-grow: 1">
					<div class="columnProfil"><img src="163.png" class="imgModalProprieteFlags"/> <span class="modal-Propriete">CarolineKaeser</span> <span class="modal-ProprietePlace boxShadow"><img src="cup.png" class="imgModalProprieteCup"/> 1863ème</span></div>
				</nuxt-link>				  
				<nuxt-link to="/user/preferences" class="boxShadow"  style="flex-basis: 60px"><img src="parametre.png" class="imgParametre"/></nuxt-link>
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
			  <a href="mesClassements.html" style="flex-basis: 60px"><img src="cup.png" class="imgCup2 boxShadow"/></a>
			  <a href="mesEvent.html" style="flex-grow: 1"><img src="images/where/stadium.jpg" class="imgLocalisation"/></a>
			  <a href="mrfan.html" style="flex-basis: 60px"><img src="images/mrfan/mrFan.png" class="imgCup2 boxShadow"/></a>
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
					<div style="flex-grow: 1"><img src="images/news/newsCompetition.png" class="imgNews"/></div>
				  </a>
				  <a href="boxNews.html" class="flex-contrainer-column" style="flex-grow: 1">
					<div class="DodgerBlue" style="flex-grow: 1"><span class="newsTitle">NEWS</span></div>
					<div style="flex-grow: 1"><img src="images/news/newsTif.png" class="imgNews"/></div>
				  </a>
				  <a href="boxNews.html" class="flex-contrainer-column" style="flex-grow: 1">
					<div class="DodgerBlue" style="flex-grow: 1"><span class="newsTitle">NEWS</span></div>
					<div style="flex-grow: 1"><img src="images/news/newsEvent.png" class="imgNews"/></div>
				  </a>
				  <a href="boxNews.html" class="flex-contrainer-column" style="flex-grow: 1">
					<div class="DodgerBlue" style="flex-grow: 1"><span class="newsTitle">NEWS</span></div>
					<div style="flex-grow: 1"><img src="images/news/newsGoodies.png" class="imgNews"/></div>
				  </a>
				</div>
			</div>
			<!-- End News -->
						
			<div id="dock-container">
				<div id="dock">
					<ul>
					  <li>
						<a href="fanshop.html"><img src="images/menu/menuShop.png">
						<span class="textMenu">FanShop</span></a>
					  </li>
					  <li>
						<a href="collection.html"><img src="images/menu/menuCollection.png">
						<span class="textMenu">Collection</span></a>
					  </li>
					  <li id="active">
						 <a href="index.html"><img src="images/menu/menuHome.png">
						 <span class="textMenu">ThisIsFan</span></a>
					  </li>
					  <li>
						 <a href="social.html"><img src="images/menu/menuSocial.png">
						 <span class="textMenu">Social</span></a>
					  </li>
					  <li>
						 <a href="resultat.html"><img src="images/menu/menuResultat.png">
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
                	this.$router.replace('/login')
	        	})
	        }
		}
	}
</script>

<style>

</style>