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
	      	<h1 class="text-md-center">Compétitions</h1>
	      	<!-- loadedEvents: {{ loadedEvents }} -->
	      	<br /><br />
	      	<v-btn color="primary" dark slot="activator" class="mb-2" to="/admin/competitions/create">Créer une competition</v-btn>
			<!-- {{ loadedEvents }} -->
			<v-card>
				<template>
				  <v-data-table
				    v-model="selected"
				    :headers="headers"
				    :items="loadedCompetitions"
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
						<td class="text-xs-left" v-if="props.item.image"><img :src="'/images/competitions/' + props.item.image" width=60 /></td>
						<td v-else></td>
						<td class="text-xs-left">{{ props.item.year }}</td>
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
	    <h2 class="text-md-center">Noeud "Competitions" dans la base de données:</h2>
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
					<v-btn class="btn" :disabled="!changed || loading" @click="updateCompetition" color="success"><i v-bind:class="{'fa fa-spinner fa-spin' : loading}"></i>Sauver les changements</v-btn>
				</div>
				<br />
				<!-- <div v-if="displayJSON">{{ this.new_action }}</div> -->
			</v-card>
		</v-flex>
	</div>
</template>

<script>
	// if (process.browser) {
	// 	require('vue2-jsoneditor')
	// }
	// import jsonEditor from 'vue2-jsoneditor'
	// import jsonEditor from '~/plugins/vue2-jsoneditor.js'
	import '~/static/css/jsoneditor-tree.css'
	import Confirm from '~/components/Confirm.vue'
  	export default {
	    layout: 'layoutBack',
	    // components: { jsonEditor, Confirm },
	    // if (process.browser) {
	    	components: { Confirm },
	    // },
	    created () {
	    	this.$store.dispatch('competitions/loadedCompetitions')
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
			          text: 'Competitions',
			          to: '/admin/competitions',
			          disabled: true
			        }
			    ],
		        headers: [
		        	{ text: 'N°', value: 'id', align: 'left', sortable: false },
		        	{ text: 'Name', value: 'name', align: 'center' },
					{ text: 'Activity', value: 'activity', align: 'center' },
					{ text: 'Category', value: 'category', align: 'center' },
					{ text: 'Image', value: 'image', align: 'center' },
					{ text: 'Year', value: 'year', align: 'center' },
					// { text: 'Type', value: 'type' },
					// { text: 'Time', value: 'time' },
					{ text: 'Actions', value: 'actions', sortable: false }
		        ],
		        events: '',
		        pagination: {
			        sortBy: 'date',
			        descending: true
			    },
			    // old_action: this.$store.getters['competitions/loadedCompetitions'],
		        // new_action: this.$store.getters['competitions/loadedCompetitions'],
		        // newJSON: this.oldJSON,
		        newJSON: '',
		        // displayJSON: false
	    	}
	    },
	    computed: {
	    	loading () {
	    		return this.$store.getters['loading']
	    	},
	    	loadedCompetitions () {
	    		return this.$store.getters['competitions/loadedCompetitions']
	    	},
	    	changed () {
	    		console.log('changed!')
	    		if (this.newJSON && !_.isEqual(this.oldJSON, this.newJSON) ? true : false) {
	    			return true
	    		}
		        // return !_.isEqual(this.oldJSON, this.newJSON) ? true : false
		    },
		    oldJSON () {
		    	// return this.loadedCompetitions
		    	console.log(typeof this.loadedCompetitions)
		    	// if (typeof this.loadedCompetitions === 'object') {
		    		const arrayToObject = (array) =>
					   	array.reduce((obj, item) => {
					     	obj[item.slug] = item
					     	return obj
					   	},{})
					   	// const competitionObject = arrayToObject(this.loadedCompetitions)
				// } else {
				// 	const competitionObject = this.loadedCompetitions
				// }
						const competitionObject = arrayToObject(this.loadedCompetitions.sort((a, b) => a.slug.localeCompare(b.slug)))
				console.log(competitionObject)
				return competitionObject
			}
	    },
	    methods: {
	    	toggleAll () {
		        if (this.selected.length) {
		        	this.selected = []
		        } else {
		        	// this.selected = this.items.slice()
		        	this.selected = this.loadedCompetitions.slice()
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
		    	this.$refs.confirm.open('Delete', 'Are you sure you want to delete competition "' + item.name + '" ?', { color: 'red' }).then((confirm) => {
		    		// console.log(confirm)
		    		if (confirm) {
		    			this.$store.dispatch('competitions/deleteCompetition', item)
		    		}
		    	})
		    },
		    onChange(newJson) {
		        // console.log(newJson)
		        this.newJSON = newJson
		    },
		    updateCompetition () {
		        console.log('updateCompetition called!')
		        const competitionData = this.newJSON
		        // competitionData['_updated_at'] = new Date().getTime()
		        this.$store.dispatch('competitions/updateCompetition', competitionData)
		       	return this.$router.push('/admin/competitions')
		       	// return this.$router.push('/admin')
		    },
		    // toggleJSON() {
		    //     this.displayJSON = !this.displayJSON
		    // },
	    }
  	}
</script>