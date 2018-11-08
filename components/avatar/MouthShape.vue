<template>
	<div class="flex-container-modal-avatar-shape no-margin">
		<!-- <p>
			total_mouth_shapes: {{ this.total_mouth_shapes }}<br /><br />
			mouth: {{ mouth }}<br /><br />
			mouth_shape: {{ this.mouth_shape }}<br /><br />
			mouth_color: {{ this.mouth_color }}<br /><br />
		</p> -->

	    <!-- <div v-for="index in total_mouth_shapes" @click="addToMerge({gender: gender1, type: 'mouth', property: 'color', image: 'mouth' + convertTo2Digits(index) + mouth_color + '.png', index: index, layerPosition: 5})">
            <img :src="'/images/avatars/jm/' + gender1 + '/' + 'mouth' + '/' + 'mouth' + convertTo2Digits(index) + '01' + '.png'" class="imgModalAvatar" :class="{active: (mouth_shape === convertTo2Digits(index)) }" style="cursor: pointer;" />
        </div> -->

        <carousel-3d :width="200" :height="200" :startIndex="mouth_shape - 1">
            <slide v-for="(index, i) in total_mouth_shapes" :index="i" :key="i" >
                <img v-lazy="'/images/avatars/jm/' + gender + '/mouth/mouth' + convertTo2Digits(index) + '01.png'" class="imgModalAvatar" :class="{active: (mouth_shape === convertTo2Digits(index)) }" style="cursor: pointer;" @click="addToMerge({gender: gender, type: 'mouth', image: 'mouth' + convertTo2Digits(index) + mouth_color + '.png', index: index, layerPosition: 5})" />
            </slide>
        </carousel-3d>
	</div>
</template>

<script>
	export default {
		props: ['gender', 'mouth'],
		data () {
			return {
				total_mouth_shapes: 12,
			}
		},
		computed: {
			gender1 () {
				return this.gender
			},
			mouth_shape () {
				return this.mouth ? this.mouth.match(/\d+/)[0].substr(0, 2) : '01'
			},
			mouth_color () {
				return this.mouth ? this.mouth.match(/\d+/)[0].substr(2, 4) : '01'
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