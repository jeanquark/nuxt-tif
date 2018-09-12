<template>
	<div class="flex-container-modal-avatar-shape">
	    <div v-for="index in total_eyes_shapes" @click="addToMerge({gender: gender1, type: 'eyes', property: 'color', image: 'eyes' + convertTo2Digits(index) + eyes_color + '.png', index: index, layerPosition: 3})">
            <img :src="'/images/avatars/jm/' + gender1 + '/' + 'eyes' + '/' + 'eyes' + convertTo2Digits(index) + '01' + '.png'" class="imgModalAvatar" :class="{active: (eyes_shape === convertTo2Digits(index)) }" style="cursor: pointer;" />
        </div>
	</div>
</template>

<script>
	export default {
		props: ['gender', 'eyes'],
		data () {
			return {
				total_eyes_shapes: 9,
			}
		},
		computed: {
			gender1 () {
				return this.gender
			},
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