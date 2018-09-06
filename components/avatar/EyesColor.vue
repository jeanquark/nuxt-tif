<template>
	<div class="row" style="margin-left: 0px; margin-right: 0px;">
	    <div class="col-lg-3 col-md-4 col-xs-6" v-for="index in total_eyes_colors" style="padding-right: 5px; padding-left: 5px;" @click="addToMerge({gender: gender, type: 'eyes', property: 'color', image: 'eyes' + eyes_shape + convertTo2Digits(index) + '.png', index: index, layerPosition: 3})">
            <img :src="'/images/avatars/jm/' + gender + '/' + 'eyes' + '/' + 'colors' + '/eyesColor' + convertTo2Digits(index) + '.png'" class="imgModalAvatar" :class="{active: (eyes_color === convertTo2Digits(index)) }" style="cursor: pointer;" />
        </div>
	</div>
</template>

<script>
	export default {
		props: ['gender', 'eyes'],
		data () {
			return {
				total_eyes_colors: 54,
			}
		},
		computed: {
			eyes_shape () {
				return this.eyes ? this.eyes.match(/\d+/)[0].substr(0, 2) : '01'
			},
			eyes_color () {
				return this.eyes ? this.eyes.match(/\d+/)[0].substr(2, 4) : '01'
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