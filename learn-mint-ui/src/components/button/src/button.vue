<template>
	<button 
		class="m-button"
		:class="['m-button--' + type, 'm-button--' + size,
				{'is-disabled': disabled},
				{'is-plain': plain}]"
		:disabled="disabled"
		@click="handleClick">
		<span class="m-button-icon" v-if="icon || $slots.icon">
			<slot name="icon">
				<i v-if="icon" class="mintui" :class="'mintui-' + icon "></i>
			</slot>
		</span>
		<label class="m-button-text"><slot></slot></label>
	</button>
</template>
<script>
/**
 * @module components/button
 * @desc 按钮
 * @param {string} [type=default] - 显示类型，接受 default, primary, danger
 * @param {string} [size=normal] - 尺寸，接受normal, large, small
 * @param {boolean} [disabled=false] - 禁用
 * @param {boolean} [plain=false] - 幽灵按钮
 * @param {slot} [slot] - 显示文本
 * @param {slot} [icon] - 显示图标 拼接成mintui-icon
 *
 * @example
 * <mt-button size="large" type="primary">primary</mt-button>
 */
	export default {
		name: 'mt-button',

		methods: {
			handleClick(e) {
				this.$emit('click', e);
			}
		},

		props: {
			disabled: Boolean,
			plain: Boolean,
			icon: String,
			type: {
				type: String,
				default: 'default',
				validator(value) {
					return [
						'default',
						'primary',
						'danger'
					].indexOf(value) > -1;
				}
			},
			size: {
				type: String,
				default: 'normal',
				validator(value) {
					return [
						'large',
						'normal',
						'small'
					].indexOf(value) > -1;
				}
			}
			
		}
	}
</script>
<style>
@component-namespace m {
	@component button {
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

		@descendent icon {
			vertical-align: middle;
    		display: inline-block;
		}
	}
}
</style>