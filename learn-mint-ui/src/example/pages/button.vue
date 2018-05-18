<template>
	<div class="page-button">
		<div class="page-button-group">
			<button class="m-button m-button--default m-button--large">default</button>
			<button class="m-button m-button--primary m-button--large">primary</button>
			<button class="m-button m-button--danger m-button--large">danger</button>
		</div>
		<div class="page-button-group">
			<button class="m-button m-button--default m-button--normal">default</button>
			<button class="m-button m-button--primary m-button--normal">primary</button>
			<button class="m-button m-button--danger m-button--normal">danger</button>
		</div>
		<div class="page-button-group">
			<button class="m-button m-button--default m-button--small">default</button>
			<button class="m-button m-button--primary m-button--small">primary</button>
			<button class="m-button m-button--danger m-button--small">danger</button>
		</div>
		<div class="page-button-group">
			<button class="m-button m-button--default m-button--large is-disabled" disabled="disabled">default</button>
			<button class="m-button m-button--primary m-button--large is-disabled" disabled="disabled">primary</button>
			<button class="m-button m-button--danger m-button--large is-disabled" disabled="disabled">danger</button>
		</div>
		<div class="page-button-group">
			<button class="m-button m-button--default m-button--large is-plain">default</button>
			<button class="m-button m-button--primary m-button--large is-plain">primary</button>
			<button class="m-button m-button--danger m-button--large is-plain">danger</button>
		</div>
		<div class="page-button-group">
			<button class="m-button m-button--default m-button--normal">
				<span class="m-button-icon">
        			<img src="../assets/100x100.png" height="20" width="20" slot="icon">
        		</span>
				<span class="m-button-text">带自定义图标</span>
			</button>
		</div>
	</div>
</template>
<script>
	export default{
		name: 'Button'
	}
</script>
<style>
	.page-button {
		padding: 10px;
	}
	.page-button-group > * {
		margin-bottom: 15px;
	}
	@component m-button {
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

		@when disabled {
		    opacity: .6;
		}

	    @modifier default {
			color: #656b79;
		    background-color: #f6f8fa;
		    box-shadow: 0 0 1px #b8bbbf;

		    @when plain {
				border: 1px solid #5a5a5a;
				color: #5a5a5a;
				background-color: transparent;
				box-shadow: none;
			}
		}

		@modifier primary {
			color: #fff;
		    background-color: #26a2ff;

		    @when plain {
				border: 1px solid #26a2ff;
				color: #26a2ff;
				background-color: transparent;
			}
		}

		@modifier danger {
			color: #fff;
		    background-color: #ef4f4f;

		    @when plain {
				border: 1px solid #ef4f4f;
				color: #ef4f4f;
				background-color: transparent;
			}
		}

		@modifier large {
			display: block;
			width: 100%;
		}

		@modifier normal {
			display: inline-block;
			padding: 0 12px;
		}

		@modifier small {
			display: inline-block;
			font-size: 14px;
		    padding: 0 12px;
		    height: 33px;
		}
	}
</style>