<script setup lang="ts">
import NavItem from "./NavItem.vue";
import ContactButton from "~/components/nav/ContactButton.vue";
</script>

<template>
  <header class="block w-full bg-uc-accent-light bg-opacity-[0.4] fixed backdrop-blur-sm z-20 p-5">
    <div class="grid grid-flow-col grid-rows-1 col-span-3 w-full">
      <div class="flex h-full items-center justify-between w-fit">
        <NavItem label="thezexquex.dev"  href="/" />
      </div>
      <div class="flex w-[50%] 2xl:w-[70%] mx-20 justify-self-center items-center justify-between">
        <NavItem label="home" href="/" />
        <NavItem label="projects" href="/projects" />
        <NavItem label="downloads" href="/downloads" />
      </div>
      <div class="flex h-full items-center justify-self-end w-fit">
        <ContactButton />
      </div>
    </div>
  </header>
</template>