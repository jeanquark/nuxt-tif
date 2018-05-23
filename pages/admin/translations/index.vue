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
			<v-card>
				
			</v-card>
		</v-flex>
	</div>
</template>

<script>
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
			}
		}
	}
</script>

<style>
</style>