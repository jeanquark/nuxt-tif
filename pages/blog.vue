<template>
    <div class="container">
        <div class="row" style="margin-bottom: 50px;">
            <div class="col-md-12 text-center">
                <h3>{{ $t('blog') }}</h3>
                <br /><br />
                <h4 class="">{{ $t('render') }}: <span class="render-result">{{renderSource}}</span></h4>
                <button id="" class="btn btn-warning" @click="reloadPage"> {{ $t('reload') }}</button>
            </div>
            <br />
            <b>Posts: (in json format)</b> {{ loadedPosts }}
        </div>
    </div><!-- /.container -->
</template>

<script>
    // import { mapGetters } from 'vuex'

    export default {
        layout: 'layoutFront',
        created() {
            // return this.$store.dispatch('loadedPosts')
            // return this.$store.dispatch.posts.loadedPosts
            // return this.$store.commit('posts/setPosts')
            return this.$store.dispatch('posts/loadedPosts')
        },
        asyncData () {
            return {
                renderSource: process.static ? 'static' : (process.server ? 'serveur' : 'client')
            }
        },
        computed: {
            loadedPosts() {
                // return this.$store.getters.loadedPosts
                // return this.$store.getters.posts.loadedPosts
                // return this.$store.getters('posts/loadedPosts')
                // return this.$store.getters.posts('loadedPosts')
                // return this.$store.posts.getters('loadedPosts')
                // return this.$store.state.posts.loadedPosts
                return this.$store.getters['posts/loadedPosts']
                // return 'abc'
            }
        },
        // computed: mapGetters({
        //     loadedPosts: 'posts/loadedPosts'
        // }),
        methods: {
            reloadPage () {
                window.location.reload()
            }
        }
    }
</script>

<style scoped>

</style>
