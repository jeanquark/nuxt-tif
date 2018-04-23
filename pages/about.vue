<template>
    <div class="container">
        <div class="row" style="margin-bottom: 50px;">
            <div class="col-md-12 text-center">
                <h3>{{ $t('about') }}</h3>
                <br /><br />
                <h4 class="">{{ $t('render') }}: <span class="render-result">{{renderSource}}</span></h4>
                <button id="" class="btn btn-warning" @click="reloadPage"> {{ $t('reload') }}</button>
            </div>
        </div><!-- /.row -->
        <!-- {{ loadedLiveEvents }} -->
        <!-- <transition name="fade">
            <div :key="loadedLiveEvents[0].localteam_score">
              {{ loadedLiveEvents[0].localteam_score }}
            </div>
        </transition>
        <transition name="fade">
            <div :key="loadedLiveEvents[0].visitorteam_score">
              {{ loadedLiveEvents[0].visitorteam_score }}
            </div>
        </transition> -->
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <table class="table">
                  <tbody>
                    <tr>
                      <td>{{ loadedLiveEvents[0].localteam_name }}</td>
                      <td>{{ loadedLiveEvents[0].visitorteam_name }}</td>
                    </tr>
                    <tr >
                    <transition name="fade" mode="out-in">
                        <td :key="loadedLiveEvents[0].localteam_score">{{ loadedLiveEvents[0].localteam_score }}</td>
                    </transition>
                    <transition name="fade" mode="out-in">
                        <td :key="loadedLiveEvents[0].visitorteam_score">
                            {{ loadedLiveEvents[0].visitorteam_score }}
                        </td>
                    </transition>
                    </tr>
                    <tr>
                        <td><img src="/images/lausanne-sport.png" width="100px"></td>
                        <td><img src="/images/xamax.png" width="110px"></td>
                    </tr>
                  </tbody>
                </table>
            </div><!-- /.col-md-6 -->
        </div><!-- /.row -->
    </div><!-- /.container -->
</template>

<script>
    export default {
        layout: 'layoutFront',
        created () {
            return this.$store.dispatch('events/loadedLiveEvents')
        },
        asyncData () {
            return {
                renderSource: process.static ? 'static' : (process.server ? 'serveur' : 'client')
            }
        },
        computed: {
            loadedLiveEvents () {
                return this.$store.getters['events/loadedLiveEvents']
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
    .table td {
        text-align: center;   
    }
    .fade-enter {
        opacity: 0;
        background-color: orange;
    }
    .fade-leave {

    }
    .fade-enter-active {
        transition-property: opacity;
        transition-duration: 3s;
        transition-delay: 2s;
    }
    .fade-leave-active {

    }
    .fade-enter-to {
        background-color: orange;
    }
    .fade-leave-to {
        
    }
</style>
