<template>
  <div>
    <textarea ref="inputArea" @input="handleInput">
    </textarea>
  </div>
</template>

<script>
export default {
  name: "InputBox",
  methods: {
    handleInput () {
      this.$emit('change', this.$refs.inputArea.value)
    }
  }
}
</script>

<style scoped>
textarea {
  width: 20%;
  height: 100px;
  vertical-align: top;
}
</style>