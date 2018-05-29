<template>

<div class="container-fluid">
		
			<!-- The Modal Pseudo -->
			<div class="modalBox">
        <div v-if="error" class="text-center" style="color: red;">{{ $t(error.code) }}</div><br />
			  <form class="modal-content">
				<div class="container">
				  <h1>Se connecter</h1>
				  <p class="modalInscription">Va vite encourager tes équipes favorites !</p>
				  <hr>
          
				  <div class="group">
            <label for="email"><b>Email</b></label>
				    <input type="text" v-model="email" placeholder="Enter Email" name="email" required>     
            <span class="highlight"></span>
            <span class="bar"></span>
          </div>
				  
          <div class="group"> 
            <label for="psw"><b>Password</b></label>
				    <input type="password" v-model="password" placeholder="Enter Password" name="psw" required>
            <span class="highlight"></span>
            <span class="bar"></span>
          </div>
				  
				  <label>
					<input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Se souvenir de moi
				  </label>

				  <div class="row button-section">
				  <div class="col-twelve">
					<button type="submit" class="button button-primary" style="" :disabled="loading" :loading="loading" @click.prevent="signUserIn">Go Go Go, c'est parti ! <i v-bind:class="{'fa fa-spinner fa-spin' : loading}"></i></button>
					<a href="vue/load.html" type="submit" class="button btn-facebook"><i class="fa fa-facebook"></i> Connecte-toi avec FB</a>
					<a href="vue/load.html" type="submit" class="button btn-twitter"><i class="fa fa-google"></i> Connecte-toi avec G+</a>
				  </div>
				  </div>
				  
				</div>
			  </form>
			</div>   
			<!-- End Modal Pseudo -->
						
		</div>
    
</template>

<script>
    export default {
        layout: 'layoutLandingPage',
        head: {
            script: [
                // { src: 'https://code.jquery.com/jquery-3.2.1.slim.min.js' },
                // { src: 'https://unpkg.com/popper.js@1.12.6/dist/umd/popper.js' },
                // { src: 'https://unpkg.com/bootstrap-material-design@4.1.1/dist/js/bootstrap-material-design.js' },
                // { src: 'https://use.edgefonts.net/bangers.js' },
                // { src: '/js/material.min.js' },
            ],
            link: [
                // { rel: 'stylesheet', href: '/css/base.css' },
                // { rel: 'stylesheet', href: '/css/main.css' },
                // { rel: 'stylesheet', href: '/css/vendor.css' },
                // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open%20Sans' },
                // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
                // { rel: 'stylesheet', href: 'https://unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min.css' },
                // { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' },
                // { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' },
                // { rel: 'stylesheet', href: '/css/styles.css' },
                // { rel: 'stylesheet', href: '/css/material.min.css' },
            ]
        },
        data () {
            return {
                email: '',
                password: ''
            }
        },
        computed: {
            loading () {
                return this.$store.getters['loading']
            },
            error () {
                return this.$store.getters['error']
            }
        },
        methods: {
            async signUserIn () {
                console.log('signUserIn')
                await this.$store.dispatch('users/signUserIn', {
                    email: this.email,
                    password: this.password
                })
                this.$router.replace('/home')
            },
        }
    }
</script>

<style scoped>

</style>
