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
	      	<h1 class="text-md-center">Stades</h1>
	      	<!-- loadedEvents: {{ loadedEvents }} -->
	      	<br /><br />
	      	<v-btn color="primary" dark slot="activator" class="mb-2" to="/admin/stadiums/create">Créer un stade</v-btn>
			<!-- {{ loadedEvents }} -->
			<v-card>
				<v-card-title>
					Stades
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
					v-model="selected"
					:headers="headers"
					:items="loadedStadiums"
					:search="search"
					select-all
					:pagination.sync="pagination"
					:rows-per-page-items="[10,20,50]"
					item-key="name"
					class="elevation-1"
					>				
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
						<td class="text-xs-left">{{ props.item.city.name }}</td>
						<td class="text-xs-left">{{ props.item.capacity }}</td>
						<td class="justify-center layout px-0">
						  <v-btn icon class="mx-0" :to="'/admin/stadiums/' + props.item.id" :id="props.item.id">
							<v-icon color="teal">edit</v-icon>
						  </v-btn>
						  <v-btn icon class="mx-0" @click="deleteItem(props.item)">
							<v-icon color="pink">delete</v-icon>
						  </v-btn>
						</td>
					  </tr>
					</template>
					<v-alert slot="no-results" :value="true" color="error" icon="warning">
						Your search for "{{ search }}" found no results.
					</v-alert>
				</v-data-table>
			</v-card>
	    </v-flex>
	    
	    <br /><br />
	    <h2 class="text-md-center">Noeud "Stadiums" dans la base de données:</h2>
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
					<v-btn class="btn" :disabled="!changed || loading" @click="updateStadium" color="success"><i v-bind:class="{'fa fa-spinner fa-spin' : loading}"></i>Sauver les changements</v-btn>
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
	    	this.$store.dispatch('stadiums/loadedStadiums')
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
			          text: 'Stadiums',
			          to: '/admin/stadiums',
			          disabled: true
			        }
			    ],
		        headers: [
		        	{ text: 'N°', value: 'id', align: 'left', sortable: false },
		        	{ text: 'Name', value: 'name', align: 'left' },
					{ text: 'City', value: 'city', align: 'left' },
					{ text: 'Capacity', value: 'capacity', align: 'left' },
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
	    		return this.$store.getters['stadiums/loadedStadiums']
	    	},
	    	changed () {
	    		console.log('changed!')
	    		if (this.newJSON && !_.isEqual(this.oldJSON, this.newJSON) ? true : false) {
	    			return true
	    		}
		        // return !_.isEqual(this.oldJSON, this.newJSON) ? true : false
		    },
		    oldJSON () {
		    	// return this.loadedStadiums
		    	console.log(typeof this.loadedStadiums)
		    	// if (typeof this.loadedStadiums === 'object') {
		    		const arrayToObject = (array) =>
					   	array.reduce((obj, item) => {
					     	obj[item.slug] = item
					     	return obj
					   	},{})
					   	// const stadiumObject = arrayToObject(this.loadedStadiums)
				// } else {
				// 	const stadiumObject = this.loadedStadiums
				// }
						const stadiumObject = arrayToObject(this.loadedStadiums.sort((a, b) => a.slug.localeCompare(b.slug)))
				console.log(stadiumObject)
				return stadiumObject
			}
	    },
	    methods: {
	    	toggleAll () {
		        if (this.selected.length) {
		        	this.selected = []
		        } else {
		        	// this.selected = this.items.slice()
		        	this.selected = this.loadedStadiums.slice()
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
		    			this.$store.dispatch('stadiums/deleteStadium', item.id)
		    		}
		    	})
		    },
		    onChange(newJson) {
		        // console.log(newJson)
		        this.newJSON = newJson
		    },
		    updateStadium () {
		        console.log('updateStadium called!')
		        const stadiumData = this.newJSON
		        // stadiumData['_updated_at'] = new Date().getTime()
		        this.$store.dispatch('stadiums/updateStadium', stadiumData)
		       	return this.$router.push('/admin/stadiums')
		       	// return this.$router.push('/admin')
		    },
		    // toggleJSON() {
		    //     this.displayJSON = !this.displayJSON
		    // },
	    }
  	}
</script>
