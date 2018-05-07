<template>
    <div class="container-fluid">
        <!-- The Modal OtherTeam -->
        <div id="modalBox">
            <div class="modal-dialog modal-lg">
                <div class="modal-content-resultats">
                    <!-- Modal Header -->
                    <div class="modal-header">
                        <span class="modal-title">Compétition en cours <span class="modal-title-Sub">(Tes équipes)</span></span>
                        <nuxt-link to="/user/teams">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" class="white-text"><i class="fa fa-arrow-circle-left"></i></span>
                            </button>
                        </nuxt-link>                   
                    </div>
                    <!-- Modal body -->
                    <div id="modalBoxContent" class="modal-body">
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
            // this.$store.dispatch('teams/loadedTeams')
        },
        computed: {
            
        },
        methods: {
            // loadedTeamsByCompetition (competition_id) {
            //     // return this.$store.getters['teams/loadedTeams']
            //     return this.$store.getters['teams/loadedTeams'].filter(team => team.comp_id === competition_id)
            // }
        }
    }
</script>

<style>

</style>
