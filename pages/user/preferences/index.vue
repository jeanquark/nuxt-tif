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
                        <div class="flex-container-modal-box-title">
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
                                <nuxt-link :to="localePath({name: 'user-preferences-language'})" class="columnParametreButton" v-if="loadedUser">
                                    {{ this.language }}
                                </nuxt-link>
                            </div>
                            <div class="flex-container-modal-Niveau">
                                <div class="columnParametreTexte">
                                    {{ $t('pages.user-preferences.pseudo') }}
                                </div>
                                <nuxt-link to="/user/preferences/pseudo" class="columnParametreButton" v-if="loadedUser">
                                    {{ loadedUser.username }}
                                </nuxt-link>
                            </div>
                            <div class="flex-container-modal-Niveau">
                                <div class="columnParametreTexte">
                                    {{ $t('pages.user-preferences.birthyear') }}
                                </div>
                                <nuxt-link to="/user/preferences/birth" class="columnParametreButton" v-if="loadedUser">
                                    {{ loadedUser.year_birth }}
                                </nuxt-link>
                            </div>
                            <div class="flex-container-modal-Niveau">
                                <div class="columnParametreTexte">
                                    {{ $t('pages.user-preferences.country') }}
                                </div>
                                <nuxt-link to="/user/preferences/country" class="columnParametreButton" v-if="loadedUser && loadedUser.country">
                                    {{ loadedUser.country.name }}
                                </nuxt-link>
                            </div>
                            <div class="flex-container-modal-Niveau">
                                <div class="columnParametreTexte">
                                    Level
                                </div>
                                <nuxt-link to="/user/preferences/level" class="columnParametreButton" v-if="loadedUser && loadedUser.level">
                                    {{ loadedUser.level.value }}
                                </nuxt-link>
                            </div>
                            <div class="flex-container-modal-Niveau">
                                <div class="columnParametreTexte">
                                    Tokens
                                </div>
                                <nuxt-link to="/user/preferences/tokens" class="columnParametreButton" v-if="loadedUser &&loadedUser.tokens">
                                    {{ loadedUser.tokens.value }}
                                </nuxt-link>
                            </div>
                            <div class="flex-container-modal-Niveau">
                                <div class="columnParametreTexte">
                                    Status
                                </div>
                                <nuxt-link to="/user/preferences/status" class="columnParametreButton" v-if="loadedUser &&loadedUser.status">
                                    {{ loadedUser.status.name }}
                                </nuxt-link>
                            </div>
                        </div><!-- /.flex-container -->
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
        // created () {
        //     this.selectedLanguage = this.language($i18n.locale)
        // },       
        data () {
            return {
                selectedLanguage: ''
            }
        },
        computed: {
            loadedUser () {
                return this.$store.getters['users/loadedUser']
            },
            language () {
                let language = this.$i18n.locale
                switch(language) {
                    case 'en':
                        return 'english'
                    case 'fr':
                        return 'français'
                    case 'de':
                        return 'deutsch'
                }
            }
        }, 
        method: {
        }
    }
</script>

<style scoped>

</style>
