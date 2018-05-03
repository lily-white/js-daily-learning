<template>
	<header class="m-header">
		<div class="m-header-button is-left">
			<slot name="left">&lt;</slot>
		</div>
		<h1 v-text="title"></h1>
		<div class="m-header-button is-right">
			<slot name="right"></slot>
		</div>
	</header>
</template>
<script>
	export default {
		name: 'mt-header',
		props: {
			title: String
		}
	};
</script>
<style>
	.m-header {
		display: flex;
		align-items: center;
	}
	.m-header-button {
		flex: .5;
	}
	.is-left {
		text-align: left;
	}
</style>