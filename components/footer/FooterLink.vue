<script setup lang="ts">
const props = defineProps(['label', 'href'])
</script>

<template>
  <li>
    <NuxtLink :href="href" class="text-lg hover:text-gray-800 transition-all duration-300">{{ label }}</NuxtLink>
  </li>
</template>

<style scoped>

</style>