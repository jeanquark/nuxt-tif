<template>
	<div class="flex-container-modal-avatar-shape no-margin">
		<!-- <p>
			total_hair_shapes: {{ this.total_hair_shapes }}<br /><br />
			hair: {{ hair }}<br /><br />
			hair_shape: {{ this.hair_shape }}<br /><br />
			hair_color: {{ this.hair_color }}<br /><br />
		</p> -->

	    <!-- <div v-for="index in total_hair_shapes" @click="addToMerge({gender: gender1, type: 'hair', property: 'color', image: 'hair' + convertTo2Digits(index) + hair_color + '.png', index: index, layerPosition: 6})">
            <img :src="'/images/avatars/jm/' + gender1 + '/' + 'hair' + '/' + 'hair' + convertTo2Digits(index) + '01' + '.png'" class="imgModalAvatar" :class="{active: (hair_shape === convertTo2Digits(index)) }" style="cursor: pointer;" />
        </div> -->

        <carousel-3d :width="200" :height="200" :startIndex="hair_shape - 1">
            <slide v-for="(index, i) in total_hair_shapes" :index="i" :key="i" >
                <img v-lazy="'/images/avatars/jm/' + gender + '/hair/hair' + convertTo2Digits(index) + '01.png'" class="imgModalAvatar" :class="{active: (hair_shape === convertTo2Digits(index)) }" style="cursor: pointer;" @click="addToMerge({gender: gender, type: 'hair', image: 'hair' + convertTo2Digits(index) + hair_color + '.png', index: index, layerPosition: 6})" />
            </slide>
        </carousel-3d>
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