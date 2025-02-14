<script setup lang="ts">

import ContactButtonItem from "~/components/nav/ContactButtonItem.vue";
</script>

<template>
<div class="flex bg-white rounded-full items-center group">
  <div class="flex my-6 px-10 items-center">
    <div class="flex group-hover:w-fit group-hover:mr-5 transition-all duration-300">
      <ContactButtonItem icon="simple-icons:github" href="https://github.com/TheZexquex" />
      <ContactButtonItem icon="simple-icons:instagram" href="https://instagram.com/TheZexquex" />
      <ContactButtonItem icon="simple-icons:discord" href="https://discord.com/" />
    </div>
    <span class="font-rubik font-bold">Contact</span>
  </div>
</div>
</template>

<style scoped>

</style>