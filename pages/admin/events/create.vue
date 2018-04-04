<template>
	<div>
		<v-breadcrumbs divider="/">
	  		<v-breadcrumbs-item
		        v-for="link in links"
		        :key="link.text"
		        :disabled="link.disabled"
		        :to="link.to"
		      >
	    		{{ link.text }}
	  		</v-breadcrumbs-item>
		</v-breadcrumbs>
		<v-flex xs12 sm8 offset-sm2>
			<br /><br />
			<h1 class="text-md-center">Create Event</h1>
			selectedActivity: {{ this.selectedActivity }}<br />
			selectedCategory: {{ this.selectedCategory }}<br />
			selectedType: {{ this.selectedType }}
			<br /><br />
			

			<v-card>
				<v-form>
					<v-container fluid>
					    <v-layout row wrap>
<!-- <v-flex xs6>
	<v-subheader class="text-xl-center">Activité</v-subheader>
</v-flex>
<v-flex xs6>
	<v-select
		:items="loadedActivities"
		v-model="selectedActivity" 
		label="Sélectionner une activité"
		item-text="name"
		item-value="{}"
		:autocomplete="true"
		single-line
	>
        <template slot="selection" scope="data">
	        {{ data.item.name }}, {{ data.item.slug }}
	    </template>
	    <template slot="item" scope="data">
	      <v-list-tile-content>
	        <v-list-tile-title style="font-size: 14px; margin-bottom: -4px;">
	          {{ data.item.name }}, {{ data.item.slug }}
	        </v-list-tile-title>
	      </v-list-tile-content>
	    </template>
    </v-select>
</v-flex> -->
<!-- {{ selectedActivity }} -->
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
						</v-layout>
						<v-layout row wrap>
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
								<v-subheader>Type</v-subheader>
							</v-flex>
							<v-flex xs6>
								<v-select
								  :items="types"
								  v-model="selectedType"
								  label="Sélectionner un type"
								  item-text="name"
								  item-value="{}"
								  single-line
								  :disabled="selectedCategory.slug == '' || selectedActivity.slug == ''"
								></v-select>
							</v-flex>
					      	<!-- <br /><hr><br /> -->
					      	<v-spacer></v-spacer>
					      	<v-flex xs6>
					      		<v-subheader>Date</v-subheader>
					      	</v-flex>
					      	<v-flex xs6>
								<v-dialog
								  ref="dateDialog"
								  persistent
								  v-model="modalDate"
								  lazy
								  full-width
								  width="290px"
								  :return-value.sync="date"
								>
								  <v-text-field
								    slot="activator"
								    label="Choisissez une date"
								    v-model="date"
								    prepend-icon="date_range"
								    readonly
								  ></v-text-field>
								  <v-date-picker v-model="date" actions>
								    <v-spacer></v-spacer>
								    <v-btn flat color="primary" @click="modalDate = false">Cancel</v-btn>
								    <v-btn flat color="primary" @click="$refs.dateDialog.save(date)">OK</v-btn>
								  </v-date-picker>
								</v-dialog>
							</v-flex>
							<v-flex xs6>
					      		<v-subheader>Time</v-subheader>
					      	</v-flex>
					      	<v-flex xs6>
								<v-dialog
								  ref="timeDialog"
								  persistent
								  v-model="modalTime"
								  lazy
								  full-width
								  width="290px"
								  :return-value.sync="time"
								>
								  <v-text-field
								    slot="activator"
								    label="Choisissez une heure"
								    v-model="time"
								    prepend-icon="access_time"
								    readonly
								  ></v-text-field>
								  <v-time-picker v-model="time" actions>
								    <v-spacer></v-spacer>
								    <v-btn flat color="primary" @click="modalTime = false">Cancel</v-btn>
								    <v-btn flat color="primary" @click="$refs.timeDialog.save(time)">OK</v-btn>
								  </v-time-picker>
								</v-dialog>
							</v-flex>
							<v-divider></v-divider>
							<v-layout row wrap v-if="selectedCategory.slug == 'football'">
								<v-flex xs6>
									<v-subheader>Stade</v-subheader>
								</v-flex>
<v-flex>
	<v-select
		:items="stadiums"
		v-model="selectedStadium" 
		label="Sélectionner un stade"
		item-text="name"
		item-value="{}"
		:autocomplete="true"
		single-line
		:disabled="selectedType == ''"
	>
	    <template slot="item" scope="data">
	      <v-list-tile-content>
	        <v-list-tile-title>
	          {{ data.item.name }} <small style="color: #ccc;">{{ data.item.city_name }} - {{ data.item.country_name}}</small>
	        </v-list-tile-title>
	      </v-list-tile-content>
	    </template>
	</v-select>
</v-flex>
								<!-- <v-flex xs6>
									<v-select
									  :items="stadiums"
									  v-model="selectedStadium"
									  label="Sélectionner un stade"
									  item-text="name"
									  item-value="slug"
									  single-line
									  return-object
	          						  :hint="`${selectedStadium.name}, ${selectedStadium.city_name}, ${selectedStadium.country_name}`"
									  :disabled="selectedType == ''"
									>
								</v-select>
								</v-flex> -->
								<!-- <v-time-picker v-model="time"></v-time-picker> -->
								<v-spacer></v-spacer>
								<v-spacer></v-spacer>
								<v-flex xs6 class="">
									<v-subheader class="text-xl-center">Equipe recevante</v-subheader>
								</v-flex>
								<v-flex xs6>
									<v-select
									  :items="teams1"
									  v-model="selectedTeam1"
									  label="Sélectionner l'équipe recevante"
									  item-text="name"
									  item-value="{}"
									  single-line
									  :disabled="selectedType == ''"
									></v-select>
								</v-flex>
								<v-flex xs6 class="">
									<v-subheader class="text-xl-center">Equipe visiteuse</v-subheader>
								</v-flex>
								<v-flex xs6>
									<v-select
									  :items="teams2"
									  v-model="selectedTeam2"
									  label="Sélectionner l'équipe visiteuse"
									  item-text="name"
									  item-value="{}"
									  single-line
									  :disabled="selectedType == ''"
									></v-select>
								</v-flex>
							</v-layout>
					    </v-layout>
				  	</v-container>
				  	<v-card-text class="text-md-center">
				  		<v-btn @click="submitCreateEvent" color="info">submit</v-btn>
    					<v-btn @click="">clear</v-btn>
    				</v-card-text>
				</v-form>
			</v-card>
		</v-flex>
		{{ loadedActivities }}<br />
		{{ loadedCategories }}<br />
		{{ loadedTypes }}<br />
		{{ loadedStadiums }}<br />
		{{ loadedTeams }}
	</div>
</template>

<script>
	export default {
		layout: 'layoutBack',
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
			// return this.$store.dispatch('stadiums/loadedStadiums')
			
		},
		data () {
			return {
				selectedActivity: '',
        		selectedCategory: '',
        		selectedType: '',
        		categories: [],
        		types: [],
        		selectedStadium: '',
        		stadiums: [],
        		selectedTeam1: '',
        		selectedTeam2: '',
        		// teams1: [],
				date: null,
				time: null,
        			// menu2: false,
        		modalDate: false,
        		modalTime: false,
		        items: [
		          { text: 'State 1' },
		          { text: 'State 2' },
		          { text: 'State 3' },
		          { text: 'State 4' },
		          { text: 'State 5' },
		          { text: 'State 6' },
		          { text: 'State 7' }
		        ],
		        links: [
			        {
			          text: 'Dashboard',
			          to: '/Admin',
			          disabled: false
			        },
			        {
			          text: 'Events',
			          to: '/Admin/Events',
			          disabled: false
			        },
			        {
			          text: 'Create',
			          disabled: true
			        }
			    ]
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
		    teams1 () {
		    	let type = this.selectedType.slug
		    	console.log(type)
		    	let team2 = this.selectedTeam2.slug
		    	console.log(team2)
		        return this.loadedTeams.filter(function (el) {
		          return el.type[type] && el.slug != team2
		        })
		    },
		    teams2 () {
		    	let type = this.selectedType.slug
		    	let team1 = this.selectedTeam1.slug
		        return this.loadedTeams.filter(function (el) {
		          return el.type[type] && el.slug != team1
		        })
		    }
		},
		methods: {
			submitCreateEvent () {
				console.log('submitCreateEvent')
				const eventData = {
					activity: {
			            slug: this.selectedActivity.slug,
			            name: this.selectedActivity.name
			        },
					category: {
						slug: this.selectedCategory.slug,
						name: this.selectedCategory.name
					},
			        type: {
			            slug: this.selectedType.slug,
			            name: this.selectedType.name
			        },
			        team1: {
			            slug: this.selectedTeam1.slug,// = 'undefined' ? null : this.selectedTeam1.slug,
			            name: this.selectedTeam1.name,// = 'undefined' ? null : this.selectedTeam1.name
			        },
			        team2: {
			            slug: this.selectedTeam2.slug,// = 'undefined' ? null : this.selectedTeam2.slug,
			            name: this.selectedTeam2.name,// = 'undefined' ? null : this.selectedTeam2.name
			        },
			        name: this.selectedTeam1.name + ' vs ' + this.selectedTeam2.name,
			        location: {
			            name: this.selectedStadium.name,// = 'undefined' ? null : this.selectedStadium,
			            city: this.selectedStadium.city_name,// = 'undefined' ? null : this.selectedStadium
			            country: this.selectedStadium.country_name,
			            timezone: this.selectedStadium.timezone
			        },
			        formatted_date: this.date,
			        time: this.time,
			        // endDate: this.endDate,
			        _created_at: new Date().getTime(),
			        // _created_by: document.getElementsByName('username')[0].value,
			        _updated_at: new Date().getTime()
				}
				this.$store.dispatch('events/createEvent', eventData)
			}
		},
		watch: {
			selectedActivity: function () {
		        console.log('Watch selectedActivity')
		        this.categories = []
        		this.types = []
		        this.selectedCategory = ''
        		this.selectedType = ''
		        if (this.selectedActivity.slug != '') {
		          	const activity = this.selectedActivity.slug
		          	// console.log(activity)
		          	this.categories = this.loadedCategories.filter(function (el) {
		            	return el.activity == activity
		          	})
		        }
		    },
		    selectedCategory: function () {
		    	console.log('Watch selectedCategory')
		        if (this.selectedCategory.slug != '') {
		          const category = this.selectedCategory.slug
		          this.types = this.loadedTypes.filter(function (el) {
		            return el.category == category
		          })
		        }
		    },
		    selectedType: function () {
		    	console.log('Watch selectedType')
		        if (this.selectedType.slug != '') {
		          const type = this.selectedType.slug
		          this.stadiums = this.loadedStadiums.filter(function (el) {
		            return el.events[type]
		          })
		        }
		    }
		}
	}
</script>

<style scoped>
	.toast {
		background-color: yellow;
	}
</style>