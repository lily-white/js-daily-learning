<template>
	<div class="page-cell">
		<div class="page-title">Cell</div>
		<!--
		<a class="m-cell">
			<div class="m-cell-wrapper">
				<div class="m-cell-title">
					<span class="m-cell-text">标题文字</span>
				</div>
				<div class="m-cell-value"></div>
			</div>
		</a>
		<a class="m-cell">
			<div class="m-cell-wrapper">
				<div class="m-cell-title">
					<span class="m-cell-text">标题文字</span>
				</div>
				<div class="m-cell-value">
					<span>说明文字</span>
				</div>
			</div>
		</a>
		<a class="m-cell">
			<div class="m-cell-wrapper">
				<div class="m-cell-title">
					<i class="mintui mintui-more"></i>
					<span class="m-cell-text">标题文字</span>
				</div>
				<div class="m-cell-value">
					<span>说明文字</span>
				</div>
			</div>
		</a>
		<a class="m-cell">
			<div class="m-cell-wrapper">
				<div class="m-cell-title">
					<img src="../assets/100x100.png" height="20" width="20">
					<span class="m-cell-text">标题文字</span>
				</div>
				<div class="m-cell-value">
					<span>说明文字</span>
				</div>
			</div>
		</a>
		<a class="m-cell">
			<div class="m-cell-wrapper">
				<div class="m-cell-title">
					<span class="m-cell-text">标题文字</span>
				</div>
				<div class="m-cell-value is-link">
					<span>带链接</span>
				</div>
				<i class="m-cell-arrow-right"></i>
			</div>
		</a>
		<a class="m-cell">
			<div class="m-cell-wrapper">
				<div class="m-cell-title">
					<span class="m-cell-text">标题文字</span>
				</div>
				<div class="m-cell-value is-link">
					<span style="color:green">带链接</span>
				</div>
				<i class="m-cell-arrow-right"></i>
			</div>
		</a>
		<a class="m-cell">
			<div class="m-cell-wrapper">
				<div class="m-cell-title">
					<span class="m-cell-text">标题文字</span>
				</div>
				<div class="m-cell-value">
					<mt-button icon="back" size="small" type="primary">按钮</mt-button>
				</div>
			</div>
		</a>
		<a class="m-cell">
			<div class="m-cell-wrapper">
				<div class="m-cell-title">
					<span class="m-cell-text">标题文字</span>
					<span class="m-cell-label">描述文字</span>
				</div>
				<i class="m-cell-arrow-right"></i>
			</div>
		</a>
		<a class="m-cell" href="https://mint-ui.github.io">
			<div class="m-cell-wrapper">
				<div class="m-cell-title">
					<span class="m-cell-text">标题文字</span>
					<span class="m-cell-label">描述文字https://mint-ui.github.io</span>
				</div>
				<i class="m-cell-arrow-right"></i>
			</div>
		</a>
		<a class="m-cell" href="/header">
			<div class="m-cell-wrapper">
				<div class="m-cell-title">
					<span class="m-cell-text">标题文字</span>
					<span class="m-cell-label">描述文字</span>
				</div>
				<i class="m-cell-arrow-right"></i>
			</div>
		</a>
		-->
		<mt-cell title="标题文字"></mt-cell>
		<mt-cell title="标题文字" value="说明文字"></mt-cell>
		<mt-cell icon="more" title="标题文字" value="说明文字"></mt-cell>
		<mt-cell title="标题文字" value="说明文字">
			<img src="../assets/100x100.png" height="20" width="20" slot="icon">
		</mt-cell>
		<mt-cell title="标题文字" value="说明文字" is-link></mt-cell>
		<mt-cell is-link title="标题文字">
			<span style="color: green">带连接</span>
		</mt-cell>
		<mt-cell title="标题文字">
			<mt-button size="small" type="primary" icon="back">按钮</mt-button>
		</mt-cell>
		<mt-cell title="标题文字" is-link label="描述文字https://mint-ui.github.io" to="https://mint-ui.github.io"></mt-cell>
		<mt-cell title="标题文字" is-link label="跳转到 /#/toast" :to="{name: 'Header'}"></mt-cell>
		

	</div>
</template>
<script>
	export default {
		name: 'Cell'
	}
</script>
<style>
@component page {
	@descendent cell {
	}
}

</style>