<template>
  <!--
  Using <a> instead if <NuxtLink> because <NuxtLink> somehow fucks everything??
  TODO: Check if there is a fix for this dumb fucking stupid thing
  -->
  <a :href="href" class="block font-uc_baloo font-bold xl:text-xl text-md nav-element transition-all my-3 px-5 border-r-[1px] last:border-none text-center">
    <span class="text-white text-center">{{ label }}</span>
  </a>
</template>

<script setup lang="ts">

const props = defineProps(['href', 'label'])
</script>