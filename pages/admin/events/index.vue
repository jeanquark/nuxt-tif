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

	  	<v-flex xs12 sm10 offset-sm1>
	  		<br /><br />
	      	<h1 class="text-md-center">Events</h1>
	      	<!-- loadedEvents: {{ loadedEvents }} -->
	      	<br /><br />
	      	<v-btn color="primary" dark slot="activator" class="mb-2" to="/admin/events/create">Add an Event</v-btn>
			<!-- {{ loadedEvents }} -->
			<v-card>
				<template>
				  <v-data-table
				    v-model="selected"
				    :headers="headers"
				    :items="loadedEvents"
				    select-all
				    :pagination.sync="pagination"
				    item-key="name_pretty"
				    class="elevation-1"
				  >
				    <template slot="headers" slot-scope="props">
				      <tr>
				        <th>
				          <v-checkbox
				            primary
				            hide-details
				            @click.native="toggleAll"
				            :input-value="props.all"
				            :indeterminate="props.indeterminate"
				          ></v-checkbox>
				        </th>
				        <th
				          v-for="header in props.headers"
				          :key="header.text"
				          :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
				          @click="changeSort(header.value)"
				        >
				          <v-icon small>arrow_upward</v-icon>
				          {{ header.text }}
				        </th>
				      </tr>
				    </template>
				    <template slot="items" slot-scope="props">
				      <tr :active="props.selected" @click="props.selected = !props.selected">
				        <td>
				          <v-checkbox
				            primary
				            hide-details
				            :input-value="props.selected"
				          ></v-checkbox>
				        </td>
				        <td>{{ props.index + 1 }}</td>
						<td>{{ props.item.name_pretty }}</td>
						<td class="text-xs-right">{{ props.item.activity.name }}</td>
						<td class="text-xs-right">{{ props.item.category.name }}</td>
						<td class="text-xs-right">{{ props.item.type.name }}</td>
						<td class="text-xs-right">{{ props.item.date | moment('DD MMMM YYYY') }}</td>
						<td class="justify-center layout px-0">
						  <v-btn icon class="mx-0" :to="'/admin/tasks/' + props.item.id" :id="props.item.id" disabled>
						    <v-icon color="teal">edit</v-icon>
						  </v-btn>
						  <v-btn icon class="mx-0" @click="deleteItem(props.item)" disabled>
						    <v-icon color="pink">delete</v-icon>
						  </v-btn>
						</td>
				      </tr>
				    </template>
				  </v-data-table>
				</template>
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
		        	{ text: 'N°', value: 'id', align: 'left', sortable: false },
		        	{ text: 'Name', value: 'name_pretty' },
					{ text: 'Activity', value: 'activity' },
					{ text: 'Category', value: 'category' },
					{ text: 'Type', value: 'type' },
					{ text: 'Date', value: 'date' },
					// { text: 'Time', value: 'time' },
					{ text: 'Actions', value: 'actions', sortable: false }
		        ],
		   		headers2: [
					{
						text: 'Dessert (100g serving)',
						align: 'left',
						sortable: false,
						value: 'name'
					},
					{ text: 'Calories', value: 'calories' },
					{ text: 'Fat (g)', value: 'fat' },
					{ text: 'Carbs (g)', value: 'carbs' },
					{ text: 'Protein (g)', value: 'protein' },
					{ text: 'Iron (%)', value: 'iron' }
				],
		        events: '',
		        pagination: {
			        sortBy: 'date',
			        descending: true
			    },
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
	    },
	    methods: {
	    	toggleAll () {
		        if (this.selected.length) {
		        	this.selected = []
		        } else {
		        	// this.selected = this.items.slice()
		        	this.selected = this.loadedEvents.slice()
		        }
		    },
		    changeSort (column) {
		        if (this.pagination.sortBy === column) {
		          this.pagination.descending = !this.pagination.descending
		        } else {
		          this.pagination.sortBy = column
		          this.pagination.descending = false
		        }
		    }
	    }
  	}
</script>