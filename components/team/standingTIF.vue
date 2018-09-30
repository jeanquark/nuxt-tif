<template>
	<!-- <div class="panel"> Modif JM -->
	<div>
		<div class="flex-container-modal-Action">
			<h6 class="tdTitleClassementCompet">Titre de la compétition en cours</h6>
			<table class="table tableTextClassement">
			  <thead>
				<tr>
				  <th class="col1 thTif"></th>
				  <th class="col5 thTif"></th>
				  <th class="col4 thTif text-center" data-toggle="tooltip" data-placement="bottom" title="Matches joués durant la compétition">MJ</th>
				  <th class="col4 thTif text-center" data-toggle="tooltip" data-placement="bottom" title="Moyenne fan/match ayant participé à la compétition">MFans</th>
				  <th class="col4 thTif text-center" data-toggle="tooltip" data-placement="bottom" title="Total fan ayant participé à la compétition">TFans</th>
				  <th class="col4 thTif text-center" data-toggle="tooltip" data-placement="bottom" title="Moyenne PF/match remporté par les fans durant la compétition">MPF</th>
				  <th class="col4 thTif text-center" data-toggle="tooltip" data-placement="bottom" title="Total PF remporté par les fans durant la compétition">TPF</th>
				</tr>
			  </thead>
			  <tbody>
				<tr class="trResultat1">
				  <td class="tdTif1 text-center">1</td>
				  <td class="tdTif"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> Panama</td>
				  <td class="tdTif1 text-center">20</td>
				  <td class="tdTif1 text-center">10456.15</td>
				  <td class="tdTif1 text-center">1123123</td>
				  <td class="tdTif1 text-center">20456.15</td>
				  <td class="tdTif1 text-center">1123123.15</td>
				</tr>
				<tr class="trResultat1">
				  <td class="tdTif1 text-center">2</td>
				  <td class="tdTif"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> France</td>
				  <td class="tdTif1 text-center">20</td>
				  <td class="tdTif1 text-center">10456.15</td>
				  <td class="tdTif1 text-center">1123123</td>
				  <td class="tdTif1 text-center">20456.15</td>
				  <td class="tdTif1 text-center">1123123.15</td>
				</tr>
				<tr class="trResultat1 orangeredTr">
				  <td class="tdTif1 text-center">3</td>
				  <td class="tdTif"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</td>
				  <td class="tdTif1 text-center">20</td>
				  <td class="tdTif1 text-center">10456.15</td>
				  <td class="tdTif1 text-center">1123123</td>
				  <td class="tdTif1 text-center">20456.15</td>
				  <td class="tdTif1 text-center">1123123.15</td>
				</tr>
				<tr class="trResultat1">
				  <td class="tdTif1 text-center">4</td>
				  <td class="tdTif"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> Belgique</td>
				  <td class="tdTif1 text-center">20</td>
				  <td class="tdTif1 text-center">10456.15</td>
				  <td class="tdTif1 text-center">1123123</td>
				  <td class="tdTif1 text-center">20456.15</td>
				  <td class="tdTif1 text-center">1123123.15</td>
				</tr>
				<tr class="trResultat1">
				  <td class="tdTif1 text-center">5</td>
				  <td class="tdTif"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> Russie</td>
				  <td class="tdTif1 text-center">20</td>
				  <td class="tdTif1 text-center">10456.15</td>
				  <td class="tdTif1 text-center">1123123</td>
				  <td class="tdTif1 text-center">20456.15</td>
				  <td class="tdTif1 text-center">1123123.15</td>
				</tr>
				<tr class="trResultat1">
				  <td class="tdTif1 text-center">6</td>
				  <td class="tdTif"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> Panama</td>
				  <td class="tdTif1 text-center">20</td>
				  <td class="tdTif1 text-center">10456.15</td>
				  <td class="tdTif1 text-center">1123123</td>
				  <td class="tdTif1 text-center">20456.15</td>
				  <td class="tdTif1 text-center">1123123.15</td>
				</tr>
				<tr class="trResultat1">
				  <td class="tdTif1 text-center">7</td>
				  <td class="tdTif"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> France</td>
				  <td class="tdTif1 text-center">20</td>
				  <td class="tdTif1 text-center">10456.15</td>
				  <td class="tdTif1 text-center">1123123</td>
				  <td class="tdTif1 text-center">20456.15</td>
				  <td class="tdTif1 text-center">1123123.15</td>
				</tr>
				<tr class="trResultat1">
				  <td class="tdTif1 text-center">8</td>
				  <td class="tdTif"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</td>
				  <td class="tdTif1 text-center">20</td>
				  <td class="tdTif1 text-center">10456.15</td>
				  <td class="tdTif1 text-center">1123123</td>
				  <td class="tdTif1 text-center">20456.15</td>
				  <td class="tdTif1 text-center">1123123.15</td>
				</tr>
				<tr class="trResultat1">
				  <td class="tdTif1 text-center">9</td>
				  <td class="tdTif"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> Belgique</td>
				  <td class="tdTif1 text-center">20</td>
				  <td class="tdTif1 text-center">10456.15</td>
				  <td class="tdTif1 text-center">1123123</td>
				  <td class="tdTif1 text-center">20456.15</td>
				  <td class="tdTif1 text-center">1123123.15</td>
				</tr>
				<tr class="trResultat1">
				  <td class="tdTif1 text-center">10</td>
				  <td class="tdTif"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> Russie</td>
				  <td class="tdTif1 text-center">20</td>
				  <td class="tdTif1 text-center">10456.15</td>
				  <td class="tdTif1 text-center">1123123</td>
				  <td class="tdTif1 text-center">20456.15</td>
				  <td class="tdTif1 text-center">1123123.15</td>
				</tr>
			  </tbody>
			</table>
		</div>	
	</div>
</template>
