<template>
  <div>
    <HashCompute/>
    <RandomStringGenerator/>
  </div>
</template>

<script>
import HashCompute from "@/components/molecules/HashCompute"
import RandomStringGenerator from "@/components/molecules/RandomStringGenerator"
export default {
  name: "Tools",
  components: {
    HashCompute,
    RandomStringGenerator
  }
}
</script>

<style scoped>

</style>