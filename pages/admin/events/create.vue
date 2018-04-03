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
			<br /><br />
			
			<v-card>
				<v-form>
					<v-container fluid>
					    <v-layout row wrap>
							<v-flex xs6 class="">
								<v-subheader class="text-xl-center">Activité</v-subheader>
							</v-flex>
							<v-flex xs6>
								<v-select
								  :items="loadedActivities"
								  v-model="selectedActivity"
								  label="Sélectionner une activité"
								  item-text="name"
								  item-value="slug"
								  single-line
								></v-select>
							</v-flex>
							<v-flex xs6>
								<v-subheader class="text-md-right">Catégorie</v-subheader>
							</v-flex>
							<v-flex xs6>
								<v-select
								  :items="categories"
								  v-model="selectedCategory"
								  label="Sélectionner une catégorie"
								  item-text="name"
								  item-value="slug"
								  single-line
								  :disabled="selectedActivity == ''"
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
								  item-value="slug"
								  single-line
								  :disabled="selectedCategory == '' || selectedActivity == ''"
								></v-select>
							</v-flex>
					      	<!-- <br /><hr><br /> -->
					      	<v-spacer></v-spacer>
					      	<v-flex xs6>
					      		<v-subheader>Date</v-subheader>
					      	</v-flex>
					      	<v-flex xs6>
								<v-dialog
								  ref="dialog"
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
								    <v-btn flat color="primary" @click="$refs.dialog.save(time)">OK</v-btn>
								  </v-date-picker>
								</v-dialog>
							</v-flex>
							<v-flex xs6>
					      		<v-subheader>Time</v-subheader>
					      	</v-flex>
					      	<v-flex xs6>
								<v-dialog
								  ref="dialog"
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
								    <v-btn flat color="primary" @click="$refs.dialog.save(time)">OK</v-btn>
								  </v-time-picker>
								</v-dialog>
							</v-flex>
							<v-flex xs6 v-if="selectedCategory == 'football'">
								<v-subheader>Stade</v-subheader>
							</v-flex>
							<v-flex xs6 v-if="selectedCategory == 'football'">
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
								></v-select>
							</v-flex>
							<!-- <v-time-picker v-model="time"></v-time-picker> -->
					    </v-layout>
				  	</v-container>
				  	<v-card-text class="text-md-center">
				  		<v-btn @click="" color="info">submit</v-btn>
    					<v-btn @click="">clear</v-btn>
    				</v-card-text>
				</v-form>
			</v-card>
		</v-flex>
		{{ loadedActivities }}<br />
		{{ loadedCategories }}<br />
		{{ loadedTypes }}<br />
		{{ loadedStadiums }}
	</div>
</template>

<script>
	export default {
		layout: 'layoutBack',
		created () {
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
		    }
		},
		methods: {
			// loadedStadiums () {
		 //    	return this.$store.getters['stadiums/loadedStadiums'].filter(function (el) {
		 //    		return el.events == 'worldcup2018'
		 //    	})
			// }
		},
		watch: {
			selectedActivity: function () {
		        console.log('Watch selectedActivity')
		        if (this.selectedActivity != '') {
		          	const activity = this.selectedActivity
		          	this.categories = this.loadedCategories.filter(function (el) {
		            	return el.activity == activity
		          	})
		        }
		    },
		    selectedCategory: function () {
		    	console.log('Watch selectedCategory')
		        if (this.selectedCategory != '') {
		          const category = this.selectedCategory
		          this.types = this.loadedTypes.filter(function (el) {
		            return el.category == category
		          })
		        }
		    },
		    selectedType: function () {
		    	console.log('Watch selectedType')
		        if (this.selectedType != '') {
		          const type = this.selectedType
		          console.log(type)
		          // var filtered = _.where(this.loadedStadiums, {timezone: "GMT+3"})
		          this.stadiums = this.loadedStadiums.filter(function (el) {
		            return el.events[type]
		          })
		        }
		    }
		}
	}
</script>