// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Header from '@/components/header'
import Button from '@/components/button'
import 'reset.css'

Vue.config.productionTip = false

//注册组件
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
