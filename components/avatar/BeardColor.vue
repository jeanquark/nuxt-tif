<template>
	<div class="flex-container-modal-avatar-color no-margin">
		<!-- <p>
			total_beard_colors: {{ this.total_beard_colors }}<br /><br />
			beard: {{ beard }}<br /><br />
			beard_shape: {{ this.beard_shape }}<br /><br />
			beard_color2: {{ this.beard_color2 }}<br /><br />
		</p> -->

	    <div v-for="index in total_beard_colors" @click="addToMerge({gender: 'male', type: 'beard', image: 'beard' + beard_shape + convertTo2Digits(index) + '.png', index: index, layerPosition: 7})">
            <img :src="'/images/avatars/jm/' + 'male' + '/' + 'beard' + '/' + 'colors' + '/beardColor' +convertTo2Digits(index) + '.png'" class="imgModalAvatarColor" :class="{active: (beard_color === convertTo2Digits(index)) }" style="cursor: pointer;" />
        </div>
	</div>
</template>

<script>
	export default {
		props: ['beard'],
		data () {
			return {
				total_beard_colors: 44,
			}
		},
		computed: {
			beard_shape () {
				return this.beard ? this.beard.match(/\d+/)[0].substr(0, 2) : '01'
			},
			beard_color () {
				return this.beard ? this.beard.match(/\d+/)[0].substr(2, 4) : '01'
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