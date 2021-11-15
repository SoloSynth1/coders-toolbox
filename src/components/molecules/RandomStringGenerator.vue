<template>
  <div>
    <h1>Random String Generator</h1>
    <span class="content">
      <div>
        <span>String Length:</span>
        <input v-model="length"/>
        <Button button-name="Generate Random String" @click="generateRandomString"></Button>
      </div>
      <div>
        <OutputBox :output="randomString"></OutputBox>
      </div>
    </span>
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
      randomString: "",
      length: 100
    }
  },
  methods: {
    generateRandomString () {
      this.randomString = randomstring.generate({length: this.length})
    }
  }
}
</script>

<style scoped>
.content {
  display: block;
}

</style>