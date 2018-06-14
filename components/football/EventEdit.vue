<template>
	<div>
		<Confirm ref="confirm"></Confirm>
		<v-card>
			<!-- this.selectedMatchType: {{ this.selectedMatchType }}<br /><br /> -->
			<!-- event: {{ this.event }}<br /><br /> -->
			<v-form>
				<v-card-title class="primary-title">
					<v-card-text class="text-md-center">
						<h2>Éditer le résultat du match "{{ this.event.name }}"</i></h2>
					</v-card-text>
				</v-card-title>
				<v-container fluid>
					<v-layout row wrap>
						<!-- <v-flex xs6 v-if="selectedMatchStatus != 'to_be_played1'">
							<v-subheader class="text-xl-center">Classement calculé ?</v-subheader>
						</v-flex>
						<v-flex xs6 v-if="selectedMatchStatus != 'to_be_played1'">
							<v-radio-group v-model="standingCalculated">
								<v-radio
								  label="Oui, le classement tient compte du résultat de ce match"
								  color="success"
								  disabled
								></v-radio>
								<v-radio
								  label="Non, le classement ne tient pas compte du résultat de ce match"
								  color="error"
								  disabled
								></v-radio>
							</v-radio-group>
						</v-flex> -->
						<!-- selectedMatchStatus: {{ this.selectedMatchStatus }}<br /><br /> -->
						<!-- event.match_status: {{  this.event.match_status }}<br /><br /> -->
						<!-- event.match_type: {{ this.event.match_type }}<br /><br /> -->
						<v-flex xs6>
							<v-subheader class="text-xl-center">Statut du match</v-subheader>
						</v-flex>
						<v-flex xs6>
							<v-radio-group v-model="selectedMatchStatus">
								<v-radio
								  label="A venir"
								  color="primary"
								  value="to_be_played"
								></v-radio>
								<v-radio
								  label="En cours"
								  color="warning"
								  value="playing"
								></v-radio>
								<v-radio
								  label="Match terminé"
								  color="success"
								  value="played"
								></v-radio>
							</v-radio-group>
						</v-flex>

						<v-flex xs6>
							<v-subheader class="text-xl-center">Type de match</v-subheader>
						</v-flex>
						<v-flex xs6>
							<v-select
					          :items="match_types"
					          v-model="selectedMatchType"
					          item-text="name"
							  item-value="slug"
					          label="Sélectionner un type de match"
					          single-line
					        ></v-select>
						</v-flex>

						<v-flex xs4 offset-xs1 v-if="selectedMatchStatus != 'to_be_played'">
							<v-text-field
								v-model="selectedTeam1Score"
								type="number"
					      		min="0"
								:label="'Score équipe locale: ' + this.selectedTeam1.name"
					            placeholder="Indiquer le score de l'équipe locale"
					        ></v-text-field>
						</v-flex>

						<v-flex xs4 offset-xs1 v-if="selectedMatchStatus != 'to_be_played'">
							<v-text-field
								v-model="selectedTeam2Score"
								type="number"
					    		min="0"
					            :label="'Score équipe visiteuse: ' + this.selectedTeam2.name"
					            placeholder="Indiquer le score de l'équipe visiteuse"
					        ></v-text-field>
						</v-flex>
					</v-layout>
						
					<v-layout row wrap v-if="this.selectedMatchType != 'group_stage' && selectedMatchStatus != 'to_be_played'">
						<v-flex xs6>
							<v-subheader class="text-xl-center">Le score mentionné ci-dessus a-t-il été obtenu après prolongations?</v-subheader>
						</v-flex>
						<v-flex xs6>
							<v-checkbox
							  v-model="selectedExtraTime"
						      label="Oui, après prolongations"
						      color="primary"
						      style="padding-top: 12px"
						    ></v-checkbox>
						</v-flex>
						
						<v-flex xs6 v-if="this.selectedMatchType === 'one_legged_knockout_stage' || 'two_legged_knockout_stage'">
							<v-subheader class="text-xl-center">Tirs aux buts en fin de rencontre</v-subheader>
						</v-flex>
						<v-flex xs6 v-if="this.selectedMatchType === 'one_legged_knockout_stage' || 'two_legged_knockout_stage'">
							<v-checkbox
							  v-model="selectedPenaltyShootout"
						      label="Tirs aux buts"
						      color="primary"
						    ></v-checkbox>
						</v-flex>

						<v-flex xs4 offset-xs1 v-if="this.selectedPenaltyShootout">
							<v-text-field
								v-model="selectedTeam1PenaltyScore"
								type="number"
					      		min="0"									
								label="Score aux penalties de l'équipe locale"
					            placeholder="Indiquer le score aux penalties de l'équipe locale"
					        ></v-text-field>
						</v-flex>

						<v-flex xs4 offset-xs1 v-if="this.selectedPenaltyShootout">
							<v-text-field
								v-model="selectedTeam2PenaltyScore"
								type="number"
					      		min="0"
								label="Score aux penalties de l'équipe visiteuse"
					            placeholder="Indiquer le score aux penalties de l'équipe visiteuse"
					        ></v-text-field>
						</v-flex>
					</v-layout>
				</v-container>
				<v-card-text class="text-md-center">
			  		<v-btn @click="editMatchResult" color="info" :disabled="this.event.match_status === 'played' && this.event.match_type === 'group_stage'">soumettre le nouveau résultat</v-btn>
			  		<v-alert :value="true" type="error" v-if="this.event.match_status === 'played' && this.event.match_type === 'group_stage'">
      					Ce match a déjà été enregistré et le classement calculé. Les modifications ne sont donc plus possibles. Si toutefois le score doit être changé, il peut l'être manuellement sous le noeud "events" de firebase (voir bas de page <nuxt-link to="/admin/events">events</nuxt-link>). Il faut cependant prendre garde à également mettre à jour le classement.
    				</v-alert>
				</v-card-text>
			</v-form>
		</v-card>

		<br /><br /><br />

		<v-card>
			<!-- loadedCompetitions: {{ this.loadedCompetitions }}<br /><br /> -->
			<!-- selectedCompetition: {{ this.selectedCompetition }}<br /><br /> -->
			<!-- competitions: {{ this.competitions }}<br /><br />
			activity: {{ this.activity }}<br /><br />
			category: {{ this.category }}<br /><br /> -->
			<!-- loadedTeams: {{ this.loadedTeams }}<br /><br /> -->
			<!-- selectedTeam1: {{ this.selectedTeam1 }}<br /><br /> -->
			<!-- loadedStadiums: {{ this.loadedStadiums }}<br /><br /> -->
			<!-- selectedStadium: {{ this.$store.getters['stadiums/loadedStadiums'].find(stadium => (stadium.slug === 'anfield')) }}<br /><br /> -->
			<!-- teams1: {{ this.teams1 }}<br /><br /> -->
			<!-- event: {{ this.event }}<br /><br />  -->
			<!-- formattedDate: {{ this.event.date }}<br /><br /> -->
			<!-- selectedStadium: {{ this.selectedStadium }}<br /><br /> -->
			<!-- team1: {{ this.event.localteam }}<br /><br /> -->
			<!-- selectedTeam1: {{ this.selectedTeam1 }}<br /><br /> -->
			<!-- selectedTeam2: {{ this.selectedTeam2 }}<br /><br /> -->
			<!-- event: {{ this.event }}<br /><br /> -->
			<v-form>
				<v-card-title class="primary-title">
					<v-card-text class="text-md-center">
						<h2>Éditer les propiétés du match "{{ this.event.name }}"</i></h2>
					</v-card-text>
				</v-card-title>
				<v-container fluid>
					<v-layout row wrap>
						<v-flex xs6>
							<v-subheader>Compétition</v-subheader>
						</v-flex>
						<v-flex xs6>
							<v-select
							  :items="loadedCompetitions"
							  v-model="selectedCompetition"
							  label="Sélectionner une compétition"
							  item-text="name"
							  item-value="slug"
							  single-line
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
								item-value="name"
								:autocomplete="true"
								single-line
								:disabled="selectedCompetition == ''"
							>
								<template slot="item" slot-scope="data">
							      	<v-list-tile-content>
							        	<v-list-tile-title>
							          		<!-- {{ data.item.name }} <small style="color: #ccc;">{{ data.item.city.name }} - {{ data.item.country.name}}</small> -->
							          		{{ data.item.name }}
							        	</v-list-tile-title>
							      	</v-list-tile-content>
							    </template>
							</v-select>
						</v-flex>

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
							></v-select>
						</v-flex>
					</v-layout>
				</v-container>
				<v-card-text class="text-md-center">
			  		<v-btn @click="editEvent" color="info" :disabled="!this.date || !this.time || !this.selectedTeam2">soumettre les nouvelles propriétés</v-btn>
				</v-card-text>
			</v-form>
		</v-card>

		
		<br /><br />
	</div>
</template>

<script>
	import dateAndTimeToTimestamp from '~/helpers/dateAndTimeToTimestamp'
	import timestampToDateAndTime from '~/helpers/timestampToDateAndTime'
	import Confirm from '~/components/Confirm'
	export default {
		components: { Confirm },
		created () {
			console.log('entering created hook')
			// const eventId = this.$route.params.id
			// let event = this.$store.getters['events/loadedEvents'].find(event => (event.id === eventId))

			this.$store.dispatch('competitions/loadedCompetitions')
			this.$store.dispatch('teams/loadedTeams')
			this.$store.dispatch('stadiums/loadedStadiums')
			// console.log(formattedDate(1528988400))
			// let event =  this.event
			// console.log(this.$store.getters['competitions/loadedCompetitions'].find(competition => (competition.slug === 'world_cup_2018')))
			// console.log(this.$store.getters['stadiums/loadedStadiums'].find(stadium => (stadium.slug === 'anfield')))
			// console.log(this.$store.getters['teams/loadedTeams'].find(team => (team.slug === 'switzerland')))
			// console.log(1530165900)
			// console.log(timestampToDateAndTime(event2.date))
			// console.log(timestampToDateAndTime(event2.date).date)
			// console.log(timestampToDateAndTime(event2.date).hours)
			// console.log(timestampToDateAndTime(event2.date).minutes)
			// console.log(this.event.match_type)
		},
		mounted () {
			console.log('entering mounted hook')
			const eventId = this.$route.params.id
			let event = this.$store.getters['events/loadedEvents'].find(event => (event.id === eventId))
			console.log(event)
			this.activity = event.activity
		},
		props: ['event'],
		data () {
			return {
				eventId: this.$route.params.id,
				// activity: this.event.activity,
				activity: '',
				category: this.event.category,
				selectedCompetition: this.event.type,
				// selectedCompetition:  this.event,
				// competitions: [],
				// date: '2018-06-14',
				date: timestampToDateAndTime(this.event.date).date,
				// time: '12:00',
				time: timestampToDateAndTime(this.event.date).hours + ':' + timestampToDateAndTime(this.event.date).minutes,
				// competitionStartDate: null,
				// competitionEndDate: null,
				modalDate: false,
        		modalTime: false,
        		// modalStartDate: false,
        		// modalEndDate: false,
        		// selectedStadium: '',
        		selectedStadium: this.$store.getters['stadiums/loadedStadiums'].find(stadium => (stadium.name === this.event.location.venue)),
        		stadiums: [],
        		// selectedTeam1: '',
        		selectedTeam1: this.event.localteam,
        		// selectedTeam2: '',
        		selectedTeam2: this.event.visitorteam,
        		// selectedStatus: this.event.match_status,
        		radioGroup: 1,
        		// event: ''
        		selectedMatchStatus: this.event.match_status,
        		selectedMatchType: this.event.match_type,
        		match_types: [
        			{
        				name: 'Match à 3 points (par ex. Championnat, match de poule, etc.)',
        				slug: 'group_stage'
        			},
        			{
        				name: 'Match à élimination directe (par ex. finale, match de coupe)',
        				slug: 'one_legged_knockout_stage'
        			},
        			{
        				name: 'Match à élimination aller-retour (par ex. Ligue des Champions)',
        				slug: 'two_legged_knockout_stage'
        			}
        		],
        		selectedTeam1Score: this.event.localteam_score,
        		selectedTeam2Score: this.event.visitorteam_score,
        		selectedExtraTime: '',
        		selectedPenaltyShootout: '',
        		selectedTeam1PenaltyScore: '',
        		selectedTeam2PenaltyScore: '',	
        		// standingCalculated: this.event.standing_calculated,
        		// event: '',
        	}
		},
		computed: {
			// selectedCompetition: this.$store.getters['competitions/loadedCompetitions'].find(competition => (competition.slug === 'world_cup_2018')),
			disabled2 () {
				return !this.date || !this.time || !this.selectedStadium || !this.selectedTeam1 || !this.selectedTeam2
				// return true
			},
			// competitions () {
			// 	// return this.$store.getters['competitions/loadedCompetitions'].find(competition => competition.slug === 'world_cup_2018')
			// 	return this.$store.getters['competitions/loadedCompetitions'].filter(competition => competition.category.slug === 'football')
			// },
			loadedCompetitions () {
				console.log('loadedCompetitions')
				return this.$store.getters['competitions/loadedCompetitions']
			},
			loadedTeams () {
		    	return this.$store.getters['teams/loadedTeams']
		    },
		    loadedStadiums () {
		    	// if (this.selectedCompetition != '') {
		    	// 	return this.$store.getters['stadiums/loadedStadiums'].filter(stadium => stadium.country.slug === this.selectedCompetition.country.slug)
		    	// } else {
		    		return this.$store.getters['stadiums/loadedStadiums']
		    	// }
		    },
			teams1 () {
				return this.loadedTeams
		    	let team2 = this.selectedTeam2.slug
		        if (this.selectedCompetition) {
		        	// return this.loadedTeams
		        	return this.loadedTeams.filter(team => team.competitions[this.selectedCompetition.slug] && team.slug != team2)
		    	} else {
		    		return this.loadedTeams
		    	}
		        // return this.loadedTeams.filter(function (el) {
		        //   	// return el.type[type] && el.slug != team2   
		        //   	if (this.selectedCompetition) {
		        //   		return el.competitions[this.selectedCompetition.slug] && el.slug != team2
		        //   	}
		        // })
		    },
		    teams2 () {
		    	return this.loadedTeams
		    	let team1 = this.selectedTeam1.slug
		        if (this.selectedCompetition) {
		        	// return this.loadedTeams
		        	return this.loadedTeams.filter(team => team.competitions[this.selectedCompetition.slug] && team.slug != team1)
		    	}
		    },
		},
		methods: {
			editMatchResult () {
				const matchData = {
					event_id: this.eventId,
					name: this.event.name,
					localteam: this.selectedTeam1,
					visitorteam: this.selectedTeam2,
					competition: this.selectedCompetition,
					match_status: this.selectedMatchStatus,
					match_type: this.selectedMatchType,
					localteam_score: parseInt(this.selectedTeam1Score),
					visitorteam_score: parseInt(this.selectedTeam2Score),
					localteam_penalty_score: this.selectedTeam1PenaltyScore,
					visitorteam_penalty_score: this.selectedTeam2PenaltyScore,
					extra_time: this.selectedExtraTime,
					penalty_shootout: this.selectedPenaltyShootout,
					// standing_calculated: this.standingCalculated
				}
				console.log(matchData)


				if (this.selectedMatchStatus === 'played' && this.selectedMatchType === 'group_stage') {
					this.$refs.confirm.open('Avertissement', 'Le match est indiqué comme étant terminé, le classement sera mis à jour. Vérifiez donc que le résultat transmis est bien correct. Tout changement ultérieur du résultat a des conséquences sur le classement et devra donc être manuellement implémenté.', { color: 'orange' }).then((confirm) => {
			    		if (confirm) {
			    			this.$store.dispatch('events/updateMatchResult', matchData)
							this.$router.push('/admin/events')
						}
			    	})
				} else {
					this.$store.dispatch('events/updateMatchResult', matchData)
					this.$router.push('/admin/events')
				}						
			},
			editEvent () {
				console.log('submitEditEvent')
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
			        date: dateAndTimeToTimestamp(this.date, this.time),
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
				// this.$store.dispatch('events/createEvent', eventData)
				// this.$router.push('/admin/events')
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