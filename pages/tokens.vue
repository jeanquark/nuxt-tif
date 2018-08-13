<template>
	<div class="container-fluid" v-cloak>
    	<div id="modalBox">
      		<div class="modal-dialog modal-lg">
        		<div class="modal-content">
        			<div class="modal-header text-center">
        				<span class="modal-title">Acheter des tokens</span>
				        <nuxt-link :to="localePath({ name: 'home'})" class="close">
                            <span aria-hidden="true" class="white-text"><i class="fa fa-arrow-circle-left"></i></span>
                        </nuxt-link>      
				    </div>

			        <div id="modalBoxContent" class="modal-body" style="color: #000">
			        	<div class="flex-container-modal-MyTeam">
            				<h1>Sélectionne le nombre de tokens que tu souhaites te procurer</h1>
          				</div>
					  	<div class="row">
					  		<div class="col-sm">
						    	<div class="card" v-lazy-container="{ selector: 'img' }">
								  	<!-- <img class="card-img-top" v-lazy="'/images/tokens.png'" alt="Card image cap"> -->
								  	<img class="card-img-top" data-src="/images/tokens.png" data-loading="/images/tokens-loader.png" alt="Card image cap">
								  	<div class="card-body">
									    <h5 class="card-title text-center">50 TOKENS</h5>
									    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
									    <div class="text-center">
									    	<paypal-checkout
											    amount="5.00"
											    currency="EUR"
											    :client="credentials"
											    v-on:payment-authorized="paymentAuthorized"
											    v-on:payment-completed="paymentCompleted"
											    v-on:payment-cancelled="paymentCancelled"
											    env="sandbox">
											</paypal-checkout>
									   	</div>
								  	</div>
								</div>
							</div>
						    <div class="col-sm">
						    	<div class="card">
								  	<img class="card-img-top" v-lazy="'/images/tokens.png'" alt="Card image cap">
								  	<div class="card-body">
									    <h5 class="card-title text-center">100 TOKENS</h5>
									    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
									    <div class="text-center">
									    	<paypal-checkout
											    amount="10.00"
											    currency="EUR"
											    :client="credentials"
											    v-on:payment-authorized="paymentAuthorized"
											    v-on:payment-completed="paymentCompleted"
											    v-on:payment-cancelled="paymentCancelled"
											    env="sandbox">
											</paypal-checkout>
									   	</div>
								  	</div>
								</div>
							</div>
						    <div class="col-sm">
						    	<div class="card">
								  	<img class="card-img-top" v-lazy="'/images/tokens.png'" alt="Card image cap">
								  	<div class="card-body">
									    <h5 class="card-title text-center">200 TOKENS</h5>
									    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
									    <div class="text-center">
									    	<paypal-checkout
											    amount="20.00"
											    currency="EUR"
											    :client="credentials"
											    v-on:payment-authorized="paymentAuthorized"
											    v-on:payment-completed="paymentCompleted"
											    v-on:payment-cancelled="paymentCancelled"
											    env="sandbox">
											</paypal-checkout>
									   	</div>
								  	</div>
								</div>
							</div>
					  	</div><!-- /.row -->
			        </div>
			        <!-- Modal footer -->
			        <div class="modal-footer">
			          	<nuxt-link :to="localePath({name: 'home'})" type="button" class="btn btn-danger" data-dismiss="modal">Annule tout !</nuxt-link>
			        </div>
			    </div>
      		</div>
    	</div>
    <!-- End monAvatar -->
  	</div>
</template>

<script>
	import axios from 'axios'
	import Noty from 'noty'
	export default {
		layout: 'layoutFront',
		data () {
			return {
				credentials: {
			      	sandbox: 'AcwKSR_D_T6Xw1cVKYxT78lG2pjKrm_fIhy3ashDRVmkoSgt09MYxFnjjFgJPO_vzU7ujCluFecZuHL1',
			      	production: '<production client id>'
			    }
			}
		},
		methods: {
			click () {
				console.log(this.$store.state.users.loadedUser.id)
			},
			paymentAuthorized (data) {
				console.log('paymentAuthorized: ', data)
			},
			paymentCompleted (data) {
				console.log('paymentCompleted: ', data)
				// return
				console.log(data.transactions)
				console.log(data.transactions[0])
				console.log(data.transactions[0].amount)
				console.log(data.transactions[0].amount.total)
				const total_user_payment = Math.abs(parseInt(data.transactions[0].amount.total))
				console.log('total_user_payment: ', total_user_payment)

				return this.$store.dispatch('users/updateUserTokens', {
					operation: 'buy_tokens', 
					amount: total_user_payment
				}).then((response) => {
					console.log('response from vue template: ', response)
					console.log('response_new_tokens_amount: ', response.new_tokens_amount)
					new Noty({type: 'success', text: `${Math.abs(response.tokens_diff)} tokens have been ${response.tokens_diff > 0 ? 'added to' : 'deducted from'} your account. Your new tokens balance is ${response.new_tokens_amount}`, timeout: 15000, theme: 'metroui'}).show()
				}).catch(error => {
					console.log('error: ', error)
                    new Noty({type: 'error', text: 'Could not update tokens amount of your account', timeout: 5000, theme: 'metroui'}).show()
				})

				// console.log(this.$store.state.users.loadedUser.id)
				// const userId = this.$store.state.users.loadedUser.id
				// const userTokens = this.$store
				// return
    //             axios.post('/update-user-tokens', {
    //                 userId,
    //                 user_tokens
    //             }).then((response) => {
    //                 console.log('success')
    //                 console.log(response)
    //                 new Noty({type: 'success', text: `${total_cost} tokens have been ${total_cost > 0 ? 'added to' : 'deducted from'} your account`, timeout: 5000, theme: 'metroui'}).show()
    //             }).catch(function (error) {
    //                 console.log('error')
    //                 console.log(error)
    //                 new Noty({type: 'error', text: 'Could not update tokens amount of your account', timeout: 5000, theme: 'metroui'}).show()
    //             })
			},
			paymentCancelled (data) {
				console.log('paymentCancelled: ', data)
			}
		}
	}
</script>

<style scoped>
	[v-cloak] > * { display:none; }
</style>