<template>
  <header class="w-full bg-uc-accent-light bg-opacity-[0.4] fixed backdrop-blur-sm z-20">
    <div class="flex flex-col w-full">
      <NavLogo />
      <div class="flex w-full px-10 mx-20 self-center h-full items-center absolute justify-end">
        <NavBurger @click="toggle" />
      </div>
    </div>
  </header>
  <div class="flex-col w-full self-center fixed transition-all bg-uc-bg-dark bg-opacity-50 h-screen z-10 backdrop-blur-md" :class="{'translate-x-full': collapsed}">
    <div class="w-full flex items-center h-full">
      <div class="w-[80%] grid grid-cols-1 mx-auto mt-20 h-fit">
        <NavItemMobile label="Startseite" href="/" />
        <NavBarDropDownMobile label="Livemap" :accordion-items="accordionItems" icon="ic:sharp-keyboard-arrow-down"/>
        <NavItemMobile label="FAQ" href="/faq" />
        <NavItemMobile label="Teamliste" href="/team" />
        <NavItemMobile label="Support" href="https://dc.unknowncity.de" icon="ic:baseline-open-in-new" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavLogo from "~/components/nav/NavLogo.vue";
import NavItemMobile from "./NavItemMobile.vue";

const accordionItems = [
  {
    label: 'Haupserver',
    href: '/livemap/citybuild',
  },
  {
    label: 'Skyblock',
    href: '/livemap/skyblock',
  },
  {
    label: 'Museum',
    href: '/livemap/museum',
  }
]
</script>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      collapsed: true,
    }
  },
  methods: {
    toggle() {
      this.collapsed = !this.collapsed;
      document.body.classList.toggle("overflow-hidden");
    }
  }
})
</script>
