<template>
	<div class="m-cell-swipe">
		<x-cell 
			:title="title"
			ref="cell"
			@touchstart.native="startDrag"
			@touchmove.native="onDrag"
			@touchend.native="endDrag">
			<div slot="left" ref="left"></div>
			<div 
				class="m-cell-swipe-buttongroup" 
				slot="right"
				ref="right">
				<a class="m-cell-swipe-button" style="background:lightgray; color:#fff">Mark as Unread</a>
				<a class="m-cell-swipe-button" style="background:red; color:#fff">Delete</a>
			</div>
		</x-cell>
	</div>
</template>
<script>
import XCell from '@/components/cell'
export default {
  name: 'mt-cell-swipe',
  components: {XCell},
  props: {
  	title: String
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

  	this.translate3d(this.leftWrap, this.leftWidth-1);
  	this.translate3d(this.rightWrap, this.rightWidth);

  },
  methods: {
  	startDrag(evt) {
  		evt = evt.changedTouches ? evt.changedTouches[0] : evt;
  		this.start.x = evt.pageX;
  		this.start.y = evt.pageY;

  		this.dragging = true;
  	},
  	onDrag(evt) {
  		if(!this.dragging) return;
  		const e = evt.changedTouches ? evt.changedTouches[0] : evt;
  		evt.preventDefault();

  		const x =  e.pageX - this.start.x;
  		const y =  e.pageY - this.start.y;

  		if(x > 0 || Math.abs(x) < Math.abs(y)) return;

  		this.move(x);
  	},
  	endDrag() {

  	},
  	move(x) {
  		this.translate3d(this.rightWrap, this.rightWidth + x);
  		this.translate3d(this.wrap, x);
  		this.translate3d(this.leftWrap, -this.leftWidth + x);
  		this.swiping = true;
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
	}
}
</style>

