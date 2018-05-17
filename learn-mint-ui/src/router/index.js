import Vue from 'vue'
import Router from 'vue-router'
import Example from '@/example/Example.vue'
import Header from '@/example/pages/header.vue'
import Button from '@/example/pages/button.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Example',
      component: Example
    },
    {
      path: '/header',
      name: 'Header',
      component: Header
    },
    {
      path: '/button',
      name: 'Button',
      component: Button
    }
  ]
})
