<template>
	<div class="m-tabbar" :class="{'is-fixed': fixed}"><slot></slot></div>
</template>
<script>
export default {
  name: 'mt-tabbar',
  props: {
  	fixed: Boolean,
  	value: {}
  }
};
</script>
<style>
@component-namespace m {
	@component tabbar {
	    display: flex;
	    text-align: center;

	    @when fixed {
	    	position: fixed;
		    left: 0;
		    bottom: 0;
		    right: 0;
	    }

	    .m-tab-item.is-selected {
	    	background-color: #eaeaea;
    		color: #26a2ff;
	    }
	}
}
</style>

