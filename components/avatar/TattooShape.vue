<template>
	<div class="row" style="margin-left: 0px; margin-right: 0px;">
		<p style="color: #000;">
			total_tattoo_shapes: {{ this.total_tattoo_shapes }}<br /><br />
			tattoo: {{ tattoo }}<br /><br />
			tattoo_shape: {{ this.tattoo_shape }}<br /><br />
			tattoo_color: {{ this.tattoo_color }}<br /><br />
		</p>
	    <div class="col-lg-3 col-md-4 col-xs-6" v-for="index in total_tattoo_shapes" style="padding-right: 5px; padding-left: 5px;" @click="addToMerge({gender: gender1, type: 'tattoo', image: 'tattoo' + convertTo2Digits(index) + tattoo_color + '.png', index: index, layerPosition: 2})">
            <img :src="'/images/avatars/jm/' + gender1 + '/' + 'tattoo' + '/' + 'min_tattoo' + convertTo2Digits(index) + '01.png'" class="imgModalAvatar" :class="{active: (tattoo_shape === convertTo2Digits(index)) }" style="cursor: pointer;" />
        </div>
	</div>
</template>

<script>
	export default {
		props: ['gender', 'tattoo'],
		data () {
			return {
				total_tattoo_shapes: 2,
			}
		},
		computed: {
			gender1 () {
				return this.gender
			},
			tattoo_shape () {
				return this.tattoo ? this.tattoo.match(/\d+/)[0].substr(0, 2) : '01'
			},
			tattoo_color () {
				return this.tattoo ? this.tattoo.match(/\d+/)[0].substr(2, 4) : '01'
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