<template>
	<div class="row" style="margin-left: 0px; margin-right: 0px;">
		<!-- <p style="color: #000;">gender: {{ this.gender1 }}</p> -->
	    <div class="col-lg-3 col-md-4 col-xs-6" v-for="index in total_skin_shapes" style="padding-right: 5px; padding-left: 5px;" @click="addToMerge({gender: gender1, type: 'skin', property: 'color', image: 'skin' + convertTo2Digits(index) + skin_color + '.png', index: index, layerPosition: 1})">
            <img :src="'/images/avatars/jm/' + gender1 + '/' + 'skin' + '/' + 'skin' + convertTo2Digits(index) + '01' + '.png'" class="imgModalAvatar" :class="{active: (skin_shape === convertTo2Digits(index)) }" style="cursor: pointer;" />
        </div>
	</div>
</template>

<script>
	export default {
		props: ['gender', 'skin'],
		data () {
			return {
				total_skin_shapes: 3,
				// gender1: this.gender,
				// skin_shape: this.skin ? this.skin.match(/\d+/)[0].substr(0, 2) : '01',
                // skin_color: this.skin ? this.skin.match(/\d+/)[0].substr(2, 4) : '01'
			}
		},
		computed: {
			gender1 () {
				return this.gender
			},
			skin_shape () {
				return this.skin ? this.skin.match(/\d+/)[0].substr(0, 2) : '01'
			},
			skin_color () {
				return this.skin ? this.skin.match(/\d+/)[0].substr(2, 4) : '01'
			}
		},
		methods: {
			convertTo2Digits (index) {
				return this.$parent.convertTo2Digits(index)
			},
			addToMerge (event) {
				// console.log('onClickButton')
				// console.log('event: ', event)
				// this.skin_shape = this.convertTo2Digits(event.index)
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