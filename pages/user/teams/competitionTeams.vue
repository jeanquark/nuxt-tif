<template>
    <div class="container-fluid">
        <!-- The Modal OtherTeam -->
        <div id="modalBox">
            <div class="modal-dialog modal-lg">
                <div class="modal-content-resultats">
                    <!-- Modal Header -->
                    <div class="modal-header">
                        <span class="modal-title">Compétition en cours <span class="modal-title-Sub">(Tes compétitions)</span></span>
                        <nuxt-link to="/user/teams">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" class="white-text"><i class="fa fa-arrow-circle-left"></i></span>
                            </button>
                        </nuxt-link>                   
                    </div>
                    {{ loadedTeamsByCompetition(1204) }}
                    <!-- Modal body -->
                    <div id="modalBoxContent" class="modal-body">
                        <div class="flex-container-modal-MyTeam">
                            <h1>Supporter une nouvelle équipe ?</h1>
                        </div>
                        <div class="flex-container-modal-Title banner text-center">
                            <h2>Football</br>Coupe du monde</br>Russie</br>2018</h2>
                        </div>
                        <div class="flex-container-modal-OtherTeam">
                            <h6>Choisis ton équipe !</h6>
                        </div>
                        <div class="flex-container-modal-OtherTeam-Img">
                            <div class="OtherTeam"><img src="/images/flags/1.png" class="imgModalAvatar"/><nuxt-link to="/otherTeamDetails" class="overlayOtherTeam"><div class="textActivity">Football</br>Suisse</br></br>+Infos</div></nuxt-link></div>
                            <div class="OtherTeam"><img src="/images/flags/1.png" class="imgModalAvatar"/><nuxt-link to="/otherTeamDetails" class="overlayOtherTeam"><div class="textActivity">Football</br>Suisse</br></br>+Infos</div></nuxt-link></div>
                            <div class="OtherTeam"><img src="/images/flags/1.png" class="imgModalAvatar"/><nuxt-link to="/otherTeamDetails" class="overlayOtherTeam"><div class="textActivity">Football</br>Suisse</br></br>+Infos</div></nuxt-link></div>
                            <div class="OtherTeam"><img src="/images/flags/1.png" class="imgModalAvatar"/><nuxt-link to="/otherTeamDetails" class="overlayOtherTeam"><div class="textActivity">Football</br>Suisse</br></br>+Infos</div></nuxt-link></div>
                            <div class="OtherTeam"><img src="/images/flags/1.png" class="imgModalAvatar"/><nuxt-link to="/otherTeamDetails" class="overlayOtherTeam"><div class="textActivity">Football</br>Suisse</br></br>+Infos</div></nuxt-link></div>
                            <div class="OtherTeam"><img src="/images/flags/1.png" class="imgModalAvatar"/><nuxt-link to="/otherTeamDetails" class="overlayOtherTeam"><div class="textActivity">Football</br>Suisse</br></br>+Infos</div></nuxt-link></div>
                            <div class="OtherTeam"><img src="/images/flags/1.png" class="imgModalAvatar"/><nuxt-link to="/otherTeamDetails" class="overlayOtherTeam"><div class="textActivity">Football</br>Suisse</br></br>+Infos</div></nuxt-link></div>
                            <div class="OtherTeam"><img src="/images/flags/1.png" class="imgModalAvatar"/><nuxt-link to="/otherTeamDetails" class="overlayOtherTeam"><div class="textActivity">Football</br>Suisse</br></br>+Infos</div></nuxt-link></div>
                            <div class="OtherTeam"><img src="/images/flags/1.png" class="imgModalAvatar"/><nuxt-link to="/otherTeamDetails" class="overlayOtherTeam"><div class="textActivity">Football</br>Suisse</br></br>+Infos</div></nuxt-link></div>
                            <div class="OtherTeam"><img src="/images/flags/1.png" class="imgModalAvatar"/><nuxt-link to="/otherTeamDetails" class="overlayOtherTeam"><div class="textActivity">Football</br>Suisse</br></br>+Infos</div></nuxt-link></div>
                            <div class="OtherTeam"><img src="/images/flags/1.png" class="imgModalAvatar"/><nuxt-link to="/otherTeamDetails" class="overlayOtherTeam"><div class="textActivity">Football</br>Suisse</br></br>+Infos</div></nuxt-link></div>
                            <div class="OtherTeam"><img src="/images/flags/1.png" class="imgModalAvatar"/><nuxt-link to="/otherTeamDetails" class="overlayOtherTeam"><div class="textActivity">Football</br>Suisse</br></br>+Infos</div></nuxt-link></div>
                            <div class="OtherTeam"><img src="/images/flags/1.png" class="imgModalAvatar"/><nuxt-link to="/otherTeamDetails" class="overlayOtherTeam"><div class="textActivity">Football</br>Suisse</br></br>+Infos</div></nuxt-link></div>
                            <div class="OtherTeam"><img src="/images/flags/1.png" class="imgModalAvatar"/><nuxt-link to="/otherTeamDetails" class="overlayOtherTeam"><div class="textActivity">Football</br>Suisse</br></br>+Infos</div></nuxt-link></div>
                            <div class="OtherTeam"><img src="/images/flags/1.png" class="imgModalAvatar"/><nuxt-link to="/otherTeamDetails" class="overlayOtherTeam"><div class="textActivity">Football</br>Suisse</br></br>+Infos</div></nuxt-link></div>
                            <div class="OtherTeam"><img src="/images/flags/1.png" class="imgModalAvatar"/><nuxt-link to="/otherTeamDetails" class="overlayOtherTeam"><div class="textActivity">Football</br>Suisse</br></br>+Infos</div></nuxt-link></div>
                            <div class="OtherTeam"><img src="/images/flags/1.png" class="imgModalAvatar"/><nuxt-link to="/otherTeamDetails" class="overlayOtherTeam"><div class="textActivity">Football</br>Suisse</br></br>+Infos</div></nuxt-link></div>
                            <div class="OtherTeam"><img src="/images/flags/1.png" class="imgModalAvatar"/><nuxt-link to="/otherTeamDetails" class="overlayOtherTeam"><div class="textActivity">Football</br>Suisse</br></br>+Infos</div></nuxt-link></div>
                            <div class="OtherTeam"><img src="/images/flags/1.png" class="imgModalAvatar"/><nuxt-link to="/otherTeamDetails" class="overlayOtherTeam"><div class="textActivity">Football</br>Suisse</br></br>+Infos</div></nuxt-link></div>
                            <div class="OtherTeam"><img src="/images/flags/1.png" class="imgModalAvatar"/><nuxt-link to="/otherTeamDetails" class="overlayOtherTeam"><div class="textActivity">Football</br>Suisse</br></br>+Infos</div></nuxt-link></div>
                            <div class="OtherTeam"><img src="/images/flags/1.png" class="imgModalAvatar"/><nuxt-link to="/otherTeamDetails" class="overlayOtherTeam"><div class="textActivity">Football</br>Suisse</br></br>+Infos</div></nuxt-link></div>
                            <div class="OtherTeam"><img src="/images/flags/1.png" class="imgModalAvatar"/><nuxt-link to="/otherTeamDetails" class="overlayOtherTeam"><div class="textActivity">Football</br>Suisse</br></br>+Infos</div></nuxt-link></div>
                            <div class="OtherTeam"><img src="/images/flags/1.png" class="imgModalAvatar"/><nuxt-link to="/otherTeamDetails" class="overlayOtherTeam"><div class="textActivity">Football</br>Suisse</br></br>+Infos</div></nuxt-link></div>
                            <div class="OtherTeam"><img src="/images/flags/1.png" class="imgModalAvatar"/><nuxt-link to="/otherTeamDetails" class="overlayOtherTeam"><div class="textActivity">Football</br>Suisse</br></br>+Infos</div></nuxt-link></div>
                            <div class="OtherTeam"><img src="/images/flags/1.png" class="imgModalAvatar"/><nuxt-link to="/otherTeamDetails" class="overlayOtherTeam"><div class="textActivity">Football</br>Suisse</br></br>+Infos</div></nuxt-link></div>
                            <div class="OtherTeam"><img src="/images/flags/1.png" class="imgModalAvatar"/><nuxt-link to="/otherTeamDetails" class="overlayOtherTeam"><div class="textActivity">Football</br>Suisse</br></br>+Infos</div></nuxt-link></div>
                            <div class="OtherTeam"><img src="/images/flags/1.png" class="imgModalAvatar"/><nuxt-link to="/otherTeamDetails" class="overlayOtherTeam"><div class="textActivity">Football</br>Suisse</br></br>+Infos</div></nuxt-link></div>
                            <div class="OtherTeam"><img src="/images/flags/1.png" class="imgModalAvatar"/><nuxt-link to="/otherTeamDetails" class="overlayOtherTeam"><div class="textActivity">Football</br>Suisse</br></br>+Infos</div></nuxt-link></div>
                            <div class="OtherTeam"><img src="/images/flags/1.png" class="imgModalAvatar"/><nuxt-link to="/otherTeamDetails" class="overlayOtherTeam"><div class="textActivity">Football</br>Suisse</br></br>+Infos</div></nuxt-link></div>
                            <div class="OtherTeam"><img src="/images/flags/1.png" class="imgModalAvatar"/><nuxt-link to="/otherTeamDetails" class="overlayOtherTeam"><div class="textActivity">Football</br>Suisse</br></br>+Infos</div></nuxt-link></div>
                            <div class="OtherTeam"><img src="/images/flags/1.png" class="imgModalAvatar"/><nuxt-link to="/otherTeamDetails" class="overlayOtherTeam"><div class="textActivity">Football</br>Suisse</br></br>+Infos</div></nuxt-link></div>
                            <div class="OtherTeam"><img src="/images/flags/1.png" class="imgModalAvatar"/><nuxt-link to="/otherTeamDetails" class="overlayOtherTeam"><div class="textActivity">Football</br>Suisse</br></br>+Infos</div></nuxt-link></div>
                        </div>  
                    </div>
                    <!-- Modal footer -->
                    <div class="modal-footer">
                        <nuxt-link to="/user/teams">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Fermer</button>
                        </nuxt-link>
                    </div>
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </div><!-- /#modal-box -->
        <!-- End Modal OtherTeam -->
    </div><!-- /.container-fluid -->
</template>

<script>
    export default {
        layout: 'layoutFront',
        created () {
            this.$store.dispatch('teams/loadedTeams')
        },
        computed: {
            
        },
        methods: {
            loadedTeamsByCompetition (competition_id) {
                // return this.$store.getters['teams/loadedTeams']
                return this.$store.getters['teams/loadedTeams'].filter(team => team.comp_id === competition_id)
            }
        }
    }
</script>

<style>

</style>
