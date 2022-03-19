<template>
  <div>
    <h1>QR Code Generate</h1>
    <Selector v-model="algo" :options="algoOptions"/>
    <InputBox @change="text = $event" :default-value="text"></InputBox>
    <OutputBox :output="hash"></OutputBox>
  </div>
</template>

<script>
export default {
  name: "QRCode"
}
</script>

<style scoped>

</style>