<template>
  <div>
    <h1>Random String Generator</h1>
    <span class="content">
      <div>
        <span>String Length:</span>
        <input v-model="length"/>
        <button @click="generateRandomString">Generate Random String</button>
      </div>
      <div>
        <OutputBox :output="randomString"></OutputBox>
      </div>
    </span>
  </div>
</template>

<script>
import OutputBox from "../atoms/OutputBox.vue"
import randomstring from 'randomstring'

export default {
  name: "HashCompute",
  components: {
    OutputBox
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