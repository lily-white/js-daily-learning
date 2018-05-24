<template>
	<div class="page-navbar">
		<div class="page-title">Navbar</div>
		<div>
			<mt-navbar class="page-part" v-model="selected">
				<mt-tab-item id="1">选项一</mt-tab-item>
				<mt-tab-item id="2">选项二</mt-tab-item>
				<mt-tab-item id="3">选项三</mt-tab-item>
			</mt-navbar>
			<div class="page-part">
				<mt-cell title="当前选中" :value="selected"></mt-cell>
			</div>	
			<mt-tab-container v-model="selected">
				<mt-tab-container-item id="1">
					<mt-cell :title="'内容'+n" v-for="n in 10"></mt-cell>
				</mt-tab-container-item>
				<mt-tab-container-item id="2">
					<mt-cell :title="'测试'+n" v-for="n in 10"></mt-cell>
				</mt-tab-container-item>
				<mt-tab-container-item id="3">
					<mt-cell :title="'选项'+n" v-for="n in 10"></mt-cell>
				</mt-tab-container-item>
			</mt-tab-container>

		</div>
	</div>
</template>
<script>
	export default {
		name: 'Navbar',
		data() {
			return {
				selected: '1'
			}
		}
	}
</script>
<style>

</style>