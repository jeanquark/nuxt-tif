<template>
	<v-card>
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
						<v-subheader class="text-xl-center">Couleurs</v-subheader>
					</v-flex>
					<v-flex xs6>
						<v-text-field
					      v-model="selectedColor"
					      label="Couleurs de l'équipe"
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
						<v-subheader class="text-xl-center">Pays</v-subheader>
					</v-flex>
					<v-flex xs6>
						<v-select
						  :items="loadedCountries"
						  v-model="selectedCountry"
						  label="Sélectionner le pays"
						  item-text="name"
						  item-value="slug"
						  :autocomplete="true"
						  single-line
						  :return-object="true"
						></v-select>
					</v-flex>	
					
					<v-flex xs6>
						<v-subheader>Stade</v-subheader>
					</v-flex>
					<v-flex xs6>
						<v-select
							:items="stadiums"
							v-model="selectedStadium" 
							label="Sélectionner un stade"
							item-text="name"
							item-value="slug"
							:autocomplete="true"
							single-line
							:return-object="true"
							:disabled="selectedCountry == ''"
						>
							<template slot="item" slot-scope="data">
								<v-list-tile-content>
									<v-list-tile-title>
										{{ data.item.name }}
									</v-list-tile-title>
								</v-list-tile-content>
							</template>
						</v-select>
					</v-flex>
					
					<v-flex xs6>
						<v-subheader class="text-xl-center">Type de l'équipe</v-subheader>
					</v-flex>
					<v-flex xs6>
						<v-radio-group v-model="selectedCompetitionType" :mandatory="true">
					      	<v-radio label="Club" value="club" color="primary"></v-radio>
					      	<v-radio label="Équipe nationale" value="national_team" color="primary"></v-radio>
					    </v-radio-group>
					</v-flex>

					<v-flex xs6>
						<v-subheader class="text-xl-center">Compétitions auxquelles l'équipe prend part</v-subheader>
					</v-flex>
					<v-flex xs6>
						<v-select
							:items="loadedCompetitions"
							v-model="selectedCompetitions" 
							label="Sélectionner une ou plusieurs compétitions"
							item-text="name"
							item-value="slug"
							:autocomplete="true"
							multiple
							chips
							single-line
							:return-object="true"
						>
							<template slot="item" slot-scope="data">
								<v-list-tile-content>
									<v-list-tile-title>
										{{ data.item.name }}
									</v-list-tile-title>
								</v-list-tile-content>
							</template>
						</v-select>
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
						</div>
					</v-flex>
				</v-layout>
			</v-container>
			<v-card-text class="text-md-center">
		  		<v-btn @click="submitCreateTeam" color="info" :disabled="this.checkTeamSlugUniqueness(this.selectedSlug) || this.selectedName === '' || this.selectedSlug === ''">Soumettre</v-btn>
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
			this.$store.dispatch('stadiums/loadedStadiums')
		},
		data () {
			return {
		        selectedCompetitionType: 'club',
		        selectedCountry: '',
		        selectedName: '',
		        selectedSlug: '',
				selectedColor: '',
				selectedWebsite: '',
				selectedCompetitions: [],
				selectedStadium: '',
		        imageData: '',
			    loading: false,
			    stadiums: [],
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
			checkTeamSlugUniqueness (slug) {
				let found = false
				for (let team of this.loadedTeams) {
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

				// const data = {
				// 	"name" : "jm",
    //                 "email": "jm@gmail.com",
    //                 "message": "my message"
    //             }
				// axios.post('/send-email', {
    //                 data: data,
    //             }).then((response) => {
    //                 new Noty({type: 'success', text: 'Email was sent successfully', timeout: 5000, theme: 'metroui'}).show()
    //                 console.log('success')
    //                 console.log(response)
    //                 this.$store.commit('setLoading', false, { root: true })
    //                 // new Noty({type: 'success', text: this.$t('pages.index.contact_form_send_success'), timeout: 5000, theme: 'metroui'}).show()

    //             }).catch (function (error) {
    //                 new Noty({type: 'error', text: 'Email could not be sent', timeout: 5000, theme: 'metroui'}).show()
    //                 this.$store.commit('setLoading', false, { root: true })
    //                 console.log('Email could not be sent')
    //                 console.log(error)
    //                 // new Noty({type: 'error', text: this.$t('pages.index.contact_form_send_error'), timeout: 5000, theme: 'metroui'}).show()
    //             })
    //             return

				// Organize competitions data
				let competitions = {}
				if (this.selectedCompetitions.length > 0) {
					for (let competition of this.selectedCompetitions) {
						competitions[competition.slug] = true
					}
				}

				const teamData = {
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
						slug: this.selectedCountry ? this.selectedCountry.slug : '',
						name: this.selectedCountry ? this.selectedCountry.name : ''
					},
					color: this.selectedColor,
					website: this.selectedWebsite,
					stadium: {
						slug: this.selectedStadium ? this.selectedStadium.slug : '',
						name: this.selectedStadium ? this.selectedStadium.name : ''
					},
					type: this.selectedCompetitionType,
					competitions: competitions,
			        _created_at: new Date().getTime(),
			        _updated_at: new Date().getTime()
				}

				// If there is an image, upload the image first and then update competition node
				if (this.imageData) {
					axios.post('/upload-image', {
					    image: this.imageData,
					    name: this.selectedSlug,
					    folder: 'teams'
					}).then((response) => {
						console.log('success')
					    console.log(response.data)
					    teamData['image'] = response.data
					    console.log(teamData)
					    this.$store.dispatch('teams/createTeam', teamData)
					    // return this.$router.push('/admin/teams')
					}).catch(function (error) {
						console.log('error')
					    console.log(error)
					})
				} else {
					this.$store.dispatch('teams/createTeam', teamData)
					// return this.$router.push('/admin/teams')
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
		        this.selectedCountry = ''
		        this.selectedName = ''
		        this.selectedSlug = ''
				this.selectedColor = ''
				this.selectedWebsite = ''
				this.selectedStadium = ''
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
		    	// console.log('Watch selectedName')
		    	this.selectedSlug = slugify(this.selectedName)
		    },
		    selectedCountry: function () {
		    	this.stadiums = []
		    	const country = this.selectedCountry.slug
		    	this.stadiums = this.loadedStadiums.filter(function (el) {
		            return el.country.slug === country
		        })
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