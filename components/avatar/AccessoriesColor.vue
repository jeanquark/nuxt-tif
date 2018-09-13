<template>
	<div class="flex-container-modal-avatar-color no-margin">
		<!-- <p>
			total_accessories_colors: {{ this.total_accessories_colors }}<br /><br />
			accessories: {{ accessories }}<br /><br />
			accessories_shape: {{ this.accessories_shape }}<br /><br />
			accessories_color2: {{ this.accessories_color2 }}<br /><br />
		</p> -->

	    <div v-for="index in total_accessories_colors" @click="addToMerge({gender: gender, type: 'accessories', property: 'color', image: 'accessories' + accessories_shape + convertTo2Digits(index) + '.png', index: index, layerPosition: 8})">
            <img :src="'/images/avatars/jm/' + gender + '/' + 'accessories' + '/' + 'colors' + '/accessoriesColor' + convertTo2Digits(index) + '.png'" class="imgModalAvatarColor" :class="{active: (accessories_color === convertTo2Digits(index)) }" style="cursor: pointer;" />
        </div>
	</div>
</template>

<script>
	export default {
		props: ['gender', 'accessories'],
		data () {
			return {
				total_accessories_colors: 4,
			}
		},
		computed: {
			accessories_shape () {
				return this.accessories ? this.accessories.match(/\d+/)[0].substr(0, 2) : '01'
			},
			accessories_color () {
				return this.accessories ? this.accessories.match(/\d+/)[0].substr(2, 4) : '01'
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