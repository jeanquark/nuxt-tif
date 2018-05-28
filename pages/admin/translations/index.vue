<template>
	<div>
		<v-breadcrumbs divider="/">
	      	<v-breadcrumbs-item
		        v-for="item in items"
		        :to="item.to"
		        :key="item.text"
		        :exact="true"
	      	>
	        	{{ item.text }}
	      	</v-breadcrumbs-item>
	    </v-breadcrumbs>
		<v-flex xs12 sm8 offset-sm2>
			<br /><br />
	      	<h1 class="text-md-center">Translations</h1>
	      	<br /><br />
			<v-card>
				<br />
				<div class="text-xs-center">
					<v-chip color="grey" text-color="white" @click="switchLanguage('french')" v-if="language != 'french'">
		            	<v-avatar>
		              		<img src="/images/flags/france.png" alt="flag of france">
		            	</v-avatar>
		       			Français
		          	</v-chip>

		          	<v-chip color="blue" text-color="white" v-else>
		       			Français
		            	<v-avatar class="chip-right">
		              		<img src="/images/flags/france.png" alt="flag of france">
		            	</v-avatar>
		          	</v-chip>

		          	<v-chip color="grey" text-color="white" @click="switchLanguage('english')" v-if="language != 'english'">
		            	<v-avatar>
		              		<img src="/images/flags/united_kingdom.png" alt="flag of united kingdom">
		            	</v-avatar>
		       			English
		          	</v-chip>

					<v-chip color="red" text-color="white" v-else>
		       			English
		            	<v-avatar class="chip-right">
		              		<img src="/images/flags/united_kingdom.png" alt="flag of united kingdom">
		            	</v-avatar>
		          	</v-chip>

		          	<v-chip color="grey" text-color="white" @click="switchLanguage('german')" v-if="language != 'german'">
		            	<v-avatar>
		              		<img src="/images/flags/germany.png" alt="flag of germany">
		            	</v-avatar>
		       			Deutsch
		          	</v-chip>

		          	<v-chip color="yellow" text-color="white" v-else>
		       			Deutsch
		            	<v-avatar class="chip-right">
		              		<img src="/images/flags/germany.png" alt="flag of germany">
		            	</v-avatar>
		          	</v-chip>
				</div>
				<br />
				<json-editor :json="json" :onChange="onChange" :class="language"></json-editor>
				<br /><br />
				<div class="text-xs-center">
					<v-btn class="btn" :disabled="!changed || loading" @click="updateJSON" color="success"><i v-bind:class="{'fa fa-spinner fa-spin' : loading}"></i>Sauver les changements</v-btn>
				</div><br />
			</v-card>
			<br />
		</v-flex>
	</div>
</template>

<style scoped>
	.chip-right {
		margin-left: 6px; 
		margin-right: -8px;
	}
</style>

<script>
	import essai from '~/lang/essai.json'
	import english from '~/lang/en-US.json'
	import french from '~/lang/fr-FR.json'
	import german from '~/lang/de-DE.json'
	import axios from 'axios'
	import '~/static/css/jsoneditor-tree.css'
	import Noty from 'noty'
	export default {
		layout: 'layoutBack',
		data () {
			return {
				items: [
				    {
				      text: 'Dashboard',
				      disabled: false,
				      to: '/admin'
				    },
				    {
				      text: 'Translations',
				      disabled: true,
				      to: '/admin/translations'
				    }
				],
				language: 'french',
				json: french,
				newJSON: ''
			}
		},
		computed: {
			loading () {
	    		return this.$store.getters['loading']
	    	},
			changed () {
	    		return this.newJSON && !_.isEqual(this.json, this.newJSON) ? true : false
		    }
		},
		methods: {
			updateJSON () {
				console.log('updateJSON')
				console.log(this.newJSON)

				axios.post('/update-translation-file', {
				    language: this.language,
				    file: this.file,
				    json: this.newJSON
				}).then((response) => {
                	new Noty({type: 'success', text: 'Modification du fichier de traduction effectuée avec succès', timeout: 5000, theme: 'metroui'}).show()		
					console.log('success')
				    console.log(response)
				}).catch(function (error) {
					new Noty({type: 'error', text: 'Le fichier de traduction n\'a pas pu être modifié avec succès', timeout: 5000, theme: 'metroui'}).show()
					console.log('error')
				    console.log(error)
				})
			},
			onChange (newJSON) {
				console.log('changed!')
				// console.log(newJSON)
				this.newJSON = newJSON
			},
			switchLanguage (language) {
				switch(language) {
					case 'french':
						this.json = french
						this.language = 'french'
						this.file = 'fr-FR.json'
						break
					case 'english':
						this.json = english
						this.language = 'english'
						this.file = 'en-US.json'
						break
					case 'german':
						this.json = german
						this.language = 'german'
						this.file = 'de-DE.json'
						break
				}
			}
		}
	}
</script>

<style>
	.chip .chip__content {
		cursor: pointer;
	}
	div .french .jsoneditor-menu {
		background: #2196f3;
	}
	div .french .jsoneditor-mode-tree {
		border: 1px solid #2196f3;
	}
	div .english .jsoneditor-menu {
		background: #f44336;
	}
	div .english .jsoneditor-mode-tree {
		border: 1px solid #f44336;
	}
	div .german .jsoneditor-menu {
		background: #ffeb3b;
	}
	div .german .jsoneditor-mode-tree {
		border: 1px solid #ffeb3b;
	}
</style>