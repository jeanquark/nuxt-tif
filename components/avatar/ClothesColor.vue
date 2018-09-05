<template>
	<div class="row" style="margin-left: 0px; margin-right: 0px;">

		<!-- <p style="color: #000;">
			total_clothes_colors: {{ this.total_clothes_colors }}<br /><br />
			clothes: {{ clothes }}<br /><br />
			clothes_shape: {{ this.clothes_shape }}<br /><br />
			clothes_color: {{ this.clothes_color }}<br /><br />
			gender: {{ this.gender }}<br /><br />
		</p> -->

	    <div class="col-lg-3 col-md-4 col-xs-6" v-for="index in total_clothes_colors" style="padding-right: 5px; padding-left: 5px;" @click="addToMerge({gender: gender, type: 'clothes', property: 'color', image: 'clothes' + clothes_shape + convertTo2Digits(index) + '.png', index: index, layerPosition: 9})">
            <img :src="'/images/avatars/jm/' + gender + '/' + 'clothes' + '/' + 'colors' + '/clothesColor' + convertTo2Digits(index) + '.png'" class="imgModalAvatar" :class="{active: (clothes_color === convertTo2Digits(index)) }" style="cursor: pointer;" />
        </div>
	</div>
</template>

<script>
	export default {
		props: ['gender', 'clothes'],
		data () {
			return {
				total_clothes_colors: 217,
			}
		},
		computed: {
			clothes_shape () {
				return this.clothes ? this.clothes.match(/\d+/)[0].substr(0, 2) : '01'
			},
			clothes_color () {
				return this.clothes ? this.clothes.match(/\d+/)[0].substr(2, 4) : '01'
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
        border: 2px solid red;
    }
</style>