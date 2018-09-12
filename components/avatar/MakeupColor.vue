<template>
	<div class="flex-container-modalAvatarImg">
	    <div v-for="index in total_makeup_colors" @click="addToMerge({gender: 'female', type: 'makeup', image: 'makeup' + makeup_shape + convertTo2Digits(index) + '.png', index: index, layerPosition: 7})">
            <img :src="'/images/avatars/jm/' + 'female' + '/' + 'makeup' + '/' + 'colors' + '/makeupColor' +convertTo2Digits(index) + '.png'" class="imgModalAvatar" :class="{active: (makeup_color === convertTo2Digits(index)) }" style="cursor: pointer;" />
        </div>
	</div>
</template>

<script>
	export default {
		props: ['makeup'],
		data () {
			return {
				total_makeup_colors: 44,
			}
		},
		computed: {
			makeup_shape () {
				return this.makeup ? this.makeup.match(/\d+/)[0].substr(0, 2) : '01'
			},
			makeup_color () {
				return this.makeup ? this.makeup.match(/\d+/)[0].substr(2, 4) : '01'
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