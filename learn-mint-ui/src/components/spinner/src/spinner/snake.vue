<template>
	<div class="m-spinner-snake" :style="{
		'width': spinnerSize, 
		'height': spinnerSize, 
		'border-left-color': spinnerColor,
		'border-top-color': spinnerColor,
		'border-bottom-color': spinnerColor
		}">
	</div>
</template>
<script>
import common from './common.vue'
	export default {
		name: 'snake',
		mixins: [common]
	}
</script>
<style>
.m-spinner-snake {
	border-radius: 50%;
	border: 4px solid transparent;
	animation: snake 0.8s linear infinite;
}
@keyframes snake{
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>