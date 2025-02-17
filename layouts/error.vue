<script setup lang="ts">

import Footer from "~/components/footer/Footer.vue";
</script>

<template>
  <div>
    <NavBar page="error"/>
    <NuxtParticles
        id="tsparticles"
        url="particles/particles-error.json"
    >
    </NuxtParticles>
    <slot/>
    <Footer />
  </div>
</template>

<style scoped>

</style>