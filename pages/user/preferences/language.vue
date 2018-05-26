<template>
	<div class="container-fluid">
		<!-- The Modal Langues -->
		<div id="modalBox">
			<div class="modal-dialog modal-lg">
			  <div class="modal-content">
				<!-- Modal Header -->
				<div class="modal-header">
					<span class="modal-title">Languages <span class="modal-title-Sub">(Tes Paramètres)</span></span>
					<!-- <nuxt-link :to="'/' + $i18n.locale + '/user/preferences'"> -->
					<nuxt-link to="/user/preferences">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true" class="white-text"><i class="fa fa-arrow-circle-left"></i></span>
						</button>
					</nuxt-link>					
				</div>
				<!-- Modal body -->
				<div id="modalBoxContent" class="modal-body">
					<div class="flex-container-modal-MyTeam">
						<h1>{{ $t('how_do_you_speak') }} {{ $i18n.locale }} {{ lang }}</h1>
						<nuxt-link
  v-for="locale in $i18n.locales"
  v-if="locale.code !== $i18n.locale"
  :key="locale.code"
  :to="switchLocalePath(locale.code)">{{ locale.name }}</nuxt-link>
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
					<nuxt-link to="/user/preferences"><button type="button" class="btn btn-danger" data-dismiss="modal">Annule tout !</button></nuxt-link>
					<nuxt-link to="/user/preferences"><button type="button" class="btn btn-success" data-dismiss="modal">Allez, valide !</button></nuxt-link>
				</div>
			  </div>
			</div>
		</div>
		<!-- End Modal Langues -->	
	</div>
</template>

<script>
  export default {
    layout: 'layoutFront',
    data () {
    	return {
    		// language: $i18n.locale
    	}
    },
    computed: {
    	// language () {
    	// 	return $i18n.locales
    	// }
    	lang() {
			return this.$i18n.locale
		}
    }
  }
</script>

<style>
	.active {
		background-color: LightSlateGray;
	}
</style>