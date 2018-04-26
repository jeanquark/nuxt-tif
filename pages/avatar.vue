<template>
  <div class="container-fluid">
    <!-- The monAvatar -->
    <div id="modalBox">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
        <!-- Modal Header -->
        <div class="modal-header text-center">
          <span class="modal-title">Ton avatar</span>
          <nuxt-link to="/">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" class="white-text"><i class="fa fa-arrow-circle-left"></i></span>
            </button>
          </nuxt-link>         
        </div>
        <!-- Modal body -->
        <div id="modalBoxContent" class="modal-body">
          <div class="flex-container-modal-MyTeam">
            <h1>Envie de changer de tête ?</h1>
          </div>
          <div class="flex-container-modalAvatar">
            <div style="flex-grow: 1"><img src="/images/avatar.png" class="imgModalAvatar"/></div>
          </div>
          <div class="flex-container-modalMenuAvatar">
            <div style="flex-grow: 1"><span class="textModalMenuAvatar">SKIN</span></div>
            <div style="flex-grow: 1"><span class="textModalMenuAvatar">FACE</span></div>
            <div style="flex-grow: 1"><span class="textModalMenuAvatar">HAIR</span></div>
            <div style="flex-grow: 1"><span class="textModalMenuAvatar">BACK</span></div>
          </div>
          <div class="flex-container-modalAvatarImg">
            <div><img src="/images/avatar.png" class="imgModalAvatar"/></div>
            <div><img src="/images/avatar.png" class="imgModalAvatar"/></div>
            <div><img src="/images/avatar.png" class="imgModalAvatar"/></div>
            <div><img src="/images/avatar.png" class="imgModalAvatar"/></div>
            <div><img src="/images/avatar.png" class="imgModalAvatar"/></div>
            <div><img src="/images/avatar.png" class="imgModalAvatar"/></div>
            <div><img src="/images/avatar.png" class="imgModalAvatar"/></div>
            <div><img src="/images/avatar.png" class="imgModalAvatar"/></div>
            <div><img src="/images/avatar.png" class="imgModalAvatar"/></div>
            <div><img src="/images/avatar.png" class="imgModalAvatar"/></div>
            <div><img src="/images/avatar.png" class="imgModalAvatar"/></div>
            <div><img src="/images/avatar.png" class="imgModalAvatar"/></div>
          </div>  
        </div>
        <!-- Modal footer -->
        <div class="modal-footer">
          <a href="index.html"><button type="button" class="btn btn-danger" data-dismiss="modal">Annule tout !</button></a>
          <a href="index.html"><button type="button" class="btn btn-success" data-dismiss="modal">Allez, valide !</button></a>
        </div>
        </div>
      </div>
    </div>
    <!-- End monAvatar -->
  </div>
</template>

<script>
export default {
  layout: 'layoutFront',
}
</script>

<style>

</style>
