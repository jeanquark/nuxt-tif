<template>
	<div class="flex-container-modal-avatar-color no-margin">
		<!-- <p>
			total_hair_colors: {{ this.total_hair_colors }}<br /><br />
			hair: {{ hair }}<br /><br />
			hair_shape: {{ this.hair_shape }}<br /><br />
			hair_color2: {{ this.hair_color2 }}<br /><br />
		</p> -->

	    <div v-for="index in total_hair_colors" @click="addToMerge({gender: gender, type: 'hair', property: 'color', image: 'hair' + hair_shape + convertTo2Digits(index) + '.png', index: index, layerPosition: 6})">
            <img :src="'/images/avatars/jm/' + gender + '/' + 'hair' + '/' + 'colors' + '/hairColor' + convertTo2Digits(index) + '.png'" class="imgModalAvatarColor" :class="{active: (hair_color === convertTo2Digits(index)) }" style="cursor: pointer;" />
        </div>
	</div>
</template>

<script>
	export default {
		props: ['gender', 'hair'],
		data () {
			return {
				total_hair_colors: 45,
			}
		},
		computed: {
			hair_shape () {
				return this.hair ? this.hair.match(/\d+/)[0].substr(0, 2) : '01'
			},
			hair_color () {
				return this.hair ? this.hair.match(/\d+/)[0].substr(2, 4) : '01'
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