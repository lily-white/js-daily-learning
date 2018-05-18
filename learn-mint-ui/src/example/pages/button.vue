<template>
	<div class="page-button">
	<!--
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
		-->
		<div class="page-button-group">
			<mt-button size="large">default</mt-button>
			<mt-button type="primary" size="large">primary</mt-button>
			<mt-button type="danger" size="large">danger</mt-button>
		</div>
		<div class="page-button-group">
			<mt-button>default</mt-button>
			<mt-button type="primary">primary</mt-button>
			<mt-button type="danger">danger</mt-button>
		</div>
		<div class="page-button-group">
			<mt-button size="small">default</mt-button>
			<mt-button type="primary" size="small">primary</mt-button>
			<mt-button type="danger" size="small">danger</mt-button>
		</div>
		<div class="page-button-group">
			<mt-button size="large" disabled>default</mt-button>
			<mt-button type="primary" size="large" disabled>primary</mt-button>
			<mt-button type="danger" size="large" disabled>danger</mt-button>
		</div>
		<div class="page-button-group">
			<mt-button size="large" plain>default</mt-button>
			<mt-button type="primary" size="large" plain>primary</mt-button>
			<mt-button type="danger" size="large" plain>danger</mt-button>
		</div>
		<div class="page-button-group">
			<mt-button>
				<img src="../assets/100x100.png" height="20" width="20" slot="icon">
				带自定义图标
			</mt-button>
			<mt-button icon="back" size="large">
				返回
			</mt-button>
		</div>
	</div>
</template>
<script>
	export default{
		name: 'Button',
		methods: {

		}
	}
</script>
<style>
	.page-button {
		padding: 10px;
	}
	.page-button-group > * {
		margin-bottom: 15px;
	}
	
</style>