<template>
	<div class="m-tab-container-item">
		<slot></slot>
	</div>
</template>
<script>
	export default {
		name: 'mt-tab-container-item',
		props: {
			id: {}
		}
	}
</script>
<style>
	.m-tab-container-item {
		flex-shrink: 0;
		width: 100%

		
	}
</style>
