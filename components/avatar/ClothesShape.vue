<template>
	<div class="flex-container-modal-avatar-shape no-margin">
		<!-- <p>
			total_clothes_shapes: {{ this.total_clothes_shapes }}<br /><br />
			clothes: {{ clothes }}<br /><br />
			clothes_shape: {{ this.clothes_shape }}<br /><br />
			clothes_color: {{ this.clothes_color }}<br /><br />
		</p> -->

	    <!-- <div v-for="index in total_clothes_shapes" @click="addToMerge({gender: gender1, type: 'clothes', property: 'color', image: 'clothes' + convertTo2Digits(index) + clothes_color + '.png', index: index, layerPosition: 9})">
            <img :src="'/images/avatars/jm/' + gender1 + '/' + 'clothes' + '/' + 'min_clothes' + convertTo2Digits(index) + '001.png'" class="imgModalAvatar" :class="{active: (clothes_shape === convertTo2Digits(index)) }" style="cursor: pointer;" />
        </div> -->

        <carousel-3d :width="200" :height="200" :startIndex="clothes_shape - 1">
            <slide v-for="(index, i) in total_clothes_shapes" :index="i" :key="i" >
                <img v-lazy="'/images/avatars/jm/' + gender + '/clothes/clothes' + convertTo2Digits(index) + '001.png'" class="imgModalAvatar" :class="{active: (clothes_shape === convertTo2Digits(index)) }" style="cursor: pointer;" @click="addToMerge({gender: gender, type: 'clothes', image: 'clothes' + convertTo2Digits(index) + clothes_color + '.png', index: index, layerPosition: 9})" />
            </slide>
        </carousel-3d>
	</div>
</template>

<script>
	export default {
		props: ['gender', 'clothes'],
		data () {
			return {
				total_clothes_shapes: 1,
			}
		},
		computed: {
			gender1 () {
				return this.gender
			},
			clothes_shape () {
				return this.clothes ? this.clothes.match(/\d+/)[0].substr(0, 2) : '01'
			},
			clothes_color () {
				return this.clothes ? this.clothes.match(/\d+/)[0].substr(2, 4) : '001'
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