<template>
  <button @click="handleClick">{{ buttonName }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
      buttonName: String
  },
  methods: {
    handleClick () {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>

</style>