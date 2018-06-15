<template>
    <div class="container-fluid">
        <!-- The monAvatar -->
        <div id="modalBox">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <!-- Modal Header -->
                    <div class="modal-header text-center">
                        <span class="modal-title">{{ $t('pages.user-avatar.your_avatar')}}</span>
                        <nuxt-link to="/home">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" class="white-text"><i class="fa fa-arrow-circle-left"></i></span>
                            </button>
                        </nuxt-link>         
                    </div>
                    <!-- Modal body -->
                    <div id="modalBoxContent" class="modal-body">

                        <div class="flex-container-modal-MyTeam">
                            <h1>{{ $t('pages.user-avatar.want_to_change_your_mind') }}</h1>
                        </div>
						<div class="flex-container-modalAvatar" v-cloak>
							<div class="flex-container-modalMenuAvatar no-border">
								<div style="flex-grow: 1; cursor: pointer;" :class="{active: this.gender === 'female'}" @click="selectGender('female')"><span class="textModalMenuAvatar">{{ $t('pages.user-avatar.female') }}</span></div>
								<div style="flex-grow: 1; cursor: pointer;" :class="{active: this.gender === 'male'}" @click="selectGender('male')"><span class="textModalMenuAvatar">{{ $t('pages.user-avatar.male') }}</span></div>
							</div>						
                            <div class="imgAvatarUser"  v-if="this.arr.length > 0"><img src="" ref="mergedImage" class="imgModalAvatar"/></div>
							<div class="flex-container-modalAvatar" v-else>
								<h4 style="color: orangered; margin: 0 auto; font: normal 150%/1 'bangers', Helvetica, sans-serif;">{{ $t('pages.user-avatar.select') }}</h4><br /><br />
							</div>
							<div class="flex-container-modalMenuAvatar no-border">
								<div style="flex-grow: 1; cursor: pointer;" :class="{active: this.bodyPart === 'background'}" @click="selectBodyPart('background')"><span class="textModalMenuAvatar">{{ $t('pages.user-avatar.background') }}</span></div>
								<div style="flex-grow: 1; cursor: pointer;" :class="{active: this.bodyPart === 'skin'}" @click="selectBodyPart('skin')"><span class="textModalMenuAvatar">{{ $t('pages.user-avatar.skin') }}</span></div>
								<div style="flex-grow: 1; cursor: pointer;" :class="{active: this.bodyPart === 'eyes'}" @click="selectBodyPart('eyes')"><span class="textModalMenuAvatar">{{ $t('pages.user-avatar.eyes') }}</span></div>
								<div style="flex-grow: 1; cursor: pointer;" :class="{active: this.bodyPart === 'eyebrows'}" @click="selectBodyPart('eyebrows')"><span class="textModalMenuAvatar">{{ $t('pages.user-avatar.eyebrows') }}</span></div>
								<div style="flex-grow: 1; cursor: pointer;" :class="{active: this.bodyPart === 'mouth'}" @click="selectBodyPart('mouth')"><span class="textModalMenuAvatar">{{ $t('pages.user-avatar.mouth') }}</span></div>
								<div style="flex-grow: 1; cursor: pointer;" :class="{active: this.bodyPart === 'hair'}" @click="selectBodyPart('hair')"><span class="textModalMenuAvatar">{{ $t('pages.user-avatar.hair') }}</span></div>
								<div style="flex-grow: 1; cursor: pointer;" :class="{active: this.bodyPart === 'beard'}" @click="selectBodyPart('beard')"><span class="textModalMenuAvatar">{{ $t('pages.user-avatar.beard') }}</span></div>
								<!-- <div style="flex-grow: 1; cursor: pointer;" :class="{active: this.bodyPart === 'glasses'}" @click="selectBodyPart('glasses')"><span class="textModalMenuAvatar">{{ $t('pages.user-avatar.glasses') }}</span></div> -->
								 <div style="flex-grow: 1; cursor: pointer;" :class="{active: this.bodyPart === 'clothes'}" @click="selectBodyPart('clothes')"><span class="textModalMenuAvatar">{{ $t('pages.user-avatar.clothes') }}</span></div>
								<!-- <div style="flex-grow: 1; cursor: pointer;" :class="{active: this.bodyPart === 'accessory'}" @click="selectBodyPart('accessory')"><span class="textModalMenuAvatar">{{ $t('pages.user-avatar.accessory') }}</span></div> -->
							</div>
                        </div>
                        <!-- Display dummy text while loading -->
                        <div v-if="loadedAvatars.length == 0">
                            <h1 class="loading text-center">{{ $t('pages.user-avatar.loading') }}</h1>
                            <!-- <content-placeholders>
                                <content-placeholders-heading :img="true" />
                                <content-placeholders-text :lines="3" />
                            </content-placeholders> -->
                        </div>
						<div v-if="this.bodyPart === 'background'">
                            <div class="flex-container-modalAvatarImg">
                                <div v-for="avatar in loadedAvatars.filter(avatar => avatar.property === 'backgroundform')" style="cursor: pointer;" @click="addToMerge(avatar.gender, avatar.type, avatar.image, avatar.imageSmall, avatar.name)"><img :src="'/images/avatars/' + avatar.gender + '/' + avatar.type + '/' + avatar.imageSmall" class="imgModalAvatar" :class="{active: (avatar.name === 'background_form' + backgroundform) }" /></div>
                            </div>
                            <div class="flex-container-modalAvatarImgColor">
                                <div v-for="avatar in loadedAvatars.filter(avatar => avatar.property === 'backgroundcolor')" style="cursor: pointer;" @click="addToMerge(avatar.gender, avatar.type, avatar.image, avatar.imageSmall, avatar.name)"><img :src="'/images/avatars/' + avatar.gender + '/' + avatar.type + '/' + avatar.imageSmall" class="imgModalAvatar" :class="{active: (avatar.name === 'background_color' + backgroundcolor) }" /></div>
                            </div>
                        </div>
						<div v-if="this.bodyPart === 'skin'">
                            <div class="flex-container-modalAvatarImg">
                                <div v-for="avatar in loadedAvatars.filter(avatar => avatar.property === 'skinform')" style="cursor: pointer;" @click="addToMerge(avatar.gender, avatar.type, avatar.image, avatar.imageSmall, avatar.name)"><img :src="'/images/avatars/' + avatar.gender + '/' + avatar.type + '/' + avatar.imageSmall" class="imgModalAvatar" :class="{active: (avatar.name === 'skin_form' + skinform) }" /></div>
                            </div>
                            <div class="flex-container-modalAvatarImgColor">
                                <div v-for="avatar in loadedAvatars.filter(avatar => avatar.property === 'skincolor')" style="cursor: pointer;" @click="addToMerge(avatar.gender, avatar.type, avatar.image, avatar.imageSmall, avatar.name)"><img :src="'/images/avatars/' + avatar.gender + '/' + avatar.type + '/' + avatar.imageSmall" class="imgModalAvatar" :class="{active: (avatar.name === 'skin_color' + skincolor) }" /></div>
                            </div>
                        </div> 
						<div v-if="this.bodyPart === 'eyes'">
                            <div class="flex-container-modalAvatarImg">
                                <div v-for="avatar in loadedAvatars.filter(avatar => avatar.property === 'eyesform')" style="cursor: pointer;" @click="addToMerge(avatar.gender, avatar.type, avatar.image, avatar.imageSmall, avatar.name)"><img :src="'/images/avatars/' + avatar.gender + '/' + avatar.type + '/' + avatar.imageSmall" class="imgModalAvatar" :class="{active: (avatar.name === 'eyes_form' + eyesform) }" /></div>
                            </div>
                            <div class="flex-container-modalAvatarImgColor">
                                <div v-for="avatar in loadedAvatars.filter(avatar => avatar.property === 'eyescolor')" style="cursor: pointer;" @click="addToMerge(avatar.gender, avatar.type, avatar.image, avatar.imageSmall, avatar.name)"><img :src="'/images/avatars/' + avatar.gender + '/' + avatar.type + '/' + avatar.imageSmall" class="imgModalAvatar" :class="{active: (avatar.name === 'eyes_color' + eyescolor) }" /></div>
                            </div>
                        </div>
						<div v-if="this.bodyPart === 'eyebrows'">
                            <div class="flex-container-modalAvatarImg">
                                <div v-for="avatar in loadedAvatars.filter(avatar => avatar.property === 'eyebrowsform')" style="cursor: pointer;" @click="addToMerge(avatar.gender, avatar.type, avatar.image, avatar.imageSmall, avatar.name)"><img :src="'/images/avatars/' + avatar.gender + '/' + avatar.type + '/' + avatar.imageSmall" class="imgModalAvatar" :class="{active: (avatar.name === 'eyebrows_form' + eyebrowsform) }" /></div>
                            </div>
                            <div class="flex-container-modalAvatarImgColor">
                                <div v-for="avatar in loadedAvatars.filter(avatar => avatar.property === 'eyebrowscolor')" style="cursor: pointer;" @click="addToMerge(avatar.gender, avatar.type, avatar.image, avatar.imageSmall, avatar.name)"><img :src="'/images/avatars/' + avatar.gender + '/' + avatar.type + '/' + avatar.imageSmall" class="imgModalAvatar" :class="{active: (avatar.name === 'eyebrows_color' + eyebrowscolor) }" /></div>
                            </div>
                        </div>
						<div v-if="this.bodyPart === 'mouth'">
                            <div class="flex-container-modalAvatarImg">
                                <div v-for="avatar in loadedAvatars.filter(avatar => avatar.property === 'mouthform')" style="cursor: pointer;" @click="addToMerge(avatar.gender, avatar.type, avatar.image, avatar.imageSmall, avatar.name)"><img :src="'/images/avatars/' + avatar.gender + '/' + avatar.type + '/' + avatar.imageSmall" class="imgModalAvatar" :class="{active: (avatar.name === 'mouth_form' + mouthform) }" /></div>
                            </div>
                            <div class="flex-container-modalAvatarImgColor">
                                <div v-for="avatar in loadedAvatars.filter(avatar => avatar.property === 'mouthcolor')" style="cursor: pointer;" @click="addToMerge(avatar.gender, avatar.type, avatar.image, avatar.imageSmall, avatar.name)"><img :src="'/images/avatars/' + avatar.gender + '/' + avatar.type + '/' + avatar.imageSmall" class="imgModalAvatar" :class="{active: (avatar.name === 'mouth_color' + mouthcolor) }" /></div>
                            </div>
                        </div>
						<div v-if="this.bodyPart === 'hair'">
                            <div class="flex-container-modalAvatarImg">
                                <div v-for="avatar in loadedAvatars.filter(avatar => avatar.property === 'haircut')" style="cursor: pointer;" @click="addToMerge(avatar.gender, avatar.type, avatar.image, avatar.imageSmall, avatar.name)"><img :src="'/images/avatars/' + avatar.gender + '/' + avatar.type + '/' + avatar.imageSmall" class="imgModalAvatar" :class="{active: (avatar.name === 'hair_cut' + haircut) }" /></div>
                            </div>
                            <div class="flex-container-modalAvatarImgColor">
                                <div v-for="avatar in loadedAvatars.filter(avatar => avatar.property === 'haircolor')" style="cursor: pointer;" @click="addToMerge(avatar.gender, avatar.type, avatar.image, avatar.imageSmall, avatar.name)"><img :src="'/images/avatars/' + avatar.gender + '/' + avatar.type + '/' + avatar.imageSmall" class="imgModalAvatar" :class="{active: (avatar.name === 'hair_color' + haircolor) }" /></div>
                            </div>
                        </div>
						<div v-if="this.bodyPart === 'beard'">
                            <div class="flex-container-modalAvatarImg">
                                <div v-for="avatar in loadedAvatars.filter(avatar => avatar.property === 'beardform')" style="cursor: pointer;" @click="addToMerge(avatar.gender, avatar.type, avatar.image, avatar.imageSmall, avatar.name)"><img :src="'/images/avatars/' + avatar.gender + '/' + avatar.type + '/' + avatar.imageSmall" class="imgModalAvatar" :class="{active: (avatar.name === 'beard_form' + beardform) }" /></div>
                            </div>
                            <div class="flex-container-modalAvatarImgColor">
                                <div v-for="avatar in loadedAvatars.filter(avatar => avatar.property === 'beardcolor')" style="cursor: pointer;" @click="addToMerge(avatar.gender, avatar.type, avatar.image, avatar.imageSmall, avatar.name)"><img :src="'/images/avatars/' + avatar.gender + '/' + avatar.type + '/' + avatar.imageSmall" class="imgModalAvatar" :class="{active: (avatar.name === 'beard_color' + beardcolor) }" /></div>
                            </div>
                        </div>
						<div v-if="this.bodyPart === 'glasses'">
                            <div class="flex-container-modalAvatarImg">
                                <div v-for="avatar in loadedAvatars.filter(avatar => avatar.property === 'glassesform')" style="cursor: pointer;" @click="addToMerge(avatar.gender, avatar.type, avatar.image, avatar.imageSmall, avatar.name)"><img :src="'/images/avatars/' + avatar.gender + '/' + avatar.type + '/' + avatar.imageSmall" class="imgModalAvatar" :class="{active: (avatar.name === 'glasses_form' + glassesform) }" /></div>
                            </div>
                            <div class="flex-container-modalAvatarImgColor">
                                <div v-for="avatar in loadedAvatars.filter(avatar => avatar.property === 'glassescolor')" style="cursor: pointer;" @click="addToMerge(avatar.gender, avatar.type, avatar.image, avatar.imageSmall, avatar.name)"><img :src="'/images/avatars/' + avatar.gender + '/' + avatar.type + '/' + avatar.imageSmall" class="imgModalAvatar" :class="{active: (avatar.name === 'glasses_color' + glassescolor) }" /></div>
                            </div>
                        </div>
						<div v-if="this.bodyPart === 'clothes'">
                            <div class="flex-container-modalAvatarImg">
                                <div v-for="avatar in loadedAvatars.filter(avatar => avatar.property === 'clothesform')" style="cursor: pointer;" @click="addToMerge(avatar.gender, avatar.type, avatar.image, avatar.imageSmall, avatar.name)"><img :src="'/images/avatars/' + avatar.gender + '/' + avatar.type + '/' + avatar.imageSmall" class="imgModalAvatar" :class="{active: (avatar.name === 'clothes_form' + clothesform) }" /></div>
                            </div>
                            <div class="flex-container-modalAvatarImgColor">
                                <div v-for="avatar in loadedAvatars.filter(avatar => avatar.property === 'clothescolor')" style="cursor: pointer;" @click="addToMerge(avatar.gender, avatar.type, avatar.image, avatar.imageSmall, avatar.name)"><img :src="'/images/avatars/' + avatar.gender + '/' + avatar.type + '/' + avatar.imageSmall" class="imgModalAvatar" :class="{active: (avatar.name === 'clothes_color' + clothescolor) }" /></div>
                            </div>
                        </div>
						<div v-if="this.bodyPart === 'accessory'">
                            <div class="flex-container-modalAvatarImg">
                                <div v-for="avatar in loadedAvatars.filter(avatar => avatar.property === 'accessoryform')" style="cursor: pointer;" @click="addToMerge(avatar.gender, avatar.type, avatar.image, avatar.imageSmall, avatar.name)"><img :src="'/images/avatars/' + avatar.gender + '/' + avatar.type + '/' + avatar.imageSmall" class="imgModalAvatar" :class="{active: (avatar.name === 'accessory_form' + accessoryform) }" /></div>
                            </div>
                            <div class="flex-container-modalAvatarImgColor">
                                <div v-for="avatar in loadedAvatars.filter(avatar => avatar.property === 'accessorycolor')" style="cursor: pointer;" @click="addToMerge(avatar.gender, avatar.type, avatar.image, avatar.imageSmall, avatar.name)"><img :src="'/images/avatars/' + avatar.gender + '/' + avatar.type + '/' + avatar.imageSmall" class="imgModalAvatar" :class="{active: (avatar.name === 'accessory_color' + accessorycolor) }" /></div>
                            </div>
                        </div>
						
                        <!-- <div style="color: #000;">
							<h3>loadedAvatars.length: {{ loadedAvatars.length }}</h3><br />
							<h3>totalPages: {{ totalPages }}</h3><br />
                        </div> -->

                        <hr>
                        <div class="d-flex justify-content-center">
                            <paginate
                                  :page-count="totalPages"
                                  :click-handler="changePage"
                                  :prev-text="'Prev'"
                                  :next-text="'Next'"
                                  :container-class="'pagination pagination-sm'"
                                  :page-class="'page-item'" 
                                  :prev-class="'page-item'" 
                                  :next-class="'page-item'"
                                  :page-link-class="'page-link'" 
                                  :prev-link-class="'page-link'" 
                                  :next-link-class="'page-link'"
                                >
                            </paginate>
                        </div>
						<hr>
                        <!-- Modal footer -->
                        <div class="modal-footer">
                            <div class="progress" style="width: 50%; margin: 0 auto;" v-if="arr.length > 0">
                                <div class="progress-bar bg-success" role="progressbar" :style="{width: progress + '%'}" :aria-valuenow="progress" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-success" data-dismiss="modal" :disabled="loading || disabled" :loading="loading" @click="saveImage">{{ $t('pages.user-avatar.go_and_validate') }} <i v-bind:class="{'fa fa-spinner fa-spin' : loading}"></i></button>
                            <nuxt-link to="/home"><button type="button" class="btn btn-danger" data-dismiss="modal">{{ $t('pages.user-avatar.cancel_all') }}</button></nuxt-link>
                        </div>
                    </div><!-- /#modalBoxContent -->
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </div><!-- /#modalBox -->
        <!-- End monAvatar -->
    </div><!-- /.container-fluid -->
</template>

<script>
    import firebase from 'firebase'
    import mergeImages from 'merge-images'
    import moment from 'moment'
    import Noty from 'noty'
    // import contentPlaceholders from '~/plugins/vue-placeholders.js'
    // import Paginate from 'vuejs-paginate'
    import Paginate from 'vuejs-paginate/src/components/Paginate'
    export default {
        layout: 'layoutFront',
        // components: { contentPlaceholders },
        components: { Paginate },
        created () {
            const avatarsArray = []
            firebase.database().ref('avatars').once('value', function (snapshot) {
                // console.log(snapshot.val())
                for (const key in snapshot.val()) {
                    avatarsArray.push({...snapshot.val()[key]})
                }
                // console.log(avatarsArray)
            })
            this.avatars = avatarsArray

            if (this.$store.getters['users/loadedUser'].avatar) {
                const array = this.$store.getters['users/loadedUser'].avatar.name.split('_')
                console.log(array)
                if (array.length >= 14) {
                    this.gender = array[1]
                    this.background = array[2]
                    this.backgroundform = this.background ? this.background.match(/\d+/)[0].substr(0, 2) : '01'
                    this.backgroundcolor = this.background ? this.background.match(/\d+/)[0].substr(2, 4) : '001'
                    this.skin = array[3]
                    this.skinform = this.skin ? this.skin.match(/\d+/)[0].substr(0, 2) : '01'
                    this.skincolor = this.skin ? this.skin.match(/\d+/)[0].substr(2, 4) : '01'
                    this.eyes = array[4]
                    this.eyesform = this.eyes ? this.eyes.match(/\d+/)[0].substr(0, 2) : '01'
                    this.eyescolor = this.eyes ? this.eyes.match(/\d+/)[0].substr(2, 4) : '01'
                    this.eyebrows = array [5]
                    this.eyebrowsform = this.eyebrows ? this.eyebrows.match(/\d+/)[0].substr(0, 2) : '01'
                    this.eyebrowscolor = this.eyebrows ? this.eyebrows.match(/\d+/)[0].substr(2, 4) : '01'
                    this.mouth = array[6]
                    this.mouthform = this.mouth ? this.mouth.match(/\d+/)[0].substr(0, 2) : '01'
                    this.mouthscolor = this.mouth ? this.mouth.match(/\d+/)[0].substr(2, 4) : '01'
                    this.hair = array[7]
                    this.haircut = this.hair ? this.hair.match(/\d+/)[0].substr(0, 2) : '01'
                    this.haircolor = this.hair ? this.hair.match(/\d+/)[0].substr(2, 4) : '01'
                    this.beard = array[8]
                    this.beardform = this.beard ? this.beard.match(/\d+/)[0].substr(0, 2) : '01'
                    this.beardcolor = this.beard ? this.beard.match(/\d+/)[0].substr(2, 4) : '01'
                    this.glasses = array[9]
                    this.glassesform = this.glasses ? this.glasses.match(/\d+/)[0].substr(0, 2) : '01'
                    this.glassescolor = this.glasses ? this.glasses.match(/\d+/)[0].substr(2, 4) : '01'
                    this.clothes = array[10]
                    this.clothesform = this.clothes ? this.clothes.match(/\d+/)[0].substr(0, 2) : '01'
                    this.clothescolor = this.clothes ? this.clothes.match(/\d+/)[0].substr(2, 4) : '01'
                    this.accessory = array[11]
                    this.accessoryform = this.accessory ? this.accessory.match(/\d+/)[0].substr(0, 2) : '01'
                    this.accessorycolor = this.accessory ? this.accessory.match(/\d+/)[0].substr(2, 4) : '01'
					this.cache = array[12]
					this.thisisfan = array[13]

                    this.obj = [
                        { "image": '/images/avatars/' + this.gender + '/background/' + this.background + '.png', 'gender': this.gender, 'type': 'background' },
                        { 'image': '/images/avatars/' + this.gender + '/skin/' + this.skin + '.png', 'gender': this.gender, 'type': 'skin' },
                        { 'image': '/images/avatars/' + this.gender + '/eyes/' + this.eyes + '.png', 'gender': this.gender, 'type': 'eyes' },
                        { 'image': '/images/avatars/' + this.gender + '/eyebrows/' + this.eyebrows + '.png', 'gender': this.gender, 'type': 'eyebrows' },  
                        { 'image': '/images/avatars/' + this.gender + '/mouth/' + this.mouth + '.png', 'gender': this.gender, 'type': 'mouth' }, 
                        { 'image': '/images/avatars/' + this.gender + '/hair/' + this.hair + '.png', 'gender': this.gender, 'type': 'hair' },
                        { 'image': '/images/avatars/' + this.gender + '/beard/' + this.beard + '.png', 'gender': this.gender, 'type': 'beard' },
                        { 'image': '/images/avatars/' + this.gender + '/glasses/' + this.glasses + '.png', 'gender': this.gender, 'type': 'glasses' },
                        { 'image': '/images/avatars/' + this.gender + '/clothes/' + this.clothes + '.png', 'gender': this.gender, 'type': 'clothes' },
                        { 'image': '/images/avatars/' + this.gender + '/accessory/' + this.accessory + '.png', 'gender': this.gender, 'type': 'accessory' },
						{ 'image': '/images/avatars/' + this.gender + '/cache/' + 'cache.png', 'gender': this.gender, 'type': 'cache' },
						{ 'image': '/images/avatars/' + this.gender + '/thisisfan/' + 'thisisfan.png', 'gender': this.gender, 'type': 'thisisfan' }
                    ]
                    // console.log(this.hair)
                    // console.log(this.haircut)
                    // console.log(this.haircolor)
                    this.mergeImages()
                } 
            } else { // No previous avatar is registered
                console.log('No defined avatar yet')
                this.obj = [
						{ "image": '/images/avatars/' + this.gender + '/background/' + this.background + '.png', 'gender': this.gender, 'type': 'background' },
                        { 'image': '/images/avatars/' + this.gender + '/skin/' + this.skin + '.png', 'gender': this.gender, 'type': 'skin' },
                        { 'image': '/images/avatars/' + this.gender + '/eyes/' + this.eyes + '.png', 'gender': this.gender, 'type': 'eyes' },
                        { 'image': '/images/avatars/' + this.gender + '/eyebrows/' + this.eyebrows + '.png', 'gender': this.gender, 'type': 'eyebrows' },  
                        { 'image': '/images/avatars/' + this.gender + '/mouth/' + this.mouth + '.png', 'gender': this.gender, 'type': 'mouth' }, 
                        { 'image': '/images/avatars/' + this.gender + '/hair/' + this.hair + '.png', 'gender': this.gender, 'type': 'hair' },
                        { 'image': '/images/avatars/' + this.gender + '/beard/' + this.beard + '.png', 'gender': this.gender, 'type': 'beard' },
                        { 'image': '/images/avatars/' + this.gender + '/glasses/' + this.glasses + '.png', 'gender': this.gender, 'type': 'glasses' },
                        { 'image': '/images/avatars/' + this.gender + '/clothes/' + this.clothes + '.png', 'gender': this.gender, 'type': 'clothes' },
                        { 'image': '/images/avatars/' + this.gender + '/accessory/' + this.accessory + '.png', 'gender': this.gender, 'type': 'accessory' },
						{ 'image': '/images/avatars/' + this.gender + '/cache/' + 'cache.png', 'gender': this.gender, 'type': 'cache' },
						{ 'image': '/images/avatars/' + this.gender + '/thisisfan/' + 'thisisfan.png', 'gender': this.gender, 'type': 'thisisfan' }
                ]
                this.mergeImages()
            }
        },
        data () {
            return {
                loading: false,
                gender: 'female',
                bodyPart: 'background',
                name: '',
                background: 'background01001',
				backgroundform: '01',
				backgroundcolor: '001',
                skin: 'skin0101',
				skinform: '01',
				skincolor: '01',
                eyes: 'eyes0101',
				eyesform: '01',
				eyescolor: '01',
                eyebrows: 'eyebrows0101',
				eyebrowsform: '01',
				eyebrowscolor: '01',
                mouth: 'mouth01',
				mouthform: '01',
				mouthcolor: '01',
                hair: 'hair0101',
                haircut: '01',
                haircolor: '01',
                beard: 'beard0101',
				beardform: '01',
				beardcolor: '01',
                glasses: 'glasses0101',
				glassesform: '01',
				glassescolor: '01',
                clothes: 'clothes01001',
				clothesform: '01',
				clothescolor: '001',
                accessory: 'accessory0101',
				accessoryform: '01',
				accessorycolor: '01',
				cache: '',
				thisisfan: '',
                avatars: [],
                arr: [],
                obj: [],
                progress: 0,
                currentPage: 1,
                itemsPerPage: 8,
            }
        },
        computed: {
            loadedUser () {
                return this.$store.getters['users/loadedUser']
            },
            loadedAvatars () {
                return this.avatars.filter(avatar => avatar.gender === this.gender && avatar.type === this.bodyPart)
            },
            loadedAvatars2 () {
                let index = this.currentPage * this.itemsPerPage
                return this.avatars.filter(avatar => avatar.gender === this.gender && avatar.type === this.bodyPart).slice(index - this.itemsPerPage, index)
            },
            disabled () {
                return this.background == '' && this.skin == '' && this.eyes == '' && this.eyebrows == '' && this.mouth == '' && this.hair == '' && this.beard == '' && this.glasses == '' && this.clothes == '' && this.accessory == ''
            },
            loadedTeams () {
                return this.$store.getters['teams/loadedTeams']
            },
            totalPages () {
                return Math.ceil(this.loadedAvatars.length / this.itemsPerPage)
            }
        },
	    methods: {
	    	updateUserLanguage2 (language) {
	    		console.log('updateUsersLanguage')
	    		console.log(language)
				this.$store.dispatch('users/updateUser', {language: language})
				console.log(this.$i18n)
				// return this.$router.push(localePath({ name: 'user-preferences'}))
				// return this.$router.push(this.$i18n.localePath({ name: 'user-preferences'}))
				if (this.$i18n.locale != this.$i18n.defaultLocale) {
					return this.$router.push('/' + this.$i18n.locale + '/user/preferences')
				} else {
					return this.$router.push('/user/preferences')
				}
	    	},
            selectGender(gender) {
                // console.log(gender)
                this.gender = gender
                if (gender === 'female') {
                    for (let i = 0; i < this.obj.length; i++) {
                        this.obj[i].image = this.obj[i].image.replace('male', 'female')
                        this.obj[i].gender = 'female'
                    }
                    this.mergeImages()
                } else {
                    for (let i = 0; i < this.obj.length; i++) {
                        this.obj[i].image = this.obj[i].image.replace('female', 'male')
                        this.obj[i].gender = 'male'
                    }
                    this.mergeImages()
                }
            },
            selectBodyPart(part) {
                // console.log(part)
                this.bodyPart = part
            },
            addToMerge(gender, type, image, imageSmall, name, property) {
                // console.log('addToMerge')
                this.name = name
                if (name.includes('background')) {
                    if (name.includes('background_form')) {
                        // Retrieve backgroundform integer in string
                        this.backgroundform = this.name.match(/\d+/)[0]
                    }
                    if (name.includes('background_color')) {
                        // Retrieve backgroundcolor integer in string
                        this.backgroundcolor = this.name.match(/\d+/)[0]
                    }
                    this.background = 'background' + this.backgroundform + this.backgroundcolor
                    image = this.background + '.png'
                } else if (name.includes('skin')) {
                    if (name.includes('skin_form')) {
                        // Retrieve skinform integer in string
                        this.skinform = this.name.match(/\d+/)[0]
                    }
                    if (name.includes('skin_color')) {
                        // Retrieve skincolor integer in string
                        this.skincolor = this.name.match(/\d+/)[0]
                    }
                    this.skin = 'skin' + this.skinform + this.skincolor
                    image = this.skin + '.png'
                } else if (name.includes('eyes')) {
                    if (name.includes('eyes_form')) {
                        // Retrieve eyesform integer in string
                        this.eyesform = this.name.match(/\d+/)[0]
                    }
                    if (name.includes('eyes_color')) {
                        // Retrieve eyescolor integer in string
                        this.eyescolor = this.name.match(/\d+/)[0]
                    }
                    this.eyes = 'eyes' + this.eyesform + this.eyescolor
                    image = this.eyes + '.png'
                } else if (name.includes('eyebrows')) {
                    if (name.includes('eyebrows_form')) {
                        // Retrieve eyebrowsform integer in string
                        this.eyebrowsform = this.name.match(/\d+/)[0]
                    }
                    if (name.includes('eyebrows_color')) {
                        // Retrieve eyebrowscolor integer in string
                        this.eyebrowscolor = this.name.match(/\d+/)[0]
                    }
                    this.eyebrows = 'eyebrows' + this.eyebrowsform + this.eyebrowscolor
                    image = this.eyebrows + '.png'
                } else if (name.includes('mouth')) {
                    if (name.includes('mouth_form')) {
                        // Retrieve mouthform integer in string
                        this.mouthform = this.name.match(/\d+/)[0]
                    }
                    if (name.includes('mouth_color')) {
                        // Retrieve mouthcolor integer in string
                        this.mouthcolor = this.name.match(/\d+/)[0]
                    }
                    this.mouth = 'mouth' + this.mouthform + this.mouthcolor
                    image = this.mouth + '.png'
                } else if (name.includes('hair')) {
                    if (name.includes('hair_cut')) {
                        // Retrieve haircut integer in string
                        this.haircut = this.name.match(/\d+/)[0]
                    }
                    if (name.includes('hair_color')) {
                        // Retrieve haircolor integer in string
                        this.haircolor = this.name.match(/\d+/)[0]
                    }
                    this.hair = 'hair' + this.haircut + this.haircolor
                    image = this.hair + '.png'
				} else if (name.includes('beard')) {
                    if (name.includes('beard_form')) {
                        // Retrieve beardform integer in string
                        this.beardform = this.name.match(/\d+/)[0]
                    }
                    if (name.includes('beard_color')) {
                        // Retrieve beardcolor integer in string
                        this.beardcolor = this.name.match(/\d+/)[0]
                    }
                    this.beard = 'beard' + this.beardform + this.beardcolor
                    image = this.beard + '.png'
				} else if (name.includes('glasses')) {
                    if (name.includes('glasses_form')) {
                        // Retrieve glassesform integer in string
                        this.glassesform = this.name.match(/\d+/)[0]
                    }
                    if (name.includes('glasses_color')) {
                        // Retrieve glassescolor integer in string
                        this.glassescolor = this.name.match(/\d+/)[0]
                    }
                    this.glasses = 'glasses' + this.glassesform + this.glassescolor
                    image = this.glasses + '.png'
				} else if (name.includes('clothes')) {
                    if (name.includes('clothes_form')) {
                        // Retrieve clothesform integer in string
                        this.clothesform = this.name.match(/\d+/)[0]
                    }
                    if (name.includes('clothes_color')) {
                        // Retrieve clothescolor integer in string
                        this.clothescolor = this.name.match(/\d+/)[0]
                    }
                    this.clothes = 'clothes' + this.clothesform + this.clothescolor
                    image = this.clothes + '.png'
				} else if (name.includes('accessory')) {
                    if (name.includes('accessory_form')) {
                        // Retrieve accessoryform integer in string
                        this.accessoryform = this.name.match(/\d+/)[0]
                    }
                    if (name.includes('accessory_color')) {
                        // Retrieve accessorycolor integer in string
                        this.accessorycolor = this.name.match(/\d+/)[0]
                    }
                    this.accessory = 'accessory' + this.accessoryform + this.accessorycolor
                    image = this.accessory + '.png'
                } else if (name.includes('cache')) {
					this.cache = name
				} else if (name.include('thisisfan')) {
					this.cache = name
				}

                // Remove any existing image of the same type
                let found = false;
                for (let i = 0; i < this.obj.length; i++) {
                    if (this.obj[i].type === type) {
                        const index = this.obj.indexOf(this.obj[i])
                        this.obj.splice(index, 1)
                        found = true
                        break
                    }
                }

                // Add image to the object array
                if (type === 'background') {
                    this.obj.splice(0, 0, {'image': '/images/avatars/' + gender + '/' + type + '/' + image, 'gender': gender, 'type': type})
                } else if (type === 'skin') {
                    this.obj.splice(1, 0, {'image': '/images/avatars/' + gender + '/' + type + '/' + image, 'gender': gender, 'type': type})
                } else if (type === 'eyes') {
                    this.obj.splice(10, 0, {'image': '/images/avatars/' + gender + '/' + type + '/' + image, 'gender': gender, 'type': type})
                } else if (type === 'eyebrows') {
                    this.obj.splice(9, 0, {'image': '/images/avatars/' + gender + '/' + type + '/' + image, 'gender': gender, 'type': type})
                } else if (type === 'mouth') {
                    this.obj.splice(8, 0, {'image': '/images/avatars/' + gender + '/' + type + '/' + image, 'gender': gender, 'type': type})
                } else if (type === 'beard') {
                    this.obj.splice(7, 0, {'image': '/images/avatars/' + gender + '/' + type + '/' + image, 'gender': gender, 'type': type})
                } else if (type === 'hair') {
                    this.obj.splice(6, 0, {'image': '/images/avatars/' + gender + '/' + type + '/' + image, 'gender': gender, 'type': type})
                } else if (type === 'glasses') {
                    this.obj.splice(5, 0, {'image': '/images/avatars/' + gender + '/' + type + '/' + image, 'gender': gender, 'type': type})
                } else if (type === 'clothes') {
                    this.obj.splice(4, 0, {'image': '/images/avatars/' + gender + '/' + type + '/' + image, 'gender': gender, 'type': type})
                } else if (type === 'accessory') {
                    this.obj.splice(3, 0, {'image': '/images/avatars/' + gender + '/' + type + '/' + image, 'gender': gender, 'type': type})
                } else {
                    this.obj.splice(2, 0, {'image': '/images/avatars/' + gender + '/' + type + '/' + image, 'gender': gender, 'type': type})
                }
                this.mergeImages()
            },
            mergeImages() {
                // Build an array of image paths from the object
                // console.log('mergeImages')
                this.arr = []
                // this.arr = this.obj
                for (let i = 0; i < this.obj.length; i++) {
                    this.arr.push(this.obj[i].image)
                }

                if (process.browser) {
                    mergeImages(this.arr)
                    .then(
                        b64 => this.$refs.mergedImage.src = b64
                    )
                }
            },
            saveImage() {
                // console.log('saveImage')
                this.loading = true

                // Save image in Firebase Cloud Storage
                const now = moment().unix()
                const userId = firebase.auth().currentUser.uid
                // const image_name = userId + '_' + this.gender + '_' + this.background + '_' + this.body + '_' + this.skin + '_' + this.eyes + '_' + this.mouth + '_' + this.face + '_' + this.hair + '_' + this.cache + '_' + this.thisisfan
                const image_name = userId + '_' + this.gender + '_' + this.background + '_' + this.skin + '_' + this.eyes + '_' + this.eyebrows + '_' + this.mouth + '_' + this.hair + '_' + this.beard + '_' + this.glasses + '_' + this.clothes + '_' + this.accessory
                console.log(image_name)
                let storageRef = firebase.storage().ref('/images/avatars/' + image_name)
                let image = this.$refs.mergedImage.src

                var uploadTask = storageRef.putString(image, 'data_url')

                uploadTask.on('state_changed', (snapshot) => {
                    // Observe state change events such as progress, pause, and resume
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                    this.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    console.log('Upload is ' + this.progress + '% done')
                    switch (snapshot.state) {
                        case firebase.storage.TaskState.PAUSED: // or 'paused'
                        console.log('Upload is paused')
                        break
                        case firebase.storage.TaskState.RUNNING: // or 'running'
                        console.log('Upload is running')
                        break
                    }
                }, (error) => {
                  // Handle unsuccessful uploads
                  console.log(error)
                  this.loading = false
                }, () => {
                    // Delete old avatar if it exists
                    if (this.loadedUser.avatar) {
                        var oldImageRef = firebase.storage().ref('/images/avatars/' + this.loadedUser.avatar.name)
                        oldImageRef.delete().then(function() {
                            console.log('Successfully deleted old image')
                        }).catch(function(error) {
                            console.log('An error occured and the old image could not be deleted:')
                            console.log(error)
                        })
                    }

                    // Handle successful uploads on complete
                    firebase.database().ref('/users/' + userId + '/avatar').set({
                        name: uploadTask.snapshot.metadata.name,
                        url: uploadTask.snapshot.downloadURL,
                        updated_at: now,
                    })

                    // console.log('Uploaded a data_url string!')
                    this.loading = false
                    new Noty({type: 'success', text: 'Successfully uploaded image!', timeout: 5000, theme: 'metroui'}).show()
                })
            },
            changePage (page) {
                console.log('page: ' + page)
                this.currentPage = page
                let index = this.currentPage * this.itemsPerPage
                console.log('index: ' + index)
                console.log(this.loadedAvatars.slice(index - this.itemsPerPage, index))
                this.loadedAvatars.slice(index - this.itemsPerPage, index)
            },
        }
    }
</script>

<style scoped>
    [v-cloak] > * { display:none; }
    [v-cloak]::before { 
        content: " ";
        display: block;
        width: 16px;
        height: 16px;
        background-image: url('data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==');
    }
    .active {
        background-color: orangered;
        border: 2px solid red;
    }
    .pagination {
        margin: 0;
		padding: 0;
    }
    .page-link {
        font-size: 12px !important;
        font-color: orangered;
        /*background: orangered;*/
        /*border-color: orangered;*/
    }
    .page-item {
        color: #ffffff;
    }
    .page-item.active .page-link {
        background-color: orangered;
        border-color: orangered;
    }
    loading {
      color: black;
     }
</style>
