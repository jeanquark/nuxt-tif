<template>
	<div v-cloak>
		<div class="loading-page" v-if="loadingPage">
		    <div class="loader"></div>
		</div>

		<div v-else>
			<nuxt/>
		</div>
	</div>
</template>

<script>
	// import { mapGetters } from 'vuex'
	import firebase from 'firebase'
	export default {
		head: {
		    script: [
		      	// { src: 'https://code.jquery.com/jquery-3.2.1.slim.min.js' },
      			// { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js' },
      			// { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js' }
      			{ src: 'https://use.edgefonts.net/bangers.js' },
		    ],
		    link: [
      			{ rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' },
      			// { rel: 'stylesheet', href: '/css/bootstrap-min.css' },
      			// { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' },
        		{ rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.3.1/css/all.css' },
      			{ rel: 'stylesheet', href: '/css/styles.css' },
	            { rel: 'stylesheet', href: '/css/styles_768.css' },
	            { rel: 'stylesheet', href: '/css/styles_1024.css' },
	            { rel: 'stylesheet', href: '/css/styles_1280.css' },
	            { rel: 'stylesheet', href: 'https://unpkg.com/placeholder-loading/dist/css/placeholder-loading.min.css' },
		    ],
		    // css: [
		    // 	{ src: '~/assets/css/styles.css', lang: 'css' }
		    // ]
		},
		middleware: ['auth-check'],
		// mounted () {
		//     console.log('layoutFront mounted!')
		// 	var that = this
		// 	setTimeout(() => {
		//     	that.$el.removeAttribute('hidden')
		// 	}, 1000)
		//     // this.$el.removeAttribute('hidden')
		// },
		created() {
			// setTimeout(() => {
			//   	// console.log('abc')
			//   	this.loadingPage = false
			// }, 1000)

	   //      this.$store.dispatch('users/loadedUser').then((user) => {
	   //      	console.log('LoadedUser is dispatched from layoutFront')
	   //      	console.log('user: ', user)
	   //      	let user2 = this.$store.getters['users/loadedUser']
	   //      	console.log('user2: ', user2)
	   //      	this.loadingPage = false
	   // //      	setTimeout(() => {
				// //   	this.loadingPage = false
				// // }, 2000)
	   //      })
			// if (process.client) {
			// 	if (!this.loadedUser.level) {
	  //           	console.log('User level is not defined')
	  //           	this.$store.dispatch('users/loadedUser')
	  //           	console.log('firebase.auth().currentUser: ', firebase.auth().currentUser)
	  //           } else {
	  //           	console.log('User level: ', this.loadedUser.level)
	  //           }
			// }
			console.log('Entering layoutFront created lifecycle hook')
			this.$store.dispatch('users/loadedUser').then(response => {
	        	console.log('LoadedUser is dispatched from layoutFront')
	        	setTimeout(() => {
			  		this.loadingPage = false
				}, 500)
	        })
			console.log('done from layoutFront')
		},
		data () {
			return {
				loadingPage: true,
				links_en: [
			        { icon: 'home', name: 'Welcome', to: '/' },
			        { icon: 'info', name: 'About', to: '/about' },
			        { icon: 'info', name: 'Blog', to: '/blog' },
			        { icon: 'info', name: 'Login', to: '/login' },
			        // { icon: 'person', name: 'Admin', to: '/admin' },
			    ],
			    links_fr: [
			        { icon: 'home', name: 'Bienvenue', to: '/fr' },
			        { icon: 'info', name: 'A propos', to: '/fr/a-propos' },
			        { icon: 'info', name: 'Blog', to: '/fr/blog' },
			        { icon: 'info', name: 'Login', to: '/fr/login' },
			        // { icon: 'person', name: 'Administration', to: '/fr/administration' },
			    ],
			    links_de: [
			        { icon: 'home', name: 'Willkommen', to: '/de' },
			        { icon: 'info', name: 'Über uns', to: '/de/uber-uns' },
			        { icon: 'info', name: 'Blog', to: '/de/blog' },
			        { icon: 'info', name: 'Login', to: '/de/login' },
			        // { icon: 'person', name: 'Verwaltung', to: '/de/verwaltung' },
			    ]
			}
		},
		// computed: {
		// 	user() {
		// 		return this.$store.getters.activeUser
		// 	},
		// 	lang() {
		// 		return this.$i18n.locale
		// 	}
		// },
		computed: {
            user() {
            	return this.$store.getters['users/loadedUser']
            },
            lang() {
				return this.$i18n.locale
			},
			loadedUser () {
				return this.$store.getters['users/loadedUser']
			}
        },
		methods: {
			logout () {
		      	// this.$store.dispatch('signOut').then(() => {
		       //  	alert('Vous allez effacer votre session!')
		       //  	this.$router.push('/')
		      	// })
		      	this.$store.dispatch('users/signOut').then(() => {
		        	// alert('Vous allez effacer votre session!')
		        	this.$router.push('/login')
		      	})
		    }
		}
	}
</script>

<style scoped>
	[v-cloak] > * { display:none; }
    [v-cloak]::before { 
        content: " ";
        display: block;
        width: 16px;
        height: 16px;
        background-image: url('data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==');
    }
	/* Stackoverflow preview fix, please ignore */
    .navbar-nav {
      	flex-direction: row;
    }
    
    .nav-link {
      	padding-right: .5rem !important;
      	padding-left: .5rem !important;
    }
    
    /* Fixes dropdown menus placed on the right side */
    .ml-auto .dropdown-menu {
      	left: auto !important;
      	right: 0px;
    }

    .isActive {
    	color: red;
    }

    span i {
        color: #fff;
    }
    span i:hover {
        color: orangered;
    }

    .loading-page {
	  	width: 0px;
		height: 0px;
		/*background-color: #000;*/
		position: absolute;
		top:0;
		bottom: 0;
		left: 0;
		right: 0;
    	margin: auto;
	}

	.loader {
	    border: 16px solid orangered;
	    border-top: 16px solid #fff;
	    border-radius: 50%;
	    width: 120px;
	    height: 120px;
	    animation: spin .5s linear infinite;
	}

	/*.loader {
		content: " ";
        display: block;
        width: 16px;
        height: 16px;
        background-image: url('data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==');
	}*/

	@keyframes spin {
	    0% { transform: rotate(0deg); }
	    100% { transform: rotate(360deg); }
	}
</style>
