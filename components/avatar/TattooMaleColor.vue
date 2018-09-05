<template>
	<div class="row" style="margin-left: 0px; margin-right: 0px;">
	    <div class="col-lg-3 col-md-4 col-xs-6" v-for="index in total_tattooMale_colors" style="padding-right: 5px; padding-left: 5px;" @click="addToMerge({gender: 'male', type: 'tattooMale', property: 'color', image: 'tattooMale' + tattooMale_shape + convertTo2Digits(index) + '.png', index: index, layerPosition: 2})">
            <img :src="'/images/avatars/jm/' + 'male' + '/' + 'tattooMale' + '/' + 'colors' + '/tattooMaleColor' +convertTo2Digits(index) + '.png'" class="imgModalAvatar" :class="{active: (tattooMale_color === convertTo2Digits(index)) }" style="cursor: pointer;" />
        </div>
	</div>
</template>

<script>
	export default {
		props: ['tattooMale'],
		data () {
			return {
				total_tattooMale_colors: 0,
			}
		},
		computed: {
			tattooMale_shape () {
				return this.tattooMale ? this.tattooMale.match(/\d+/)[0].substr(0, 2) : '01'
			},
			tattooMale_color () {
				return this.tattooMale ? this.tattooMale.match(/\d+/)[0].substr(2, 4) : '01'
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