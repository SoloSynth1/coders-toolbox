<template>
  <div>
    <h1>URL Encoder/Decoder</h1>
    <InputBox @change="handleEncode($event)" :default-value="textDecoded"></InputBox>
    <InputBox @change="handleDecode($event)" :default-value="textEncoded"></InputBox>
    <span class="error" v-if="decodeError">Decode Error</span>
  </div>
</template>

<script>
import InputBox from "@/components/atoms/InputBox"

export default {
  name: "Url64EncDec",
  components: {
    InputBox
  },
  data: () => {
    return {
      textDecoded: "hello world",
      textEncoded: "",
      decodeError: false,
    }
  },
  methods: {
    handleEncode(ev) {
      this.textDecoded = ev;
      this.textEncoded = encodeURIComponent(this.textDecoded);
    },
    handleDecode(ev) {
      this.textEncoded = ev;
      try {
        this.textDecoded = decodeURIComponent(this.textEncoded);
        this.decodeError = false
      } catch (e) {
        this.decodeError = true
      }

    }
  },
  async created() {
    this.handleEncode(this.textDecoded);
  }
}
</script>

<style scoped>
.error {
  color: red;
}
</style>