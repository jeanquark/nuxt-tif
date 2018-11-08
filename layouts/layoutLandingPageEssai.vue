<template>
	<div class="loading-page" v-if="loadingPage" v-cloak>
	    <div class="loader"></div>
	</div>

	<div v-else v-cloak>
		<nuxt/>
	</div>
</template>

<script>
	export default {
		head: {
			meta: [
				{ charset: "utf-8" },
				{ name: "viewport", content: "width=device-width, initial-scale=1, shrink-to-fit=no" }
			],
		    script: [
		      	// { src: 'https://code.jquery.com/jquery-3.2.1.slim.min.js' },
      			// { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js' },
      			{ src: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js' },
      			// { src: 'https://raw.githubusercontent.com/BlackrockDigital/startbootstrap-full-slider/master/vendor/jquery/jquery.min.js' },
      			// { src: 'https://raw.githubusercontent.com/BlackrockDigital/startbootstrap-full-slider/master/vendor/bootstrap/js/bootstrap.bundle.min.js' }
      			// { src: 'https://blackrockdigital.github.io/startbootstrap-creative/vendor/jquery-easing/jquery.easing.min.js' },
      			// { src: 'https://blackrockdigital.github.io/startbootstrap-creative/vendor/scrollreveal/scrollreveal.min.js' },
      			// { src: 'https://blackrockdigital.github.io/startbootstrap-creative/vendor/magnific-popup/jquery.magnific-popup.min.js' },
      			{ src: 'https://blackrockdigital.github.io/startbootstrap-creative/js/creative.min.js' }
		    ],
		    link: [
      			{ rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' },
      			// { rel: 'stylesheet', href: 'https://raw.githubusercontent.com/BlackrockDigital/startbootstrap-full-slider/master/vendor/bootstrap/css/bootstrap.min.css' },
      			{ rel: 'stylesheet', href: 'https://blackrockdigital.github.io/startbootstrap-creative/vendor/magnific-popup/magnific-popup.css' },
      			{ rel: 'stylesheet', href: 'https://blackrockdigital.github.io/startbootstrap-creative/css/creative.min.css' },
      			{ rel: 'stylesheet', href: 'https://blackrockdigital.github.io/startbootstrap-creative/vendor/fontawesome-free/css/all.min.css' },
			]
		},
		middleware: ['unauth-check'],
		created() {
			setTimeout(() => {
			  	this.loadingPage = false
			}, 1000)
		},
		data () {
			return {
				loadingPage: true,	
			}
		},
		computed: {

        },
		methods: {

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

	@keyframes spin {
	    0% { transform: rotate(0deg); }
	    100% { transform: rotate(360deg); }
	}
</style>