<template>
	<div class="m-tab-container"
		@touchstart="startDrag"
		@mousedown="startDrag"
		@touchmove="onDrag"
		@mousemove="onDrag"
		@touchend="endDrag"
		@mouseup="endDrag">
		<div 
			class="m-tab-container-wrap" 
			ref="wrap">
			<slot></slot>
		</div>
	</div>
</template>
<script>
import {once} from '@/utils/dom.js'
import arrayFindIndex from 'array-find-index'
/**
 * mt-tab-container
 * @desc 面板，搭配 tab-container-item 使用
 * @module components/tab-container
 *
 * @param {number|string} [value] - 当前激活的 tabId
 *
 * @example
 * <mt-tab-container v-model="selected">
 *   <mt-tab-container-item id="1"> 内容A </mt-tab-container-item>
 *   <mt-tab-container-item id="2"> 内容B </mt-tab-container-item>
 *   <mt-tab-container-item id="3"> 内容C </mt-tab-container-item>
 * </mt-tab-container>
 */
	export default {
		name: 'mt-tab-container',
		props: {
			value: {},
			swipeable: Boolean
		},
		data() {
			return {
				start: {x:0, y:0},
				swiping: false,
				pageWidth: 0,
				currentActive: this.value
			}
		},
		mounted() {
			if(!this.swipeable) return;
			this.wrap = this.$refs.wrap;
			this.pageWidth = this.wrap.clientWidth;
			this.limitWdith = this.pageWidth / 4;
		},
		watch: {
			value(val) {
				this.currentActive = val;
			},
			currentActive(val, oldVal) {
				this.$emit('input', val);
				if(!this.swipeable) return;

				const lastIndex = arrayFindIndex(this.$children, item => item.id === oldVal);
				this.swipeLeaveTransition(lastIndex);
			}
		},
		methods: {
			startDrag(evt) {
				if(!this.swipeable) return;
				this.dragging = true;

				//记录开始拖拽位置
				evt = evt.changedTouches ? evt.changedTouches[0] : evt
				this.start.x = evt.pageX;
				this.start.y = evt.pageY;

			},
			onDrag(evt) {
				if(!this.dragging) return;
				//计算拖拽距离
				let swiping;
				const e = evt.changedTouches ? evt.changedTouches[0] : evt
				const offsetTop = e.pageY - this.start.y;
				const offsetLeft = e.pageX - this.start.x;
				const x = Math.abs(offsetLeft);
				const y = Math.abs(offsetTop);

				//横向移动大于5并且移动角度不大于60度，设为swiping
				swiping = !(x < 5 || (x >= 5 && y >= 1.73*x));
				if(!swiping) return;
				evt.preventDefault();

				//当前item是最后一个时移动距离加left值大于子元素的总宽度，不能滑动
				//或者item是第一个时，不能向右向右
				const len = this.$children.length - 1;
				const index = arrayFindIndex(this.$children, item => item.id == this.value);
				const offset = offsetLeft - index * this.pageWidth;
				const absoffset = Math.abs(offset);

				if(absoffset > len * this.pageWidth || (offset > 0 )) {
					this.swiping = false;
					return;
				}

				this.offsetLeft = offsetLeft;
				this.index = index;
				this.swipeMove(offset);
			},
			endDrag(evt) {
				if(!this.swiping) return;
				this.dragging = false;

				//根据移动方向，确定切换tab的index值
				const direction = this.offsetLeft > 0 ? -1: 1;
				//如果移动距离大于切换值，当前tab切换
				const isChange = Math.abs(this.offsetLeft) > this.limitWdith;

				if(isChange) {
					this.index += direction;
					const child = this.$children[this.index];

					if(child) {
						this.currentActive = child.id;
						return;
					}
				}
				
				this.swipeLeaveTransition();
			},
			swipeMove(offset) {
				this.wrap.style.webkitTransform = `translate3d(${offset}px, 0, 0)`;
				this.swiping = true;
			},
			swipeLeaveTransition(lastIndex = 0) {
				if(typeof this.index != 'number') {
					this.index = arrayFindIndex(this.$children, item => item.id === this.currentActive);
					this.swipeMove(-lastIndex * this.pageWidth);
				}

				setTimeout(() => {
				  //添加动画效果
				  this.wrap.classList.add('swipe-transition');
				  this.swipeMove(-this.index * this.pageWidth);

				  //动画结束后重置属性
				  once(this.wrap, 'webkitTransitionEnd', () => {
				  	this.wrap.classList.remove('swipe-transition');
				  	this.wrap.style.webkitTransform = '';

				  	this.index = null;
				  	this.swiping = false;
				  });

				}, 0);
			}
		}
	}
</script>
<style>
	@component-namespace m {
		@component tab-container {

			@descendent wrap {
				display: flex;	
			}
			.swipe-transition {
				transition: transform 150ms ease-in-out;
			}
		} 
	}

</style>