<template>
	<div class="flex-container-modalAvatarImg">
	    <div v-for="index in total_clothes_shapes" @click="addToMerge({gender: gender1, type: 'clothes', property: 'color', image: 'clothes' + convertTo2Digits(index) + clothes_color + '.png', index: index, layerPosition: 9})">
            <img :src="'/images/avatars/jm/' + gender1 + '/' + 'clothes' + '/' + 'min_clothes' + convertTo2Digits(index) + '001.png'" class="imgModalAvatar" :class="{active: (clothes_shape === convertTo2Digits(index)) }" style="cursor: pointer;" />
        </div>
	</div>
</template>

<script>
	export default {
		props: ['gender', 'clothes'],
		data () {
			return {
				total_clothes_shapes: 1,
			}
		},
		computed: {
			gender1 () {
				return this.gender
			},
			clothes_shape () {
				return this.clothes ? this.clothes.match(/\d+/)[0].substr(0, 2) : '01'
			},
			clothes_color () {
				return this.clothes ? this.clothes.match(/\d+/)[0].substr(2, 4) : '001'
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