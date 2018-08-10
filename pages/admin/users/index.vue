<template>
	<div>
		selectedRow: {{ selectedRow}}
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
	      	<h1 class="text-md-center">Users</h1>
	      	<br /><br />
	      	<v-btn color="primary" dark slot="activator" class="mb-2" to="/admin/events/create">Add a User</v-btn>
			<v-card>
			    <v-card-title>
			      	Users
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
				    :items="loadedUsers"
				    :search="search"
			    >
					<template slot="items" slot-scope="props">
						<td>{{ props.item.id }}</td>
						<td>{{ props.item.email }}</td>
						<td v-if="props.item.level">{{ props.item.level.value }}</td>
						<td v-if="props.item.status">{{ props.item.status.value }}</td>
						<td>{{ props.item._created_at | moment('DD MMM YYYY') }}</td>
						<td>
							<v-btn color="info" @click="updateUserAccount(props.item, 'userToAdmin')" v-if="props.item.status && props.item.status.value != 'admin'">
								Grant Admin privileges&nbsp;&nbsp;<v-icon color="white">supervisor_account</v-icon>&nbsp;<i :class="{ 'fa fa-spinner fa-spin' : selectedRow === props.item.email}"></i>
							</v-btn>
							<v-btn color="warning" @click="updateUserAccount(props.item, 'adminToUser')" v-if="props.item.status && props.item.status.value != 'user'">
								Revoke Admin privileges&nbsp;&nbsp;<v-icon color="white">supervisor_account</v-icon>&nbsp;<i :class="{ 'fa fa-spinner fa-spin' : selectedRow === props.item.email}"></i>
							</v-btn>
							<v-btn icon class="mx-0" disabled @click="editItem(props.item)">
								<v-icon color="teal">edit</v-icon>
							</v-btn>
							<v-btn icon class="mx-0" @click="deleteItem(props.item)">
								<v-icon color="pink">delete</v-icon>
							</v-btn>
				        </td>
					</template>
		      		<v-alert slot="no-results" :value="true" color="error" icon="warning">
		        		Your search for "{{ search }}" found no results.
		      		</v-alert>
			    </v-data-table>
			</v-card>
	    </v-flex>
	</div>
</template>

<script>
  export default {
    layout: 'layoutBack',
    created () {
    	this.$store.dispatch('users/loadedAllUsers')
    },
    data () {
    	return {
	        search: '',
	        headers: [
	        	{
		            text: 'ID',
		            align: 'left',
		            sortable: false,
		            value: 'id'
		        },
		        { text: 'E-mail', value: 'email' },
		        { text: 'Niveau', value: 'level.value' },
				{ text: 'Statut', value: 'status.value' },
				// { text: 'Nom', value: 'lastname' },
				// { text: 'E-mail', value: 'email' },
				{ text: 'Date de création', value: '_created_at' },
				// { text: 'Dernière modification', value: '_updated_at' }
				{ text: 'Actions', sortable: false }
	        ],
	        users: '',
	        links: [
	        	{
	        		text: 'Dashboard',
	        		to: '/admin',
	        		disabled: false
	        	},
	        	{
	        		text: 'Users',
	        		to: '/admin/users',
	        		disabled: true

	        	}
	        ],
	        selectedRow: '',
    	}
    },
    computed: {
    	loading () {
    		return this.$store.getters['loading']
    	},
    	loadedUsers () {
	    	return this.$store.getters['users/loadedAllUsers']
    	}
    },
    methods: {
    	async updateUserAccount(user, action) {
    		console.log('user: ', user)
    		// return
    		this.selectedRow = user.email
    		this.$store.dispatch('users/updateUserAccount', {user, action}).then(() => {
    			this.selectedRow = ''
    		}).catch(error => {
 				console.log('error: ', error)
    			this.selectedRow = ''
			})
    	},
    	// async upgradeUserAccountToAdmin (userEmail) {
    	// 	console.log(userEmail)
     //        // await this.$store.dispatch('users/updateUserAccountToAdmin', userEmail)
     //        this.$store.dispatch('users/updateUserAccount', userEmail)
     //    },
     //    async downgradeAdminAccountToUser (userEmail) {
     //    	console.log(userEmail)
     //    	this.$store.dispatch('users/updateUserAccount', userEmail)
     //    },
        checkUserCustomClaim () {
        	this.$store.dispatch('users/checkUserCustomClaim')
        }
    }
  }
</script>