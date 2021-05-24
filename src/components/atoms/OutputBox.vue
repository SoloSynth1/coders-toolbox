<template>
  <textarea disabled="disabled" :value="output"></textarea>
</template>

<script>
export default {
  name: "OutputBox",
  props: ["output"]
}
</script>

<style scoped>
textarea {
  width: 20%;
  height: 100px;
  vertical-align: top;
}
</style>