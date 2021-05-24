<template>
  <div>
    <h1>Hash Compute</h1>
    <InputBox @change="calculateHash"></InputBox>
    <OutputBox :output="hash"></OutputBox>
  </div>
</template>

<script>
import InputBox from "@/components/atoms/InputBox"
import OutputBox from "@/components/atoms/OutputBox"
import sha256 from 'sha256'

export default {
  name: "HashCompute",
  components: {
    OutputBox,
    InputBox
  },
  data: () => {
    return {
      hash: sha256("")
    }
  },
  methods: {
    calculateHash (value) {
      this.hash = sha256(value.toString())
    }
  }
}
</script>

<style scoped>

</style>