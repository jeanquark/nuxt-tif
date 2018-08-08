<template>
    <div class="container-fluid">
        <!-- The Modal OtherTeam -->
        <div id="modalBox">
            <div class="modal-dialog modal-lg">
                <div class="modal-content-resultats">   
                    <div class="modal-header">
                        <span class="modal-title">Compétition en cours<span class="modal-title-Sub"> (Les équipes)</span></span>
                        <nuxt-link to="/user/teams">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" class="white-text"><i class="fa fa-arrow-circle-left"></i></span>
                            </button>
                        </nuxt-link>
                    </div><!-- /.modal-header -->
                    <!-- selectedTeams: {{ this.selectedTeams }}<br /><br /> -->
                    <!-- oldUserTeams: {{ this.oldUserTeams }}<br /><br /> -->
                    <!-- addedUserTeams: {{ this.addedUserTeams }}<br /><br /> -->
                    <!-- removedUserTeams: {{ this.removedUserTeams }}<br /><br /> -->
                    <!-- Modal body -->
                    <div id="modalBoxContent" class="modal-body" v-if="!loading" v-cloak>
						<div class="flex-container-modal-MyTeam">
							<h1>Supporter une nouvelle équipe ?</h1>
						</div>
						<div class="flex-container-modal-Title banner text-center">
							<h2 v-if="loadedCompetition">{{ loadedCompetition.category.name }}<br />{{ loadedCompetition.name }}<br />
                                <span v-for="country in loadedCompetition.countries" v-if="loadedCompetition.countries">{{ country.name }}</span>
                            </h2>
						</div>
						<div class="flex-container-modal-OtherTeam">
							<h6>Choisis ton équipe !</h6>
                            <h6 v-if="this.selectedTeams.length > 1">Tu as {{ this.selectedTeams.length }} équipes séléctionnées</h6>
                            <h6 v-else>Tu as {{ this.selectedTeams.length }} équipe séléctionnée</h6>
						</div>
                        <div class="flex-container-modal-OtherTeam-Img" v-if="loadedTeamsByCompetition.length != 0">
                            <div class="OtherTeam" v-for="team in loadedTeamsByCompetition" style="cursor: pointer;" :class="{active: selectedTeams.findIndex(e => e.id === team.id) != -1}" @click="selectTeam(team)">
                                <img :src="'/images/teams/' + team.image" class="imgModalAvatar" v-bind:class="{active: isActive}" />
                            </div>
                        </div>
                    </div><!-- /#modalBoxContent -->

                    <div id="modalBoxContent" class="modal-body" v-else>
                        <div class="flex-container-modal-MyTeam">
                            <h1>Supporter une nouvelle équipe ?</h1>
                        </div>
                        <!-- Loading placeholder -->
                        <div class="ph-item">
                            <div class="col-md-2" v-for="n in counter">
                                <div class="ph-picture"></div>
                            </div>
                        </div>
                    </div>

                    <!-- Modal footer -->
                    <div class="modal-footer">
                        <button class="btn btn-success" @click="saveTeams">Save</button>
                        <button class="btn btn-default" @click="clear">Clear</button>
                        <nuxt-link to="/user/teams">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Fermer</button>
                        </nuxt-link>
                    </div><!-- /.modal-footer -->
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </div><!-- /#modal-box -->
    </div><!-- /.container-fluid -->
</template>

<script>
    import axios from 'axios'
    import Noty from 'noty'
    export default {
        layout: 'layoutFront',
        created () {
            console.log('Entering created lifecycle')
            this.$store.commit('setLoading', true, {root: true})
            // if (Object.keys(this.$store.getters['competitions/loadedCompetitions']).length === 0) {
                this.$store.dispatch('competitions/loadedCompetitions')
            // }
            // if (Object.keys(this.$store.getters['teams/loadedTeams']).length === 0) {
                this.$store.dispatch('teams/loadedTeams')
            // }
            // if (Object.keys(this.$store.getters['users/loadedUserTeams']).length === 0) {
                this.$store.dispatch('users/loadedUserTeams').then(response => {
                    console.log('response: ', response)
                    this.selectedTeams = this.$store.getters['users/loadedUserTeams']
                    // new Noty({type: 'success', text: 'User teams loaded successfully', timeout: 5000, theme: 'metroui'}).show()
                    this.$store.commit('setLoading', false, {root: true})
                }, error => {
                    console.log(error)
                    new Noty({type: 'error', text: 'Unable to load user teams', timeout: 5000, theme: 'metroui'}).show()
                    this.$store.commit('setLoading', false, {root: true})
                })
        },
        data () {
            return {
                counter: 18,
                competition_id: this.$route.params.id,
                isActive: false,
                selectedTeams: [],
            }
        },
        computed: {
            loading () {
                return this.$store.getters['loading']
            },
            loadedCompetition () {
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
            },
            loadedUserTeams () {
                return this.$store.getters['users/loadedUserTeams']
            },
        },
        methods: {
            selectTeam (team) {
                const index = this.selectedTeams.findIndex(el => el.id === team.id)
                if (!this.selectedTeams.find(el => el.id === team.id)) {
                    this.selectedTeams.push(team)
                } else {
                    this.selectedTeams.splice(index, 1)
                }
            },
            async saveTeams () {
                console.log('Click on saveTeams')
                await this.$store.dispatch('users/updateUserTeams', this.selectedTeams)
                // this.$router.replace('/user/teams')
            },
            clear () {
                this.selectedTeams = []
            }
        }
    }
</script>

<style scoped>
    [v-cloak] > * { display:none }
    .active {
        background: orangered;
        border: 6px solid orangered;
    }
</style>
