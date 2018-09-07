<template>
	<div class="row" style="margin-left: 0px; margin-right: 0px;">
	    <div class="col-lg-3 col-md-4 col-xs-6" v-for="index in total_accessories_colors" style="padding-right: 5px; padding-left: 5px;" @click="addToMerge({gender: gender, type: 'accessories', property: 'color', image: 'accessories' + accessories_shape + convertTo2Digits(index) + '.png', index: index, layerPosition: 8})">
            <img :src="'/images/avatars/jm/' + gender + '/' + 'accessories' + '/' + 'colors' + '/accessoriesColor' + convertTo2Digits(index) + '.png'" class="imgModalAvatar" :class="{active: (accessories_color === convertTo2Digits(index)) }" style="cursor: pointer;" />
        </div>
	</div>
</template>

<script>
	export default {
		props: ['gender', 'accessories'],
		data () {
			return {
				total_accessories_colors: 4,
			}
		},
		computed: {
			accessories_shape () {
				return this.accessories ? this.accessories.match(/\d+/)[0].substr(0, 2) : '01'
			},
			accessories_color () {
				return this.accessories ? this.accessories.match(/\d+/)[0].substr(2, 4) : '01'
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