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
	      	<h1 class="text-md-center">Teams</h1>
	      	<!-- loadedEvents: {{ loadedEvents }} -->
	      	<br /><br />
	      	<v-btn color="primary" dark slot="activator" class="mb-2" to="/admin/teams/create">Add a Team</v-btn>
			<!-- {{ loadedEvents }} -->
			<v-card>
				<template>
				  <v-data-table
				    v-model="selected"
				    :headers="headers"
				    :items="loadedTeams"
				    select-all
				    :pagination.sync="pagination"
				    item-key="name"
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
						<td>{{ props.item.name }}</td>
						<td class="text-xs-right">{{ props.item.activity.name }}</td>
						<td class="text-xs-right">{{ props.item.category.name }}</td>
						<td class="text-xs-right">{{ props.item.type.name }}</td>
						<td class="justify-center layout px-0">
						  <v-btn icon class="mx-0" :to="'/admin/teams/' + props.item.id" :id="props.item.id" disabled>
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
	    	this.$store.dispatch('teams/loadedTeams')
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
			          text: 'Teams',
			          to: '/admin/teams',
			          disabled: true
			        }
			    ],
		        headers: [
		        	{ text: 'N°', value: 'id', align: 'left', sortable: false },
		        	{ text: 'Name', value: 'name' },
					{ text: 'Activity', value: 'activity' },
					{ text: 'Category', value: 'category' },
					{ text: 'Type', value: 'type' },
					// { text: 'Time', value: 'time' },
					{ text: 'Actions', value: 'actions', sortable: false }
		        ],
		        events: '',
		        pagination: {
			        sortBy: 'date',
			        descending: true
			    }
	    	}
	    },
	    computed: {
	    	loadedTeams () {
	    		return this.$store.getters['teams/loadedTeams']
	    	}
	    },
	    methods: {
	    	toggleAll () {
		        if (this.selected.length) {
		        	this.selected = []
		        } else {
		        	// this.selected = this.items.slice()
		        	this.selected = this.loadedTeams.slice()
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