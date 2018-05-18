<template>
	<div class="page-cell">
		<div class="page-title">Cell</div>
		<a class="m-cell">
			<div class="m-cell-wrapper">
				<div class="m-cell-title">
					<span class="m-cell-text">标题文字</span>
				</div>
				<div class="m-cell-value"></div>
			</div>
		</a>
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
@component-namespace m {
	@component cell {
		background-color: #fff;
		box-sizing: border-box;
		color: inherit;
		display: block;
		min-height: 48px;
		overflow: hidden;
		position: relative;
		text-decoration: none;

		@descendent wrapper {
			background-image: linear-gradient(180deg, #d9d9d9, #d9d9d9 50%, transparent 100%);
			background-repeat: no-repeat;
		    background-origin: content-box;
		    background-position: top left;
			background-size: 120% 1px;
			padding: 0 10px;
			display: flex;
			align-items: center;
			min-height: inherit;
		    font-size: 16px;
		    line-height: 1;
		    box-sizing: border-box;
		    overflow: hidden;
		    width: 100%;
		}
	}
}
</style>