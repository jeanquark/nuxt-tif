<template>
    <div class="container">
        <h1 class="text-center" style="margin: 50px 0px;">{{ $t('pages.index.welcome_on') }} ThisIsFan.com !</h1>
        <div class="row">
            <div class="col"></div>
            <div class="col" align="center">
                <nuxt-link :to="localePath({ name: 'register'})"><button class="btn btn-lg btn-primary">{{ $t('pages.index.sign_up') }}</button></nuxt-link>&nbsp;&nbsp;&nbsp;
                <nuxt-link :to="localePath({ name: 'login'})"><button class="btn btn-lg btn-success">{{ $t('pages.index.log_in') }}</button></nuxt-link>
                <button type="submit" class="button btn-facebook" @click.prevent="signInWithFacebook" :disabled="loading"><i class="fa fa-facebook"></i> {{ $t('pages.login.facebook_oauth') }}</button>
                <button type="submit" class="button btn-google" @click.prevent="signInWithGoogle"><i class="fa fa-google"></i> {{ $t('pages.login.google_oauth') }}</button>
            </div>
            <div class="col">
                <!-- loadedLiveEvents: {{ loadedLiveEvents }}<br /><br /> -->
                <!-- userAgent: {{ userAgent }}<br /><br /> -->
            </div>
        </div><!-- /.row -->

        <div class="row" v-for="event in loadedLiveEvents" style="background: #fff; border: 1px solid orangered;">
            <div class="col-4 text-center align-self-center" style="">
                <img :src="'images/teams/' + event.home_team.slug + '.png'" width="50" />
                &nbsp;&nbsp;<span style="font-size: 1.4em;">{{ event.home_team.name }}</span>
            </div>
            <div class="col-4 text-center align-self-center">
                {{ event.date }}, {{ event.time }}<br />
                {{ event.location }}
            </div>
            <div class="col-4 text-center align-self-center" style="">
                <img :src="'images/teams/' + event.visitor_team.slug + '.png'" width="50" />
                &nbsp;&nbsp;<span style="font-size: 1.4em;">{{ event.visitor_team.name }}</span>
            </div>
        </div>

        <div class="row" v-if="loadedLiveEvents && loadedLiveEvents.length < 1">
            <h1>No live events... Next events: </h1>

        </div>
    </div>
</template>

<script>
    import quickMenu from '~/components/quickMenu'
    import axios from 'axios'
    import Noty from 'noty'
    // import animateNumber from '~/plugins/vue-animate-number'
    import firebase from 'firebase'
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
            this.$store.dispatch('events/loadedLiveEvents')
        },
        asyncData () {
            return firebase.database().ref('/events_new2/')
                .orderByChild('competition_id')
                // .orderByChild('status')
                .equalTo(177)
                // .equalTo('IN PLAY')
                // .on('value', function (snapshot) {
                .once('value').then(function (snapshot) {
                    const eventsArray = []
                    for (const key in snapshot.val()) {
                        eventsArray.push({ ...snapshot.val()[key], id: key})
                    }
                    console.log('eventsArray: ', eventsArray)
                    return { loadedLiveEvents: eventsArray }
                })
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
        // asyncData: ({ req }) => ({
        //     userAgent: (req ? req.headers['user-agent'] : (typeof navigator !== 'undefined' ? navigator.userAgent : 'No user agent (generated)')),
        // }),
        
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
