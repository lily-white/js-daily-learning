<template>
	<div>
		<div v-for="nav in navs" key="nav.title">
		<h1>{{nav.title}}</h1>
		<ul>
			<router-link :to="page.path" tag="li" v-for="page in nav.list" key="page.name">{{page.name}}</router-link>
		</ul>
		</div>
	</div>
	
</template>
<script>
import {navs} from '@/router/index.js'

export default {
  name: 'Example',
  data () {
    return {
      title: 'ui example',
      navs: []
    }
  },
  created () {
  	this.navs = navs;
  }
}
</script>

<style>

</style>