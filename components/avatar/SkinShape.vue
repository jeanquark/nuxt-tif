<template>
	<div class="flex-container-modalAvatarImg">
	    <div v-for="index in total_skin_shapes" @click="addToMerge({gender: gender1, type: 'skin', property: 'color', image: 'skin' + convertTo2Digits(index) + skin_color + '.png', index: index, layerPosition: 1})">
            <img :src="'/images/avatars/jm/' + gender1 + '/' + 'skin' + '/' + 'skin' + convertTo2Digits(index) + '01' + '.png'" class="imgModalAvatar" :class="{active: (skin_shape === convertTo2Digits(index)) }" style="cursor: pointer;" />
        </div>
	</div>
</template>

<script>
	export default {
		props: ['gender', 'skin'],
		data () {
			return {
				total_skin_shapes: 3,
			}
		},
		computed: {
			gender1 () {
				return this.gender
			},
			skin_shape () {
				return this.skin ? this.skin.match(/\d+/)[0].substr(0, 2) : '01'
			},
			skin_color () {
				return this.skin ? this.skin.match(/\d+/)[0].substr(2, 4) : '01'
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