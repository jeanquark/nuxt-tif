<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-4" style="margin-top: 50px;">
                <div v-if="error" class="text-center" style="color: red;">{{ $t(error.message) }}</div><br />
                <form>
                    <h3 class="text-center">Login</h3>
                    <div class="form-group">
                        <label for="email">Email address</label>
                        <input type="email" class="form-control" name="email" placeholder="Enter email" v-model="email">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" name="password" placeholder="Password" v-model="password">
                    </div>   
                    <button type="submit" class="btn btn-primary" :disabled="loading" :loading="loading" @click.prevent="signUserIn">Login <i v-bind:class="{'fa fa-spinner fa-spin' : loading}"></i></button>&nbsp;&nbsp;
                    <nuxt-link to="/" class="btn btn-light">Back</nuxt-link>
                </form>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-4 text-center" style="margin-top: 50px;">
                <button class="btn btn-google" @click.prevent="googleSignUpPopup">Google Sign in</button>&nbsp;&nbsp;
                <button class="btn btn-facebook" @click.prevent="facebookSignUpPopup">Facebook Sign in</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        layout: 'layoutLandingPage',
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
                this.$store.dispatch('firebase-auth/signUserIn', {
                    email: this.email,
                    password: this.password
                }).then(() => {
                    if (this.$i18n.locale != 'en') {
                        console.log('done')
                        this.$router.replace('/' + this.$i18n.locale + '/home')
                    } else {
                        console.log('done')
                        this.$router.replace('/home')
                    }
                }).catch(error => {
                    console.log('error: ', error)
                })
                
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
                return this.$store.dispatch('firebase-auth/signInWithFacebookPopup').then(() => {
                    if (this.$i18n.locale != 'en') {
                        console.log('done')
                        this.$router.replace('/' + this.$i18n.locale + '/home')
                    } else {
                        console.log('done')
                        this.$router.replace('/home')
                    }
                })
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
        cursor: pointer;
    }
    .btn-google {
        background-color: #d6492f;
        color: #fff;
    }
    .btn-google:hover {
        background-color: #e3816f;
        cursor: pointer;
    }
</style>
