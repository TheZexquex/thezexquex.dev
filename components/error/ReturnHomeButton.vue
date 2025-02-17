<script setup lang="ts">

import {Icon} from "@iconify/vue";
</script>

<template>
  <NuxtLink href="/" class="flex bg-white rounded-full items-center group w-fit">
    <div class="flex my-6 px-10 items-center">
      <span class="font-rubik font-bold">Return to home</span>
      <div class="flex group-hover:w-fit transition-all duration-300">
        <Icon icon="heroicons:arrow-right-16-solid" class="text-black transition-all w-0 group-hover:w-6 group-hover:ml-5 text-2xl" />
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped>

</style>