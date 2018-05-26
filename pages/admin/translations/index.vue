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
					<v-chip color="blue" text-color="white" @click="switchLanguage('french')">
		            	<v-avatar>
		              		<img src="/images/flags/france.png" alt="trevor">
		            	</v-avatar>
		       			French
		          	</v-chip>
		          	<v-chip color="red" text-color="white" @click="switchLanguage('english')">
		            	<v-avatar>
		              		<img src="/images/flags/united_kingdom.png" alt="trevor">
		            	</v-avatar>
		       			English
		          	</v-chip>
		          	<v-chip color="yellow" text-color="white" @click="switchLanguage('german')">
		            	<v-avatar>
		              		<img src="/images/flags/germany.png" alt="trevor">
		            	</v-avatar>
		       			German
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

<script>
	import essai from '~/lang/essai.json'
	import english from '~/lang/en-US.js'
	import french from '~/lang/fr-FR.js'
	import german from '~/lang/de-DE.js'
	import axios from 'axios'
	import '~/static/css/jsoneditor-tree.css'
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
		    },
		},
		methods: {
			updateJSON () {
				console.log('updateJSON')
				console.log(this.newJSON)

				axios.post('/update-translation-file', {
				    language: this.language,
				    json: this.newJSON
				}).then((response) => {
					console.log('success')
				    console.log(response)
				}).catch(function (error) {
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
						break
					case 'english':
						this.json = english
						this.language = 'english'
						break
					case 'german':
						this.json = german
						this.language = 'german'
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