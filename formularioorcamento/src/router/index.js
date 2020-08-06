import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Identificacao from '../views/Identificacao.vue'
import Contato from '../views/Contato.vue'
import Conclusao from '../views/Conclusao.vue'
import Questionario1 from '../views/Questionario1.vue'
import Questionario2 from '../views/Questionario2.vue'
import Questionario3 from '../views/Questionario3.vue'
import Questionario4 from '../views/Questionario4.vue'
import Questionario5 from '../views/Questionario5.vue'
import Questionario6 from '../views/Questionario6.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/identificacao',
    name: 'Identificação',
    component: Identificacao
  },
  {
    path: '/contato',
    name: 'Contato',
    component: Contato
  },
  {
    path: '/questionario/1',
    name: 'Questionario1',
    component: Questionario1
  },
  {
    path: '/questionario/2',
    name: 'Questionario2',
    component: Questionario2
  },
  {
    path: '/questionario/3',
    name: 'Questionario3',
    component: Questionario3
  },
  {
    path: '/questionario/4',
    name: 'Questionario4',
    component: Questionario4
  },
  {
    path: '/questionario/5',
    name: 'Questionario5',
    component: Questionario5
  },
  {
    path: '/questionario/6',
    name: 'Questionario6',
    component: Questionario6
  },
  {
    path: '/conclusao',
    name: 'Conclusao',
    component: Conclusao
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
