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
						<div class="level-box"><i class="fa fa-star"></i> Niv. 1 - <i class="fa fa-angle-double-up"></i> 1 / 10</div>						
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
					<div class="columnButton text-right" v-if="loadedUser && loadedUser.status && loadedUser.status.value === 'admin'">
						<div class="quit-box" @click="goToAdmin"><i class="fa fa-tachometer-alt"></i></div>
					</div>
				</div>	
			
			</div><!-- End Header -->

			<!-- Propriété du joueur -->
			<div id="proprieteJoueur" class="col-12 col-sm-12 col-md-12 col-lg-12">

				<div class="flex-container-playerPropriety">
					<nuxt-link to="/user/avatar" class="boxShadow" style="flex-basis: 60px" v-if="loadedUser && loadedUser.avatar"><img :src="loadedUser.avatar.url" class="imgAvatar"/></nuxt-link>
					<nuxt-link to="/user/avatar" class="boxShadow" style="flex-basis: 60px" v-else><img src="/images/avatar.png" class="imgAvatar"/></nuxt-link>
					<nuxt-link to="/user" class="boxShadow flex-container-modalProfil" style="flex-grow: 1">
						<div class="columnProfil"><img src="/images/163.png" class="imgModalProprieteFlags"/> <span class="modal-Propriete" v-if="loadedUser">{{ loadedUser.pseudo }}</span> <span class="modal-ProprietePlace boxShadow"><img src="/images/cup.png" class="imgModalProprieteCup"/> 1863ème</span></div>
					</nuxt-link>
					<nuxt-link :to="localePath({name: 'user-preferences'})" class="boxShadow" style="flex-basis: 60px"><img src="/images/parametre.png" class="imgParametre"/></nuxt-link>
				</div>

			</div>
			<!-- End Propriété du joueur -->
												
			<!-- Team&Goodies du joueur -->
			<div id="teamGoodies" class="col-12 col-sm-12 col-md-12 col-lg-12">
				<div class="flex-container-teamGoodies">
				  	<nuxt-link to="user/teams" class="boxShadow" style="flex-grow: 1"><span class="textTitle">{{ $t('your_teams') }}</span></nuxt-link>
				  	<nuxt-link :to="localePath({name: 'user-inventory'})" class="boxShadow" style="flex-grow: 1"><span class="textTitle">Ton inventaire</span></nuxt-link>
				  	<nuxt-link to="/tokens" class="boxShadow" style="flex-grow: 1;"><span class="textTitle">Acheter des tokens</span></nuxt-link>
				</div>
			</div>
			<!-- End Team&Goodies du joueur -->
						
			<!-- Expérience -->
			<div id="experience" class="col-12 col-sm-12 col-md-12 col-lg-12">
				<div class="flex-container-experience">
				  	<nuxt-link to="user/actions" class="darkred" style="flex-grow: 1"><span class="textXP">XP / Actions</span></nuxt-link>
				  	<!-- loadedUser: {{ this.loadedUser }} -->
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
				  	<nuxt-link to="/user/events" class="darkturquoise" style="flex-grow: 1"><span class="textEvent">Events</span></nuxt-link>
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
								<a href="fanshop.html"><img src="/images/menuShop.png"></a>
								<span class="textMenu">FanShop</span></a>
							</li>
							<li>
								<a href="collection.html"><img src="/images/menuCollection.png"></a>
								<span class="textMenu">Collection</span></a>
							</li>
							<li id="active">
								<a href="index.html"><img src="/images/menuHome.png"></a>
								<span class="textMenu">ThisIsFan</span></a>
							</li>
							<li>
								<a href="social.html"><img src="/images/menuSocial.png"></a>
								<span class="textMenu">Social</span></a>
							</li>
							<li>
								<a href="resultat.html"><img src="/images/menuResultat.png"></a>
								<span class="textMenu">Résultat</span></a>
							</li>
						</ul>
					</div><!-- /#dock -->
				</div><!-- /#dock-container -->			
			</div><!-- /#footer -->
		</div>
	</div><!-- /.container-fluid -->
</template>

<script>
	import axios from 'axios'
	import Noty from 'noty'
	export default {
		layout: 'layoutFront',
		created () {
            // if (!this.loadedUser.level) {
            // 	console.log('User level is not defined')
            // 	this.$store.dispatch('users/loadedUser')
            // } else {
            // 	console.log('User level: ', this.loadedUser.level)
            // }
		},
		computed: {
			loadedUser () {
				return this.$store.getters['users/loadedUser']
			}
		},
		methods: {
			goToAdmin () {
				this.$router.replace('/admin')
			},
			logout() {
				// return this.$store.dispatch('users/signOut')
				this.$store.dispatch('firebase-auth/signOut').then(() => {
					// console.log('abc')
	          		// this.$router.push('/')
	          		// this.$router.replace({ path: '/' })
                	this.$router.replace('/')
	        	})
	        },
	        increaseTokens () {
	        	axios.post('/update-user-tokens', {
                    tokens: 10,
                    userId: 'EaCQBRrmLYV6QPPS3JVY1jMMtV62'
                }).then((response) => {
                    console.log('success')
                    console.log(response)
                    new Noty({type: 'success', text: 'Your tokens were updated to a value of 10', timeout: 5000, theme: 'metroui'}).show()
                }).catch(function (error) {
                    console.log('error')
                    console.log(error)
                    new Noty({type: 'error', text: 'Could not remove token from your account', timeout: 5000, theme: 'metroui'}).show()
                })
	        },
	        increaseLevel () {
	        	axios.post('/update-user-level', {
                    level: 10,
                    userId: 'EaCQBRrmLYV6QPPS3JVY1jMMtV62'
                }).then((response) => {
                    console.log('success')
                    console.log(response)
                    new Noty({type: 'success', text: 'Your level was updated to level 10', timeout: 5000, theme: 'metroui'}).show()
                }).catch(function (error) {
                    console.log('error')
                    console.log(error)
                    new Noty({type: 'error', text: 'Could not update your level', timeout: 5000, theme: 'metroui'}).show()
                })
	        }
		}
	}
</script>

<style scoped>
	[v-cloak] > * { display:none; }
    [v-cloak]::before { 
        content: " ";
        display: block;
        width: 16px;
        height: 16px;
        background-image: url('data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==');
    }
    .quit-box {
    	cursor: pointer;
    	color: #000;
    	margin-left: 5px;
    }
    .quit-box:hover {
    	color: #fff;
    }
</style>
