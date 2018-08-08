<template>
	<div class="container-fluid">
		<!-- The Modal Pseudo -->
		<div id="modalBox">
			<div class="modal-dialog modal-lg">
				<div class="modal-content loginmodal-container">
					<!-- Modal Header -->
					<div class="modal-header">
					  	<span class="modal-title">Ton pseudo <span class="modal-title-Sub">(Tes Paramètres)</span></span>
						<nuxt-link to="/user/preferences">
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true" class="white-text"><i class="fa fa-arrow-circle-left"></i></span>
							</button>
						</nuxt-link>					
					</div>
					<!-- Modal body -->
					<div id="modalBoxContent" class="modal-body">
						<div class="flex-container-modal-MyTeam">
							<h1>C'est quoi ton pseudo ?</h1>
							<!-- loadedUser: {{ loadedUser }}<br /><br /> -->
							<!-- pseudo: {{ this.username }}<br /><br /> -->
						</div>
						<form>
							<input type="text" name="username" placeholder="Ton pseudo" v-model="username">
						</form>
					</div>
					<!-- Modal footer -->
					<div class="modal-footer">
						<nuxt-link to="/user/preferences"><button type="button" class="btn btn-danger" data-dismiss="modal">Annule tout !</button></nuxt-link>
						<button type="submit" class="btn btn-success" data-dismiss="modal" @click="editUser">Allez, valide !</button>
					</div>
				</div>
			</div>
		</div>			
		<!-- End Modal Pseudo -->
	</div>
</template>

<script>
	export default {
		layout: 'layoutFront',
		mounted () {
			this.username = this.$store.getters['users/loadedUser'].username
		},
		data () {
			return {
				username: ''
			}
		},
		computed: {
			loadedUser () {
				return this.$store.getters['users/loadedUser']
			}
		},
		methods: {
			editUser () {
				console.log('Edit User')
				console.log(this.username)
				return this.$store.dispatch('users/updateUser', {username: this.username}).then(response => {
					if (this.$i18n.locale != this.$i18n.defaultLocale) {
						return this.$router.push('/' + this.$i18n.locale + '/user/preferences')
					} else {
						return this.$router.push('/user/preferences')
					}
				})
			},
		}
	}
</script>

<style>

</style>
