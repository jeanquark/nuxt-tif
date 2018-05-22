<template>
    <div class="container-fluid">
        <!-- The monAvatar -->
        <div id="modalBox">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <!-- Modal Header -->
                    <div class="modal-header text-center">
                        <span class="modal-title">Ton avatar</span>
                        <nuxt-link to="/home">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" class="white-text"><i class="fa fa-arrow-circle-left"></i></span>
                            </button>
                        </nuxt-link>         
                    </div>
                    <!-- Modal body -->
                    <div id="modalBoxContent" class="modal-body">
                        <div class="flex-container-modal-MyTeam">
                            <h1>Envie de changer de tête ?</h1>
                            <!-- <h2> arr: {{ this.arr }} <br /><br />obj: {{ this.obj }}<br /><br /></h2> -->
                                <!-- <h2> user: {{ this.loadedUser.avatar.name }}</h2>  -->
                            <!-- <h2>loadedUser: {{ this.loadedUser }}</h2><br /><br /> -->
                            <!-- <h2>loadedTeams: {{ this.loadedTeams }}</h2> -->
                        </div>
                        <div class="flex-container-modalAvatar" v-if="this.arr.length > 0">
                            <!-- <div style="flex-grow: 1"><img src="/images/avatar.png" class="imgModalAvatar"/></div> -->
                            <div style="flex-grow: 1"><img src="" ref="mergedImage" class="imgModalAvatar" width="300px" /></div>
                        </div>
                        <div class="flex-container-modalAvatar" v-else>
                            <h4 style="color: orangered; margin: 0 auto; font: normal 150%/1 'bangers', Helvetica, sans-serif;">Sélectionne les caractéristiques</h4><br /><br />
                        </div>
                        <div class="flex-container-modalMenuAvatar">
                            <div style="flex-grow: 1; cursor: pointer;" :class="{active: this.gender === 'female'}" @click="selectGender('female')"><span class="textModalMenuAvatar">FEMALE</span></div>
                            <div style="flex-grow: 1; cursor: pointer;" :class="{active: this.gender === 'male'}" @click="selectGender('male')"><span class="textModalMenuAvatar">MALE</span></div>
                        </div>
                        <div class="flex-container-modalMenuAvatar">
                            <div style="flex-grow: 1; cursor: pointer;" :class="{active: this.bodyPart === 'background'}" @click="selectBodyPart('background')"><span class="textModalMenuAvatar">BACKGROUND</span></div>
                            <div style="flex-grow: 1; cursor: pointer;" :class="{active: this.bodyPart === 'body'}" @click="selectBodyPart('body')"><span class="textModalMenuAvatar">BODY</span></div>
                            <div style="flex-grow: 1; cursor: pointer;" :class="{active: this.bodyPart === 'skin'}" @click="selectBodyPart('skin')"><span class="textModalMenuAvatar">SKIN</span></div>
                            <div style="flex-grow: 1; cursor: pointer;" :class="{active: this.bodyPart === 'eyes'}" @click="selectBodyPart('eyes')"><span class="textModalMenuAvatar">EYES</span></div>
                            <div style="flex-grow: 1; cursor: pointer;" :class="{active: this.bodyPart === 'mouth'}" @click="selectBodyPart('mouth')"><span class="textModalMenuAvatar">MOUTH</span></div>
                            <div style="flex-grow: 1; cursor: pointer;" :class="{active: this.bodyPart === 'face'}" @click="selectBodyPart('face')"><span class="textModalMenuAvatar">FACE</span></div>
                            <div style="flex-grow: 1; cursor: pointer;" :class="{active: this.bodyPart === 'hair'}" @click="selectBodyPart('hair')"><span class="textModalMenuAvatar">HAIR</span></div>
                        </div>
                        <div class="flex-container-modalAvatarImg">
                            <div v-for="avatar in loadedAvatars" style="cursor: pointer;" @click="addToMerge(avatar.gender, avatar.type, avatar.image, avatar.name)"><img :src="'/images/avatars/' + avatar.gender + '/' + avatar.type + '/' + avatar.image" class="imgModalAvatar" :class="{active: (avatar.name === background ||  avatar.name === body || avatar.name === skin || avatar.name === eyes || avatar.name === mouth || avatar.name === face || avatar.name === hair) }" /></div>
                        </div>
                    </div>
                    <!-- Modal footer -->
                    <div class="modal-footer">
                        <div class="progress" style="width: 50%; margin: 0 auto;" v-if="arr.length > 0">
                            <div class="progress-bar bg-success" role="progressbar" :style="{width: progress + '%'}" :aria-valuenow="progress" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-success" data-dismiss="modal" :disabled="loading || disabled" :loading="loading" @click="saveImage">Allez, valide ! <i v-bind:class="{'fa fa-spinner fa-spin' : loading}"></i></button>
                        <nuxt-link to="/home"><button type="button" class="btn btn-danger" data-dismiss="modal">Annule tout !</button></nuxt-link>
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
    export default {
        layout: 'layoutFront',
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
                    this.gender = ''
                    this.gender = array[1]
                    this.background = array[2]
                    this.body = array[3]
                    this.skin = array[4]
                    this.eyes = array[5]
                    this.mouth = array[6]
                    this.face = array[7]
                    // this.cache = array[8]
                    this.hair = array[8]

                    this.obj = [
                        { "image": '/images/avatars/' + this.gender + '/background/' + this.background + '.png', 'gender': this.gender, 'type': 'background' },
                        { 'image': '/images/avatars/' + this.gender + '/body/' + this.body + '.png', 'gender': this.gender, 'type': 'body' },
                        { 'image': '/images/avatars/' + this.gender + '/skin/' + this.skin + '.png', 'gender': this.gender, 'type': 'skin' },
                        { 'image': '/images/avatars/' + this.gender + '/eyes/' + this.eyes + '.png', 'gender': this.gender, 'type': 'eyes' }, 
                        { 'image': '/images/avatars/' + this.gender + '/mouth/' + this.mouth + '.png', 'gender': this.gender, 'type': 'mouth' }, 
                        { 'image': '/images/avatars/' + this.gender + '/face/' + this.face + '.png', 'gender': this.gender, 'type': 'face' }, 
                        // { 'image': '/images/avatars/' + this.gender + '/cache/' + this.cache + '.png', 'gender': this.gender, 'type': 'cache' }, 
                        { 'image': '/images/avatars/' + this.gender + '/hair/' + this.hair + '.png', 'gender': this.gender, 'type': 'hair' }
                    ]
                    this.mergeImages()
                }
                // console.log(array)
            }
        },
        data () {
            return {
                loading: false,
                gender: 'female',
                bodyPart: 'background',
                name: '',
                background: '',
				body: '',
                skin: '',
                eyes: '',
                mouth: '',
                face: '',
                // cache: '',
                hair: '',
                avatars: [],
                arr: [],
                obj: [],
                progress: 0
            }
        },
        computed: {
            loadedUser () {
                return this.$store.getters['users/loadedUser']
            },
            loadedAvatars () {
                return this.avatars.filter(avatar => avatar.gender === this.gender && avatar.type === this.bodyPart)
            },
            disabled () {
                return this.background == '' && this.body == '' && this.skin == '' && this.eyes == '' && this.mouth == '' && this.face == ''
            },
            loadedTeams () {
                return this.$store.getters['teams/loadedTeams']
            }
        },
        methods: {
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
            addToMerge(gender, type, image, name) {
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
                    this.hair = name
                }

                // Remove any existing image of the same type
                let found = false;
                for (let i = 0; i < this.obj.length; i++) {
                    if (this.obj[i].type === type) {
                        const index = this.obj.indexOf(this.obj[i])
                        this.obj.splice(index, 1)
                        found = true;
                        break;
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
            }
        }
    }
</script>

<style scoped>
    .active {
        background-color: orangered;
    }
</style>
