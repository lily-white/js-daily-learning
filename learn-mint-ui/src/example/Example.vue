<template>
	<div>
		<h1>{{title}}</h1>
		<ul>
			<router-link to="/header" tag="li">Header</router-link>
			<router-link to="/button" tag="li">Button</router-link>
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
 @reset-global mobile;
 
 html, body {
    background-color: #fafafa;
    -webkit-overflow-scrolling: touch;
    user-select: none;
  }
  body {
  	margin: 0;
    font-size: 14px;
    font-family: "Helvetica Neue", Helvetica, STHeiTi, Arial, sans-serif;
  }
</style>