import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/molecules/Home.vue'
import HashCompute from '@/components/molecules/HashCompute'
import RandomStringGenerator from "@/components/molecules/RandomStringGenerator";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/hash-compute',
    name: 'Hash Compute',
    component: HashCompute
  },
  {
    path: '/random-string',
    name: 'Random String',
    component: RandomStringGenerator
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
