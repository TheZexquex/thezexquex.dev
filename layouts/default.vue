<script setup lang="ts">

import Footer from "~/components/footer/Footer.vue";
</script>

<template>
  <div>
    <NavBar page="default"/>
    <NuxtParticles
        id="tsparticles"
        url="particles/particles.json"
    >
    </NuxtParticles>
    <slot/>
    <Footer />
  </div>
</template>

<style scoped>

</style>