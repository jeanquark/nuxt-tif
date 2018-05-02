<template>
    <div class="container-fluid">
        <!-- The Modal OtherTeamDetail -->
        <div id="modalBox">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <!-- Modal Header -->
                    <div class="modal-header">
                        <span class="modal-title">Résultats et classements <span class="modal-title-Sub">(Tes équipes)</span></span>
                        <nuxt-link to="/user/teams/userTeamDetails">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" class="white-text"><i class="fa fa-arrow-circle-left"></i></span>
                            </button>
                        </nuxt-link>                   
                    </div>
                    <!-- Modal body -->
                    <div id="modalBoxContent" class="modal-bodyProfil text-center">
                        <div class="flex-container-modalProfil">
                            <div class="columnProfil"><img src="/images/flags/163.png" class="imgModalFlags"/> <span class="modal-Team-Title">Equipe de Suisse</span> <img src="//images/flags/163.png" class="imgModalFlags"/></div>
                        </div>
                        <div class="flex-container-modal-Niveau text-center">
                            <div class="columnProfil"><span class="modal-Team-Activity">Coupe du Monde</br>Football - 2018</br>International</span></div>
                        </div>
                    </div>
                    <div class="flex-container-modalMenuResultats">
                        <a href="/userTeamDetailsResults" style="flex-grow: 1" data-toggle="tooltip" data-placement="bottom" title="Calendrier et résultats de la phase de poule"><span class="textModalMenuResultats">Phase de poule</span></a>
                        <a href="/userTeamDetailsResults2" style="flex-grow: 1" data-toggle="tooltip" data-placement="bottom" title="Classement de la phase de poule"><span class="textModalMenuResultats">Classements</span></a>
                        <a href="/userTeamDetailsResults3" style="flex-grow: 1" data-toggle="tooltip" data-placement="bottom" title="Calendrier et résultats de la phase finale"><span class="textModalMenuResultats">Phase finale</span></a>
                    </div>
                    <div id="modalTitle" class="modal-body">
                        <div class="flex-container-modal-Title banner text-center">
                            <h2>Huitième de finales</h2>
                        </div>
                        <div class="flex-container-modal-Action">
                            <table class="table tableText">
                                <tbody>
                                <tr class="borderResultat">
                                    <td class="tdResultat2 text-left"><a href="/otherTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</a></td>
                                    <td class="tdResultat text-center"><a href="/matchAgenda" class="linkEvent">17.06.2018</br>20:00</br>Agenda</a></td>
                                    <td class="tdResultat2 text-right"><a href="/userTeamDetails" class="linkEvent">Suisse <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></a></td>
                                </tr>
                                <tr class="borderResultat">
                                    <td class="tdResultat2 text-left"><a href="/otherTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</a></td>
                                    <td class="tdResultat text-center"><a href="/matchAgenda" class="linkEvent">17.06.2018</br>20:00</br>Agenda</a></td>
                                    <td class="tdResultat2 text-right"><a href="/userTeamDetails" class="linkEvent">Suisse <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></a></td>
                                </tr>
                                <tr class="borderResultat">
                                    <td class="tdResultat2 text-left"><a href="/otherTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</a></td>
                                    <td class="tdResultat text-center"><a href="/matchAgenda" class="linkEvent">17.06.2018</br>20:00</br>Agenda</a></td>
                                    <td class="tdResultat2 text-right"><a href="/userTeamDetails" class="linkEvent">Suisse <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></a></td>
                                </tr>
                                <tr class="borderResultat">
                                    <td class="tdResultat2 text-left"><a href="/otherTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</a></td>
                                    <td class="tdResultat text-center"><a href="/matchAgenda" class="linkEvent">17.06.2018</br>20:00</br>Agenda</a></td>
                                    <td class="tdResultat2 text-right"><a href="/userTeamDetails" class="linkEvent">Suisse <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></a></td>
                                </tr>
                                <tr class="borderResultat">
                                    <td class="tdResultat2 text-left"><a href="/otherTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</a></td>
                                    <td class="tdResultat text-center"><a href="/matchAgenda" class="linkEvent">17.06.2018</br>20:00</br>Agenda</a></td>
                                    <td class="tdResultat2 text-right"><a href="/userTeamDetails" class="linkEvent">Suisse <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></a></td>
                                </tr>
                                <tr class="borderResultat">
                                    <td class="tdResultat2 text-left"><a href="/otherTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Serbie</a></td>
                                    <td class="tdResultat text-center"><a href="/matchAgenda" class="linkEvent">22.06.2018</br>20:00</br>Agenda</a></td>
                                    <td class="tdResultat2 text-right"><a href="/userTeamDetails" class="linkEvent">Suisse <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></a></td>
                                </tr>
                                <tr class="borderResultat">
                                    <td class="tdResultat2 text-left"><a href="/otherTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</a></td>
                                    <td class="tdResultat text-center"><a href="/matchAgenda" class="linkEvent">17.06.2018</br>20:00</br>Agenda</a></td>
                                    <td class="tdResultat2 text-right"><a href="/userTeamDetails" class="linkEvent">Suisse <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></a></td>
                                </tr>
                                <tr class="borderResultat">
                                    <td class="tdResultat2 text-left"><a href="/otherTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Serbie</a></td>
                                    <td class="tdResultat text-center"><a href="/matchAgenda" class="linkEvent">22.06.2018</br>20:00</br>Agenda</a></td>
                                    <td class="tdResultat2 text-right"><a href="/userTeamDetails" class="linkEvent">Suisse <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></a></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div id="modalTitle" class="modal-body">
                        <div class="flex-container-modal-Title banner text-center">
                            <h2>Quarts de finals</h2>
                        </div>
                        <div class="flex-container-modal-Action">
                            <table class="table tableText">
                                <tbody>
                                <tr class="borderResultat">
                                    <td class="tdResultat2 text-left"><a href="/otherTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</a></td>
                                    <td class="tdResultat text-center"><a href="/matchAgenda" class="linkEvent">17.06.2018</br>20:00</br>Agenda</a></td>
                                    <td class="tdResultat2 text-right"><a href="/userTeamDetails" class="linkEvent">Suisse <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></a></td>
                                </tr>
                                <tr class="borderResultat">
                                    <td class="tdResultat2 text-left"><a href="/otherTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</a></td>
                                    <td class="tdResultat text-center"><a href="/matchAgenda" class="linkEvent">17.06.2018</br>20:00</br>Agenda</a></td>
                                    <td class="tdResultat2 text-right"><a href="/userTeamDetails" class="linkEvent">Suisse <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></a></td>
                                </tr>
                                <tr class="borderResultat">
                                    <td class="tdResultat2 text-left"><a href="/otherTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</a></td>
                                    <td class="tdResultat text-center"><a href="/matchAgenda" class="linkEvent">17.06.2018</br>20:00</br>Agenda</a></td>
                                    <td class="tdResultat2 text-right"><a href="/userTeamDetails" class="linkEvent">Suisse <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></a></td>
                                </tr>
                                <tr class="borderResultat">
                                    <td class="tdResultat2 text-left"><a href="/otherTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</a></td>
                                    <td class="tdResultat text-center"><a href="/matchAgenda" class="linkEvent">17.06.2018</br>20:00</br>Agenda</a></td>
                                    <td class="tdResultat2 text-right"><a href="/userTeamDetails" class="linkEvent">Suisse <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></a></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div id="modalTitle" class="modal-body">
                        <div class="flex-container-modal-Title banner text-center">
                            <h2>Demis-finals</h2>
                        </div>
                        <div class="flex-container-modal-Action">
                            <table class="table tableText">
                                <tbody>
                                <tr class="borderResultat">
                                    <td class="tdResultat2 text-left"><a href="/otherTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</a></td>
                                    <td class="tdResultat text-center"><a href="/matchAgenda" class="linkEvent">17.06.2018</br>20:00</br>Agenda</a></td>
                                    <td class="tdResultat2 text-right"><a href="/userTeamDetails" class="linkEvent">Suisse <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></a></td>
                                </tr>
                                <tr class="borderResultat">
                                    <td class="tdResultat2 text-left"><a href="/otherTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</a></td>
                                    <td class="tdResultat text-center"><a href="/matchAgenda" class="linkEvent">17.06.2018</br>20:00</br>Agenda</a></td>
                                    <td class="tdResultat2 text-right"><a href="/userTeamDetails" class="linkEvent">Suisse <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></a></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div id="modalTitle" class="modal-body">
                        <div class="flex-container-modal-Title banner text-center">
                            <h2>Finale 3ème/4ème places</h2>
                        </div>
                        <div class="flex-container-modal-Action">
                            <table class="table tableText">
                                <tbody>
                                <tr class="borderResultat">
                                    <td class="tdResultat2 text-left"><a href="/otherTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</a></td>
                                    <td class="tdResultat text-center"><a href="/matchAgenda" class="linkEvent">17.06.2018</br>20:00</br>Agenda</a></td>
                                    <td class="tdResultat2 text-right"><a href="/userTeamDetails" class="linkEvent">Suisse <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></a></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div id="modalTitle" class="modal-body">
                        <div class="flex-container-modal-Title banner text-center">
                            <h2>Finale</h2>
                        </div>
                        <div class="flex-container-modal-Action">
                            <table class="table tableText">
                                <tbody>
                                <tr class="borderResultat">
                                    <td class="tdResultat2 text-left"><a href="/otherTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</a></td>
                                    <td class="tdResultat text-center"><a href="/matchAgenda" class="linkEvent">17.06.2018</br>20:00</br>Agenda</a></td>
                                    <td class="tdResultat2 text-right"><a href="/userTeamDetails" class="linkEvent">Suisse <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></a></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- Modal footer -->
                    <div class="modal-footer">
                        <nuxt-link to="/user/teams/userTeamDetails">
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
