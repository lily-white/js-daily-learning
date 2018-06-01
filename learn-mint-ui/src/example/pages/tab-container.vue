<template>
	<div class="page-tab-container">
		<div class="page-title">Tab Container</div>
		<div class="nav">
			<mt-button size="small" @click="active='container1'">tab 1</mt-button>
			<mt-button size="small" @click="active='container2'">tab 2</mt-button>
			<mt-button size="small" @click="active='container3'">tab 3</mt-button>
		</div>
		<div>
			<mt-tab-container v-model="active" swipeable>
				<mt-tab-container-item id="container1">
					<mt-cell title="tab container 1" v-for="n in 10"></mt-cell>
				</mt-tab-container-item>
				<mt-tab-container-item id="container2">
					<mt-cell title="tab container 2" v-for="n in 10"></mt-cell>
				</mt-tab-container-item>
				<mt-tab-container-item id="container3">
					<mt-cell title="tab container 3" v-for="n in 10"></mt-cell>
				</mt-tab-container-item>
			</mt-tab-container>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'TabContainer',
		data() {
			return {
				active: 'container1'
			}
		}
	}
</script>
<style>
.nav{
	padding: 10px;
}
</style>
	
