<template>
  <div class="container-fluid">
    <!-- The Modal Team -->
    <div id="modalBox">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <!-- Modal Header -->
          <div class="modal-header">
            <span class="modal-title">Tes équipes</span>
            <nuxt-link to="/">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true" class="white-text"><i class="fa fa-arrow-circle-left"></i></span>
              </button>
            </nuxt-link>         
          </div>
          <!-- Modal body -->
          <div id="modalBoxContent" class="modal-body">
            <div class="flex-container-modal-MyTeam">
              <h1>Tu supportes 7 équipes...</h1>
            </div>
            <div class="flex-container-modal-Title banner2 text-center">
              <h2>Tes équipes</h2>
            </div>
            <div class="flex-container-MesEquipes">
              <div class="OtherTeam">
                <img src="images/flags/163.png" class="imgModalAvatar"/>
                <a href="mesEquipesDetails.html" class="overlay"></a>
              </div>
            </div>  
          </div>
          <div id="modalBoxContent" class="modal-body">
            <div class="flex-container-modal-OtherTeam">
              <h1>Supporter une nouvelle équipe ?</h1>
            </div>
            <div class="flex-container-modal-Title banner text-center">
              <h2>Compétitions en cours / à venir</h2>
            </div>
            <div class="flex-container-modal-OtherTeam">
              <h6>Choisis ta compétition</h6>
            </div>
            <div class="flex-container-modal-OtherTeam-Img">
              <div class="OtherTeam"><img src="images/competition/compFootIntCM18.png" class="imgModalAvatar"/><a href="competitionsEquipes.html" class="overlayOtherTeam">Voir</a></div>
              <div class="OtherTeam"><img src="images/competition/compFootCHE1819.png" class="imgModalAvatar"/><a href="competitionsEquipes.html" class="overlayOtherTeam"></a></div>
              <div class="OtherTeam"><img src="images/competition/compFootFRA1819.png" class="imgModalAvatar"/><a href="competitionsEquipes.html" class="overlayOtherTeam"></a></div>
            </div>  
          </div>
          <!-- Modal footer -->
          <div class="modal-footer">
            <a href="index.html"><button type="button" class="btn btn-danger" data-dismiss="modal">Fermer</button></a>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modalBox -->
  </div>
</template>

<script>
  export default {
    layout: 'layoutFront',
  }
</script>

<style>

</style>
