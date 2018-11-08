<template>
	<div class="flex-container-modal-avatar-color no-margin">
		<!-- <p>
			total_tattoo_colors: {{ this.total_tattoo_colors }}<br /><br />
			tattoo: {{ tattoo }}<br /><br />
			tattoo_shape: {{ this.tattoo_shape }}<br /><br />
			tattoo_color2: {{ this.tattoo_color2 }}<br /><br />
		</p> -->

	    <!-- <div v-for="index in total_tattoo_colors" @click="addToMerge({gender: gender, type: 'tattoo', image: 'tattoo' + tattoo_shape + convertTo2Digits(index) + '.png', index: index, layerPosition: 2})">
            <img :src="'/images/avatars/jm/' + gender + '/' + 'tattoo' + '/' + 'colors' + '/tattooColor' + convertTo2Digits(index) + '.png'" class="imgModalAvatarColor" :class="{active: (tattoo_color === convertTo2Digits(index)) }" style="cursor: pointer;" />
        </div> -->

        <carousel-3d :width="200" :height="200" :startIndex="tattoo_color - 1">
          	<slide v-for="(index, i) in total_tattoo_colors" :index="i" :key="i">
            	<img v-lazy="'/images/avatars/jm/' + gender + '/tattoo/colors/tattooColor' + convertTo2Digits(index) + '.png'" class="imgModalAvatarColor" :class="{active: (tattoo_color === convertTo2Digits(index)) }" style="cursor: pointer;" @click="addToMerge({gender: gender, type: 'tattoo', image: 'tattoo' + tattoo_shape + convertTo2Digits(index) + '.png', index: index, layerPosition: 2})" />
          	</slide>
    	</carousel-3d>
	</div>
</template>

<script>
	export default {
		props: ['gender', 'tattoo'],
		data () {
			return {
				total_tattoo_colors: 4,
			}
		},
		computed: {
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
        border: 2px solid orangered;
    }
    .imgModalAvatar {
        margin: 0px;
    }
    .carousel-3d-slide {
        position: absolute;
        opacity: 0;
        top: 0;
        border: none;
        background-size: cover;
        background-color: #fff;
        display: block;
        margin: 0;
    }
    .carousel-3d-slide img {
        background-color: #fff;
    }
</style>