<template>
    <div class="container-fluid">
        {{ this.loadedUser }}
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
								<h4 style="color: orangered; margin: 0 auto; font: normal 150%/1 'bangers', Helvetica, sans-serif;">Sélectionne les caractéristiques</h4><br /><br />
							</div>
							<div class="flex-container-modalMenuAvatar no-border">
								<div style="flex-grow: 1; cursor: pointer;" :class="{active: this.bodyPart === 'background'}" @click="selectBodyPart('background')"><span class="textModalMenuAvatar">{{ $t('pages.user-avatar.background') }}</span></div>
								<div style="flex-grow: 1; cursor: pointer;" :class="{active: this.bodyPart === 'body'}" @click="selectBodyPart('body')"><span class="textModalMenuAvatar">{{ $t('pages.user-avatar.clothes') }}</span></div>
								<div style="flex-grow: 1; cursor: pointer;" :class="{active: this.bodyPart === 'skin'}" @click="selectBodyPart('skin')"><span class="textModalMenuAvatar">{{ $t('pages.user-avatar.skin') }}</span></div>
								<div style="flex-grow: 1; cursor: pointer;" :class="{active: this.bodyPart === 'eyes'}" @click="selectBodyPart('eyes')"><span class="textModalMenuAvatar">{{ $t('pages.user-avatar.eyes') }}</span></div>
								<div style="flex-grow: 1; cursor: pointer;" :class="{active: this.bodyPart === 'mouth'}" @click="selectBodyPart('mouth')"><span class="textModalMenuAvatar">{{ $t('pages.user-avatar.mouth') }}</span></div>
								<div style="flex-grow: 1; cursor: pointer;" :class="{active: this.bodyPart === 'face'}" @click="selectBodyPart('face')"><span class="textModalMenuAvatar">{{ $t('pages.user-avatar.face') }}</span></div>
								<div style="flex-grow: 1; cursor: pointer;" :class="{active: this.bodyPart === 'hair'}" @click="selectBodyPart('hair')"><span class="textModalMenuAvatar">{{ $t('pages.user-avatar.hair') }}</span></div>
							</div>
                        </div>

                        <br /><br />
                        <!-- Display dummy text while loading -->
                        <div v-if="loadedAvatars.length == 0">
                            <h1 class="text-center" style="color: #000;">Loading...</h1>
                            <!-- <content-placeholders>
                                <content-placeholders-heading :img="true" />
                                <content-placeholders-text :lines="3" />
                            </content-placeholders> -->
                        </div>

                        <div class="flex-container-modalAvatarImg" v-if="this.bodyPart === 'hair'">
                            <p style="color: #000;">{{ this.hair }}</p>
                            <div style="width: 50%;">
                                <div v-for="avatar in loadedAvatars.filter(avatar => avatar.property === 'haircut')" style="cursor: pointer;" @click="addToMerge(avatar.gender, avatar.type, avatar.image, avatar.imageSmall, avatar.name)"><img :src="'/images/avatars/' + avatar.gender + '/' + avatar.type + '/' + avatar.imageSmall" class="imgModalAvatar" :class="{active: (avatar.name === 'hair_cut' + haircut) }" /></div>
                                }
                            </div>
                            <div style="width: 50%;">
                                <div v-for="avatar in loadedAvatars.filter(avatar => avatar.property === 'color')" style="cursor: pointer;" @click="addToMerge(avatar.gender, avatar.type, avatar.image, avatar.imageSmall, avatar.name)"><img :src="'/images/avatars/' + avatar.gender + '/' + avatar.type + '/' + avatar.imageSmall" class="imgModalAvatar" :class="{active: (avatar.name === 'hair_color' + haircolor) }" /></div>
                            </div>
                        </div>
                        <div class="flex-container-modalAvatarImg" v-else>
                            <div v-for="avatar in loadedAvatars2" style="cursor: pointer;" @click="addToMerge(avatar.gender, avatar.type, avatar.image, avatar.imageSmall, avatar.name)"><img :src="'/images/avatars/' + avatar.gender + '/' + avatar.type + '/' + avatar.imageSmall" class="imgModalAvatar" :class="{active: (avatar.name === background ||  avatar.name === body || avatar.name === skin || avatar.name === eyes || avatar.name === mouth || avatar.name === face || avatar.name === hair) }" />
                            </div>
                        </div>

                         <div style="color: #000;">
                                <h3>loadedAvatars.length: {{ loadedAvatars.length }}</h3><br />
                                <h3>totalPages: {{ totalPages }}</h3><br />
                                <!-- <h3>avatars: {{ this.avatars }}</h3><br /> -->
                            </div>

                        <br /><br /><hr><br />
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
                            <br /><br />
                        </div>
                    </div>
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
                </div>
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
                if (array.length >= 9) {
                    this.gender = array[1]
                    this.background = array[2]
                    this.body = array[3]
                    this.skin = array[4]
                    this.eyes = array[5]
                    this.mouth = array[6]
                    this.face = array[7]
                    // this.cache = array[8]
                    this.hair = array[8]
                    this.haircut = this.hair ? this.hair.match(/\d+/)[0].substr(0, 2) : '01'
                    this.haircolor = this.hair ? this.hair.match(/\d+/)[0].substr(2, 4) : '01'
					// this.cache = array[9]
					// this.thisisfan = array[10]

                    this.obj = [
                        { "image": '/images/avatars/' + this.gender + '/background/' + this.background + '.png', 'gender': this.gender, 'type': 'background' },
                        { 'image': '/images/avatars/' + this.gender + '/body/' + this.body + '.png', 'gender': this.gender, 'type': 'body' },
                        { 'image': '/images/avatars/' + this.gender + '/skin/' + this.skin + '.png', 'gender': this.gender, 'type': 'skin' },
                        { 'image': '/images/avatars/' + this.gender + '/eyes/' + this.eyes + '.png', 'gender': this.gender, 'type': 'eyes' }, 
                        { 'image': '/images/avatars/' + this.gender + '/mouth/' + this.mouth + '.png', 'gender': this.gender, 'type': 'mouth' }, 
                        { 'image': '/images/avatars/' + this.gender + '/face/' + this.face + '.png', 'gender': this.gender, 'type': 'face' }, 
                        // { 'image': '/images/avatars/' + this.gender + '/cache/' + this.cache + '.png', 'gender': this.gender, 'type': 'cache' }, 
                        { 'image': '/images/avatars/' + this.gender + '/hair/' + this.hair + '.png', 'gender': this.gender, 'type': 'hair' },
						// { 'image': '/images/avatars/' + this.gender + '/cache/' + 'cache.png', 'gender': this.gender, 'type': 'cache' },
						// { 'image': '/images/avatars/' + this.gender + '/thisisfan/' + 'thisisfan.png', 'gender': this.gender, 'type': 'thisisfan' }
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
                    { 'image': '/images/avatars/' + this.gender + '/body/' + this.body + '.png', 'gender': this.gender, 'type': 'body' },
                    { 'image': '/images/avatars/' + this.gender + '/skin/' + this.skin + '.png', 'gender': this.gender, 'type': 'skin' },
                    { 'image': '/images/avatars/' + this.gender + '/eyes/' + this.eyes + '.png', 'gender': this.gender, 'type': 'eyes' }, 
                    { 'image': '/images/avatars/' + this.gender + '/mouth/' + this.mouth + '.png', 'gender': this.gender, 'type': 'mouth' }, 
                    { 'image': '/images/avatars/' + this.gender + '/face/' + this.face + '.png', 'gender': this.gender, 'type': 'face' }, 
                    // { 'image': '/images/avatars/' + this.gender + '/cache/' + this.cache + '.png', 'gender': this.gender, 'type': 'cache' }, 
                    { 'image': '/images/avatars/' + this.gender + '/hair/' + this.hair + '.png', 'gender': this.gender, 'type': 'hair' },
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
                background: 'background0',
				body: 'body0',
                skin: 'skin1',
                eyes: 'eyes1',
                mouth: 'mouth1',
                face: 'face1',
                // cache: '',
                hair: 'hair0101',
                haircut: '01',
                haircolor: '01',
				cache: '',
				thisisfan: '',
                avatars: [],
                arr: [],
                obj: [],
                progress: 0,
                currentPage: 1,
                itemsPerPage: 28,
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
                return this.background == '' && this.body == '' && this.skin == '' && this.eyes == '' && this.mouth == '' && this.face == '' && this.hair == ''
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
                    this.background = name
                } else if (name.includes('body')) {
                    this.body = name
                } else if (name.includes('skin')) {
                    this.skin = name
                } else if (name.includes('eyes')) {
                    this.eyes = name
                } else if (name.includes('mouth')) {
                    this.mouth = name   
                } else if (name.includes('face')) {
                    this.face = name
                // } else if (name.includes('cache')) {
                //  this.cache = name
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
                } else if (type === 'eyes') {
                    this.obj.splice(6, 0, {'image': '/images/avatars/' + gender + '/' + type + '/' + image, 'gender': gender, 'type': type})
                } else if (type === 'mouth') {
                    this.obj.splice(5, 0, {'image': '/images/avatars/' + gender + '/' + type + '/' + image, 'gender': gender, 'type': type})
                } else if (type === 'face') {
                    this.obj.splice(4, 0, {'image': '/images/avatars/' + gender + '/' + type + '/' + image, 'gender': gender, 'type': type})
                } else if (type === 'hair') {
                    this.obj.splice(3, 0, {'image': '/images/avatars/' + gender + '/' + type + '/' + image, 'gender': gender, 'type': type})
                } else {
                    this.obj.splice(1, 0, {'image': '/images/avatars/' + gender + '/' + type + '/' + image, 'gender': gender, 'type': type})
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
                const image_name = userId + '_' + this.gender + '_' + this.background + '_' + this.body + '_' + this.skin + '_' + this.eyes + '_' + this.mouth + '_' + this.face + '_' + this.hair
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
    }
    .page-link {
        font-size: 12px !important;
        font-color: #ccc;
        /*background: orangered;*/
        /*border-color: orangered;*/
    }
    .page-item {
        color: #000;
    }
    .page-item.active .page-link {
        background-color: #387BCA;
        /*background-color: orangered;*/
        border-color: #387BCA;
        /*border-color: orangered;*/
    }
</style>
