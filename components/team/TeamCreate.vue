<template>
	<v-card>
		<!-- selectedActivity: {{ activity }}<br /><br />
		selectedCategory: {{ category }}<br /><br />
		imageData: {{ this.imageData }}<br /><br />
		selectedGroups: {{ this.selectedGroups }}<br /><br />
		selectedGroupsNumber: {{ this.selectedGroupsNumber }}<br /><br />
		selectedTeamsGroup: {{ this.selectedTeamsGroup }}<br /><br />
		selectedTeams: {{ this.selectedTeams }}<br /><br /> -->
		<!-- loadedTeams: {{ this.loadedTeams }}<br /><br /> -->
		<v-form v-cloak>
			<v-card-title class="primary-title">
				<v-card-text class="text-md-center">
					<h2>Equipe de football <i class="fa fa-futbol"></i></h2>
				</v-card-text>
			</v-card-title>
			<v-container>
				<v-layout row wrap>
					<v-flex xs6>
						<v-subheader class="text-xl-center">Nom de l'équipe</v-subheader>
					</v-flex>
					<v-flex xs6>
						<v-text-field
					      v-model="selectedName"
					      label="Nom de l'équipe"
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
						<v-subheader class="text-xl-center">Type de compétition</v-subheader>
					</v-flex>
					<v-flex xs6>
						<v-radio-group v-model="selectedCompetitionType" :mandatory="true">
					      	<v-radio label="Clubs" value="club" color="primary"></v-radio>
					      	<v-radio label="Équipes nationales" value="national_team" color="primary"></v-radio>
					    </v-radio-group>
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

				</v-layout>

				<v-layout v-else>
					<v-flex xs6>
						<v-subheader class="text-xl-center">Participation à quelle compétition ?</v-subheader>
					</v-flex>
					<v-flex xs6>
						<v-select
        				  :items="loadedCompetitions"
						  v-model="selectedCompetitions"
						  item-text="name"
						  item-value="slug"
						  label="Sélectionner les compétitions"
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
		  		<v-btn @click="submitCreateTeam" color="info" :disabled="this.checkTeamSlugUniqueness(this.selectedSlug)">Soumettre</v-btn>
				<v-btn @click="clearAll" color="warning">Nettoyer</v-btn>
				<nuxt-link to="/admin/teams" class="btn">Retour</nuxt-link>
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
		        selectedTeamType: 'club',
				radios: 'countries',
		        selectedCountries: [],
		        selectedName: '',
		        selectedSlug: '',
		        selectedTeams: [],
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
		    loadedCountries () {
		    	return this.$store.getters['countries/loadedCountries']
		    }
		},
		methods: {
			checkTeamSlugUniqueness (slug) {
				console.log(slug)
				let found = false
				for (let team of this.loadedTeams) {
					console.log(team)
				    if (team.slug === slug) {
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
			submitCreateTeam () {
				console.log('submitCreateTeam')
				console.log(this.checkTeamSlugUniqueness(this.selectedSlug))
				// return

				// Organize countries and continents data
				let continents = {}
				let countries = {}
				if (this.selectedContinents.length > 0) {
					for (let continent of this.selectedContinents) {
						// console.log(team)
						continents[continent.slug] = {
							name: continent.name,
							slug: continent.slug,
						}
					}
				}

				if (this.selectedCountries.length > 0) {
					for (let country of this.selectedCountries) {
						// console.log(team)
						countries[country.slug] = {
							name: country.name,
							slug: country.slug,
						}
					}
				}
				
				// return
				const teamData = {
					activity: {
			            slug: this.activity.slug,
			            name: this.activity.name
			        },
					category: {
						slug: this.category.slug,
						name: this.category.name
					},
					type: this.selectedCompetitionType,
					countries: countries,
			        name: this.selectedName,
			        slug: this.selectedSlug,
			        _created_at: new Date().getTime(),
			        _updated_at: new Date().getTime()
				}
				console.log(teamData)
				// return

				// If there is an image, upload the image first and then update team node
				if (this.imageData) {
					axios.post('/upload-team-image', {
					    image: this.imageData,
					    name: this.selectedSlug,
					    folder: 'teams'
					}).then((response) => {
						console.log('success')
					    console.log(response.data)
					    teamData['image'] = response.data
					    console.log(teanData)
					    this.$store.dispatch('teams/createTeam', teamData)
					    return this.$router.push('/admin/teams')
					}).catch(function (error) {
						console.log('error')
					    console.log(error)
					})
				} else {
					this.$store.dispatch('teams/createTeam', teamData)
					return this.$router.push('/admin/teams')
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
				this.selectedTeamType = 'club'
		        this.selectedCountries = []
		        this.selectedName = ''
		        this.selectedSlug = ''
		        this.imageData = ''
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
