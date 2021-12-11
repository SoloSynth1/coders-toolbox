<template>
  <div>
    <h1>Base64 Encoder/Decoder</h1>
    <span><input type="checkbox" v-model="truncatePadding" @change="handleEncode(textDecoded)"/>truncate padding</span>
    <InputBox @change="handleEncode($event)" :default-value="textDecoded"></InputBox>
    <InputBox @change="handleDecode($event)" :default-value="textEncoded"></InputBox>
    <span class="error" v-if="decodeError">Decode Error</span>
  </div>
</template>

<script>
import InputBox from "@/components/atoms/InputBox"

export default {
  name: "Base64EncDec",
  components: {
    InputBox
  },
  data: () => {
    return {
      textDecoded: "hello world",
      textEncoded: "",
      decodeError: false,
      truncatePadding: false
    }
  },
  methods: {
    handleEncode(ev) {
      this.textDecoded = ev;
      let encoded = btoa(this.textDecoded);
      if (this.truncatePadding) {
        encoded = encoded.replace(/=+$/g, "")
      }
      this.textEncoded = encoded;
    },
    handleDecode(ev) {
      this.textEncoded = ev;
      try {
        this.textDecoded = atob(this.textEncoded);
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