<template>
	<div class="flex-container-modal-avatar-shape no-margin">
		<!-- <p>
			total_skin_shapes: {{ this.total_skin_shapes }}<br /><br />
			skin: {{ skin }}<br /><br />
			skin_shape: {{ this.skin_shape }}<br /><br />
			skin_color: {{ this.skin_color }}<br /><br />
		</p> -->

        <!-- <div v-for="index in total_skin_shapes" @click="addToMerge({gender: gender1, type: 'skin', property: 'color', image: 'skin' + convertTo2Digits(index) + skin_color + '.png', index: index, layerPosition: 1})">
            <img :src="'/images/avatars/jm/' + gender1 + '/' + 'skin' + '/' + 'skin' + convertTo2Digits(index) + '01' + '.png'" class="imgModalAvatar" :class="{active: (skin_shape === convertTo2Digits(index)) }" style="cursor: pointer;" />
        </div> -->

        <carousel-3d :width="200" :height="200" :startIndex="skin_shape - 1">
            <slide v-for="(index, i) in total_skin_shapes" :index="i" :key="i" >
                <img v-lazy="'/images/avatars/jm/' + gender + '/skin/skin' + convertTo2Digits(index) + '01.png'" class="imgModalAvatar" :class="{active: (skin_shape === convertTo2Digits(index)) }" style="cursor: pointer;" @click="addToMerge({gender: gender, type: 'skin', image: 'skin' + convertTo2Digits(index) + skin_color + '.png', index: index, layerPosition: 1})" />
            </slide>
        </carousel-3d>
	</div>
</template>


<script>
	export default {
		props: ['gender', 'skin'],
		data () {
			return {
				total_skin_shapes: 3,
			}
		},
		computed: {
			gender1 () {
				return this.gender
			},
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