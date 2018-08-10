<template>
	<div class="container">
        <div class="row justify-content-center">
            <div class="col-6" style="margin-top: 50px;">
                <form>
                	<h3 class="text-center">Register</h3>
    				<div v-if="error" class="text-center" style="color: red;">{{ $t(error.code) }}</div><br />
                    <div class="form-group">
                        <label for="email">Email address</label>
                        <input type="email" class="form-control" placeholder="Enter email" name="email" v-validate="'required|email'" v-model="form.email">
                        <span class="highlight"></span>
						<span class="bar"></span>
						<span class="error">{{ errors.first('email') }}</span>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" placeholder="Password" name="password" v-validate="'required|min:6'" v-model="form.password">
                        <span class="highlight"></span>
						<span class="bar"></span>
						<span class="error">{{ errors.first('password') }}</span>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" placeholder="Repeat Password" name="confirm_password" data-vv-as="repeat password" v-validate="'required|confirmed:password'" v-model="form.confirm_password">
                        <span class="highlight"></span>
						<span class="bar"></span>
						<span class="error">{{ errors.first('confirm_password') }}</span>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Username</label>
                        <input type="email" class="form-control" placeholder="Your username" name="username" v-validate="'required|min:2|max:32'" v-model="form.username">
                        <span class="highlight"></span>
						<span class="bar"></span>
						<span class="error">{{ errors.first('username') }}</span>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Country</label>
                        <select class="custom-select" name="country" v-model="form.country">
						 	<option :value="country" v-for="country in loadedCountries">{{ country.name }}</option>
						</select>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Birth year</label>
                        <select class="custom-select" name="birthyear" v-model="form.birthyear">
						 	<option :value="birthyear" v-for="birthyear in birthyears">{{ birthyear }}</option>
						</select>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Prefered language</label>
                        <select class="custom-select" name="language" v-model="form.language">
						 	<option :value="language" v-for="language in languages">{{ language.name }}</option>
						</select>
                    </div>
                    <button type="submit" class="btn btn-primary" :loading="loading" :disabled="disabled" @click.prevent="signUserUp">Register <i v-bind:class="{'fa fa-spinner fa-spin' : loading}"></i></button>&nbsp;&nbsp;
                    <nuxt-link to="/" class="btn btn-light">Back</nuxt-link>
                </form>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-4 text-center" style="margin-top: 50px;">
                <button class="btn btn-google" @click.prevent="signUpWithGoogle">Google Sign up</button>&nbsp;&nbsp;
                <button class="btn btn-facebook" @click.prevent="signUpWithFacebook">Facebook Sign up</button>
                <br /><br />
            </div>
        </div>
    </div>
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

     			await this.$store.dispatch('firebase-auth/signUserUp', this.form)
     			if (this.$i18n.locale != 'en') {
 					this.$router.replace('/' + this.$i18n.locale + '/home')
 				} else {
					this.$router.replace('/home')
 				}
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
