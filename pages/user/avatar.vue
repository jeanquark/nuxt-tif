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
                    </div><!-- /.modal-header -->

                    <!-- Modal body -->
                    <div id="modalBoxContent" class="modal-body container">
        
                        <div class="row">
                            <div class="col-12 text-center">
                                <h1 style="color: #000;">Create your avatar</h1>
                            </div>
                            <p style="color: #000;">
                                <!-- loadedUser: {{ this.loadedUser }}<br /><br /> -->
                                <!-- gender: {{ this.gender }}<br /><br /> -->
                                <!-- type: {{ this.type }}<br /><br /> -->
                                <!-- background: {{ this.background }}<br /><br /> -->
                                <!-- skin: {{ this.skin }}<br /><br /> -->
                                <!-- tattoo: {{ this.tattoo }}<br /><br /> -->
                                <!-- makeup: {{ this.makeup }}<br /><br /> -->
                                <!-- beard: {{ this.beard }}<br /><br /> -->
                                <!-- clothes: {{ this.clothes }}<br /><br /> -->
                                <!-- arrayOfImagesToMerge: {{ this.arrayOfImagesToMerge }}<br /><br /> -->
                            </p>
                        </div><!-- /.row -->

                        <!-- Avatar image large screens -->
                        <div class="d-none d-sm-none d-md-none d-lg-block" v-cloak>
                            <div class="row" style="color: #000;">
                                <div class="col-2">
                                    <ul class="list-group">
                                        <li class="list-group-item text-center" :class="{active: this.gender === 'female'}" @click="selectGender('female')">
                                            <span>{{ $t('pages.user-avatar.female') }}</span>
                                        </li>
                                        <li class="list-group-item text-center" :class="{active: this.gender === 'male'}" @click="selectGender('male')">
                                            <span>{{ $t('pages.user-avatar.male') }}</span>
                                        </li>
                                    </ul>
                                </div>

                                <div class="col-6 text-center">
                                    <img src="" ref="mergedImage" class="text-center avatar-img" width="100%" />
                                </div>

                                <div class="col-4">
                                    <ul class="list-group">
                                        <li class="list-group-item text-center" :class="{active: this.type === 'background'}" @click="selectType('background')">
                                            <span>{{ $t('pages.user-avatar.background') }}</span>
                                        </li>
                                        <li class="list-group-item text-center" :class="{active: this.type === 'skin'}" @click="selectType('skin')">
                                            <span>{{ $t('pages.user-avatar.skin') }}</span>
                                        </li>
                                        <li class="list-group-item text-center" :class="{active: this.type === 'eyes'}" @click="selectType('eyes')">
                                            <span>{{ $t('pages.user-avatar.eyes') }}</span>
                                        </li>
                                        <li class="list-group-item text-center" :class="{active: this.type === 'eyebrows'}" @click="selectType('eyebrows')">
                                            <span>{{ $t('pages.user-avatar.eyebrows') }}</span>
                                        </li>
                                        <li class="list-group-item text-center" :class="{active: this.type === 'mouth'}" @click="selectType('mouth')">
                                            <span>{{ $t('pages.user-avatar.mouth') }}</span>
                                        </li>
                                        <li class="list-group-item text-center" :class="{active: this.type === 'hair'}" @click="selectType('hair')">
                                            <span>{{ $t('pages.user-avatar.hair') }}</span>
                                        </li>
                                        <li class="list-group-item text-center" :class="{active: this.type === 'makeup'}" @click="selectType('makeup')" v-if="this.gender === 'female'">
                                            <span>{{ $t('pages.user-avatar.makeup') }}</span>
                                        </li>
                                        <li class="list-group-item text-center" :class="{active: this.type === 'beard'}" @click="selectType('beard')" v-if="this.gender === 'male'">
                                            <span>{{ $t('pages.user-avatar.beard') }}</span>
                                        </li>
                                        <li class="list-group-item text-center" :class="{active: this.type === 'tattoo'}" @click="selectType('tattoo')">
                                            <span>{{ $t('pages.user-avatar.tattoo') }}</span>
                                        </li>
                                        <li class="list-group-item text-center" :class="{active: this.type === 'accessories'}" @click="selectType('accessories')">
                                            <span>{{ $t('pages.user-avatar.accessories') }}</span>
                                        </li>
                                        <li class="list-group-item text-center" :class="{active: this.type === 'clothes'}" @click="selectType('clothes')">
                                            <span>{{ $t('pages.user-avatar.clothes') }}</span>
                                        </li>
                                    </ul>
                                </div><!-- /.col-4 -->
                            </div><!-- /.row -->
                            
                        </div><!-- /.d-md-none -->
                        
                        <!-- Avatar image medium and small screens -->
                        <div class="d-block d-sm-block d-md-block d-lg-none">
                            <div class="row">
                                <div class="col-12 text-center">
                                    <img src="" ref="mergedImage2" class="text-center avatar-img" width="100%" />
                                    <!-- <img src="https://picsum.photos/200/300" class="text-center avatar-img" width="100%" /> -->
                                    <br />
                                </div>
                                <br />

                                <div class="col-12 text-center">
                                    <ul class="list-inline">
                                        <li class="list-inline-item" :class="{active: this.gender === 'female'}" @click="selectGender('female')">
                                            <span>{{ $t('pages.user-avatar.female') }}</span>
                                        </li>
                                        <li class="list-inline-item" :class="{active: this.gender === 'male'}" @click="selectGender('male')">
                                            <span>{{ $t('pages.user-avatar.male') }}</span>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-12 text-center">
                                    <ul class="list-inline">
                                        <li class="list-inline-item" :class="{active: this.type === 'background'}" @click="selectType('background')">
                                            <span>{{ $t('pages.user-avatar.background') }}</span>
                                        </li>
                                        <li class="list-inline-item" :class="{active: this.type === 'skin'}" @click="selectType('skin')">
                                            <span>{{ $t('pages.user-avatar.skin') }}</span>
                                        </li>
                                        <li class="list-inline-item" :class="{active: this.type === 'eyes'}" @click="selectType('eyes')">
                                            <span>{{ $t('pages.user-avatar.eyes') }}</span>
                                        </li>
                                        <li class="list-inline-item" :class="{active: this.type === 'eyebrows'}" @click="selectType('eyebrows')">
                                            <span>{{ $t('pages.user-avatar.eyebrows') }}</span>
                                        </li>
                                        <li class="list-inline-item" :class="{active: this.type === 'mouth'}" @click="selectType('mouth')">
                                            <span>{{ $t('pages.user-avatar.mouth') }}</span>
                                        </li>
                                        <li class="list-inline-item" :class="{active: this.type === 'hair'}" @click="selectType('hair')">
                                            <span>{{ $t('pages.user-avatar.hair') }}</span>
                                        </li>
                                        <li class="list-inline-item" :class="{active: this.type === 'makeup'}" @click="selectType('makeup')" v-if="this.gender === 'female'">
                                            <span>{{ $t('pages.user-avatar.makeup') }}</span>
                                        </li>
                                        <li class="list-inline-item" :class="{active: this.type === 'beard'}" @click="selectType('beard')" v-if="this.gender === 'male'">
                                            <span>{{ $t('pages.user-avatar.beard') }}</span>
                                        </li>
                                        <li class="list-inline-item" :class="{active: this.type === 'tattoo'}" @click="selectType('tattoo')">
                                            <span>{{ $t('pages.user-avatar.tattoo') }}</span>
                                        </li>
                                        <li class="list-inline-item" :class="{active: this.type === 'accessories'}" @click="selectType('accessories')">
                                            <span>{{ $t('pages.user-avatar.accessories') }}</span>
                                        </li>
                                        <li class="list-inline-item" :class="{active: this.type === 'clothes'}" @click="selectType('clothes')">
                                            <span>{{ $t('pages.user-avatar.clothes') }}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div><!-- /.row -->
                        </div><!-- ./d-lg-none -->
                        <br />
                        <div class="row">
                            <div class="col-md-12 col-lg-6">
                                <background-shape v-if="this.type === 'background'" :background="this.background" @addToMergeEmitter="addToMerge"></background-shape>

                                <skin-shape v-if="this.type === 'skin'" :gender="this.gender" :skin="this.skin" @addToMergeEmitter="addToMerge"></skin-shape>
                                
                                <tattoo-shape v-if="this.type === 'tattoo'" :gender="this.gender" :tattoo="this.tattoo" @addToMergeEmitter="addToMerge"></tattoo-shape>                            
                                <eyes-shape v-if="this.type === 'eyes'" :gender="this.gender" :eyes="this.eyes" @addToMergeEmitter="addToMerge"></eyes-shape>
                                
                                <eyebrows-shape v-if="this.type === 'eyebrows'" :gender="this.gender" :eyebrows="this.eyebrows" @addToMergeEmitter="addToMerge"></eyebrows-shape>
                                
                                <mouth-shape v-if="this.type === 'mouth'" :gender="this.gender" :mouth="this.mouth" @addToMergeEmitter="addToMerge"></mouth-shape>

                                <hair-shape v-if="this.type === 'hair'" :gender="this.gender" :hair="this.hair" @addToMergeEmitter="addToMerge"></hair-shape>
                                
                                <makeup-shape v-if="this.type === 'makeup'" :makeup="this.makeup" @addToMergeEmitter="addToMerge"></makeup-shape>                            

                                <beard-shape v-if="this.type === 'beard'" :beard="this.beard" @addToMergeEmitter="addToMerge"></beard-shape>
                                
                                <accessories-shape v-if="this.type === 'accessories'" :gender="this.gender" :accessories="this.accessories" @addToMergeEmitter="addToMerge"></accessories-shape>

                                <clothes-shape v-if="this.type === 'clothes'" :gender="this.gender" :clothes="this.clothes" @addToMergeEmitter="addToMerge"></clothes-shape>
                            </div>

                            <div class="col-md-12 col-lg-6">
                                <background-color v-if="this.type === 'background'" :background="background" @addToMergeEmitter="addToMerge"></background-color>

                                <skin-color v-if="this.type === 'skin'" :gender="this.gender" :skin="skin" @addToMergeEmitter="addToMerge"></skin-color>
                                
                                <tattoo-color v-if="this.type === 'tattoo'" :gender="this.gender" :tattoo="this.tattoo" @addToMergeEmitter="addToMerge"></tattoo-color>
                                
                                <eyes-color v-if="this.type === 'eyes'" :gender="this.gender" :eyes="eyes" @addToMergeEmitter="addToMerge"></eyes-color>
                                
                                <eyebrows-color v-if="this.type === 'eyebrows'" :gender="this.gender" :eyebrows="eyebrows" @addToMergeEmitter="addToMerge"></eyebrows-color>
                                
                                <mouth-color v-if="this.type === 'mouth'" :gender="this.gender" :mouth="mouth" @addToMergeEmitter="addToMerge"></mouth-color>
                                
                                <hair-color v-if="this.type === 'hair'" :gender="this.gender" :hair="hair" @addToMergeEmitter="addToMerge"></hair-color>

                                <makeup-color v-if="this.type === 'makeup'" :makeup="this.makeup" @addToMergeEmitter="addToMerge"></makeup-color>

                                <beard-color v-if="this.type === 'beard'" :beard="this.beard" @addToMergeEmitter="addToMerge"></beard-color>
                                
                                <accessories-color v-if="this.type === 'accessories'" :gender="this.gender" :accessories="accessories" @addToMergeEmitter="addToMerge"></accessories-color>

                                <clothes-color v-if="this.type === 'clothes'" :gender="this.gender" :clothes="clothes" @addToMergeEmitter="addToMerge"></clothes-color>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <!-- Modal footer -->
                                <div class="modal-footer">
                                    <div class="progress" style="width: 50%; margin: 0 auto;" v-if="arrayOfImagesToMerge.length > 0">
                                        <div class="progress-bar bg-success" role="progressbar" :style="{width: progress + '%'}" :aria-valuenow="progress" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>

                                <div class="modal-footer">
                                    <button class="btn btn-success" data-dismiss="modal" @click="saveImage">{{ $t('pages.user-avatar.go_and_validate') }}</button>
                                    <nuxt-link to="/home"><button type="button" class="btn btn-danger" data-dismiss="modal">{{ $t('pages.user-avatar.cancel_all') }}</button></nuxt-link>
                                </div>
                            </div>
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
    import moment from 'moment'
    import Noty from 'noty'
    // import { Carousel3d, Slide } from 'vue-carousel-3d'
    import mergeImages from 'merge-images'
    import BackgroundShape from '~/components/avatar/BackgroundShape.vue'
    import BackgroundColor from '~/components/avatar/BackgroundColor.vue'
    import SkinShape from '~/components/avatar/SkinShape.vue'
    import SkinColor from '~/components/avatar/SkinColor.vue'
    import TattooShape from '~/components/avatar/TattooShape.vue'
    import TattooColor from '~/components/avatar/TattooColor.vue'
    import EyesShape from '~/components/avatar/EyesShape.vue'
    import EyesColor from '~/components/avatar/EyesColor.vue'
    import EyebrowsShape from '~/components/avatar/EyebrowsShape.vue'
    import EyebrowsColor from '~/components/avatar/EyebrowsColor.vue'
    import MouthShape from '~/components/avatar/MouthShape.vue'
    import MouthColor from '~/components/avatar/MouthColor.vue'
    import HairShape from '~/components/avatar/HairShape.vue'
    import HairColor from '~/components/avatar/HairColor.vue'
    import MakeupShape from '~/components/avatar/MakeupShape.vue'
    import MakeupColor from '~/components/avatar/MakeupColor.vue'
    import BeardShape from '~/components/avatar/BeardShape.vue'
    import BeardColor from '~/components/avatar/BeardColor.vue'
    import AccessoriesShape from '~/components/avatar/AccessoriesShape.vue'
    import AccessoriesColor from '~/components/avatar/AccessoriesColor.vue'
    import ClothesShape from '~/components/avatar/ClothesShape.vue'
    import ClothesColor from '~/components/avatar/ClothesColor.vue'
    export default {
        layout: 'layoutFront',
        components: {
            // Carousel3d,
            // Slide,
            BackgroundShape,
            BackgroundColor,
            SkinShape,
            SkinColor,
            TattooShape,
            TattooColor,
            EyesShape,
            EyesColor,
            EyebrowsShape,
            EyebrowsColor,
            MouthShape,
            MouthColor,
            HairShape,
            HairColor,
            MakeupShape,
            MakeupColor,
            BeardShape,
            BeardColor,
            AccessoriesShape,
            AccessoriesColor,
            ClothesShape,
            ClothesColor,
        },
        created () {
            if (process.client) {
                if (this.$store.getters['users/loadedUser'].avatar) {
                    const array = this.$store.getters['users/loadedUser'].avatar.name.split('_')
                    console.log('array: ', array)
                    // Ensure there are at least 12 layers in the image (including userId and gender)
                    if (array.length >= 12) {
                        this.gender = array[1]
                        this.background = array[2]
                        this.skin = array[3]
                        this.tattoo = array[4]
                        this.eyes = array[5]
                        this.eyebrows = array[6]
                        this.mouth = array[7]
                        this.hair = array[8]
                        this.makeup = array[9]
                        this.beard = array[9]
                        this.accessories = array[10]
                        this.clothes = array[11]
                        if (this.gender === 'female') {
                            this.arrayOfImagesToMerge = [
                                '/images/avatars/jm/unisex/background/' + this.background + '.png',
                                '/images/avatars/jm/female/skin/' + this.skin + '.png',
                                '/images/avatars/jm/female/tattoo/' + this.tattoo + '.png',
                                '/images/avatars/jm/female/eyes/' + this.eyes + '.png',
                                '/images/avatars/jm/female/eyebrows/' + this.eyebrows + '.png',
                                '/images/avatars/jm/female/mouth/' + this.mouth + '.png',
                                '/images/avatars/jm/female/hair/' + this.hair + '.png',
                                '/images/avatars/jm/female/makeup/' + this.makeup + '.png',
                                '/images/avatars/jm/female/accessories/' + this.accessories + '.png',
                                '/images/avatars/jm/female/clothes/' + this.clothes + '.png',
                            ]
                        }
                        if (this.gender === 'male') {
                            this.arrayOfImagesToMerge = [
                                '/images/avatars/jm/unisex/background/' + this.background + '.png',
                                '/images/avatars/jm/male/skin/' + this.skin + '.png',
                                '/images/avatars/jm/male/tattoo/' + this.tattoo + '.png',
                                '/images/avatars/jm/male/eyes/' + this.eyes + '.png',
                                '/images/avatars/jm/male/eyebrows/' + this.eyebrows + '.png',
                                '/images/avatars/jm/male/mouth/' + this.mouth + '.png',
                                '/images/avatars/jm/male/hair/' + this.hair + '.png',
                                '/images/avatars/jm/male/beard/' + this.beard + '.png',
                                '/images/avatars/jm/male/accessories/' + this.accessories + '.png',
                                '/images/avatars/jm/male/clothes/' + this.clothes + '.png',
                            ]
                        }
                    }
                } else {
                    // User has no avatar registered. Build a default avatar image
                    this.gender = 'female'
                    this.background = 'background01001'
                    this.skin = 'skin0101'
                    this.tattoo = 'tattoo0101'
                    this.eyes = 'eyes0101'
                    this.eyebrows = 'eyebrows0101'
                    this.mouth = 'mouth0101'
                    this.hair = 'hair0101'
                    this.makeup = 'makeup0101'
                    this.accessories = 'accessories0101'
                    this.clothes = 'clothes01001'
                    this.arrayOfImagesToMerge = [
                        '/images/avatars/jm/unisex/background/' + this.background + '.png',
                        '/images/avatars/jm/female/skin/' + this.skin + '.png',
                        '/images/avatars/jm/female/tattoo/' + this.tattoo + '.png',
                        '/images/avatars/jm/female/eyes/' + this.eyes + '.png',
                        '/images/avatars/jm/female/eyebrows/' + this.eyebrows + '.png',
                        '/images/avatars/jm/female/mouth/' + this.mouth + '.png',
                        '/images/avatars/jm/female/hair/' + this.hair + '.png',
                        '/images/avatars/jm/female/makeup/' + this.makeup + '.png',
                        '/images/avatars/jm/female/accessories/' + this.accessories + '.png',
                        '/images/avatars/jm/female/clothes/' + this.clothes + '.png',
                    ]
                }

                // Call mergeImages method to build the image
                this.mergeImages()
            }
        },
        mounted () {
            this.showCarousel = true
        },
        data () {
            return {
                avatars: [],
                gender: '',
                type: 'background',
                arrayOfImagesToMerge: Array(11),
                background: '',
                skin: '',
                tattoo: '',
                eyes: '',
                eyebrows: '',
                mouth: '',
                hair: '',
                makeup: '',
                beard: '',
                accessories: '',
                clothes: '',
                progress: 0,
                showCarousel: false,
                slides: 2,
            }
        },
        computed: {
            loadedUser () {
                return this.$store.getters['users/loadedUser']
            }
        },
        methods: {
            // Convert single digit number (2) to 2 digits number (02)
            convertTo2Digits (index) {
                if (index.toString().length < 2) {
                    return '0' + index
                }
                return index.toString()
            },

            // Convert single digit number (4) or double digit number (04) to 3 digits number (004)
            convertTo3Digits (index) {
                if (index.toString().length === 1) {
                    return '00' + index
                } else if (index.toString().length === 2) {
                    return '0' + index
                }
                return index.toString()
            },

            // Select different types (background, skin...) on the right column
            selectType (type) {
                this.type = type
            },

            // Select a gender (male or female) on the left column. When user switches gender, makeup properties are replaced by beard properties and vice-versa (for example 'makeup0103' becomes 'beard0103'). This is why it is important to maintain the same number of forms and colors for both properties.
            selectGender (selectedGender) {
                this.gender = selectedGender
                if (selectedGender === 'female') {
                    if (this.type === 'beard') {
                        this.type = 'makeup'
                        this.makeup = this.beard.replace('beard', 'makeup')
                    }
                    for (let i = 0; i < this.arrayOfImagesToMerge.length; i++) {
                        if (this.arrayOfImagesToMerge[i]) { 
                            this.arrayOfImagesToMerge[i] = this.arrayOfImagesToMerge[i].replace(/male/g, 'female')
                            this.arrayOfImagesToMerge[i] = this.arrayOfImagesToMerge[i].replace(/beard/g, 'makeup')
                        }
                    }
                }
                if (selectedGender === 'male') {
                    if (this.type === 'makeup') {
                        this.type = 'beard'
                        this.beard = 'beard' + this.makeup.replace('makeup', 'beard')
                    }
                    for (let i = 0; i < this.arrayOfImagesToMerge.length; i++) {
                        if (this.arrayOfImagesToMerge[i]) {
                            this.arrayOfImagesToMerge[i] = this.arrayOfImagesToMerge[i].replace(/female/g, 'male')
                            this.arrayOfImagesToMerge[i] = this.arrayOfImagesToMerge[i].replace(/makeup/g, 'beard')
                        }
                    }
                }                               
                // console.log('arrayofImagesToMerge: ', this.arrayOfImagesToMerge)

                // Don't forget to merge the images to see the result of the changes 
                this.mergeImages()
            },

            // Define the array of images that need to be merged into one. There are different layers and the upper layer covers what's underneath it. For example, the skin covers the background, and the makeup covers the skin
            addToMerge (payload) {
                // console.log('Call to addMergeFromChild method in parent')
                // console.log('payload: ', payload)
                if (payload.type === 'background') {
                    // Remove file extension (.png) of the image
                    this.background = payload.image.replace(/\.[^/.]+$/, "")
                }
                if (payload.type === 'skin') {
                    this.skin = payload.image.replace(/\.[^/.]+$/, "")
                }
                if (payload.type === 'tattoo') {
                    this.tattoo = payload.image.replace(/\.[^/.]+$/, "")
                }
                if (payload.type === 'eyes') {
                    this.eyes = payload.image.replace(/\.[^/.]+$/, "")
                }
                if (payload.type === 'eyebrows') {
                    this.eyebrows = payload.image.replace(/\.[^/.]+$/, "")
                }
                if (payload.type === 'mouth') {
                    this.mouth = payload.image.replace(/\.[^/.]+$/, "")
                }
                if (payload.type === 'hair') {
                    this.hair = payload.image.replace(/\.[^/.]+$/, "")
                }
                if (payload.type === 'makeup') {
                    this.makeup = payload.image.replace(/\.[^/.]+$/, "")
                }
                if (payload.type === 'beard') {
                    this.beard = payload.image.replace(/\.[^/.]+$/, "")
                }
                if (payload.type === 'accessories') {
                    this.accessories = payload.image.replace(/\.[^/.]+$/, "")
                }
                if (payload.type === 'clothes') {
                    this.clothes = payload.image.replace(/\.[^/.]+$/, "")
                }
                
                const layerPosition = payload.layerPosition
                const gender = payload.gender
                const type = payload.type
                const image = payload.image

                this.arrayOfImagesToMerge[layerPosition] = '/images/avatars/jm/' + gender + '/' + type + '/' + image

                this.mergeImages()
            },

            // Merge the array of images. Each array element represents a property (gender, background, skin...)
            mergeImages() {
                // Clean the array of images to remove empty values (for example when a user does not select a property)
                this.cleanedArrayOfImagesToMerge = []
                for (let i of this.arrayOfImagesToMerge) {
                    i && this.cleanedArrayOfImagesToMerge.push(i)
                }

                if (process.browser) {
                    mergeImages(this.cleanedArrayOfImagesToMerge)
                    .then(
                        b64 => this.$refs.mergedImage.src = b64,
                    ).then(
                        b64 => this.$refs.mergedImage2.src = b64
                    )
                }
            },
            
            // Save the image in Firebase Cloud Storage and the image name in Firebase database at the user node location
            saveImage () {
                const userId = firebase.auth().currentUser.uid
                const now = moment().unix()

                let imageName = ''
                if (this.gender === 'female') {
                    imageName = userId + '_female_' + this.background + '_' + this.skin + '_' + this.tattoo + '_' + this.eyes + '_' + this.eyebrows + '_' + this.mouth + '_' + this.hair + '_' + this.makeup + '_' + this.accessories + '_' + this.clothes
                } 
                if (this.gender === 'male') {
                    imageName = userId + '_male_' + this.background + '_' + this.skin + '_' + this.tattoo + '_' + this.eyes + '_' + this.eyebrows + '_' + this.mouth + '_' + this.hair + '_' + this.beard + '_' + this.accessories + '_' + this.clothes
                }

                const storageRef = firebase.storage().ref('/images/avatars/' + imageName)

                // const image = this.$refs.mergedImage.src

                let image = ''
                if (this.$refs.mergedImage) {
                    image = this.$refs.mergedImage.src
                } else if (this.$refs.mergedImage2) {
                    image = this.$refs.mergedImage2.src
                }

                let uploadTask = storageRef.putString(image, 'data_url')

                uploadTask.on('state_changed', (snapshot) => {
                    // Observe state change events such as progress, pause, and resume. Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                    this.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
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
                    new Noty({type: 'error', text: 'An error occured and your avatar could not be uploaded to our database. Please try again later.', timeout: 5000, theme: 'metroui'}).show()
                }, () => {
                    // console.log('imageName: ', imageName)
                    console.log('uploadTask: ', uploadTask)
                    return this.$store.dispatch('users/updateAvatarImage', uploadTask).then(() => {
                        new Noty({type: 'success', text: 'Successfully uploaded image!', timeout: 5000, theme: 'metroui'}).show()
                    }).catch((error) => {
                        console.log('error: ', error)
                        // new Noty({type: 'error', text: 'Image could not be save on database...', timeout: 5000, theme: 'metroui'}).show()
                    })



                    // Delete old avatar if it exists
                    if (this.loadedUser && this.loadedUser.avatar) {
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
                    // Update avatar image in eventUsers node

                    // 1) First retrive all user events
                    // let userEvents = []
                    // firebase.database().ref('/usersEvents/' + userId).once('value')
                    //     .then(function (snapshot) {
                    //         userEvents.push(snapshot.val())
                    //     })
                    //     .then(
                    //         )

                    new Noty({type: 'success', text: 'Successfully uploaded image!', timeout: 5000, theme: 'metroui'}).show()
                    // return this.$router.push('/')
                })
            }
        }
    }
</script>

<style scoped>
    .active {
        background-color: orangered;
        /*border: 3px solid green;*/
    }
    /*.carousel-3d-slide {
        position: absolute;
        opacity: 0;
        visibility: hidden;
        overflow: hidden;
        top: 0;
        border-radius: 1px;
        border-color: #000;
        border-color: rgba(0, 0, 0, 0.4);
        border-style: solid;
        background-size: cover;
        background-color: orangered;
        display: block;
        margin: 0;
    }*/
    .list-group-item {
        padding: 5px;
        cursor: pointer;
    }
    .list-group-item.active {
        border: none;
    }
    .carousel-3d-slide {
        height: auto !important;
        background-color: rgba(0, 0, 0, 0.25) !important;
    }
    .carousel-3d-slide img {
        background-color: #fff;
    }
    .avatar-img {
        border: 1px solid orangered; 
        border-radius: 5px;
    }
    .list-inline-item {
        color: #fff;
        padding: 10px;
        margin: 3px;
        background-color: #000;
        border-radius: 5px;
    }
    .list-inline-item.active {
        background-color: orangered;
    }
  </style>