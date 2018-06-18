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
							<h2>Créer une personne (joueur, etc...)</h2>
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
								<v-subheader class="text-xl-center">Prénom</v-subheader>
							</v-flex>
							<v-flex xs6>
								<v-text-field
							      v-model="selectedSurname"
							      label="Prénom"
							    ></v-text-field>
							</v-flex>
							
							<v-flex xs6>
								<v-subheader class="text-xl-center">Nom TIF</v-subheader>
							</v-flex>
							<v-flex xs6>
								<v-text-field
							      v-model="selectedTifname"
							      label="Nom TIF"
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
								<v-subheader class="text-xl-center">Site Internet</v-subheader>
							</v-flex>
							<v-flex xs6>
								<v-text-field
							      v-model="selectedWebsite"
							      label="Site Internet"
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
				  		<v-btn @click="submitCreatePlayer" color="info">submit</v-btn>
    					<v-btn @click="">clear</v-btn>
    					<nuxt-link to="/admin/players" class="btn">Retour</nuxt-link>
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
		created () {
			this.$store.dispatch('activities/loadedActivities')
    		this.$store.dispatch('categories/loadedCategories')
    		this.$store.dispatch('types/loadedTypes')
    		this.$store.dispatch('stadiums/loadedStadiums')
			this.$store.dispatch('teams/loadedTeams')
			this.$store.dispatch('events/loadedEvents')
			this.$store.dispatch('competitions/loadedCompetitions')
			this.$store.dispatch('countries/loadedCountries')
			this.$sotre.dispatch('players/loadedPlayers')
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
				selectedSurname: '',
				selectedTifname: '',
				selectedWebsite: '',
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
				      text: 'Players',
				      disabled: false,
				      to: '/admin/players'
				    },
				    {
				      text: 'Create',
				      disabled: true,
				      to: '/admin/players/create'
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
			loadedPlayers () {
				return this.$store.gettes['players/loadedPlayers']
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
		},
		methods: {
			/*
		        Handles a change on the file upload
		    */
		    handleFileUpload () {
		    	console.log('handleFileUpload')
		        this.file = this.$refs.file1.files[0]
		    },
			submitCreatePlayer () {
				console.log('submitCreatePlayer')

				const playerData = {
					activity: {
			            slug: this.selectedActivity.slug,
			            name: this.selectedActivity.name
			        },
					category: {
						slug: this.selectedCategory.slug,
						name: this.selectedCategory.name
					},
					country: {
						slug: this.selectedCountry.slug,
						name: this.selectedCountry.name
					},
					competitions: {
						[this.selectedCompetition.slug]: true
					},
			        name: this.selectedName,
					surname: this.selectedSurname,
					tifname: this.selectedTifname,
					website: this. selectedWebsite,
			        slug: this.selectedSlug,
			        // image: this.selectedSlug,
			        _created_at: new Date().getTime(),
			        _updated_at: new Date().getTime()
				}

				axios.post('/upload-image', {
				    image: this.imageData,
				    name: this.selectedSlug
				}).then((response) => {
					console.log('success')
				    console.log(response.data)
				    playerData['image'] = response.data
				    console.log(playerData)
				    this.$store.dispatch('players/createPlayer', playerData)
				    // return this.$router.push('/admin/players')
				}).catch(function (error) {
					console.log('error')
				    console.log(error)
				})
			},
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
</style>