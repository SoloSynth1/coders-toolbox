<template>
  <div>
    <h1>Random String Generator</h1>
    <Button button-name="Generate Random String" @click="generateRandomString"></Button>
    <OutputBox :output="randomString"></OutputBox>
  </div>
</template>

<script>
import Button from "@/components/atoms/Button"
import OutputBox from "@/components/atoms/OutputBox"
import randomstring from 'randomstring'

export default {
  name: "HashCompute",
  components: {
    OutputBox,
    Button
  },
  data: () => {
    return {
      randomString: ""
    }
  },
  methods: {
    generateRandomString () {
      this.randomString = randomstring.generate()
    }
  }
}
</script>

<style scoped>

</style>