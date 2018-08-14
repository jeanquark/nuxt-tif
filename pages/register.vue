<template>
	<div class="container-fluid">
		
		<!-- The Modal Pseudo -->
		<div class="modalBox" style="padding: 50px;">
		  	<form class="modal-content" style="padding: 30px;">
				<div class="">
					<h1>S'incrire</h1>
					<p class="modalInscription">Entre dans la communauté de ThisIsFan.com et commence à encourager tes équipes favorites !</p>
					<nuxt-link :to="localePath({ name: 'index'})" class="close">
                        <span aria-hidden="true" class="white-text"><i class="fa fa-arrow-circle-left"></i></span>
                    </nuxt-link>
					<br /><hr><br />
    				<div v-if="error" class="text-center" style="color: red;">{{ $t(error.code) }}</div><br />
					<div class="group">      
						<label for="email"><b>Email</b></label>
						<input type="text" v-model="form.email" placeholder="Enter Email" name="email" v-validate="'required|email'">
						<span class="highlight"></span>
						<span class="bar"></span>
						<span class="error">{{ errors.first('email') }}</span>
					</div>

					<div class="group">      
						<label for="psw"><b>Password</b></label>
						<input type="password" v-model="form.password" placeholder="Enter Password" name="password" ref="password" v-validate="'required|min:6'">
						<span class="highlight"></span>
						<span class="bar"></span>
						<span class="error">{{ errors.first('password') }}</span>
					</div>

					<div class="group">      
						<label for="psw-repeat"><b>Repeat Password</b></label>
						<input type="password" v-model="form.confirm_password" placeholder="Repeat Password" name="confirm_password" data-vv-as="repeat password" v-validate="'required|confirmed:password'">
						<span class="highlight"></span>
						<span class="bar"></span>
						<span class="error">{{ errors.first('confirm_password') }}</span>
					</div>
					
					<div class="group">      
						<label for="username"><b>Pseudo</b></label>
						<input type="text" v-model="form.username" placeholder="Your pseudo" name="username" v-validate="'required|min:2|max:32'">
						<span class="highlight"></span>
						<span class="bar"></span>
						<span class="error">{{ errors.first('username') }}</span>
					</div>

					<div class="group">      
						<label for="country"><b>Country</b></label>
						<select class="custom-select" v-model="form.country" name="country">
						 	<option :value="country" v-for="country in loadedCountries">{{ country.name }}</option>
						</select>
						<span class="highlight"></span>
						<span class="bar"></span>
					</div>

					<div class="group">      
						<label for="birthyear"><b>Birth year</b></label>
						<select class="custom-select" v-model="form.birthyear" name="birthyear">
						 	<option :value="birthyear" v-for="birthyear in birthyears">{{ birthyear }}</option>
						</select>
						<span class="highlight"></span>
						<span class="bar"></span>
					</div>
					
					<div class="group">      
						<label for="language"><b>Prefered Language</b></label>
						<select class="custom-select" v-model="form.language" name="language">
						 	<option :value="language" v-for="language in languages">{{ language.name }}</option>
						</select>
						<span class="highlight"></span>
						<span class="bar"></span>
					</div>
					  
					<label>
						<input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Se souvenir de moi
					</label>

					<p>En validant ton inscription, tu es d'accord avec les <a href="#" style="color:dodgerblue">conditions générales</a> de ThisIsFan.com.</p>
					<!-- errors: {{ errors }}<br /><br /> -->
					<!-- disabled: {{ disabled }}<br /><br > -->

					<div class="row button-section">
						<div class="col-twelve">
							<button type="submit" class="button button-primary" :loading="loading" :disabled="disabled" @click.prevent="signUserUp">Je veux devenir fan ! <i v-bind:class="{'fa fa-spinner fa-spin' : loading}"></i></button>
							<button class="button btn-facebook" @click.prevent="signUpWithFacebook"><i class="fa fa-facebook"></i> S'inscrire avec FB</button>
							<button class="button btn-google" @click.prevent="signUpWithGoogle"><i class="fa fa-google"></i> S'inscrire avec G+</button>
						</div>
					</div>
				</div><!-- /.container -->
			</form>
		</div><!-- /.modalBox -->
	</div><!-- /.container-fluid -->
</template>

<script>
	// import firebase from 'firebase'
  	import Noty from 'noty'
    export default {
        layout: 'layoutLandingPage',
        created () {
        	this.$store.dispatch('countries/loadedCountries')
        	// Feed bithyears array
        	const thisYear = new Date().getFullYear()
        	for (let i = thisYear - 10; i > thisYear - 90; i--) {
        		this.birthyears.push(i)
        	}
        },
        data () {
            return {
            	form: {
            		email: '',
	                password: '',
	                confirm_password: '',
					username: '',
					country: '',
					birthyear: '',
					language: '',
            	},
				languages: [
					{
						name: 'Français',
						slug: 'french',
						flag: 'france.png'
					}, {
						name: 'English',
						slug: 'english',
						flag: 'united_kingdom.png'
					}, {
						name: 'Deutsch',
						slug: 'german',
						flag: 'germany.png'
					}
				],
				birthyears: []
            }
        },
        computed: {
            loading () {
                return this.$store.getters['loading']
            },
            disabled () {
            	return this.errors.items.length != 0
            },
            error () {
                return this.$store.getters['error']
            },
            loadedCountries () {
            	return this.$store.getters['countries/loadedCountries']
            },
        },
        methods: {
            async signUserUp () {
                console.log('signUserUp')
     //            await this.$store.dispatch('firebase-auth/signUserUp', {
     //                email: this.form.email,
     //                password: this.form.password,
					// username: this.form.username,
					// country: this.form.country,
					// birthyear: this.form.birthyear,
					// language: this.form.language
     //            })
     //            if (this.$i18n.locale != 'en') {
     //                console.log('done')
     //                // this.$router.replace('/' + this.$i18n.locale + '/home')
     //            } else {
     //                console.log('done')
     //                // this.$router.replace('/home')
     //            }
     		// 	this.$store.dispatch('firebase-auth/signUserUp', this.form)
     		// 		.then((response) => {
     		// 			console.log('response: ', response)
	     	// 			if (this.$i18n.locale != 'en') {
	     	// 				this.$router.replace('/' + this.$i18n.locale + '/home')
	     	// 			} else {
							// this.$router.replace('/home')
	     	// 			}
	     	// 		}).catch(error => {
	     	// 			console.log('error: ', error)
     		// 		})
     			await this.$store.dispatch('firebase-auth/signUserUp', this.form)
     			if (this.$i18n.locale != 'en') {
 					this.$router.replace('/' + this.$i18n.locale + '/home')
 				} else {
					this.$router.replace('/home')
 				}
     			// console.log('abc: ', abc)
     			// if (abc != 'undefined') {
	     		// 	if (this.$i18n.locale != 'en') {
	       //              this.$router.replace('/' + this.$i18n.locale + '/home')
	       //          } else {
	       //              this.$router.replace('/home')
	       //          }
	       //      }
            },
            async signUpWithFacebook () {
                console.log('signUpWithFacebook')
                return this.$store.dispatch('firebase-auth/signInWithFacebookPopup').then(() => {
                    if (this.$i18n.locale != 'en') {
                        console.log('done')
                        this.$router.replace('/' + this.$i18n.locale + '/home')
                    } else {
                        console.log('done')
                        this.$router.replace('/home')
                    }
                })
            },
            async signUpWithGoogle () {
                console.log('signUpWithGoogle')
                await this.$store.dispatch('firebase-auth/signInWithGooglePopup')
                if (this.$i18n.locale != 'en') {
                    console.log('done')
                    this.$router.replace('/' + this.$i18n.locale + '/home')
                } else {
                    console.log('done')
                    this.$router.replace('/home')
                }
            },
        },
		watch: {

		}
		
    }
</script>

<style scoped>
	.error {
		color: red;
	}
	.custom-select {
		height: 50px;
		color: #000;
		margin-bottom: 0px;
	}
	.group {
		margin-bottom: 30px;
	}
	input[type=text] {
		margin-bottom: 5px;
		font-family: 'Comic Sans MS';
        font-weight: 900;
        font-style: italic;
        font-stretch: ultra-condensed;
        font-color: orangered;
	}
	input[type="text"]::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        font-family: 'bangers';
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
    }
    input[type="text"]::-moz-placeholder { /* Firefox 19+ */
        font-family: 'bangers';
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
    }
    input[type="text"]:-ms-input-placeholder { /* IE 10+ */
        font-family: 'bangers';
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
    }
    input[type="text"]:-moz-placeholder { /* Firefox 18- */
        font-family: 'bangers';
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
    }
	.button-primary {
		color: #fff;
	}
	.button-primary:hover {
		background-color: #000;
	}
	.button-primary:disabled {
		background-color: #d8d8d8;
		color: #fff;
	}
	.btn-facebook {
		background-color: #3c5a99;
		color: #fff;
	}
	.btn-facebook:hover {
		background-color: #6180c1;
	}
	.btn-google {
		background-color: #d6492f;
		color: #fff;
	}
	.btn-google:hover {
		background-color: #e3816f;
	}
</style>
