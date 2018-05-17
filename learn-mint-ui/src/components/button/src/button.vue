<template>
	<div>
		<button 
			class="m-button"
			:class="['m-button-' + type, 'm-button-' + size]">
			<label><slot></slot></label>
		</button>
	</div>
</template>
<script>
	export default {
		name: 'mt-button',
		props: {
			type: {
				type: String,
				default: 'default'
			},
			size: {
				type: String,
				default: 'normal'
			}
		}
	}
</script>
<style>
	.m-button {
		appearance: none;
		border-radius: 4px;
		border: 0;
		box-sizing: border-box;
		font-size: 18px;
		height: 41px;
		outline: 0;
	    overflow: hidden;
	    position: relative;
	    text-align: center;
	}
	.m-button-default {
		color: #656b79;
	    background-color: #f6f8fa;
	    box-shadow: 0 0 1px #b8bbbf;
	}
</style>