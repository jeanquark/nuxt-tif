<template>
	<div>
		<v-breadcrumbs divider="/">
	      	<v-breadcrumbs-item
		        v-for="link in links"
		        :to="link.to"
		        :key="link.text"
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
							<h2>Créer une série d'événements depuis l'API</h2>
							<!-- disabled: {{ disabled }}<br /><br /> -->
							<!-- errors: {{ errors }}<br /><br /> -->
							<!-- validator: {{ this.$validator }} -->
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
						        >
						        	<template slot="item" slot-scope="data">
								      	<v-list-tile-content>
								        	<v-list-tile-title>
								          		{{ data.item.name }}, {{ data.item.area }}
								        	</v-list-tile-title>
								      	</v-list-tile-content>
								    </template>
						    	</v-select>
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
								    	:rules="[() => !disabled || 'Il ne peut pas y avoir un écart de plus de 7 jours entre les dates']"
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
								  		ref="endDateDialog2"
								    	slot="activator"
								    	label="Choisissez une date"
								    	v-model="form.endDate"
								    	prepend-icon="date_range"
								    	readonly
								    	:rules="[() => !disabled || 'Il ne peut pas y avoir un écart de plus de 7 jours entre les dates']"

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
				  		<v-btn color="primary" :loading="loading" :disabled="disabled" @click="createEvents">
		            		Créer les événements
		            	</v-btn>
		            	<br />
		            	<small>Si un événement impliquant les mêmes équipes le même jour existe déjà dans la base de données, il ne sera pas remplacé.</small>
					</v-card-text>
				</v-form>
			</v-card>
		</v-flex>
	</div>
</template>

<script>
	import moment from 'moment'
  	export default {
		layout: 'layoutBack',
		created () {
			// this.$store.dispatch('activities/loadedActivities')
    		// this.$store.dispatch('categories/loadedCategories')
    		console.log(moment().add(7, 'days').format('DD-MM-YYYY'))
		},
		data () {
			return {
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
				items: [
					{
			    		name: 'Toutes les compétitions',
			    		slug: 'all',
			    		area: 'Europe',
			    		id: 'all'
			    	},
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
			    // loading: false
			}
		},
		computed: {
			loading () {
				return this.$store.getters['loading']
			},
			loadedActivities () {
		        return this.$store.getters['activities/loadedActivities']
		    },
		    loadedCategories () {
		        return this.$store.getters['categories/loadedCategories']
		    },
		    disabled () {
		    	// return this.form.endDate
		    	const diff_in_milliseconds = moment(this.form.endDate).diff(moment(this.form.startDate))
		    	// console.log(diff_in_milliseconds)
		    	const diff_in_days = diff_in_milliseconds / (24 * 60 * 60 * 1000)
		    	// console.log(diff_in_days)
		    	// console.log('validator: ', this.$refs.endDateDialog2)
		    	if (Math.abs(diff_in_days) > 7) {
		    		return true
		    	}
		    	// this.$refs.endDateDialog2 ? this.$refs.endDateDialog2.errorBag = [] : ''
		    	// this.errors.clear()
		    	return false
		    }
		},
		methods: {
			createEvents() {
				console.log(this.form)
				// return
				this.$store.dispatch('events/createMultipleEvents', this.form)
			}
		},
		watch: {

		}
	}
</script>

<style scoped>

</style>