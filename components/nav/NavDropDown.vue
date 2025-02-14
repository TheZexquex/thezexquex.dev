<script setup lang="ts" xmlns="http://www.w3.org/1999/html">
import { ref } from 'vue'
import {
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuRoot,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from 'radix-vue'

const currentTrigger = ref('')
</script>
<template>
  <NavigationMenuRoot v-model="currentTrigger" class="relative z-[1] h-fit flex justify-center group">
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>
          <slot />
        </NavigationMenuTrigger>
        <NavigationMenuContent class="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-fit">
          <ul class="m-0 list-none flex px-3">
            <NavDropDownItem label="Hauptserver" href="/livemap/citybuild" />
            <NavDropDownItem label="Skyblock" href="/livemap/skyblock" />
            <NavDropDownItem label="Museum" href="/livemap/museum" />
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuIndicator
          class="data-[state=hidden]:opacity-0 duration-200 data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[all,transform_250ms_ease]"
      >
        <div class="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-uc-bg-dark" />
      </NavigationMenuIndicator>
    </NavigationMenuList>

    <div class="absolute top-full justify-center">
      <NavigationMenuViewport class="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-fit origin-[top_center] rounded-[10px] bg-uc-bg-dark transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]"/>
    </div>
  </NavigationMenuRoot>
</template>

<style scoped>

</style>