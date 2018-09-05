<template>
	<div class="row" style="margin-left: 0px; margin-right: 0px;">
	    <div class="col-lg-3 col-md-4 col-xs-6" v-for="index in total_hair_shapes" style="padding-right: 5px; padding-left: 5px;" @click="addToMerge({gender: gender1, type: 'hair', property: 'color', image: 'hair' + convertTo2Digits(index) + hair_color + '.png', index: index, layerPosition: 6})">
            <img :src="'/images/avatars/jm/' + gender1 + '/' + 'hair' + '/' + 'hair' + convertTo2Digits(index) + '01' + '.png'" class="imgModalAvatar" :class="{active: (hair_shape === convertTo2Digits(index)) }" style="cursor: pointer;" />
        </div>
	</div>
</template>

<script>
	export default {
		props: ['gender', 'hair'],
		data () {
			return {
				total_hair_shapes: 11,
			}
		},
		computed: {
			gender1 () {
				return this.gender
			},
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