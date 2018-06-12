<template>
	<x-cell 
		class="m-cell-swipe"
		ref="cell"
		@touchstart.native="startDrag"
		@touchmove.native="onDrag"
		@touchend.native="endDrag"
		@click.native="move()"
		:title="title"
		:to="to"
		:is-link="isLink"
		:icon="icon"
		:value="value"
		:label="label">
		<div 
			class="m-cell-swipe-buttongroup" 
			slot="right"
			ref="right">
			<a 
			  class="m-cell-swipe-button" 
			  v-for="btn in rightbtns"
			  :style="btn.style"
			  v-html="btn.content"
			  @click.prevent.stop="btn.handler && btn.handler(), this.move()"
			  >
			</a>
		</div>
		<div 
			class="m-cell-swipe-buttongroup" 
			slot="left"
			ref="left">
			<a 
			  class="m-cell-swipe-button" 
			  v-for="btn in leftbtns"
			  :style="btn.style"
			  v-html="btn.content"
			  @click.prevent.stop="btn.handler && btn.handler(), this.move()"
			  >
			</a>
		</div>
		<slot></slot>
		<span 
			v-if="$slots.title"
			slot="title">
			<slot name="title"></slot>
		</span>
		<span 
			v-if="$slots.icon"
			slot="icon">
			<slot name="icon"></slot>
		</span>
	</x-cell>
</template>
<script>
import XCell from '@/components/cell'
import {once} from '@/utils/dom.js'

export default {
  name: 'mt-cell-swipe',
  components: {XCell},
  props: {
	icon: String,
	title: String,
	label: String,
	isLink: Boolean,
	value: String,
	to: [String, Object],
	rightbtns: Array,
	leftbtns: Array
  },
  data() {
  	return {
  	    start: {x: 0, y: 0}
  	}
  },
  mounted() {
  	this.wrap = this.$refs.cell.$el.querySelector('.m-cell-wrapper');
  	this.right = this.$refs.right;
  	this.left = this.$refs.left;

  	this.leftWidth = this.left.getBoundingClientRect().width;
  	this.rightWidth = this.right.getBoundingClientRect().width;

  	this.rightWrap = this.right.parentNode;
  	this.leftWrap = this.left.parentNode;


  },
  methods: {
  	startDrag(evt) {
  		evt = evt.changedTouches ? evt.changedTouches[0] : evt;
  		this.start.x = evt.pageX;
  		this.start.y = evt.pageY;

  		this.dragging = true;
  	},
  	onDrag(evt) {
  		if(this.opened) {
  			if(!this.swiping) {
  				this.move(0);
  				this.setAnimations('');
  			}
  			this.opened = false;
  			return;
  		}
  		if(!this.dragging) return;
  		const e = evt.changedTouches ? evt.changedTouches[0] : evt;
  		const offsetLeft = this.offsetLeft = e.pageX - this.start.x;
  		const offsetTop =  e.pageY - this.start.y;

  		const x = Math.abs(offsetLeft);
  		const y = Math.abs(offsetTop);

		if(x < 5 || (x >= 5 && y >= x * 1.73 )) return;

  		evt.preventDefault();
  		evt.stopPropagation();
  		this.swiping = true;
  		this.setAnimations('0ms');

  		if((offsetLeft < 0 && -offsetLeft > this.rightWidth) ||
  		  (offsetLeft > 0 && offsetLeft > this.leftWidth) ||
  		  (offsetLeft > 0 && !this.leftWidth ) ||
  		  (offsetLeft < 0 && !this.rightWidth)) { 
  		}else {
			this.move(offsetLeft);
  		}
  	},
  	endDrag(evt) {
  		this.setAnimations('');
  		if(!this.swiping) return;
  		
  		this.swipeLeaveTransition(this.offsetLeft > 0 ? 1: -1);
  	},
  	swipeLeaveTransition(direction) {
  		setTimeout(() => {
  		  if(direction > 0 && this.offsetLeft > 0.4 * this.leftWidth) {
  			this.move(this.leftWidth);
  			this.resetSwipe();
  			return;
  			}

	  		if(direction < 0 && -this.offsetLeft > 0.4 * this.rightWidth) {
	  			this.move(-this.rightWidth);
	  			this.resetSwipe();
	  			return;
	  		}

	  		this.move(0);
	  		once(this.wrap, 'webkitTransitionEnd', () => {
	  			this.swiping = false;
	  			this.wrap.style.webkitTransform = '';
	  		})
  		}, 0);
  	},
  	resetSwipe() {
  		this.swiping = false;
  		this.offsetLeft = 0;
  		this.opened = true;
  	},
  	setAnimations(val) {
  		this.wrap.style.transitionDuration = val;
  		this.leftWrap.style.transitionDuration = val;
  		this.rightWrap.style.transitionDuration = val;
  	},
  	move(offset = 0) {
  		this.translate3d(this.rightWrap, this.rightWidth + offset);
  		this.translate3d(this.wrap, offset);
  		this.translate3d(this.leftWrap, -this.leftWidth + offset);
  		offset && (this.swiping = true);
  	},
  	translate3d(el, offset) {
  		el.style.webkitTransform = `translate3d(${offset}px, 0, 0)`;
  	}
  }
};
</script>
<style>
@component-namespace m {
	@component cell-swipe {

		@descendent buttongroup {
			height: 100%;
			display: flex;
		}

		@descendent button {
			display: block;
	    	line-height: 48px;
	    	padding: 0 10px;
		}
		.m-cell-left,
		.m-cell-wrap,
		.m-cell-right {
			transition: transform 150ms ease-in-out;
		}
	}
}
</style>

