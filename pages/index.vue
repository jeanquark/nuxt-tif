<template>
    <div class="container">
        <div class="row" style="margin-bottom: 50px;">
            <div class="col-md-12 text-center">
                <h2 class="">Nuxt.js app with Firebase Authentication and Heroku Deployment</h2>
                <br /><br />
                <h4>Server: Node.js - Database: Firebase - Frontend: Vue.js</h4>
                <br /><br />
                <Logo/>
                <br /><br />
                <h4 class="">{{ $t('render') }}: <span class="render-result">{{renderSource}}</span></h4>
                <button id="" class="btn btn-warning" @click="reloadPage"> {{ $t('reload') }}</button>
                <br /><br />
                <p style="color: #41B883; font-size: 1.5em;">{{ $t('welcome') }} @Manikaes, @Bas {{ $t('and') }} @Jo!</p>
            </div>
        </div>
    </div><!-- /.container -->
</template>

<script>
    import Logo from '~/components/Logo.vue'
    export default {
        layout: 'layoutFront',
        created() {
            // return this.$store.dispatch('loadedPosts')
            return this.$store.dispatch('posts/loadedPosts')
        },
        asyncData () {
            return {
                renderSource: process.static ? 'static' : (process.server ? 'server' : 'client')
            }
        },
        components: {
            Logo
        },
        methods: {
            reloadPage () {
                window.location.reload()
            }
        }
    }
</script>

<style scoped>

</style>
