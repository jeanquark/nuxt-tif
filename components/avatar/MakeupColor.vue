<template>
	<div class="row" style="margin-left: 0px; margin-right: 0px;">
		<!-- <p style="color: #000;">
			makeup_color: {{ this.makeup_color }}
		</p> -->
	    <div class="col-lg-3 col-md-4 col-xs-6" v-for="index in total_makeup_colors" style="padding-right: 5px; padding-left: 5px;" @click="addToMerge({gender: 'female', type: 'makeup', property: 'color', image: 'makeup' + makeup_shape + convertTo2Digits(index) + '.png', index: index, layerPosition: 2})">
	    	<!-- <p style="color: #000;">
	    		index: {{ convertTo2Digits(index) }}<br />
	    		makeup_color: {{ makeup_color }}
	    	</p> -->
            <img :src="'/images/avatars/jm/' + 'female' + '/' + 'makeup' + '/' + 'colors' + '/makeupColor' +convertTo2Digits(index) + '.png'" class="imgModalAvatar" :class="{active: (makeup_color === convertTo2Digits(index)) }" style="cursor: pointer;" />
        </div>
	</div>
</template>

<script>
	export default {
		props: ['makeup'],
		data () {
			return {
				total_makeup_colors: 44,
				// makeup_shape: this.makeup ? this.makeup.match(/\d+/)[0].substr(0, 2) : '01',
                // makeup_color: this.makeup ? this.makeup.match(/\d+/)[0].substr(2, 4) : '01'
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
				// console.log('onClickButton')
				// console.log('event: ', event)
				// this.makeup_color = this.convertTo2Digits(event.index)
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