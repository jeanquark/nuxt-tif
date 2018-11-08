<template>
	<div class="flex-container-modal-avatar-shape no-margin">
		<!-- <p>
			total_eyes_shapes: {{ this.total_eyes_shapes }}<br /><br />
			eyes: {{ eyes }}<br /><br />
			eyes_shape: {{ this.eyes_shape }}<br /><br />
			eyes_color: {{ this.eyes_color }}<br /><br />
		</p> -->

	    <!-- <div v-for="index in total_eyes_shapes" @click="addToMerge({gender: gender1, type: 'eyes', property: 'color', image: 'eyes' + convertTo2Digits(index) + eyes_color + '.png', index: index, layerPosition: 3})">
            <img :src="'/images/avatars/jm/' + gender1 + '/' + 'eyes' + '/' + 'eyes' + convertTo2Digits(index) + '01' + '.png'" class="imgModalAvatar" :class="{active: (eyes_shape === convertTo2Digits(index)) }" style="cursor: pointer;" />
        </div> -->

        <carousel-3d :width="200" :height="200" :startIndex="eyes_shape - 1">
            <slide v-for="(index, i) in total_eyes_shapes" :index="i" :key="i" >
                <img v-lazy="'/images/avatars/jm/' + gender + '/eyes/eyes' + convertTo2Digits(index) + '01.png'" class="imgModalAvatar" :class="{active: (eyes_shape === convertTo2Digits(index)) }" style="cursor: pointer;" @click="addToMerge({gender: gender, type: 'eyes', image: 'eyes' + convertTo2Digits(index) + eyes_color + '.png', index: index, layerPosition: 3})" />
            </slide>
        </carousel-3d>
	</div>
</template>

<script>
	export default {
		props: ['gender', 'eyes'],
		data () {
			return {
				total_eyes_shapes: 9,
			}
		},
		computed: {
			gender1 () {
				return this.gender
			},
			eyes_shape () {
				return this.eyes ? this.eyes.match(/\d+/)[0].substr(0, 2) : '01'
			},
			eyes_color () {
				return this.eyes ? this.eyes.match(/\d+/)[0].substr(2, 4) : '01'
			}
		},
		methods: {
			convertTo2Digits (index) {
				return this.$parent.convertTo2Digits(index)
			},
			addToMerge (event) {
		      	this.$emit('addToMergeEmitter', event)
		    }
		}
	}
</script>

<style scoped>
	.active {
        background-color: orangered;
        border: 2px solid orangered;
    }
    .imgModalAvatar {
        margin: 0px;
    }
    .carousel-3d-slide {
        position: absolute;
        opacity: 0;
        top: 0;
        border: none;
        background-size: cover;
        background-color: #fff;
        display: block;
        margin: 0;
    }
    .carousel-3d-slide img {
        background-color: #fff;
    }
</style>