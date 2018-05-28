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

		.m-tab-item {	
			font-size: 15px;		
			padding: 17px 0;
			
			@when selected {
				border-bottom: 3px solid #26a2ff;
			    color: #26a2ff;
			    margin-bottom: -3px;
			}
		}
	}
}
</style>