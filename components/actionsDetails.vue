<template>
	<div class="container-fluid">
        <!-- The Modal Goodies -->
        <div id="modalBox">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <!-- Modal Header -->
                    <div class="modal-header">
                        <span class="modal-title">XP / Actions</span>
                        <nuxt-link :to="localePath({ name: 'home'})" class="close">
                            <span aria-hidden="true" class="white-text"><i class="fa fa-arrow-circle-left"></i></span>
                        </nuxt-link>     
                    </div>

                    <!-- Modal body -->
					<div id="modalBoxContent" class="modal-body">
						<h1>Resumé des actions du jour {{ this.today }}</h1>
						<p style="color: #000;">
							<!-- loadedUserActions: {{ loadedUserActions }} <br /><br /> -->
							<!-- loadedUserActionsCards: {{ loadedUserActionsCards }} <br /><br /> -->
							<!-- slots: {{ slots }}<br /><br /> -->
						</p>
						<div class="row" style="margin: 0px 0px;">
							<div class="col-sm-6 col-md-3" v-for="(element, index) in loadedUserActions" :key="index" style="border: 1px solid blue;">
                                <nuxt-link :to="'/actions/' + element.slug">
                                	<img :src="'/images/actions/' + element.image" class="" width="100%" />
                                </nuxt-link>
							</div>
						</div>
					</div>

					<!-- Modal footer -->
					<div class="modal-footer">
					  	<nuxt-link to="/home"><button type="button" class="btn btn-success" data-dismiss="modal">Retour à l'accueil</button></nuxt-link>
					</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		layout: 'layoutFront',
		props: ['slots'],
		created () {
			this.$store.dispatch('users/loadedUserActions')
			this.today = this.$moment().format('MMMM Do YYYY')
		},
		data () {
			return {
				today: ''
				// slots: { "0": { "id": "hotdog_seller", "name": "Hot Dog seller", "occurences": 1, "physical_gain": 1, "slug": "hotdog_seller", "social_gain": 1, "special_gain": 1 }, "id": "26-09-2018" }
			}
		},
		computed: {
			loadedUserActions () {
				// const today = this.$moment().format('DD-MM-YYYY')
				const today = this.$moment().format('YYYY-MM-DD')
				return this.$store.getters['users/loadedUserActions'].find(action => (action.id === today))
			},
			loadedUserActionsCards () {
				return this.$store.getters['users/loadedUserActions'].find(action => (action.id === 'cards'))
			}
		},
		methods: {

		}
	}
</script>

<style scoped>

</style>