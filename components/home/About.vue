<script setup lang="ts">

import HeadingTitle from "~/components/common/HeadingTitle.vue";
import PocketBase from 'pocketbase';
const runtimeConfig = useRuntimeConfig()
const pb = new PocketBase(runtimeConfig.public.pocketBaseUrl);
const content = ref("");

onMounted(async () => {
  try {
    const record = await pb.collection("content").getFirstListItem('section="about"');
    content.value = record.content;
  } catch (error) {
    console.error("Failed to load about: ", error);
  }
});
</script>

<template>
<div id="about" class="h-fit items-center justify-center">
  <HeadingTitle label="about" class="pt-20"/>
  <div class="flex justify-center">
    <div class="block h-fit mb-32 bg-white w-[60%] rounded-3xl text-gray-600 font-rubik text-xl font-normal p-10">
      <div v-html="content"></div>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>