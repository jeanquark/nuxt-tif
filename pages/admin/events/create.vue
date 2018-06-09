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
			<!--   -->
			<!-- selectedCompetition: {{ this.selectedCompetition }}<br /> -->
			<!-- competitions: {{ this.competitions }} -->
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
							<v-flex xs6 v-if="loadedCategories != ''">
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
							<v-flex v-else>
								<v-progress-linear :indeterminate="true" height="2"></v-progress-linear>
							</v-flex>	
					    </v-layout>
				  	</v-container>
				</v-form>
			</v-card>

			<football-event :activity='this.selectedActivity' :category='this.selectedCategory' v-if="selectedCategory.slug === 'football'"></football-event>
		</v-flex>
		<br />
		<br />
	</div>
</template>

<script>
  	import FootballEvent from '~/components/football/eventCreate'
	export default {
		layout: 'layoutBack',
		components: { FootballEvent },
		created () {
			this.$store.dispatch('activities/loadedActivities')
    		this.$store.dispatch('categories/loadedCategories')
		},
		data () {
			return {
				selectedActivity: '',
        		selectedCategory: '',
        		categories: [],
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
			    loading: false,
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
		},
		watch: {
			selectedActivity: function () {
		        console.log('Watch selectedActivity')
		        this.categories = []
		        this.competitions = []
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
		}
	}
</script>

<style scoped>
	.toast {
		background-color: yellow;
	}
</style>