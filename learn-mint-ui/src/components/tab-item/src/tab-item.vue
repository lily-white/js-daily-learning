<template>
	<a class="m-tab-item" 
	   @click="$parent.$emit('input', id)"
	   :class="{'is-selected' : id == $parent.value }">
		<div class="m-tab-item-icon">
			<slot name="icon"></slot>
		</div>
		<div class="m-tab-item-label"><slot></slot></div>
	</a>
</template>
<script>
/**
 * mt-tab-item
 * @module components/tab-item
 * @desc 搭配 tabbar 或 navbar 使用
 * @param {*} id - 选中后的返回值，任意类型
 * @param {slot} [icon] - icon 图标
 * @param {slot} - 文字
 *
 */
	export default {
		name: 'mt-tab-item',
		props: {
			id: {}
		}
	}
</script>
<style>
@component-namespace m {
	@component tab {
		@descendent item {
			flex: 1;
			font-size: 12px;
			padding: 7px 0;
			text-align: center;
			text-decoration: none;
			display: block;

			@descendent icon {
	    		width: 24px;
	    		height: 24px;
	    		margin: 0 auto 5px;

	    		&:empty {
	    			display: none;
	    		}
	    		
	    		img {
		    		size: 100%;
		    		display: block;
		    	}
	    	}

			@descendent label {
				font-size: 12px;
				line-height: 1;
				color: inherit;
			}
		}
	}
}
</style>