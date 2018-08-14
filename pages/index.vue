<template>
    <div id="top" ref="fullpage">

        <!-- header 
        ================================================== -->
        <!--<header>   
            <div class="row">
                <div class="top-bar">
                    <a class="menu-toggle" href="#"><span>Menu</span></a>

                    <div class="logo">
                        <nuxt-link to="/">ThisIsFan.com</nuxt-link>
                    </div>              

                    <nav id="main-nav-wrap">
                        <ul class="main-navigation">
                            <li class="current"><a class="smoothscroll"  href="#intro" title="">Home</a></li>
                            <li><a class="smoothscroll"  href="#about" title="">Qu'est-ce c'est ?</a></li>
                            <li><a class="smoothscroll"  href="#resume" title="">En savoir un peu plus...</a></li>
                            <li><a class="smoothscroll"  href="#portfolio" title="">En images</a></li>
                            <li><a class="smoothscroll"  href="#services" title="">En résumé</a></li>                 
                            <li><a class="smoothscroll"  href="#contact" title="">Contact</a></li>  
                        </ul>
                    </nav>          
                </div>         
            </div> 
        </header> -->  

        <quick-menu :menu-count="count" :icon-class="icons" :backgroundColor="color" @clicked="onClickChild" style="cursor: pointer; z-index: 10;"></quick-menu>
        
        <!-- intro section
        ================================================== -->
        <section id="intro" style="">   

            <div class="intro-overlay"></div>   

            <div class="intro-content">
                <div class="row">
                    <div class="col-twelve">
                        <h5>{{ $t('pages.index.welcome_on') }}</h5>
                        <h1>ThisIsFan.com</h1>
                        <p class="intro-position">
                            <span>{{ $t('pages.index.slogan') }} {{ $t('pages.index.slogan2') }}</span>
                        </p>
                        <p class="intro-position">
                            <span>{{ $t('pages.index.stamp1') }} {{ $t('pages.index.stamp2') }}</span>
                        </p>                   
                        <img src="images/avatar.png" class="imgAvatar" />
                    </div>                     
                </div>                  
            </div> <!-- /intro-content --> 

            <ul class="intro-language">
                <li><nuxt-link :to="switchLocalePath('fr')"><img src="/images/flags/france.png" class="flagsLanguage" :class="{ active: $i18n.locale === 'fr' }" alt="flag of France" /></nuxt-link></li>
                <li><nuxt-link :to="switchLocalePath('de')"><img src="/images/flags/germany.png" class="flagsLanguage" :class="{ active: $i18n.locale === 'de' }" alt="flag of Germany" /></nuxt-link></li>
                <li><nuxt-link :to="switchLocalePath('en')"><img src="/images/flags/united_kingdom.png" class="flagsLanguage" :class="{ active: $i18n.locale === 'en' }" alt="flag of United Kingdom" /></nuxt-link></li>
            </ul>

            <ul class="intro-social">        
                <li><nuxt-link to="/#"><i class="fa fa-facebook"></i></nuxt-link></li>
                <li><nuxt-link to="/#"><i class="fa fa-twitter"></i></nuxt-link></li>
                <li><nuxt-link to="/#"><i class="fa fa-instagram"></i></nuxt-link></li>
            </ul> <!-- /intro-social -->          
        </section> <!-- /intro -->


        <!-- about section
        ================================================== -->
        <section id="about">  

            <div class="row section-intro">
                <div class="col-twelve">

                    <h1>{{ $t('pages.index.what_is_TIF_title') }}</h1>
                    <h1>{{ $t('pages.user-avatar.your_avatar') }}</h1>


                    <div class="intro-info">

                        <img src="images/avatar.png" alt="Profile Picture">

                        <p class="lead">{{ $t('pages.index.what_is_TIF_text') }}</p>
                    </div>              

                </div>          
            </div> <!-- /section-intro -->

            <div class="row button-section">
                <div class="col-twelve">
					<button type="submit" class="button btn-facebook" @click.prevent="signInWithFacebook" :disabled="loading"><i class="fa fa-facebook"></i> {{ $t('pages.login.facebook_oauth') }}</button>
					<button type="submit" class="button btn-google" @click.prevent="signInWithGoogle"><i class="fa fa-google"></i> {{ $t('pages.login.google_oauth') }}</button>
					<button type="submit" class="button stroke smoothscroll" @click.prevent="localePath({ name: 'register'})">{{ $t('pages.index.sign_up') }}</button>         
                </div>          
            </div>

        </section> <!-- /process-->        

        <!-- resume Section
        ================================================== -->
        <section id="resume" class="grey-section">

            <div class="row section-intro">
                <div class="col-twelve">
                    <h5>{{ $t('pages.index.how_to_title1') }}</h5>
                    <h1>{{ $t('pages.index.how_to_title2') }}</h1>
                    <p class="lead">{{ $t('pages.index.how_to_text') }}</p>
                </div>          
            </div> <!-- /section-intro--> 

            <div class="row resume-timeline">

                <div class="col-twelve resume-header">
                    <h2>{{ $t('pages.index.the_game_title') }}</h2>
                </div> <!-- /resume-header -->

                <div class="col-twelve">

                    <div class="timeline-wrap">

                        <div class="timeline-block">

                            <div class="timeline-ico">
                                <i class="fa fa-plug fa-2x"></i>
                            </div>

                            <div class="timeline-header">
                                <h3>{{ $t('pages.index.the_game_register_title') }}</h3>
                            </div>

                            <div class="timeline-content">
                                <p>{{ $t('pages.index.the_game_register_text') }}</p>
                            </div>

                        </div> <!-- /timeline-block -->

                        <div class="timeline-block">

                            <div class="timeline-ico">
                                <i class="fa fa-child fa-2x"></i>
                            </div>

                            <div class="timeline-header">
                                <h3>{{ $t('pages.index.the_game_supporter_title') }}</h3>
                            </div>

                            <div class="timeline-content">
                                <p>{{ $t('pages.index.the_game_supporter_text') }}</p>
                            </div>

                        </div> <!-- /timeline-block -->

                        <div class="timeline-block">

                            <div class="timeline-ico">
                                <i class="fa fa-chart-bar fa-2x"></i>
                            </div>

                            <div class="timeline-header">
                                <h3>{{ $t('pages.index.the_game_skills_title') }}</h3>
                            </div>

                            <div class="timeline-content">
                                <p>{{ $t('pages.index.the_game_skills_text') }}</p>
                            </div>

                        </div> <!-- /timeline-block -->
                        
                        <div class="timeline-block">

                            <div class="timeline-ico">
                                <i class="fa fa-star fa-2x"></i>
                            </div>

                            <div class="timeline-header">
                                <h3>{{ $t('pages.index.the_game_level_title') }}</h3>
                            </div>

                            <div class="timeline-content">
                                <p>{{ $t('pages.index.the_game_level_text') }}</p>
                            </div>

                        </div> <!-- /timeline-block -->
                        
                        <div class="timeline-block">

                            <div class="timeline-ico">
                                <i class="fa fa-bookmark fa-2x"></i>
                            </div>

                            <div class="timeline-header">
                                <h3>{{ $t('pages.index.the_game_actionsXP_title') }}</h3>
                            </div>

                            <div class="timeline-content">
                                <p>{{ $t('pages.index.the_game_actionsXP_text') }}</p>
                            </div>

                        </div> <!-- /timeline-block -->
                                    
                        <div class="timeline-block">

                            <div class="timeline-ico">
                                <i class="fa fa-money-bill fa-2x"></i>
                            </div>

                            <div class="timeline-header">
                                <h3>{{ $t('pages.index.the_game_fans_title') }}</h3>
                            </div>

                            <div class="timeline-content">
                                <p>{{ $t('pages.index.the_game_fans_text') }}</p>
                            </div>

                        </div> <!-- /timeline-block -->
                        
                        <div class="timeline-block">

                            <div class="timeline-ico">
                                <i class="fa fa-flag fa-2x"></i>
                            </div>

                            <div class="timeline-header">
                                <h3>{{ $t('pages.index.the_game_yourTeams_title') }}</h3>
                            </div>

                            <div class="timeline-content">
                                <p>{{ $t('pages.index.the_game_yourTeams_text') }}</p>
                            </div>

                        </div> <!-- /timeline-block -->

                        <div class="timeline-block">

                            <div class="timeline-ico">
                                <i class="fa fa-calendar fa-2x"></i>
                            </div>

                            <div class="timeline-header">
                                <h3>{{ $t('pages.index.the_game_events_title') }}</h3>
                            </div>

                            <div class="timeline-content">
                                <p>{{ $t('pages.index.the_game_events_text') }}</p>
                            </div>

                        </div> <!-- /timeline-block -->
                    </div> <!-- /timeline-wrap -->              
                </div> <!-- /col-twelve -->        
            </div> <!-- /resume-timeline -->            
        </section> <!-- /features -->
        

        <!-- Portfolio Section
        ================================================== -->
        <section id="portfolio">

            <div class="row section-intro">
                <div class="col-twelve">

                    <h5>{{ $t('pages.index.pictures_title1') }}</h5>
                    <h1>{{ $t('pages.index.pictures_title2') }}</h1>

                    <p class="lead">{{ $t('pages.index.pictures_text') }}</p>

                </div>          
            </div> <!-- /section-intro--> 

            <div class="row portfolio-content">
                <div class="col-twelve">
                    <!-- portfolio-wrapper -->
                     <div id="folio-wrapper" class="block-1-2 block-mob-full stack">
                        <div class="bgrid folio-item">
                           <div class="item-wrap">
                                <img src="images/portfolio/1.png" :alt="$t('pages.index.pictures_avatar_title')">
                                <div class="overlay">                                
                                    <div class="folio-item-table">
                                        <div class="folio-item-cell">
                                            <h3 class="folio-title">{{ $t('pages.index.pictures_avatar_title') }}</h3>                              
                                            <span class="folio-types">
                                                {{ $t('pages.index.pictures_avatar') }}
                                            </span>
                                        </div>                           
                                    </div>                    
                                </div>
                            </div>                  
                        </div> <!-- /folio-item -->

                        <div class="bgrid folio-item">
                            <div class="item-wrap">
                                <img src="images/portfolio/2.png" :alt="$t('pages.index.pictures_inventory_title')">
                                <div class="overlay">                                     
                                    <div class="folio-item-table">
                                        <div class="folio-item-cell">
                                            <h3 class="folio-title">{{ $t('pages.index.pictures_inventory_title') }}</h3>                             
                                            <span class="folio-types">
                                                {{ $t('pages.index.pictures_inventory') }}
                                            </span>                   
                                        </div>                           
                                    </div>                    
                                </div>
                            </div>
                        </div> <!-- /folio-item -->

                        <div class="bgrid folio-item">
                            <div class="item-wrap">
                                <img src="images/portfolio/3.png" :alt="$t('pages.index.pictures_profile_title')">
                                <div class="overlay">                                       
                                    <div class="folio-item-table">
                                        <div class="folio-item-cell">
                                            <h3 class="folio-title">{{ $t('pages.index.pictures_profile_title') }}</h3>                             
                                            <span class="folio-types">
                                                {{ $t('pages.index.pictures_profile') }}
                                            </span>                   
                                        </div>                           
                                    </div>                    
                                </div>
                            </div>
                        </div> <!-- /folio-item -->

                        <div class="bgrid folio-item">
                            <div class="item-wrap">
                                <img src="images/portfolio/4.png" :alt="$t('pages.index.pictures_fanshop_title')">
                                <div class="overlay">                                      
                                    <div class="folio-item-table">
                                        <div class="folio-item-cell">
                                            <h3 class="folio-title">{{ $t('pages.index.pictures_fanshop_title') }}</h3>
                                            <span class="folio-types">
                                                {{ $t('pages.index.pictures_fanshop') }}
                                            </span>                   
                                       </div>                           
                                    </div>                    
                                </div>
                            </div>
                        </div> <!-- /folio-item -->     

                        <div class="bgrid folio-item">
                            <div class="item-wrap">
                                <img src="images/portfolio/5.png" :alt="$t('pages.index.pictures_actionXPCards_title')">
                                <div class="overlay">                                      
                                    <div class="folio-item-table">
                                        <div class="folio-item-cell">
                                            <h3 class="folio-title">{{ $t('pages.index.pictures_actionXPCards_title') }}</h3>
                                            <span class="folio-types">
                                                {{ $t('pages.index.pictures_actionXPCards') }}
                                            </span>                   
                                       </div>                           
                                    </div>                    
                                </div>
                            </div>
                        </div> <!-- /folio-item -->

                        <div class="bgrid folio-item">
                            <div class="item-wrap">
                                <img src="images/portfolio/6.png" :alt="$t('pages.index.pictures_yourTeams_title')">
                                <div class="overlay">
                                    <div class="folio-item-table">
                                        <div class="folio-item-cell">
                                            <h3 class="folio-title">{{ $t('pages.index.pictures_yourTeams_title') }}</h3>
                                            <span class="folio-types">
                                                {{ $t('pages.index.pictures_yourTeams') }}
                                            </span>                   
                                        </div>                           
                                    </div>                    
                                </div>
                            </div>
                        </div> <!-- /folio-item -->   

                    </div> <!-- /portfolio-wrapper --> 

                </div>  <!-- /twelve -->   

            </div> <!-- /portfolio-content --> 
                
        </section> <!-- /portfolio --> 


        <!-- CTA Section
        ================================================== -->
        <section id="cta" class="grey-section">

            <div class="row cta-content">

                <div class="col-twelve section-ads">  

                    <h2 class="h01">{{ $t('pages.index.still_not_registered_title') }}</h2>

                    <p class="lead">{{ $t('pages.index.still_not_registered_text') }}
                        <!-- Simply type    the promocode in the box labeled “Promo Code” when placing your order. -->  </p>

                    <div class="row button-section">
						<div class="col-twelve">
							<button type="submit" class="button btn-facebook" @click.prevent="signInWithFacebook" :disabled="loading"><i class="fa fa-facebook"></i> {{ $t('pages.login.facebook_oauth') }}</button>
							<button type="submit" class="button btn-google" @click.prevent="signInWithGoogle"><i class="fa fa-google"></i> {{ $t('pages.login.google_oauth') }}</button>
							<button type="submit" class="button stroke smoothscroll" @click.prevent="localePath({ name: 'register'})">{{ $t('pages.index.sign_up') }}</button>         
						</div>          
                    </div>

                </div>

            </div> <!-- /cta-content -->

        </section> <!-- /cta --> 


        <!-- stats Section
        ================================================== -->
        <section id="stats" class="count-up">

            <div class="row">
                <div class="col-twelve">
                    <div class="block-1-6 block-s-1-3 block-tab-1-2 block-mob-full stats-list">
                        <div class="bgrid stat">
                            <div class="icon-part">
                                <i class="icon-user"></i>
                            </div>

                            <h3 class="stat-count">
                                <span v-if="loadedStatistics.game && loadedStatistics.game.fans">
                                    {{ this.loadedStatistics.game.fans.value }}
                                </span>
                                <!-- <vue-animate-number from="1" :to="loadedStatistics.game.fans.value" v-if="loadedStatistics.game && loadedStatistics.game.fans"></vue-animate-number> -->
                            </h3>

                            <h5 class="stat-title">
                                {{ $t('pages.index.dashboard_nbFans') }}
                            </h5>

                        </div> <!-- /stat -->                   

                        <div class="bgrid stat">

                            <div class="icon-part">
                                <i class="icon-basket-ball"></i>
                            </div>

                            <h3 class="stat-count">
                                <span v-if="loadedStatistics.game && loadedStatistics.game.sports">
                                    {{ this.loadedStatistics.game.sports.value }}
                                </span>
                            </h3>

                            <h5 class="stat-title">
                                {{ $t('pages.index.dashboard_nbSports') }}
                            </h5>

                        </div> <!-- /stat -->

                        <div class="bgrid stat">

                            <div class="icon-part">
                                <i class="icon-trophy"></i>
                            </div>

                            <h3 class="stat-count">
                                <span v-if="loadedStatistics.game && loadedStatistics.game.competitions">
                                    {{ this.loadedStatistics.game.competitions.value }}
                                </span>
                            </h3>

                            <h5 class="stat-title">
                                {{ $t('pages.index.dashboard_nbCompetitions') }}
                            </h5>

                        </div> <!-- /stat -->                                   

                        <div class="bgrid stat">

                            <div class="icon-part">
                                <i class="icon-flag"></i>
                            </div>

                            <h3 class="stat-count">
                                <span v-if="loadedStatistics.game && loadedStatistics.game.teams">
                                    {{ this.loadedStatistics.game.teams.value }}
                                </span>
                            </h3>

                            <h5 class="stat-title">
                                {{ $t('pages.index.dashboard_nbTeams') }}
                            </h5>

                        </div> <!-- /stat -->

                        <div class="bgrid stat">

                            <div class="icon-part">
                                <i class="icon-users"></i>
                            </div>

                            <h3 class="stat-count">
                                <span v-if="loadedStatistics.game && loadedStatistics.game.players">
                                    {{ this.loadedStatistics.game.players.value }}
                                </span>
                            </h3>

                            <h5 class="stat-title">
                                {{ $t('pages.index.dashboard_nbPlayers') }}
                            </h5>

                        </div> <!-- /stat -->

                        <div class="bgrid stat">

                            <div class="icon-part">
                                <i class="icon-bar-chart"></i>
                            </div>

                            <h3 class="stat-count">
                                <span v-if="loadedStatistics.game && loadedStatistics.game.points">
                                    {{ this.loadedStatistics.game.points.value }}
                                </span>
                            </h3>

                            <h5 class="stat-title">
                                {{ $t('pages.index.dashboard_nbFervor') }}
                            </h5>

                        </div> <!-- /stat -->
                    </div> <!-- /stats-list -->
                </div> <!-- /twelve -->
            </div> <!-- /row -->

        </section> <!-- /stats -->


        <!-- contact
        ================================================== -->
        <section id="contact">

            <div class="row section-intro">
                <div class="col-twelve">
                    <h5>{{ $t('pages.index.contact_title1') }}</h5>
                    <h1>{{ $t('pages.index.contact_title2') }}</h1>
                    <p class="lead">{{ $t('pages.index.contact_text') }}</p>
                </div> 
            </div> <!-- /section-intro -->

            <div class="row contact-form">
                <div class="col-twelve">
                    <form name="contactForm" id="contactForm">
                        <fieldset>

                            <div class="form-field">
                                <input name="contactName" type="text" id="contactName" :placeholder="$t('pages.index.contact_form_name')" value="" minlength="2" v-model="name" v-validate="'max:60'">
                                <span class="error" v-show="errors.has('contactName')">{{ $t('pages.index.contact_form_name_error') }}</span>
                            </div>
                            <div class="form-field">
                               <input name="contactEmail" type="email" id="contactEmail" :placeholder="$t('pages.index.contact_form_email')" v-model="email" v-validate="'required|email'">
                               <span class="error" v-show="errors.has('contactEmail')">{{ $t('pages.index.contact_form_email_error') }}</span>
                            </div>                     
                            <div class="form-field">
                                <textarea name="contactMessage" id="contactMessage" :placeholder="$t('pages.index.contact_form_comment')" rows="10" cols="50" v-model="message" v-validate="'required|max:240'"></textarea>
                                <span class="error" v-show="errors.has('contactMessage')">{{ $t('pages.index.contact_form_message_error') }}</span>
                            </div>                 
                            <div class="form-field">
                                <!-- <button @click="sendEmail">Send Email</button> -->
                                <button class="submitform" @click.prevent="sendEmail" :disabled="loading || errors.any() || !this.email || !this.message">{{ $t('pages.index.contact_form_send') }} <i v-bind:class="{'fa fa-spinner fa-spin' : loading}"></i></button>
                                <div id="submit-loader">
                                    <div class="text-loader">{{ $t('pages.index.contact_form_loading') }}</div>                             
                                    <div class="s-loader">
                                        <div class="bounce1"></div>
                                        <div class="bounce2"></div>
                                        <div class="bounce3"></div>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                    </form>

                    <!-- contact-warning -->
                    <div id="message-warning"></div>            
                    <!-- contact-success -->
                    <div id="message-success">
                        <i class="fa fa-check"></i> {{ $t('pages.index.contact_form_sending') }}<br>
                    </div>

                </div> <!-- /col-twelve -->
                
            </div> <!-- /contact-form -->

            <div class="row contact-info">

              <div class="col-twelve tab-full collapse">
                    <div class="icon">
                        <i class="icon-mail"></i>
                    </div>
                    <h5>{{ $t('pages.index.contact_tif_mail') }}</h5>
                    <p>info@thisisfan.com</p>
                </div>  
            </div> <!-- /contact-info -->
        
        </section> <!-- /contact -->
        
        <!-- footer
        ================================================== -->

        <footer>
            <div class="row">
                <div class="col-six tab-full pull-right social">
                    <ul class="footer-social">        
                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                    </ul>              
                </div>

                <div class="col-six tab-full">
                    <div class="copyright">
                        <span>© Copyright ThisIsFan.com - 2018</span> 
                    </div>                       
                </div>

                <div id="go-top">
                    <a class="smoothscroll" title="Back to Top" href="#top"><i class="fa fa-long-arrow-up"></i></a>
                </div>
            </div> <!-- /row -->        
        </footer>  

        <!-- <div id="preloader"> 
            <div id="loader"></div>
        </div>  -->

    </div>
</template>

<script>
    import quickMenu from '~/components/quickMenu'
    import axios from 'axios'
    import Noty from 'noty'
    // import animateNumber from '~/plugins/vue-animate-number'
    export default {
        layout: 'layoutLandingPage',
        head: {
        //     script: [
        //         // { src: 'https://code.jquery.com/jquery-2.1.3.min.js' },
        //         // { src: '/js/modernizr.js' },
        //         // { src: '/js/pace.min.js' },
        //         // { src: 'https://use.edgefonts.net/bangers.js' },
        //         // { src: '/js/plugins.js' },
        //         // { src: '/js/main.js '},
        //     ],
            link: [
        //         // { rel: 'stylesheet', href: '/css/base.css' },
        //         // { rel: 'stylesheet', href: '/css/main.css' },
        //         // { rel: 'stylesheet', href: '/css/vendor.css' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open%20Sans' },
            ],
        //     css: [
        //         // { src: '~/assets/css/main.css', lang: 'css' },
        //         // { src: '~/assets/css/base.css', lang: 'css'},
        //     ]
        },
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
	html {
		font-size: 10px;
	}
    .active {
        /*border: 1px solid orangered;*/
    }
    #contact button.submitform:disabled {
        background: #dddddd;
    }
    .error {
        color: red;
    }
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
