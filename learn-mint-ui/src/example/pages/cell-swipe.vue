<template>
	<div class="page-cell-swipe">
		<div class="page-title">CellSwipe</div>
		<mt-cell-swipe 
			title="swipe me"
			:rightbtns="rightButtons">
		</mt-cell-swipe>
	</div>
</template>
<script>
	export default {
		name: 'CellSwipe',
		data() {
			return {
				rightButtons : [
					{
					'content': 'Mark as read',
					'style': 'background-color: lightgray; color: #fff;'
					},
					{
					'content': 'Delete',
					'style': 'background-color: red; color: #fff;'
					}
				]
			}
			
		}
	}
</script>
<style>

</style>
	
