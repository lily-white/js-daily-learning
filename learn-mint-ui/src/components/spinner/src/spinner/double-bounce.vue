<template>
	<div class="m-spinner-double-bounce" :style="{width: spinnerSize, height: spinnerSize}">
		<div class="m-spinner-double-bounce1" :style="{'background-color': spinnerColor}"></div>
		<div class="m-spinner-double-bounce2" :style="{'background-color': spinnerColor}"></div>
	</div>
</template>
<script>
import common from './common.vue'
	export default {
		name: 'double-bounce',
		mixins: [common]
	}
</script>
<style>
.m-spinner-double-bounce{
	position: relative;
}
.m-spinner-double-bounce1,
.m-spinner-double-bounce2 {
	border-radius: 50%;
	width: 100%;
	height: 100%;
	animation: double-bounce 2s ease-in-out infinite;
	position: absolute;
	top: 0;
	left: 0;
	opacity: 0.6;
}
.m-spinner-double-bounce2 {
	animation-delay: -1s;
}
@keyframes double-bounce{
	0%, 100% {
		transform: scale(0);
	}
	50% {
		transform: scale(1);
	}
}
</style>