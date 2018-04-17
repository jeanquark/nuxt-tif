<template>
	<v-layout>
	    <v-flex xs12 sm10 offset-sm1>
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
	      	<v-card class="mt-4">
	      		<v-form>
					<v-card-title class="primary-title">
						<v-card-text class="text-md-center">
							<h3>Tasks</h3>
						</v-card-text>
					</v-card-title>
					<v-container fluid>
					    <v-layout row wrap>
							
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
							    <v-btn flat color="primary" @click="modalEndDate = false">Cancel</v-btn>
							    <v-btn flat color="primary" @click="$refs.endDateDialog.save(date)">OK</v-btn>
							  </v-date-picker>
							</v-dialog>
						</v-layout>
					</v-container>
					<v-card-text class="text-md-center">
				  		<v-btn @click="submitRequestToFootballAPI" color="info">submit request to Football API</v-btn>
						<v-btn @click="">clear</v-btn>
					</v-card-text>
					<v-card-actions>
						<v-card-text class="text-md-center">
							<h3>Voici les résultats de la requête:</h3>
						</v-card-text>
					</v-card-actions>
				</v-form>
	      	</v-card>
	    </v-flex>
    </v-layout>
</template>

<script>
	export default {
		layout: 'layoutBack',
		props: ['id'],
		created () {

		},
		data () {
			return {
				links: [
					{
						text: 'Dashboard',
						to: '/admin/',
						disabled: false
					}, 
					{
						text: 'Tasks',
						to: '/admin/tasks',
						disabled: false
					},
					{
						text: 'Edit Task',
						disabled: true
					}
				]
			}
		}
	}
</script>