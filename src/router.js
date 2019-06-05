import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import NuevoCliente from './views/NuevoCliente.vue';
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/nuevo-cliente',
      name: 'nuevo-cliente',
      component: NuevoCliente,
    },
    {
      path: '/playground',
      name: 'playground',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/Playground.vue'),
    },
  ],
});
