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
                        <!-- avatars: {{ this.avatars }}<br /><br /> -->
                        <p style="color: #000;">
                            <!-- loadedUser: {{ this.loadedUser }}<br /><br /> -->
                            <!-- gender: {{ this.gender }}<br /><br /> -->
                            <!--gender1: {{ this.gender1 }}<br /><br />
                            type: {{ this.type }}<br /><br />
                            arrayOfImagesToMerge: {{ this.arrayOfImagesToMerge }}<br /><br />
                            temp: {{ this.temp }}<br /><br />
                            background_color: {{ this.background_color }}<br /><br />
                            background_shape: {{ this.background_shape }}<br /><br />
                            skin: {{ this.skin }}<br /><br />
                            skin_shape: {{ this.skin_shape }}<br /><br />
                            skin_color: {{ this.skin_color }}<br /><br />
                            beard_shape: {{ this.beard_shape }}<br /><br />
                            beard_color: {{ this.beard_color }}<br /><br />
                            makeup: {{ this.makeup }}<br /><br />
                            makeup_shape: {{ this.makeup_shape }}<br /><br />
                            makeup_color: {{ this.makeup_color }}<br /><br />-->
                        </p>
                    </div>
                    <div class="flex-container-modalAvatar" style="color: #000;" v-cloak>
                            <div class="flex-container-modalMenuAvatar no-border">
                                <div style="flex-grow: 1; cursor: pointer;" :class="{active: this.gender === 'female'}" @click="selectGender('female')"><span class="textModalMenuAvatar">{{ $t('pages.user-avatar.female') }}</span></div>
                                <div style="flex-grow: 1; cursor: pointer;" :class="{active: this.gender === 'male'}" @click="selectGender('male')"><span class="textModalMenuAvatar">{{ $t('pages.user-avatar.male') }}</span></div>
                            </div>

                            <div class="imgAvatarUser" style="color: #000;"><img src="" ref="mergedImage" class="imgModalAvatar" /></div>

                            <div class="flex-container-modalMenuAvatar no-border">
                                <div style="flex-grow: 1; cursor: pointer;" :class="{active: this.type === 'background'}" @click="selectType('background')"><span class="textModalMenuAvatar">{{ $t('pages.user-avatar.background') }}</span></div>
                                <div style="flex-grow: 1; cursor: pointer;" :class="{active: this.type === 'skin'}" @click="selectType('skin')"><span class="textModalMenuAvatar">{{ $t('pages.user-avatar.skin') }}</span></div>
                                <div style="flex-grow: 1; cursor: pointer;" :class="{active: this.type === 'makeup' || this.type === 'beard'}" @click="selectType('makeup')" v-if="this.gender === 'female'"><span class="textModalMenuAvatar">Makeup</span></div>
                                <div style="flex-grow: 1; cursor: pointer;" :class="{active: this.type === 'beard' || this.type === 'makeup'}" @click="selectType('beard')" v-if="this.gender === 'male'"><span class="textModalMenuAvatar">{{ $t('pages.user-avatar.beard') }}</span></div>
                            </div>
                        </div><!-- /.flex-container-modalAvatar -->

                        <div class="row text-center text-lg-left" style="height: 300px; border: 2px solid red; margin-left: 0px; margin-right: 0px;">
                            <!-- Left colum (shape) -->
                            <div class="col-sm-6" style="border: 2px solid green; overflow-y: auto;">
                                <h4 class="text-center" style="color: #000;">Shape</h4>

                                <background-shape v-if="this.type === 'background'" :background="this.background" @addToMergeEmitter="addToMerge"></background-shape>

                                <skin-shape v-if="this.type === 'skin'" :gender="this.gender" :skin="this.skin" @addToMergeEmitter="addToMerge"></skin-shape>

                                <makeup-shape v-if="this.type === 'makeup'" :makeup="this.makeup" @addToMergeEmitter="addToMerge"></makeup-shape>                            

                                <beard-shape v-if="this.type === 'beard'" :beard="this.beard" @addToMergeEmitter="addToMerge"></beard-shape>
                            </div><!-- /.col-sm-6 -->


                            <!-- Right column (color) -->
                            <div class="col-sm-6" style="border: 2px solid orange; overflow-y: auto;">
                                <h4 class="text-center" style="color: #000;">Color</h4>

                                <background-color v-if="this.type === 'background'" :background="background" @addToMergeEmitter="addToMerge"></background-color>

                                <skin-color v-if="this.type === 'skin'" :gender="this.gender" :skin="skin" @addToMergeEmitter="addToMerge"></skin-color>

                                <makeup-color v-if="this.type === 'makeup'" :makeup="this.makeup" @addToMergeEmitter="addToMerge"></makeup-color>

                                <beard-color v-if="this.type === 'beard'" :beard="this.beard" @addToMergeEmitter="addToMerge"></beard-color>
                            </div><!-- /.col-sm-6 -->
                        </div>
                        
                        <br />
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
    import mergeImages from 'merge-images'
    import BackgroundShape from '~/components/avatar/BackgroundShape.vue'
    import BackgroundColor from '~/components/avatar/BackgroundColor.vue'
    import SkinShape from '~/components/avatar/SkinShape.vue'
    import SkinColor from '~/components/avatar/SkinColor.vue'
    import MakeupShape from '~/components/avatar/MakeupShape.vue'
    import MakeupColor from '~/components/avatar/MakeupColor.vue'
    import BeardShape from '~/components/avatar/BeardShape.vue'
    import BeardColor from '~/components/avatar/BeardColor.vue'
    export default {
        layout: 'layoutFront',
        components: {
            BackgroundShape,
            BackgroundColor,
            SkinShape,
            SkinColor,
            MakeupShape,
            MakeupColor,
            BeardShape,
            BeardColor,
        },
        created () {
            if (process.client) {
                console.log('Entering created lifecycle hook')
                // const avatarsArray = []
                // firebase.database().ref('avatars2').once('value', function (snapshot) {
                //     for (const key in snapshot.val()) {
                //         avatarsArray.push({...snapshot.val()[key]})
                //     }
                // })
                // this.avatars = avatarsArray
                // console.log('avararsArray: ', avatarsArray)
                // console.log('user avatar: ', this.$store.getters['users/loadedUser'])

                if (this.$store.getters['users/loadedUser'].avatar) {
                    // console.log('avatar')
                    const array = this.$store.getters['users/loadedUser'].avatar.image.split('_')
                    this.arr = array
                    console.log('array: ', array)
                    if (array.length >= 5) {
                        console.log('array is larger than 5')
                        // this.gender = array[1]
                        // this.background = array[2]
                        // this.background_shape = this.background ? this.background.match(/\d+/)[0].substr(0, 2) : '01'
                        // this.background_color = this.background ? this.background.match(/\d+/)[0].substr(2, 4) : '001'
                        // this.skin = array[3]
                        // this.skin_shape = this.skin ? this.skin.match(/\d+/)[0].substr(0, 2) : '01'
                        // this.skin_color = this.skin ? this.skin.match(/\d+/)[0].substr(2, 4) : '01'
                        // this.makeup = array[4]
                        // this.makeup_shape = this.makeup ? this.makeup.match(/\d+/)[0].substr(0, 2) : '01'
                        // this.makeup_color = this.makeup ? this.makeup.match(/\d+/)[0].substr(2, 4) : '01'
                        // this.beard = array[4]
                        // this.beard_shape = this.beard ? this.beard.match(/\d+/)[0].substr(0, 2) : '01'
                        // this.beard_color = this.beard ? this.beard.match(/\d+/)[0].substr(2, 4) : '01'
                        this.gender = array[1]
                        this.background = array[2]
                        this.skin = array[3]
                        this.makeup = array[4]
                        this.beard = array[4]
                        if (this.gender === 'female') {
                            this.arrayOfImagesToMerge = [
                                '/images/avatars/jm/unisex/background/' + this.background + '.png',
                                '/images/avatars/jm/female/skin/' + this.skin + '.png',
                                '/images/avatars/jm/female/makeup/' + this.makeup + '.png',
                            ]
                        }
                        if (this.gender === 'male') {
                            this.arrayOfImagesToMerge = [
                                '/images/avatars/jm/unisex/background/' + this.background + '.png',
                                '/images/avatars/jm/male/skin/' + this.skin + '.png',
                                '/images/avatars/jm/male/beard/' + this.beard + '.png',
                            ]
                        }
                    }
                }
                // if (this.gender === 'female') {
                //     this.arrayOfImagesToMerge = [
                //         '/images/avatars/jm/unisex/background/background_shape' + this.background_shape + '_color' + this.background_color + '.png',
                //         '/images/avatars/jm/female/skin/skin_shape' + this.skin_shape + '_color' + this.skin_color + '.png',
                //         '/images/avatars/jm/female/makeup/makeup_shape' + this.makeup_shape + '_color' + this.makeup_color + '.png',
                //     ]
                // } else if (this.gender === 'male') {
                //     this.arrayOfImagesToMerge = [
                //         '/images/avatars/jm/unisex/background/background_shape' + this.background_shape + '_color' + this.background_color + '.png',
                //         '/images/avatars/jm/male/skin/skin_shape' + this.skin_shape + '_color' + this.skin_color + '.png',
                //         '/images/avatars/jm/male/beard/beard_shape' + this.beard_shape + '_color' + this.beard_color + '.png'
                //     ]
                // }

                this.mergeImages()
            }
        },
        data () {
            return {
                avatars: [],
                // count: 80,
                // gender: 'female',
                type: 'background',
                // total_background_shapes: 3,
                // total_background_colors: 10,
                // background_shape: '01',
                // background_color: '001',
                // total_skin_shapes: 3,
                // total_skin_colors: 10,
                // skin: '',
                // skin_shape: '01',
                // skin_color: '01',
                // total_beard_shapes: 3,
                // total_beard_colors: 3,
                // beard_shape: '01',
                // beard_color: '01',
                // total_makeup_shapes: 3,
                // total_makeup_colors: 3,
                // makeup: '',
                // makeup_shape: '01',
                // makeup_color: '01',
                arrayOfImagesToMerge: Array(2),
                // temp: [],
                // arr: [],
                gender: '',
                background: '',
                skin: '',
                makeup: '',
                beard: '',
                progress: 0
            }
        },
        computed: {
            loadedUser () {
                return this.$store.getters['users/loadedUser']
            },
            loadedAvatars () {
                return this.avatars
                    // return this.avatars.filter(avatar => avatar.gender === this.gender)
            }
        },
        methods: {
            selectGender (selectedGender) {
                // this.gender = gender
                // if (gender === 'female') {
                //     this.makeup_shape = this.beard_shape
                //     this.makeup_color = this.beard_color
                //     this.beard_shape = ''
                //     this.beard_color = ''
                // } else if (gender === 'male') {
                //     this.beard_shape = this.makeup_shape
                //     this.beard_color = this.makeup_color
                //     this.makeup_shape = ''
                //     this.makeup_color = ''
                // }
                // if (gender === 'female' && this.type === 'beard') {
                //     this.type = 'makeup'
                // }
                // if (gender === 'male' && this.type === 'makeup') {
                //     this.type = 'beard'
                // }
                // // this.addToMerge()

                // if (gender === 'female') {
                //     for (let i = 0; i < this.temp.length; i++) {
                //         this.temp[i] = this.temp[i].replace('male', 'female')
                //         this.temp[i] = this.temp[i].replace('beard', 'makeup')
                //         this.temp[i] = this.temp[i].replace('beard_shape', 'makeup_shape')
                //         this.temp[i] = this.temp[i].replace('beard_color', 'makeup_color')
                //     }
                // }
                // if (gender === 'male') {
                //     for (let i = 0; i < this.temp.length; i++) {
                //         this.temp[i] = this.temp[i].replace('female', 'male')
                //         this.temp[i] = this.temp[i].replace('makeup', 'beard')
                //         this.temp[i] = this.temp[i].replace('makeup_shape', 'beard_shape')
                //         this.temp[i] = this.temp[i].replace('makeup_color', 'beard_color')
                //     }
                // }
                // this.mergeImages()

                this.gender = selectedGender
                if (selectedGender === 'female') {
                    if (this.type === 'beard') {
                        this.type = 'makeup'
                    }
                    for (let i = 0; i < this.arrayOfImagesToMerge.length; i++) {
                        this.arrayOfImagesToMerge[i] = this.arrayOfImagesToMerge[i].replace('male', 'female')
                        // this.arrayOfImagesToMerge[i] = this.arrayOfImagesToMerge[i].replace('beard', 'makeup')
                        this.arrayOfImagesToMerge[i] = this.arrayOfImagesToMerge[i].replace(/beard/g, 'makeup')
                    }
                }
                if (selectedGender === 'male') {
                    if (this.type === 'makeup') {
                        this.type = 'beard'
                    }
                    for (let i = 0; i < this.arrayOfImagesToMerge.length; i++) {
                        this.arrayOfImagesToMerge[i] = this.arrayOfImagesToMerge[i].replace('female', 'male')
                        this.arrayOfImagesToMerge[i] = this.arrayOfImagesToMerge[i].replace(/makeup/g, 'beard')
                    }
                }
                console.log('arrayofImagesToMerge: ', this.arrayOfImagesToMerge)

                this.mergeImages()
            },
            selectType (type) {
                this.type = type
            },
            saveImage () {
                console.log('saveImage')
            },
            // addToMerge(gender, type, property, image, index, layerPosition) {
            //     /* Avatar image is a result of merged layers. Ordering of layers is important:
            //         1.1 background shape
            //         1.2 background color
            //         2   skin color
            //         3.1 beard shape
            //         3.2 beard color
            //         */
            //         console.log('Call addToMerge method')
            //     // this.name = name
            //     // if (name.includes('background')) {
            //     //     if (name.includes('background_form')) {
            //     //         // Retrieve backgroundform integer in string
            //     //         this.backgroundform = this.name.match(/\d+/)[0]
            //     //     }
            //     //     if (name.includes('background_color')) {
            //     //         // Retrieve backgroundcolor integer in string
            //     //         this.backgroundcolor = this.name.match(/\d+/)[0]
            //     //     }
            //     //     this.background = 'background' + this.backgroundform + this.backgroundcolor
            //     //     image = this.background + '.png'
            //     // } else if (name.includes('skin')) {
            //     //     if (name.includes('skin_form')) {
            //     //         // Retrieve skinform integer in string
            //     //         this.skinform = this.name.match(/\d+/)[0]
            //     //     }
            //     //     if (name.includes('skin_color')) {
            //     //         // Retrieve skincolor integer in string
            //     //         this.skincolor = this.name.match(/\d+/)[0]
            //     //     }
            //     //     this.skin = 'skin' + this.skinform + this.skincolor
            //     //     image = this.skin + '.png'
            //     // }
            //     console.log('gender: ', gender)
            //     console.log('type: ', type)
            //     console.log('property: ', property)
            //     console.log('image: ', image)
            //     console.log('index: ', index)
            //     if (type === 'background' && property === 'shape') {
            //         this.background_shape = this.convertTo2Digits(index)
            //     } else if (type === 'background' && property === 'color') {
            //         this.background_color = this.convertTo3Digits(index)
            //     }
            //     if (type === 'skin' && property === 'shape') {
            //         this.skin_shape = this.convertTo2Digits(index)
            //     } else if (type === 'skin' && property === 'color') {
            //         this.skin_color = this.convertTo2Digits(index)
            //     }
            //     if (type === 'beard' && property === 'shape') {
            //         this.beard_shape = this.convertTo2Digits(index)
            //     } else if (type === 'beard' && property === 'color') {
            //         this.beard_color = this.convertTo2Digits(index)
            //     }
            //     if (type === 'makeup' && property === 'shape') {
            //         this.makeup_shape = this.convertTo2Digits(index)
            //     } else if (type === 'makeup' && property === 'color') {
            //         this.makeup_color = this.convertTo2Digits(index)
            //     }
            //     // return
            //     this.arrayOfImagesToMerge[layerPosition] = '/images/avatars/jm/' + gender + '/' + type + '/' + image
            //     console.log('arrayOfImagesToMerge: ', this.arrayOfImagesToMerge)



            //     // return
            //     this.mergeImages()
            // },
            addToMerge (payload) {
                console.log('Call to addMergeFromChild method in parent')
                // this.gender = payload.gender
                if (payload.type === 'background') {
                    // console.log('define background2')
                    this.background = payload.image
                }
                if (payload.type === 'skin') {
                    // console.log('define skin2')
                    this.skin = payload.image
                }
                if (payload.type === 'makeup') {
                    // console.log('define makeup2')
                    this.makeup = payload.image
                }
                if (payload.type === 'beard') {
                    // console.log('define beard')
                    this.beard = payload.image
                }
                // this.arr[2] = 'background01001'
                // console.log('arr: ', this.arr)
                // console.log('payload: ', payload)
                // console.log('gender: ', payload.gender)
                // console.log('type: ', payload.type)
                // console.log('property: ', payload.property)
                // console.log('index: ', payload.index)
                console.log('image: ', payload.image)
                // console.log('image2: ', payload.image2)
                console.log('background2: ', this.background2)
                const layerPosition = payload.layerPosition
                const gender = payload.gender
                const type = payload.type
                const property = payload.property
                const image = payload.image
                const index = payload.index
                // const image2 = payload.image2

                this.arrayOfImagesToMerge[layerPosition] = '/images/avatars/jm/' + gender + '/' + type + '/' + image
                console.log('arrayOfImagesToMerge: ', this.arrayOfImagesToMerge)

                this.mergeImages()
            },
            mergeImages() {
                // Build an array of image paths from the object
                console.log('Call mergeImages method')
                
                this.cleanedArrayOfImagesToMerge = []
                for (let i of this.arrayOfImagesToMerge) {
                    i && this.cleanedArrayOfImagesToMerge.push(i)
                }
                console.log('Cleaned arrayOfImagesToMerge: ', this.cleanedArrayOfImagesToMerge)

                if (process.browser) {
                    mergeImages(this.cleanedArrayOfImagesToMerge)
                    .then(
                        b64 => this.$refs.mergedImage.src = b64
                        )
                }
            },
            convertTo2Digits (index) {
                if (index.toString().length < 2) {
                    return '0' + index
                }
                return index.toString()
            },
            convertTo3Digits (index) {
                if (index.toString().length === 1) {
                    return '00' + index
                } else if (index.toString().length === 2) {
                    return '0' + index
                }
                return index.toString()
            },
            // Click on save image button
            saveImage () {
                console.log('Click saveImage method')
                // const userId = firebase.auth().currentUser.uid
                // let image_name = ''
                // if (this.gender === 'female') {
                //     image_name = userId + '_' + this.gender + '_background' + this.background_shape + this.background_color + '_skin' + this.skin_shape + this.skin_color  + '_makeup' + this.makeup_shape + this.makeup_color
                // } else if (this.gender === 'male') {
                //     image_name = userId + '_gender' + this.gender + '_background' + this.background_shape + this.background_color + '_skin' + this.skin_shape + this.skin_color + '_beard' + this.beard_shape + this.beard_color
                // }
                // console.log(image_name)
                // return
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
  </style>