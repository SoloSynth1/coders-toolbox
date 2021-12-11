import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/molecules/Home.vue'
import HashCompute from '@/components/molecules/HashCompute'
import RandomStringGenerator from "@/components/molecules/RandomStringGenerator";
import ColorPatchMaker from "@/components/molecules/ColorPatchMaker";
import Base64EncDec from "@/components/molecules/Base64EncDec";

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
  {
    path: '/color-patch',
    name: 'Color Patch Maker',
    component: ColorPatchMaker
  },
  {
    path: '/base64-encode-decode',
    name: 'Base64 Encode/Decode',
    component: Base64EncDec
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
