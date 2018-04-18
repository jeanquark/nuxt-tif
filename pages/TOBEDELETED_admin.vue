<template>
    <div class="container">
        <div class="row" style="margin-bottom: 50px;">
            <div class="col-md-12 text-center">
                <h2 class="">Page admin</h2>
                <br /><br />
                <br /><br />
                <h4 class="">Rendu depuis: <span class="render-result">{{renderSource}}</span></h4>
                <button id="" class="btn btn-warning" @click="reloadPage"> Reload Page</button>
            </div>
        </div>
    </div><!-- /.container -->
</template>

<script>
    export default {
        layout: 'layoutBack',
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

