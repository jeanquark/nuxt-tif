<template>
	<div class="flex-container-modal-avatar-color">
		<!-- <p>
			total_background_colors: {{ this.total_background_colors }}<br /><br />
			background: {{ background }}<br /><br />
			background_shape: {{ this.background_shape }}<br /><br />
			background_color2: {{ this.background_color2 }}<br /><br />
		</p> -->

        <div v-for="index in total_background_colors" @click="addToMerge({gender: 'unisex', type: 'background', property: 'color', image: 'background' + background_shape + convertTo3Digits(index) + '.png', index: index, layerPosition: 0})">
            <img v-lazy="'/images/avatars/jm/unisex/background/colors/backgroundColor' + convertTo3Digits(index) + '.png'" class="imgModalAvatarColor" :class="{active: (background_color === convertTo3Digits(index)) }" style="cursor: pointer;" />
        </div>
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
        border: 2px solid red;
    }
</style>