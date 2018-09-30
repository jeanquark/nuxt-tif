<template>
	<!-- <div class="panel"> Modif JM-->
	<div>
		<div class="flex-container-modal-Action">
			<h6 class="tdTitleClassementCompet">Titre de la compétition en cours</h6>
			<table class="table tableTextClassement">
			  <thead>
				<tr>
				  <th class="col1 thTif"></th>
				  <th class="col2 thTif"></th>
				  <th class="col3 thTif text-center" data-toggle="tooltip" data-placement="bottom" title="Matches joués">MJ</th>
				  <th class="col3 thTif text-center" data-toggle="tooltip" data-placement="bottom" title="Gagné">G</th>
				  <th class="col3 thTif text-center" data-toggle="tooltip" data-placement="bottom" title="Match nul">N</th>
				  <th class="col3 thTif text-center" data-toggle="tooltip" data-placement="bottom" title="Perdu">P</th>
				  <th class="col3 thTif text-center" data-toggle="tooltip" data-placement="bottom" title="But pour / But contre">But</th>
				  <th class="col3 thTif text-center" data-toggle="tooltip" data-placement="bottom" title="Différence de but">Diff.</th>
				  <th class="col3 thTif text-center" data-toggle="tooltip" data-placement="bottom" title="Nombre de points">Pts</th>
				</tr>
			  </thead>
			  <tbody>
				<tr class="borderResultat blue">
				  <td class="tdTif1 text-center">1</td>
				  <td class="tdTif"><a href="autresEquipesDetails.html" class="linkEvent"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</a></td>
				  <td class="tdTif1 text-center">28</td>
				  <td class="tdTif1 text-center">14</td>
				  <td class="tdTif1 text-center">14</td>
				  <td class="tdTif1 text-center">14</td>
				  <td class="tdTif1 text-center">100:100</td>
				  <td class="tdTif1 text-center">+50</td>
				  <td class="tdTif1 text-center">100</td>
				</tr>
				<tr class="borderResultat">
				  <td class="tdTif1 text-center">2</td>
				  <td class="tdTif"><a href="autresEquipesDetails.html" class="linkEvent"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> Costa Rica</a></td>
				  <td class="tdTif1 text-center">28</td>
				  <td class="tdTif1 text-center">14</td>
				  <td class="tdTif1 text-center">14</td>
				  <td class="tdTif1 text-center">14</td>
				  <td class="tdTif1 text-center">100:100</td>
				  <td class="tdTif1 text-center">+50</td>
				  <td class="tdTif1 text-center">100</td>
				</tr>
				<tr class="borderResultat">
				  <td class="tdTif1 text-center">3</td>
				  <td class="tdTif"><a href="autresEquipesDetails.html" class="linkEvent"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> Serbie</a></td>
				  <td class="tdTif1 text-center">28</td>
				  <td class="tdTif1 text-center">14</td>
				  <td class="tdTif1 text-center">14</td>
				  <td class="tdTif1 text-center">14</td>
				  <td class="tdTif1 text-center">100:100</td>
				  <td class="tdTif1 text-center">+50</td>
				  <td class="tdTif1 text-center">100</td>
				</tr>
				<tr class="borderResultat">
				  <td class="tdTif1 text-center">4</td>
				  <td class="tdTif"><a href="autresEquipesDetails.html" class="linkEvent"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> Suisse</a></td>
				  <td class="tdTif1 text-center">28</td>
				  <td class="tdTif1 text-center">14</td>
				  <td class="tdTif1 text-center">14</td>
				  <td class="tdTif1 text-center">14</td>
				  <td class="tdTif1 text-center">100:100</td>
				  <td class="tdTif1 text-center">+50</td>
				  <td class="tdTif1 text-center">100</td>
				</tr>
				<tr class="borderResultat">
				  <td class="tdTif1 text-center">5</td>
				  <td class="tdTif"><a href="autresEquipesDetails.html" class="linkEvent"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> Costa Rica</a></td>
				  <td class="tdTif1 text-center">28</td>
				  <td class="tdTif1 text-center">14</td>
				  <td class="tdTif1 text-center">14</td>
				  <td class="tdTif1 text-center">14</td>
				  <td class="tdTif1 text-center">100:100</td>
				  <td class="tdTif1 text-center">+50</td>
				  <td class="tdTif1 text-center">100</td>
				</tr>
				<tr class="borderResultat">
				  <td class="tdTif1 text-center">6</td>
				  <td class="tdTif"><a href="autresEquipesDetails.html" class="linkEvent"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> Serbie</a></td>
				  <td class="tdTif1 text-center">28</td>
				  <td class="tdTif1 text-center">14</td>
				  <td class="tdTif1 text-center">14</td>
				  <td class="tdTif1 text-center">14</td>
				  <td class="tdTif1 text-center">100:100</td>
				  <td class="tdTif1 text-center">+50</td>
				  <td class="tdTif1 text-center">100</td>
				</tr>
				<tr class="borderResultat">
				  <td class="tdTif1 text-center">7</td>
				  <td class="tdTif"><a href="autresEquipesDetails.html" class="linkEvent"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> Suisse</a></td>
				  <td class="tdTif1 text-center">28</td>
				  <td class="tdTif1 text-center">14</td>
				  <td class="tdTif1 text-center">14</td>
				  <td class="tdTif1 text-center">14</td>
				  <td class="tdTif1 text-center">100:100</td>
				  <td class="tdTif1 text-center">+50</td>
				  <td class="tdTif1 text-center">100</td>
				</tr>
				<tr class="borderResultat">
				  <td class="tdTif1 text-center">8</td>
				  <td class="tdTif"><a href="autresEquipesDetails.html" class="linkEvent"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> Costa Rica</a></td>
				  <td class="tdTif1 text-center">28</td>
				  <td class="tdTif1 text-center">14</td>
				  <td class="tdTif1 text-center">14</td>
				  <td class="tdTif1 text-center">14</td>
				  <td class="tdTif1 text-center">100:100</td>
				  <td class="tdTif1 text-center">+50</td>
				  <td class="tdTif1 text-center">100</td>
				</tr>
				<tr class="borderResultat">
				  <td class="tdTif1 text-center">9</td>
				  <td class="tdTif"><a href="autresEquipesDetails.html" class="linkEvent"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> Serbie</a></td>
				  <td class="tdTif1 text-center">28</td>
				  <td class="tdTif1 text-center">14</td>
				  <td class="tdTif1 text-center">14</td>
				  <td class="tdTif1 text-center">14</td>
				  <td class="tdTif1 text-center">100:100</td>
				  <td class="tdTif1 text-center">+50</td>
				  <td class="tdTif1 text-center">100</td>
				</tr>
				<tr class="borderResultat">
				  <td class="tdTif1 text-center">10</td>
				  <td class="tdTif"><a href="autresEquipesDetails.html" class="linkEvent"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> Suisse</a></td>
				  <td class="tdTif1 text-center">28</td>
				  <td class="tdTif1 text-center">14</td>
				  <td class="tdTif1 text-center">14</td>
				  <td class="tdTif1 text-center">14</td>
				  <td class="tdTif1 text-center">100:100</td>
				  <td class="tdTif1 text-center">+50</td>
				  <td class="tdTif1 text-center">100</td>
				</tr>
			  </tbody>
			</table>
		</div>
	</div>
</template>
