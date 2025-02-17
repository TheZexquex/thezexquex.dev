<script setup lang="ts">

import FooterLink from "~/components/footer/FooterLink.vue";
import FooterCategory from "~/components/footer/FooterCategory.vue";
</script>

<template>
<div class="bg-white h-fit p-5 w-full font-rubik font-normal text-gray-800">
  <div class="flex justify-center">
    <FooterCategory title="legal">
      <FooterLink label="imprint" href="/terms/imprint"/>
      <FooterLink label="privacy" href="/terms/privacy"/>
    </FooterCategory>
    <FooterCategory title="socials">
      <FooterLink label="instagram" href="/terms/imprint"/>
      <FooterLink label="github" href="/terms/privacy"/>
      <FooterLink label="discord" href="/terms/privacy"/>
    </FooterCategory>
    <FooterCategory title="shortlinks">
      <FooterLink label="home" href="/"/>
      <FooterLink label="projects" href="/projects"/>
      <FooterLink label="downloads" href="/downloads"/>
    </FooterCategory>
  </div>
</div>
  <div class="flex justify-center bg-gray-900 p-5 text-white font-bold font-rubik">
    <span>&copy TheZexquex - {{ new Date().getFullYear() }}</span>
  </div>
</template>

<style scoped>

</style>