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
	      	<h1 class="text-md-center">Joueurs / Sportifs</h1>
	      	<!-- loadedEvents: {{ loadedEvents }} -->
	      	<br /><br />
	      	<v-btn color="primary" dark slot="activator" class="mb-2" to="/admin/player/create">Créer un joueur, un sportif</v-btn>
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
						<td class="text-xs-left">{{ props.item.activity.name }}</td>
						<td class="text-xs-left">{{ props.item.category.name }}</td>
						<td class="justify-center layout px-0">
						  <v-btn icon class="mx-0" :to="'/admin/players/' + props.item.id" :id="props.item.id" disabled>
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
	    <br />
	    <v-flex xs12 sm10 offset-sm1>
		    <v-card>
				<!-- oldJSON: {{ this.oldJSON }}<br /><br /> -->
		    	<!-- newJSON: {{ this.newJSON }} -->
		    	<!-- <div> -->
			    	<json-editor :json="oldJSON" :onChange="onChange"></json-editor>
				<!-- </div> -->
				<br />
				<div class="text-xs-center">
					<v-btn class="btn" :disabled="!changed || loading" @click="updatePlayer" color="success"><i v-bind:class="{'fa fa-spinner fa-spin' : loading}"></i>Sauver les changements</v-btn>
				</div>
				<br />
				<!-- <div v-if="displayJSON">{{ this.new_action }}</div> -->
			</v-card>
		</v-flex>
	</div>
</template>

<script>
	import '~/static/css/jsoneditor-tree.css'
	import Confirm from '~/components/Confirm.vue'
  	export default {
	    layout: 'layoutBack',
	    // components: { jsonEditor, Confirm },
	    // if (process.browser) {
	    	components: { Confirm },
	    // },
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
					{ text: 'Category', value: 'category', align: 'center' },
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
	    	loadedTeams () {
	    		return this.$store.getters['players/loadedPlayers']
	    	},
	    	changed () {
	    		console.log('changed!')
	    		if (this.newJSON && !_.isEqual(this.oldJSON, this.newJSON) ? true : false) {
	    			return true
	    		}
		        // return !_.isEqual(this.oldJSON, this.newJSON) ? true : false
		    },
		    oldJSON () {
		    	// return this.loadedPlayers
		    	console.log(typeof this.loadedPlayers)
		    	// if (typeof this.loadedPlayers === 'object') {
		    		const arrayToObject = (array) =>
					   	array.reduce((obj, item) => {
					     	obj[item.slug] = item
					     	return obj
					   	},{})
					   	// const playerObject = arrayToObject(this.loadedPlayers)
				// } else {
				// 	const playerObject = this.loadedPlayers
				// }
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
		        // console.log(newJson)
		        this.newJSON = newJson
		    },
		    updatePlayer () {
		        console.log('updatePlayer called!')
		        const playerData = this.newJSON
		        // playerData['_updated_at'] = new Date().getTime()
		        this.$store.dispatch('players/updatePlayer', playerData)
		       	return this.$router.push('/admin/players')
		       	// return this.$router.push('/admin')
		    },
		    // toggleJSON() {
		    //     this.displayJSON = !this.displayJSON
		    // },
	    }
  	}
</script>