<template>
	<div class="flex-container-modal-avatar-shape no-margin">
		<!-- <p>
			total_background_shapes: {{ this.total_background_shapes }}<br /><br />
			background: {{ background }}<br /><br />
			background_shape: {{ this.background_shape }}<br /><br />
			background_color: {{ this.background_color }}<br /><br />
		</p> -->

	    <!-- <div v-for="index in total_background_shapes" @click="addToMerge({gender: 'unisex', type: 'background', property: 'shape', image: 'background' + convertTo2Digits(index) + background_color + '.png', index: index, layerPosition: 0})">
	        <img v-lazy="'/images/avatars/jm/unisex/background/shape/backgroundShape' + convertTo2Digits(index) + '001.png'" class="imgModalAvatar" :class="{active: (background_shape === convertTo2Digits(index)) }" style="cursor: pointer;" />
	    </div> -->

	    <carousel-3d :width="200" :height="200" :startIndex="background_shape - 1">
          	<slide v-for="(index, i) in total_background_shapes" :index="i" :key="i">
            	<img v-lazy="'/images/avatars/jm/unisex/background/shape/backgroundShape' + convertTo2Digits(index) + '001.png'" class="imgModalAvatar" :class="{active: (background_shape === convertTo2Digits(index)) }" style="cursor: pointer;" @click="addToMerge({gender: 'unisex', type: 'background', property: 'shape', image: 'background' + convertTo2Digits(index) + background_color + '.png', index: index, layerPosition: 0})" />
          	</slide>
    	</carousel-3d>
	</div>
</template>

<script>
	export default {
		props: ['background'],
		data () {
			return {
				total_background_shapes: 4,
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
			convertTo2Digits (index) {
				return this.$parent.convertTo2Digits(index)
			},
			addToMerge (avatarData) {
				console.log('addToMerge')
		      	this.$emit('addToMergeEmitter', avatarData)
		    }
		}
	}
</script>

<style scoped>
	.active {
        background-color: orangered;
        border: 2px solid red;
    }
</style>