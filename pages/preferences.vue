<template>
  <div class="container-fluid">
      <!-- The Modal Paramètre -->
      <div id="modalBox">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
          <!-- Modal Header -->
          <div class="modal-header">
            <span class="modal-title">Tes Paramètres</span>
            <nuxt-link to="/">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true" class="white-text"><i class="fa fa-arrow-circle-left"></i></span>
              </button>
            </nuxt-link>         
          </div>
          <!-- Modal body -->
          <div id="modalBoxContent" class="modal-body">
            <div class="flex-container-modal-MyTeam">
              <h1>Infos et/ou besoin d'aide ?</h1>
            </div>
            <div class="flex-container-modal-Parametre">
              <div class="flex-container-modal-Niveau">
                <div class="columnParametreTexte">
                  Musique
                </div>
                <div class="columnParametreButtonYes">
                  Oui
                </div>
              </div>
              <div class="flex-container-modal-Niveau">
                <div class="columnParametreTexte">
                  Son
                </div>
                <div class="columnParametreButtonNo">
                  Non
                </div>
              </div>
              <div class="flex-container-modal-Niveau">
                <div class="columnParametreTexte">
                  Facebook
                </div>
                <div class="columnParametreButtonYes">
                  En ligne
                </div>
              </div>
              <div class="flex-container-modal-Niveau">
                <div class="columnParametreTexte">
                  Google+
                </div>
                <div class="columnParametreButtonNo">
                  Hors ligne
                </div>
              </div>
              <div class="flex-container-modal-Niveau">
                <div class="columnParametreTexte">
                  Langues
                </div>
                <a href="mesLangues.html" class="columnParametreButton">
                  Français
                </a>
              </div>
              <div class="flex-container-modal-Niveau">
                <div class="columnParametreTexte">
                  Pseudo
                </div>
                <a href="monPseudo.html" class="columnParametreButton">
                  Pseudo1234567
                </a>
              </div>
              <div class="flex-container-modal-Niveau">
                <div class="columnParametreTexte">
                  Année de naissance
                </div>
                <a href="monAnneeNaissance.html" class="columnParametreButton">
                  1998
                </a>
              </div>
              <div class="flex-container-modal-Niveau">
                <div class="columnParametreTexte">
                  Nationalité
                </div>
                <a href="maNationalite.html" class="columnParametreButton">
                  Suisse
                </a>
              </div>
            </div>
          </div>
          <div id="modalAvatar" class="modal-body">
            <div class="flex-container-modal-Parametre">
              <div class="flex-container-modal-Niveau">
                <a href="#" class="columnParametreButtonGd">
                  Aide / Assistance
                </a>
              </div>
              <div class="flex-container-modal-Niveau">
                <a href="#" class="columnParametreButtonGd">
                  Confidentialité
                </a>
              </div>
              <div class="flex-container-modal-Niveau">
                <a href="#" class="columnParametreButtonGd">
                  Conditions d'utilisation
                </a>
              </div>
              <div class="flex-container-modal-Niveau">
                <a href="#" class="columnParametreButtonGd">
                  Crédit
                </a>
              </div>
            </div>  
          </div>
          <!-- Modal footer -->
          <div class="modal-footer">
            <a href="index.html"><button type="button" class="btn btn-danger" data-dismiss="modal">Fermer</button></a>
          </div>
          </div>
        </div>
      </div>
      <!-- End Modal Paramètre -->
                  
    </div>
</template>

<script>
  export default {
    layout: 'layoutFront',
  }
</script>

<style>

</style>
