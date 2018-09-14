<template>
	<div class="container-fluid">
		<!-- The Modal Langues -->
		<div id="modalBox">
			<div class="modal-dialog modal-lg">
			  <div class="modal-content">	  
				<!-- Modal Header -->
				<div class="modal-header">
					<span class="modal-title">{{ $t('pages.user-preferences-language.languages')}} <span class="modal-title-Sub">({{ $t('pages.user-preferences-language.your_parameters') }})</span></span>
					<nuxt-link :to="localePath({ name: 'user-preferences'})" class="close">
						<span aria-hidden="true" class="white-text"><i class="fa fa-arrow-circle-left"></i></span>
					</nuxt-link>
				</div>
				<!-- Modal body -->
				<div id="modalBoxContent" class="modal-body">
					<div class="flex-container-modal-box-title">
						<h1>{{ $t('pages.user-preferences-language.how_do_you_speak') }}</h1>
					</div>
					<div class="flex-container-modal-Parametre">
						<div class="flex-container-modal-Niveau">
							<nuxt-link :to="switchLocalePath('fr')" class="columnParametreButtonLangue" :class="{ active: $i18n.locale === 'fr' }">français</nuxt-link>
						</div>
						<div class="flex-container-modal-Niveau">
							<nuxt-link :to="switchLocalePath('en')" class="columnParametreButtonLangue" :class="{ active: $i18n.locale === 'en' }">english</nuxt-link>
						</div>
						<div class="flex-container-modal-Niveau">							
							<nuxt-link :to="switchLocalePath('de')" class="columnParametreButtonLangue" :class="{ active: $i18n.locale === 'de' }">deutsch</nuxt-link>
						</div>
						<!-- <div class="flex-container-modal-Niveau">
							<div class="columnParametreButtonLangue">
								spanish
							</div>
						</div> -->
					</div>	
				</div>
				<!-- Modal footer -->
				<div class="modal-footer">
					<button type="button" class="btn btn-success" data-dismiss="modal" @click="updateUserLanguage2($i18n.locale)">{{ $t('pages.user-preferences-language.go_and_validate') }}</button>
					<nuxt-link :to="localePath({name: 'user-preferences'})"><button type="button" class="btn btn-danger" data-dismiss="modal">{{ $t('pages.user-preferences-language.cancel_all') }}</button></nuxt-link>
					<!-- <nuxt-link to="/user/preferences"><button type="button" class="btn btn-success" data-dismiss="modal">Allez, valide !</button></nuxt-link> -->
				</div>
			  </div>
			</div>
		</div>
		<!-- End Modal Langues -->	
	</div>
</template>

<style scoped>
	.active {
		background-color: orangered;
	}
</style>

<script>
  	export default {
	    layout: 'layoutFront',
	    data () {
	    	return {

	    	}
	    },
	    computed: {
	    },
	    methods: {
	    	updateUserLanguage2 (language) {
	    		console.log('updateUsersLanguage')
	    		console.log(language)
				this.$store.dispatch('users/updateUser', {language: language})
				console.log(this.$i18n)

				// return this.$router.push(localePath({ name: 'user-preferences'}))
				// return this.$router.push(this.$i18n.localePath({ name: 'user-preferences'}))

				// Update Vue-Moment language

				this.$moment.locale(language)

				if (this.$i18n.locale != this.$i18n.defaultLocale) {
					return this.$router.push('/' + this.$i18n.locale + '/user/preferences')
				} else {
					return this.$router.push('/user/preferences')
				}
	    	}
	    }
  	}
</script>

