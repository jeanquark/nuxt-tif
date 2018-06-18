<template>
	<div>
		<Confirm ref="confirm"></Confirm>
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
	      	<h1 class="text-md-center">Players</h1>
	      	<!-- loadedEvents: {{ loadedEvents }} -->
	      	<br /><br />
	      	<v-btn color="primary" dark slot="activator" class="mb-2" to="/admin/players/create">Add a Player</v-btn>
			<!-- {{ loadedEvents }} -->
			<v-card>
				<template>
				  <v-data-table
				    v-model="selected"
				    :headers="headers"
				    :items="loadedPlayers"
				    select-all
				    :pagination.sync="pagination"
				    item-key="name"
				    class="elevation-1"
				    :rows-per-page-items="[10,25,{'text':'All','value':-1}]"
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
				          :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '', header.align === 'left' ? 'text-xs-left' : '',]"
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
						<td class="text-xs-left">{{ props.item.name }}</td>
						<td class="justify-center layout px-0">
						  <v-btn icon class="mx-0" :to="'/admin/competitions/' + props.item.id" :id="props.item.id" disabled>
						    <v-icon color="teal">edit</v-icon>
						  </v-btn>
						  <v-btn icon class="mx-0" @click="deleteItem(props.item)">
						    <v-icon color="pink">delete</v-icon>
						  </v-btn>
						</td>
				      </tr>
				    </template>
				  </v-data-table>
				</template>
			</v-card>
	    </v-flex>
	    
	    <br /><br />
	    <h2 class="text-md-center">Noeud "Players" dans la base de données:</h2>
	    <!-- <b>modifyJSON:</b> {{ modifyJSON }} -->
	    <br />
	    <v-flex xs12 sm10 offset-sm1>
			<json-editor :json="oldJSON" :onChange="onChange"></json-editor>
			<br />
			<div class="text-xs-center">
				<v-btn class="btn" :disabled="!changed || loading" @click="updatePlayer" color="success"><i v-bind:class="{'fa fa-spinner fa-spin' : loading}"></i>Sauver les changements</v-btn>
			</div><br />
		</v-flex>
	</div>
</template>

<script>
	import Confirm from '~/components/Confirm.vue'
	// import jsonEditor from 'vue2-jsoneditor'
	// import jsonEditor from '~/plugins/vue2-jsoneditor.js'
	import '~/static/css/jsoneditor-tree.css'
  	export default {
	    layout: 'layoutBack',
	    components: { Confirm },
	    created () {
	    	this.$store.dispatch('players/loadedPlayers')
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
			          text: 'Players',
			          to: '/admin/players',
			          disabled: true
			        }
			    ],
		        headers: [
		        	{ text: 'N°', value: 'id', align: 'left', sortable: false },
		        	{ text: 'Name', value: 'name', align: 'center' },
					{ text: 'Actions', value: 'actions', sortable: false }
		        ],
		        events: '',
		        pagination: {
			        sortBy: 'date',
			        descending: true
			    },
		        newJSON: '',
	    	}
	    },
	    computed: {
	    	loading () {
	    		return this.$store.getters['loading']
	    	},
	    	loadedPlayers () {
	    		return this.$store.getters['players/loadedPlayers']
	    	},
	    	changed () {
	    		return this.newJSON && !_.isEqual(this.oldJSON, this.newJSON) ? true : false
		        // return !_.isEqual(this.oldJSON, this.newJSON) ? true : false
		    },
			oldJSON () {
		    	console.log(typeof this.loadedPlayers)
	    		const arrayToObject = (array) =>
				   	array.reduce((obj, item) => {
				     	obj[item.id] = item
				     	return obj
				   	},{})
				// const playerObject = arrayToObject(this.loadedPlayers)
				const playerObject = arrayToObject(this.loadedPlayers.sort((a, b) => a.slug.localeCompare(b.slug)))
				console.log(playerObject)
				return playerObject
			}
	    },
	    methods: {
	    	toggleAll () {
		        if (this.selected.length) {
		        	this.selected = []
		        } else {
		        	// this.selected = this.items.slice()
		        	this.selected = this.loadedPlayers.slice()
		        }
		    },
		    changeSort (column) {
		        if (this.pagination.sortBy === column) {
		          this.pagination.descending = !this.pagination.descending
		        } else {
		          this.pagination.sortBy = column
		          this.pagination.descending = false
		        }
		    },
		    deleteItem (item) {
		    	this.$refs.confirm.open('Delete', 'Are you sure you want to delete "' + item.name + '" ?', { color: 'red' }).then((confirm) => {
		    		console.log(confirm)
		    		if (confirm) {
		    			this.$store.dispatch('players/deletePlayer', item.id)
		    		}
		    	})
		    },
		    onChange(newJson) {
		        this.newJSON = newJson
		    },
		    updatePlayer () {
		        console.log('updatePlayer called!')
		        const playerData = this.newJSON
		        this.$store.dispatch('players/updatePlayer', playerData)
		       	return this.$router.push('/admin/players')
		    },
	    }
  	}
</script>
