<template>
	<div class="row" style="margin-left: 0px; margin-right: 0px;">
		
		<!-- <p style="color: #000;">
			total_background_colors: {{ this.total_background_colors }}<br /><br />
			background: {{ background }}<br /><br />
			background_shape2: {{ this.background_shape2 }}<br /><br />
			background_color2: {{ this.background_color2 }}<br /><br />
		</p> -->

	    <!-- <div class="col-lg-3 col-md-4 col-xs-6" v-for="index in total_background_colors" style="padding-right: 5px; padding-left: 5px;" @click="addToMerge({gender: 'unisex', type: 'background', property: 'color', image: 'background_shape' + background_shape + '_color' + convertTo3Digits(index) + '.png', index: index, layerPosition: 0})">
            <img :src="'/images/avatars/jm/' + 'unisex' + '/' + 'background' + '/' + 'background_shape01' + '_color' + convertTo3Digits(index) + '.png'" class="imgModalAvatar" :class="{active: (background_color === convertTo3Digits(index)) }" style="cursor: pointer;" />
        </div> -->
        <div class="col-lg-3 col-md-4 col-xs-6" v-for="index in total_background_colors" style="padding-right: 5px; padding-left: 5px;" @click="addToMerge({gender: 'unisex', type: 'background', property: 'color', image: 'background' + background_shape2 + convertTo3Digits(index) + '.png', index: index, layerPosition: 0})">
            <img v-lazy="'/images/avatars/jm/unisex/background/colors/background_color' + convertTo3Digits(index) + '.png'" class="imgModalAvatar" :class="{active: (background_color2 === convertTo3Digits(index)) }" style="cursor: pointer;" />
        </div>
	</div>
</template>

<script>
	export default {
		props: ['background'],
		data () {
			return {
				total_background_colors: 10,
				// background_shape: this.background ? this.background.match(/\d+/)[0].substr(0, 2) : '01',
                // background_color: this.background ? this.background.match(/\d+/)[0].substr(2, 4) : '001'
			}
		},
		computed: {
			background_shape2 () {
				return this.background ? this.background.match(/\d+/)[0].substr(0, 2) : '01'
			},
			background_color2 () {
				return this.background ? this.background.match(/\d+/)[0].substr(2, 4) : '001'
			}
		},
		methods: {
			convertTo3Digits (index) {
				return this.$parent.convertTo3Digits(index)
			},
			addToMerge (event) {
				// console.log('onClickButton')
				// console.log('event: ', event)
				// this.background_color2 = this.convertTo3Digits(event.index)
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