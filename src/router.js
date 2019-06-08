import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import NuevoCliente from './views/NuevoCliente.vue';
import Mesas from './views/Mesas';
import CobroCuenta from './views/CobroCuenta';
import EditarOrden from './views/EditarOrden';
import NuevaMesa from './views/NuevaMesa';
import EditarMesa from './views/EditarMesa';

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
      path: '/cobro-cuenta',
      name: 'cobro-cuenta',
      component: CobroCuenta,
    },
    {
      path: '/mesas',
      name: 'mesas',
      component: Mesas,
    },
    {
      path: '/nueva-mesa',
      name: 'nueva-mesa',
      component: NuevaMesa,
    },
    {
      path: '/editar-orden/:id',
      name: 'editar-orden',
      component: EditarOrden,
    },
    {
      path: '/mesas/:id',
      name: 'editar-mesa',
      component: EditarMesa,
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
