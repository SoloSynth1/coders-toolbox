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
  </div>
</template>

<script setup lang="ts">
// import NavBar from "@/components/organisms/NavBar.vue";

// export default {
//   // components: {NavBar}
// }
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

</style>
