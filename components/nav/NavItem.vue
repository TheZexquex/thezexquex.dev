<template>
  <!--
  Using <a> instead if <NuxtLink> because <NuxtLink> somehow fucks everything??
  TODO: Check if there is a fix for this dumb fucking stupid thing
  -->
  <NuxtLink :href="href" class="inline-block font-bold xl:text-xl text-md nav-element transition-all mx-5 nav-link">
    <span class="text-orange-400 font-rubik">.</span><span class="text-white font-rubik">{{ label }}</span>
    <Icon v-if="icon" :icon="icon" class="align-middle inline ml-2 text-[#c0b0dc]" :class="rotateOnHover ? 'group-hover:rotate-180 transition-transform' : ''"/>
  </NuxtLink>
</template>
<style>
    .nav-link {
      color: white;
      position: relative;
      text-decoration: none;
    }

    .nav-link::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 3px;
      border-radius: 10px;
      background-color: white;
      bottom: 0;
      left: 0;
      transform-origin: right;
      transform: scaleX(0);
      transition: transform .3s ease-in-out;
    }

    .nav-link:hover::before {
      transform-origin: left;
      transform: scaleX(1);
    }
</style>

<script>
import {Icon} from "@iconify/vue";

export default {
  components: {Icon},
  props: {
    rotateOnHover: Boolean,
    icon: String,
    href: String,
    label: String
  }
}
</script>