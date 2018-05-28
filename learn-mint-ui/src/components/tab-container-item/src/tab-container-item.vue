<template>
	<div class="m-tab-container-item" v-show="$parent.value === id">
		<slot></slot>
	</div>
</template>
<script>
/**
 * mt-tab-container-item
 * @desc 搭配 tab-container 使用
 * @module components/tab-container-item
 *
 * @param {number|string} [id] - 该项的 id
 *
 * @example
 * <mt-tab-container v-model="selected">
 *   <mt-tab-container-item id="1"> 内容A </mt-tab-container-item>
 *   <mt-tab-container-item id="2"> 内容B </mt-tab-container-item>
 *   <mt-tab-container-item id="3"> 内容C </mt-tab-container-item>
 * </mt-tab-container>
 */
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
