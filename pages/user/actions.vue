<template>
    <div class="container-fluid">
        <!-- The Modal Goodies -->
        <div id="modalBox">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <!-- Modal Header -->
                    <div class="modal-header">
                        <span class="modal-title">XP / Actions</span>
                        <nuxt-link :to="localePath({ name: 'home'})" class="close">
                            <span aria-hidden="true" class="white-text"><i class="fa fa-arrow-circle-left"></i></span>
                        </nuxt-link>     
                    </div>

                    <!-- Modal body -->
                    <div id="modalBoxContent" class="modal-body">
                        <div class="flex-container-modal-MyTeam">
                            <h1>Ton agenda</h1>
                            <p style="color: #000;">
                                <!-- loadedActions: {{ loadedActions }}<br /><br /> -->
                                <!-- loadedUserActions: {{ loadedUserActions }}<br /><br /> -->
                                <!-- loadedUserActions: {{ loadedUserActions['0800-1000'] }}<br /><br /> -->
                                <!-- jobs2: {{ jobs2 }}<br /><br /> -->
                                <!-- slots: {{ slots }}<br /><br /> -->
                                <!-- loadedUserActions[0800-1000]: {{ loadedUserActions['0800-1000'] }}<br /><br /> -->
                                <!-- slots: {{ slots }}<br /><br /> -->
                                <!-- slots.slot1: {{ slots.slot1 }}<br /><br /> -->
                                <!-- list: {{ list }}<br /><br /> -->
                                <!-- list1_1: {{ list1_1 }}<br /><br /> -->
                                <!-- list3_1: {{ list3_1 }}<br /><br /> -->
                                <!-- {{ new Date() | moment('dddd, MMMM Do YYYY') }} -->
                                <!-- {{ new Date() | moment.locale("de").format('MMMM') }} -->
                                <!-- {{ this.$moment.locale('fr') }} -->
                                <!-- loadedUserActions[0800-1000]: {{ loadedUserActions[0]['0800-1000'].name }}<br /><br /> -->
                                <!-- changed: {{ changed }}<br /><br /> -->
                                <!-- slots: {{ slots }}<br /><br /> -->
                                <!-- oldSlots: {{ oldSlots }}<br /><br /> -->
                            </p>
                        </div>
                        <div class="flex-container-modal-OtherTeam">
                            <h6>Choisis toutes les actions (8 au maximum) que tu vas faire durant cette belle journée...</br>
                            Préfères-tu bosser, prendre du bon temps, apprendre, bouger un peu ta graisse ?</h6>
                        </div>
                        <div class="flex-container-modal-Title banner2 text-center">
                            <h2>{{ new Date() | moment('dddd, MMMM Do YYYY') }}<span class="infoAgenda"><i class="infoTesEquipes fas fa-info-circle"></i></span></h2>
                        </div>
                        <div class="flex-container-modal-XPAction-Img">
                            
                            <span class="OtherTeam2" style="border: 1px dashed orange;">
                                <p style="color: #000; text-align: center;">
                                    08:00 - 10:00 {{ slots.slot1.length }}
                                    <button class="btn btn-sm btn-default" @click="removeSlot('slot1')" v-if="slots.slot1 && slots.slot1.length >= 1"><i class="fas fa-times"></i></button>
                                </p>
                                <draggable :options="{group:{ name:'user-actions' }}" :move="onMove" @change="onChange($event, 'slot1')" v-model="slots.slot1">
                                    <transition-group name="no" class="list-group">

                                        <div key="slot1" v-if="slots.slot1 && slots.slot1.length < 1">
                                            <img src="/images/actions/actionXP.jpg" class="imgModalAvatar" />
                                        </div>
                                        <div class="list-group-item" v-for="(element, index) in slots.slot1" :key="index" style="color: #000; border: 1px solid red; margin: 0px 0px;" v-else>
                                            <span v-if="element">
                                                <img :src="'/images/actions/' + element.image" class="imgModalAvatar" />
                                                {{ element.name }}
                                            </span>
                                        </div>
                                    </transition-group>
                                </draggable>
                            </span>
                            
                            <span class="OtherTeam2" style="border: 1px dashed orange;">
                                <p style="color: #000; text-align: center;">
                                    10:00 - 12:00
                                    <button class="btn btn-sm btn-default" @click="removeSlot('slot2')" v-if="slots.slot2 && slots.slot2.length >= 1"><i class="fas fa-times"></i></button>
                                </p>
                                <draggable :options="{group:{ name:'user-actions' }}" :move="onMove" @change="onChange($event, 'slot2')" v-model="slots.slot2">
                                    <transition-group name="no" class="list-group">
                                        <div key="slot2" v-if="slots.slot2 && slots.slot2.length < 1">
                                            <img src="/images/actions/actionXP.jpg" class="imgModalAvatar" />
                                        </div>
                                        <div class="list-group-item" v-for="(element, index) in slots.slot2" :key="index" style="color: #000; border: 1px solid red; margin: 0px 0px;" v-else>
                                            <span v-if="element">
                                                <img :src="'/images/actions/' + element.image" class="imgModalAvatar" />
                                                {{ element.name }}
                                            </span>
                                        </div>
                                    </transition-group>
                                </draggable>
                            </span>

                            <span class="OtherTeam2" style="border: 1px dashed orange;">
                                <p style="color: #000; text-align: center;">
                                    12:00 - 14:00
                                    <button class="btn btn-sm btn-default" @click="removeSlot('slot3')" v-if="slots.slot1 && slots.slot3.length >= 1"><i class="fas fa-times"></i></button>
                                </p>
                                <draggable :options="{group:{ name:'user-actions' }}" :move="onMove" @change="onChange($event, 'slot3')" v-model="slots.slot3">
                                    <transition-group name="no" class="list-group">
                                        <div key="slot3" v-if="!slots.slot3[0] || slots.slot3[0].length < 1">
                                            <img src="/images/actions/actionXP.jpg" class="imgModalAvatar" />
                                        </div>
                                        <div class="list-group-item" v-for="(element, index) in slots.slot3" :key="index" style="color: #000; border: 1px solid red; margin: 0px 0px;" v-else>
                                            <span v-if="element">
                                                <img :src="'/images/actions/' + element.image" class="imgModalAvatar" />
                                                {{ element.name }}
                                            </span>
                                        </div>
                                    </transition-group>
                                </draggable>
                            </span>

                            <span class="OtherTeam2" style="border: 1px dashed orange;">
                                <p style="color: #000; text-align: center;">
                                    14:00 - 16:00
                                    <button class="btn btn-sm btn-default" @click="removeSlot('slot4')" v-if="slots.slot4 && slots.slot4.length >= 1"><i class="fas fa-times"></i></button>
                                </p>
                                <draggable :options="{group:{ name:'user-actions' }}" :move="onMove" @change="onChange($event, 'slot4')" v-model="slots.slot4">
                                    <transition-group name="no" class="list-group">
                                        <div key="slot4" v-if="!slots.slot4[0] || slots.slot4[0].length < 1">
                                            <img src="/images/actions/actionXP.jpg" class="imgModalAvatar" />
                                        </div>
                                        <div class="list-group-item" v-for="(element, index) in slots.slot4" :key="index" style="color: #000; border: 1px solid red; margin: 0px 0px;" v-else>
                                            <span v-if="element">
                                                <img :src="'/images/actions/' + element.image" class="imgModalAvatar" />
                                                {{ element.name }}
                                            </span>
                                        </div>
                                    </transition-group>
                                </draggable>
                            </span>
                            
                            <span class="OtherTeam2" style="border: 1px dashed orange;">
                                <p style="color: #000; text-align: center;">
                                    16:00 - 18:00
                                    <button class="btn btn-sm btn-default" @click="removeSlot('slot5')" v-if="slots.slot5 && slots.slot5.length >= 1"><i class="fas fa-times"></i></button>
                                </p>
                                <draggable :options="{group:{ name:'user-actions' }}" :move="onMove" @change="onChange($event, 'slot5')" v-model="slots.slot5">
                                    <transition-group name="no" class="list-group">
                                        <div key="slot5" v-if="slots.slot5 && slots.slot5.length < 1">
                                            <img src="/images/actions/actionXP.jpg" class="imgModalAvatar" />
                                        </div>
                                        <div class="list-group-item" v-for="(element, index) in slots.slot5" :key="index" style="color: #000; border: 1px solid red; margin: 0px 0px;" v-else>
                                            <span v-if="element">
                                                <img :src="'/images/actions/' + element.image" class="imgModalAvatar" />
                                                {{ element.name }}
                                            </span>
                                        </div>
                                    </transition-group>
                                </draggable>
                            </span>
                        </div>


                        <div id="modalBoxContent" class="modal-body">
                            <div class="flex-container-modal-Title banner banner-darkred text-center">
                                <h2>Cartes "XP/Actions"</h2>
                            </div>
                            <div class="flex-container-modal-OtherTeam">
                                <h6>Clique sur une carte pour avoir plus d'information sur cette action !</h6>
                            </div>
                            <div id="resultatBoxFlags" class="resultatBody">
                                <!-- <div class="flex-container-modal-action-xp-small" style=""> -->
                                <div class="" style="">

                                    <draggable class="" element="div" v-model="jobs" :options="{group:{ name:'user-actions',  pull:'clone', put:false }}" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                        <transition-group id="abc" type="transition" :name="'flip-list'" style="display: flex; flex-wrap: wrap;">
                                            <div class="def" v-for="job in jobs" :key="job.name" style="border: 1px dashed orange; margin: 0px;">
                                                <div class="actionCard" style="width: 100%;">
                                                    <div class="textBoxActionXPBox">Job - Niv.1</div>
                                                    <div class="OtherTeam2">
                                                        <img :src="'/images/actions/' + job.image" class="imgModalActionXP" />
                                                        <a href="demo_21.html" class="overlayXP"><div class="textActivityXP">{{ job.name }}</div><div class="textInfoXP">+infos</div></a></div>
                                                    <div class="progress">
                                                        <span class="progress-value">6 / 10 <i class="fas fa-upload"></i></span>
                                                        <div class="progress-bar darkredProgress" role="progressbar" aria-valuenow="100" aria-valuemin="100" aria-valuemax="100" style="width: 100%;"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </transition-group>
                                    </draggable>
                                </div>
                            </div>  
                        </div>
                    </div><!-- /#modalBoxContent -->

                    <!-- Modal footer -->
                    <div class="modal-footer">
                        <button type="button" class="btn btn-success" data-dismiss="modal" @click="updateUserActions" :disabled="!changed">Valider</button>
                        <nuxt-link :to="localePath({name: 'home'})"><button type="button" class="btn btn-danger" data-dismiss="modal">Annuler</button></nuxt-link>
                    </div>

                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </div><!-- /#modalBox -->
    </div><!-- /.container-fluid -->
</template>

<script>
    import draggable from 'vuedraggable'
    import moment from 'vue-moment'

    export default {
        layout: 'layoutFront',
        name: "hello",
        components: {
            draggable
        },
        created () {
            this.$store.dispatch('actions/loadedActions').then((response) => {
                this.jobs = response.filter(action => (action.type === 'job'))
            })
            this.$store.dispatch('users/loadedUserActions').then((response) => {
                this.today = this.$moment().format('DD-MM-YYYY')
                const userActions = response.find(response => (response.id === this.today))
                console.log('userActions: ', userActions)
                if (userActions) {
                    if (userActions['0800-1000']) this.slots.slot1.push(userActions['0800-1000'])
                    if (userActions['1000-1200']) this.slots.slot2.push(userActions['1000-1200'])
                    if (userActions['1200-1400']) this.slots.slot3.push(userActions['1200-1400'])
                    if (userActions['1400-1600']) this.slots.slot4.push(userActions['1400-1600'])
                    if (userActions['1600-1800']) this.slots.slot5.push(userActions['1600-1800'])
                    if (userActions['1800-2000']) this.slots.slot6.push(userActions['1800-2000'])
                    if (userActions['2000-2200']) this.slots.slot7.push(userActions['2000-2200'])
                    if (userActions['2200-0000']) this.slots.slot8.push(userActions['2200-0000'])
                }
                this.oldSlots = _.clone(this.slots)
            })
        },
        data() {
            return {
                jobs: [],
                slots: {
                    slot1: [],
                    slot2: [],
                    slot3: [],
                    slot4: [],
                    slot5: [],
                    slot6: [],
                    slot7: [],
                    slot8: [],
                },
                oldSlots: [],
                // editable: true,
                // isDragging: false,
                // delayedDragging: false,
                today: ''
            };
        },
        computed: {
            loadedActions () {
                return this.$store.getters['actions/loadedActions'].filter(action => (action.type === 'job'))
            },
            loadedUserActions () {
                const today = this.$moment().format('DD-MM-YYYY')
                return this.$store.getters['users/loadedUserActions'].find(action => (action.id === today))
            },
            changed () {
                return !_.isEqual(this.slots, this.oldSlots)
            },
            // dragOptions() {
            //     return {
            //         animation: 0,
            //         group: "description",
            //         disabled: !this.editable,
            //         ghostClass: "ghost"
            //     }
            // }
        },
        methods: {
            onMove({ relatedContext, draggedContext }) {
                // console.log('onMove!')
                // console.log(relatedContext)
                // console.log(draggedContext)
                // console.log('relatedContext.list.length: ', relatedContext.list.length)
                // const relatedElement = relatedContext.element;
                // const draggedElement = draggedContext.element;
                // return (
                //     (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
                // );
            },
            onChange(event, slot) {
                this.slots[slot] = []
                if (event.added) {
                    this.slots[slot].push(event.added.element)
                }
            },
            async updateUserActions () {
                console.log('updateUserActions')
                const data = {}
                data.today = this.today
                data.slots = {
                    '0800-1000': this.slots.slot1[0] ? {
                        name: this.slots.slot1[0]['name'],
                        image: this.slots.slot1[0]['image']
                    } : {},
                    '1000-1200': this.slots.slot2[0] ? {
                        name: this.slots.slot2[0]['name'],
                        image: this.slots.slot2[0]['image']
                    } : '',
                    '1200-1400': this.slots.slot3[0] ? {
                        name: this.slots.slot3[0]['name'],
                        image: this.slots.slot3[0]['image']
                    } : null,
                    '1400-1600': this.slots.slot4[0] ? {
                        name: this.slots.slot4[0]['name'],
                        image: this.slots.slot4[0]['image']
                    } : null,
                    '1600-1800': this.slots.slot5[0] ? {
                        name: this.slots.slot5[0]['name'],
                        image: this.slots.slot5[0]['image']
                    } : null,
                    '1800-2000': this.slots.slot6[0] ? {
                        name: this.slots.slot6[0]['name'],
                        image: this.slots.slot6[0]['image']
                    } : null,
                    '2000-2200': this.slots.slot7[0] ? {
                        name: this.slots.slot7[0]['name'], 
                        image: this.slots.slot7[0]['image']
                    } : null,
                    '2200-0000': this.slots.slot8[0] ? {
                        name: this.slots.slot8[0]['name'],
                        image: this.slots.slot8[0]['image']
                    } : null
                }
                console.log(data)
                // return
                await this.$store.dispatch('users/updateUserActions', data)
                console.log('Done!')
            },
            removeSlot(slot) {
                this.slots[slot] = []
            }
        },
        watch: {
            // isDragging(newValue) {
                // if (newValue) {
                //     this.delayedDragging = true
                //     return
                // }
                // this.$nextTick(() => {
                //     this.delayedDragging = false
                // })
            // }
        }
    }
</script>

<style>
    .flip-list-move {
        transition: transform 0.5s;
    }

    .no-move {
        transition: transform 0s;
    }

    .ghost {
        opacity: 0.5;
        background: #c8ebfb;
    }

    .list-group {
        min-height: 20px;
    }

    .list-group-item {
        cursor: move;
    }

    .list-group-item i {
        cursor: pointer;
    }

    .imgModalActionXP:hover {
        cursor: move;
    }
    #abc>.def {
        width: 25%;
    }
</style>
