<template>
	<div class="flex-container-modalAvatarImg">
	    <div v-for="index in total_eyebflex-container-modalAvatarImgs_colors" @click="addToMerge({gender: gender, type: 'eyebflex-container-modalAvatarImgs', property: 'color', image: 'eyebflex-container-modalAvatarImgs' + eyebflex-container-modalAvatarImgs_shape + convertTo2Digits(index) + '.png', index: index, layerPosition: 4})">
            <img :src="'/images/avatars/jm/' + gender + '/' + 'eyebflex-container-modalAvatarImgs' + '/' + 'colors' + '/eyebflex-container-modalAvatarImgsColor' + convertTo2Digits(index) + '.png'" class="imgModalAvatar" :class="{active: (eyebflex-container-modalAvatarImgs_color === convertTo2Digits(index)) }" style="cursor: pointer;" />
        </div>
	</div>
</template>

<script>
	export default {
		props: ['gender', 'eyebflex-container-modalAvatarImgs'],
		data () {
			return {
				total_eyebflex-container-modalAvatarImgs_colors: 45,
			}
		},
		computed: {
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