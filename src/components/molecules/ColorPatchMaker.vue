<template>
  <div>
    <h1>Color Patch Maker</h1>
    <span class="content">
      <div>
        <input id="color-picker" type="color" v-model="colorCode"/>
      </div>
      <div>
        <span>
          <label>Width:</label>
          <input type="number" v-model="width" required/>
        </span>
        <span>
          <label>Height:</label>
          <input type="number" v-model="height" required/>
        </span>
      </div>
      <div>
        <span>
          <label>Filename:</label>
          <input type="text" v-model="filename" required/>
        </span>

      </div>
      <div>
        <button @click.prevent="drawPatch">Generate Patch</button>
        <canvas id="myCanvas" style="display: none;"></canvas>
      </div>

    </span>
  </div>
</template>

<script>
export default {
  name: "ColorPatchMaker",
  data() {
    return {
      width: 32,
      height: 32,
      colorCode: "#42b983",
      filename: "filename.png"
    }
  },
  methods: {
    drawPatch() {
      // set canvas dimensions
      const canvas = document.getElementById("myCanvas");
      canvas.height = this.height;
      canvas.width = this.width;
      // fill canvas with input color
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = this.colorCode;
      ctx.fillRect(0, 0, this.width, this.height);
      // create download link
      const link = document.createElement('a');
      link.download = this.filename;
      link.href = canvas.toDataURL();
      link.click();
    }
  }
}
</script>

<style scoped>
#color-picker {
  width: 100px;
  height: 100px;
  border-radius: 5px;
}
</style>