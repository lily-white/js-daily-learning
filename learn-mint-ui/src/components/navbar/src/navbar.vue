<template>
	<div class="m-navbar" :class="{'is-fixed': fixed}">
		<slot></slot>
	</div>
</template>
<script>
	/**
	 * mt-navbar
	 * @module components/navbar
	 * @param {boolean} [fixed=false] - 固定顶部
	 * @param {*} [value] - 接受tab-item触发click传入v-model的值
	 *
	 */
	export default {
		name: 'mt-navbar',
		props: {
			fixed: Boolean,
			value: {}
		}
	}
</script>
<style>
@component-namespace m {
	@component navbar {
		background-color: #fff;
		display: flex;
		align-items: center;

		@when fixed{
			position: fixed 0 0 * 0;
		}
	}
}
</style>