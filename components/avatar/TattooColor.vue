<template>
	<div class="row" style="margin-left: 0px; margin-right: 0px;">
	    <div class="col-lg-3 col-md-4 col-xs-6" v-for="index in total_tattoo_colors" style="padding-right: 5px; padding-left: 5px;" @click="addToMerge({gender: gender, type: 'tattoo', property: 'color', image: 'tattoo' + tattoo_shape + convertTo3Digits(index) + '.png', index: index, layerPosition: 9})">
            <img :src="'/images/avatars/jm/' + gender + '/' + 'tattoo' + '/' + 'colors' + '/tattooColor' + convertTo3Digits(index) + '.png'" class="imgModalAvatar" :class="{active: (tattoo_color === convertTo3Digits(index)) }" style="cursor: pointer;" />
        </div>
	</div>
</template>

<script>
	export default {
		props: ['gender', 'tattoo'],
		data () {
			return {
				total_tattoo_colors: 10,
			}
		},
		computed: {
			tattoo_shape () {
				return this.tattoo ? this.tattoo.match(/\d+/)[0].substr(0, 2) : '01'
			},
			tattoo_color () {
				return this.tattoo ? this.tattoo.match(/\d+/)[0].substr(2, 4) : '001'
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