<template>
	<div class="row" style="margin-left: 0px; margin-right: 0px;">
		<!-- <p style="color: #000;">
			total_beard_shapes: {{ this.total_beard_shapes }}<br /><br />
			beard: {{ beard }}<br /><br />
			beard_shape: {{ this.beard_shape }}<br /><br />
			beard_color: {{ this.beard_color }}<br /><br />
		</p> -->
	    <div class="col-lg-3 col-md-4 col-xs-6" v-for="index in total_beard_shapes" style="padding-right: 5px; padding-left: 5px;" @click="addToMerge({gender: 'male', type: 'beard', property: 'color', image: 'beard' + convertTo2Digits(index) + beard_color + '.png', index: index, layerPosition: 2})">
            <img :src="'/images/avatars/jm/' + 'male' + '/' + 'beard' + '/' + 'min_beard' + convertTo2Digits(index) + '01' + '.png'" class="imgModalAvatar" :class="{active: (beard_shape === convertTo2Digits(index)) }" style="cursor: pointer;" />
        </div>
	</div>
</template>

<script>
	export default {
		props: ['beard'],
		data () {
			return {
				total_beard_shapes: 4,
				// beard_shape: this.beard ? this.beard.match(/\d+/)[0].substr(0, 2) : '01',
                // beard_color: this.beard ? this.beard.match(/\d+/)[0].substr(2, 4) : '01'
			}
		},
		computed: {
			beard_shape () {
				return this.beard ? this.beard.match(/\d+/)[0].substr(0, 2) : '01'
			},
			beard_color () {
				return this.beard ? this.beard.match(/\d+/)[0].substr(2, 4) : '01'
			}
		},
		methods: {
			convertTo2Digits (index) {
				return this.$parent.convertTo2Digits(index)
			},
			addToMerge (event) {
				// console.log('onClickButton')
				// console.log('event: ', event)
				// this.beard_shape = this.convertTo2Digits(event.index)
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