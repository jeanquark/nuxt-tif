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
							<h1>Resumé des actions du jour</h1>
							<p style="color: #000;">
								<!-- slots: {{ slots }}<br /><br /> -->
								<!-- loadedUserActions: {{ loadedUserActions }}<br /><br /> -->
								<!-- loadedUserActionsCards: {{ loadedUserActionsCards }}<br /><br /> -->
								<!-- cards: {{ cards }}<br /><br /> -->
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
								<div v-for="card in cards" style="border: 1px solid orangered;">
									<h3>{{ card.name }}</h3>
									<p>Points de compétence gagnés: {{ card.physical_gain + card.social_gain + card.special_gain }}</p>
									<p>$fans gagnés:</p>
									<p>Niveau des actions utilisées:</p>
									<p>Nombre d'utilisation de cette action aujourd'hui: {{ card.occurences }}</p>
									<p>Nombre d'utilisation total de cette action: {{ loadedUserActionsCards[card.id] + card.occurences }}</p>
								</div>
								
								<br />
								<p class="boxText-70"><span class="darkredText">Attention:</span></br>
									A chaque fois que tu utilises cette carte, tu te rapproches du niveau supérieur de cette action (donc, plus de $fans, plus de PC...)
								</p>
							</div>
						</div>
					</div>

					<!-- Modal footer -->
					<div class="modal-footer">
					  	<a href="mesActions.html"><button type="button" class="btn btn-danger" data-dismiss="modal">C'est pas pour moi !</button></a>
					  	<button type="button" class="btn btn-success" data-dismiss="modal" @click="updateUserActions">J'y vais, je me lance 2 !</button>
					</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		name: 'ActionsDetails',
		layout: 'layoutFront',
		props: ['slots'],
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
			},
			cards () {

				const arr = [
                    {
                        name: 'Ballboy',
                        slug: 'ballboy',
                        physical_gain: 1,
                        social_gain: 1,
                        special_gain: 1,
                        occurences: 1,
                    },
                    {
                        name: 'Flyers distributor',
                        slug: 'flyers_distributor',
                        physical_gain: 1,
                        social_gain: 1,
                        special_gain: 1,
                        occurences: 1,
                    },
                    {
                        name: 'Security guard',
                        slug: 'security_guard',
                        physical_gain: 1,
                        social_gain: 1,
                        special_gain: 1,
                        occurences: 3
                    }
                ]

                // let object = {}
                // for (let i = 0; i < 8; i++) {
                // 	console.log(Object.values(this.slots)[i][0])
                // 	if (Object.values(this.slots)[i][0]) {
                // 		const name = Object.values(this.slots)[i][0]['name']
                // 		if (!object[name]) {
                // 			console.log('Object does not exist yet')
	               //  		let object2 = {
	               //  			id: Object.values(this.slots)[i][0]['id'],
	               //  			name: Object.values(this.slots)[i][0]['name'],
	               //  			physical_gain: Object.values(this.slots)[i][0]['physical_gain'],
	               //  			social_gain: Object.values(this.slots)[i][0]['social_gain'],
	               //  			special_gain: Object.values(this.slots)[i][0]['special_gain'],
	               //  			occurences: 1
	               //  		}
                // 			object[object2.name] = object2
                // 		} else {
                // 			console.log('Object already exists!')
                // 			object[name].occurences += 1
                // 		}
                // 	}
                // }
                // console.log('Count: ', Object.keys(object).length)
                // console.log('array: ', array)
                // return object

                let array = []
                for (let i = 0; i < 8; i++) {
                	// console.log(Object.values(this.slots)[i][0])
                	if (Object.values(this.slots)[i][0]) {
                		const name = Object.values(this.slots)[i][0]['name']
                		// console.log('name: ', name)
                		
                		const object = array.find((element) => {
                			// console.log(element.name === name)
                			return element.name === name
                		})
                		if (!object) {
                			const data = Object.values(this.slots)[i][0]
                			const object2 = {
	                			id: data.id,
	                			name: data.name,
	                			slug: data.slug,
	                			physical_gain: data.gain_physical,
	                			social_gain: data.gain_social,
	                			special_gain: data.gain_special,
	                			occurences: 1
	                		}
                			// console.log('Object does not exist yet')
                			array.push(object2)
                		} else {
                			// console.log('Object already exists!')
                			object.occurences += 1
                		}
                	}
                }
                console.log('Count: ', array.length)
                console.log('array: ', array)
                return array
			},
			gainCompetences () {

			}
		},
		methods: {
			updateUserActions () {
				console.log('updateUserActions')
				// console.log('slots: ', this.slots)
				let data = {}
				data['array'] = this.cards
				data['today'] = this.$moment().format('DD-MM-YYYY')
				console.log('data: ', data)
				// return
				this.$store.dispatch('users/updateUserActions', data).then(() => {
                    this.$router.push('/user/actionsResults')
                })
			}
		}
	}
</script>

<style scoped>

</style>