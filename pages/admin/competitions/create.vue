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
					<v-container fluid v-if="loadedCategories != ''">
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
								  item-value="slug"
								  :autocomplete="true"
								  single-line
						          :return-object="true"
								></v-select>
							</v-flex>
							<v-flex v-else>
								<v-progress-linear :indeterminate="true" height="2"></v-progress-linear>
							</v-flex>

							<v-flex xs6>
								<v-subheader class="text-md-right">Catégorie</v-subheader>
							</v-flex>
							<v-flex xs6>
								<v-select
								  :items="loadedCategories"
								  v-model="selectedCategory"
								  label="Sélectionner une catégorie"
								  item-text="name"
								  item-value="slug"
								  :autocomplete="true"
								  single-line
								  :disabled="selectedActivity.slug == ''"
						          :return-object="true"
								></v-select>
							</v-flex>
						</v-layout>						
				  	</v-container>
				</v-form>
			</v-card>

			<football-competition :activity="selectedActivity" :category="selectedCategory" v-if="selectedCategory.slug === 'football'"></football-competition>
			<icehockey-competition :activity="selectedActivity" :category="selectedCategory" v-if="selectedCategory.slug === 'icehockey'"></icehockey-competition>
			<tennis-competition :activity="selectedActivity" :category="selectedCategory" v-if="selectedCategory.slug === 'tennis'"></tennis-competition>

		</v-flex>
	</div>
</template>

<script>
  	import FootballCompetition from '~/components/football/CompetitionCreate'
  	import IcehockeyCompetition from '~/components/icehockey/CompetitionCreate'
  	import TennisCompetition from '~/components/tennis/CompetitionCreate'
	export default {
		layout: 'layoutBack',
		components: { FootballCompetition, IcehockeyCompetition, TennisCompetition },
		created () {
			this.$store.dispatch('activities/loadedActivities')
    		this.$store.dispatch('categories/loadedCategories')
		},
		data () {
			return {
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
				selectedActivity: '',
        		selectedCategory: ''
			}
		},
		computed: {
			loadedActivities () {
		        return this.$store.getters['activities/loadedActivities']
		    },
		    loadedCategories () {
		        return this.$store.getters['categories/loadedCategories']
		    }
		},
		methods: {
		}
	}
</script>

<style scoped>
	/*[v-cloak] > * { 
		display:none; 
	}*/
</style>
