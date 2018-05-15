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
							<h2>Créer une compétition</h2>
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
								<v-subheader class="text-xl-center">Année/Saison</v-subheader>
							</v-flex>
							<v-flex xs6>
								<v-text-field
							      v-model="selectedYear"
							      label="Année"
							      placeholder="2018 ou 2018-2019"
							    ></v-text-field>
							</v-flex>
							
					      	<v-spacer></v-spacer>
					    </v-layout>
				  	</v-container>
				  	<v-card-text class="text-md-center">
				  		<v-btn @click="submitCreateCompetition" color="info">Soumettre</v-btn>
    					<v-btn @click="clearAll" color="warning">Nettoyer</v-btn>
    					<nuxt-link to="/admin/competitions" class="btn">Retour</nuxt-link>
    				</v-card-text>
				</v-form>
			</v-card>
		</v-flex>
	</div>
</template>

<script>
  	import firebase from 'firebase'
  	import Noty from 'noty'
  	import slugify from '~/helpers/slugify'
	export default {
		layout: 'layoutBack',
		created () {
			this.$store.dispatch('activities/loadedActivities')
    		this.$store.dispatch('categories/loadedCategories')
			this.$store.dispatch('countries/loadedCountries')
		},
		data () {
			return {
				selectedActivity: '',
        		selectedCategory: '',
        		categories: [],
		        selectedCountry: '',
		        selectedName: '',
		        selectedSlug: '',
		        selectedYear: '',
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
			    footballAPIRequestResult: '',
			    loading: false,
			}
		},
		computed: {
			loadedActivities () {
		        return this.$store.getters['activities/loadedActivities']
		    },
		    loadedCategories () {
		        return this.$store.getters['categories/loadedCategories']
		    },
		    loadedCountries () {
		    	return this.$store.getters['countries/loadedCountries']
		    }
		},
		methods: {
			submitCreateCompetition () {
				// console.log('submitCreateTeam')
				const competitionData = {
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
			        name: this.selectedName,
			        slug: this.selectedSlug,
			        year: this.selectedYear,
			        _created_at: new Date().getTime(),
			        _updated_at: new Date().getTime()
				}
				// console.log(competitionData)
				this.$store.dispatch('competitions/createCompetition', competitionData)
				return this.$router.push('/admin/competitions')
			},
			clearAll () {
				this.selectedActivity = ''
				this.selectedCategory = ''
				this.selectedCountry = ''
				this.selectedName = ''
				this.selectedSlug = ''
				this.selectedYear = ''
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
	.toast {
		background-color: yellow;
	}
</style>