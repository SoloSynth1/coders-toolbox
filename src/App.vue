<template>
  <div id="app">
    <MainPageView></MainPageView>
  </div>
</template>

<script>
import MainPageView from "@/components/templates/MainPageView"

export default {
  name: 'App',
  components: {
    MainPageView
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
