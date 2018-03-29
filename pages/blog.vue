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
    export default {
        layout: 'layoutFront',
        created() {
            return this.$store.dispatch('loadedPosts')
        },
        asyncData () {
            return {
                renderSource: process.static ? 'static' : (process.server ? 'serveur' : 'client')
            }
        },
        computed: {
            loadedPosts() {
                return this.$store.getters.loadedPosts
            }
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
