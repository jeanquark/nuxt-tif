<template>
    <div class="container-fluid">
        <!-- The Modal OtherTeamDetail -->
        <div id="modalBox">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <!-- Modal Header -->
                    <div class="modal-header">
                        <span class="modal-title">Pleins d'infos ! <span class="modal-title-Sub">(Tes équipes)</span></span>
                        <nuxt-link to="/home">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" class="white-text"><i class="fa fa-arrow-circle-left"></i></span>
                            </button>
                        </nuxt-link>                   
                    </div>
                    <!-- Modal body -->
                    <div id="modalBoxContent" class="modal-bodyProfil text-center">
                        <div class="flex-container-modalProfil">
                            <div class="columnProfil"><img src="/images/flags/163.png" class="imgModalFlags"/> <span class="modal-Team-Title">Equipe de Suisse</span> <img src="/images/flags/163.png" class="imgModalFlags"/></div>
                        </div>
                        <div class="flex-container-modal-Niveau text-center">
                            <div class="columnProfil"><span class="modal-Team-Activity">Football</span></div>
                        </div>
                    </div>
                    <div class="flex-container-modalMenuResultats">
                        <nuxt-link to="/userTeamDetailsResults" style="flex-grow: 1" data-toggle="tooltip" data-placement="bottom" title="Calendrier et résultats"><span class="textModalMenuResultats">Résultats/Classements</br>(En cours)</span></nuxt-link>
                        <nuxt-link to="/userTeamDetailsStatsTif" style="flex-grow: 1" data-toggle="tooltip" data-placement="bottom" title="Classement individuel TIF"><span class="textModalMenuResultats">Stats/Trophées TIF</br>(En cours/archives)</span></nuxt-link>
                    </div>
                    <div id="modalTitle" class="modal-body">
                        <div class="flex-container-modal-Title banner2 text-center">
                            <h2>Les prochains matches</h2>
                        </div>
                        <div class="flex-container-modal-Action">
                            <table class="table tableText">
                                <tbody>
                                <tr class="borderResultatTermine">
                                    <td class="tdResultat1 text-left"><nuxt-link to="/userTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Suisse</nuxt-link></td>
                                    <td class="tdResultat text-center"><nuxt-link to="/gameOver" class="linkEvent">Amical</br>27.03.2018</br>0 - 0</br>Terminé</a></nuxt-link></td>
                                    <td class="tdResultat1 text-right"><nuxt-link to="/otherTeamDetails" class="linkEvent">Panama <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></nuxt-link></td>
                                </tr>                               
                                <tr class="borderResultat">
                                    <td class="tdResultat1 text-left"><nuxt-link to="/otherTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Espagne</nuxt-link></td>
                                    <td class="tdResultat text-center"><nuxt-link to="matchResultat.html" class="linkEvent">Amical</br>03.06.2018</br>1 - 1</br>En cours</nuxt-link></td>
                                    <td class="tdResultat1 text-right"><nuxt-link to="/userTeamDetails" class="linkEvent">Suisse <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></nuxt-link></td>
                                </tr>                               
                                <tr class="borderResultat">
                                    <td class="tdResultat1 text-left"><nuxt-link to="/userTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Suisse</nuxt-link></td>
                                    <td class="tdResultat text-center"><nuxt-link to="/matchNow" class="linkEvent">Amical</br>06.06.2018</br>1 - 1</br>En cours</nuxt-link></td>
                                    <td class="tdResultat1 text-right"><nuxt-link to="/otherTeamDetails" class="linkEvent">Japon <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></nuxt-link></td>
                                </tr>
                                <tr class="borderResultat">
                                    <td class="tdResultat1 text-left"><nuxt-link to="/otherTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</nuxt-link></td>
                                    <td class="tdResultat text-center"><nuxt-link to="/matchOpen" class="linkEvent">CM</br>17.06.2018</br>20:00</br>Agenda</nuxt-link></td>
                                    <td class="tdResultat1 text-right"><nuxt-link to="/userTeamDetails" class="linkEvent">Suisse <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></nuxt-link></td>
                                </tr>
                                <tr class="borderResultat">
                                    <td class="tdResultat1 text-left"><nuxt-link to="/otherTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Serbie</nuxt-link></td>
                                    <td class="tdResultat text-center"><nuxt-link to="/matchAgenda" class="linkEvent">CM</br>22.06.2018</br>20:00</br>Agenda</nuxt-link></td>
                                    <td class="tdResultat1 text-right"><nuxt-link to="/userTeamDetails" class="linkEvent">Suisse <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></nuxt-link></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div id="modalTitle" class="modal-body">
                        <div class="flex-container-modal-Title banner2 text-center">
                            <h2>Classement "TIF"</br> Coupe du Monde - 2018 - International</h2>
                        </div>
                        <div class="flex-container-modal-Action">
                            <table class="table tableTextClassement">
                                <thead>
                                <tr>
                                    <th class="col1 thTif"></th>
                                    <th class="col2 thTif"></th>
                                    <th class="col4 thTif text-center" data-toggle="tooltip" data-placement="bottom" title="Matches joués durant la compétition">MJ</th>
                                    <th class="col4 thTif text-center" data-toggle="tooltip" data-placement="bottom" title="Moyenne fan/match ayant participé à la compétition">MFans</th>
                                    <th class="col4 thTif text-center" data-toggle="tooltip" data-placement="bottom" title="Total fan ayant participé à la compétition">TFans</th>
                                    <th class="col4 thTif text-center" data-toggle="tooltip" data-placement="bottom" title="Moyenne PF/match remporté par les fans durant la compétition">MPF</th>
                                    <th class="col4 thTif text-center" data-toggle="tooltip" data-placement="bottom" title="Total PF remporté par les fans durant la compétition">TPF</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr class="trResultat1">
                                    <td class="tdTif">1</td>
                                    <td class="tdTif"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Panama</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                </tr>
                                <tr class="trResultat1">
                                    <td class="tdTif">2</td>
                                    <td class="tdTif"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> France</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                </tr>
                                <tr class="trResultat1">
                                    <td class="tdTif">3</td>
                                    <td class="tdTif"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Suisse</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                </tr>
                                <tr class="trResultat1">
                                    <td class="tdTif">4</td>
                                    <td class="tdTif"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Belgique</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                </tr>
                                <tr class="trResultat1">
                                    <td class="tdTif">5</td>
                                    <td class="tdTif"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Russie</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>  
                    </div>
                    <div id="modalTitle" class="modal-body">
                        <div class="flex-container-modal-Title banner2 text-center">
                            <h2>Statistiques "TIF"</br> Coupe du Monde - 2018 - International <span class="modal-title-Sub">(classements provisoires)</span></h2>
                            
                        </div>
                        <div class="flex-container-modal-Action">
                            <div class="flex-container-modal-Niveau">
                                <div class="columnClassementTexte">
                                    Moyenne de PF / match
                                </div>
                                <div class="columnClassementNumber2">
                                    0.00
                                </div>
                                <div class="columnClassement2">
                                    1er
                                </div>
                            </div>
                            <div class="flex-container-modal-Niveau">
                                <div class="columnClassementTexte">
                                    Total de PF durant la compétition
                                </div>
                                <div class="columnClassementNumber2">
                                    0.00
                                </div>
                                <div class="columnClassement2">
                                    1er
                                </div>
                            </div>
                            <div class="flex-container-modal-Niveau">
                                <div class="columnClassementTexte">
                                    Nombre de fans
                                </div>
                                <div class="columnClassementNumber2">
                                    1
                                </div>
                                <div class="columnClassement2">
                                    1er
                                </div>
                            </div>
                            <div class="flex-container-modal-Niveau">
                                <div class="columnClassementTexte">
                                    Moyenne de fans par match
                                </div>
                                <div class="columnClassementNumber2">
                                    0
                                </div>
                                <div class="columnClassement2">
                                    1er
                                </div>
                            </div>
                            <div class="flex-container-modal-Niveau">
                                <div class="columnClassementTexte">
                                    Total fans durant la compétition
                                </div>
                                <div class="columnClassementNumber2">
                                    0.00
                                </div>
                                <div class="columnClassement2">
                                    1er
                                </div>
                            </div>
                            <div class="flex-container-modal-Niveau">
                                <div class="columnClassementTexte">
                                    Nb d'actions "Event" réalisées
                                </div>
                                <div class="columnClassementNumber2">
                                    0.00
                                </div>
                                <div class="columnClassement2">
                                    1er
                                </div>
                            </div>
                            <div class="flex-container-modal-Niveau">
                                <div class="columnClassementTexte">
                                    Nb d'actions "Collectives" réalisées
                                </div>
                                <div class="columnClassementNumber2">
                                    0.00
                                </div>
                                <div class="columnClassement2">
                                    1er
                                </div>
                            </div>
                        </div>  
                    </div>
                    <!-- Modal footer -->
                    <div class="modal-footer">
                        <nuxt-link to="/user/teams">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Sortir d'ici !</button>
                        </nuxt-link>
                    </div>
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </div><!-- /#modalBox -->
        <!-- End Modal OtherTeamDetail -->                  
    </div><!-- /.container-fluid -->
</template>

<script>
    export default {
        layout: 'layoutFront',
    }
</script>

<style>

</style>
