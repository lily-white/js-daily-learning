<template>
	<div class="m-tab-container-item" v-show="$parent.value === id">
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
		
	}
</style>
