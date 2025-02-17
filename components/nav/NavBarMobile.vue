<template>
  <header class="w-full bg-opacity-60 fixed backdrop-blur-sm z-20 transition-all duration-100"
          :class="{'py-10' : !scrolled, 'py-5' : scrolled, 'bg-[#b04843]' : page === 'default', 'bg-[#366b96]' : page === 'error'}">
    <div class="flex w-full justify-between">
      <div class="block">
        <NavItem label="thezexquex.dev"  href="/" />
      </div>
      <div class="mr-5">
        <NavBurger @click="toggle" />
      </div>
    </div>
  </header>
  <div class="flex-col w-full self-center fixed transition-all h-screen z-10 backdrop-blur-md"
       :class="{'translate-x-full': collapsed, 'bg-[#b04843]' : page === 'default', 'bg-[#366b96]' : page === 'error'}">
    <div class="w-full flex items-center h-full">
      <div class="w-[80%] grid grid-cols-1 mx-auto mt-20 h-fit">
        <NavItemMobile label="home" href="/" />
        <NavItemMobile label="projects" href="/faq" />
        <NavItemMobile label="downloads" href="/team" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavItemMobile from "./NavItemMobile.vue";
import NavItem from "~/components/nav/NavItem.vue";

const props = defineProps(['page'])
</script>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      collapsed: true,
      scrolled: false
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    toggle() {
      this.collapsed = !this.collapsed;
      document.body.classList.toggle("overflow-hidden");
    },
    handleScroll(event) {
      this.scrolled = window.scrollY > 0;
    },
  }
})
</script>
