<template>
	<div class="row" style="margin-left: 0px; margin-right: 0px;">

		<!-- <p style="color: #000;">
			total_skin_colors: {{ this.total_skin_colors }}<br /><br />
			skin: {{ skin }}<br /><br />
			skin_shape: {{ this.skin_shape }}<br /><br />
			skin_color: {{ this.skin_color }}<br /><br />
			gender: {{ this.gender }}<br /><br />
		</p> -->

	    <div class="col-lg-3 col-md-4 col-xs-6" v-for="index in total_skin_colors" style="padding-right: 5px; padding-left: 5px;" @click="addToMerge({gender: gender, type: 'skin', property: 'color', image: 'skin' + skin_shape + convertTo2Digits(index) + '.png', index: index, layerPosition: 1})">
            <img :src="'/images/avatars/jm/' + gender + '/' + 'skin' + '/' + 'colors' + '/skinColor' + convertTo2Digits(index) + '.png'" class="imgModalAvatar" :class="{active: (skin_color === convertTo2Digits(index)) }" style="cursor: pointer;" />
        </div>
	</div>
</template>

<script>
	export default {
		props: ['gender', 'skin'],
		data () {
			return {
				total_skin_colors: 10,
			}
		},
		computed: {
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