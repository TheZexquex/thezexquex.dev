<template>
  <div>
    <div class="lg:hidden inline">
      <NavBarMobile :page="page"/>
    </div>
    <div class="lg:inline hidden">
      <NavBarDesktop :page="page"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavBarMobile from "./NavBarMobile.vue";
import NavBarDesktop from "./NavBarDesktop.vue";

const props = defineProps(['page']);
</script>
<script lang="ts">
</script>