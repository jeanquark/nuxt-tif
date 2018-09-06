<template>
    <div class="container-fluid">
        <!-- The Modal Player -->
        <div id="modalBox">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <!-- Modal Header -->
                    <div class="modal-header">
                        <span class="modal-title">Ton profil</span>
                        <nuxt-link to="/home">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" class="white-text"><i class="fa fa-arrow-circle-left"></i></span>
                            </button>
                        </nuxt-link>                    
                    </div>
                    <!-- Modal body -->

                    <div id="modalBoxContentProfil" class="modal-bodyProfil text-center">
                        <div class="flex-container-modalProfil text-center">
                            <div class="columnProfil"><img src="163.png" class="imgModalFlags"/>
                            <span class="modal-Profil">Fan1234567</span> <span class="modal-Age">(20)</span>
                            <img src="avatar.png" class="imgModalAvatarProfil"/></div>
                        </div>
                        <div class="flex-container-modal-Niveau-Classement text-center">
                            <div class="columnProfil"><img src="cup.png" class="imgModalCup"/> <span class="modal-Place" v-if="loadedUser">{{ loadedUser.username }}</span> <img src="cup.png" class="imgModalCup"/></div>
                        </div>
                    </div>  

                    <div id="modalTitle" class="modal-body">
                        <div class="flex-container-modal-Title banner2 text-center">
                            <h2>Niveau / PF / Competences</h2>
                        </div>
                        <div class="flex-container-Niveau-Header">
                            <div class="column1">
                                <span class="PF-Team-box">
                                    Point Ferveur</br>
                                    <span class="PF-Number-box">1.00</span>
                                    Tes équipes
                                </span>                     
                            </div>
                            <div class="column2">
                                <div class="imgModalLevel">
                                    <img src="/images/level/level.png" class="imgModalLevelImg"/>
                                </div>
                                <div class="Level-Number-box">
                                    1
                                </div>
                            </div>
                            <div class="column1">
                                <span class="PF-Team-box">
                                    Point Ferveur</br>
                                    <span class="PF-Number-box">00.25</span>
                                    Autres équipes
                                </span>                     
                            </div>
                        </div>
                        <div class="flex-container-modal-Niveau-PF">
                            <div class="flex-container-modal-Niveau">
                                <div class="columnNiveauImg">
                                    <i class="fa fa-star"></i>                          
                                </div>
                                <div class="columnNiveauTexte">
                                    Force
                                </div>
                                <div class="columnNiveauNumber">
                                    1
                                </div>
                            </div>
                            <div class="flex-container-modal-Niveau">
                                <div class="columnNiveauImg">
                                    <i class="fa fa-star"></i>                          
                                </div>
                                <div class="columnNiveauTexte">
                                    Endurance
                                </div>
                                <div class="columnNiveauNumber">
                                    1
                                </div>
                            </div>
                            <div class="flex-container-modal-Niveau">
                                <div class="columnNiveauImg">
                                    <i class="fa fa-star"></i>                          
                                </div>
                                <div class="columnNiveauTexte">
                                    Intelligence
                                </div>
                                <div class="columnNiveauNumber">
                                    1
                                </div>
                            </div>
                            <div class="flex-container-modal-Niveau">
                                <div class="columnNiveauImg">
                                    <i class="fa fa-star"></i>                          
                                </div>
                                <div class="columnNiveauTexte">
                                    Social
                                </div>
                                <div class="columnNiveauNumber">
                                    1
                                </div>
                            </div>
                            <div class="flex-container-modal-Niveau">
                                <div class="columnNiveauImg">
                                    <i class="fa fa-star"></i>                          
                                </div>
                                <div class="columnNiveauTexte">
                                    Autorité
                                </div>
                                <div class="columnNiveauNumber">
                                    1
                                </div>
                            </div>
                            <div class="flex-container-modal-Niveau">
                                <div class="columnNiveauImg">
                                    <i class="fa fa-star"></i>                          
                                </div>
                                <div class="columnNiveauTexte">
                                    Baratin
                                </div>
                                <div class="columnNiveauNumber">
                                    1
                                </div>
                            </div>
                            <div class="flex-container-modal-Niveau">
                                <div class="columnNiveauImg">
                                    <i class="fa fa-star"></i>                          
                                </div>
                                <div class="columnNiveauTexte">
                                    Créativité
                                </div>
                                <div class="columnNiveauNumber">
                                    1
                                </div>
                            </div>
                            <div class="flex-container-modal-Niveau">
                                <div class="columnNiveauImg">
                                    <i class="fa fa-star"></i>                          
                                </div>
                                <div class="columnNiveauTexte">
                                    Mental
                                </div>
                                <div class="columnNiveauNumber">
                                    1
                                </div>
                            </div>
                        </div>  
                    </div>
                    <div id="modalTitle" class="modal-body">
                        <div class="flex-container-modal-Title banner2 text-center">
                            <h2>Statistiques "Actions"</h2>
                        </div>
                        <div class="flex-container-modal-Action">
                            <div class="flex-container-modal-Niveau">
                                <div class="columnActionTexte">
                                    Nombre de cartes "Action" débloquées
                                </div>
                                <div class="columnActionNumber">
                                    12 / 50
                                </div>
                            </div>
                            <div class="flex-container-modal-Niveau">
                                <div class="columnActionTexte">
                                    Nombre de cartes "Event" débloquées
                                </div>
                                <div class="columnActionNumber">
                                    5 / 50
                                </div>
                            </div>
                            <div class="flex-container-modal-Niveau">
                                <div class="columnActionTexte">
                                    Nombre de cartes "Goodies" achetées
                                </div>
                                <div class="columnActionNumber">
                                    0
                                </div>
                            </div>
                            <div class="flex-container-modal-Niveau">
                                <div class="columnActionTexte">
                                    Nombre de cartes "Spéciales" achetées
                                </div>
                                <div class="columnActionNumber">
                                    0
                                </div>
                            </div>
                        </div>  
                    </div>
                    <div id="modalTitle" class="modal-body">
                        <div class="flex-container-modal-Title banner2 text-center">
                            <h2>Statistiques "Jeux"</h2>
                        </div>
                        <div class="flex-container-modal-Action">
                            <div class="flex-container-modal-Niveau">
                                <div class="columnActionTexte">
                                    Tu es Fan de ?
                                </div>
                                <div class="columnGameNumber">
                                    1 équipe
                                </div>
                            </div>
                            <div class="flex-container-modal-Niveau">
                                <div class="columnActionTexte">
                                    Event - Nb de participations
                                </div>
                                <div class="columnGameNumber">
                                    0
                                </div>
                            </div>
                            <div class="flex-container-modal-Niveau">
                                <div class="columnActionTexte">
                                    Compétition - Nb de compétitions jouées
                                </div>
                                <div class="columnGameNumber">
                                    0
                                </div>
                            </div>
                            <div class="flex-container-modal-Niveau">
                                <div class="columnActionTexte">
                                    Action - Nb d'actions réalisées
                                </div>
                                <div class="columnGameNumber">
                                    0
                                </div>
                            </div>
                            <div class="flex-container-modal-Niveau">
                                <div class="columnActionTexte">
                                    Trophée - Nb de trophées gagnés
                                </div>
                                <div class="columnGameNumber">
                                    1
                                </div>
                            </div>
                            <div class="flex-container-modal-Niveau">
                                <div class="columnActionTexte">
                                    Action collective - Nb d'actions lancées
                                </div>
                                <div class="columnGameNumber">
                                    0
                                </div>
                            </div>
                        </div>  
                    </div>
                    <!-- Modal footer -->
                    <div class="modal-footer">
                        <!-- <nuxt-link to="/home">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Fermer</button>
                        </nuxt-link> -->
                        <nuxt-link to="/home" type="button" class="btn btn-danger" data-dismiss="modal">Fermer</nuxt-link>
                    </div>
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </div><!-- /#modalBox -->
        <!-- End Modal Player -->
    </div><!-- /.container-fluid -->
</template>

<script>
  export default {
    layout: 'layoutFront',
  }
</script>

<style>

</style>
