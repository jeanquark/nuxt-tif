<template>
	<div class="flex-container-modalAvatarImg">
	    <div v-for="index in total_eyebflex-container-modalAvatarImgs_shapes" @click="addToMerge({gender: gender1, type: 'eyebflex-container-modalAvatarImgs', property: 'color', image: 'eyebflex-container-modalAvatarImgs' + convertTo2Digits(index) + eyebflex-container-modalAvatarImgs_color + '.png', index: index, layerPosition: 4})">
            <img :src="'/images/avatars/jm/' + gender1 + '/' + 'eyebflex-container-modalAvatarImgs' + '/' + 'eyebflex-container-modalAvatarImgs' + convertTo2Digits(index) + '01' + '.png'" class="imgModalAvatar" :class="{active: (eyebflex-container-modalAvatarImgs_shape === convertTo2Digits(index)) }" style="cursor: pointer;" />
        </div>
	</div>
</template>

<script>
	export default {
		props: ['gender', 'eyebflex-container-modalAvatarImgs'],
		data () {
			return {
				total_eyebflex-container-modalAvatarImgs_shapes: 17,
			}
		},
		computed: {
			gender1 () {
				return this.gender
			},
			eyebflex-container-modalAvatarImgs_shape () {
				return this.eyebflex-container-modalAvatarImgs ? this.eyebflex-container-modalAvatarImgs.match(/\d+/)[0].substr(0, 2) : '01'
			},
			eyebflex-container-modalAvatarImgs_color () {
				return this.eyebflex-container-modalAvatarImgs ? this.eyebflex-container-modalAvatarImgs.match(/\d+/)[0].substr(2, 4) : '01'
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