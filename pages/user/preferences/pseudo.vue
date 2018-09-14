<template>
	<div class="container-fluid">
		<!-- The Modal Pseudo -->
		<div id="modalBox">
			<div class="modal-dialog modal-lg">
				<div class="modal-content loginmodal-container">
				<!-- Modal Header -->
				<div class="modal-header">
					<span class="modal-title">{{ $t('pages.user-preferences-pseudo.pseudo')}} <span class="modal-title-Sub">({{ $t('pages.user-preferences-pseudo.your_parameters') }})</span></span>
					<nuxt-link :to="localePath({ name: 'user-preferences'})" class="close">
						<span aria-hidden="true" class="white-text"><i class="fa fa-arrow-circle-left"></i></span>
					</nuxt-link>
				</div>
				<!-- Modal body -->					
					<div id="modalBoxContent" class="modal-body">
						<div class="flex-container-modal-box-title">
							<h1>{{ $t('pages.user-preferences-pseudo.change_pseudo') }}</h1>
							<!-- loadedUser: {{ loadedUser }}<br /><br /> -->
							<!-- pseudo: {{ this.username }}<br /><br /> -->
						</div>
						<form>
							<input type="text" name="username" placeholder="{{ $t('pages.user-preferences-pseudo.your_pseudo') }}" v-model="username">
						</form>
					</div>
					<!-- Modal footer -->
					<div class="modal-footer">
						<button type="button" class="btn btn-success" data-dismiss="modal" @click="editUser">{{ $t('pages.user-preferences-pseudo.go_and_validate') }}</button>
						<nuxt-link :to="localePath({name: 'user-preferences'})"><button type="button" class="btn btn-danger" data-dismiss="modal">{{ $t('pages.user-preferences-pseudo.cancel_all') }}</button></nuxt-link>
						<!-- <nuxt-link to="/user/preferences"><button type="button" class="btn btn-success" data-dismiss="modal">Allez, valide !</button></nuxt-link> -->
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
