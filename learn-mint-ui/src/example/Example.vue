<template>
	<div>
		<h1>{{title}}</h1>
		<ul>
			<router-link to="/header" tag="li">Header</router-link>
			<router-link to="/button" tag="li">Button</router-link>
			<router-link to="/cell" tag="li">Cell</router-link>
		</ul>
	</div>
	
</template>
<script>
export default {
  name: 'Example',
  data () {
    return {
      title: 'ui example'
    }
  }
}
</script>

<style>
 
</style>