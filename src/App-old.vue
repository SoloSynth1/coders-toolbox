<template>
  <div id="app">
<!--    <NavBar/>-->
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/hash-compute">Hash Compute</router-link> |
      <router-link to="/random-string">Random String</router-link> |
      <router-link to="/color-patch">Color Patch</router-link> |
      <router-link to="/base64-encode-decode">Base64</router-link> |
      <router-link to="/url-encode-decode">URL</router-link> |
      <router-link to="/qrcode">QRCode</router-link>
    </div>
    <router-view/>
    <p>Dark Theme: {{ isDark }}</p>
    <button @click="toggleDark()">
      Toggle Dark Mode
    </button>
  </div>
</template>

<script setup lang="ts">
// import NavBar from "@/components/organisms/NavBar.vue";

// export default {
//   // components: {NavBar}
// }
import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark({
  selector: "body", //element to add attribute to
  attribute: "theme", // attribute name
  valueDark: "custom-dark", // attribute value for dark mode
  valueLight: "custom-light", // attribute value for light mode
});
const toggleDark = useToggle(isDark);
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.dark {
  background: #16171d;
  color: #fff;
}

[theme="custom-dark"] {
  background: #16171d;
  color: #fff;
}
</style>
