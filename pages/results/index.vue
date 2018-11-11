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
						<div class="quit-box"><i class="fa fa-times"></i></div>
					</div>
					<div class="columnButton text-right" v-if="loadedUser && loadedUser.status && loadedUser.status.value === 'admin'">
						<div class="quit-box"><i class="fa fa-tachometer-alt"></i></div>
					</div>
				</div>	
			
			</div><!-- /#header -->
			
			<!-- Content -->
			<div class="pxBottom">
				<div id="resultatHeader">
					<div class="flex-container-Resultat">
						<span class="resultatTitle">Tous les résultats</span>
					</div>
				</div>
				
				<!-- loadedUserTeams: {{ loadedUserTeams }}<br /><br /> -->
				<!-- loadedCompetitions: {{ loadedCompetitions }}<br /><br /> -->
				<!-- loadedCountries: {{ loadedCountries }}<br /><br /> -->
				<!-- selectedActivity: {{ selectedActivity }}<br /><br /> -->
				<!-- selectedCategory: {{ selectedCategory }}<br /><br /> -->
				<!-- selectedCountry: {{ selectedCountry }}<br /><br /> -->
				<!-- selectedCompetition: {{ selectedCompetition }}<br /><br /> -->
				<!-- selectedCompetition.slug: {{ selectedCompetition.slug }}<br /><br /> -->
				<!-- loadedCompetitionResults: {{ loadedCompetitionResults }}<br /><br /> -->
				<!-- loadedCountryCompetitions: {{ loadedCountryCompetitions('france') }}<br /><br /> -->
				<!-- selectedCompetitionId: {{ selectedCompetitionId }}<br /><br /> -->

				<div class="flex-container-modal-Title banner text-center">
					<h2>Choisissez une activité</h2>
				</div>
				<div class="flex-container-modal-OtherTeam-Img">
					<div class="OtherTeam" v-for="activity in loadedActivities" :class="[selectedActivity === activity.slug ? 'active' : 'inactive']">
						<img :src="'images/activities/' + 'default' + '.png'" class="imgModalAvatar" />
						<div class="overlayOtherTeam" style="cursor: pointer;" @click="selectedActivity = activity.slug">
							<div class="textActivity">{{ activity.name }}</br></br></br></div>
						</div>
					</div>
				</div>

				<div class="flex-container-modal-Title banner text-center">
					<h2>Choisissez une catégorie</h2>
				</div>
				<div class="flex-container-modal-OtherTeam-Img">
					<div class="OtherTeam" v-for="category in loadedCategories" :class="[selectedCategory === category.slug ? 'active' : 'inactive']">
						<img :src="'images/categories/' + 'default' + '.png'" class="imgModalAvatar"/>
						<div class="overlayOtherTeam" style="cursor: pointer;" @click="selectedCategory = category.slug">
							<div class="textActivity">{{ category.name }}</br></br></br></div>
						</div>
					</div>
				</div>


				<div class="flex-container-modal-Title banner text-center" style="cursor: pointer;">
					<h2>Principales compétitions</h2>
				</div>
				<div class="flex-container-modal-OtherTeam-Img">
					<div class="OtherTeam" v-for="competition in loadedMainCompetitions" :class="[selectedCompetition.slug === competition.slug ? 'active' : 'inactive']">
						<img :src="'images/competitions/' + competition.image" class="imgModalAvatar" />
						<div class="overlayOtherTeam" style="cursor: pointer;" @click="fetchCompetitionResults(competition)">
							<div class="textActivity">{{ competition.name }}</br></br></br></div>
						</div>
					</div>
				</div>

				<div class="flex-container-modal-Title banner text-center" style="cursor: pointer;" v-if="selectedCompetition.groups">
					<h2>Groupes</h2>
				</div>
				<div class="flex-container-modal-OtherTeam-Img" v-if="selectedCompetition.groups">
					<div class="OtherTeam" v-for="competition in selectedCompetition.groups" :class="[selectedGroup === competition.slug ? 'active' : 'inactive']" style="color: #000; cursor: pointer;" @click="fetchCompetitionResults(competition)">
						<span>{{ competition.name }}</span>
					</div>
				</div>


				<div class="flex-container-modal-Title banner text-center" style="cursor: pointer;" @click="showCountries = !showCountries">
					<h2>Compétitions par pays<i :class="[showCountries ? 'fas fa-chevron-up' : 'fas fa-chevron-down']" style="float: right;"></i></h2>
				</div>
				<vue-slide-up-down :active="showCountries" :duration="1000">
					<div class="flex-container-modal-OtherTeam-Img">
						<div class="OtherTeam" v-for="country in loadedCountries" :class="[selectedCountry === country.slug ? 'active' : '']">
							<img :src="'images/flags/' + country.slug + '.png'" class="imgModalAvatar"/>
							<!-- <div class="overlayOtherTeam" @click="selectedCountry = country.slug" style="cursor: pointer;"> -->
							<div class="overlayOtherTeam" @click="selectCountry(country)" style="cursor: pointer;">
								<div class="textActivity">Football</br></br>{{ country.name }}</br></div>
							</div>
						</div>
					</div>
				</vue-slide-up-down>


				<div class="flex-container-modal-Title banner text-center" v-if="selectedCountry && showCountries">
					<h2>Compétitions du pays sélectionné</h2>
				</div>
				<div class="flex-container-modal-OtherTeam-Img" v-if="selectedCountry && showCountries">
					<div class="OtherTeam" v-for="competition in loadedCountryCompetitions(this.selectedCountry)" style="cursor: pointer;" :class="[selectedCompetition && selectedCompetition.slug === competition.slug ? 'active' : '']" @click="fetchCompetitionResults(competition)">
						<!-- {{ competition }} -->
						<img :src="'images/competitions/' + competition.image" class="imgModalAvatar"/>
						<div class="overlayOtherTeam" style="cursor: pointer;">
							<div class="textActivity">Football</br></br>{{ competition.name }}</br></div>
						</div>
					</div>
				</div>


				<div class="flex-container-modal-Title banner text-center" v-if="selectedCompetition">
					<h2>Derniers résultats</h2>
				</div>

				<div class="flex-container-modal-OtherTeam-Img" style="background: #fff;" v-if="selectedCompetition">
					<table class="table tableText">
					  	<tbody>
							<tr class="borderResultatTermine" style="border: 1px solid orangered;" v-for="event in loadedCompetitionResults" :key="event.id">
							  	<td class="tdResultat1 text-left">
							  		<a href="mesEquipesDetails.html" class="linkEvent">
							  			<img v-lazy="'images/teams/' + event.home_team.slug + '.png'" class="imgModalAgendaFlags" /> {{ event.home_team.name }}
							  			<!-- <img v-lazy="imgObj" /> -->
							  			<span v-if="event.status === 'FINISHED'">
							  				<span class="dot dot-success" v-if="getHomeTeamScore(event.score) > getVisitorTeamScore(event.score)"></span>
							  				<span class="dot dot-warning" v-if="getHomeTeamScore(event.score) === getVisitorTeamScore(event.score)"></span>
							  				<span class="dot dot-error" v-if="getHomeTeamScore(event.score) < getVisitorTeamScore(event.score)"></span>
							  			</span>
							  		</a>
							  	</td>
							  	<td style="border: none;">{{ getHomeTeamScore(event.score) }}</td>
							  	<td class="tdResultat text-center">
							  		<a href="matchTermine.html" class="linkEvent">
							  			{{ event.date | moment("dddd, MMMM Do") }}<br />
							  			{{ convertToLocaltime(event.timestamp) }}<br />
							  			<!-- <span v-if="event.time !== 'FT'">{{ event.time }}<br /></span> -->
							  			<span :class="classObject(event)">{{ event.status }}</span>
							  		</a>
							  	</td>
							  	<td style="border: none;">{{ getVisitorTeamScore(event.score) }}</td>
							  	<td class="tdResultat1 text-right">
							  		<a href="autresEquipesDetails.html" class="linkEvent">
							  			<span v-if="event.status === 'FINISHED'">
								  			<span class="dot dot-success" v-if="getVisitorTeamScore(event.score) > getHomeTeamScore(event.score)"></span>
								  			<span class="dot dot-warning" v-if="getVisitorTeamScore(event.score) === getHomeTeamScore(event.score) && event.status === 'FINISHED'"></span>
								  			<span class="dot dot-error" v-if="getVisitorTeamScore(event.score) < getHomeTeamScore(event.score)"></span>
								  		</span>
								  		{{ event.visitor_team.name }} 
								  		<img v-lazy="'images/teams/' + event.visitor_team.slug + '.png'" class="imgModalAgendaFlags"/>
							  		</a>
							  	</td>
							</tr>
						</tbody>
					</table>
				</div>

			</div><!-- /#pxBottom -->
						
			<!-- footer -->
			<!-- <div id="footer" class="col-12 col-sm-12 col-md-12 col-lg-12">					
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
								<nuxt-link to="/home"><img src="/images/menuHome.png"></nuxt-link>
								<span class="textMenu">ThisIsFan</span></a>
							</li>
							<li>
								<a href="social.html"><img src="/images/menuSocial.png"></a>
								<span class="textMenu">Social</span></a>
							</li>
							<li id="active">
								<nuxt-link to="/results"><img src="/images/menuResultat.png"></nuxt-link>
								<span class="textMenu">Résultats</span></a>
							</li>
						</ul>
					</div>
				</div>	
			</div> -->
		</div>

		

	</div><!-- /.container-fluid -->
</template>

<script>
	import firebase from 'firebase'
	import VueSlideUpDown from 'vue-slide-up-down'
	import moment from 'moment'
  	export default {
	    layout: 'layoutFront',
	    components: {
			VueSlideUpDown
		},
	    data () {
	    	return {
	    		selectedActivity: 'sport',
	    		selectedCategory: 'football',
	    		selectedCompetition: {},
	    		selectedGroup: 'group_a',
	    		selectedCompetitionId: 46,
	    		selectedCountry: '',
	    		// showMainCompetitions: false,
	    		showCountries: false,
	    		imgObj: {
    				src: 'images/teams/real_madrid.png',
    				error: 'images/loader.gif',
    				loading: 'images/loader.gif'
  				}
	    	}
	    },
	    created () {
	    		this.$store.dispatch('activities/loadedActivities')

	    		this.$store.dispatch('categories/loadedCategories')

	    	// if (Object.keys(this.$store.getters['competitions/loadedCompetitions']).length === 0) {
	    		this.$store.dispatch('competitions/loadedCompetitions')
	    	// }

	    	// if (Object.keys(this.$store.getters['users/loadedUserTeams']).length === 0) {
	    		this.$store.dispatch('users/loadedUserTeams')
	    	// }
			
	    	// if (Object.keys(this.$store.getters['users/loadedTeams']).length === 0) {
	    		// this.$store.dispatch('users/loadedTeams')
	    	// }
	    		this.$store.dispatch('countries/loadedCountries')

	    		this.$store.dispatch('events/loadedEvents')
		},
	    computed: {
			loadedUser () {
				return this.$store.getters['users/loadedUser']
			},
			loadedLevel () {
				return this.$store.getters['level/loadedLevel']
			},
			loadedActivities () {
				return this.$store.getters['activities/loadedActivities']
			},
			loadedCategories () {
				return this.$store.getters['categories/loadedCategories']
			},
			loadedCountries () {
				return this.$store.getters['countries/loadedCountries'].filter(country => country.competitions === true)
			},
	    	loadedCompetitions () {
	    		return this.$store.getters['competitions/loadedCompetitions']
	    	},
	    	loadedMainCompetitions () {
	    		return this.$store.getters['competitions/loadedCompetitions'].filter(competition => competition.type === 'main' && competition.importance === 1)
	    	},
	    	loadedUserTeams () {
	            return this.$store.getters['users/loadedUserTeams']
	        },
			loadedTeams () {
				return this.$store.getters['users/loadedTeams']
			},
			loadedCompetitionResults () {
				return this.$store.getters['events/loadedCompetitionEvents'].sort((a, b) => a.timestamp - b.timestamp)
			},
			
	    },
	    methods: {
	    	selectCountry (country) {
	    		console.log('country: ', country)
	    		this.selectedCountry = country
	    		this.showCountries = true
	    		this.selectedCompetition = this.loadedCompetitions.find(competition => competition.importance === 1 && competition.countries ? competition.countries[country.slug] : '')
	    		// this.selectedCompetition = 'abc'
	    		console.log('selectedCompetition: ', this.selectedCompetition)
	    		if (this.selectedCompetition) {
	    			console.log('abc')
	    			this.fetchCompetitionResults(this.selectedCompetition)
	    		}
	    	},
	    	loadedCountryCompetitions (country) {
	    		// console.log('country: ', country)
				return this.$store.getters['competitions/loadedCompetitions']
					.filter(competition => competition.countries ? competition.countries[country] : '')
			},
			fetchCompetitionResults (competition) {
				console.log('competition: ', competition)

				if (competition.countries) {
					this.selectedCountry = Object.keys(competition.countries)[0]
					// this.selectedCountry = Object.keys(competition.countries)[0]
				}
				if (competition.type === 'main') {
					this.selectedCompetition = competition
				} else {
					this.selectedGroup = competition.slug
					this.selectedCountry = ''
				}
				return this.$store.dispatch('events/loadedCompetitionEvents', competition)	
			},
			convertToLocaltime (timestamp) {
				const utcDiff = new Date().getTimezoneOffset()
				// const utcDiff = '60'
				console.log('utcDiff: ', utcDiff)
				if (utcDiff > 0) {
					return moment.unix(timestamp).add(utcDiff, 'minutes').format("HH:mm")
				} else {
					return moment.unix(timestamp).subtract(utcDiff, 'minutes').format("HH:mm")
				}
			},
			getHomeTeamScore (score) {
				if (!score) return
				return parseInt(score.substring(0, 2))
			},
			getVisitorTeamScore (score) {
				if (!score) return
				return parseInt(score.slice(-2))
			},
			// loadedCompetitionResults (competitionId) {
			// 	return this.$store.dispatch('events/loadedCompetitionEvents')
			// 	this.$store.dispatch('events/loadedCompetitionEvents').then(response => {
			// 		console.log('done!')
			// 		return this.$store.getters['events/loadedCompetitionEvents']
			// 	})
			// 	console.log('done2!')
			// 	// return

			// 	// return this.$store.getters['events/loadedCompetitionEvents']
			// 	// // )
			// 	// // return
			// 	// // return this.$store.getters['events/loadedCompetitionEvents']
			// 	// // return this.$store.getters['events/loadedCompetitionEvents'].filter(event => event.competition ? event.competition.id == 46 : '')
			// 	// // this.abc = 'abc'
			// 	// firebase.database().ref('/events_new2/').orderByChild('competition_id')
			// 	// 	.equalTo(competitionId)
			// 	// 	.limitToLast(2)
			// 	// 	.on('value', function (snapshot) {
			// 	// 	// .once('value').then(function (snapshot) {
			// 	// 		// console.log('snapshot.val(): ', snapshot.val())
			// 	// 		// return snapshot.val()

	  //  //                  const eventsArray = []
	  //  //                  for (const key in snapshot.val()) {
	  //  //                      eventsArray.push({...snapshot.val()[key], id: key})
	  //  //                  }
	  //  //                  // // commit('setEvents', eventsArray)
	  //  //                  // // resolve(eventsArray)
	  //  //                  console.log('eventsArray: ', eventsArray)
	  //  //                  // this.abc = eventsArray
	  //  //                  return eventsArray
   //  //             })
			// }
			classObject (event) {
			    return {
			    	'finished' : event.status === 'FINISHED'
			    }
			}
	    }
  	}
</script>

<style scoped>
	.active {
		background-color: orangered;
	}
	.inactive {
		background-color: #fff;
	}
	.finished {
		background-color: green;
		color: #fff;
	}
	.in_play {
		background-color: yellow;
	}
	.dot {
		display: inline-block;
		border-radius: 50%;
		width: 50%;
		height: 15px;
		width: 15px;
		margin: 0 2px;
	}
	.dot-success {
    	background-color: green;
	}
	.dot-warning {
		background-color: orange;
	}
	.dot-error {
    	background-color: red;
	}
</style>
