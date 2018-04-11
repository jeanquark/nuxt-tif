<template>
  	<v-flex xs12 sm10 offset-sm1>
  		<br /><br />
      	<h1 class="text-md-center">Users</h1>
      	<!-- loadedEvents: {{ loadedEvents }} -->
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
					<td>{{ props.item.status }}</td>
					<!-- <td class="text-xs-right">{{ props.item.firstname }}</td>
					<td class="text-xs-right">{{ props.item.lastname }}</td>
					<td class="text-xs-right">{{ props.item.email }}</td>
					<td class="text-xs-right">{{ props.item._created_at }}</td>
					<td class="text-xs-right">{{ props.item._updated_at }}</td> -->
					<td class="justify-center layout px-0">
			          <!-- <v-btn icon class="mx-0" @click="editItem(props.item)">
			            <v-icon color="teal">edit</v-icon>
			          </v-btn>
			          <v-btn icon class="mx-0" @click="deleteItem(props.item)">
			            <v-icon color="pink">delete</v-icon>
			          </v-btn> -->
			          
			          <!-- <v-btn @click="checkUserCustomClaim()">
			          	Check user status
			          </v-btn> -->

<!-- <v-btn icon class="mx-0" @click="updateUserAccount(props.item.email, 'userToAdmin')">
	Admin<v-icon color="teal">supervisor_account</v-icon>
</v-btn> -->
						<v-btn color="info" @click="updateUserAccount(props.item.email, 'userToAdmin')" v-if="props.item.status != 'admin'">
							Grant Admin privileges&nbsp;&nbsp;<v-icon color="white">supervisor_account</v-icon>
						</v-btn>
						<v-btn color="warning" @click="updateUserAccount(props.item.email, 'adminToUser')" v-if="props.item.status != 'user'">
							Revoke Admin privileges&nbsp;&nbsp;<v-icon color="white">supervisor_account</v-icon>
						</v-btn>
						<v-btn icon class="mx-0" @click="editItem(props.item)">
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
				{ text: 'Statut', value: 'status' },
				// { text: 'Nom', value: 'lastname' },
				// { text: 'E-mail', value: 'email' },
				// { text: 'Date de création', value: '_created_at' },
				// { text: 'Dernière modification', value: '_updated_at' }
				{ text: 'Actions', sortable: false }
	        ],
	        users: '',   
    	}
    },
    computed: {
    	loadedUsers () {
	    	return this.$store.getters['users/loadedAllUsers']
    	}
    },
    methods: {
    	// updateToAdmin () {
    	// 	console.log('click updateToAdmin')
    	// },
    	// updateToUser () {
    	// 	console.log('click updateToUser')
    	// }
    	async updateUserAccount(userEmail, action) {
    		console.log(userEmail)
    		// console.log(uid)
    		console.log(action)
    		// this.$store.dispatch('users/updateUserAccount', {userEmail, action})
    		this.$store.dispatch('users/updateUserAccount', {userEmail, action})
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