<template>
	<div class="flex-container-modal-avatar-color no-margin">
		<!-- <p>
			total_skin_colors: {{ this.total_skin_colors }}<br /><br />
			skin: {{ skin }}<br /><br />
			skin_shape: {{ this.skin_shape }}<br /><br />
			skin_color2: {{ this.skin_color2 }}<br /><br />
		</p> -->

	    <!-- <div v-for="index in total_skin_colors" @click="addToMerge({gender: gender, type: 'skin', property: 'color', image: 'skin' + skin_shape + convertTo2Digits(index) + '.png', index: index, layerPosition: 1})">
            <img :src="'/images/avatars/jm/' + gender + '/' + 'skin' + '/' + 'colors' + '/skinColor' + convertTo2Digits(index) + '.png'" class="imgModalAvatarColor" :class="{active: (skin_color === convertTo2Digits(index)) }" style="cursor: pointer;" />
        </div> -->

        <carousel-3d :width="200" :height="200" :startIndex="skin_color - 1">
          	<slide v-for="(index, i) in total_skin_colors" :index="i" :key="i">
            	<img v-lazy="'/images/avatars/jm/' + gender + '/skin/colors/skinColor' + convertTo2Digits(index) + '.png'" class="imgModalAvatarColor" :class="{active: (skin_color === convertTo2Digits(index)) }" style="cursor: pointer;" @click="addToMerge({gender: gender, type: 'skin', image: 'skin' + skin_shape + convertTo2Digits(index) + '.png', index: index, layerPosition: 1})" />
          	</slide>
    	</carousel-3d>
	</div>
</template>

<script>
	export default {
		props: ['gender', 'skin'],
		data () {
			return {
				total_skin_colors: 33,
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