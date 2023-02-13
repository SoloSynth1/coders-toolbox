<template>
  <div>
    <h1>Hash Compute</h1>
    <Selector v-model="algo" :options="algoOptions"/>
    <InputBox @change="text = $event" :default-value="text"></InputBox>
    <OutputBox :output="hash"></OutputBox>
  </div>
</template>

<script>
import InputBox from "../atoms/InputBox.vue"
import OutputBox from "../atoms/OutputBox.vue"
import getHexDigest from "../../utils.js";
import Selector from "../atoms/Selector.vue";

export default {
  name: "HashCompute",
  components: {
    Selector,
    OutputBox,
    InputBox
  },
  data: () => {
    return {
      text: "",
      hash: "",
      algo: "SHA-256",
      algoOptions: [
        {
          "name": "SHA-1",
          "value": "SHA-1"
        },
        {
          "name": "SHA-256",
          "value": "SHA-256"
        },
        {
          "name": "SHA-384",
          "value": "SHA-384"
        },
        {
          "name": "SHA-512",
          "value": "SHA-512"
        }
      ]
    }
  },
  async created() {
    this.hash = await getHexDigest(this.algo, this.text);
  },
  watch: {
    async text() {
      this.hash = await getHexDigest(this.algo, this.text);
    },
    async algo() {
      console.log(this.algo)
      this.hash = await getHexDigest(this.algo, this.text);
    }
  }
}
</script>

<style scoped>

</style>