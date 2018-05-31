<template>
	<div class="m-spinner">
		<component :is="spinner"></component>
	</div>
</template>
<script> 
import SpinnerSnake from './spinner/snake.vue'
import SpinnerDoubleBounce from './spinner/double-bounce.vue'
import SpinnerTrippleBounce from './spinner/tripple-bounce.vue'
import SpinnerFadingCircle from './spinner/fading-circle.vue'
const SPINNERS = [
	'snake',
	'double-bounce',
	'tripple-bounce',
	'fading-circle'
];
const parseSpinner = (index) => {
	if(typeof index === 'number') {
		if(index >= SPINNERS.length){
			console.warn(`${index} spinner not found, use the default spinner`);
			index = 0;
		}
		return SPINNERS[index];
	}

	if(SPINNERS.indexOf(index) === -1){
		console.warn(`${index} spinner not found, use the default spinner`);
		index = SPINNERS[0];
	}
	return index;
}

export default {
  name: 'mt-spinner',
  data() {
  	return {
  		spinners: ['snake']
  	}
  },
  components: {
  	SpinnerSnake,
  	SpinnerDoubleBounce,
  	SpinnerTrippleBounce,
  	SpinnerFadingCircle
  },
  props: {
  	type: {
  		default: 0
  	},
  	size: {
  		type: Number,
  		default: 28
  	},
  	color: {
  		type: String,
  		default: '#ccc'
  	}
  },
  computed: {
  	spinner() {
  		return 'spinner-'+ parseSpinner(this.type);
  	}
  }
};
</script>

