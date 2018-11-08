<template>
	<div class="flex-container-modal-avatar-color no-margin">
		<!-- <p>
			total_eyes_colors: {{ this.total_eyes_colors }}<br /><br />
			eyes: {{ eyes }}<br /><br />
			eyes_shape: {{ this.eyes_shape }}<br /><br />
			eyes_color2: {{ this.eyes_color2 }}<br /><br />
		</p> -->

	    <!-- <div v-for="index in total_eyes_colors" @click="addToMerge({gender: gender, type: 'eyes', property: 'color', image: 'eyes' + eyes_shape + convertTo2Digits(index) + '.png', index: index, layerPosition: 3})">
            <img :src="'/images/avatars/jm/' + gender + '/' + 'eyes' + '/' + 'colors' + '/eyesColor' + convertTo2Digits(index) + '.png'" class="imgModalAvatarColor" :class="{active: (eyes_color === convertTo2Digits(index)) }" style="cursor: pointer;" />
        </div> -->

        <carousel-3d :width="200" :height="200" :startIndex="eyes_color - 1">
          	<slide v-for="(index, i) in total_eyes_colors" :index="i" :key="i">
            	<img v-lazy="'/images/avatars/jm/' + gender + '/eyes/colors/eyesColor' + convertTo2Digits(index) + '.png'" class="imgModalAvatarColor" :class="{active: (eyes_color === convertTo2Digits(index)) }" style="cursor: pointer;" @click="addToMerge({gender: gender, type: 'eyes', image: 'eyes' + eyes_shape + convertTo2Digits(index) + '.png', index: index, layerPosition: 3})" />
          	</slide>
    	</carousel-3d>
	</div>
</template>

<script>
	export default {
		props: ['gender', 'eyes'],
		data () {
			return {
				total_eyes_colors: 54,
			}
		},
		computed: {
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