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
                            <div class="columnProfil"><span class="modal-Team-Activity">Coupe du Monde</br>Russie</br>Football - 2018</span></div>
                        </div>
                    </div>
                    <div class="flex-container-modalMenuResultats">
                        <nuxt-link to="/userTeamDetailsResults" style="flex-grow: 1" data-toggle="tooltip" data-placement="bottom" title="Calendrier et résultats de la phase de poule"><span class="textModalMenuResultats">Phase de poule</span></nuxt-link>
                        <nuxt-link to="/userTeamDetailsResults2" style="flex-grow: 1" data-toggle="tooltip" data-placement="bottom" title="Classement de la phase de poule"><span class="textModalMenuResultats">Classements</span></nuxt-link>
                        <nuxt-link to="/userTeamDetailsResults3" style="flex-grow: 1" data-toggle="tooltip" data-placement="bottom" title="Calendrier et résultats de la phase finale"><span class="textModalMenuResultats">Phase finale</span></nuxt-link>
                    </div>
                    <div id="modalTitle" class="modal-body">
                        <div class="flex-container-modal-Title banner2 text-center">
                            <h2>Groupe A</h2>
                        </div>
                        <div class="flex-container-modal-Action">
                            <table class="table tableText">
                                <tbody>
                                <tr class="borderResultat">
                                    <td class="tdResultat2 text-left"><nuxt-link to="/otherTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</nuxt-link></td>
                                    <td class="tdResultat text-center"><nuxt-link to="/matchAgenda" class="linkEvent">17.06.2018</br>20:00</br>Agenda</nuxt-link></td>
                                    <td class="tdResultat2 text-right"><nuxt-link to="/userTeamDetails" class="linkEvent">Suisse <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></nuxt-link></td>
                                </tr>
                                <tr class="borderResultat">
                                    <td class="tdResultat2 text-left"><nuxt-link to="/otherTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</nuxt-link></td>
                                    <td class="tdResultat text-center"><nuxt-link to="/matchAgenda" class="linkEvent">17.06.2018</br>20:00</br>Agenda</nuxt-link></td>
                                    <td class="tdResultat2 text-right"><nuxt-link to="/userTeamDetails" class="linkEvent">Suisse <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></nuxt-link></td>
                                </tr>
                                <tr class="borderResultat">
                                    <td class="tdResultat2 text-left"><nuxt-link to="/otherTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</nuxt-link></td>
                                    <td class="tdResultat text-center"><nuxt-link to="/matchAgenda" class="linkEvent">17.06.2018</br>20:00</br>Agenda</nuxt-link></td>
                                    <td class="tdResultat2 text-right"><nuxt-link to="/userTeamDetails" class="linkEvent">Suisse <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></nuxt-link></td>
                                </tr>
                                <tr class="borderResultat">
                                    <td class="tdResultat2 text-left"><nuxt-link to="/otherTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</nuxt-link></td>
                                    <td class="tdResultat text-center"><nuxt-link to="/matchAgenda" class="linkEvent">17.06.2018</br>20:00</br>Agenda</nuxt-link></td>
                                    <td class="tdResultat2 text-right"><nuxt-link to="/userTeamDetails" class="linkEvent">Suisse <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></nuxt-link></td>
                                </tr>
                                <tr class="borderResultat">
                                    <td class="tdResultat2 text-left"><nuxt-link to="/otherTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</nuxt-link></td>
                                    <td class="tdResultat text-center"><nuxt-link to="/matchAgenda" class="linkEvent">17.06.2018</br>20:00</br>Agenda</nuxt-link></td>
                                    <td class="tdResultat2 text-right"><nuxt-link to="/userTeamDetails" class="linkEvent">Suisse <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></nuxt-link></td>
                                </tr>
                                <tr class="borderResultat">
                                    <td class="tdResultat2 text-left"><nuxt-link to="/otherTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Serbie</nuxt-link></td>
                                    <td class="tdResultat text-center"><nuxt-link to="/matchAgenda" class="linkEvent">22.06.2018</br>20:00</br>Agenda</nuxt-link></td>
                                    <td class="tdResultat2 text-right"><nuxt-link to="/userTeamDetails" class="linkEvent">Suisse <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></nuxt-link></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div id="modalTitle" class="modal-body">
                        <div class="flex-container-modal-Title banner text-center">
                            <h2>Groupe B</h2>
                        </div>
                        <div class="flex-container-modal-Action">
                            <table class="table tableText">
                                <tbody>
                                <tr class="borderResultat">
                                    <td class="tdResultat2 text-left"><nuxt-link to="/otherTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</nuxt-link></td>
                                    <td class="tdResultat text-center"><nuxt-link to="/matchAgenda" class="linkEvent">17.06.2018</br>20:00</br>Agenda</nuxt-link></td>
                                    <td class="tdResultat2 text-right"><nuxt-link to="/userTeamDetails" class="linkEvent">Suisse <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></nuxt-link></td>
                                </tr>
                                <tr class="borderResultat">
                                    <td class="tdResultat2 text-left"><nuxt-link to="/otherTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</nuxt-link></td>
                                    <td class="tdResultat text-center"><nuxt-link to="/matchAgenda" class="linkEvent">17.06.2018</br>20:00</br>Agenda</nuxt-link></td>
                                    <td class="tdResultat2 text-right"><nuxt-link to="/userTeamDetails" class="linkEvent">Suisse <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></nuxt-link></td>
                                </tr>
                                <tr class="borderResultat">
                                    <td class="tdResultat2 text-left"><nuxt-link to="/otherTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</nuxt-link></td>
                                    <td class="tdResultat text-center"><nuxt-link to="/matchAgenda" class="linkEvent">17.06.2018</br>20:00</br>Agenda</nuxt-link></td>
                                    <td class="tdResultat2 text-right"><nuxt-link to="/userTeamDetails" class="linkEvent">Suisse <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></nuxt-link></td>
                                </tr>
                                <tr class="borderResultat">
                                    <td class="tdResultat2 text-left"><nuxt-link to="/otherTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</nuxt-link></td>
                                    <td class="tdResultat text-center"><nuxt-link to="/matchAgenda" class="linkEvent">17.06.2018</br>20:00</br>Agenda</nuxt-link></td>
                                    <td class="tdResultat2 text-right"><nuxt-link to="/userTeamDetails" class="linkEvent">Suisse <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></nuxt-link></td>
                                </tr>
                                <tr class="borderResultat">
                                    <td class="tdResultat2 text-left"><nuxt-link to="/otherTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</nuxt-link></td>
                                    <td class="tdResultat text-center"><nuxt-link to="/matchAgenda" class="linkEvent">17.06.2018</br>20:00</br>Agenda</nuxt-link></td>
                                    <td class="tdResultat2 text-right"><nuxt-link to="/userTeamDetails" class="linkEvent">Suisse <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></nuxt-link></td>
                                </tr>
                                <tr class="borderResultat">
                                    <td class="tdResultat2 text-left"><nuxt-link to="/otherTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Serbie</nuxt-link></td>
                                    <td class="tdResultat text-center"><nuxt-link to="/matchAgenda" class="linkEvent">22.06.2018</br>20:00</br>Agenda</nuxt-link></td>
                                    <td class="tdResultat2 text-right"><nuxt-link to="/userTeamDetails" class="linkEvent">Suisse <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></nuxt-link></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div id="modalTitle" class="modal-body">
                        <div class="flex-container-modal-Title banner text-center">
                            <h2>Groupe C</h2>
                        </div>
                        <div class="flex-container-modal-Action">
                            <table class="table tableText">
                                <tbody>
                                <tr class="borderResultat">
                                    <td class="tdResultat2 text-left"><nuxt-link to="/otherTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</nuxt-link></td>
                                    <td class="tdResultat text-center"><nuxt-link to="/matchAgenda" class="linkEvent">17.06.2018</br>20:00</br>Agenda</nuxt-link></td>
                                    <td class="tdResultat2 text-right"><nuxt-link to="/userTeamDetails" class="linkEvent">Suisse <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></nuxt-link></td>
                                </tr>
                                <tr class="borderResultat">
                                    <td class="tdResultat2 text-left"><nuxt-link to="/otherTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</nuxt-link></td>
                                    <td class="tdResultat text-center"><nuxt-link to="/matchAgenda" class="linkEvent">17.06.2018</br>20:00</br>Agenda</nuxt-link></td>
                                    <td class="tdResultat2 text-right"><nuxt-link to="/userTeamDetails" class="linkEvent">Suisse <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></nuxt-link></td>
                                </tr>
                                <tr class="borderResultat">
                                    <td class="tdResultat2 text-left"><nuxt-link to="/otherTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</nuxt-link></td>
                                    <td class="tdResultat text-center"><nuxt-link to="/matchAgenda" class="linkEvent">17.06.2018</br>20:00</br>Agenda</nuxt-link></td>
                                    <td class="tdResultat2 text-right"><nuxt-link to="/userTeamDetails" class="linkEvent">Suisse <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></nuxt-link></td>
                                </tr>
                                <tr class="borderResultat">
                                    <td class="tdResultat2 text-left"><nuxt-link to="/otherTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</nuxt-link></td>
                                    <td class="tdResultat text-center"><nuxt-link to="/matchAgenda" class="linkEvent">17.06.2018</br>20:00</br>Agenda</nuxt-link></td>
                                    <td class="tdResultat2 text-right"><nuxt-link to="/userTeamDetails" class="linkEvent">Suisse <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></nuxt-link></td>
                                </tr>
                                <tr class="borderResultat">
                                    <td class="tdResultat2 text-left"><nuxt-link to="/otherTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</nuxt-link></td>
                                    <td class="tdResultat text-center"><nuxt-link to="/matchAgenda" class="linkEvent">17.06.2018</br>20:00</br>Agenda</nuxt-link></td>
                                    <td class="tdResultat2 text-right"><nuxt-link to="/userTeamDetails" class="linkEvent">Suisse <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></nuxt-link></td>
                                </tr>
                                <tr class="borderResultat">
                                    <td class="tdResultat2 text-left"><nuxt-link to="/otherTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Serbie</nuxt-link></td>
                                    <td class="tdResultat text-center"><nuxt-link to="/matchAgenda" class="linkEvent">22.06.2018</br>20:00</br>Agenda</nuxt-link></td>
                                    <td class="tdResultat2 text-right"><nuxt-link to="/userTeamDetails" class="linkEvent">Suisse <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></nuxt-link></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div id="modalTitle" class="modal-body">
                        <div class="flex-container-modal-Title banner text-center">
                            <h2>Groupe D</h2>
                        </div>
                        <div class="flex-container-modal-Action">
                            <table class="table tableText">
                                <tbody>
                                <tr class="borderResultat">
                                    <td class="tdResultat2 text-left"><nuxt-link to="/otherTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</nuxt-link></td>
                                    <td class="tdResultat text-center"><nuxt-link to="/matchAgenda" class="linkEvent">17.06.2018</br>20:00</br>Agenda</nuxt-link></td>
                                    <td class="tdResultat2 text-right"><nuxt-link to="/userTeamDetails" class="linkEvent">Suisse <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></nuxt-link></td>
                                </tr>
                                <tr class="borderResultat">
                                    <td class="tdResultat2 text-left"><nuxt-link to="/otherTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</nuxt-link></td>
                                    <td class="tdResultat text-center"><nuxt-link to="/matchAgenda" class="linkEvent">17.06.2018</br>20:00</br>Agenda</nuxt-link></td>
                                    <td class="tdResultat2 text-right"><nuxt-link to="/userTeamDetails" class="linkEvent">Suisse <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></nuxt-link></td>
                                </tr>
                                <tr class="borderResultat">
                                    <td class="tdResultat2 text-left"><nuxt-link to="/otherTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</nuxt-link></td>
                                    <td class="tdResultat text-center"><nuxt-link to="/matchAgenda" class="linkEvent">17.06.2018</br>20:00</br>Agenda</nuxt-link></td>
                                    <td class="tdResultat2 text-right"><nuxt-link to="/userTeamDetails" class="linkEvent">Suisse <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></nuxt-link></td>
                                </tr>
                                <tr class="borderResultat">
                                    <td class="tdResultat2 text-left"><nuxt-link to="/otherTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</nuxt-link></td>
                                    <td class="tdResultat text-center"><nuxt-link to="/matchAgenda" class="linkEvent">17.06.2018</br>20:00</br>Agenda</nuxt-link></td>
                                    <td class="tdResultat2 text-right"><nuxt-link to="/userTeamDetails" class="linkEvent">Suisse <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></nuxt-link></td>
                                </tr>
                                <tr class="borderResultat">
                                    <td class="tdResultat2 text-left"><nuxt-link to="/otherTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</nuxt-link></td>
                                    <td class="tdResultat text-center"><nuxt-link to="/matchAgenda" class="linkEvent">17.06.2018</br>20:00</br>Agenda</nuxt-link></td>
                                    <td class="tdResultat2 text-right"><nuxt-link to="/userTeamDetails" class="linkEvent">Suisse <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></nuxt-link></td>
                                </tr>
                                <tr class="borderResultat">
                                    <td class="tdResultat2 text-left"><nuxt-link to="/otherTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Serbie</nuxt-link></td>
                                    <td class="tdResultat text-center"><nuxt-link to="/matchAgenda" class="linkEvent">22.06.2018</br>20:00</br>Agenda</nuxt-link></td>
                                    <td class="tdResultat2 text-right"><nuxt-link to="/userTeamDetails" class="linkEvent">Suisse <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></nuxt-link></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div id="modalTitle" class="modal-body">
                        <div class="flex-container-modal-Title banner text-center">
                            <h2>Groupe E</h2>
                        </div>
                        <div class="flex-container-modal-Action">
                            <table class="table tableText">
                                <tbody>
                                <tr class="borderResultat">
                                    <td class="tdResultat2 text-left"><nuxt-link to="/otherTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</nuxt-link></td>
                                    <td class="tdResultat text-center"><nuxt-link to="/matchAgenda" class="linkEvent">17.06.2018</br>20:00</br>Agenda</nuxt-link></td>
                                    <td class="tdResultat2 text-right"><nuxt-link to="/userTeamDetails" class="linkEvent">Suisse <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></nuxt-link></td>
                                </tr>
                                <tr class="borderResultat">
                                    <td class="tdResultat2 text-left"><nuxt-link to="/otherTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</nuxt-link></td>
                                    <td class="tdResultat text-center"><nuxt-link to="/matchAgenda" class="linkEvent">17.06.2018</br>20:00</br>Agenda</nuxt-link></td>
                                    <td class="tdResultat2 text-right"><nuxt-link to="/userTeamDetails" class="linkEvent">Suisse <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></nuxt-link></td>
                                </tr>
                                <tr class="borderResultat">
                                    <td class="tdResultat2 text-left"><nuxt-link to="/otherTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</nuxt-link></td>
                                    <td class="tdResultat text-center"><nuxt-link to="/matchAgenda" class="linkEvent">17.06.2018</br>20:00</br>Agenda</nuxt-link></td>
                                    <td class="tdResultat2 text-right"><nuxt-link to="/userTeamDetails" class="linkEvent">Suisse <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></nuxt-link></td>
                                </tr>
                                <tr class="borderResultat">
                                    <td class="tdResultat2 text-left"><nuxt-link to="/otherTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</nuxt-link></td>
                                    <td class="tdResultat text-center"><nuxt-link to="/matchAgenda" class="linkEvent">17.06.2018</br>20:00</br>Agenda</nuxt-link></td>
                                    <td class="tdResultat2 text-right"><nuxt-link to="/userTeamDetails" class="linkEvent">Suisse <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></nuxt-link></td>
                                </tr>
                                <tr class="borderResultat">
                                    <td class="tdResultat2 text-left"><nuxt-link to="/otherTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</nuxt-link></td>
                                    <td class="tdResultat text-center"><nuxt-link to="/matchAgenda" class="linkEvent">17.06.2018</br>20:00</br>Agenda</nuxt-link></td>
                                    <td class="tdResultat2 text-right"><nuxt-link to="/userTeamDetails" class="linkEvent">Suisse <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></nuxt-link></td>
                                </tr>
                                <tr class="borderResultat">
                                    <td class="tdResultat2 text-left"><nuxt-link to="/otherTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Serbie</nuxt-link></td>
                                    <td class="tdResultat text-center"><nuxt-link to="/matchAgenda" class="linkEvent">22.06.2018</br>20:00</br>Agenda</nuxt-link></td>
                                    <td class="tdResultat2 text-right"><nuxt-link to="/userTeamDetails" class="linkEvent">Suisse <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></nuxt-link></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div id="modalTitle" class="modal-body">
                        <div class="flex-container-modal-Title banner text-center">
                            <h2>Groupe F</h2>
                        </div>
                        <div class="flex-container-modal-Action">
                            <table class="table tableText">
                                <tbody>
                                <tr class="borderResultat">
                                    <td class="tdResultat2 text-left"><nuxt-link to="/otherTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</nuxt-link></td>
                                    <td class="tdResultat text-center"><nuxt-link to="/matchAgenda" class="linkEvent">17.06.2018</br>20:00</br>Agenda</nuxt-link></td>
                                    <td class="tdResultat2 text-right"><nuxt-link to="/userTeamDetails" class="linkEvent">Suisse <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></nuxt-link></td>
                                </tr>
                                <tr class="borderResultat">
                                    <td class="tdResultat2 text-left"><nuxt-link to="/otherTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</nuxt-link></td>
                                    <td class="tdResultat text-center"><nuxt-link to="/matchAgenda" class="linkEvent">17.06.2018</br>20:00</br>Agenda</nuxt-link></td>
                                    <td class="tdResultat2 text-right"><nuxt-link to="/userTeamDetails" class="linkEvent">Suisse <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></nuxt-link></td>
                                </tr>
                                <tr class="borderResultat">
                                    <td class="tdResultat2 text-left"><nuxt-link to="/otherTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</nuxt-link></td>
                                    <td class="tdResultat text-center"><nuxt-link to="/matchAgenda" class="linkEvent">17.06.2018</br>20:00</br>Agenda</nuxt-link></td>
                                    <td class="tdResultat2 text-right"><nuxt-link to="/userTeamDetails" class="linkEvent">Suisse <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></nuxt-link></td>
                                </tr>
                                <tr class="borderResultat">
                                    <td class="tdResultat2 text-left"><nuxt-link to="/otherTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</nuxt-link></td>
                                    <td class="tdResultat text-center"><nuxt-link to="/matchAgenda" class="linkEvent">17.06.2018</br>20:00</br>Agenda</nuxt-link></td>
                                    <td class="tdResultat2 text-right"><nuxt-link to="/userTeamDetails" class="linkEvent">Suisse <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></nuxt-link></td>
                                </tr>
                                <tr class="borderResultat">
                                    <td class="tdResultat2 text-left"><nuxt-link to="/otherTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</nuxt-link></td>
                                    <td class="tdResultat text-center"><nuxt-link to="/matchAgenda" class="linkEvent">17.06.2018</br>20:00</br>Agenda</nuxt-link></td>
                                    <td class="tdResultat2 text-right"><nuxt-link to="/userTeamDetails" class="linkEvent">Suisse <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></nuxt-link></td>
                                </tr>
                                <tr class="borderResultat">
                                    <td class="tdResultat2 text-left"><nuxt-link to="/otherTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Serbie</nuxt-link></td>
                                    <td class="tdResultat text-center"><nuxt-link to="/matchAgenda" class="linkEvent">22.06.2018</br>20:00</br>Agenda</nuxt-link></td>
                                    <td class="tdResultat2 text-right"><nuxt-link to="/userTeamDetails" class="linkEvent">Suisse <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></nuxt-link></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div id="modalTitle" class="modal-body">
                        <div class="flex-container-modal-Title banner text-center">
                            <h2>Groupe G</h2>
                        </div>
                        <div class="flex-container-modal-Action">
                            <table class="table tableText">
                                <tbody>
                                <tr class="borderResultat">
                                    <td class="tdResultat2 text-left"><nuxt-link to="/otherTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</nuxt-link></td>
                                    <td class="tdResultat text-center"><nuxt-link to="/matchAgenda" class="linkEvent">17.06.2018</br>20:00</br>Agenda</nuxt-link></td>
                                    <td class="tdResultat2 text-right"><nuxt-link to="/userTeamDetails" class="linkEvent">Suisse <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></nuxt-link></td>
                                </tr>
                                <tr class="borderResultat">
                                    <td class="tdResultat2 text-left"><nuxt-link to="/otherTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</nuxt-link></td>
                                    <td class="tdResultat text-center"><nuxt-link to="/matchAgenda" class="linkEvent">17.06.2018</br>20:00</br>Agenda</nuxt-link></td>
                                    <td class="tdResultat2 text-right"><nuxt-link to="/userTeamDetails" class="linkEvent">Suisse <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></nuxt-link></td>
                                </tr>
                                <tr class="borderResultat">
                                    <td class="tdResultat2 text-left"><nuxt-link to="/otherTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</nuxt-link></td>
                                    <td class="tdResultat text-center"><nuxt-link to="/matchAgenda" class="linkEvent">17.06.2018</br>20:00</br>Agenda</nuxt-link></td>
                                    <td class="tdResultat2 text-right"><nuxt-link to="/userTeamDetails" class="linkEvent">Suisse <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></nuxt-link></td>
                                </tr>
                                <tr class="borderResultat">
                                    <td class="tdResultat2 text-left"><nuxt-link to="/otherTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</nuxt-link></td>
                                    <td class="tdResultat text-center"><nuxt-link to="/matchAgenda" class="linkEvent">17.06.2018</br>20:00</br>Agenda</nuxt-link></td>
                                    <td class="tdResultat2 text-right"><nuxt-link to="/userTeamDetails" class="linkEvent">Suisse <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></nuxt-link></td>
                                </tr>
                                <tr class="borderResultat">
                                    <td class="tdResultat2 text-left"><nuxt-link to="/otherTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</nuxt-link></td>
                                    <td class="tdResultat text-center"><nuxt-link to="/matchAgenda" class="linkEvent">17.06.2018</br>20:00</br>Agenda</nuxt-link></td>
                                    <td class="tdResultat2 text-right"><nuxt-link to="/userTeamDetails" class="linkEvent">Suisse <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></nuxt-link></td>
                                </tr>
                                <tr class="borderResultat">
                                    <td class="tdResultat2 text-left"><nuxt-link to="/otherTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Serbie</nuxt-link></td>
                                    <td class="tdResultat text-center"><nuxt-link to="/matchAgenda" class="linkEvent">22.06.2018</br>20:00</br>Agenda</nuxt-link></td>
                                    <td class="tdResultat2 text-right"><nuxt-link to="/userTeamDetails" class="linkEvent">Suisse <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></nuxt-link></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div id="modalTitle" class="modal-body">
                        <div class="flex-container-modal-Title banner text-center">
                            <h2>Groupe H</h2>
                        </div>
                        <div class="flex-container-modal-Action">
                            <table class="table tableText">
                                <tbody>
                                <tr class="borderResultat">
                                    <td class="tdResultat2 text-left"><nuxt-link to="/otherTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</nuxt-link></td>
                                    <td class="tdResultat text-center"><nuxt-link to="/matchAgenda" class="linkEvent">17.06.2018</br>20:00</br>Agenda</nuxt-link></td>
                                    <td class="tdResultat2 text-right"><nuxt-link to="/userTeamDetails" class="linkEvent">Suisse <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></nuxt-link></td>
                                </tr>
                                <tr class="borderResultat">
                                    <td class="tdResultat2 text-left"><nuxt-link to="/otherTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</nuxt-link></td>
                                    <td class="tdResultat text-center"><nuxt-link to="/matchAgenda" class="linkEvent">17.06.2018</br>20:00</br>Agenda</nuxt-link></td>
                                    <td class="tdResultat2 text-right"><nuxt-link to="/userTeamDetails" class="linkEvent">Suisse <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></nuxt-link></td>
                                </tr>
                                <tr class="borderResultat">
                                    <td class="tdResultat2 text-left"><nuxt-link to="/otherTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</nuxt-link></td>
                                    <td class="tdResultat text-center"><nuxt-link to="/matchAgenda" class="linkEvent">17.06.2018</br>20:00</br>Agenda</nuxt-link></td>
                                    <td class="tdResultat2 text-right"><nuxt-link to="/userTeamDetails" class="linkEvent">Suisse <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></nuxt-link></td>
                                </tr>
                                <tr class="borderResultat">
                                    <td class="tdResultat2 text-left"><nuxt-link to="/otherTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</nuxt-link></td>
                                    <td class="tdResultat text-center"><nuxt-link to="/matchAgenda" class="linkEvent">17.06.2018</br>20:00</br>Agenda</nuxt-link></td>
                                    <td class="tdResultat2 text-right"><nuxt-link to="/userTeamDetails" class="linkEvent">Suisse <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></nuxt-link></td>
                                </tr>
                                <tr class="borderResultat">
                                    <td class="tdResultat2 text-left"><nuxt-link to="/otherTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</nuxt-link></td>
                                    <td class="tdResultat text-center"><nuxt-link to="/matchAgenda" class="linkEvent">17.06.2018</br>20:00</br>Agenda</nuxt-link></td>
                                    <td class="tdResultat2 text-right"><nuxt-link to="/userTeamDetails" class="linkEvent">Suisse <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></nuxt-link></td>
                                </tr>
                                <tr class="borderResultat">
                                    <td class="tdResultat2 text-left"><nuxt-link to="/otherTeamDetails" class="linkEvent"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Serbie</nuxt-link></td>
                                    <td class="tdResultat text-center"><nuxt-link to="/matchAgenda" class="linkEvent">22.06.2018</br>20:00</br>Agenda</nuxt-link></td>
                                    <td class="tdResultat2 text-right"><nuxt-link to="/userTeamDetails" class="linkEvent">Suisse <img src="/images/flags/163.png" class="imgModalAgendaFlags"/></nuxt-link></td>
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
