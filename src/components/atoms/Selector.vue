<template>
  <div>
    <select :value="value" @change="$emit('input', $event.target.value)">
      <option v-for="(option, index) in options" :key="index" :value="option.value">{{ option.name }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "Selector",
  props: ['value', 'options'],
}
</script>

<style scoped>
</style>