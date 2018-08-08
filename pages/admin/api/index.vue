<template>
	<div>
		<v-breadcrumbs divider="/">
	  		<v-breadcrumbs-item
		        v-for="link in links"
		        :key="link.text"
		        :disabled="link.disabled"
		        :to="link.to"
		        :exact="true"
		      >
	    		{{ link.text }}
	  		</v-breadcrumbs-item>
		</v-breadcrumbs>

		<v-flex xs12 sm8 offset-sm2>
			<v-card>
				<v-form>
					<v-card-title primary-title class="text-md-center">
			          	<v-card-text class="text-md-center">
			            	<h3 class="headline mb-0">Faire une requête API</h3>
			            	<h4>La requête GET sera envoyée à l'adresse <a href="https://www.football-data.org" target="_blank">https://www.football-data.org</a></h4>
			            	<br />
			          	</v-card-text>
			        </v-card-title>

					<v-container fluid>
						<v-layout row wrap>
							<v-flex xs6>
								<v-subheader class="text-xl-center">Competitions</v-subheader>
							</v-flex>
							<v-flex xs6>
				            	<v-select
						          	:items="items"
						          	item-text="name"
						  			item-value="id"
						          	label="Sélectionner une compétition"
						          	:autocomplete="true"
									single-line
						          	v-model="form.competition"
									:return-object="true"
						        ></v-select>
						    </v-flex>

						    <v-flex xs6>
						      	<v-subheader>Date de début</v-subheader>
						    </v-flex>
					      	<v-flex xs6>
								<v-dialog
								  	ref="startDateDialog"
								  	persistent
								  	v-model="modalStartDate"
								  	lazy
								  	full-width
								  	width="290px"
								  	:return-value.sync="modalStartDate"
								>
								  	<v-text-field
									    slot="activator"
									    label="Choisissez une date"
									    v-model="form.startDate"
									    prepend-icon="date_range"
									    readonly
								  	></v-text-field>
								  	<v-date-picker locale="fr-fr" :first-day-of-week="1" v-model="form.startDate" actions>
								    	<v-spacer></v-spacer>
								    	<v-btn flat color="primary" @click="modalStartDate = false">Cancel</v-btn>
								    	<v-btn flat color="primary" @click="$refs.startDateDialog.save(form.startDate)">OK</v-btn>
								  	</v-date-picker>
								</v-dialog>
							</v-flex>

							<v-flex xs6>
						      	<v-subheader>Date de fin</v-subheader>
						    </v-flex>
					      	<v-flex xs6>
								<v-dialog
								  	ref="endDateDialog"
								  	persistent
								  	v-model="modalEndDate"
								  	lazy
								  	full-width
								  	width="290px"
								  	:return-value.sync="modalEndDate"
								>
								  	<v-text-field
								    	slot="activator"
								    	label="Choisissez une date"
								    	v-model="form.endDate"
								    	prepend-icon="date_range"
								    	readonly
								  	></v-text-field>
								  	<v-date-picker locale="fr-fr" :first-day-of-week="1" v-model="form.endDate" actions>
								    	<v-spacer></v-spacer>
								    	<v-btn flat color="primary" @click="modalEndDate = false">Cancel</v-btn>
								    	<v-btn flat color="primary" @click="$refs.endDateDialog.save(form.endDate)">OK</v-btn>
								  	</v-date-picker>
								</v-dialog>
							</v-flex>
						</v-layout>
					</v-container>

					<v-card-text class="text-md-center">
				  		<v-btn color="primary" dark slot="activator" class="mb-2" :loading="loading" @click="sendAPIRequest">
		            		Envoyer la requête
		            	</v-btn>
					</v-card-text>
				</v-form>
			</v-card>
			
			<br /><br />
			<v-card v-if="json">
				<v-card-title primary-title class="text-md-center">
					<v-card-text class="text-md-center">
		            	<h3 class="headline mb-0">Résultats de la requête (format JSON):</h3>
		            </v-card-text>
			    </v-card-title>

			    <v-card-text>
			    	<b>Nombre d'objets: </b> {{ this.json.data.count }}<br /><br />
	            	<b>Compétition: </b> {{ this.json.data.competition.name }}, {{ this.json.data.competition.area.name }}<br /><br />
	            	<b>Matchs: </b> {{ this.json.data.matches }}
				</v-card-text>
			</v-card>
			<br />
		</v-flex>
	</div>
</template>

<script>
	import axios from 'axios'
	import Noty from 'noty'
	export default {
		layout: 'layoutBack',
		data () {
			return  {
				links: [
			        {
			          text: 'Dashboard',
			          to: '/admin',
			          disabled: false
			        },
			        {
			          text: 'API',
			          to: '/admin/api',
			          disabled: true
			        }
			    ],
			    form: {
			    	competition: '',
			    	startDate: null,
				    endDate: null,
			    },
			    modalStartDate: false,
				modalEndDate: false,
				json: '',
			    items: [
			    	{
			    		name: 'UEFA Champions League',
			    		slug: 'uefa_champions_league',
			    		area: 'Europe',
			    		id: 2001
			    	}, {
			    		name: 'Primeira liga',
			    		slug: 'primeira_liga',
			    		area: 'Portugal',
			    		id: 2017
			    	},
			    	{
			    		name: 'Premier League',
			    		slug: 'premier_league',
			    		area: 'England',
			    		id: 2021
			    	},
			    	{
			    		name: 'Eredivisie',
			    		slug: 'eredivisie',
			    		area: 'Netherlands',
			    		id: 2003
			    	},
			    	{
			    		name: 'Bundesliga',
			    		slug: 'bundesliga',
			    		area: 'Germany',
			    		id: 2002
			    	},
			    	{
			    		name: 'Ligue 1',
			    		slug: 'ligue_1',
			    		area: 'France',
			    		id: 2015
			    	},
			    	{
			    		name: 'Serie A',
			    		slug: 'serie_A',
			    		area: 'Italy',
			    		id: 2019
			    	},
			    	{	name: 'Primera Division',
			    		slug: 'primera_division',
			    		area: 'Spain',
			    		id: 2014
			    	},
			    	{
			    		name: 'Championship',
			    		slug: 'championship',
			    		area: 'England',
			    		id: 2016
			    	}
			    ],
			}
		},
		computed: {
			loading () {
				return this.$store.getters['loading']
			}
		},
		methods: {
			sendAPIRequest () {
				console.log('sendAPIRequest')
				console.log('form: ', this.form)
				const competitionId = this.form.competition.id
				const startDate = this.form.startDate
				const endDate = this.form.endDate
				// return
				this.$store.commit('setLoading', true, { root: true })
				const url = 'https://api.football-data.org/v2/competitions/' + competitionId + '/matches?dateFrom=' + startDate + '&&dateTo=' + endDate
				console.log('url: ', url)
				// return
				axios.get(url, {
	                headers: {'X-Auth-Token': '3b3cd98fb2c441c9a9dff5a212a9e5f3'}
	            }).then((response) => {
	                console.log('success')
	                console.log(response)
	                this.json = response
	                this.$store.commit('setLoading', false, { root: true })
	                new Noty({type: 'success', text: 'API request sent successfully', timeout: 5000, theme: 'metroui'}).show()
	            }).catch(function (error) {
	                console.log('error')
	                console.log(error)
	                this.$store.commit('setLoading', false, { root: true })
	                new Noty({type: 'error', text: 'Sorry, an error occured while sending your api request.', timeout: 5000, theme: 'metroui'}).show()
	            })
			}
		}
	}
</script>

<style>
</style>