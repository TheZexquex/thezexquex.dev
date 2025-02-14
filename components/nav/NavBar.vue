<template>
  <div>
    <div class="lg:hidden inline">
      <NavBarMobile />
    </div>
    <div class="lg:inline hidden">
      <NavBarDesktop />
    </div>
  </div>
</template>

<script setup lang="ts">
import NavBarMobile from "./NavBarMobile.vue";
import NavBarDesktop from "./NavBarDesktop.vue";
</script>
<script lang="ts">
export default defineComponent( {
  data() {
    return {
      navbarToggled: false,
    };
  },
  methods: {
    toggleNavbar( data ) {
      this.navbarToggled = data;
      console.log( this.navbarToggled );
    }
  }
})
</script>