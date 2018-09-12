<template>
	<div class="row">
	    <div v-for="index in total_eyebrows_shapes" @click="addToMerge({gender: gender1, type: 'eyebrows', property: 'color', image: 'eyebrows' + convertTo2Digits(index) + eyebrows_color + '.png', index: index, layerPosition: 4})">
            <img :src="'/images/avatars/jm/' + gender1 + '/' + 'eyebrows' + '/' + 'eyebrows' + convertTo2Digits(index) + '01' + '.png'" class="imgModalAvatar" :class="{active: (eyebrows_shape === convertTo2Digits(index)) }" style="cursor: pointer;" />
        </div>
	</div>
</template>

<script>
	export default {
		props: ['gender', 'eyebrows'],
		data () {
			return {
				total_eyebrows_shapes: 17,
			}
		},
		computed: {
			gender1 () {
				return this.gender
			},
			eyebrows_shape () {
				return this.eyebrows ? this.eyebrows.match(/\d+/)[0].substr(0, 2) : '01'
			},
			eyebrows_color () {
				return this.eyebrows ? this.eyebrows.match(/\d+/)[0].substr(2, 4) : '01'
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