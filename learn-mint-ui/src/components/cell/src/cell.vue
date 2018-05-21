<template>
	<a class="m-cell" :href="href">
		<span class="m-cell-mask" v-if="isLink"></span>
		<div class="m-cell-wrapper">
			<div class="m-cell-title">
				<slot name="icon">
					<i v-if="icon" class="mintui" :class="['mintui-' + icon]"></i>
				</slot>
				<slot name="title">
					<span class="m-cell-text" v-text="title"></span>
					<span class="m-cell-label" v-if="label" v-text="label"></span>	
				</slot>
					
			</div>
			<div class="m-cell-value" :class="{'is-link': isLink}">
				<slot>
					<span v-text="value"></span>
				</slot>
			</div>
			<i class="m-cell-arrow-right" v-if="isLink"></i>
		</div>
	</a>
</template>
<script>
/** 
 * @module components/cell
 * @desc 列表
 * @param {string} [icon] - 显示图标 拼接成mintui-icon
 * @param {string} [title] - 标题
 * @param {string} [label] - 备注信息
 * @param {string} [value] - 显示右侧文字
 * @slot {slot} [icon] - 同 icon, 会覆盖 icon 属性，例如可以传入图片
 * @slot {slot} [title] - 同title, 会覆盖 title 属性
 * @slot {slot} - 同value， 会覆盖value属性
 * @param {boolean} [is-link]- 显示链接图标
 * @param {string|object} - 跳转链接，如果和router里的path匹配则传给 router.push，否则作为 a 标签的 href 属性处理
 */
	export default {
		name: 'mt-cell',
		props: {
			icon: String,
			title: String,
			label: String,
			isLink: Boolean,
			value: String,
			to: [String, Object]
		},
		computed: {
			href() {
				if(this.to && !this.added && this.$router) {
					const resolved = this.$router.match(this.to);
					if(!resolved.matched.length) return this.to;

					this.$nextTick( () => {
						this.added = true;
						this.$el.addEventListener('click', this.handleClick);
					});

					return resolved.fullPath || resolved.path;
				}
				return this.to;
			}
		},
		methods: {
			handleClick($event) {
				$event.preventDefault();
				this.$router.push(this.href);
			}
		}
	}
</script>
<style>
@component-namespace m {
	@component cell {
		background-color: #fff;
		box-sizing: border-box;
		color: inherit;
		display: block;
		min-height: 48px;
		overflow: hidden;
		position: relative;
		text-decoration: none;

		@descendent wrapper {
			background-image: linear-gradient(180deg, #d9d9d9, #d9d9d9 50%, transparent 100%);
			background-repeat: no-repeat;
		    background-origin: content-box;
		    background-position: top left;
			background-size: 120% 1px;
			padding: 0 10px;
			display: flex;
			align-items: center;
			min-height: inherit;
		    font-size: 16px;
		    line-height: 1;
		    box-sizing: border-box;
		    overflow: hidden;
		    width: 100%;
		}

		@descendent title {
			flex: 1;

			img {
				vertical-align: middle;
			}
		}

		@descendent text {
			vertical-align: middle;
		}

		@descendent value {
			color: #888;

			@when link {
				margin-right: 24px;
			}
		}

		@descendent label {
			color: #888;
		    display: block;
		    font-size: 12px;
		    margin-top: 6px;
		}

		@descendent arrow-right::after {
			border: solid 2px #c8c8cd;
			border-bottom-width: 0;
			border-left-width: 0;
			content: "";
			width: 5px;
			height: 5px;
			position: absolute;
			top: 50%;
			right: 20px;
			transform: translateY(-50%) rotate(45deg);
		}

		@descendent mask {
	        &::after {
	          background-color: #000;
	          content: " ";
	          opacity: 0;
	          position: absolute 0;
	        }

	        &:active::after {
	          opacity: .1;
	        }
	    }
	}
}
</style>