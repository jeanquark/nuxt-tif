<template>
	<div class="flex-container-modal-avatar-color no-margin">
		<!-- <p>
			total_clothes_colors: {{ this.total_clothes_colors }}<br /><br />
			clothes: {{ clothes }}<br /><br />
			clothes_shape: {{ this.clothes_shape }}<br /><br />
			clothes_color2: {{ this.clothes_color2 }}<br /><br />
		</p> -->

	    <!-- <div v-for="index in total_clothes_colors" @click="addToMerge({gender: gender, type: 'clothes', property: 'color', image: 'clothes' + clothes_shape + convertTo3Digits(index) + '.png', index: index, layerPosition: 9})">
            <img :src="'/images/avatars/jm/' + gender + '/' + 'clothes' + '/' + 'colors' + '/clothesColor' + convertTo3Digits(index) + '.png'" class="imgModalAvatarColor" :class="{active: (clothes_color === convertTo3Digits(index)) }" style="cursor: pointer;" />
        </div> -->

        <carousel-3d :width="200" :height="200" :startIndex="clothes_color - 1">
          	<slide v-for="(index, i) in total_clothes_colors" :index="i" :key="i">
            	<img v-lazy="'/images/avatars/jm/' + gender + '/clothes/colors/clothesColor' + convertTo3Digits(index) + '.png'" class="imgModalAvatarColor" :class="{active: (clothes_color === convertTo3Digits(index)) }" style="cursor: pointer;" @click="addToMerge({gender: gender, type: 'clothes', image: 'clothes' + clothes_shape + convertTo3Digits(index) + '.png', index: index, layerPosition: 9})" />
          	</slide>
    	</carousel-3d>
	</div>
</template>

<script>
	export default {
		props: ['gender', 'clothes'],
		data () {
			return {
				total_clothes_colors: 217,
			}
		},
		computed: {
			clothes_shape () {
				return this.clothes ? this.clothes.match(/\d+/)[0].substr(0, 2) : '01'
			},
			clothes_color () {
				return this.clothes ? this.clothes.match(/\d+/)[0].substr(2, 4) : '001'
			}
		},
		methods: {
			convertTo3Digits (index) {
				return this.$parent.convertTo3Digits(index)
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