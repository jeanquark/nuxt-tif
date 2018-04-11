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
                    <button type="submit" class="btn btn-primary" :disabled="loading" :loading="loading" @click.prevent="signUserIn">Login <i v-bind:class="{'fa fa-spinner fa-spin' : loading}"></i></button>&nbsp;&nbsp;
                    <button type="submit" class="btn btn-success" :disabled="registerLoading" :loading="registerLoading" @click.prevent="signUserUp">{{ $t('register') }} <i v-bind:class="{'fa fa-spinner fa-spin' : registerLoading}"></i></button>
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
                console.log('signUserIn')
                // this.$store.dispatch('setLoading', true);
                // await this.$store.dispatch('signUserIn', {
                await this.$store.dispatch('users/signUserIn', {
                    email: this.email,
                    password: this.password
                })
                if (this.$i18n.locale != 'en') {
                    this.$router.replace('/' + this.$i18n.locale + '/admin')
                } else {
                    this.$router.replace('/admin')
                }
            },
            async signUserUp () {
                // await this.$store.dispatch('signUserUp', {
                await this.$store.dispatch('users/signUserUp', {
                    email: this.email,
                    password: this.password
                })
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
