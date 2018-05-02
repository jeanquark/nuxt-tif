<template>
    <div class="container-fluid">
        <!-- The Modal OtherTeamDetail -->
        <div id="modalBox">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <!-- Modal Header -->
                    <div class="modal-header">
                        <span class="modal-title">Statistiques "TIF" <span class="modal-title-Sub">(Tes équipes)</span></span>
                        <nuxt-link to="/userTeamDetails">
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
                            <div class="columnProfil"><span class="modal-Team-Activity">Coupe du Monde</br>Russie</br>Football - 2018</span></div>
                        </div>
                    </div>
                    <div class="flex-container-modalMenuResultats">
                        <nuxt-link to="/userTeamDetailsStatsTif" style="flex-grow: 1" data-toggle="tooltip" data-placement="bottom" title="Calendrier et résultats"><span class="textModalMenuResultats">Stats TIF</span></nuxt-link>
                        <nuxt-link to="/userTeamDetailsRankingTif" style="flex-grow: 1" data-toggle="tooltip" data-placement="bottom" title="Classement individuel TIF"><span class="textModalMenuResultats">Classements TIF</span></nuxt-link>
                        <nuxt-link to="/userTeamDetailsTrophyTif" style="flex-grow: 1" data-toggle="tooltip" data-placement="bottom" title="Classement individuel TIF"><span class="textModalMenuResultats">Trophées TIF</span></nuxt-link>
                    </div>
                    <div id="modalTitle" class="modal-body">
                        <div class="flex-container-modal-Title banner2 text-center">
                            <h2>Classement par équipe "TIF"</br> Coupe du Monde - Russie - 2018</br> <span class="modal-title-Sub">(classements provisoires)</span></h2>
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
                                <tr class="trResultat1">
                                    <td class="tdTif">6</td>
                                    <td class="tdTif"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Panama</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                </tr>
                                <tr class="trResultat1">
                                    <td class="tdTif">7</td>
                                    <td class="tdTif"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> France</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                </tr>
                                <tr class="trResultat1">
                                    <td class="tdTif">8</td>
                                    <td class="tdTif"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Suisse</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                </tr>
                                <tr class="trResultat1">
                                    <td class="tdTif">9</td>
                                    <td class="tdTif"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Belgique</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                </tr>
                                <tr class="trResultat1">
                                    <td class="tdTif">10</td>
                                    <td class="tdTif"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Russie</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                </tr>
                                <tr class="trResultat1">
                                    <td class="tdTif">11</td>
                                    <td class="tdTif"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Panama</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                </tr>
                                <tr class="trResultat1">
                                    <td class="tdTif">12</td>
                                    <td class="tdTif"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> France</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                </tr>
                                <tr class="trResultat1">
                                    <td class="tdTif">13</td>
                                    <td class="tdTif"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Suisse</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                </tr>
                                <tr class="trResultat1">
                                    <td class="tdTif">14</td>
                                    <td class="tdTif"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Belgique</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                </tr>
                                <tr class="trResultat1">
                                    <td class="tdTif">15</td>
                                    <td class="tdTif"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Russie</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                </tr>
                                <tr class="trResultat1">
                                    <td class="tdTif">16</td>
                                    <td class="tdTif"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Panama</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                </tr>
                                <tr class="trResultat1">
                                    <td class="tdTif">17</td>
                                    <td class="tdTif"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> France</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                </tr>
                                <tr class="trResultat1">
                                    <td class="tdTif">18</td>
                                    <td class="tdTif"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Suisse</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                </tr>
                                <tr class="trResultat1">
                                    <td class="tdTif">19</td>
                                    <td class="tdTif"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Belgique</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                </tr>
                                <tr class="trResultat1">
                                    <td class="tdTif">20</td>
                                    <td class="tdTif"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Russie</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                </tr>
                                <tr class="trResultat1">
                                    <td class="tdTif">21</td>
                                    <td class="tdTif"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Panama</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                </tr>
                                <tr class="trResultat1">
                                    <td class="tdTif">22</td>
                                    <td class="tdTif"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> France</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                </tr>
                                <tr class="trResultat1">
                                    <td class="tdTif">23</td>
                                    <td class="tdTif"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Suisse</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                </tr>
                                <tr class="trResultat1">
                                    <td class="tdTif">24</td>
                                    <td class="tdTif"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Belgique</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                </tr>
                                <tr class="trResultat1">
                                    <td class="tdTif">25</td>
                                    <td class="tdTif"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Russie</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                </tr>
                                <tr class="trResultat1">
                                    <td class="tdTif">26</td>
                                    <td class="tdTif"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Panama</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                </tr>
                                <tr class="trResultat1">
                                    <td class="tdTif">27</td>
                                    <td class="tdTif"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> France</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                </tr>
                                <tr class="trResultat1">
                                    <td class="tdTif">28</td>
                                    <td class="tdTif"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Suisse</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                </tr>
                                <tr class="trResultat1">
                                    <td class="tdTif">29</td>
                                    <td class="tdTif"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Belgique</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                </tr>
                                <tr class="trResultat1">
                                    <td class="tdTif">30</td>
                                    <td class="tdTif"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Russie</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                </tr>
                                <tr class="trResultat1">
                                    <td class="tdTif">31</td>
                                    <td class="tdTif"><img src="/images/flags/163.png" class="imgModalAgendaFlags"/> Belgique</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                </tr>
                                <tr class="trResultat1">
                                    <td class="tdTif">32</td>
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
                            <h2>Classement individuel "TIF"</br> Coupe du Monde - 2018 - International</br> <span class="modal-title-Sub">(classements provisoires)</span></h2>
                        </div>
                        <div class="flex-container-modal-Action">
                            <table class="table tableTextClassement">
                                <thead>
                                <tr>
                                    <th class="col1 thTif"></th>
                                    <th class="col2 thTif"></th>
                                    <th class="col4 thTif text-center" data-toggle="tooltip" data-placement="bottom" title="Matches joués durant la compétition">MJ</th>
                                    <th class="col4 thTif text-center" data-toggle="tooltip" data-placement="bottom" title="Total action collective réalisée par le fan">AColl</th>
                                    <th class="col4 thTif text-center" data-toggle="tooltip" data-placement="bottom" title="Total participation Event à la compétition">TPart.</th>
                                    <th class="col4 thTif text-center" data-toggle="tooltip" data-placement="bottom" title="Moyenne PF/match remporté par le fans durant la compétition">MPF</th>
                                    <th class="col4 thTif text-center" data-toggle="tooltip" data-placement="bottom" title="Total PF remporté par le fans durant la compétition">TPF</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr class="trResultat1">
                                    <td class="tdTif">1</td>
                                    <td class="tdTif"><img src="/images/avatar/avatar.png" class="imgModalAgendaFlags"/> Pseudo</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                </tr>
                                <tr class="trResultat1">
                                    <td class="tdTif">2</td>
                                    <td class="tdTif"><img src="/images/avatar/avatar.png" class="imgModalAgendaFlags"/> Pseudo</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                </tr>
                                <tr class="trResultat1">
                                    <td class="tdTif">3</td>
                                    <td class="tdTif"><img src="/images/avatar/avatar.png" class="imgModalAgendaFlags"/> Pseudo</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                </tr>
                                <tr class="trResultat1">
                                    <td class="tdTif">4</td>
                                    <td class="tdTif"><img src="/images/avatar/avatar.png" class="imgModalAgendaFlags"/> Pseudo</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                </tr>
                                <tr class="trResultat1">
                                    <td class="tdTif">5</td>
                                    <td class="tdTif"><img src="/images/avatar/avatar.png" class="imgModalAgendaFlags"/> Pseudo</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                </tr>
                                <tr class="trResultat1">
                                    <td class="tdTif">6</td>
                                    <td class="tdTif"><img src="/images/avatar/avatar.png" class="imgModalAgendaFlags"/> Pseudo</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                </tr>
                                <tr class="trResultat1">
                                    <td class="tdTif">7</td>
                                    <td class="tdTif"><img src="/images/avatar/avatar.png" class="imgModalAgendaFlags"/> Pseudo</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                </tr>
                                <tr class="trResultat1">
                                    <td class="tdTif">8</td>
                                    <td class="tdTif"><img src="/images/avatar/avatar.png" class="imgModalAgendaFlags"/> Pseudo</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                </tr>
                                <tr class="trResultat1">
                                    <td class="tdTif">9</td>
                                    <td class="tdTif"><img src="/images/avatar/avatar.png" class="imgModalAgendaFlags"/> Pseudo</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                </tr>
                                <tr class="trResultat1">
                                    <td class="tdTif">10</td>
                                    <td class="tdTif"><img src="/images/avatar/avatar.png" class="imgModalAgendaFlags"/> Pseudo</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                </tr>
                                <tr class="trResultat1">
                                    <td class="tdTif">11</td>
                                    <td class="tdTif"><img src="/images/avatar/avatar.png" class="imgModalAgendaFlags"/> Pseudo</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                </tr>
                                <tr class="trResultat1">
                                    <td class="tdTif">12</td>
                                    <td class="tdTif"><img src="/images/avatar/avatar.png" class="imgModalAgendaFlags"/> Pseudo</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                </tr>
                                <tr class="trResultat1">
                                    <td class="tdTif">13</td>
                                    <td class="tdTif"><img src="/images/avatar/avatar.png" class="imgModalAgendaFlags"/> Pseudo</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                </tr>
                                <tr class="trResultat1">
                                    <td class="tdTif">14</td>
                                    <td class="tdTif"><img src="/images/avatar/avatar.png" class="imgModalAgendaFlags"/> Pseudo</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                    <td class="tdTif text-center">0</td>
                                </tr>
                                <tr class="trResultat1">
                                    <td class="tdTif">15</td>
                                    <td class="tdTif"><img src="/images/avatar/avatar.png" class="imgModalAgendaFlags"/> Pseudo</td>
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
