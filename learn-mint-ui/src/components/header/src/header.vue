<template>
	<header class="m-header"
			:class="{'is-fixed': fixed}">
		<div class="m-header-button is-left">
			<slot name="left"></slot>
		</div>
		<h1 class="m-header-title" v-text="title"></h1>
		<div class="m-header-button is-right">
			<slot name="right"></slot>
		</div>
	</header>
</template>
<script>
	export default {
		name: 'mt-header',
		props: {
			title: String,
			fixed: Boolean
		}
	};
</script>
<style>
@component-namespace m {
	@component header {
		display: flex;
		align-items: center;
		background-color: #26a2ff;
		color: #fff;
		box-sizing: border-box;
		font-size: 14px;
		height: 40px;
	    line-height: 1;
	    padding: 0 10px;
	    text-align: center;
    	white-space: nowrap;
    	position: relative;
    	@when fixed {
			position: fixed;
			left: 0;
			right: 0;
			top: 0;
		}
		@descendent button {
			flex: .5;
			@when left {
				text-align: left;
			}
			@when right {
				text-align: right;
			}
	    }
	    @descendent title {
			line-height: 2;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			font-size: inherit;
			font-weight: normal;
			flex: 1;
		}
	}
}
</style>