import Vue from 'vue'
import Router from 'vue-router'
import Example from '@/example/Example.vue'
import NavConfig from '@/example/nav.conf.json'



const registRouter = (config) => {
  let routes = [];
  config.map(nav => {
    nav.list.map(page => {
        routes.push({
          path: page.path,
          name: page.name,
          component: require('@/example/pages'+page.path).default
        })
    });
  });

  return {routes, navs:config};
}

const route = registRouter(NavConfig);

route.routes.push({
  path: '/',
  name: 'Example',
  component: Example
})

Vue.use(Router)
const router = new Router({
  routes: route.routes
})

export const navs = route.navs;
export default router;