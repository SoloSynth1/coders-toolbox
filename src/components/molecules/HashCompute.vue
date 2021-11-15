<template>
  <div>
    <h1>Hash Compute</h1>
    <InputBox @change="text = $event" :default-value="text"></InputBox>
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
  computed: {
    hash: function () {
      return sha256(this.text)
    }
  },
  data: () => {
    return {
      text: ""
    }
  }
}
</script>

<style scoped>

</style>