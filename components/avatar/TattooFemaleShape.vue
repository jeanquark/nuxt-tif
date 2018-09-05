<template>
	<div class="row" style="margin-left: 0px; margin-right: 0px;">

		<!-- <p style="color: #000;">
			total_tattooFemale_shapes: {{ this.total_tattooFemale_shapes }}<br /><br />
			tattooFemale: {{ tattooFemale }}<br /><br />
			tattooFemale_shape: {{ this.tattooFemale_shape }}<br /><br />
			tattooFemale_color: {{ this.tattooFemale_color }}<br /><br />
		</p> -->

	    <div class="col-lg-3 col-md-4 col-xs-6" v-for="index in total_tattooFemale_shapes" style="padding-right: 5px; padding-left: 5px;" @click="addToMerge({gender: 'female', type: 'tattooFemale', property: 'color', image: 'tattooFemale' + convertTo2Digits(index) + tattooFemale_color + '.png', index: index, layerPosition: 2})">
            <img :src="'/images/avatars/jm/' + 'female' + '/' + 'tattooFemale' + '/' + 'min_tattooFemale' + convertTo2Digits(index) + '01' + '.png'" class="imgModalAvatar" :class="{active: (tattooFemale_shape === convertTo2Digits(index)) }" style="cursor: pointer;" />
        </div>
	</div>
</template>

<script>
	export default {
		props: ['tattooFemale'],
		data () {
			return {
				total_tattooFemale_shapes: 0,
			}
		},
		computed: {
			tattooFemale_shape () {
				return this.tattooFemale ? this.tattooFemale.match(/\d+/)[0].substr(0, 2) : '01'
			},
			tattooFemale_color () {
				return this.tattooFemale ? this.tattooFemale.match(/\d+/)[0].substr(2, 4) : '01'
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