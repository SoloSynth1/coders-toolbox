<template>
  <div>
    <textarea @input="$emit('change', $event.target.value)" :value="defaultValue"/>
  </div>
</template>

<script>
export default {
  name: "InputBox",
  props:['defaultValue']
}
</script>

<style scoped>
textarea {
  width: 50%;
  height: 100px;
  vertical-align: top;
}
</style>