<template>
	<div class="container-fluid">	
		<!-- The Modal OtherTeamDetail -->
		<div id="modalBox">
			<div class="modal-dialog modal-lg">
			  	<div class="modal-content">
					<!-- Modal Header -->
					<div class="modal-header">
					  	<span class="modal-title">Résultats et classements <span class="modal-title-Sub">(Tes équipes)</span></span>
						<nuxt-link to="/teams">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" class="white-text"><i class="fa fa-arrow-circle-left"></i></span>
                            </button>
                        </nuxt-link>  					
	            	</div>
					<!-- Modal body -->
					<div id="modalBoxContent" class="modal-bodyProfil text-center">
						<div class="flex-container-modalProfil">
							<div class="columnProfil"><img src="163.png" class="imgModalFlags"/> <span class="modal-Team-Title">Equipe de Suisse</span> <img src="163.png" class="imgModalFlags"/></div>
						</div>
						<div class="flex-container-modal-Niveau text-center">
							<div class="columnProfil"><span class="modal-Team-Competition">Coupe du Monde</br>Football - 2018</br>International</span></div>
						</div>
					</div>
					<div class="flex-container-modalMenuResultats">
						<a href="mesEquipesDetailsResultats.html" style="flex-grow: 1" data-toggle="tooltip" data-placement="bottom" title="Calendrier et résultats de la phase de poule"><span class="textModalMenuResultats">Phase de groupes</span></a>
						<a href="mesEquipesDetailsResultats_3.html" style="flex-grow: 1" data-toggle="tooltip" data-placement="bottom" title="Classement de la phase de poule"><span class="textModalMenuResultats">Classements</span></a>
						<a href="mesEquipesDetailsResultats_2.html" style="flex-grow: 1" data-toggle="tooltip" data-placement="bottom" title="Calendrier et résultats de la phase finale"><span class="textModalMenuResultats">Phase finale</span></a>
					</div>
					<div id="modalTitle" class="modal-body">
						<div class="flex-container-modal-Title banner2 text-center">
							<h2>Groupe A</h2>
						</div>
						<div class="flex-container-modal-Action">
							<table class="table tableTextClassement">
							  <thead>
								<tr>
								  <th class="col1 thTif"></th>
								  <th class="col2 thTif"></th>
								  <th class="col3 thTif text-center" data-toggle="tooltip" data-placement="bottom" title="Matches joués durant la compétition">MJ</th>
								  <th class="col3 thTif text-center" data-toggle="tooltip" data-placement="bottom" title="But pour / But contre">But</th>
								  <th class="col3 thTif text-center" data-toggle="tooltip" data-placement="bottom" title="Nombre de points">Pts</th>
								</tr>
							  </thead>
							  <tbody>
								<tr class="trResultat">
								  <td class="tdTif1 text-center">1</td>
								  <td class="tdTif"><a href="autresEquipesDetails.html" class="linkEvent"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</a></td>
								  <td class="tdTif1 text-center">0</td>
								  <td class="tdTif1 text-center">0:0</td>
								  <td class="tdTif1 text-center">0</td>
								</tr>
								<tr class="trResultat">
								  <td class="tdTif1 text-center">2</td>
								  <td class="tdTif"><a href="autresEquipesDetails.html" class="linkEvent"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> Costa Rica</a></td>
								  <td class="tdTif1 text-center">0</td>
								  <td class="tdTif1 text-center">0:0</td>
								  <td class="tdTif1 text-center">0</td>
								</tr>
								<tr class="trResultat">
								  <td class="tdTif1 text-center">3</td>
								  <td class="tdTif"><a href="autresEquipesDetails.html" class="linkEvent"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> Serbie</a></td>
								  <td class="tdTif1 text-center">0</td>
								  <td class="tdTif1 text-center">0:0</td>
								  <td class="tdTif1 text-center">0</td>
								</tr>
								<tr class="trResultat">
								  <td class="tdTif1 text-center">4</td>
								  <td class="tdTif"><a href="autresEquipesDetails.html" class="linkEvent"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> Suisse</a></td>
								  <td class="tdTif1 text-center">0</td>
								  <td class="tdTif1 text-center">0:0</td>
								  <td class="tdTif1 text-center">0</td>
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
							<table class="table tableTextClassement">
							  <thead>
								<tr>
								  <th class="col1 thTif"></th>
								  <th class="col2 thTif"></th>
								  <th class="col3 thTif text-center" data-toggle="tooltip" data-placement="bottom" title="Matches joués durant la compétition">MJ</th>
								  <th class="col3 thTif text-center" data-toggle="tooltip" data-placement="bottom" title="But pour / But contre">But</th>
								  <th class="col3 thTif text-center" data-toggle="tooltip" data-placement="bottom" title="Nombre de points">Pts</th>
								</tr>
							  </thead>
							  <tbody>
								<tr class="trResultat">
								  <td class="tdTif1 text-center">1</td>
								  <td class="tdTif"><a href="autresEquipesDetails.html" class="linkEvent"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</a></td>
								  <td class="tdTif1 text-center">0</td>
								  <td class="tdTif1 text-center">0:0</td>
								  <td class="tdTif1 text-center">0</td>
								</tr>
								<tr class="trResultat">
								  <td class="tdTif1 text-center">2</td>
								  <td class="tdTif"><a href="autresEquipesDetails.html" class="linkEvent"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> Costa Rica</a></td>
								  <td class="tdTif1 text-center">0</td>
								  <td class="tdTif1 text-center">0:0</td>
								  <td class="tdTif1 text-center">0</td>
								</tr>
								<tr class="trResultat">
								  <td class="tdTif1 text-center">3</td>
								  <td class="tdTif"><a href="autresEquipesDetails.html" class="linkEvent"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> Serbie</a></td>
								  <td class="tdTif1 text-center">0</td>
								  <td class="tdTif1 text-center">0:0</td>
								  <td class="tdTif1 text-center">0</td>
								</tr>
								<tr class="trResultat">
								  <td class="tdTif1 text-center">4</td>
								  <td class="tdTif"><a href="autresEquipesDetails.html" class="linkEvent"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> Suisse</a></td>
								  <td class="tdTif1 text-center">0</td>
								  <td class="tdTif1 text-center">0:0</td>
								  <td class="tdTif1 text-center">0</td>
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
							<table class="table tableTextClassement">
							  <thead>
								<tr>
								  <th class="col1 thTif"></th>
								  <th class="col2 thTif"></th>
								  <th class="col3 thTif text-center" data-toggle="tooltip" data-placement="bottom" title="Matches joués durant la compétition">MJ</th>
								  <th class="col3 thTif text-center" data-toggle="tooltip" data-placement="bottom" title="But pour / But contre">But</th>
								  <th class="col3 thTif text-center" data-toggle="tooltip" data-placement="bottom" title="Nombre de points">Pts</th>
								</tr>
							  </thead>
							  <tbody>
								<tr class="trResultat">
								  <td class="tdTif1 text-center">1</td>
								  <td class="tdTif"><a href="autresEquipesDetails.html" class="linkEvent"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</a></td>
								  <td class="tdTif1 text-center">0</td>
								  <td class="tdTif1 text-center">0:0</td>
								  <td class="tdTif1 text-center">0</td>
								</tr>
								<tr class="trResultat">
								  <td class="tdTif1 text-center">2</td>
								  <td class="tdTif"><a href="autresEquipesDetails.html" class="linkEvent"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> Costa Rica</a></td>
								  <td class="tdTif1 text-center">0</td>
								  <td class="tdTif1 text-center">0:0</td>
								  <td class="tdTif1 text-center">0</td>
								</tr>
								<tr class="trResultat">
								  <td class="tdTif1 text-center">3</td>
								  <td class="tdTif"><a href="autresEquipesDetails.html" class="linkEvent"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> Serbie</a></td>
								  <td class="tdTif1 text-center">0</td>
								  <td class="tdTif1 text-center">0:0</td>
								  <td class="tdTif1 text-center">0</td>
								</tr>
								<tr class="trResultat">
								  <td class="tdTif1 text-center">4</td>
								  <td class="tdTif"><a href="autresEquipesDetails.html" class="linkEvent"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> Suisse</a></td>
								  <td class="tdTif1 text-center">0</td>
								  <td class="tdTif1 text-center">0:0</td>
								  <td class="tdTif1 text-center">0</td>
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
							<table class="table tableTextClassement">
							  <thead>
								<tr>
								  <th class="col1 thTif"></th>
								  <th class="col2 thTif"></th>
								  <th class="col3 thTif text-center" data-toggle="tooltip" data-placement="bottom" title="Matches joués durant la compétition">MJ</th>
								  <th class="col3 thTif text-center" data-toggle="tooltip" data-placement="bottom" title="But pour / But contre">But</th>
								  <th class="col3 thTif text-center" data-toggle="tooltip" data-placement="bottom" title="Nombre de points">Pts</th>
								</tr>
							  </thead>
							  <tbody>
								<tr class="trResultat">
								  <td class="tdTif1 text-center">1</td>
								  <td class="tdTif"><a href="autresEquipesDetails.html" class="linkEvent"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</a></td>
								  <td class="tdTif1 text-center">0</td>
								  <td class="tdTif1 text-center">0:0</td>
								  <td class="tdTif1 text-center">0</td>
								</tr>
								<tr class="trResultat">
								  <td class="tdTif1 text-center">2</td>
								  <td class="tdTif"><a href="autresEquipesDetails.html" class="linkEvent"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> Costa Rica</a></td>
								  <td class="tdTif1 text-center">0</td>
								  <td class="tdTif1 text-center">0:0</td>
								  <td class="tdTif1 text-center">0</td>
								</tr>
								<tr class="trResultat">
								  <td class="tdTif1 text-center">3</td>
								  <td class="tdTif"><a href="autresEquipesDetails.html" class="linkEvent"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> Serbie</a></td>
								  <td class="tdTif1 text-center">0</td>
								  <td class="tdTif1 text-center">0:0</td>
								  <td class="tdTif1 text-center">0</td>
								</tr>
								<tr class="trResultat">
								  <td class="tdTif1 text-center">4</td>
								  <td class="tdTif"><a href="autresEquipesDetails.html" class="linkEvent"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> Suisse</a></td>
								  <td class="tdTif1 text-center">0</td>
								  <td class="tdTif1 text-center">0:0</td>
								  <td class="tdTif1 text-center">0</td>
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
							<table class="table tableTextClassement">
							  <thead>
								<tr>
								  <th class="col1 thTif"></th>
								  <th class="col2 thTif"></th>
								  <th class="col3 thTif text-center" data-toggle="tooltip" data-placement="bottom" title="Matches joués durant la compétition">MJ</th>
								  <th class="col3 thTif text-center" data-toggle="tooltip" data-placement="bottom" title="But pour / But contre">But</th>
								  <th class="col3 thTif text-center" data-toggle="tooltip" data-placement="bottom" title="Nombre de points">Pts</th>
								</tr>
							  </thead>
							  <tbody>
								<tr class="trResultat">
								  <td class="tdTif1 text-center">1</td>
								  <td class="tdTif"><a href="autresEquipesDetails.html" class="linkEvent"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</a></td>
								  <td class="tdTif1 text-center">0</td>
								  <td class="tdTif1 text-center">0:0</td>
								  <td class="tdTif1 text-center">0</td>
								</tr>
								<tr class="trResultat">
								  <td class="tdTif1 text-center">2</td>
								  <td class="tdTif"><a href="autresEquipesDetails.html" class="linkEvent"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> Costa Rica</a></td>
								  <td class="tdTif1 text-center">0</td>
								  <td class="tdTif1 text-center">0:0</td>
								  <td class="tdTif1 text-center">0</td>
								</tr>
								<tr class="trResultat">
								  <td class="tdTif1 text-center">3</td>
								  <td class="tdTif"><a href="autresEquipesDetails.html" class="linkEvent"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> Serbie</a></td>
								  <td class="tdTif1 text-center">0</td>
								  <td class="tdTif1 text-center">0:0</td>
								  <td class="tdTif1 text-center">0</td>
								</tr>
								<tr class="trResultat">
								  <td class="tdTif1 text-center">4</td>
								  <td class="tdTif"><a href="autresEquipesDetails.html" class="linkEvent"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> Suisse</a></td>
								  <td class="tdTif1 text-center">0</td>
								  <td class="tdTif1 text-center">0:0</td>
								  <td class="tdTif1 text-center">0</td>
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
							<table class="table tableTextClassement">
							  <thead>
								<tr>
								  <th class="col1 thTif"></th>
								  <th class="col2 thTif"></th>
								  <th class="col3 thTif text-center" data-toggle="tooltip" data-placement="bottom" title="Matches joués durant la compétition">MJ</th>
								  <th class="col3 thTif text-center" data-toggle="tooltip" data-placement="bottom" title="But pour / But contre">But</th>
								  <th class="col3 thTif text-center" data-toggle="tooltip" data-placement="bottom" title="Nombre de points">Pts</th>
								</tr>
							  </thead>
							  <tbody>
								<tr class="trResultat">
								  <td class="tdTif1 text-center">1</td>
								  <td class="tdTif"><a href="autresEquipesDetails.html" class="linkEvent"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</a></td>
								  <td class="tdTif1 text-center">0</td>
								  <td class="tdTif1 text-center">0:0</td>
								  <td class="tdTif1 text-center">0</td>
								</tr>
								<tr class="trResultat">
								  <td class="tdTif1 text-center">2</td>
								  <td class="tdTif"><a href="autresEquipesDetails.html" class="linkEvent"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> Costa Rica</a></td>
								  <td class="tdTif1 text-center">0</td>
								  <td class="tdTif1 text-center">0:0</td>
								  <td class="tdTif1 text-center">0</td>
								</tr>
								<tr class="trResultat">
								  <td class="tdTif1 text-center">3</td>
								  <td class="tdTif"><a href="autresEquipesDetails.html" class="linkEvent"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> Serbie</a></td>
								  <td class="tdTif1 text-center">0</td>
								  <td class="tdTif1 text-center">0:0</td>
								  <td class="tdTif1 text-center">0</td>
								</tr>
								<tr class="trResultat">
								  <td class="tdTif1 text-center">4</td>
								  <td class="tdTif"><a href="autresEquipesDetails.html" class="linkEvent"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> Suisse</a></td>
								  <td class="tdTif1 text-center">0</td>
								  <td class="tdTif1 text-center">0:0</td>
								  <td class="tdTif1 text-center">0</td>
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
							<table class="table tableTextClassement">
							  	<thead>
									<tr>
									  <th class="col1 thTif"></th>
									  <th class="col2 thTif"></th>
									  <th class="col3 thTif text-center" data-toggle="tooltip" data-placement="bottom" title="Matches joués durant la compétition">MJ</th>
									  <th class="col3 thTif text-center" data-toggle="tooltip" data-placement="bottom" title="But pour / But contre">But</th>
									  <th class="col3 thTif text-center" data-toggle="tooltip" data-placement="bottom" title="Nombre de points">Pts</th>
									</tr>
							  	</thead>
							 	<tbody>
									<tr class="trResultat">
									  <td class="tdTif1 text-center">1</td>
									  <td class="tdTif"><a href="autresEquipesDetails.html" class="linkEvent"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</a></td>
									  <td class="tdTif1 text-center">0</td>
									  <td class="tdTif1 text-center">0:0</td>
									  <td class="tdTif1 text-center">0</td>
									</tr>
									<tr class="trResultat">
									  <td class="tdTif1 text-center">2</td>
									  <td class="tdTif"><a href="autresEquipesDetails.html" class="linkEvent"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> Costa Rica</a></td>
									  <td class="tdTif1 text-center">0</td>
									  <td class="tdTif1 text-center">0:0</td>
									  <td class="tdTif1 text-center">0</td>
									</tr>
									<tr class="trResultat">
									  <td class="tdTif1 text-center">3</td>
									  <td class="tdTif"><a href="autresEquipesDetails.html" class="linkEvent"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> Serbie</a></td>
									  <td class="tdTif1 text-center">0</td>
									  <td class="tdTif1 text-center">0:0</td>
									  <td class="tdTif1 text-center">0</td>
									</tr>
									<tr class="trResultat">
									  <td class="tdTif1 text-center">4</td>
									  <td class="tdTif"><a href="autresEquipesDetails.html" class="linkEvent"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> Suisse</a></td>
									  <td class="tdTif1 text-center">0</td>
									  <td class="tdTif1 text-center">0:0</td>
									  <td class="tdTif1 text-center">0</td>
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
							<table class="table tableTextClassement">
							  	<thead>
									<tr>
									  <th class="col1 thTif"></th>
									  <th class="col2 thTif"></th>
									  <th class="col3 thTif text-center" data-toggle="tooltip" data-placement="bottom" title="Matches joués durant la compétition">MJ</th>
									  <th class="col3 thTif text-center" data-toggle="tooltip" data-placement="bottom" title="But pour / But contre">But</th>
									  <th class="col3 thTif text-center" data-toggle="tooltip" data-placement="bottom" title="Nombre de points">Pts</th>
									</tr>
							  	</thead>
							  	<tbody>
									<tr class="trResultat">
									  <td class="tdTif1 text-center">1</td>
									  <td class="tdTif"><a href="autresEquipesDetails.html" class="linkEvent"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> Brésil</a></td>
									  <td class="tdTif1 text-center">0</td>
									  <td class="tdTif1 text-center">0:0</td>
									  <td class="tdTif1 text-center">0</td>
									</tr>
									<tr class="trResultat">
									  <td class="tdTif1 text-center">2</td>
									  <td class="tdTif"><a href="autresEquipesDetails.html" class="linkEvent"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> Costa Rica</a></td>
									  <td class="tdTif1 text-center">0</td>
									  <td class="tdTif1 text-center">0:0</td>
									  <td class="tdTif1 text-center">0</td>
									</tr>
									<tr class="trResultat">
									  <td class="tdTif1 text-center">3</td>
									  <td class="tdTif"><a href="autresEquipesDetails.html" class="linkEvent"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> Serbie</a></td>
									  <td class="tdTif1 text-center">0</td>
									  <td class="tdTif1 text-center">0:0</td>
									  <td class="tdTif1 text-center">0</td>
									</tr>
									<tr class="trResultat">
									  <td class="tdTif1 text-center">4</td>
									  <td class="tdTif"><a href="autresEquipesDetails.html" class="linkEvent"><img src="images/flags/163.png" class="imgModalAgendaFlags"/> Suisse</a></td>
									  <td class="tdTif1 text-center">0</td>
									  <td class="tdTif1 text-center">0:0</td>
									  <td class="tdTif1 text-center">0</td>
									</tr>
							 	 </tbody>
							</table>
						</div>	
					</div>
					<!-- Modal footer -->
					<div class="modal-footer">
					  	<a href="mesEquipesDetails.html"><button type="button" class="btn btn-danger" data-dismiss="modal">Sortir d'ici !</button></a>
					</div>
			  	</div><!-- /.modal-content -->
			</div><!-- /.modal-dialog -->
		</div><!-- /#modalBox -->						
	</div><!-- /.container-fluid -->
</template>

<script>
	export default {
		layout: 'layoutFront',
		data () {
			return {

			}
		}
	}
</script>

<style>
</style>