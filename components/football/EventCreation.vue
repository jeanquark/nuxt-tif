<template>
	<div>
		<v-card>
			<!-- loadedCompetitions: {{ this.loadedCompetitions }}<br /><br />-->
			<!-- selectedCompetition: {{ this.selectedCompetition }}<br /><br /> -->
			<!-- competitions: {{ this.competitions }}<br /><br />
			activity: {{ this.activity }}<br /><br />
			category: {{ this.category }}<br /><br /> -->
			<!-- loadedTeams: {{ this.loadedTeams }}<br /><br />-->
			<!-- loadedStadiums: {{ this.loadedStadiums }}<br /><br /> -->
			<!--teams1: {{ this.teams1 }}<br /><br />
			teams2: {{ this.teams2 }}<br /><br /> -->
			<!-- date: {{ this.date }}<br /><br /> -->
			<!-- time: {{ this.time }}<br /><br /> -->
			<v-form>
				<v-card-title class="primary-title">
					<v-card-text class="text-md-center">
						<h2>Football <i class="fa fa-futbol"></i></h2>
					</v-card-text>
				</v-card-title>
				<v-container fluid>
					<v-layout row wrap>
						<v-flex xs6>
							<v-subheader>Compétition</v-subheader>
						</v-flex>
						<v-flex xs6>
							<v-select
							  :items="competitions"
							  v-model="selectedCompetition"
							  label="Sélectionner une compétition"
							  item-text="name"
							  item-value="slug"
							  single-line
							  :return-object="true"
							></v-select>
						</v-flex>
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
							  <v-date-picker locale="fr-fr" :first-day-of-week="1" v-model="date" actions>
							    <v-spacer></v-spacer>
							    <v-btn flat color="primary" @click="modalDate = false">Cancel</v-btn>
							    <v-btn flat color="primary" @click="$refs.dateDialog.save(date)">OK</v-btn>
							  </v-date-picker>
							</v-dialog>
						</v-flex>
						<v-flex xs6>
				      		<v-subheader>Heure</v-subheader>
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
							    label="Choisissez une heure (UTC)"
							    v-model="time"
							    prepend-icon="access_time"
							    readonly
							  ></v-text-field>
							  <v-time-picker v-model="time" format="24hr" actions>
							    <v-spacer></v-spacer>
							    <v-btn flat color="primary" @click="modalTime = false">Cancel</v-btn>
							    <v-btn flat color="primary" @click="$refs.timeDialog.save(time)">OK</v-btn>
							  </v-time-picker>
							</v-dialog>
							<v-subheader style="margin-top: -30px; margin-left: 20px; font-weight: normal;"><i class="fa fa-exclamation-triangle"></i>&nbsp;L'heure inscrite est l'heure de Zürich &nbsp;</v-subheader>
						</v-flex>

						<v-flex xs6>
							<v-subheader>Stade</v-subheader>
						</v-flex>
						<v-flex xs6>
							<v-select
								:items="loadedStadiums"
								v-model="selectedStadium" 
								label="Sélectionner un stade"
								item-text="name"
								item-value="slug"
								:autocomplete="true"
								single-line
								:disabled="selectedCompetition == ''"
								:return-object="true"
							>
								<template slot="item" slot-scope="data">
							      	<v-list-tile-content>
							        	<v-list-tile-title>
							          		{{ data.item.name }}, {{ data.item.city.name }}
							        	</v-list-tile-title>
							      	</v-list-tile-content>
							    </template>
							</v-select>
						</v-flex>

						<v-spacer></v-spacer>
						<v-spacer></v-spacer>

						<v-flex xs6 class="">
							<v-subheader class="text-xl-center">Équipe recevante</v-subheader>
						</v-flex>
						<v-flex xs6>
							<v-select
							  :items="teams1"
							  v-model="selectedTeam1"
							  label="Sélectionner l'équipe recevante"
							  item-text="name"
							  item-value="slug"
							  single-line
							  :disabled="selectedCompetition == ''"
							  :return-object="true"
							></v-select>
						</v-flex>
						<v-flex xs6 class="">
							<v-subheader class="text-xl-center">Équipe visiteuse</v-subheader>
						</v-flex>
						<v-flex xs6>
							<v-select
							  :items="teams2"
							  v-model="selectedTeam2"
							  label="Sélectionner l'équipe visiteuse"
							  item-text="name"
							  item-value="slug"
							  single-line
							  :disabled="selectedTeam1 == ''"
							  :return-object="true"
							></v-select>
						</v-flex>
					</v-layout>
				</v-container>
				<v-card-text class="text-md-center">
			  		<v-btn @click="createEvent" color="info" :disabled="!this.date || !this.time || !this.selectedTeam2">soumettre</v-btn>
					<!-- <v-btn @click="">clear</v-btn> -->
					<!-- {{ this.selectedCompetition.country.slug }} -->
					<!-- {{ this.selectedCompetition }} -->
				</v-card-text>
			</v-form>
		</v-card>
	</div>
</template>

<script>
	import formattedDate from '~/helpers/dateAndTimeToTimestamp'
	export default {
		created () {
			console.log('created')
			this.$store.dispatch('competitions/loadedCompetitions')
			this.$store.dispatch('teams/loadedTeams')
			this.$store.dispatch('stadiums/loadedStadiums')
		},
		props: ['activity', 'category'],
		data () {
			return {
				selectedCompetition: '',
				date: null,
				time: null,
				modalDate: false,
        		modalTime: false,
        		selectedStadium: '',
        		selectedTeam1: '',
        		selectedTeam2: '',
			}
		},
		computed: {
			disabled2 () {
				return !this.date || !this.time || !this.selectedStadium || !this.selectedTeam1 || !this.selectedTeam2
				// return true
			},
			competitions () {
				return this.$store.getters['competitions/loadedCompetitions'].filter(competition => competition.category.slug === 'football')
			},
			loadedCompetitions () {
				console.log('loadedCompetitions')
				return this.$store.getters['competitions/loadedCompetitions']
			},
			loadedTeams () {
		    	return this.$store.getters['teams/loadedTeams']
		    },
		    loadedStadiums () {
		    	if (this.selectedCompetition != '') {
		    		let stadiumsArray = []
		    		for (let country in this.selectedCompetition.countries) {
		    			stadiumsArray.push(this.$store.getters['stadiums/loadedStadiums'].filter(stadium => stadium.country.slug === country))
		    		}
		    		return [].concat(...stadiumsArray)
		    	} else {
		    		return this.$store.getters['stadiums/loadedStadiums']
		    	}
		    },
			teams1 () {
		    	let team2 = this.selectedTeam2.slug
		        if (this.selectedCompetition) {
		        	// return this.loadedTeams
		        	return this.loadedTeams.filter(team => team.competitions[this.selectedCompetition.slug] && team.slug != team2)
		    	}
		        // return this.loadedTeams.filter(function (el) {
		        //   	// return el.type[type] && el.slug != team2   
		        //   	if (this.selectedCompetition) {
		        //   		return el.competitions[this.selectedCompetition.slug] && el.slug != team2
		        //   	}
		        // })
		    },
		    teams2 () {
		    	let team1 = this.selectedTeam1.slug
		        if (this.selectedCompetition) {
		        	// return this.loadedTeams
		        	return this.loadedTeams.filter(team => team.competitions[this.selectedCompetition.slug] && team.slug != team1)
		    	}
		    },
		},
		methods: {
			createEvent () {
				console.log('submitCreateEvent')
				this.loading = true
				const eventData = {
					activity: {
			            slug: this.activity.slug,
			            name: this.activity.name
			        },
					category: {
						slug: this.category.slug,
						name: this.category.name
					},
			        type: {
			            slug: this.selectedCompetition.slug,
			            name: this.selectedCompetition.name
			        },
			        localteam: {
			            slug: this.selectedTeam1.slug,
			            name: this.selectedTeam1.name,
			        },
			        visitorteam: {
			            slug: this.selectedTeam2.slug,
			            name: this.selectedTeam2.name,
			        },
			        name: this.selectedTeam1.name + ' vs ' + this.selectedTeam2.name,
			        name_unique: this.selectedTeam1.id + '_vs_' + this.selectedTeam2.id + '_on_' + this.date,
			        location: {
			            venue: this.selectedStadium.name,
			            city: this.selectedStadium.city.name,
			            country: this.selectedStadium.country.name,
			            timezone: this.selectedStadium.timezone
			        },
			        date: formattedDate(this.date, this.time),
			        localteam_halftime_score: '',
			        localteam_score: '',
			        visitorteam_helftime_score: '',
			        visitorteam_score: '',
			        match_live: '',
			        match_status: '',
			        _created_at: new Date().getTime(),
			        _updated_at: new Date().getTime()
				}
				console.log(eventData)
				this.$store.dispatch('events/createEvent', eventData)
				this.$router.push('/admin/events')
			}
		},
		watch: {
			// selectedCategory: function () {
		 //    	console.log('Watch selectedCategory')
		 //        if (this.selectedCategory.slug != '') {
		 //          const category = this.selectedCategory.slug
		 //          this.competitions = this.loadedCompetition.filter(function (el) {
		 //            return el.category.slug == category
		 //          })
		 //        }
		 //    },
		}
	}
</script>

<style>
</style>