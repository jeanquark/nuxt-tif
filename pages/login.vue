<template>
    <div class="container-fluid">		
    	<!-- The Modal Pseudo -->
    	<div class="modalBox">
            <div v-if="error" class="text-center" style="color: red;">{{ $t(error.code) }}</div><br />
    		<form class="modal-content">
    			<div class="container">
                    <h1>{{ $t('pages.login.title') }}</h1>
                    <p class="modalInscription">{{ $t('pages.login.subtitle') }}</p>
					    <hr>
                        <nuxt-link :to="localePath({ name: 'index'})" class="close">
                            <span aria-hidden="true" class="white-text"><i class="fa fa-arrow-circle-left"></i></span>
                        </nuxt-link>
                    <div class="group">
                        <label for="email"><b>{{ $t('pages.login.email') }}</b></label>
                        <input type="text" v-model="email" :placeholder="$t('pages.login.enter_email')" name="email" required>   
                        <span class="highlight"></span>
                        <span class="bar"></span>
                    </div>

                    <div class="group"> 
                        <label for="psw"><b>{{ $t('pages.login.password') }}</b></label>
                        <input type="password" v-model="password" :placeholder="$t('pages.login.password_email')" name="psw" required>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                    </div>

                    <label>
                        <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> {{ $t('pages.login.remember') }}
                    </label>

                    <div class="row button-section">
                        <div class="col-twelve">
                            <button type="submit" class="button button-primary" style="" :disabled="loading" :loading="loading" @click.prevent="signUserIn">{{ $t('pages.login.login')}}<i v-bind:class="{'fa fa-spinner fa-spin' : loading}"></i></button>
                            <button type="submit" class="button btn-facebook" @click.prevent="signInWithFacebook" disabled><i class="fa fa-facebook"></i> {{ $t('pages.login.facebook_oauth') }}</button>
                            <button type="submit" class="button btn-twitter" @click.prevent="signInWithGoogle"><i class="fa fa-google"></i> {{ $t('pages.login.google_oauth') }}</button>
                        </div>
                    </div>
    			</div><!-- /.container -->
            </form>
    	</div><!-- /.modalBox -->
    </div><!-- /.container-fluid -->
</template>

<script>
    export default {
        layout: 'layoutLandingPage',
        // layout: 'layoutFront',
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
            // async signUserIn () {
            //     console.log('signUserIn')
            //     await this.$store.dispatch('users/signUserIn', {
            //         email: this.email,
            //         password: this.password
            //     })
            //     console.log('async signUserIn done')
            // },
            // signUserIn () {
            //     console.log('signUserIn')
            //     this.$store.dispatch('users/signUserIn2', {
            //         email: this.email,
            //         password: this.password
            //     }).then(result => {
            //         console.log('promise end')
            //         this.$router.push('/home')
            //     }).catch(error => {
            //         if (error.response && error.response.data) {
            //           this.alert = {type: 'error', message: error.response.data.message || error.reponse.status}
            //         }
            //     })
            // }
            async signUserIn () {
                console.log('signUserIn')
                await this.$store.dispatch('firebase-auth/signUserIn', {
                    email: this.email,
                    password: this.password
                })
                if (this.$i18n.locale != 'en') {
                    console.log('done')
                    this.$router.replace('/' + this.$i18n.locale + '/home')
                } else {
                    console.log('done')
                    this.$router.replace('/home')
                }
            },
            async signInWithGoogle () {
                console.log('signInWithGoogle')
                await this.$store.dispatch('firebase-auth/signInWithGooglePopup')
                if (this.$i18n.locale != 'en') {
                    console.log('done')
                    this.$router.replace('/' + this.$i18n.locale + '/home')
                } else {
                    console.log('done')
                    this.$router.replace('/home')
                }
            },
            async signInWithFacebook () {
                console.log('signInWithFacebook')
                await this.$store.dispatch('firebase-auth/signInWithFacebookPopup')
            }
        }
    }
</script>

<style scoped>
    input[type="text"] {
        font-family: 'Comic Sans MS';
        font-weight: 900;
        font-style: italic;
        font-stretch: ultra-condensed;
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
</style>
