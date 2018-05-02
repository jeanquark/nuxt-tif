<template>
	<div class="container-fluid">
		<!-- The Modal OtherTeamDetail -->
		<div id="modalBox">
			<div class="modal-dialog modal-lg">
			  	<div class="modal-content">
					<!-- Modal Header -->
					<div class="modal-header">
					  <span class="modal-title">Trophées "TIF" <span class="modal-title-Sub">(Tes équipes)</span></span>
						<nuxt-link to="/user/teams/userTeamDetails">
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true" class="white-text"><i class="fas fa-arrow-circle-left"></i></span>
							</button>
						</nuxt-link>					
					</div>
					<!-- Modal body -->
					<div id="modalBoxContent" class="modal-bodyProfil text-center">
						<div class="flex-container-modalProfil">
							<div class="columnProfil"><img src="/images/flags/163.png" class="imgModalFlags"/> <span class="modal-Team-Title">Equipe de Suisse</span> <img src="//images/flags/163.png" class="imgModalFlags"/></div>
						</div>
						<div class="flex-container-modal-Niveau text-center">
							<div class="columnProfil"><span class="modal-Team-Activity">Tous les trophées et archives</br>(résultats de toutes les compétitions)</span></div>
						</div>
					</div>
					<div class="flex-container-modalMenuResultats">
						<nuxt-link to="/userTeamDetailsStatsTif" style="flex-grow: 1" data-toggle="tooltip" data-placement="bottom" title="Calendrier et résultats"><span class="textModalMenuResultats">Stats TIF</span></nuxt-link>
						<nuxt-link to="/userTeamDetailsRankingTif" style="flex-grow: 1" data-toggle="tooltip" data-placement="bottom" title="Classement individuel TIF"><span class="textModalMenuResultats">Classements TIF</span></nuxt-link>
						<nuxt-link to="/userTeamDetailsTrophyTif" style="flex-grow: 1" data-toggle="tooltip" data-placement="bottom" title="Classement individuel TIF"><span class="textModalMenuResultats">Trophées TIF</span></nuxt-link>
					</div>
					<div id="modalTitle" class="modal-body">
						<div class="flex-container-modal-Title banner text-center">
							<h2>Trophées par équipe</h2>
						</div>
						<div id="resultatBoxFlags" class="resultatBody">
							<div class="flex-container-modal-FanShop-Goodies-small">
								<div class="actionCard">
									<div class="textBoxActionGoodies">Champion du monde</div>
									<div class="OtherTeam2"><img src="/images/cup/cup.png" class="imgModalActionGoodies"/><nuxt-link to="/boxDetailTrophy" class="overlayGoodies"><div class="textAction">Coupe du monde</br>Football</br>Russie</br>2018</div></nuxt-link></div>
								</div>
								<div class="actionCard">
									<div class="textBoxActionGoodies">Champion du monde</div>
									<div class="OtherTeam2"><img src="/images/cup/cup.png" class="imgModalActionGoodies"/><nuxt-link to="/boxDetailTrophy" class="overlayGoodies"><div class="textAction">Coupe du monde</br>Football</br>Russie</br>2018</div></nuxt-link></div>
								</div>
								<div class="actionCard">
									<div class="textBoxActionGoodies">Champion du monde</div>
									<div class="OtherTeam2"><img src="/images/cup/cup.png" class="imgModalActionGoodies"/><nuxt-link to="/boxDetailTrophy" class="overlayGoodies"><div class="textAction">Coupe du monde</br>Football</br>Russie</br>2018</div></nuxt-link></div>
								</div>
							</div>	
						</div>
					</div>
					<div id="modalBoxContent" class="modal-body">
						<div class="flex-container-modal-Title banner2 text-center">
							<h2>Trophées par équipe "TIF"</h2>
						</div>
						<div id="resultatBoxFlags" class="resultatBody">
							<div class="flex-container-modal-FanShop-Goodies-small">
								<div class="actionCard">
									<div class="textBoxActionGoodies">Champion du monde</div>
									<div class="OtherTeam2"><img src="/images/cup/cup.png" class="imgModalActionGoodies"/><nuxt-link to="/boxDetailTrophy" class="overlayGoodies"><div class="textAction">Coupe du monde</br>Football</br>Russie</br>2018</div></nuxt-link></div>
								</div>
								<div class="actionCard">
									<div class="textBoxActionGoodies">Champion du monde</div>
									<div class="OtherTeam2"><img src="/images/cup/cup.png" class="imgModalActionGoodies"/><nuxt-link to="/boxDetailTrophy" class="overlayGoodies"><div class="textAction">Coupe du monde</br>Football</br>Russie</br>2018</div></nuxt-link></div>
								</div>
								<div class="actionCard">
									<div class="textBoxActionGoodies">Champion du monde</div>
									<div class="OtherTeam2"><img src="/images/cup/cup.png" class="imgModalActionGoodies"/><nuxt-link to="/boxDetailTrophy" class="overlayGoodies"><div class="textAction">Coupe du monde</br>Football</br>Russie</br>2018</div></nuxt-link></div>
								</div>
							</div>	
						</div>
					</div>
					<div id="modalBoxContent" class="modal-body">
						<div class="flex-container-modal-Title banner2 text-center">
							<h2>Trophées individuels "TIF"</h2>
						</div>
						<div id="resultatBoxFlags" class="resultatBody">
							<div class="flex-container-modal-FanShop-Goodies-small">
								<div class="actionCard">
									<div class="textBoxActionGoodies">Champion du monde</div>
									<div class="OtherTeam2"><img src="/images/cup/cup.png" class="imgModalActionGoodies"/><nuxt-link to="/boxDetailTrophy" class="overlayGoodies"><div class="textAction">Coupe du monde</br>Football</br>Russie</br>2018</div></nuxt-link></div>
								</div>
								<div class="actionCard">
									<div class="textBoxActionGoodies">Champion du monde</div>
									<div class="OtherTeam2"><img src="/images/cup/cup.png" class="imgModalActionGoodies"/><nuxt-link to="/boxDetailTrophy" class="overlayGoodies"><div class="textAction">Coupe du monde</br>Football</br>Russie</br>2018</div></nuxt-link></div>
								</div>
								<div class="actionCard">
									<div class="textBoxActionGoodies">Champion du monde</div>
									<div class="OtherTeam2"><img src="/images/cup/cup.png" class="imgModalActionGoodies"/><nuxt-link to="/boxDetailTrophy" class="overlayGoodies"><div class="textAction">Coupe du monde</br>Football</br>Russie</br>2018</div></nuxt-link></div>
								</div>
							</div>	
						</div>
					</div>
					<div id="modalBoxContent" class="modal-body">
						<div class="flex-container-modal-Title banner text-center">
							<h2>Archives des compétitions</h2>
						</div>
						<div id="resultatBoxFlags" class="resultatBody">
							<div class="flex-container-modal-OtherTeam-Img">
							  	<div class="OtherTeam"><img src="/images/competition/compFootIntCM18.png" class="imgModalAvatar"/><nuxt-link to="/competitionDetails" class="overlayOtherTeam"><div class="textActivity">Football</br>Coupe du monde</br>Russie</br>2018</br></br>+Infos</div></nuxt-link></div>
							  	<div class="OtherTeam"><img src="/images/competition/compFootCHE1819.png" class="imgModalAvatar"/><nuxt-link to="/competitionDetails" class="overlayOtherTeam"><div class="textActivity">Football</br>Championnat</br>Super League</br>Suisse</br>18/19</br></br>+Infos</div></nuxt-link></div>
							  	<div class="OtherTeam"><img src="/images/competition/compFootFRA1819.png" class="imgModalAvatar"/><nuxt-link to="/competitionDetails" class="overlayOtherTeam"><div class="textActivity">Football</br>Championnat</br>Ligue 1</br>France</br>18/19</br></br>+Infos</div></nuxt-link></div>
							</div>
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
		</div><!-- /.modalBox -->
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
