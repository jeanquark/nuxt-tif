<template>
	<div class="flex-container-modalAvatarImg">
	    <div v-for="index in total_clothes_colors" @click="addToMerge({gender: gender, type: 'clothes', property: 'color', image: 'clothes' + clothes_shape + convertTo3Digits(index) + '.png', index: index, layerPosition: 9})">
            <img :src="'/images/avatars/jm/' + gender + '/' + 'clothes' + '/' + 'colors' + '/clothesColor' + convertTo3Digits(index) + '.png'" class="imgModalAvatar" :class="{active: (clothes_color === convertTo3Digits(index)) }" style="cursor: pointer;" />
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
				return this.clothes ? this.clothes.match(/\d+/)[0].substr(2, 4) : '001'
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