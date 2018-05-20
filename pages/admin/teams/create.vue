<template>
	<div>
		<v-breadcrumbs divider="/">
	      	<v-breadcrumbs-item
		        v-for="item in items"
		        :to="item.to"
		        :key="item.text"
		        :exact="true"
	      	>
	        	{{ item.text }}
	      	</v-breadcrumbs-item>
	    </v-breadcrumbs>
		<v-flex xs12 sm8 offset-sm2>
			<br /><br />

			<v-card>
				<v-form>
					<v-card-title class="primary-title">
						<v-card-text class="text-md-center">
							<h2>Créer une équipe</h2>
						</v-card-text>
					</v-card-title>
					<v-container fluid>
					    <v-layout row wrap>
							<v-flex xs6>
								<v-subheader class="text-xl-center">Activité</v-subheader>
							</v-flex>
							<v-flex xs6 v-if="loadedActivities != ''">
								<v-select
								  :items="loadedActivities"
								  v-model="selectedActivity"
								  label="Sélectionner une activité"
								  item-text="name"
								  item-value="{}"
								  :autocomplete="true"
								  single-line
								></v-select>
							</v-flex>
							<v-flex v-else>
								<v-progress-linear :indeterminate="true" height="2"></v-progress-linear>
							</v-flex>
<!-- 						</v-layout>
						<v-layout row wrap> -->
							<v-flex xs6>
								<v-subheader class="text-md-right">Catégorie</v-subheader>
							</v-flex>
							<v-flex xs6>
								<v-select
								  :items="categories"
								  v-model="selectedCategory"
								  label="Sélectionner une catégorie"
								  item-text="name"
								  item-value="{}"
								  single-line
								  :disabled="selectedActivity.slug == ''"
								></v-select>
								<!--<v-subheader style="color: green; padding: 0px;" v-if="selectedCategory.slug === 'football'"><i class="fa fa-exclamation-triangle"></i>&nbsp;Possibilité d'utiliser Football API &nbsp;<i class="fa fa-arrow-down"></i></v-subheader>-->
							</v-flex>
							<v-flex xs6>
								<v-subheader class="text-md-right">Competition</v-subheader>
							</v-flex>
							<v-flex xs6>
								<v-select
								  :items="competitions"
								  v-model="selectedCompetition"
								  label="Sélectionner une compétition"
								  item-text="name"
								  item-value="{}"
								  single-line
								  :disabled="selectedCategory.slug == '' || selectedActivity.slug == ''"
								></v-select>
							</v-flex>

							<v-flex xs6>
								<v-subheader class="text-xl-center">Pays/Region</v-subheader>
							</v-flex>
							<v-flex xs6>
								<v-select
								  :items="loadedCountries"
								  v-model="selectedCountry"
								  label="Sélectionner un pays"
								  item-text="name"
								  item-value="{}"
								  :autocomplete="true"
								  single-line
								></v-select>
							</v-flex>

							<v-flex xs6>
								<v-subheader class="text-xl-center">Nom</v-subheader>
							</v-flex>
							<v-flex xs6>
								<v-text-field
							      v-model="selectedName"
							      label="Nom"
							    ></v-text-field>
							</v-flex>

							<v-flex xs6>
								<v-subheader class="text-xl-center">Slug</v-subheader>
							</v-flex>
							<v-flex xs6>
								<v-text-field
							      v-model="selectedSlug"
							      label="Slug"
							    ></v-text-field>
							</v-flex>

							<v-flex xs6>
								<v-subheader class="text-xl-center">Image</v-subheader>
							</v-flex>
							<v-flex xs6>
								<input type="file" @change="previewImage" accept="image/*" style="padding-top: 15px;">
								<div class="image-preview" v-if="imageData.length > 0"><br />
                					<img class="preview" :src="imageData" width="100px">
                					{{ this.imageData }}
            					</div>
            					<!-- <input type="file" id="file" ref="file1" v-on:change="handleFileUpload()" />
            					<v-btn v-on:click="submitFile()">Submit</v-btn>
            					{{ this.file }} -->
							</v-flex>
					      	<v-spacer></v-spacer>
					    </v-layout>
				  	</v-container>
				  	<v-card-text class="text-md-center">
				  		<v-btn @click="submitCreateTeam" color="info">submit</v-btn>
    					<v-btn @click="">clear</v-btn>
    					<nuxt-link to="/admin/teams" class="btn">Retour</nuxt-link>
    				</v-card-text>
				</v-form>
			</v-card>

		</v-flex>

		<!--<v-flex xs12 sm8 offset-sm2 v-if="selectedCategory.slug === 'football'">
			<v-card>
				<v-form>
					<v-card-title class="primary-title">
						<v-card-text class="text-md-center">
							<h3>Créer une liste d'équipes à l'aide de <a href="https://football-api.com/documentation2/#!/Competitions/get_competitions" target="_blank">Football API</a></h3>
							<p>La requête peut échouer en cas d'absence ou d'invalidité de la clé privée (voir console de debogage)</p>
							<p>Pour qu'une requête soit acceptée, il faut sélectionner le championnat anglais de Premier League et ne pas avoir une différence de plus de 30 jours entre les deux dates.</p>
						</v-card-text>
					</v-card-title>
					<v-container fluid>
					    <v-layout row wrap>
							<v-flex xs6>
								<v-subheader class="text-xl-center">Compétition</v-subheader>
							</v-flex>
							<v-flex xs6 v-if="loadedCompetitions != ''">
								<v-select
								  :items="loadedCompetitions"
								  v-model="selectedCompetition"
								  label="Sélectionner une compétition"
								  item-text="name"
								  item-value="{}"
								  :autocomplete="true"
								  single-line
								></v-select>
							</v-flex>
							<v-flex v-else>
								<v-progress-linear :indeterminate="true" height="2"></v-progress-linear>
							</v-flex>
						</v-layout>
					</v-container>
					<v-card-text class="text-md-center">
				  		<v-btn color="info" @click="submitRequestToFootballAPI">submit request to Football API </v-btn>
    					<v-btn @click="">clear</v-btn>
    				</v-card-text>
    				<v-card-actions>
    					<v-card-text class="text-md-center">
    						<h3>Voici les résultats de la requête:</h3>
    						{{ footballAPIRequestResult }}
    					</v-card-text>
    				</v-card-actions>
				</v-form>
			</v-card>
		</v-flex>-->
	</div>
</template>

<!-- <script src="https://unpkg.com/vue-picture-input"></script> -->
<script>
	import moment from 'moment'
  	// import moment from '~/plugins/vue-moment'
  	import firebase from 'firebase'
  	import VueNotifications from 'vue-notifications'
  	import Noty from 'noty'
  	import slugify from '~/helpers/slugify'
  	import axios from 'axios'
	export default {
		layout: 'layoutBack',
		// components: {
  //       	'picture-input': PictureInput
  //     	},
		created () {
			// setTimeout(function() {
			// 	alert('Timeout!')
			// 	commit('setActivities')
			this.$store.dispatch('activities/loadedActivities')
    		this.$store.dispatch('categories/loadedCategories')
    		this.$store.dispatch('types/loadedTypes')
    		this.$store.dispatch('stadiums/loadedStadiums')
			this.$store.dispatch('teams/loadedTeams')
			// }, 3000)
			this.$store.dispatch('events/loadedEvents')
			// console.log(process.env.FOOTBALL_API_KEY)
			this.$store.dispatch('competitions/loadedCompetitions')
			this.$store.dispatch('countries/loadedCountries')
		},
		data () {
			return {
				selectedActivity: '',
        		selectedCategory: '',
        		categories: [],
		        selectedCompetition: '',
		        competitions: [],
		        selectedCountry: '',
		        selectedName: '',
		        selectedSlug: '',
		        selectedImage: '',
		        imageData: '',
		        links: [
			        {
			          text: 'Dashboard',
			          to: '/admin',
			          disabled: false
			        },
			        {
			          text: 'Events',
			          to: '/admin/events',
			          disabled: false
			        },
			        {
			          text: 'Create',
			          to: '/admin/events/create',
			          disabled: true
			        }
			    ],
				items: [
				    {
				      text: 'Dashboard',
				      disabled: false,
				      to: '/admin'
				    },
				    {
				      text: 'Teams',
				      disabled: false,
				      to: '/admin/teams'
				    },
				    {
				      text: 'Create',
				      disabled: true,
				      to: '/admin/teams/create'
				    }
				],
			    footballAPIRequestResult: '',
			    loading: false,
			    file: '',
			}
		},
		computed: {
			loadedActivities () {
		        return this.$store.getters['activities/loadedActivities']
		    },
		    loadedCategories () {
		        return this.$store.getters['categories/loadedCategories']
		    },
		    loadedTypes () {
		        return this.$store.getters['types/loadedTypes']
		    },
		    loadedStadiums () {
		    	return this.$store.getters['stadiums/loadedStadiums']
		    },
		    loadedTeams () {
		    	return this.$store.getters['teams/loadedTeams']
		    },
		    loadedEvents () {
		    	return this.$store.getters['events/loadedEvents']
		    },
		    loadedCompetitions () {
		    	return this.$store.getters['competitions/loadedCompetitions']
		    },
		    loadedCountries () {
		    	return this.$store.getters['countries/loadedCountries']
		    },
		    // validAPIRequestData () {
		    // 	const a = moment(this.competitionStartDate)
		    // 	// console.log(a)
		    // 	const b = moment(this.competitionEndDate)
		    // 	// console.log(b)
		    // 	const diffDays = b.diff(a, 'days')
		    // 	// console.log(diffDays)
		    // 	return this.selectedCompetition.football_api_id === 1204 && a < b && diffDays <= 31
		    // }
		},
		methods: {
			submitFile(){
	        	/*
	                Initialize the form data
	            */
	            let formData = new FormData();

	            /*
	                Add the form data we need to submit
	            */
	            formData.append('file', this.file);
	            console.log(formData)

		        /*
		          Make the request to the POST /single-file URL
		        */
		        axios.post( '/upload-image', formData, { headers: { 'Content-Type': 'multipart/form-data'}})
		        .then(function() {
		          	console.log('SUCCESS!!')
		        })
		        .catch(function(){
		          	console.log('FAILURE!!')
		        })
		    },
			/*
		        Handles a change on the file upload
		    */
		    handleFileUpload () {
		    	console.log('handleFileUpload')
		        this.file = this.$refs.file1.files[0]
		        // this.file = 'abc'
		    },
			submitCreateTeam () {
				console.log('submitCreateTeam')
				const abc = 'abc'

				// this.$axios.$post('/upload-image', { image: this.imageData })
				// axios.post('/upload-image', { image: this.imageData }, {
				//     headers: {
				//         'Content-Type': 'multipart/form-data'
				//     }
				// })
				// axios.post('/upload-image', { image: this.imageData })
				// .then(function(){
				//   	console.log('SUCCESS!!');
				// })
				// .catch(function(){
				//   	console.log('FAILURE!!');
				// });

				return axios.post('/upload-image', {
				    image: this.imageData,
				    name: this.selectedSlug
				}).then(function (response) {
					console.log('success')
				    console.log(response)
				}).catch(function (error) {
					console.log('error')
				    console.log(error)
				})

				// return this.$axios.$post('/upload-image', { firstName: 'Fred', lastName: 'FLintstone' }).then((response) => {
    //                 console.log('success')
    //                 console.log(response)
    //             }).catch(function (error) {
				// 	console.log('error')
				//     console.log(error.response)
				// })

				// const teamData = {
				// 	activity: {
			 //            slug: this.selectedActivity.slug,
			 //            name: this.selectedActivity.name
			 //        },
				// 	category: {
				// 		slug: this.selectedCategory.slug,
				// 		name: this.selectedCategory.name
				// 	},
				// 	country: {
				// 		slug: this.selectedCountry.slug,
				// 		name: this.selectedCountry.name
				// 	},
			 //        name: this.selectedName,
			 //        slug: this.selectedSlug,
			 //        image: this.imageData,
			 //        _created_at: new Date().getTime(),
			 //        _updated_at: new Date().getTime()
				// }
				// console.log(teamData)
				// this.$store.dispatch('teams/createTeam', teamData)
				// return this.$router.push('/admin/competitions')
			},
			// formattedDate (date, time) {
		 //    	// Takes a string date with format DD.MM.YYYY and first transform it to YYYY-MM-DD and then to timestamp
	  //   		const [day, month, year] = date.split(".")
			// 	const reOrderedDate = year + '-' + month + '-' + day
		 //    	const completeDate = reOrderedDate + ' ' + time
		 //    	const formattedDate = parseInt(moment(completeDate).format('x')/1000)
		 //    	return formattedDate
		 //    },

			// submitRequestToFootballAPI () {
			// 	console.log('submitRequestToFootballAPI')
			// 	this.loading = true
			// 	const teamsArray = []
			// 	this.loadedTeams.forEach((team) => {
			// 		// console.log(event)
			// 		teamsArray.push(team.api_football_name)
			// 	})
			// 	console.log(teamsArray)

			// 	// Get local data that micmic football api response
			// 	// this.$axios.$get('/football_api_sample_data_get_matches.json').then((response) => {
			// 	// this.$axios.$get('http://api.football-api.com/2.0/matches?comp_id=' + this.selectedCompetition.football_api_id + '&from_date=' + this.competitionStartDate + '&to_date=' + this.competitionEndDate + '&Authorization=' + '565ec012251f932ea4000001d191fefd02dd4b6f65bf2e5aa5478f1d').then((response) => {
			// 	this.$axios.$get('https://apifootball.com/api/?action=get_standings&league_id=' + this.selectedCompetition.api_football_id + ' &APIkey=' + process.env.API_FOOTBALL_KEY).then((response) => {
			// 		// console.log(response)
		 //            this.footballAPIRequestResult = response
		 //            // console.log(eventsArray)
		 //            // const eventsArray = []

			// 		response.forEach((team) => {
			// 			// console.log(event)
			// 			// const hometeam = this.loadedTeams.find(team => team.api_football_name === event.match_hometeam_name)
			// 			// const awayteam = this.loadedTeams.find(team => team.api_football_name === event.match_awayteam_name)
			// 			// console.log(hometeam)
			// 			// console.log(awayteam)
			// 			// const date_as_timestamp = new Date(event.match_date).getTime() / 1000
			// 			// console.log(date_as_timestamp)
			// 			// const name_unique = hometeam.id + '_vs_' + awayteam.id + '_on_' + date_as_timestamp
			// 			// console.log(name_unique)
			// 			// const name_pretty = hometeam.name + ' vs ' + awayteam.name
			// 			// console.log(name_pretty)
			// 			// return
			// 			const name_unique = this.loadedTeams.find(loadedTeam => loadedTeam.api_football_name === team.team_name)
			// 			console.log(name_unique)
			// 			if (!teamsArray.includes(name_unique)) {
			// 				const newPostKey = firebase.database().ref().child('events_new').push().key
						
			// 				let teamData = {
			// 	                id: newPostKey,
			// 	                slug: this.slugify(team.team_name),
			// 	                activity: {
			// 			            slug: 'sport',
			// 			            name: 'Sport'
			// 			        },
			// 					category: {
			// 						slug: 'football',
			// 						name: 'Football'
			// 					},
			// 			        type: {
			// 			            slug: 'premier_league',
			// 			            name: 'Premier League'
			// 			        },
			// 	                country_name: team.country_name,
			// 	                // country_id: event.country_id,
			// 	                competition_name: team.league_name,
			// 	                competition_id: team.league_id,
			// 	                api_football_name: team.team_name,
			// 	                name: team.team_name,
			// 	            }
			// 	            let updates = {}
			//             	updates['/teams/' + teamData.id] = teamData
			//             	firebase.database().ref().update(updates).then(() => {
			//             		console.log('success!')
			//             		this.loading = false
		 //            			new Noty({type: 'success', layout: 'topRight', text: 'Equipe ' + team.team_name + ' créée avec succès.', timeout: 5000, theme: 'metroui', maxVisible: 10}).show()

			//             	}).catch((error) => {
			//             		console.log('error')
			//             		this.loading = false
			//             		console.log(error.message)
			//             		new Noty({type: 'error', text: 'Erreur avec firebase: ' + error.message, timeout: 5000, theme: 'metroui'}).show()
			//             	})
			// 			} else {
			// 				console.log('This team already exists in database!')
			// 				// this.showSuccessMsg()
			// 				this.loading = false
			// 				this.showWarnMsg({message: 'Team ' + team.team_name + ' already exists in database!'})
			// 			}
		 //            })
		 //            console.log(teamsArray)
			// 	})
			// },
			previewImage (event) {
	            // Reference to the DOM input element
	            let input = event.target;
	            // Ensure that you have a file before attempting to read it
	            if (input.files && input.files[0]) {
	                // create a new FileReader to read this image and convert to base64 format
	                let reader = new FileReader();
	                // Define a callback function to run, when FileReader finishes its job
	                reader.onload = (e) => {
	                    // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
	                    // Read image as base64 and set to imageData
	                    this.imageData = e.target.result;
	                }
	                // Start the reader job - read file as a data url (base64 format)
	                reader.readAsDataURL(input.files[0]);
	            }
        	}
		},
		watch: {
			selectedActivity: function () {
		        // console.log('Watch selectedActivity')
		        this.categories = []
        		this.competitions = []
		        this.selectedCategory = ''
        		this.selectedCompetition = ''
		        if (this.selectedActivity.slug != '') {
		          	const activity = this.selectedActivity.slug
		          	// console.log(activity)
		          	this.categories = this.loadedCategories.filter(function (el) {
		            	return el.activity == activity
		          	})
		        }
		    },
		    selectedCategory: function () {
		    	// console.log('Watch selectedCategory')
		    	console.log(this.selectedCategory)
		        if (this.selectedCategory.slug != '') {
		          const category = this.selectedCategory.slug
		          console.log(category)
		          this.competitions = this.loadedCompetitions.filter(function (el) {
		            return el.category == category
		          })
		        }
		    },
		    // selectedType: function () {
		    // 	console.log('Watch selectedType')
		    //     if (this.selectedType.slug != '') {
		    //       const type = this.selectedType.slug
		    //       this.stadiums = this.loadedStadiums.filter(function (el) {
		    //         return el.events[type]
		    //       })
		    //     }
		    // }
		    selectedName: function () {
		    	console.log('Watch selectedName')
		    	this.selectedSlug = slugify(this.selectedName)
		    }
		},
		notifications: {
		    showWarnMsg: {
				type: VueNotifications.types.warn
		    }
		}
	}
</script>

<style scoped>
	.toast {
		background-color: yellow;
	}
	/*.jbtn-file {
	    cursor: pointer;
	    position: relative;
	    overflow: hidden;
	}*/
	/*.jbtn-file input[type=file] {
	    position: absolute;
	    top: 0;
	    right: 0;
	    min-width: 100%;
	    min-height: 100%;
	    text-align: right;
	    filter: alpha(opacity=0);
	    opacity: 0;
	    outline: none;
	    cursor: inherit;
	    display: block;
	}*/
</style>