<template>
	<div class="container-fluid">
		
		<!-- The Modal Team -->
		<div id="modalBox">
			<div class="modal-dialog modal-lg">
			  	<div class="modal-content">
					<!-- Modal Header -->
					<div class="modal-header">
				  		<span class="modal-title">XP/Action en détail... <span class="modal-title-Sub">(XP/Action)</span></span>
						<!-- <nuxt-link to="/mesActions.html"> -->
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    			<span aria-hidden="true" class="white-text" @click.prevent="redirectBack()"><i class="fas fa-arrow-circle-left"></i></span>
                			</button>
                			<!-- <button @click="abc()">Button</button> -->
                		<!-- </nuxt-link>					 -->
            		</div>
					<!-- Modal body -->
					<div id="modalBoxContent" class="modal-body">
						<div class="flex-container-modal-BigTitle">
							<h1 v-if="loadedActionCard">{{ loadedActionCard.name }}</h1>
							<p style="color: #000;">
								<!-- card: {{ this.card }}<br /><br /> -->
								<!-- loadedActionCard: {{ loadedActionCard }}<br /><br /> -->
							</p>
						</div>
						<div class="flex-container-BoxGoodies">
							<div style="flex-grow: 1">
								<img src="/images/actions/hotdog.png" class="imgModalBoxXPAction"/>
							</div>
						</div>
						<div class="flex-container-modalAvatar">
							<div class="infoBoxGoodies" style="flex-grow: 1" v-if="loadedActionCard">
								<p class="boxText-70">Petite description de l'action</p>
								<p>
									<span class="darkredText">Type :</span> {{ loadedActionCard.type }}</br>
									<span class="darkredText">Niveau :</span> Niveau 1</br>
									<span class="darkredText">Grade :</span> Enfileur de saucisse</br>
									<span class="darkredText">Nb d'utilisation avant le niveau suivant :</span> 0 / 9 <i class="fas fa-upload"></i>
								</p>
								<p>
									<span class="darkredText">Gains</span></br>
									20 $fans
								</p>
								<p>
									<span class="darkredText">Compétences</span></br>
									Social, Mental, Endurance
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
					  	<a href="mesActions.html"><button type="button" class="btn btn-success" data-dismiss="modal">J'y vais, je me lance !</button></a>
					</div>
				</div>
			</div>
		</div>
		<!-- End Modal Team -->
					
	</div>
</template>

<script>
	export default {
		layout: 'layoutFront',
		created () {
			console.log('route: ', this.$route)
			console.log('path: ', this.$route.params.id)
			this.card = this.$route.params.id
			if (this.$store.getters['actions/loadedActions'].length < 1) {
				console.log('abc')
				this.$store.dispatch('actions/loadedActions')
			}
		},
		data () {
			return {
				card: ''
			}
		},
		computed: {
			loadedActionCard () {
				return this.$store.getters['actions/loadedActions']
					.find(card => (card.slug === this.card))
			}
		},
		methods: {
			redirectBack () {
				this.$router.back()
			}	
		}
	}
</script>

<style scoped>

</style>