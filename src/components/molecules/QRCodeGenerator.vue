<template>
  <div>
    <h1>QR Code Generator</h1>
    <InputBox @change="text = $event" :default-value="text"></InputBox>
    <span class="error" v-if="error">Error: {{errorMsg}}</span>
    <canvas id="canvas" v-show="!error"></canvas>

  </div>
</template>

<script>
import InputBox from "../atoms/InputBox.vue";
import QRCode from 'qrcode';

export default {
  name: "QRCodeGenerator",
  components: {
    InputBox
  },
  data() {
    return {
      text: "hello world",
      vueCanvas: null,
      error: false,
      errorMsg: ""
    }
  },
  methods: {
    updateCanvas() {
      try {
        this.error = false
        QRCode.toCanvas(this.vueCanvas, this.text, function (err) {
          if (err) throw err
        })
      } catch (err) {
        this.error = true
        this.errorMsg = err.message
      }
    }
  },
  mounted() {
    this.vueCanvas = document.getElementById("canvas");
    this.updateCanvas();
  },
  watch: {
    async text() {
      this.updateCanvas();
    }
  }
}
</script>

<style scoped>
.error {
  color: red;
}
</style>