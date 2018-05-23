<template>
	<div>
		<div v-for="nav in navs">
		<h1>{{nav.title}}</h1>
		<div>
			<mt-cell :to="page.path" v-for="page in nav.list" is-link :title="page.name"></mt-cell>
		</div>
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