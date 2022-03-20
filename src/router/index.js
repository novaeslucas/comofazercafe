import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ComoEscolherCafe from '../views/ComoEscolherCafe.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/como-escolher-cafe',
        name: 'ComoEscolherCafe',
        component: ComoEscolherCafe
    },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router