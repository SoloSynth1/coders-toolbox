<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/logo.png">
    <h1>Coder's Toolbox</h1>
    <div>A trusty toolbox for all your coding needs.</div>
    <div><strong>Secure. Fast. No data transfers. No backends called. Works perfectly even when offline.</strong></div>
    <h6>Developed by <a href="https://github.com/SoloSynth1">SoloSynth1</a>, 2021-{{ currentYear }}</h6>
  </div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
div {
  padding: 0.5rem;
}
</style>
