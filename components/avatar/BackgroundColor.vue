<template>
	<div class="">
		<p>
			<!-- total_background_colors: {{ this.total_background_colors }}<br /><br />
			background: {{ background }}<br /><br />
			background_shape: {{ this.background_shape }}<br /><br />
			background_color: {{ this.background_color }}<br /><br /> -->
		</p>

        <!-- <div v-for="index in total_background_colors" @click="addToMerge({gender: 'unisex', type: 'background', property: 'color', image: 'background' + background_shape + convertTo3Digits(index) + '.png', index: index, layerPosition: 0})">
            <img v-lazy="'/images/avatars/jm/unisex/background/colors/backgroundColor' + convertTo3Digits(index) + '.png'" class="imgModalAvatarColor" :class="{active: (background_color === convertTo3Digits(index)) }" style="cursor: pointer;" />
        </div> -->

        <carousel-3d :width="200" :height="200" :startIndex="background_color - 1">
          	<slide v-for="(index, i) in total_background_colors" :index="i" :key="i">
            	<img v-lazy="'/images/avatars/jm/unisex/background/colors/backgroundColor' + convertTo3Digits(index) + '.png'" class="imgModalAvatarColor" :class="{active: (background_color === convertTo3Digits(index)) }" style="cursor: pointer;" @click="addToMerge({gender: 'unisex', type: 'background', property: 'color', image: 'background' + background_shape + convertTo3Digits(index) + '.png', index: index, layerPosition: 0})" />
          	</slide>
    	</carousel-3d>
	</div>
</template>

<script>
	export default {
		props: ['background'],
		data () {
			return {
				total_background_colors: 144,
			}
		},
		computed: {
			background_shape () {
				return this.background ? this.background.match(/\d+/)[0].substr(0, 2) : '01'
			},
			background_color () {
				return this.background ? this.background.match(/\d+/)[0].substr(2, 4) : '001'
			}
		},
		methods: {
			convertTo3Digits (index) {
				return this.$parent.convertTo3Digits(index)
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