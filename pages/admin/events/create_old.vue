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
			selectedActivity: {{ this.selectedActivity }}<br />
			selectedCategory: {{ this.selectedCategory }}<br />
			categories: {{ this.categories }}<br />
			selectedCompetition: {{ this.selectedCompetition }}<br />
			competitions: {{ this.competitions }}
			<v-card>
				<v-form>
					<v-card-title class="primary-title">
						<v-card-text class="text-md-center">
							<h2>Créer un événement unique</h2>
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
								<!-- <v-subheader style="color: green; padding: 0px;" v-if="selectedCategory.slug === 'football'"><i class="fa fa-exclamation-triangle"></i>&nbsp;Possibilité d'utiliser Football API &nbsp;<i class="fa fa-arrow-down"></i></v-subheader> -->
							</v-flex>
							<v-flex xs6>
								<v-subheader>Competition</v-subheader>
							</v-flex>
							<v-flex xs6>
								<v-select
								  :items="competitions"
								  v-model="selectedCompetition"
								  label="Sélectionner une competition"
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
								  <v-date-picker locale="fr-fr" :first-day-of-week="1" v-model="date" actions>
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
								    label="Choisissez une heure (UTC)"
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
								<!-- <v-subheader style="margin-top: -30px; margin-left: 20px; font-weight: normal;"><i class="fa fa-exclamation-triangle"></i>&nbsp;L'heure à inscrire est l'heure UTC &nbsp;</v-subheader> -->
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
									    <template slot="item" slot-scope="data">
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


		<br />
		<br />
		<!-- {{ loadedActivities }}<br />
		{{ loadedCategories }}<br />
		{{ loadedTypes }}<br />
		{{ loadedStadiums }}<br />
		{{ loadedTeams }}<br /> -->
		<!-- Formatted date: {{ formattedDate('12.01.2018', '20:45') }}<br /> -->



		<!--<v-flex xs12 sm8 offset-sm2 v-if="selectedCategory.slug === 'football'">
			<v-card>
				<v-form>
					<v-card-title class="primary-title">
						<v-card-text class="text-md-center">
							<h3>Créer une liste d'événements à l'aide de <a href="https://football-api.com/documentation2/#!/Competitions/get_competitions" target="_blank">Football API</a></h3>
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
						<v-layout row wrap>
							<v-flex xs6>
								<v-subheader class="text-xl-center">Date de début</v-subheader>
							</v-flex>
							<v-dialog
							  ref="startDateDialog"
							  persistent
							  v-model="modalStartDate"
							  lazy
							  full-width
							  width="290px"
							  :return-value.sync="date"
							>
							  <v-text-field
							    slot="activator"
							    label="Choisissez une date"
							    v-model="competitionStartDate"
							    prepend-icon="date_range"
							    readonly
							  ></v-text-field>
							  <v-date-picker locale="fr-fr" :first-day-of-week="1" v-model="competitionStartDate" actions>
							    <v-spacer></v-spacer>
							    <v-btn flat color="primary" @click="modalStartDate = false">Annuler</v-btn>
							    <v-btn flat color="primary" @click="$refs.startDateDialog.save(date)">OK</v-btn>
							  </v-date-picker>
							</v-dialog>
							<v-flex xs6>
								<v-subheader class="text-xl-center">Date de fin</v-subheader>
							</v-flex>
							<v-dialog
							  ref="endDateDialog"
							  persistent
							  v-model="modalEndDate"
							  lazy
							  full-width
							  width="290px"
							  :return-value.sync="date"
							>
							  <v-text-field
							    slot="activator"
							    label="Choisissez une date"
							    v-model="competitionEndDate"
							    prepend-icon="date_range"
							    readonly
							  ></v-text-field>
							  <v-date-picker locale="fr-fr" :first-day-of-week="1" v-model="competitionEndDate" actions>
							    <v-spacer></v-spacer>
							    <v-btn flat color="primary" @click="modalEndDate = false">Annuler</v-btn>
							    <v-btn flat color="primary" @click="$refs.endDateDialog.save(date)">OK</v-btn>
							  </v-date-picker>
							</v-dialog>
						</v-layout>
					</v-container>
					<v-card-text class="text-md-center">
				  		<v-btn color="info" :disabled="loading || !validAPIRequestData" :loading="loading" @click="submitRequestToFootballAPI">submit request to Football API <i v-bind:class="{'fa fa-spinner fa-spin' : loading}"></i></v-btn>
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

<script>
	import moment from 'moment'
  	// import moment from '~/plugins/vue-moment'
  	import firebase from 'firebase'
  	import VueNotifications from 'vue-notifications'
  	import Noty from 'noty'
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
			this.$store.dispatch('events/loadedEvents')
			console.log(process.env.FOOTBALL_API_KEY)
		},
		data () {
			return {
				selectedActivity: '',
        		selectedCategory: '',
        		selectedCompetition: '',
        		selectedType: '',
        		categories: [],
        		competitions: [],
        		types: [],
        		selectedStadium: '',
        		stadiums: [],
        		selectedTeam1: '',
        		selectedTeam2: '',
        		// teams1: [],
				date: null,
				time: null,
				competitionStartDate: null,
				competitionEndDate: null,
        			// menu2: false,
        		modalDate: false,
        		modalTime: false,
        		modalStartDate: false,
        		modalEndDate: false,
		        // items: [
		        //   { text: 'State 1' },
		        //   { text: 'State 2' },
		        //   { text: 'State 3' },
		        //   { text: 'State 4' },
		        //   { text: 'State 5' },
		        //   { text: 'State 6' },
		        //   { text: 'State 7' }
		        // ],
		        selectedCompetition: '',
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
				      text: 'Events',
				      disabled: false,
				      to: '/admin/events'
				    },
				    {
				      text: 'Create',
				      disabled: true,
				      to: '/admin/events/create'
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
		    loadedCompetitions () {
		    	return this.$store.getters['competitions/loadedCompetitions']
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
		    loadedEvents () {
		    	return this.$store.getters['events/loadedEvents']
		    },
		    // teams1 () {
		    // 	let type = this.selectedType.slug
		    // 	// console.log(type)
		    // 	let team2 = this.selectedTeam2.slug
		    // 	// console.log(team2)
		    //     return this.loadedTeams.filter(function (el) {
		    //       return el.type[type] && el.slug != team2
		    //     })
		    // },
		    // teams2 () {
		    // 	let type = this.selectedType.slug
		    // 	let team1 = this.selectedTeam1.slug
		    //     return this.loadedTeams.filter(function (el) {
		    //       	return el.type[type] && el.slug != team1
		    //     })
		    // },
		    loadedCompetitions () {
		    	// console.log(this.loadedTypes)
		    	// return this.loadedTypes.filter(type => type.category === 'football')
		    	let competitions = this.loadedTypes.filter(type => type.category === 'football')
		    	competitions.push({id: 'all_competition', name: 'All competitions'})
		    	// console.log(competitions)
		    	return competitions
		    },
		    validAPIRequestData () {
		    	const a = moment(this.competitionStartDate)
		    	// console.log(a)
		    	const b = moment(this.competitionEndDate)
		    	// console.log(b)
		    	const diffDays = b.diff(a, 'days')
		    	// console.log(diffDays)
		    	return this.selectedCompetition.football_api_id === 1204 && a < b && diffDays <= 31

		    }
		},
		methods: {
			submitCreateEvent () {
				console.log('submitCreateEvent')
				this.loading = true
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
			        name_pretty: this.selectedTeam1.name + ' vs ' + this.selectedTeam2.name,
			        name_unique: this.selectedTeam1.football_api_id + '_vs_' + this.selectedTeam2.football_api_id + '_' + this.date,
			        location: {
			            venue: this.selectedStadium.name,// = 'undefined' ? null : this.selectedStadium,
			            city: this.selectedStadium.city_name,// = 'undefined' ? null : this.selectedStadium
			            country: this.selectedStadium.country_name,
			            timezone: this.selectedStadium.timezone
			        },
			        // date: this.formattedDate(this.date, this.time),
			        // time: this.time,
			        date2: this.date,
			        // endDate: this.endDate,
			        _created_at: new Date().getTime(),
			        // _created_by: document.getElementsByName('username')[0].value,
			        _updated_at: new Date().getTime()
				}
				this.$store.dispatch('events/createEvent', eventData)
			},
			formattedDate (date, time) {
		    	// Takes a string date with format DD.MM.YYYY and first transform it to YYYY-MM-DD and then to timestamp
	    		const [day, month, year] = date.split(".")
				const reOrderedDate = year + '-' + month + '-' + day
		    	const completeDate = reOrderedDate + ' ' + time
		    	const formattedDate = parseInt(moment(completeDate).format('x')/1000)
		    	return formattedDate
		    },
			submitRequestToFootballAPI () {
				console.log('submitRequestToFootballAPI')
				this.loading = true
				const eventsArray = []
				this.loadedEvents.forEach((event) => {
					// console.log(event)
					eventsArray.push(event.name_unique)
				})

				// Get local data that micmic football api response
				// this.$axios.$get('/football_api_sample_data_get_matches.json').then((response) => {
				// this.$axios.$get('http://api.football-api.com/2.0/matches?comp_id=' + this.selectedCompetition.football_api_id + '&from_date=' + this.competitionStartDate + '&to_date=' + this.competitionEndDate + '&Authorization=' + '565ec012251f932ea4000001d191fefd02dd4b6f65bf2e5aa5478f1d').then((response) => {
				this.$axios.$get('https://apifootball.com/api/?action=get_events&from=' + this.competitionStartDate + '&to=' + this.competitionEndDate + '&league_id=' + this.selectedCompetition.api_football_id + ' &APIkey=' + process.env.API_FOOTBALL_KEY).then((response) => {
					// console.log(response)
		            this.footballAPIRequestResult = response
		            // console.log(eventsArray)
		            // const eventsArray = []

					response.forEach((event) => {
						console.log(event)
						const hometeam = this.loadedTeams.find(team => team.api_football_name === event.match_hometeam_name)
						const awayteam = this.loadedTeams.find(team => team.api_football_name === event.match_awayteam_name)
						console.log(hometeam)
						console.log(awayteam)
						const date_as_timestamp = new Date(event.match_date).getTime() / 1000
						console.log(date_as_timestamp)
						const name_unique = hometeam.id + '_vs_' + awayteam.id + '_on_' + date_as_timestamp
						console.log(name_unique)
						const name_pretty = hometeam.name + ' vs ' + awayteam.name
						console.log(name_pretty)
						// return

						if (!eventsArray.includes(name_unique)) {
							const newPostKey = firebase.database().ref().child('events_new').push().key
						
							let eventData = {
				                id: newPostKey,
				                activity: {
						            slug: 'sport',
						            name: 'Sport'
						        },
								category: {
									slug: 'football',
									name: 'Football'
								},
						        type: {
						            slug: 'premier_league',
						            name: 'Premier League'
						        },
						        // football_api_id: event.id,
				                api_football_id: event.match_id,
				                country_name: event.country_name,
				                country_id: event.country_id,
				                competition_name: event.league_name,
				                competition_id: event.league_id,
				                date: date_as_timestamp,
				                // localteam_id: event.localteam_id,
				                localteam_name: event.match_hometeam_name,
				                localteam_score: event.match_hometeam_score,
				                localteam_halftime_score: event.match_hometeam_halftime_score,
				                // visitorteam_id: event.visitorteam_id,
				                visitorteam_name: event.match_awayteam_name,
				                visitorteam_score: event.match_awayteam_score,
				                visitorteam_halftime_score: event.match_awayteam_score,
				                // venue_id: event.venue_id,
				                // venue: event.venue,
				                // venue_city: event.venue_city,
				                // week: event.week,
				                status: event.match_status,
				                // half_time_score: event.ht_score,
				                // full_time_score: event.ft_score,
				                match_live: event.match_live,
				                name_pretty: name_pretty,
				                name_unique: name_unique
				            }
				            let updates = {}
			            	updates['/events_new/' + eventData.id] = eventData
			            	firebase.database().ref().update(updates).then(() => {
			            		console.log('success!')
			            		this.loading = false
		            			new Noty({type: 'success', layout: 'topRight', text: 'Evénement ' + name_pretty + ' créé avec succès.', timeout: 5000, theme: 'metroui', maxVisible: 10}).show()

			            	}).catch((error) => {
			            		console.log('error')
			            		this.loading = false
			            		console.log(error.message)
			            		new Noty({type: 'error', text: 'Erreur avec firebase: ' + error.message, timeout: 5000, theme: 'metroui'}).show()
			            	})
						} else {
							console.log('This event already exists in database!')
							// this.showSuccessMsg()
							this.loading = false
							this.showWarnMsg({message: 'Event ' + name_pretty + ' on ' + event.match_date + ' already exists in database!'})
							// VueNotifications.types.info({message: 'Event already exists in database!'})
						}
		            })
		            console.log(eventsArray)
				})



				// this.$axios.$get('https://reqres.in/api/users?page=2').then((response) => {
				// 	console.log(response)
				// 	date2 = formattedDate(event.formatted_date, event.time)
				// 	response.data.forEach((event) => {
		  //             this.footballAPIRequestResult = response.data;
		  //             let eventData = {
		  //               id: parseInt(event.id),
		  //               comp_id: event.comp_id,
		  //               // date: event.formatted_date,
		  //               date: date2,
		  //               time: event.time,
		  //               localteam_id: event.localteam_id,
		  //               localteam_name: event.localteam_name,
		  //               visitorteam_id: event.visitorteam_id,
		  //               visitorteam_name: event.visitorteam_name,
		  //               venue_id: event.venue_id,
		  //               venue: event.venue,
		  //               venue_city: event.venue_city,
		  //               week: event.week,
		  //               name_pretty: event.localteam_name + ' vs ' + event.visitorteam_name,
		  //               name_unique: event.localteam_id + '_vs_' + event.visitorteam_id + '_' + date2v   
		  //             }
		  //             console.log(eventData)
		  //             let updates = {}
		  //             updates['/events2/' + eventData.id] = eventData
		  //             this.loading = false
		  //             // toastr.success('Evénement créé avec succès!', 'Succès')
		  //             return firebase.database().ref().update(updates)
		  //           })
				// }).catch(error => {
				// 	console.log(error)
				// })
			}
		},
		watch: {
			selectedActivity: function () {
		        console.log('Watch selectedActivity')
		        this.categories = []
		        this.competitions = []
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
		    selectedCompetition: function () {
		    	// console.log('Watch selectedCategory')
		        if (this.selectedCompetition.slug != '') {
		          const category = this.selectedCategory.slug
		          this.competitions = this.loadedCompetitions.filter(function (el) {
		            return el.category.slug == category
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