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
							<h2>Créer une équipe</h2>
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

			<football-team :activity="selectedActivity" :category="selectedCategory" v-if="selectedCategory.slug === 'football'"></football-team>

		</v-flex>
	</div>
</template>

<script>
  	import FootballTeam from '~/components/football/TeamCreate'
	export default {
		layout: 'layoutBack',
		components: { FootballTeam },
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
				      text: 'Teams',
				      disabled: false,
				      to: '/admin/teams'
				    },
				    {
				      text: 'Create',
				      disabled: true,
				      to: '/admin/teams/create'
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
