<script setup lang="ts">
const props = defineProps(['label'])
</script>

<template>
  <div class="block w-full">
    <div class="text-[8rem] flex justify-center items-center">
      <span class="text-orange-400 font-rubik">.</span><span class="text-white font-rubik">{{ label }}</span>
    </div>
  </div>
</template>

<style scoped>

</style>