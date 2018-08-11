require('dotenv').config()
// const nodeExternals = require('webpack-node-externals')

module.exports = {
  	head: {
		title: 'This is Fan',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'Nuxt.js project' },
			{ name: 'robots', content: 'nofollow' },
			// { src: 'https://code.jquery.com/jquery-3.2.1.slim.min.js' },
			// { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js' },
			// { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js' }
			// { src: 'https://code.jquery.com/jquery-2.1.3.min.js' },
      		// { src: 'https://use.edgefonts.net/bangers.js' },
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			// { rel: 'preload', as: 'style', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700' },
			// { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' },
			{ rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' },
			// New styles
			// { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css' },
  	// 		{ rel: 'stylesheet', href: '/css/styles.css' },
   //          { rel: 'stylesheet', href: '/css/styles_768.css' },
   //          { rel: 'stylesheet', href: '/css/styles_1024.css' },
   //          { rel: 'stylesheet', href: '/css/styles_1280.css' },
   //          { rel: 'stylesheet', href: 'https://unpkg.com/placeholder-loading/dist/css/placeholder-loading.min.css' },
		],
	},
  	css: [
	  // { src: '~/assets/css/main.css', lang: 'css'},
	  // { src: '~/assets/css/app.styl', lang: 'styl'},
	  // { src: '~/assets/css/main.css', lang: 'css' },
	  // { src: '~/assets/css/base.css', lang: 'css'},
	  // { src: '~/assets/css/style.css', lang: 'css'}
  	],
	loading: { color: '#3f51b5' },
	// loading: '~/components/loading.vue',
	build: {
		extend (config, ctx) {
			if (ctx.dev && ctx.isClient) {
			// config.module.rules.push({
			//   enforce: 'pre',
			//   test: /\.(js|vue)$/,
			//   loader: 'eslint-loader',
			//   exclude: /(node_modules)/
			// })
			}
		},
		// extend(config, ctx) {
		//   if (ctx.isServer) {
		//     config.externals = [
		//       nodeExternals({
		//         whitelist: [/^vue2-jsoneditor/]
		//       })
		//     ]
		//   }
		// },
		vendor: [
		  	'vuetify',
		  	'~/plugins/firebase-client-init.js',
		  	'vue-notifications',
		  	// 'vue-nouislider'
		  	// 'vuex-loading'
		  	'vue2-jsoneditor',
		  	'vue-swal',
		],
		// extractCSS: true,
		extractCSS: {
			allChunks: true      
		}
  	},
 	modules: [
		// '@nuxtjs/pwa'
		'@nuxtjs/axios',
		'@nuxtjs/toast',
		'@nuxtjs/dotenv',
		['nuxt-validate', {
		  	lang: 'en',
		}],
		['nuxt-i18n', {
			locales: [
				// { code: 'en' },
				// { code: 'fr' },
				// { code: 'de' }
				{
					code: 'en',
					iso: 'en-US',
					name: 'English',
					langFile: 'en-US.json'
				},
				{
					code: 'fr',
					iso: 'fr-FR',
					name: 'Français',
					langFile: 'fr-FR.json'
				},
				{
					code: 'de',
					iso: 'de-DE',
					name: 'Deutsch',
					langFile: 'de-DE.json'
				}
			],
	  		loadLanguagesAsync: true,
	  		langDir: 'lang/',
	  		defaultLocale: 'en',
			// parsePages: false,
			routes: {
				about: {
					fr: '/a-propos',
					de: '/uber-uns'
				},
				login: {
					fr: '/login',
					de: '/login'
				},
				admin: {
					fr: '/administration',
					de: '/verwaltung'
				},
				user: {
					fr: '/membre',
					de: '/user'
				},
				home: {
					fr: '/accueil',
					de: '/home'
				},
				teams: {
					fr: '/equipes',
					de: '/mannschaften'
				}
			}
		// preferences: {
		//   fr: '/preferences-fr',
		//   de: '/einstellungen'
		// },
		// '/user/preferences': {
		//   fr: '/membre/preferences-fr',
		//   de: '/user/einstellungen'
		// }
	  // vueI18n: {
	  //   fallbackLocale: 'en',
	  //   messages: {
	  //     en: {
	  //       welcome: 'Welcome to',
	  //       about: 'About Page',
	  //       blog: 'Blog Page',
	  //       login: 'Login Page',
	  //       render: 'Render from',
	  //       reload: 'Reload Page',
	  //       'auth/email-already-in-use': 'The email address is already in use by another account.',
	  //       'auth/weak-password': 'Password should be at least 6 characters.',
	  //       'auth/invalid-email': 'The email address is badly formatted.'
	  //     },
	  //     fr: {
	  //       welcome: 'Bienvenue à 1',
	  //       about: 'Page à propos',
	  //       blog: 'Page du blog',
	  //       login: 'Page login',
	  //       render: 'Rendu depuis',
	  //       reload: 'Recharger la page',
	  //       'auth/email-already-in-use': 'Cette adresse email est déjà utilisée.',
	  //       'auth/weak-password': 'Le mot de passe doit être d\'au moins 6 caractères.',
	  //       'auth/invalid-email': 'The email address is badly formatted.'
	  //     },
	  //     de: {
	  //       welcome: 'Herzlich Willkommen zu',
	  //       about: 'Über uns Seite',
	  //       blog: 'Blog Seite',
	  //       login: 'Login Seite',
	  //       render: 'Leisten von',
	  //       reload: 'Seite neu laden',
	  //       'auth/email-already-in-use': 'Diese E-Mail-Adresse wird schon verwendet.',
	  //       'auth/weak-password': 'Password should be at least 6 characters.',
	  //       'auth/invalid-email': 'The email address is badly formatted.'
	  //     }
	  //   }
	  // }
		}]
	],
  	plugins: [
  		{ src: '~/plugins/firebase-client-init.js', ssr: false },
  		{ src: '~/plugins/auth-cookie.js', ssr: false },
  		{ src: '~/plugins/web-font-loader.js', ssr: false },
  		// {src: '~/plugins/vuex-loading.js', ssr: true }
  		// {src: '~/plugins/vuex-loading.js' },
  		{ src: '~/plugins/vue-moment', ssr: false },
  		{ src: '~plugins/filters.js', ssr: false },
  		{ src: '~/plugins/vuetify.js', ssr: true },
  		{ src: '~/plugins/vue-notifications.js', ssr: false },
  		// {src: '~/plugins/vue-nouislider.js', ssr: false }
  		// { src: '~/plugins/vue-sweetalert2.js', ssr: false },
  		{ src: '~/plugins/vue-fullpage.js', ssr: false },
  		// { src: '~/plugins/merge-images', ssr: false },
  		{ src: '~/plugins/vue2-jsoneditor.js', ssr: false },
  		// { src: '~/plugins/vue-placeholders.js', ssr: false },
  		{ src: '~/plugins/vue-animate-number.js', ssr: false },
  		// { src: '~/plugins/vee-validate.js' },
  		{ src: '~/plugins/vue-swal.js', ssr: false },
  		// { src: '~/plugins/vue-sweetalert2', ssr: false },
  		{ src: '~/plugins/paypal.js', ssr: false },
  		{ src: '~/plugins/vue-lazyload.js', ssr: false },
    ],
  	serverMiddleware: [
		'~/serverMiddleware/validateFirebaseIdToken',
  		// { path: '/api', handler: '~/serverMiddleware/api' },
  		{ path: '/setCustomClaims', handler: '~/serverMiddleware/setCustomClaims'},
  		// '~/serverMiddleware/api.js',
  		{ path: '/api-football', handler: '~/serverMiddleware/api-football'},
  		{ path: '/upload-image', handler: '~/serverMiddleware/uploadImage' },
  		// { path: '/upload-competition-image', handler: '~/serverMiddleware/uploadCompetitionImage' },
  		{ path: '/update-translation-file', handler: '~/serverMiddleware/updateTranslationFile' },
  		{ path: '/admin', handler: '~/serverMiddleware/auth-admin' },
  		{ path: '/delete-image', handler: '~/serverMiddleware/deleteImage' },
  		{ path: '/send-email', handler: '~/serverMiddleware/sendEmail' },
  		{ path: '/update-user-account', handler: '~/serverMiddleware/updateUserAccount' },
  		{ path: '/update-user-tokens', handler: '~/serverMiddleware/updateUserTokens' },
  		{ path: '/update-user-level', handler: '~/serverMiddleware/updateUserLevel' },
  		{ path: '/register-new-user', handler: '~/serverMiddleware/registerNewUser' },
  		{ path: '/update-user-status', handler: '~/serverMiddleware/updateUserStatus' },
  	],
  	toast: {
		duration: 8000,
		className: ['title', 'p5', 'body-1'],
		action: {
			icon : 'close',
			class: 'white--text',
			onClick : (e, toastObject) => {
				toastObject.goAway(0);
			}
		}
  	},
  	dev: (process.env.NODE_ENV !== 'production'),
  	env: {
		// type: "service_account",
		// project_id: process.env.PROJECT_ID,
		// private_key_id: process.env.PRIVATE_KEY_ID,
		// private_key: process.env.PRIVATE_KEY,
		// // private_key: JSON.parse(process.env.PRIVATE_KEY),
		// client_email: process.env.CLIENT_EMAIL,
		// client_id: process.env.CLIENT_ID,
		// auth_uri: "https://accounts.google.com/o/oauth2/auth",
		// token_uri: "https://accounts.google.com/o/oauth2/token",
		// auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
		// client_x509_cert_url: "https//www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-li5wg%40fir-auth-vue-1aa66.iam.gserviceaccount.com",
		// football_api_key: process.env.FOOTBALL_API_KEY
  	},
}
