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
            <!-- <quick-menu :menu-count="count" :icon-class="icons" :backgroundColor="color" :abc="abc" :clicka="clicka"></quick-menu> -->
            <div class="quick-menu" ref="quickMenu" :style="quickMenuStyle">
              <div v-for="n in count" class="sub-menu" :style="getSubMenu(n-1)">
                <a :style="subMenuStyle" @mouseover.stop="mouseEnterSubMenu" @mouseout.stop="mouseOutSubMenu" :abc="abc" @click="clickMenu(n-1)">
                  <i :class="icons[n-1]" ref="icon"></i>
                </a>
              </div>

              <div class='menu' :style="menuStyle">
                <div class='core-menu' @click="toggleMenu">
                  <div class='bar'></div>
                </div>
              </div>
            </div>
        </div>
        <div class="fullpage-wp" v-fullpage="opts" ref="fullpage">
            <div class="page-1 page" id="page1">
                <!-- <h1 class="part-1" v-animate="{value: 'bounceInLeft'}">
                  vue-fullpage.js
                </h1>
                <h3 class="" v-animate="{value: 'bounceInLeft'}">A sigle-page scroll plugin based on vue@2.x,support for mobile and PC .</h3> -->
                <h5>Bienvenue sur</h5>
                {{ abc }}

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
    // import quickMenu from '~/components/quickMenu'
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
        // components: {
        //   quickMenu
        // },
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
props:{
  abc: {
    type: String,
    required: true,
    default:'abc'
  },
  menuCount:{
    type: Number,
    required: true,
    default:4
  },
  iconClass:{
    type:Array,
    required: true
  },
  menuUrlList:{
    type:Array,
    // required: true
    required: false
  },
  backgroundColor:{
    type:String,
    default:'#20babb'
  },
  color:{
    type:String,
    default:'#fff'
  },
  isOpenNewTab:{
    type:Boolean,
    default:false
  },
  position:{
    type:String,
    default:'top-left'
  }
},

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
menuSize:60,
subMenu4:[[["0","-160"],["-80","-138.6"],["-138.6","-80"],["-160","0"]],[["0","-160"],["80", "-138.6"],["138.6","-80"],["160","0"]],[["0","160"],["138.6","80"],["80","138.6"],["160","0"]],[["-160","0"],["-138.6","80"],["-80","138.6"],["0","160"]]],
subMenu3:[[["-160","0"],["-113","-113"],["0","-160"]],[["0","-160"],["113","-113"],["160","0"]],[["0","160"],["113","113"],["160","0"]],[["-160","0"],["-113","113"],["0","160"]]],
subMenu2:[[["-160","0"],["0","-160"]],[["0","-160"],["160","0"]],[["0","160"],["160","0"]],[["-160","0"],["0","160"]]]
          }
        },
        computed: {
openNewTab(){
  return this.isOpenNewTab?'_blank':'_self'
},
quickMenuStyle(){
  const topPosition = {top:'30px'}, 
  bottomPosition={bottom:'30px'},
  leftPosition = {left:'30px'},
  rightPosition = {right:'30px'}

  let style = this.isTop?topPosition:bottomPosition
  Object.assign(style, this.isLeft?leftPosition:rightPosition)
  Object.assign(style,{transform: this.isLeft?"rotate(-180deg)":"rotate(180deg)"})
  return style
},
menuStyle(){
  return {
    backgroundColor: this.backgroundColor,
    color: this.color
  }
},
subMenuStyle(){
  const style = {
    backgroundColor: this.backgroundColor,
    color: this.color
  }
  return style
},

isTop(){
  return !!~this.position.toLowerCase().indexOf('top')
},
isLeft(){
  return !!~this.position.toLowerCase().indexOf('left')
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
clickMenu(n) {
  console.log('click Menu')
  console.log(n)
  this.$refs.fullpage.$fullpage.moveTo(n, true)
},
getSubMenu(n){
  let menuPosition = this.menuCount===4?this.subMenu4:this.menuCount===3?this.subMenu3:this.subMenu2
  menuPosition = this.isTop&&this.isLeft?menuPosition[2]:this.isTop&&!this.isLeft?menuPosition[1]:!this.isTop&&this.isLeft?menuPosition[3]:menuPosition[0]
  return {top:menuPosition[n][0]+'px',left:menuPosition[n][1]+'px'}
},
toggleMenu(e){
  let menuEl = this.$refs.quickMenu
  let menuIconEl = this.$refs.icon
  if(!~menuEl.className.indexOf(' active')){
     menuEl.className += ' active';
    menuIconEl.forEach( function(element, index) {
      element.className += ' menu-animate';
    });
  } else {
    menuEl.className = menuEl.className.replace(' active','')
    menuIconEl.forEach( function(element, index) {
    element.className = element.className.replace(' menu-animate','')
    });
  }
},
mouseEnterSubMenu(e){
  if(e.target.tagName==='A'){
    e.target.style.backgroundColor = this.lightenColor(this.backgroundColor, 20)
    // e.target.firstElementChild.style.backgroundColor = this.lightenColor(this.backgroundColor, 20)
  } else if(e.target.tagName==='I'){
    e.target.parentElement.style.backgroundColor = this.lightenColor(this.backgroundColor, 20)
    // e.target.style.backgroundColor = this.lightenColor(this.backgroundColor, 20)
  }
},
mouseOutSubMenu(e){
  if(e.target.tagName==='A'){
    e.target.style.backgroundColor = this.backgroundColor
    // e.target.firstElementChild.style.backgroundColor = this.backgroundColor
  }else if(e.target.tagName==='I'){
    e.target.parentElement.style.backgroundColor = this.backgroundColor
    // e.target.style.backgroundColor = this.backgroundColor
  }
},
lightenColor (hex, amt) {

  var usePound = false

  if (hex[0] === '#') {
    hex = hex.slice(1)
    usePound = true
  }

  var num = parseInt(hex, 16)
  var r = (num >> 16) + amt

  if (r > 255) r = 255
  else if (r < 0) r = 0

      var b = ((num >> 8) & 0x00FF) + amt

  if (b > 255) b = 255
  else if (b < 0) b = 0

  var g = (num & 0x0000FF) + amt

  if (g > 255) g = 255
  else if (g < 0) g = 0
  return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16)
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



.menu-animate {
  -webkit-animation: bounce 1s linear 1s;
  -moz-animation: bounce 1s linear 1s;
  animation: bounce 1s linear 1s;
}

.quick-menu {
  color: #fff;
  position: fixed;
  width: 60px;
  height: 60px;
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  transition: all 1s ease;
  right: 30px;
  > .menu {
    display: block;
    position: absolute;
    border-radius: 50% !important;
    width: 60px;
    height: 60px;
    text-align: center;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.23), 0 3px 10px rgba(0, 0, 0, 0.16);
    color: #fff;
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    transition: all 1s ease;
    .core-menu {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0px;
      top: 0px;
      width: 60px;
      height: 60px;
      -webkit-transform: rotate(180deg);
      -moz-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
      -o-transform: rotate(180deg);
      transform: rotate(180deg);
      -webkit-transition: all 1s ease;
      -moz-transition: all 1s ease;
      transition: all 1s ease;
      .bar {
        -webkit-transition: all 1s ease;
        -moz-transition: all 1s ease;
        transition: all 1s ease;
        width: 28px;
        height: 3px;
        background: #fff;
        position: absolute;
        top: 35%;
        margin-top: -1.5px;
        left: 16px;
        -webkit-transform-origin: 0% 50%;
        -moz-transform-origin: 0% 50%;
        -ms-transform-origin: 0% 50%;
        -o-transform-origin: 0% 50%;
        transform-origin: 0% 50%;
        &:before ,&:after{
          -webkit-transition: all 1s ease;
          -moz-transition: all 1s ease;
          transition: all 1s ease;
          content: '';
          width: 28px;
          height: 3px;
          background: #fff;
          position: absolute;
          left: 0px;
          -webkit-transform-origin: 0% 50%;
          -moz-transform-origin: 0% 50%;
          -ms-transform-origin: 0% 50%;
          -o-transform-origin: 0% 50%;
          transform-origin: 0% 50%;
        }
        &:before{
          margin-top: 30%;
        }
        &:after {
          margin-top: 60%;
        }
      }
    }
  }
  .sub-menu{
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    position: absolute;
    width: 60px;
    height: 60px;
    font-size: 30px;
    text-align: center;
    border-radius: 50% !important;
    a{
      outline: none;
      text-decoration: none;
      display: inline-block;
      border-radius: 50% !important;
      width: 100%;
      height: 100%;
      i {
        outline: none;
        font-size:30px;
        margin-top:12px;
        background:transparent;
        &:before{
          vertical-align: middle;
        }
      }
      &:hover {
        cursor: pointer;
      }
    }
  }
  &.active{
    -webkit-transform: rotate(0deg)!important;
      -moz-transform: rotate(0deg)!important;
      -ms-transform: rotate(0deg)!important;
      -o-transform: rotate(0deg)!important;
      transform: rotate(0deg)!important;
      .menu{
        -webkit-transform: scale(0.7);
        -moz-transform: scale(0.7);
        -ms-transform: scale(0.7);
        -o-transform: scale(0.7);
        transform: scale(0.7);
        .bar {
          top: 50%;
          margin-top: -1.5px;
          left: 50%;
          margin-left: -12px;
          -webkit-transform-origin: 50% 50%;
          -moz-transform-origin: 50% 50%;
          -ms-transform-origin: 50% 50%;
          -o-transform-origin: 50% 50%;
          transform-origin: 50% 50%;
          -webkit-transform: rotate(405deg);
          -moz-transform: rotate(405deg);
          -ms-transform: rotate(405deg);
          -o-transform: rotate(405deg);
          transform: rotate(405deg);
              &:before {
                -webkit-transform-origin: 50% 50%;
                -moz-transform-origin: 50% 50%;
                -ms-transform-origin: 50% 50%;
                -o-transform-origin: 50% 50%;
                transform-origin: 50% 50%;
                -webkit-transform: rotate(-450deg);
                -moz-transform: rotate(-450deg);
                -ms-transform: rotate(-450deg);
                -o-transform: rotate(-450deg);
                transform: rotate(-450deg);
                margin-top: 0px;
              }
          &:after{
            opacity: 0;
          }
        }
      }
    }
}
@-webkit-keyframes bounce {
  0%,100% {
    -webkit-transform: translateY(0px);
  }
  10% {
    -webkit-transform: translateY(6px);
  }
  30% {
    -webkit-transform: translateY(-4px);
  }
  70% {
    -webkit-transform: translateY(3px);
  }
  90% {
    -webkit-transform: translateY(-2px);
  }
}
@-moz-keyframes bounce {
  0%,100% {
    -moz-transform: translateY(0px);
  }
  10% {
    -moz-transform: translateY(6px);
  }
  30% {
    -moz-transform: translateY(-4px);
  }
  70% {
    -moz-transform: translateY(3px);
  }
  90% {
    -moz-transform: translateY(-2px);
  }
}
@keyframes bounce {
  0%,100% {
    -webkit-transform: translateY(0px);
    -moz-transform: translateY(0px);
    -ms-transform: translateY(0px);
    -o-transform: translateY(0px);
    transform: translateY(0px);
  }
  10% {
    -webkit-transform: translateY(6px);
    -moz-transform: translateY(6px);
    -ms-transform: translateY(6px);
    -o-transform: translateY(6px);
    transform: translateY(6px);
  }
  30% {
    -webkit-transform: translateY(-4px);
    -moz-transform: translateY(-4px);
    -ms-transform: translateY(-4px);
    -o-transform: translateY(-4px);
    transform: translateY(-4px);
  }
  70% {
    -webkit-transform: translateY(3px);
    -moz-transform: translateY(3px);
    -ms-transform: translateY(3px);
    -o-transform: translateY(3px);
    transform: translateY(3px);
  }
  90% {
    -webkit-transform: translateY(-2px);
    -moz-transform: translateY(-2px);
    -ms-transform: translateY(-2px);
    -o-transform: translateY(-2px);
    transform: translateY(-2px);
  }
}
</style>