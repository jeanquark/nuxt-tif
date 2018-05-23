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
                        <h5>Bienvenue sur</h5>
                        <h1>ThisIsFan.com</h1>
                        <p class="intro-position">
                            <span>La première application consacrée aux supporters !</span>
                        </p>                    
                        <img src="images/avatar.png" class="imgAvatar" />
                    </div>                     
                </div>                  
            </div> <!-- /intro-content --> 

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

                    <h1>ThisIsFan.com, qu'est-ce que c'est ?</h1>

                    <div class="intro-info">

                        <img src="images/avatar.png" alt="Profile Picture">

                        <p class="lead">ThisIsFan.com est la première application consacrée aux supporters. Voir les résultats de tes équipes préférées tout en jouant ! Gères ton fan au quotidien, effectues des actions pour gagner des $fans et pour augmenter tes compétences. Plus ton fan aura un niveau élevé, plus il rapportera de point de ferveur à tes équipes préférées.</p>
                    </div>              

                </div>          
            </div> <!-- /section-intro -->

            <div class="row button-section">
                <div class="col-twelve">
                    <!-- <button onclick="document.getElementById('id01').style.display='block'" title="Inscription" class="button stroke smoothscroll">S'inscrire</button>               -->
                    <nuxt-link to="/register"><button title="Inscription" class="button stroke smoothscroll">S'inscrire</button></nuxt-link>              
                    <!-- <button onclick="document.getElementById('id02').style.display='block'" title="Connection" class="button button-primary">Se connecter</button>           -->
                    <nuxt-link to="/login"><button title="Connection" class="button button-primary">Se connecter</button></nuxt-link>          
                </div>          
            </div>

        </section> <!-- /process-->        

        <!-- resume Section
        ================================================== -->
        <section id="resume" class="grey-section">

            <div class="row section-intro">
                <div class="col-twelve">
                    <h5>Comment y jouer</h5>
                    <h1>En savoir un peu plus...</h1>
                    <p class="lead">Si tu n'as pas encore cliqué pour t'inscrire et que tu veux en savoir un peu plus sur le jeu, c'est ici que cela se passe !</p>
                </div>          
            </div> <!-- /section-intro--> 

            <div class="row resume-timeline">

                <div class="col-twelve resume-header">
                    <h2>Le jeu</h2>
                </div> <!-- /resume-header -->

                <div class="col-twelve">

                    <div class="timeline-wrap">

                        <div class="timeline-block">

                            <div class="timeline-ico">
                                <i class="fa fa-user fa-2x"></i>
                            </div>

                            <div class="timeline-header">
                                <h3>Inscription</h3>
                            </div>

                            <div class="timeline-content">
                                <p>Tu vas créer ton fan, choisir ton avatar, ta nationalité et ta première équipe favorite.</p>
                            </div>

                        </div> <!-- /timeline-block -->

                        <div class="timeline-block">

                            <div class="timeline-ico">
                                <i class="fa fa-user fa-2x"></i>
                            </div>

                            <div class="timeline-header">
                                <h3>Supporter</h3>
                            </div>

                            <div class="timeline-content">
                                <p>Tu pourras soutenir plusieurs équipes, joueurs de divers sports.</p>
                            </div>

                        </div> <!-- /timeline-block -->

                        <div class="timeline-block">

                            <div class="timeline-ico">
                                <i class="fa fa-user fa-2x"></i>
                            </div>

                            <div class="timeline-header">
                                <h3>Compétences</h3>
                            </div>

                            <div class="timeline-content">
                                <p>Tu devra développer 8 compétences pour pouvoir avoir accès à de nouveaux métiers, de nouvelles formations et pour être toujours plus performant lors des événements de tes équipes favorites.</p>
                            </div>

                        </div> <!-- /timeline-block -->
                        
                        <div class="timeline-block">

                            <div class="timeline-ico">
                                <i class="fa fa-user fa-2x"></i>
                            </div>

                            <div class="timeline-header">
                                <h3>Niveau - Point de ferveur</h3>
                            </div>

                            <div class="timeline-content">
                                <p>Les points de ferveur que tu rapporteras à ton équipe préférée lors des matches sont étroitement liés au niveau de ton fan !</p>
                            </div>

                        </div> <!-- /timeline-block -->
                        
                        <div class="timeline-block">

                            <div class="timeline-ico">
                                <i class="fa fa-user fa-2x"></i>
                            </div>

                            <div class="timeline-header">
                                <h3>Actions "XP"</h3>
                            </div>

                            <div class="timeline-content">
                                <p>Chaque jour, tu pourras augmenter tes compétences. A toi de bien réfléchir à utiliser les bonnes actions (job, formation, bon plan, sport, etc...) pour faire monter en compétences ton personnage.</p>
                            </div>

                        </div> <!-- /timeline-block -->
                                    
                        <div class="timeline-block">

                            <div class="timeline-ico">
                                <i class="fa fa-user fa-2x"></i>
                            </div>

                            <div class="timeline-header">
                                <h3>$fans</h3>
                            </div>

                            <div class="timeline-content">
                                <p>Sans argent, tu ne seras pas d'une grande aide à tes équipes. Grâce aux $fans, tu pourras acheter le maillot de ton équipe préférée, le mettre le jour du match et rapporter encore plus de point de ferveur !</p>
                            </div>

                        </div> <!-- /timeline-block -->
                        
                        <div class="timeline-block">

                            <div class="timeline-ico">
                                <i class="fa fa-user fa-2x"></i>
                            </div>

                            <div class="timeline-header">
                                <h3>Tes équipes</h3>
                            </div>

                            <div class="timeline-content">
                                <p>Tu pourras suivre tes équipes préférées, voir les résultats, les classements. Mais surtout, tu pourras les encourager le jour J !</p>
                            </div>

                        </div> <!-- /timeline-block -->

                        <div class="timeline-block">

                            <div class="timeline-ico">
                                <i class="fa fa-user fa-2x"></i>
                            </div>

                            <div class="timeline-header">
                                <h3>Event (événements)</h3>
                            </div>

                            <div class="timeline-content">
                                <p>Choisi ton équipe, prépares-toi, choisi où voir ton match, crie, chante, boit une bière, participe au tifo et rapporte le maximum de points de ferveur à ton équipe !</p>
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

                    <h5>En images...</h5>
                    <h1>Envie de voir à quoi cela ressemble ?</h1>

                    <p class="lead">Tu trouveras ici quelques copies d'écran de se qui t'attend lorsque tu enteras sur notre application !</p>

                </div>          
            </div> <!-- /section-intro--> 

            <div class="row portfolio-content">
                <div class="col-twelve">
                    <!-- portfolio-wrapper -->
                     <div id="folio-wrapper" class="block-1-2 block-mob-full stack">
                        <div class="bgrid folio-item">
                           <div class="item-wrap">
                                <img src="images/portfolio/1.png" alt="Avatar">
                                <div class="overlay">                                
                                    <div class="folio-item-table">
                                        <div class="folio-item-cell">
                                            <h3 class="folio-title">Avatar</h3>                              
                                            <span class="folio-types">
                                                Tu pourras changer de tête...
                                            </span>
                                        </div>                           
                                    </div>                    
                                </div>
                            </div>                  
                        </div> <!-- /folio-item -->

                        <div class="bgrid folio-item">
                            <div class="item-wrap">
                                <img src="images/portfolio/2.png" alt="Inventaire">
                                <div class="overlay">                                     
                                    <div class="folio-item-table">
                                        <div class="folio-item-cell">
                                            <h3 class="folio-title">Inventaire</h3>                             
                                            <span class="folio-types">
                                                Enfile ton maillot et va au match...
                                            </span>                   
                                        </div>                           
                                    </div>                    
                                </div>
                            </div>
                        </div> <!-- /folio-item -->

                        <div class="bgrid folio-item">
                            <div class="item-wrap">
                                <img src="images/portfolio/3.png"alt="Profil">
                                <div class="overlay">                                       
                                    <div class="folio-item-table">
                                        <div class="folio-item-cell">
                                            <h3 class="folio-title">Profil</h3>                             
                                            <span class="folio-types">
                                                Plus tu as le niveau, plus tu rapportes de point de ferveur...
                                            </span>                   
                                        </div>                           
                                    </div>                    
                                </div>
                            </div>
                        </div> <!-- /folio-item -->

                        <div class="bgrid folio-item">
                            <div class="item-wrap">
                                <img src="images/portfolio/4.png" alt="FanShop">
                                <div class="overlay">                                      
                                    <div class="folio-item-table">
                                        <div class="folio-item-cell">
                                            <h3 class="folio-title">FanShop</h3>
                                            <span class="folio-types">
                                                Un peu d'argent de côté, achète toi la nouvelle écharpe de ton équipe favorite...
                                            </span>                   
                                       </div>                           
                                    </div>                    
                                </div>
                            </div>
                        </div> <!-- /folio-item -->     

                        <div class="bgrid folio-item">
                            <div class="item-wrap">
                                <img src="images/portfolio/5.png" alt="Cartes Actions XP">
                                <div class="overlay">                                      
                                    <div class="folio-item-table">
                                        <div class="folio-item-cell">
                                            <h3 class="folio-title">Cartes "Actions XP"</h3>
                                            <span class="folio-types">
                                                Plus tu développeras tes compétences, plus tu auras accès à d'autres cartes "Actions XP"...
                                            </span>                   
                                       </div>                           
                                    </div>                    
                                </div>
                            </div>
                        </div> <!-- /folio-item -->

                        <div class="bgrid folio-item">
                            <div class="item-wrap">
                                <img src="images/portfolio/6.png" alt="Tes équipes">
                                <div class="overlay">
                                    <div class="folio-item-table">
                                        <div class="folio-item-cell">
                                            <h3 class="folio-title">Tes équipes</h3>
                                            <span class="folio-types">
                                                Résultats et classements réels et résultats et classements "TIF" de toutes tes équipes préférées...
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

                    <h2 class="h01">Tu n'es toujours pas inscris ?!</h2>

                    <p class="lead">On ne te l'as peut-être pas encore dit, mais le jeu est GRATUIT !.
                        <!-- Simply type    the promocode in the box labeled “Promo Code” when placing your order. -->  </p>

                    <div class="row button-section">
						<div class="col-twelve">
							<!-- <button onclick="document.getElementById('id01').style.display='block'" title="Inscription" class="button stroke smoothscroll">S'inscrire</button>               -->
							<nuxt-link to="/register"><button title="Inscription" class="button stroke smoothscroll">S'inscrire</button></nuxt-link>              
							<!-- <button onclick="document.getElementById('id02').style.display='block'" title="Connection" class="button button-primary">Se connecter</button>           -->
							<nuxt-link to="/login"><button title="Connection" class="button button-primary">Se connecter</button></nuxt-link>          
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
                                123456
                            </h3>

                            <h5 class="stat-title">
                                fans
                            </h5>

                        </div> <!-- /stat -->                   

                        <div class="bgrid stat">

                            <div class="icon-part">
                                <i class="icon-basket-ball"></i>
                            </div>

                            <h3 class="stat-count">
                                5
                            </h3>

                            <h5 class="stat-title">
                                Sports différents
                            </h5>

                        </div> <!-- /stat -->

                        <div class="bgrid stat">

                            <div class="icon-part">
                                <i class="icon-trophy"></i>
                            </div>

                            <h3 class="stat-count">
                                17
                            </h3>

                            <h5 class="stat-title">
                                Compétitions en cours
                            </h5>

                        </div> <!-- /stat -->                                   

                        <div class="bgrid stat">

                            <div class="icon-part">
                                <i class="icon-flag"></i>
                            </div>

                            <h3 class="stat-count">
                                250
                            </h3>

                            <h5 class="stat-title">
                                équipes dans la base de données
                            </h5>

                        </div> <!-- /stat -->

                        <div class="bgrid stat">

                            <div class="icon-part">
                                <i class="icon-users"></i>
                            </div>

                            <h3 class="stat-count">
                                1500
                            </h3>

                            <h5 class="stat-title">
                                joueurs dans la base de données
                            </h5>

                        </div> <!-- /stat -->

                        <div class="bgrid stat">

                            <div class="icon-part">
                                <i class="icon-bar-chart"></i>
                            </div>

                            <h3 class="stat-count">
                                123456
                            </h3>

                            <h5 class="stat-title">
                                points de ferveur / match
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
                    <h5>Contact</h5>
                    <h1>Tu as une remarque sur notre jeu ?</h1>
                    <p class="lead">N'hésite pas à nous contacter si tu as une idée, une remarque ou tout autre chose qui se rapporterait à notre jeu.</p>
                </div> 
            </div> <!-- /section-intro -->

            <div class="row contact-form">
                <div class="col-twelve">
                    <!-- form -->
                    <form name="contactForm" id="contactForm" method="post" action="">
                        <fieldset>

                            <div class="form-field">
                                <input name="contactName" type="text" id="contactName" placeholder="Ton nom" value="" minlength="2" required="">
                            </div>
                            <div class="form-field">
                               <input name="contactEmail" type="email" id="contactEmail" placeholder="Ton email" value="" required="">
                            </div>
                            <div class="form-field">
                                <input name="contactSubject" type="text" id="contactSubject" placeholder="Tu veux nous dire quoi ?" value="">
                            </div>                       
                            <div class="form-field">
                                <textarea name="contactMessage" id="contactMessage" placeholder="Et c'est à que tu écris ton message..." rows="10" cols="50" required=""></textarea>
                            </div>                      
                            <div class="form-field">
                                <button class="submitform">Envoyer</button>
                                <div id="submit-loader">
                                    <div class="text-loader">Envoi en cours...</div>                             
                                    <div class="s-loader">
                                        <div class="bounce1"></div>
                                        <div class="bounce2"></div>
                                        <div class="bounce3"></div>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                    </form> <!-- Form End -->

                    <!-- contact-warning -->
                    <div id="message-warning"></div>            
                    <!-- contact-success -->
                    <div id="message-success">
                        <i class="fa fa-check"></i>Ton message a bien été envoyé !<br>
                    </div>

                </div> <!-- /col-twelve -->
                
            </div> <!-- /contact-form -->

            <div class="row contact-info">

              <div class="col-twelve tab-full collapse">
                    <div class="icon">
                        <i class="icon-mail"></i>
                    </div>
                    <h5>Notre email</h5>
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
    export default {
        layout: 'layoutLandingPage',
        head: {
            script: [
                // { src: 'https://code.jquery.com/jquery-2.1.3.min.js' },
                // { src: '/js/modernizr.js' },
                // { src: '/js/pace.min.js' },
                // { src: 'https://use.edgefonts.net/bangers.js' },
                // { src: '/js/plugins.js' },
                // { src: '/js/main.js '},
            ],
            link: [
                // { rel: 'stylesheet', href: '/css/base.css' },
                // { rel: 'stylesheet', href: '/css/main.css' },
                // { rel: 'stylesheet', href: '/css/vendor.css' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open%20Sans' },
            ],
            css: [
                // { src: '~/assets/css/main.css', lang: 'css' },
                // { src: '~/assets/css/base.css', lang: 'css'},
            ]
        },
        components: {
          quickMenu
        },
        mounted: () => {
        },
        created () {
            this.$store.dispatch('clearError')
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
                email: '',
                password: '',
                password_confirm: '',
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
        }
    }
</script>

<style scoped>
    
</style>
