<script setup lang="ts">
import {Icon} from "@iconify/vue";

const props = defineProps(['label', 'href', 'icon'])
</script>

<template>
  <a :href="href" class="">
    <Icon :icon="icon" class="text-black hover:text-orange-400 block text-3xl group-hover:mx-3 transition-all w-0 group-hover:w-6 duration-300"/>
  </a>
</template>

<style scoped>

</style>