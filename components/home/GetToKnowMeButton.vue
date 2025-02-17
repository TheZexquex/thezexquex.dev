<script setup lang="ts">
import {Icon} from "@iconify/vue";

const { scrollToAnchor } = useAnchorScroll({
  toTop: {
    scrollOptions: {
      behavior: 'smooth',
      offsetTop: 0,
    }
  },
})
</script>

<template>
  <NuxtLink class="group cursor-pointer" @click="scrollToAnchor('about')">
    <div class="flex align-middle bg-white w-fit rounded-full p-5 group-hover:bg-transparent transition-all duration-300 animate-bounce">
      <span class="text-gray-800 font-rubik font-bold text-xl group-hover:text-white transition-all duration-300">Get to know me</span>
    </div>
    <div class="flex justify-center items-center mt-3">
      <div class="bg-white group-hover:p-3 p-0 rounded-full transition-all duration-300 z-10 w-fit">
        <Icon icon="heroicons:arrow-down-16-solid" class="text-4xl text-black h-0 group-hover:h-9 transition-all duration-300" />
      </div>
      <div class="group-hover:h-40 group-hover:w-40 absolute button-pulse bg-white rounded-full" style="animation-delay: 0s"></div>
      <div class="group-hover:h-40 group-hover:w-40 absolute button-pulse bg-white rounded-full" style="animation-delay: 1s"></div>
      <div class="group-hover:h-40 group-hover:w-40 absolute button-pulse bg-white rounded-full" style="animation-delay: 2s"></div>
    </div>
  </NuxtLink>
</template>

<style scoped>
@keyframes scaleIn {
  from {
    transform: scale(.3, .3);
    opacity: 0.5;
  }
  to {
    transform: scale(1);
    opacity: 0;
  }
}

.button-pulse {
  animation: scaleIn 2s infinite cubic-bezier(0.36, 0.11, 0.86, 0.32);
}
</style>