<template>
	<div class="m-spinner-fading-circle" :style="{'width': spinnerSize, 'height': spinnerSize}">
		<div class="m-spinner-fading-circle-wrap"
			v-for="n in 12"
			:style="{'transform': 'rotate(calc('+(n-1)+'*30deg))'}">
			<div class="m-spinner-fading-circle-dot" 
				:style="{
					'animation-delay': 'calc(-1.2s + 0.1s*'+ (n-1) +')',
					'background-color': spinnerColor
					}">
			</div>
		</div>
	</div>
</template>
<script>
import common from './common.vue'
	export default {
		name: 'fading-circle',
		mixins: [common]
	}
</script>
<style>
@component-namespace m-spinner {
	@component fading-circle {
		position: relative;

		@descendent wrap {
			position: absolute 0 * * 0;
			size: 100%;
		}

		@descendent dot {
			background-color: #ccc;
			size: 15%;
			border-radius: 50%;
			margin: 0 auto;
			animation: fading-circle 1.2s infinite ease-in-out both;
		}
		
	}
}

@keyframes fading-circle{
	0%, 39%, 100% {
		opacity: 0;
	}
	40% {
		opacity: 1;
	}
}
</style>