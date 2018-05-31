<template>
    <div class="container-fluid">
        <!-- The Modal Paramètre -->
        <div id="modalBox">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <!-- Modal Header -->
                    <div class="modal-header">
                        <span class="modal-title">{{ $t('pages.user-preferences.your_parameters') }}</span>
                        <nuxt-link :to="localePath({ name: 'home'})" class="close">
                            <span aria-hidden="true" class="white-text"><i class="fa fa-arrow-circle-left"></i></span>
                        </nuxt-link>     
                    </div>
                    <!-- Modal body -->
                    <div id="modalBoxContent" class="modal-body">
                        <div class="flex-container-modal-MyTeam">
                            <h1>{{ $t('pages.user-preferences.info_and_or_help') }}</h1>
                        </div>
                        <div class="flex-container-modal-Parametre">
                            <!-- <div class="flex-container-modal-Niveau">
                                <div class="columnParametreTexte">
                                    {{ $t('pages.user-preferences.music') }}
                                </div>
                                <div class="columnParametreButtonYes">
                                    {{ $t('pages.user-preferences.yes') }}
                                </div>
                            </div>
                            <div class="flex-container-modal-Niveau">
                                <div class="columnParametreTexte">
                                    {{ $t('pages.user-preferences.sound') }}
                                </div>
                                <div class="columnParametreButtonNo">
                                    {{ $t('pages.user-preferences.no') }}
                                </div>
                            </div>
                            <div class="flex-container-modal-Niveau">
                                <div class="columnParametreTexte">
                                    Facebook
                                </div>
                                <div class="columnParametreButtonYes">
                                    {{ $t('pages.user-preferences.online') }}
                                </div>
                            </div>
                            <div class="flex-container-modal-Niveau">
                                <div class="columnParametreTexte">
                                    Google+
                                </div>
                                <div class="columnParametreButtonNo">
                                    {{ $t('pages.user-preferences.offline') }}
                                </div>
                            </div> -->
                            <div class="flex-container-modal-Niveau">
                                <div class="columnParametreTexte">
                                    {{ $t('pages.user-preferences.languages') }}
                                </div>
                                <nuxt-link :to="localePath({name: 'user-preferences-language'})" class="columnParametreButton">
                                    {{ $i18n.locale }}
                                </nuxt-link>
                            </div>
                            <div class="flex-container-modal-Niveau">
                                <div class="columnParametreTexte">
                                    {{ $t('pages.user-preferences.pseudo') }}
                                </div>
                                <nuxt-link to="/user/preferences/pseudo" class="columnParametreButton" v-if="user">
                                    {{ user.pseudo }}
                                </nuxt-link>
                            </div>
                            <div class="flex-container-modal-Niveau">
                                <div class="columnParametreTexte">
                                    {{ $t('pages.user-preferences.birthyear') }}
                                </div>
                                <nuxt-link to="/user/preferences/birth" class="columnParametreButton" v-if="user">
                                    {{ user.year_birth }}
                                </nuxt-link>
                            </div>
                            <div class="flex-container-modal-Niveau">
                                <div class="columnParametreTexte">
                                    {{ $t('pages.user-preferences.nationality') }}
                                </div>
                                <nuxt-link to="/user/preferences/country" class="columnParametreButton" v-if="user">
                                    {{ user.country.name }}
                                </nuxt-link>
                            </div>
                        </div><!-- /.flex-container -->
                    </div><!-- /.modal-body -->
                    <div id="modalAvatar" class="modal-body">
                        <div class="flex-container-modal-Parametre">
                            <div class="flex-container-modal-Niveau">
                                <nuxt-link to="#" class="columnParametreButtonGd">
                                    {{ $t('pages.user-preferences.help-assistance') }}
                                </nuxt-link>
                            </div>
                            <div class="flex-container-modal-Niveau">
                                <nuxt-link to="#" class="columnParametreButtonGd">
                                    {{ $t('pages.user-preferences.confidentiality') }}
                                </nuxt-link>
                            </div>
                            <div class="flex-container-modal-Niveau">
                                <nuxt-link to="#" class="columnParametreButtonGd">
                                    {{ $t('pages.user-preferences.user-conditions') }}
                                </nuxt-link>
                            </div>
                            <div class="flex-container-modal-Niveau">
                                <nuxt-link to="#" class="columnParametreButtonGd">
                                    {{ $t('pages.user-preferences.credits') }}
                                </nuxt-link>
                            </div>
                        </div>  
                    </div>
                    <!-- Modal footer -->
                    <div class="modal-footer">
                        <nuxt-link to="/home">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">{{ $t('pages.user-preferences.close') }}</button>
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div><!-- /#modalBox -->
        <!-- End Modal Paramètre -->
    </div><!-- /.container-fluid -->
</template>

<script>
    export default {
        layout: 'layoutFront',
        computed: {
            user () {
                return this.$store.getters['users/loadedUser']
            }
        },        
        data () {
            return {
                selectedLanguage: ''
            }
        },
        method: {
            language (language) {
                switch(language) {
                    case 'en':
                        this.selectedLanguage = 'english'
                        break
                    case 'fr':
                        this.selectedLanguage = 'français'
                        break
                    case 'de':
                        this.selectedLanguage = 'deutsch'
                        break
                }
            }
        }
    }
</script>

<style scoped>

</style>
