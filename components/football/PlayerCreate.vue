<template>
	<v-card>
		<v-form v-cloak>
			<v-card-title class="primary-title">
				<v-card-text class="text-md-center">
					<h2>Joueur de football <i class="fa fa-futbol"></i></h2>
				</v-card-text>
			</v-card-title>
			<v-container>
				<v-layout row wrap>
					<v-flex xs6>
						<v-subheader class="text-xl-center">Nom du joueur</v-subheader>
					</v-flex>
					<v-flex xs6>
						<v-text-field
					      v-model="selectedName"
					      label="Nom du joueur"
					    ></v-text-field>
					</v-flex>
					
					<v-flex xs6>
						<v-subheader class="text-xl-center">Prénom du joueur</v-subheader>
					</v-flex>
					<v-flex xs6>
						<v-text-field
					      v-model="selectedSurname"
					      label="Prénom du joueur"
					    ></v-text-field>
					</v-flex>
					
					<v-flex xs6>
						<v-subheader class="text-xl-center">Nom TIF du joueur</v-subheader>
					</v-flex>
					<v-flex xs6>
						<v-text-field
					      v-model="selectedTIFName"
					      label="Nom TIF du joueur"
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
						<v-subheader class="text-xl-center">Site internet</v-subheader>
					</v-flex>
					<v-flex xs6>
						<v-text-field
					      v-model="selectedWebsite"
					      label="Site internet"
					    ></v-text-field>
					</v-flex>
					
					<v-flex xs6>
						<v-subheader class="text-xl-center">Région / Pays</v-subheader>
					</v-flex>
					<v-flex xs6>
						<v-select
						  :items="loadedCountries"
						  v-model="selectedCountries"
						  label="Sélectionner le pays"
						  item-text="name"
						  item-value="slug"
						  :autocomplete="true"
						  chips
						  single-line
						  :return-object="true"
						></v-select>
					</v-flex>	
					
					<v-flex xs6>
						<v-subheader class="text-xl-center">Joue pour quelle(s) équipe(s) ?</v-subheader>
					</v-flex>
					<v-flex xs6>
						<v-select
        				  :items="loadedTeams"
						  v-model="selectedTeams"
						  item-text="name"
						  item-value="slug"
						  label="Sélectionner les équipes"
						  multiple
				          chips
				          :return-object="true"
						></v-select>
					</v-flex>
															
					<v-flex xs6>
						<v-subheader class="text-xl-center">Participe à quelle(s) compétition(s) ?</v-subheader>
					</v-flex>
					<v-flex xs6>
						<v-select
        				  :items="loadedCompetitions"
						  v-model="selectedCompetitions"
						  item-text="name"
						  item-value="slug"
						  label="Sélectionner la compétition"
						  multiple
				          chips
				          :return-object="true"
						></v-select>
					</v-flex>
				</v-layout>

				<v-layout>
					<v-flex xs6>
						<v-subheader class="text-xl-center">Image</v-subheader>
					</v-flex>
					<v-flex xs6>
						<input type="file" @change="previewImage" accept="image/*" style="padding-top: 15px;">
						<div class="image-preview" v-if="imageData.length > 0"><br />
							<img class="preview" :src="imageData" width="100px">
							<!-- {{ this.imageData }} -->
						</div>
					</v-flex>
				</v-layout>
			</v-container>
			<v-card-text class="text-md-center">
		  		<v-btn @click="submitCreatePlayer" color="info" :disabled="this.checkPlayerSlugUniqueness(this.selectedSlug)">Soumettre</v-btn>
				<v-btn @click="clearAll" color="warning">Nettoyer</v-btn>
				<nuxt-link to="/admin/players" class="btn">Retour</nuxt-link>
			</v-card-text>
		</v-form>
	</v-card>
</template>

<script>
	import firebase from 'firebase'
  	import Noty from 'noty'
  	import slugify from '~/helpers/slugify'
  	import moment from 'moment'
  	import axios from 'axios'
	export default {
		layout: 'layoutBack',
		props: ['activity', 'category'],
		mounted () {

		},
		created () {
			this.$store.dispatch('countries/loadedCountries')
			this.$store.dispatch('teams/loadedTeams')
			this.$store.dispatch('competitions/loadedCompetitions')
		},
		data () {
			return {
				radios: 'countries',
        		selectedContinents: [],
		        selectedCountries: [],
		        selectedName: '',
				selectedSurname: '',
				selectedTIFName: '',
				selectedTeam: '',
		        selectedSlug: '',
				selectedWebsite: '',
				selectedCompetitions: '',
		        imageData: '',
			    footballAPIRequestResult: '',
			    loading: false,
			    items: [
				    {
				      text: 'Dashboard',
				      disabled: false,
				      to: '/admin'
				    },
				    {
				      text: 'players',
				      disabled: false,
				      to: '/admin/players'
				    },
				    {
				      text: 'Create',
				      disabled: true,
				      to: '/admin/players/create'
				    }
				],
			}
		},
		computed: {
			loadedActivities () {
		        return this.$store.getters['activities/loadedActivities']
		    },
		    loadedCategories () {
		        return this.$store.getters['categories/loadedCategories']
		    },
		    loadedCompetitions () {
		    	return this.$store.getters['competitions/loadedCompetitions']
		    },
		    loadedContinents () {
		    	return this.$store.getters['continents/loadedContinents']
		    },
			loadedStadiums () {
				return this.$store.getters['stadiums/loadedStadiums']
			},
		    loadedCountries () {
		    	return this.$store.getters['countries/loadedCountries']
		    },
		    loadedTeams () {
		    	return this.$store.getters['teams/loadedTeams']
		    }
		},
		methods: {
			convertNumberToLetter (index) {
				if (this.selectedGroupsFormat === 'letters') {
					if (index <= 26) {
						const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
						return alphabet[index]
					}
				} else {
					return index + 1
				}
			},
			checkPlayerSlugUniqueness (slug) {
				console.log(slug)
				let found = false
				for (let player of this.loadedCompetitions) {
					console.log(player)
				    if (player.slug === slug) {
				        found = true
				        break
				    }
				}
				return found
			},
			handleFileUpload () {
		    	console.log('handleFileUpload')
		        this.file = this.$refs.file1.files[0]
		    },
			submitCreatePlayer () {
				console.log('submitCreatePlayer')
				console.log(this.checkPlayerSlugUniqueness(this.selectedSlug))
				// return
				
				// Organize countries data
				let countries = {}
				if (this.selectedCountries.length > 0) {
					for (let country of this.selectedCountries) {
						// console.log(player)
						countries[country.slug] = {
							name: country.name,
							slug: country.slug,
						}
					}
				}
				// return
				const playerData = {
					activity: {
			            slug: this.activity.slug,
			            name: this.activity.name
			        },
					category: {
						slug: this.category.slug,
						name: this.category.name
					},
			        name: this.selectedName,
					surname: this.selectedSurname,
					tifname: this.selectedTIFName,
			        slug: this.selectedSlug,
					country: {
						slug: this.selectedCountries.slug,
						name: this.selectedCountries.name
					},
					website: this.selectedWebsite,
					competitions: this.selectedCompetitions,
			        _created_at: new Date().getTime(),
			        _updated_at: new Date().getTime()
				}
				console.log(playerData)
				// return

				// If there is an image, upload the image first and then update competition node
				if (this.imageData) {
					axios.post('/upload-competition-image', {
					    image: this.imageData,
					    name: this.selectedSlug,
					    folder: 'competitions'
					}).then((response) => {
						console.log('success')
					    console.log(response.data)
					    playerData['image'] = response.data
					    console.log(playerData)
					    this.$store.dispatch('players/createPlayer', playerData)
					    return this.$router.push('/admin/players')
					}).catch(function (error) {
						console.log('error')
					    console.log(error)
					})
				} else {
					this.$store.dispatch('players/createPlayer', playerData)
					return this.$router.push('/admin/players')
				}
			},
			previewImage (event) {
	            // Reference to the DOM input element
	            let input = event.target;
	            // Ensure that you have a file before attempting to read it
	            if (input.files && input.files[0]) {
	                // Create a new FileReader to read this image and convert to base64 format
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
        	},
			clearAll () {
				this.selectedCompetitionType = 'club'
        		this.selectedContinents = []
		        this.selectedCountries = []
		        this.selectedName = ''
				this.selectedSurname = ''
				this.selectedTIFName = ''
				this.selectedTeams = ''
		        this.selectedSlug = ''
				this.selectedWebsite = ''
				this.selectedCompetitions = []
		        this.imageData = []
			}
		},
		watch: {
			selectedActivity: function () {
		        this.categories = []
        		this.types = []
		        this.selectedCategory = ''
        		this.selectedType = ''
		        if (this.selectedActivity.slug != '') {
		          	const activity = this.selectedActivity.slug
		          	this.categories = this.loadedCategories.filter(function (el) {
		            	return el.activity == activity
		          	})
		        }
		    },
		    selectedName: function () {
		    	console.log('Watch selectedName')
		    	this.selectedSlug = slugify(this.selectedName)
		    }
		}
	}
</script>

<style scoped>
	[v-cloak] > * { 
		display:none; 
	}
	.checkbox {
		padding-top: 12px;
	}
	.input-group__details {
		padding-top: 10px;
	}
</style>