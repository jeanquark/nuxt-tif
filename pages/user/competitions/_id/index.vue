<template>
    <div class="container-fluid">
        <!-- The Modal OtherTeam -->
        <div id="modalBox">
            <div class="modal-dialog modal-lg">
                <div class="modal-content-resultats">
                    <!-- Modal Header -->
                    <!-- {{ competition_id }}<br /><br /> -->
                    <!-- {{ loadedCompetition }}<br /><br /> -->
                    <!-- {{ loadedTeamsByCompetition }} -->
                    <!-- {{ loadedTeamsByCompetition[0]['competitions'][this.competition_id] }} -->
                    <div class="modal-header">
                        <span class="modal-title">{{ loadedCompetition.name }} <span class="modal-title-Sub">(Les équipes)</span></span>
                        <nuxt-link to="/user/competitions">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" class="white-text"><i class="fa fa-arrow-circle-left"></i></span>
                            </button>
                        </nuxt-link>   
                    </div>                
                </div>
                <!-- Modal body -->
                <div id="modalBoxContent" class="modal-body">
                    <div class="flex-container-modal-OtherTeam-Img" v-for="team in loadedTeamsByCompetition">
                        <div class="OtherTeam">
                            <img :src="'/images/teams/' + team.image" class="imgModalAvatar"/>
                            <nuxt-link to="/otherTeamDetails" class="overlayOtherTeam">
                                <div class="textActivity">{{ team.category }}</br>Suisse</br></br>{{ team.name }}</div>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
                <!-- Modal footer -->
                <div class="modal-footer">
                    <nuxt-link to="/user/competitions">
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Fermer</button>
                    </nuxt-link>
                </div><!-- /.modal-footer -->
            </div><!-- /.modal-dialog -->
        </div><!-- /#modal-box -->
    <!-- End Modal OtherTeam -->
    </div><!-- /.container-fluid -->
</template>

<script>
export default {
    layout: 'layoutFront',
    created () {
        if (Object.keys(this.$store.getters['competitions/loadedCompetitions']).length === 0) {
            this.$store.dispatch('competitions/loadedCompetitions')
        }
        if (Object.keys(this.$store.getters['teams/loadedTeams']).length === 0) {
            this.$store.dispatch('teams/loadedTeams')
        }
            // console.log(this.$route.params)
            // const competititon = this.$route.params.id
            // loadedTeams
            // this.$store.getters['competitions/'].filter()
        },
        data () {
            return {
                competition_id: this.$route.params.id
            }
        },
        computed: {
            loadedCompetition () {
                // return this.$store.getters['competitions/loadedCompetitions']
                return this.$store.getters['competitions/loadedCompetitions'].find(competition => competition.id === this.competition_id)
            },
            loadedTeamsByCompetition () {
                const teams = []
                const competition_id = this.competition_id
                this.$store.getters['teams/loadedTeams'].forEach(function (team) {
                    if (team.competitions) {
                        if (team['competitions'][competition_id]) {
                            teams.push(team)
                        }
                    }
                })
                return teams
            }
        },
        methods: {

        }
    }
    </script>

    <style>

    </style>
