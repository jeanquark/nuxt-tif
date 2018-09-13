<template>
	<div class="flex-container-modal-avatar-color no-margin">
		<!-- <p>
			total_mouth_colors: {{ this.total_mouth_colors }}<br /><br />
			mouth: {{ mouth }}<br /><br />
			mouth_shape: {{ this.mouth_shape }}<br /><br />
			mouth_color2: {{ this.mouth_color2 }}<br /><br />
		</p> -->

	    <div v-for="index in total_mouth_colors" @click="addToMerge({gender: gender, type: 'mouth', property: 'color', image: 'mouth' + mouth_shape + convertTo2Digits(index) + '.png', index: index, layerPosition: 5})">
            <img :src="'/images/avatars/jm/' + gender + '/' + 'mouth' + '/' + 'colors' + '/mouthColor' + convertTo2Digits(index) + '.png'" class="imgModalAvatarColor" :class="{active: (mouth_color === convertTo2Digits(index)) }" style="cursor: pointer;" />
        </div>
	</div>
</template>

<script>
	export default {
		props: ['gender', 'mouth'],
		data () {
			return {
				total_mouth_colors: 10,
			}
		},
		computed: {
			mouth_shape () {
				return this.mouth ? this.mouth.match(/\d+/)[0].substr(0, 2) : '01'
			},
			mouth_color () {
				return this.mouth ? this.mouth.match(/\d+/)[0].substr(2, 4) : '01'
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