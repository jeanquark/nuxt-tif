<template>
    <div class="container">
        <h1 class="text-center" style="margin: 50px 0px;">{{ $t('pages.index.welcome_on') }} ThisIsFan.com !</h1>
        <div class="row">
            <div class="col"></div>
            <div class="col" align="center">
                <nuxt-link :to="localePath({ name: 'register'})"><button class="btn btn-lg btn-primary">{{ $t('pages.index.sign_up') }}</button></nuxt-link>&nbsp;&nbsp;&nbsp;
                <nuxt-link :to="localePath({ name: 'login'})"><button class="btn btn-lg btn-success">{{ $t('pages.index.log_in') }}</button></nuxt-link>
            </div>
            <div class="col"></div>
        </div>
    </div>
</template>

<script>
    import quickMenu from '~/components/quickMenu'
    import axios from 'axios'
    import Noty from 'noty'
    // import animateNumber from '~/plugins/vue-animate-number'
    export default {
        layout: 'layoutLandingPage',
        // head: {
        //     script: [
        //         // { src: 'https://code.jquery.com/jquery-2.1.3.min.js' },
        //         // { src: '/js/modernizr.js' },
        //         // { src: '/js/pace.min.js' },
        //         // { src: 'https://use.edgefonts.net/bangers.js' },
        //         // { src: '/js/plugins.js' },
        //         // { src: '/js/main.js '},
        //     ],
        //     link: [
        //         // { rel: 'stylesheet', href: '/css/base.css' },
        //         // { rel: 'stylesheet', href: '/css/main.css' },
        //         // { rel: 'stylesheet', href: '/css/vendor.css' },
        //         { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open%20Sans' },
        //     ],
        //     css: [
        //         // { src: '~/assets/css/main.css', lang: 'css' },
        //         // { src: '~/assets/css/base.css', lang: 'css'},
        //     ]
        // },
        components: {
            quickMenu,
            // animateNumber
        },
        mounted: () => {
            // new Noty({type: 'success', text: 'Email was sent successfully', timeout: 5000, theme: 'metroui'}).show()
        },
        created () {
            this.$store.dispatch('clearError')
            this.$store.dispatch('statistics/loadedStatistics')
        },
        data () {
            let that = this
            return {
                index: 0,
                count: 4,
                icons: ['fa fa-home', 'fa fa-sign-in', 'fa fa-gamepad', 'fa fa-image', 'fa fa-comment'],
                // list: ['/avatar', '/preferences', '/teams'],
                anchors: ['intro', 'about', 'resume', 'portfolio', 'contact'],
                color: 'orangered',
                password: '',
                password_confirm: '',
                name: '',
                email: '',
                message: '',
            }
        },
        computed: {
            loading () {
                return this.$store.getters['loading']
            },
            error () {
                return this.$store.getters['error']
            },
            loadedStatistics () {
                return this.$store.getters['statistics/loadedStatistics']
            }
        },
        methods: {
            // moveTo: function(index) {
            //     console.log('moveTo called')
            //     this.$refs.fullpage.$fullpage.moveTo(index, true)
            // },
            // onClickChild (n) {
            //     console.log('onClickChild')
            //     console.log(n)
            //     this.$refs.fullpage.$fullpage.moveTo(anchors[n], true)
            // },
            onClickChild (n) {
                console.log('onClickChild')
                location.hash = "#" + this.anchors[n];
            },
            async signUserUp () {
                console.log('signUserUp')
                await this.$store.dispatch('users/signUserUp', {
                    email: this.email,
                    password: this.password,
                    password_confirm: this.password_confirm
                })
                this.$router.replace('/home')
            },
            async signUserIn () {
                console.log('signUserIn')
                await this.$store.dispatch('users/signUserIn', {
                    email: this.email,
                    password: this.password
                })
                this.$router.replace('/home')
            },
            sendEmail () {
                this.$store.commit('setLoading', true, { root: true })
                const data = {
                    "name" : this.name,
                    "email": this.email,
                    "message": this.message
                }
                console.log(data)

                axios.post('/send-email', {
                    data: data,
                }).then((response) => {
                    // new Noty({type: 'success', text: 'Email was sent successfully', timeout: 5000, theme: 'metroui'}).show()
                    console.log('success')
                    console.log(response)
                    this.$store.commit('setLoading', false, { root: true })
                    new Noty({type: 'success', text: this.$t('pages.index.contact_form_send_success'), timeout: 5000, theme: 'metroui'}).show()

                }).catch (function (error) {
                    // new Noty({type: 'error', text: 'Email could not be sent', timeout: 5000, theme: 'metroui'}).show()
                    this.$store.commit('setLoading', false, { root: true })
                    console.log('Email could not be sent')
                    console.log(error)
                    new Noty({type: 'error', text: this.$t('pages.index.contact_form_send_error'), timeout: 5000, theme: 'metroui'}).show()
                })
            }
        }
    }
</script>

<style scoped>
    .active {
        /*border: 1px solid orangered;*/
    }
    #contact button.submitform:disabled {
        background: #dddddd;
    }
    .error {
        color: red;
    }
</style>
