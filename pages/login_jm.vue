<template>
    <div class="container">
        <div class="row" style="margin-bottom: 50px;">
            <div class="col-md-12 text-center">
                <h3>{{ $t('login') }}</h3>
                <br /><br />
                <h4 class="">{{ $t('render') }}: <span class="render-result">{{renderSource}}</span></h4>
                <button id="" class="btn btn-warning" @click="reloadPage"> {{ $t('reload') }}</button>
            </div>
        </div>
        <div class="row">
            <div class="col-md-3 col-sm-12">
            </div>
            <div class="col-md-6 col-sm-12">
                <!-- <div v-if="error" style="color: red;">{{ error.message }}</div><br /> -->
                <!-- {{ error }} -->
                <div v-if="error" class="text-center" style="color: red;">{{ $t(error.code) }}</div><br />
                <form>
                    <div class="form-group">
                        <label for="email">{{ $t('email_address') }}:</label>
                        <input type="email" class="form-control" id="email" v-bind:placeholder="$t('email_address')" v-model="email">
                    </div>
                    <div class="form-group">
                        <label for="password">{{ $t('password') }}:</label>
                        <input type="password" class="form-control" id="passwrod" v-bind:placeholder="$t('password')" v-model="password">
                    </div>
                    <button type="submit" class="btn btn-primary" :disabled="loading1" :loading="loading1" @click.prevent="signUserIn">Login <i v-bind:class="{'fa fa-spinner fa-spin' : loading1}"></i></button>&nbsp;&nbsp;
                    <button type="submit" class="btn btn-success" :disabled="loading2" :loading="loading2" @click.prevent="signUserUp">{{ $t('register') }} <i v-bind:class="{'fa fa-spinner fa-spin' : loading2}"></i></button>
                </form>
                <br />
                <hr>
                <br />
                <div class="text-center">
                    <button type="button" class="btn btn-danger" @click="googleSignUpPopup">Google sign in</button>&nbsp;&nbsp;
                    <button type="button" class="btn btn-primary" @click="facebookSignUpPopup">Facebook sign in</button>
                </div>
            </div>
            <div class="col-md-3 col-sm-12">
            </div>
        </div><!-- /.row -->
    </div><!-- /.container -->
</template>

<script>
    // import { vueLoading } from 'vuex-loading'
    export default {
        layout: 'layoutFront',
        middleware: ['unauth-check'],
        asyncData () {
            return {
                renderSource: process.static ? 'static' : (process.server ? 'serveur' : 'client')
            }
        },
        data () {
            return {
                // loading: true,
                loading1: false,
                loading2: false,
                email: '',
                password: ''
            }
        },
        computed: {
            loading () {
                return this.$store.getters['loading']
            },
            registerLoading () {
                return this.$store.getters['loading']
            },
            error() {
                // return this.$store.getters.error
                return this.$store.getters['error']
            }
        },
        methods: {
            reloadPage () {
                window.location.reload()
            },
            async googleSignUpPopup () {
                await this.$store.dispatch('users/signInWithGooglePopup')
                if (this.$i18n.locale != 'en') {
                    this.$router.replace('/' + this.$i18n.locale + '/admin')
                } else {
                    this.$router.replace('/admin')
                }
            },
            async facebookSignUpPopup () {
                await this.$store.dispatch('users/signInWithFacebookPopup')
                if (this.$i18n.locale != 'en') {
                    this.$router.replace('/' + this.$i18n.locale + '/admin')
                } else {
                    this.$router.replace('/admin')
                }
            },
            async signUserIn () {
                this.loading1 = true
                console.log('signUserIn')
                // this.$store.dispatch('setLoading', true);
                // await this.$store.dispatch('signUserIn', {
                await this.$store.dispatch('users/signUserIn', {
                    email: this.email,
                    password: this.password
                })
                this.loading1 = false
                this.$router.replace('/admin')
                // if (this.$i18n.locale != 'en') {
                //     this.$router.replace('/' + this.$i18n.locale + '/admin')
                // } else {
                //     this.$router.replace('/admin')
                // }
            },
            async signUserUp () {
                this.loading2 = true
                // await this.$store.dispatch('signUserUp', {
                await this.$store.dispatch('users/signUserUp', {
                    email: this.email,
                    password: this.password
                })
                this.loading2 = false
                // setTimeout(function(loading2) {
                //     this.loading2 = false
                // }, 3000)
                if (this.$i18n.locale != 'en') {
                    this.$router.replace('/' + this.$i18n.locale + '/admin')
                } else {
                    this.$router.replace('/admin')
                }
            }
        }
    }
</script>

<style scoped>

</style>
