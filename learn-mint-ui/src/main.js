// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/font/iconfont.css';
import Header from '@/components/header'
import Button from '@/components/button'
import Cell from '@/components/cell'
import Navbar from '@/components/navbar'
import TabItem from '@/components/tab-item'
import TabContainer from '@/components/tab-container'
import TabContainerItem from '@/components/tab-container-item'
import Search from '@/components/search'

Vue.config.productionTip = false

//注册组件
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.component(Cell.name, Cell);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Search.name, Search);
/* eslint-disable no-new */


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
