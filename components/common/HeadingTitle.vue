<script setup lang="ts">
const props = defineProps(['label'])
</script>

<template>
  <div class="w-full h-fit mb-20">
    <div class="text-9xl flex justify-center items-center h-fit">
      <span class="text-orange-400 font-rubik h-fit">.</span><span class="text-white font-rubik h-fit">{{ label }}</span>
    </div>
  </div>
</template>

<style scoped>

</style>