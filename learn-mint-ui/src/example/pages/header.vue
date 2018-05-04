<template>
	<div>
		<mt-header title="固定在顶部" fixed></mt-header>
		<div class="page-main">
			<mt-header title="右侧仅文字">
				<router-link to="/" slot="right">分享</router-link>
			</mt-header>
			<mt-header title="标题长度太长会被隐藏啊啊啊啊">
				<router-link to="/" slot="left">
					返回
				</router-link>
			</mt-header>
			<mt-header title="固定在顶部"></mt-header>
		</div>
		
	</div>
</template>
<script>
	export default{
		name: 'Header'
	}
</script>
<style>
	.page-main {
		margin-top: 50px;
	}
	.page-main > * {
		margin-bottom: 15px;
	}
</style>