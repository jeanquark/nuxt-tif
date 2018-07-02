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

                    <!-- Modal body -->
                    <div id="modalBoxContent" class="modal-body">
						<div class="flex-container-modal-MyTeam">
							<h1>Supporter une nouvelle équipe ?</h1>
						</div>
						<div class="flex-container-modal-Title banner text-center" v-if="loadedCompetition">
							<h2>{{ loadedCompetition.category.name }}</br>{{ loadedCompetition.name }}</br>{{ loadedCompetition.country }}</br>{{ loadedCompetition.year }}<br /></h2>
						</div>
						<div class="flex-container-modal-OtherTeam">
							<h6>Choisis ton équipe !</h6>
						</div>
                        <div class="flex-container-modal-OtherTeam-Img">
                            <div class="OtherTeam"  v-for="team in loadedTeamsByCompetition" style="cursor: pointer;" :class="{active: selectedTeams.findIndex(e => e.id === team.id) != -1}" @click="selectTeam(team)">
                                <img :src="'/images/teams/' + team.image" class="imgModalAvatar" v-bind:class="{active: isActive}" />
                            </div>
                        </div>
                    </div><!-- /#modalBoxContent -->

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
    export default {
        layout: 'layoutFront',
        created () {
            if (Object.keys(this.$store.getters['competitions/loadedCompetitions']).length === 0) {
                this.$store.dispatch('competitions/loadedCompetitions')
            }
            if (Object.keys(this.$store.getters['teams/loadedTeams']).length === 0) {
                this.$store.dispatch('teams/loadedTeams')
            }
            if (Object.keys(this.$store.getters['users/loadedUserTeams']).length === 0) {
                this.$store.dispatch('users/loadedUserTeams')
            }
            // this.selectedTeams.push({id: '-LBVgvOsCUALzowK576H', name: 'Argentina'}, {id: '-LBVgvOxY6A_ylDQBOmp', name: 'Australia'}, {id: '-LBVgvR__QJEcYxQ7a7g', name: 'Republic of Korea'})
            // this.selectedTeams.push({abc})
                // console.log(this.$route.params)
                // const competititon = this.$route.params.id
                // loadedTeams
                // this.$store.getters['competitions/'].filter()
            for (let team of this.loadedUserTeams) {
                this.selectedTeams.push(team)
            }
        },
        data () {
            return {
                competition_id: this.$route.params.id,
                isActive: false,
                // selectedTeams: [{id: '-LBVgvOsCUALzowK576H', name: 'Argentina'}, {id: '-LBVgvOxY6A_ylDQBOmp', name: 'Australia'}, {id: '-LBVgvR__QJEcYxQ7a7g', name: 'Republic of Korea'}]
                // selectedTeams: [{id: '-LBVgvOsCUALzowK576H', name: 'Argentina'}, {id: '-LBVgvOxY6A_ylDQBOmp', name: 'Australia'}, {id: '-LBVgvR__QJEcYxQ7a7g', name: 'Republic of Korea'}]
                selectedTeams: []
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
            },
            loadedUserTeams () {
                // return this.selectedTeams.push({id: '-LBVgvOsCUALzowK576H', name: 'Argentina'}, {id: '-LBVgvOxY6A_ylDQBOmp', name: 'Australia'}, {id: '-LBVgvR__QJEcYxQ7a7g'})
                // return this.$store.getters['users/loadedUserTeams']
                // const abc = [{id: '-LBVgvOsCUALzowK576H'}, {id: '-LBVgvOxY6A_ylDQBOmp'}, {id: '-LBVgvR__QJEcYxQ7a7g'}]
                // return abc
                // const userTeams = []
                // 1) First retrieve all userteam ids
                // let loadedUserTeams = this.$store.getters['users/loadedUserTeams']
                // this.selectedTeams = loadedUserTeams
                // return loadedUserTeams
                return this.$store.getters['users/loadedUserTeams']
            }
        },
        methods: {
            selectTeam (team) {
                // this.isActive = !this.isActive
                console.log('selectTeam')
                console.log(team.id)
                // const selectedTeam = {id: team.id, name: team.name}
                const selectedTeam = team
                console.log(selectedTeam)
                // return
                // console.log(selectedTeam)
                const index = this.selectedTeams.findIndex(el => el.id === team.id)
                console.log('index: ' + index)
                // if (!this.selectedTeams.includes(selectedTeam)) {
                if (!this.selectedTeams.find(el => el.id === selectedTeam.id)) {
                    this.selectedTeams.push(selectedTeam)
                } else {
                    this.selectedTeams.splice(index, 1)
                }
            },
            async saveTeams () {
                console.log('saveTeams')
                console.log(this.selectedTeams)
                await this.$store.dispatch('users/updateUserTeams', this.selectedTeams)
                this.$router.replace('/user/teams')
            },
            clear () {
                this.selectedTeams = []
            }
        }
    }
</script>

<style scoped>
    .active {
        background: orangered;
        border: 6px solid orangered;
        /*border: 8px solid red;*/
    }
</style>
