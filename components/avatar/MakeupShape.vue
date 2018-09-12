<template>
	<div class="flex-container-modalAvatarImg">
	    <div v-for="index in total_makeup_shapes" @click="addToMerge({gender: 'female', type: 'makeup', image: 'makeup' + convertTo2Digits(index) + makeup_color + '.png', index: index, layerPosition: 7})">
            <img :src="'/images/avatars/jm/' + 'female' + '/' + 'makeup' + '/' + 'min_makeup' + convertTo2Digits(index) + '01' + '.png'" class="imgModalAvatar" :class="{active: (makeup_shape === convertTo2Digits(index)) }" style="cursor: pointer;" />
        </div>
	</div>
</template>

<script>
	export default {
		props: ['makeup'],
		data () {
			return {
				total_makeup_shapes: 4,
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