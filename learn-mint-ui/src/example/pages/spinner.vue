<template>
	<div class="page-spinner">
		<div class="page-title">Spinner</div>
		<mt-cell title="snake"><mt-spinner :type="0" color="#26a2ff"></mt-spinner></mt-cell>
		<mt-cell title="double-bounce"><mt-spinner type="double-bounce" color="#26a2ff"></mt-spinner></mt-cell>
		<mt-cell title="tripple-bounce"><mt-spinner type="tripple-bounce" color="#26a2ff"></mt-spinner></mt-cell>
		<mt-cell title="fading-circle"><mt-spinner type="fading-circle" color="#26a2ff"></mt-spinner></mt-cell>
	</div>
</template>
<script>
	export default {
		name: 'Spinner'
	}
</script>
<style>

</style>
	
