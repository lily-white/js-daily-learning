<template>
	<div class="m-search">
		<div class="m-searchbar">
			<div class="m-searchbar-inner">
				<i class="mintui mintui-search"></i>
				<input 
				ref="input"
				type="text" 
				:placeholder="placeholder"
				class="m-searchbar-core" 
				v-model="currentValue" 
				@click="visible=true">
			</div>
			<a 
			class="m-searchbar-cancel" 
			@click="visible=false, currentValue=''" 
			v-show="visible" 
			v-text="cancelText">
			</a>
		</div>
		<div class="m-search-list">
			<div class="m-search-list-wrap" v-show="show || currentValue">
				<slot>
					<x-cell v-for="(item, index) in result" :key="index" :title="item"></x-cell>
				</slot>
			</div>
		</div>
	</div>
	
</template>
<script>
import XCell from '@/components/cell'
export default {
  name: 'mt-search',
  data() {
  	return {
  		currentValue: this.value,
  		visible: false
  	}
  },
  props: {
  	value: String,
  	autofocus: Boolean,
  	result: Array,
  	show: Boolean,
  	cancelText: {
  		default: '取消'
  	},
  	placeholder: {
  		default: '搜索'
  	}
  },
  components: {XCell},
  mounted() {
  	this.autofocus && this.$refs.input.focus();
  },
  watch: {
  	currentValue(val) {
  		this.$emit('input', val);
  	},
  	value(val) {
  		this.currentValue = val;
  	}
  }
};
</script>
<style>
@component-namespace m {
	@component search {
		height: 100%;
		height: 100vh;
		overflow: hidden;
	}

	@component searchbar {
		background-color: #d9d9d9;
		padding: 8px 10px;
		display: flex;
		z-index: 1;
		align-items: center;
		position: relative;

		@descendent inner {
			width: 100%;
			background-color: #fff;
			border-radius: 2px;
			padding: 4px 6px;
			display: flex;
			align-items: center;
			flex: 1;
			height: 28px;

			.mintui-search {
				font-size: 12px;
    			color: #d9d9d9;
			}
		}

		@descendent core {
			width: 100%;
			height: 100%;
			border: 0;
			appearance: none;
			box-sizing: border-box;
			outline: 0;
		}

		@descendent cancel {
			color: #26a2ff;
		    margin-left: 10px;
		    text-decoration: none;
		}
	}

	@component search-list {
		padding-top: 44px;
		overflow: auto;
		position: absolute 0;
	}
}
</style>

