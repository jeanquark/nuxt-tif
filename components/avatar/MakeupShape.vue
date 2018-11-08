<template>
	<div class="flex-container-modal-avatar-shape no-margin">
		<!-- <p>
			total_makeup_shapes: {{ this.total_makeup_shapes }}<br /><br />
			makeup: {{ makeup }}<br /><br />
			makeup_shape: {{ this.makeup_shape }}<br /><br />
			makeup_color: {{ this.makeup_color }}<br /><br />
		</p> -->

	    <!-- <div v-for="index in total_makeup_shapes" @click="addToMerge({gender: 'female', type: 'makeup', image: 'makeup' + convertTo2Digits(index) + makeup_color + '.png', index: index, layerPosition: 7})">
            <img :src="'/images/avatars/jm/' + 'female' + '/' + 'makeup' + '/' + 'min_makeup' + convertTo2Digits(index) + '01' + '.png'" class="imgModalAvatar" :class="{active: (makeup_shape === convertTo2Digits(index)) }" style="cursor: pointer;" />
        </div> -->

        <carousel-3d :width="200" :height="200" :startIndex="makeup_shape - 1">
            <slide v-for="(index, i) in total_makeup_shapes" :index="i" :key="i" >
                <img v-lazy="'/images/avatars/jm/' + gender + '/makeup/makeup' + convertTo2Digits(index) + '01.png'" class="imgModalAvatar" :class="{active: (makeup_shape === convertTo2Digits(index)) }" style="cursor: pointer;" @click="addToMerge({gender: gender, type: 'makeup', image: 'makeup' + convertTo2Digits(index) + makeup_color + '.png', index: index, layerPosition: 7})" />
            </slide>
        </carousel-3d>
	</div>
</template>

<script>
	export default {
		props: ['makeup'],
		data () {
			return {
				total_makeup_shapes: 4,
			}
		},
		computed: {
			makeup_shape () {
				return this.makeup ? this.makeup.match(/\d+/)[0].substr(0, 2) : '01'
			},
			makeup_color () {
				return this.makeup ? this.makeup.match(/\d+/)[0].substr(2, 4) : '01'
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