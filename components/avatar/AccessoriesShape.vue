<template>
	<div class="flex-container-modal-avatar-shape no-margin">
		<!-- <p>
			total_accessories_shapes: {{ this.total_accessories_shapes }}<br /><br />
			accessories: {{ accessories }}<br /><br />
			accessories_shape: {{ this.accessories_shape }}<br /><br />
			accessories_color: {{ this.accessories_color }}<br /><br />
		</p> -->

	    <!-- <div v-for="index in total_accessories_shapes" @click="addToMerge({gender: gender1, type: 'accessories', property: 'color', image: 'accessories' + convertTo2Digits(index) + accessories_color + '.png', index: index, layerPosition: 8})">
            <img :src="'/images/avatars/jm/' + gender1 + '/' + 'accessories' + '/' + 'accessories' + convertTo2Digits(index) + '01.png'" class="imgModalAvatar" :class="{active: (accessories_shape === convertTo2Digits(index)) }" style="cursor: pointer;" />
        </div> -->

        <carousel-3d :width="200" :height="200" :startIndex="accessories_shape - 1">
            <slide v-for="(index, i) in total_accessories_shapes" :index="i" :key="i" >
                <img v-lazy="'/images/avatars/jm/' + gender + '/accessories/accessories' + convertTo2Digits(index) + '01.png'" class="imgModalAvatar" :class="{active: (accessories_shape === convertTo2Digits(index)) }" style="cursor: pointer;" @click="addToMerge({gender: gender, type: 'accessories', image: 'accessories' + convertTo2Digits(index) + accessories_color + '.png', index: index, layerPosition: 8})" />
            </slide>
        </carousel-3d>
	</div>
</template>

<script>
	export default {
		props: ['gender', 'accessories'],
		data () {
			return {
				total_accessories_shapes: 2,
			}
		},
		computed: {
			gender1 () {
				return this.gender
			},
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