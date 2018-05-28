<template>
	<div class="page-tabbar">
		<div class="page-title">Tabbar</div>
		<mt-cell title="当前选中" :value="selected" class="page-part"></mt-cell>
		<mt-tab-container v-model="selected">
			<mt-tab-container-item id="外卖">
				<mt-cell v-for="n in 10" :title="'餐厅 ' + n"></mt-cell>
			</mt-tab-container-item>
			<mt-tab-container-item id="订单">
				<mt-cell v-for="n in 5" :title="'订单 ' + n"></mt-cell>
			</mt-tab-container-item>
			<mt-tab-container-item id="发现">
				<mt-cell v-for="n in 7" :title="'发现 ' + n"></mt-cell>
			</mt-tab-container-item>
			<mt-tab-container-item id="我的">
				<mt-cell v-for="n in 10" :title="'我的 ' + n"></mt-cell>
			</mt-tab-container-item>
		</mt-tab-container>
		<mt-tabbar fixed v-model="selected">
			<mt-tab-item id="外卖">
				<img src="../assets/100x100.png" slot="icon">
				外卖
			</mt-tab-item>
			<mt-tab-item id="订单">
				<img src="../assets/100x100.png" slot="icon">
				订单
			</mt-tab-item>
			<mt-tab-item id="发现">
				<img src="../assets/100x100.png" slot="icon">
				发现
			</mt-tab-item>
			<mt-tab-item id="我的">
				<img src="../assets/100x100.png" slot="icon">
				我的
			</mt-tab-item>
			
		</mt-tabbar>
	</div>
</template>
<script>
	export default {
		name: 'Tabbar',
		data() {
			return {
				selected: "外卖"
			}
		}
	}
</script>
<style>

</style>