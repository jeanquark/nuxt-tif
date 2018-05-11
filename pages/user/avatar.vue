<template>
    <div class="container-fluid">
        <!-- The monAvatar -->
        <div id="modalBox">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <!-- Modal Header -->
                    <div class="modal-header text-center">
                        <span class="modal-title">Ton avatar {{ this.avatars }}</span>
                        <nuxt-link to="/home">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" class="white-text"><i class="fa fa-arrow-circle-left"></i></span>
                            </button>
                        </nuxt-link>         
                    </div>
                    <!-- Modal body -->
                    <div id="modalBoxContent" class="modal-body">
                        <div class="flex-container-modal-MyTeam">
                            <h1>Envie de changer de tête ? arr: {{ this.arr }} obj: {{ this.obj }}</h1>
                        </div>
                        <div class="flex-container-modalAvatar">
                            <!-- <div style="flex-grow: 1"><img src="/images/avatar.png" class="imgModalAvatar"/></div> -->
                            <div style="flex-grow: 1"><img src="" ref="mergedImage" class="imgModalAvatar" width="100px" /></div>
                        </div>
                        <div class="flex-container-modalMenuAvatar">
                            <div style="flex-grow: 1; cursor: pointer;" :class="{active: this.gender === 'female'}" @click="selectGender('female')"><span class="textModalMenuAvatar">FEMALE</span></div>
                            <div style="flex-grow: 1; cursor: pointer;" :class="{active: this.gender === 'male'}" @click="selectGender('male')"><span class="textModalMenuAvatar">MALE</span></div>
                        </div>
                        <div class="flex-container-modalMenuAvatar">
                            <div style="flex-grow: 1; cursor: pointer;" :class="{active: this.bodyPart === 'skin'}" @click="selectBodyPart('skin')"><span class="textModalMenuAvatar">SKIN</span></div>
                            <div style="flex-grow: 1; cursor: pointer;" :class="{active: this.bodyPart === 'face'}" @click="selectBodyPart('face')"><span class="textModalMenuAvatar">FACE</span></div>
                            <div style="flex-grow: 1; cursor: pointer;" :class="{active: this.bodyPart === 'hair'}" @click="selectBodyPart('hair')"><span class="textModalMenuAvatar">HAIR</span></div>
                            <div style="flex-grow: 1; cursor: pointer;" :class="{active: this.bodyPart === 'background'}" @click="selectBodyPart('background')"><span class="textModalMenuAvatar">BACK</span></div>
                        </div>
                        <div class="flex-container-modalAvatarImg" v-for="avatar in loadedAvatars">
                            <!-- <div style="cursor: pointer;" @click="addToMerge('/images/avatars/' + avatar.type + '/' + avatar.image)"><img :src="'/images/avatars/' + avatar.type + '/' + avatar.image" class="imgModalAvatar" /></div> -->
                            <div style="cursor: pointer;" @click="addToMerge(avatar.gender, avatar.type, avatar.image)"><img :src="'/images/avatars/' + avatar.gender + '/' + avatar.type + '/' + avatar.image" class="imgModalAvatar" /></div>
                        </div>  
                    </div>
                    <!-- Modal footer -->
                    <div class="modal-footer">
                        <nuxt-link to="/home"><button type="button" class="btn btn-danger" data-dismiss="modal">Annule tout !</button></nuxt-link>
                        <nuxt-link to="/home"><button type="button" class="btn btn-success" data-dismiss="modal" @click="saveImage">Allez, valide !</button></nuxt-link>
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
    export default {
        layout: 'layoutFront',
        created () {
            const avatarsArray = []
            firebase.database().ref('avatars').once('value', function (snapshot) {
                // console.log(snapshot.val())
                for (const key in snapshot.val()) {
                    avatarsArray.push({...snapshot.val()[key]})
                }
                console.log(avatarsArray)
            })
            this.avatars = avatarsArray
        },
        data () {
            return {
                gender: 'female',
                bodyPart: 'skin',
                avatars: [],
                imagesArray: [],
                typeArray: [],
                arr: [],
                obj: []
            }
        },
        computed: {
            loadedAvatars () {
                return this.avatars.filter(avatar => avatar.gender === this.gender && avatar.type === this.bodyPart)
            }
        },
        methods: {
            selectGender(gender) {
                console.log(gender)
                this.gender = gender
            },
            selectBodyPart(part) {
                console.log(part)
                this.bodyPart = part
            },
            addToMerge(gender, type, image) {
                console.log('addToMerge')
                console.log(gender)
                console.log(type)
                console.log(image)
                // Remove any image of the same type
                // if (this.arr.includes(image) || this.obj.includes(type)) {
                //     const index = this.arr.indexOf(image)
                //     this.arr.splice(index, 1)
                //     const index2 = this.obj.indexOf(type)
                //     this.obj.splice(index2, 1)
                // } else { // Add image if not present
                //     // this.arr.push(path)
                //     if (image == '/images/body.png') {
                //         this.arr.unshift(image)
                //     } else {
                //         this.arr.push(image)
                //         this.obj.push({'image': image, 'type': type})
                //     }
                // }
                // mergeImages()

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
                this.obj.push({'image': '/images/avatars/' + gender + '/' + type + '/' + image, 'gender': gender, 'type': type})
                this.mergeImages()
            },
            mergeImages() {
                console.log(this.obj)
                // Build an array of image paths from the object
                this.arr = []
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
                console.log('saveImage')
                console.log(this.$refs.mergedImage.src)
            }
        }
    }
</script>

<style scoped>
    .active {
        background-color: orangered;
    }
</style>
