<template>
	<v-card>
		<v-form v-cloak>
			<v-card-title class="primary-title">
				<v-card-text class="text-md-center">
					<h2>Compétition de hockey sur glace <i class="fa fa-hockey-puck"></i></h2>
				</v-card-text>
			</v-card-title>
			<v-container>
				<v-layout row wrap>
					<v-flex xs6>
						<v-subheader class="text-xl-center">Nom de la compétition</v-subheader>
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
						<v-subheader class="text-xl-center">Année/Saison</v-subheader>
					</v-flex>
					<v-flex xs6>
						<v-text-field
					      v-model="selectedYear"
					      label="Année (2018 ou 2018-2019)"
					      placeholder="2018 ou 2018-2019"
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
						<v-subheader class="text-xl-center">La compétition se déroule dans...</v-subheader>
					</v-flex>
					<v-flex xs6>
						<v-radio-group v-model="radios" :mandatory="true">
					      	<v-radio label="Un ou plusieurs pays" value="countries" color="primary"></v-radio>
					      	<v-radio label="Un ou plusieurs continents" value="continents" color="primary"></v-radio>
					      	<!-- <v-radio label="Une ou plusieurs villes" value="cities"></v-radio> -->
					    </v-radio-group>
					</v-flex>

					<v-flex xs6 v-if="this.radios === 'countries'">
						<v-subheader class="text-xl-center">Pays hôte(s) de la compétition</v-subheader>
					</v-flex>
					<v-flex xs6 v-if="this.radios === 'countries'">
						<v-select
						  :items="loadedCountries"
						  v-model="selectedCountries"
						  label="Sélectionner un ou plusieurs pays"
						  item-text="name"
						  item-value="slug"
						  :autocomplete="true"
						  multiple
						  chips
						  single-line
						  :return-object="true"
						></v-select>
					</v-flex>

					<v-flex xs6 v-if="this.radios === 'continents'">
						<v-subheader class="text-xl-center">Continent(s) hôte(s) de la compétition</v-subheader>
					</v-flex>
					<v-flex xs6 v-if="this.radios === 'continents'">
						<v-select
						  :items="loadedContinents"
						  v-model="selectedContinents"
						  label="Sélectionner un ou plusieurs continent"
						  item-text="name"
						  item-value="slug"
						  :autocomplete="true"
						  multiple
						  chips
						  single-line
						  :return-object="true"
						></v-select>
					</v-flex>

					<v-flex xs6>
						<v-subheader class="text-xl-center">La compétition contient-elle des groupes?</v-subheader>
					</v-flex>
					<v-flex xs6>
						<v-checkbox
							v-model="selectedGroups"
							label="Oui, il y a des groupes"
							color="primary"
						></v-checkbox>
					</v-flex>

					<v-flex xs6 v-if="selectedGroups">
						<v-subheader class="text-xl-center">Format des noms de groupes</v-subheader>
					</v-flex>
					<v-flex xs6 v-if="selectedGroups">
						<v-radio-group v-model="selectedGroupsFormat" :mandatory="true">
					      	<v-radio label="Lettres" value="letters" color="primary"></v-radio>
					      	<v-radio label="Numéros" value="numbers" color="primary"></v-radio>
					    </v-radio-group>
					</v-flex>

					<v-flex xs6 v-if="selectedGroups">
						<v-subheader class="text-xl-center">Nombre de groupes</v-subheader>
					</v-flex>
					<v-flex xs6 v-if="selectedGroups">
						<v-text-field
					      v-model="selectedGroupsNumber"
					      label="Nombre de groupes"
					      type="number"
					      min="0"
					    ></v-text-field>
					</v-flex>		
				</v-layout>
				<v-layout row wrap v-if="selectedGroups">
					<v-flex xs4 offset-xs1 v-for="(group, index) in (1, parseInt(selectedGroupsNumber))" :key="group">
						<v-select
        				  :items="loadedTeams"
						  v-model="selectedTeamsGroup[index]"
						  item-text="name"
						  item-value="slug"
						  :label="'Équipes du groupe ' + convertNumberToLetter(parseInt(index))"
						  multiple
				          chips
				          :return-object="true"
						></v-select>
					</v-flex>
				</v-layout>

				<v-layout v-else>
					<v-flex xs6>
						<v-subheader class="text-xl-center">Équipes participants à la compétition</v-subheader>
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
		  		<v-btn @click="submitCreateCompetition" color="info" :disabled="this.selectedTeams.length === 0 && this.selectedTeamsGroup.length === 0 || this.checkCompetitionSlugUniqueness(this.selectedSlug)">Soumettre</v-btn>
				<v-btn @click="clearAll" color="warning">Nettoyer</v-btn>
				<nuxt-link to="/admin/competitions" class="btn">Retour</nuxt-link>
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
			// this.$store.dispatch('activities/loadedActivities')
    		// this.$store.dispatch('categories/loadedCategories')
    		this.$store.dispatch('continents/loadedContinents')
			this.$store.dispatch('countries/loadedCountries')
			this.$store.dispatch('teams/loadedTeams')
			this.$store.dispatch('competitions/loadedCompetitions')
		},
		data () {
			return {
		        selectedCompetitionType: 'club',
				radios: 'countries',
        		selectedContinents: [],
		        selectedCountries: [],
		        selectedName: '',
		        selectedSlug: '',
		        selectedYear: moment().year() + 1,
		        selectedTeams: [],
		        selectedTeamsGroup: [],
		        imageData: '',
				selectedGroups: false,
				selectedGroupsNumber: this.selectedGroups ? 2 : 0,
				selectedGroupsFormat: 'letters',
			    footballAPIRequestResult: '',
			    loading: false,
			    items: [
				    {
				      text: 'Dashboard',
				      disabled: false,
				      to: '/admin'
				    },
				    {
				      text: 'Competitions',
				      disabled: false,
				      to: '/admin/competitions'
				    },
				    {
				      text: 'Create',
				      disabled: true,
				      to: '/admin/competitions/create'
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
		    loadedCountries () {
		    	return this.$store.getters['countries/loadedCountries']
		    },
		    loadedTeams () {
		    	return this.$store.getters['teams/loadedTeams'].filter(team => (team.type === this.selectedCompetitionType))
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
			checkCompetitionSlugUniqueness (slug) {
				console.log(slug)
				let found = false
				for (let competition of this.loadedCompetitions) {
					console.log(competition)
				    if (competition.slug === slug) {
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
			submitCreateCompetition () {
				console.log('submitCreateTeam')
				console.log(this.selectedGroups)
				console.log(this.checkCompetitionSlugUniqueness(this.selectedSlug))
				// return

				// Organize teams data
				let teams = {}
				if (this.selectedGroups) {
					console.log('There is groups')
					let index = 0
					for (let group of this.selectedTeamsGroup) {
						// console.log(group)
						for (let team of group) {
							teams[team.slug] = {
								name: team.name,
								slug: team.slug,
								group: this.convertNumberToLetter(index),
								wins: 0,
								draws: 0,
								losses: 0,
								goals_scored: 0,
								goals_conceded: 0,
								points: 0
							}
						}
						index++
					}
				} else {
					console.log('There is no  groups')
					// console.log(this.selectedTeams)
					for (let team of this.selectedTeams) {
						// console.log(team)
						teams[team.slug] = {
							name: team.name,
							slug: team.slug,
							wins: 0,
							draws: 0,
							losses: 0,
							goals_scored: 0,
							goals_conceded: 0,
							points: 0
						}
					}
				}
				console.log(teams)

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
				const competitionData = {
					activity: {
			            slug: this.activity.slug,
			            name: this.activity.name
			        },
					category: {
						slug: this.category.slug,
						name: this.category.name
					},
					type: this.selectedCompetitionType,
					continents: continents,
					countries: countries,
					groups: this.selectedGroups,
					groups_number: this.selectedGroupsNumber,
					groups_format: this.selectedGroupsFormat,
					teams: teams,
			        name: this.selectedName,
			        slug: this.selectedSlug,
			        year: this.selectedYear,
			        _created_at: new Date().getTime(),
			        _updated_at: new Date().getTime()
				}
				console.log(competitionData)
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
					    competitionData['image'] = response.data
					    console.log(competitionData)
					    this.$store.dispatch('competitions/createCompetition', competitionData)
					    return this.$router.push('/admin/teams')
					}).catch(function (error) {
						console.log('error')
					    console.log(error)
					})
				} else {
					this.$store.dispatch('competitions/createCompetition', competitionData)
					return this.$router.push('/admin/competitions')
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
		        this.selectedSlug = ''
		        this.selectedYear = ''
		        this.selectedTeams = []
		        this.selectedTeamsGroup = []
		        this.imageData = ''
				this.selectedGroups = false
				this.selectedGroupsNumber = 2
				this.selectedGroupsFormat = 'letters'
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
		    // selectedTeamsGroup () {
		    // 	console.log(this.selectedTeamsGroup[0][0].slug)
		    // 	let teamsArray = []
		    // 	if (this.selectedTeamsGroup) {
		    // 		for (let group of this.selectedTeamsGroup) {
		    // 			teamsArray.push(group.map(team => team.slug))
		    // 		}
		    // 	}
		    // 	console.log(teamsArray)
		    // 	this.teamsArray = teamsArray[0]
		    // 	return
		    // }
		    selectedGroups () {
		    	if (this.selectedGroups) {
		    		this.selectedTeams = []
		    	} else {
		    		this.selectedTeamsGroup = []
		    	}
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
