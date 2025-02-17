<script setup lang="ts">
const props = defineProps(['title'])
</script>

<template>
<div class="font-rubik mx-40">
  <div class="flex font-bold text-4xl">
    <span class="text-orange-400">.</span><span>{{ title }}</span>
  </div>
  <ul class="list-inside text-orange-400 font-bold p-5">
    <slot />
  </ul>
</div>
</template>

<style scoped>

</style>