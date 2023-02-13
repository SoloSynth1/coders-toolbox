import * as VueRouter from 'vue-router';
import Home from '../components/molecules/Home.vue'
import HashCompute from '../components/molecules/HashCompute.vue'
import RandomStringGenerator from "../components/molecules/RandomStringGenerator.vue";
import ColorPatchMaker from "../components/molecules/ColorPatchMaker.vue";
import Base64EncDec from "../components/molecules/Base64EncDec.vue";
import UrlEncDec from "../components/molecules/UrlEncDec.vue";
import QRCodeGenerator from "../components/molecules/QRCodeGenerator.vue";

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
  },
  {
    path: '/url-encode-decode',
    name: 'URL Encode/Decode',
    component: UrlEncDec
  },
  {
    path: '/qrcode',
    name: 'QR Code Generate',
    component: QRCodeGenerator
  }
]


const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})

export default router