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

	  	<v-flex xs12 sm10 offset-sm1>
	  		<br /><br />
	      	<h1 class="text-md-center">Events</h1>
	      	<!-- loadedEvents: {{ loadedEvents }} -->
	      	<br /><br />
	      	<v-btn color="primary" dark slot="activator" class="mb-2" to="/admin/events/create">Add an Event</v-btn>
	      	<!-- <v-card>
			    <v-card-title>
			      	Nutrition
			      	<v-spacer></v-spacer>
					<v-text-field
						append-icon="search"
						label="Search"
						single-line
						hide-details
						v-model="search"
					></v-text-field>
			    </v-card-title>
			    <v-data-table
				    :headers="headers"
				    :items="items"
				    :search="search"
			    >
					<template slot="items" slot-scope="props">
						<td>{{ props.item.name }}</td>
						<td class="text-xs-right">{{ props.item.calories }}</td>
						<td class="text-xs-right">{{ props.item.fat }}</td>
						<td class="text-xs-right">{{ props.item.carbs }}</td>
						<td class="text-xs-right">{{ props.item.protein }}</td>
						<td class="text-xs-right">{{ props.item.iron }}</td>
					</template>
		      		<v-alert slot="no-results" :value="true" color="error" icon="warning">
		        		Your search for "{{ search }}" found no results.
		      		</v-alert>
			    </v-data-table>
			</v-card> -->
			<v-card>
			    <v-card-title>
			      	Events
			      	<v-spacer></v-spacer>
					<v-text-field
						append-icon="search"
						label="Search"
						single-line
						hide-details
						v-model="search"
					></v-text-field>
			    </v-card-title>
			    <v-data-table
				    :headers="headers"
				    :items="loadedEvents"
				    :search="search"
				    v-model="selected"
				    item-key="id"
				    select-all
			    >
			    	<div v-if="loadedEvents">
						<template slot="items" slot-scope="props">
							<td>
						        <v-checkbox
						          primary
						          hide-details
						          v-model="props.selected"
						        ></v-checkbox>
						    </td>
						    <td>{{ props.index + 1 }}</td>
							<td>{{ props.item.name }}</td>
							<td class="text-xs-right">{{ props.item.activity.name }}</td>
							<td class="text-xs-right">{{ props.item.category.name }}</td>
							<td class="text-xs-right">{{ props.item.type.name }}</td>
							<td class="text-xs-right">{{ props.item.date }}</td>
							<td class="text-xs-right">{{ props.item.time }}</td>
							<!-- <td>{{ props.item.name }}</td>
							<td class="text-xs-right">{{ props.item.calories }}</td>
							<td class="text-xs-right">{{ props.item.fat }}</td>
							<td class="text-xs-right">{{ props.item.carbs }}</td>
							<td class="text-xs-right">{{ props.item.protein }}</td>
							<td class="text-xs-right">{{ props.item.iron }}</td> -->
							<td class="justify-center layout px-0">
					          <v-btn icon class="mx-0" :to="'/admin/tasks/' + props.item.id" :id="props.item.id">
					            <v-icon color="teal">edit</v-icon>
					          </v-btn>
					          <v-btn icon class="mx-0" @click="deleteItem(props.item)">
					            <v-icon color="pink">delete</v-icon>
					          </v-btn>
					        </td>
						</template>
					</div>
					<template slot="no-data">
				      <v-alert :value="true" color="error" icon="warning">
				        Sorry, nothing to display here. Either there is no data or you don't have the correct authorization to see it :(
				      </v-alert>
				    </template>
				    <v-alert slot="no-results" :value="true" color="error" icon="warning">
		        		Your search for "{{ search }}" found no results.
		      		</v-alert>
			    </v-data-table>



			    <!-- <v-data-table
				    :headers="headers"
				    :items="items"
				    hide-actions
				    class="elevation-1"
				  >
				    <template slot="items" slot-scope="props">
				      <td>{{ props.item.name }}</td>
				      <td class="text-xs-right">{{ props.item.calories }}</td>
				      <td class="text-xs-right">{{ props.item.fat }}</td>
				      <td class="text-xs-right">{{ props.item.carbs }}</td>
				      <td class="text-xs-right">{{ props.item.protein }}</td>
				      <td class="text-xs-right">{{ props.item.iron }}</td>
				    </template>
				    <template slot="no-data">
				      <v-alert :value="true" color="error" icon="warning">
				        Sorry, nothing to display here. Either there is no data, or there is data, but you don't have the correct authorization to see it :(
				      </v-alert>
				    </template>
				  </v-data-table> -->
			</v-card>
	    </v-flex>
	</div>
</template>

<script>
  	export default {
	    layout: 'layoutBack',
	    created () {
	    	this.$store.dispatch('events/loadedEvents')
	    },
	    data () {
	    	return {
		        search: '',
		        selected: [],
		        links: [
			        {
			          text: 'Dashboard',
			          to: '/admin',
			          disabled: false
			        },
			        {
			          text: 'Events',
			          to: '/admin/events',
			          disabled: true
			        }
			    ],
		        headers: [
		        	{ text: 'N°', value: 'id' },
		        	{ text: 'Name', value: 'name', align: 'left', sortable: false },
					{ text: 'Activity', value: 'activity' },
					{ text: 'Category', value: 'category' },
					{ text: 'Type', value: 'type' },
					{ text: 'Date', value: 'date' },
					{ text: 'Time', value: 'time' },
					{ text: 'Actions', value: 'actions', sortable: false }
		        ],
		        events: '',
		        items: [
					{
						value: false,
						name: 'Frozen Yogurt',
						calories: 159,
						fat: 6.0,
						carbs: 24,
						protein: 4.0,
						iron: '1%'
					},
					{
						value: false,
						name: 'Ice cream sandwich',
						calories: 237,
						fat: 9.0,
						carbs: 37,
						protein: 4.3,
						iron: '1%'
					},
					{
						value: false,
						name: 'Eclair',
						calories: 262,
						fat: 16.0,
						carbs: 23,
						protein: 6.0,
						iron: '7%'
					},
					{
						value: false,
						name: 'Cupcake',
						calories: 305,
						fat: 3.7,
						carbs: 67,
						protein: 4.3,
						iron: '8%'
					},
					{
						value: false,
						name: 'Gingerbread',
						calories: 356,
						fat: 16.0,
						carbs: 49,
						protein: 3.9,
						iron: '16%'
					},
					{
						value: false,
						name: 'Jelly bean',
						calories: 375,
						fat: 0.0,
						carbs: 94,
						protein: 0.0,
						iron: '0%'
					},
					{
						value: false,
						name: 'Lollipop',
						calories: 392,
						fat: 0.2,
						carbs: 98,
						protein: 0,
						iron: '2%'
					},
					{
						value: false,
						name: 'Honeycomb',
						calories: 408,
						fat: 3.2,
						carbs: 87,
						protein: 6.5,
						iron: '45%'
					},
					{
						value: false,
						name: 'Donut',
						calories: 452,
						fat: 25.0,
						carbs: 51,
						protein: 4.9,
						iron: '22%'
					},
					{
						value: false,
						name: 'KitKat',
						calories: 518,
						fat: 26.0,
						carbs: 65,
						protein: 7,
						iron: '6%'
					}
		        ]	    
	    	}
	    },
	    computed: {
	    	loadedEvents () {
	    		return this.$store.getters['events/loadedEvents']
	    	}
	    }
  	}
</script>