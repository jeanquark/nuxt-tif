<template>
	<div>
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
		  	<a class="navbar-brand" href="#">This is Fan</a>
		  	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
		    	<span class="navbar-toggler-icon"></span>
		  	</button>
		  	<div class="collapse navbar-collapse" id="navbarNavDropdown">
		    	<ul class="navbar-nav mr-auto" v-if="$i18n.locale == 'en'">
		    		<li v-for="(link, i) in links_en" :key="i">
		    			<nuxt-link class="nav-link" :to="link.to" v-if="link.name != 'Login'">{{ link.name }} <span class="sr-only">(current)</span></nuxt-link>
		    		</li>
		    		<li>
		    			<nuxt-link class="nav-link" to="/login" v-if="!user">Login</nuxt-link>
		    		</li>
		      		<!-- <li class="nav-item active">
		        		<nuxt-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></nuxt-link>
		      		</li>
		      		<li class="nav-item">
		        		<nuxt-link class="nav-link" to="/about">About</nuxt-link>
		      		</li>
		      		<li class="nav-item">
		        		<nuxt-link class="nav-link" to="/posts">Posts</nuxt-link>
		      		</li>
		      		<li class="nav-item" v-if="!user">
		        		<nuxt-link class="nav-link" to="/login">Login</nuxt-link>
		      		</li> -->
		      		<!-- <li class="nav-item dropdown" v-if="user">
		        		<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          					Admin
        				</a>
		        		<div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
		          			<nuxt-link class="dropdown-item" to="/admin">Admin</nuxt-link>
		          			<a class="dropdown-item" href="#" @click="logout">Logout</a>
		        		</div>
		      		</li> -->
		    	</ul>
		    	<ul class="navbar-nav mr-auto" v-if="$i18n.locale == 'fr'">
		    		<li v-for="(link, i) in links_fr" :key="i">
		    			<nuxt-link class="nav-link" :to="link.to" v-if="link.name != 'Login'">{{ link.name }} <span class="sr-only">(current)</span></nuxt-link>
		    		</li>
		    		<li>
		    			<nuxt-link class="nav-link" to="/fr/login" v-if="!user">Login</nuxt-link>
		    		</li>
		    	</ul>
		    	<ul class="navbar-nav mr-auto" v-if="$i18n.locale == 'de'">
		    		<li v-for="(link, i) in links_de" :key="i">
		    			<nuxt-link class="nav-link" :to="link.to" v-if="link.name != 'Login'">{{ link.name }} <span class="sr-only">(current)</span></nuxt-link>
		    		</li>
		    		<li>
		    			<nuxt-link class="nav-link" to="/de/login" v-if="!user">Login</nuxt-link>
		    		</li>
		    	</ul>
		    	<!-- <ul class="navbar-nav ml-auto" v-if="!user">
		    		<li><button class="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button></li>
		    	</ul> -->
		    	<ul class="navbar-nav ml-auto" v-if="user && $i18n.locale == 'en'">
		    		<li><a class="nav-link disabled">{{ $t('connected_as') }} {{ user.email }}</a></li>&nbsp;
		    		<li><nuxt-link class="nav-link" to="/admin">Admin</nuxt-link></li>
		    		<li><button class="btn btn-outline-danger my-2 my-sm-0" @click="logout">Logout</button></li>
		    	</ul>
		    	<ul class="navbar-nav ml-auto" v-if="user && $i18n.locale == 'fr'">
		    		<li><a class="nav-link disabled">{{ $t('connected_as') }} {{ user.email }}</a></li>&nbsp;
		    		<li><nuxt-link class="nav-link" to="/fr/admin">Admin</nuxt-link></li>
		    		<li><button class="btn btn-outline-danger my-2 my-sm-0" @click="logout">Logout</button></li>
		    	</ul>
		    	<ul class="navbar-nav ml-auto" v-if="user && $i18n.locale == 'de'">
		    		<li><a class="nav-link disabled">{{ $t('connected_as') }} {{ user.email }}</a></li>&nbsp;
		    		<li><nuxt-link class="nav-link" to="/de/admin">Verwaltung</nuxt-link></li>
		    		<li><button class="btn btn-outline-danger my-2 my-sm-0" @click="logout">Logout</button></li>
		    	</ul>
		    	<!-- <ul class="navbar-nav ml-auto" v-if="user">
				    <li class="nav-item dropdown">
				      	<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{ user.email }}</a>
			      		<div class="dropdown-menu" aria-labelledby="navbarDropdown">
			        		<nuxt-link class="dropdown-item" to="/admin">Admin</nuxt-link>
		          			<a class="dropdown-item" href="#" @click="logout">Logout</a>
		          			<button class="dropdown-item" @click="logout">Logout</button>
			      		</div>
				    </li>
				</ul> -->
		  	</div>
		</nav>
		<div class="text-right" style="margin: 10px;">
			<!-- <span class="badge badge-info">English</span>&nbsp;
			<span class="badge badge-info">Français</span>&nbsp;
			<span class="badge badge-info">Deutsch</span> -->
			<!-- <nuxt-link :to="switchLocalePath('en')" v-if="$i18n.locale != 'de'">English</nuxt-link>&nbsp;|&nbsp; -->
			<nuxt-link :to="switchLocalePath('en')" v-bind:class="[ this.lang == 'en' ? 'isActive' : '' ]">English</nuxt-link>&nbsp;|&nbsp;
      		<nuxt-link :to="switchLocalePath('fr')" v-bind:class="[ this.lang == 'fr' ? 'isActive' : '' ]">Français</nuxt-link>&nbsp;|&nbsp;
      		<nuxt-link :to="switchLocalePath('de')" v-bind:class="[ this.lang == 'de' ? 'isActive' : '' ]">Deutsch</nuxt-link>&nbsp;
		</div>
		<nuxt/>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	export default {
		head: {
		    script: [
		      	{ src: 'https://code.jquery.com/jquery-3.2.1.slim.min.js' },
      			{ src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js' },
      			{ src: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js' }
		    ],
		    link: [
      			{ rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' }
		    ]
		},
		data () {
			return {
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
            	return this.$store.getters['users/activeUser']
            },
            lang() {
				return this.$i18n.locale
			}
        },
		methods: {
			logout () {
		      	// this.$store.dispatch('signOut').then(() => {
		       //  	alert('Vous allez effacer votre session!')
		       //  	this.$router.push('/')
		      	// })
		      	this.$store.dispatch('users/signOut').then(() => {
		        	alert('Vous allez effacer votre session!')
		        	this.$router.push('/')
		      	})
		    }
		}
	}
</script>

<style>
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
</style>