<template>
    <div class="container">
      <div class="fullpage-container" style="" v-cloak>
        <div class="button-group">
            <!-- <button type="button" :class="{active:index ==0}" @click="moveTo(0)">Bienvenue</button>
            <button type="button" :class="{active:index ==1}" @click="moveTo(1)">Qui sommes-nous</button>
            <button type="button" :class="{active:index ==2}" @click="moveTo(2)">En savoir plus</button>
            <a href="#what">Click me</a> -->
            <!-- <button type="button" v-for="btn in pageNum" :key="btn" :class="{active:index == btn + 2}" @click="moveTo(btn+2)">page {{btn+2}}</button>
            <button type="button" @click="showPage()">add page</button> -->
            <!-- <quick-menu :menu-count="count" :icon-class="icons" :menu-url-list="list" :backgroundColor="color" :abc="abc" @click.native="moveTo(2)"></quick-menu> -->
            <quick-menu :menu-count="count" :icon-class="icons" :backgroundColor="color" :clicka="clicka" @clicked="onClickChild" style="cursor: pointer;"></quick-menu>
        </div>
        <div class="fullpage-wp" v-fullpage="opts" ref="fullpage">
            <div class="page-1 page" id="page1">
                <!-- <h1 class="part-1" v-animate="{value: 'bounceInLeft'}">
                  vue-fullpage.js
                </h1>
                <h3 class="" v-animate="{value: 'bounceInLeft'}">A sigle-page scroll plugin based on vue@2.x,support for mobile and PC .</h3> -->
                <h5>Bienvenue sur</h5>
                <h1 v-animate="{value: 'bounceInLeft'}">ThisIsFan.com</h1>
                <p class="intro-position" v-animate="{value: 'bounceInRight'}">
                    <span>Le premier jeu consacré aux supporters !</span>
                </p>                    
                <img src="images/avatar.png" class="img-fluid" v-animate="{value: 'zoomInDown'}" />
            </div>
            <div class="page-2 page" id="page2">
                <!-- <h2 class="part-2" v-animate="{value: 'bounceInRight'}">Easy to use plugin</h2> -->
                <h2 class="part-2" v-animate="{value: 'bounceInRight'}">
                  ThisIsFan.com, qu'est-ce que c'est ?
                </h2>
                <div class="intro-info" v-animate="{value: 'zoomInDown'}">
                    <!-- <img src="images/avatar.png" class="img-fluid" alt="Profile Picture"> -->
                    <p class="lead">ThisIsFan.com est le premier jeu consacré aux supporters. Gères ton fan au quotidien, effectues des actions pour gagner des $fans et pour augmenter tes compétences. Plus ton fan aura un niveau élevé, plus il rapportera de point de ferveur à tes équipes préférées.</p>
                </div>     
            </div>
            <div class="page-3 page" id="page3">
                <!-- <h2 class="" v-animate="{value: 'bounceInTop'}">Working On Tablets</h2>
                <h3 class="" v-animate="{value: 'bounceInBotton'}">Designed to fit different screen sizes as well as tablet and mobile devices. </h3>
                <p class="part-3" v-animate="{value: 'bounceInLeft', delay: 0}">vue-fullpage</p>
                <p class="part-3" v-animate="{value: 'bounceInRight', delay: 300}">vue-fullpage</p>
                <p class="part-3" v-animate="{value: 'bounceInDown', delay: 600}">vue-fullpage</p>
                <p class="part-3" v-animate="{value: 'zoomInDown', delay: 900}">vue-fullpage</p> -->
                <h5>Comment y jouer</h5>
                <h1>En savoir un peu plus...</h1>

                <p class="lead">Si tu n'as pas encore cliqué pour t'inscrire et que tu veux en savoir un peu plus sur le jeu, c'est ici que cela se passe !</p>

            </div>
            <!-- <div class="section section-welcome" id="welcome">
            
                <h5>Bienvenue sur</h5>
                <h1 v-animate="{value: 'bounceInLeft'}">ThisIsFan.com</h1>
                <p class="intro-position" v-animate="{value: 'bounceInRight'}">
                    <span>Le premier jeu consacré aux supporters !</span>
                </p>                    
                <img src="images/avatar.png" class="img-fluid" v-animate="{value: 'zoomInDown'}" />
            </div>
            <div class="section section-what" id="what">
                <h2 class="part-2" v-animate="{value: 'bounceInRight'}">
                  ThisIsFan.com, qu'est-ce que c'est ?
                </h2>
                <div class="intro-info" v-animate="{value: 'zoomInDown'}">
                    <img src="images/avatar.png" class="img-fluid" alt="Profile Picture">
                    <p class="lead">ThisIsFan.com est le premier jeu consacré aux supporters. Gères ton fan au quotidien, effectues des actions pour gagner des $fans et pour augmenter tes compétences. Plus ton fan aura un niveau élevé, plus il rapportera de point de ferveur à tes équipes préférées.</p>
                </div>     
            </div>
            <div class="section section-more" id="more">
                <h2 class="" v-animate="{value: 'bounceInTop'}">Working On Tablets</h2>
                <h3 class="" v-animate="{value: 'bounceInBotton'}">Designed to fit different screen sizes as well as tablet and mobile devices. </h3>
                <p class="part-3" v-animate="{value: 'bounceInLeft', delay: 0}">vue-fullpage</p>
                <p class="part-3" v-animate="{value: 'bounceInRight', delay: 300}">vue-fullpage</p>
                <p class="part-3" v-animate="{value: 'bounceInDown', delay: 600}">vue-fullpage</p>
                <p class="part-3" v-animate="{value: 'zoomInDown', delay: 900}">vue-fullpage</p>
            </div>-->
        </div><!-- /.fullpage-wp -->
      </div><!-- /.fullpage-container -->
    </div>
</template>

<script>
    import 'animate.css'
    import 'fullpage-vue/src/fullpage.css'
    // import quickMenu from 'vue-quick-menu'
    import quickMenu from '~/components/quickMenu'
    export default {
        head: {
            script: [
                // { src: 'https://code.jquery.com/jquery-3.2.1.slim.min.js' },
                // { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js' },
                // { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js' }
            ],
            link: [
                // { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' },
                { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' },
                // { rel: 'stylesheet', href: '/style.css' },
            ],
            // css: [
            //  { src: '~/assets/css/styles.css', lang: 'css' }
            // ]
        },
        components: {
          quickMenu
        },
        mounted() {
            // window.addEventListener('load', () => {
            //     // setTimeout(() => {
            //       console.log('loading done!')
            //       loading = false
            //     // }, 2000)
            // })
            // loading = false
        },
        // asyncData() {
        //   return new Promise((resolve) => {
        //     setTimeout(function () {
        //       resolve({})
        //     }, 3000)
        //   })
        // },
        data () {
            let that = this;
            return {
                index: 0,
                pageNum: 0,
                opts: {
                    start: 0,
                    dir: 'v',
                    loop: false,
                    duration: 300,
                    beforeChange: function(ele, current, next) {
                        console.log('before', current, next)
                        that.index = next;
                    },
                    afterChange: function(ele, current) {
                        that.index = current;
                        console.log('after', current)
                    }
                },
                count: 3,
                icons: ['fa fa-user', 'fa fa-cog', 'fa fa-users'],
                list: ['/avatar', '/preferences', '/teams'],
                color: 'orangered',
                // abc: '',
                clicka: '',
            }
        },
        methods: {
            moveTo: function(index) {
                console.log('moveTo called')
                this.$refs.fullpage.$fullpage.moveTo(index, true)
            },
            // showPage: function() {
            //     this.pageNum++;
            //     this.$refs.fullpage.$fullpage.$update();
            // }
            // clickMenu(e) {
            //   console.log('click Menu')
            //   console.log(e)
            //   let index = 1
            //   this.$refs.fullpage.$fullpage.moveTo(index, true)
            // },
            // start () {
            //   this.loading = true
            // },
            // finish () {
            //   this.loading = false
            // }
            onClickChild (n) {
                console.log('onClickChild')
                console.log(n)
                this.$refs.fullpage.$fullpage.moveTo(n, true)
            }
        }
    }
</script>

<style scoped>
  body {
    margin: 0;
  }

  .fullpage-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .page {
    display: block;
    text-align: center;
    font-size: 26px;
    color: #eee;
    /*background: #000;*/
  }

  .page-1 {
    padding-top: 100px;
    /*background: #1bbc9b;*/
    background: #000;
  }

  .page-2 {
    padding-top: 100px;
    background-color: rgb(75, 191, 195);
  }

  .page-3 {
    /*padding-top: 50px;*/
    padding-top: 100px;
    background: #aabbcc;
  }

  h3,
  p {
    font-size: 16px;
  }

  .button-group {
    position: absolute;
    top: 30px;
    left: 30px;
    z-index: 9;
  }

  .button-group button {
    display: inline-block;
    margin: 10px;
    color: #000;
    background: #fff;
    background: rgba(255, 255, 255, .5);
    -webkit-border-radius: 10px;
    border-radius: 10px;
    padding: 9px 18px;
    border: none;
    outline: none;
  }

  .button-group button.active {
    background: rgba(0, 0, 0, .5);
    color: #fff;
  }

  /* Added by J-M */
  .section {
    display: block;
    text-align: center;
    font-size: 26px;
    color: #eee;
  }
  .section-welcome {
    padding-top: 100px;
    background: #000;
    /*background-image: url('/static/images/stade.jpg');*/
  }
  .section-what {
    padding-top: 100px;
    background: blue;
  }
  .section-more {
    padding-top: 100px;
    background: green;
  }
  .hidden {
    display: none;
  }
  .loading-page {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding-top: 200px;
    font-size: 30px;
    font-family: sans-serif;
  }
  [v-cloak] {
    display: none;
  }
</style>