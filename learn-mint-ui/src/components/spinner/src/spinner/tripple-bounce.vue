<template>
	<div class="m-spinner-tripple-bounce">
		<span class="m-spinner-tripple-bounce-dot1" :style="bounceStyle"></span>
		<span class="m-spinner-tripple-bounce-dot2" :style="bounceStyle"></span>
		<span class="m-spinner-tripple-bounce-dot3" :style="bounceStyle"></span>
	</div>
</template>
<script>
import common from './common.vue'
	export default {
		name: 'tripple-bounce',
		mixins: [common],
		computed: {
			spinnerSize() {
				return ((this.size || this.$parent.size || 28) / 3) + 'px';
			},
			bounceStyle() {
				return {
					'width': this.spinnerSize,
					'height': this.spinnerSize,
					'background-color': this.spinnerColor
				}
			}
		}
	}
</script>
<style>
.m-spinner-tripple-bounce-dot1,
.m-spinner-tripple-bounce-dot2,
.m-spinner-tripple-bounce-dot3 {
	border-radius: 50%;
	animation: bounce 1.4s infinite ease-in-out both;
	display: inline-block;
}
.m-spinner-tripple-bounce-dot1{
	animation-delay: -0.32s;
}
.m-spinner-tripple-bounce-dot2{
	animation-delay: -0.16s;
}
@keyframes bounce{
	0%, 80%, 100% {
		transform: scale(0);
	}
	40% {
		transform: scale(1);
	}
}
</style>