<template>
    <div class="container">
        <div class="row" style="margin-bottom: 50px;">
            <div class="col-md-12 text-center">
                <h2 class="">{{ $t('admin') }}</h2>
                <br /><br />
                <h4>{{ $t('protected') }}</h4>
                <br /><br />
                <h4 class="">{{ $t('render') }}: <span class="render-result">{{renderSource}}</span></h4>
                <button id="" class="btn btn-warning" @click="reloadPage"> {{ $t('reload') }}</button>
            </div>
        </div>
    </div><!-- /.container -->
</template>

<script>
    export default {
        layout: 'layoutFront',
        middleware: 'auth-check',
        asyncData () {
            return {
                renderSource: process.static ? 'static' : (process.server ? 'serveur' : 'client')
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
