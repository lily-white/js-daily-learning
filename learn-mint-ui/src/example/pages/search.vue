<template>
	<div class="page-search">
		<mt-search v-model="value" autofocus :result="filterResult"></mt-search>
	</div>
</template>
<script>
	export default {
		name: 'Search',
		data() {
			return {
				value: '',
				defaultResult: [
			        'Apple',
			        'Banana',
			        'Orange',
			        'Durian',
			        'Lemon',
			        'Peach',
			        'Cherry',
			        'Berry',
			        'Core',
			        'Fig',
			        'Haw',
			        'Melon',
			        'Plum',
			        'Pear',
			        'Peanut',
			        'Other'
			    ]
			}
		},
		computed: {
			filterResult() {
				return this.defaultResult.filter(item => new RegExp(this.value, "i").test(item));
			}
		}
	}
</script>
<style>

</style>
	
