<template>
	<v-card>
		<v-form v-cloak>
			<v-card-title class="primary-title">
				<v-card-text class="text-md-center">
					<h2>Stade de football <i class="fa fa-futbol"></i></h2>
				</v-card-text>
			</v-card-title>
			<v-container>
				<v-layout row wrap>
					<v-flex xs6>
						<v-subheader class="text-xl-center">Nom du stade</v-subheader>
					</v-flex>
					<v-flex xs6>
						<v-text-field
					      v-model="selectedName"
					      label="Nom du stade"
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
						<v-subheader class="text-xl-center">Ville / Village</v-subheader>
					</v-flex>
					<v-flex xs6>
						<v-text-field
					      v-model="selectedCities"
					      label="Ville dans lequel se trouve le stade"
					    ></v-text-field>
					</v-flex>

					<v-flex xs6>
						<v-subheader class="text-xl-center">Timezone</v-subheader>
					</v-flex>
					<v-flex xs6>
						<v-text-field
					      v-model="selectedTimezone"
					      label="Timezone"
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
						<v-subheader class="text-xl-center">Site internet</v-subheader>
					</v-flex>
					<v-flex xs6>
						<v-text-field
					      v-model="selectedWebsite"
					      label="Site internet"
					    ></v-text-field>
					</v-flex>
					
					<v-flex xs6>
						<v-subheader class="text-xl-center">Capacité</v-subheader>
					</v-flex>
					<v-flex xs6>
						<v-text-field
					      v-model="selectedCapacity"
					      label="Capacité du stade"
					    ></v-text-field>
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
		  		<v-btn @click="submitCreateStadium" color="info" :disabled="this.checkStadiumSlugUniqueness(this.selectedSlug)">Soumettre</v-btn>
				<v-btn @click="clearAll" color="warning">Nettoyer</v-btn>
				<nuxt-link to="/admin/stadiums" class="btn">Retour</nuxt-link>
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
		},
		data () {
			return {
		        selectedCountries: [],
		        selectedName: '',
		        selectedSlug: '',
				selectedCities: '',
				selectedSlugcity: '',
				selectedTimezone: '',
				selectedWebsite: '',
				selectedCapacity: '',
		        imageData: '',
			    loading: false,
			    items: [
				    {
				      text: 'Dashboard',
				      disabled: false,
				      to: '/admin'
				    },
				    {
				      text: 'Stadiums',
				      disabled: false,
				      to: '/admin/Stadiums'
				    },
				    {
				      text: 'Create',
				      disabled: true,
				      to: '/admin/stadiums/create'
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
			loadedStadiums () {
				return this.$store.getters['stadiums/loadedStadiums']
			},
			loadedCities () {
				return this.$store.getters['cities/loadedCities']
			},
		    loadedCountries () {
		    	return this.$store.getters['countries/loadedCountries']
		    }
		},
		methods: {
			checkStadiumSlugUniqueness (slug) {
				console.log(slug)
				let found = false
				for (let stadium of this.loadedStadiums) {
					console.log(stadium)
				    if (stadium.slug === slug) {
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
			submitCreateStadium () {
				console.log('submitCreateStadium')
				console.log(this.checkStadiumSlugUniqueness(this.selectedSlug))
				// return

				// Organize countries data
				let countries = {}

				if (this.selectedCountries.length > 0) {
					for (let country of this.selectedCountries) {
						// console.log(country)
						countries[country.slug] = {
							name: country.name,
							slug: country.slug,
						}
					}
				}
				// return
								
				const stadiumData = {
					activity: {
			            slug: this.activity.slug,
			            name: this.activity.name
			        },
					category: {
						slug: this.category.slug,
						name: this.category.name
					},
			        name: this.selectedName,
			        slug: this.selectedSlug,
					country: {
						slug: this.selectedCountries.slug,
						name: this.selectedCountries.name
					},
					city: {
						name: this.selectedCities,
						slug: this.selectedSlugcity
					},
					timezone: this.selectedTimezone,
					website: this.selectedWebsite,
					capacity: this.selectedCapacity,
			        _created_at: new Date().getTime(),
			        _updated_at: new Date().getTime()
				}
				console.log(stadiumData)
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
					    stadiumData['image'] = response.data
					    console.log(stadiumData)
					    this.$store.dispatch('stadiums/createStadium', stadiumData)
					    return this.$router.push('/admin/stadiums')
					}).catch(function (error) {
						console.log('error')
					    console.log(error)
					})
				} else {
					this.$store.dispatch('stadiums/createStadium', stadiumData)
					return this.$router.push('/admin/stadiums')
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
		        this.selectedCountries = []
		        this.selectedName = ''
		        this.selectedSlug = ''
				this.selectedCities = ''
				this.selectedSlugcity = ''
				this.selectedCapacity = ''
				this.selectedWebsite = ''
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
		    },
			selectedCities: function () {
		    	console.log('Watch selectedCities')
		    	this.selectedSlugcity = slugify(this.selectedCities)
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
