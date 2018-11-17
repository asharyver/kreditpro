import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Working from './views/Working.vue'
import Invoice from './views/Invoice.vue'
import Komunitas from './views/komunitas.vue'
import Pendana from './views/Pendana.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
      {
        path: '/working',
        name: 'work',
        component: Working
      },
      {
        path: '/invoice',
        name: 'inv',
        component: Invoice
      },
      {
        path: '/Komunitas',
        name: 'komuni',
        component: Komunitas
      },
      {
        path: '/Pendana',
        name: 'dana',
        component: Pendana
      }
  ]
})
