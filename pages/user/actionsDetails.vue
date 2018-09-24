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
						<div class="flex-container-modal-BigTitle">
							<h1>Résumé des actions du jour</h1>
							<p style="color: #000;">
								loadedUserActions: {{ loadedUserActions }} <br /><br />
								loadedUserActionsCards: {{ loadedUserActionsCards }} <br /><br />
							</p>
						</div>
						<!--<div class="flex-container-BoxGoodies">
							<div style="flex-grow: 1">
								<img src="images/actions/hotdog.png" class="imgModalBoxXPAction"/>
							</div>
						</div>-->
						<div class="flex-container-modalAvatar">
							<div class="infoBoxGoodies" style="flex-grow: 1">
								<p class="boxText-70">Description des actions de la journée</p>
								<p>
									Points de compétences gagnés:<br />
									$fans gagnés:<br />
									Niveau des actions utilisées:<br />
								</p>
								

								<p class="boxText-70"><span class="darkredText">Attention:</span></br>
									A chaque fois que tu utilises cette carte, tu te rapproches du niveau supérieur de cette action (donc, plus de $fans, plus de PC...)
								</p>
							</div>
						</div>
					</div>

					<!-- Modal footer -->
					<div class="modal-footer">
					  	<a href="mesActions.html"><button type="button" class="btn btn-danger" data-dismiss="modal">C'est pas pour moi !</button></a>
					  	<a href="mesActions.html"><button type="button" class="btn btn-success" data-dismiss="modal" @click="updateUserActions">J'y vais, je me lance !</button></a>
					</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		layout: 'layoutFront',
		created () {
			this.$store.dispatch('users/loadedUserActions')
		},
		data () {
			return {

			}
		},
		computed: {
			loadedUserActions () {
				const today = this.$moment().format('DD-MM-YYYY')
				return this.$store.getters['users/loadedUserActions'].find(action => (action.id === today))
			},
			loadedUserActionsCards () {
				return this.$store.getters['users/loadedUserActions'].find(action => (action.id === 'cards'))
			}
		},
		methods: {
			updateUserActions () {
				this.$store.dispatch('users/updateUserActions', data).then(() => {
                    this.$router.push('/user/actionsDetails')
                })
			}
		}
	}
</script>

<style scoped>

</style>