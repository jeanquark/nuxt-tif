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
	      	<h1 class="text-md-center">Events</h1>
	      	<!-- loadedEvents: {{ loadedEvents }} -->
	      	<br /><br />
	      	<v-btn color="primary" dark slot="activator" class="mb-2" to="/admin/events/create">Add an Event</v-btn>
			<!-- {{ loadedEvents }} -->
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
					:pagination.sync="pagination"
					:rows-per-page-items="[10,20,50]"
				>
					<template slot="items" slot-scope="props">
					  <tr>
					    <td>{{ props.index + 1 }}</td>
					    <td>{{ props.item.id }}</td>
						<td class="text-xs-left">{{ props.item.name }}</td>
						<td class="text-xs-left">{{ props.item.localteam_score}} - {{ props.item.visitorteam_score }}</td>
						<td class="text-xs-left">{{ props.item.activity.name }}</td>
						<td class="text-xs-left">{{ props.item.category.name }}</td>
						<td class="text-xs-left">{{ props.item.type.name }}</td>
						<td class="text-xs-left">{{ props.item.date | moment('DD MMMM YYYY') }}</td>
						<td class="justify-center layout px-0">
						  <v-btn icon class="mx-0" :to="'/admin/events/' + props.item.id" :id="props.item.id">
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
	    <h2 class="text-md-center">Noeud "events_new" dans la base de données:</h2>
	    <!-- <b>modifyJSON:</b> {{ modifyJSON }} -->
	    <br />
	    <v-flex xs12 sm10 offset-sm1>
	    	{{ this.new_newJSON }}<br />
			<json-editor :json="oldJSON" :onChange="onChange"></json-editor>
			<br />
			<div class="text-xs-center">
				<v-btn class="btn" :disabled="!changed || loading" @click="updateEvent" color="success"><i v-bind:class="{'fa fa-spinner fa-spin' : loading}"></i>Sauver les changements</v-btn>
			</div><br />
		</v-flex>
	</div>
</template>

<script>
	import Confirm from '~/components/Confirm.vue'
	import '~/static/css/jsoneditor-tree.css'
  	export default {
	    layout: 'layoutBack',
	    components: { Confirm },
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
		        	{ text: 'N°', value: 'id', align: 'left' },
		        	{ text: 'ID', value: 'id', align: 'center' },
		        	{ text: 'Name', value: 'name', align: 'center' },
		        	{ text: 'Score', value: 'score', align: 'center' },
					{ text: 'Activity', value: 'activity', align: 'center' },
					{ text: 'Category', value: 'category', align: 'center' },
					{ text: 'Competition', value: 'type', align: 'center' },
					{ text: 'Date', value: 'date', align: 'center' },
					// { text: 'Time', value: 'time' },
					{ text: 'Actions', value: 'actions', sortable: false }
		        ],
		        events: '',
		        pagination: {
			        sortBy: 'date',
			        descending: true
			    },
			    newJSON: '',
			    new_newJSON: ''
	    	}
	    },
	    computed: {
	    	loading () {
	    		return this.$store.getters['loading']
	    	},
	    	loadedEvents () {
	    		return this.$store.getters['events/loadedEvents']
	    	},
	    	changed () {
	    		return this.newJSON && !_.isEqual(this.oldJSON, this.newJSON) ? true : false
		    },
	    	oldJSON () {
	    		// return this.loadedEvents
		    	console.log(typeof this.loadedEvents)
	    		const arrayToObject = (array) =>
				   	array.reduce((obj, item) => {
				     	obj[item.name] = item
				     	return obj
				   	},{})
				const eventObject = arrayToObject(this.loadedEvents.sort((a, b) => a.name.localeCompare(b.name)))
				console.log(eventObject)
				return eventObject
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
		    },
		    deleteItem (item) {
		    	this.$refs.confirm.open('Delete', 'Are you sure you want to delete "' + item.name + '" ?', { color: 'red' }).then((confirm) => {
		    		console.log(confirm)
		    		if (confirm) {
		    			this.$store.dispatch('events/deleteEvent', item.id)
		    		}
		    	})
		    },
		    onChange(newJson) {
		        this.newJSON = newJson
		    },
		    updateEvent () {
		        console.log('updateEvent called!')
		  //       const arrayToObject = (array) =>
				//    	array.reduce((obj, item) => {
				//      	obj[item.id] = item
				//      	return obj
				//    	},{})
				// this.new_newJSON = arrayToObject(this.newJSON)
		  //       console.log(this.new_newJSON)
		  		let myObj = this.newJSON
			 //  	Object.entries(myObj).forEach(function (obj, index) {
				// 	console.log('key: ' + obj[0])
				// 	console.log('values: ' + obj[1])
				// 	console.log('new key: ' + obj[1].id)
				// 	obj[0] = obj[1].id
				// 	// console.log(Object.keys(obj))
				// 	// myObj[key] = index
				// 	// key = 1
				// })
				// console.log(myObj) 
				const keyValues = Object.keys(myObj).map((key, index) => {
				 	console.log(key)
				 	// [key] = index
					const newKey = myObj[key].id || key
    				return { [newKey]: myObj[key] }
				})
				const abc = Object.assign({}, ...keyValues);
				console.log(abc)

				// console.log(replacedItems)
				// const object2 = Object.assign({c: 4, d: 5}, myObj)
				// console.log(object2)


		        // const eventData = this.newJSON
		        // this.$store.dispatch('events/updateEvent', eventData)
		       	// return this.$router.push('/admin/events')
		    },
	    }
  	}
</script>