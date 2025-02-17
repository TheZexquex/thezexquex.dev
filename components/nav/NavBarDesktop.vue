<script setup lang="ts">
import NavItem from "./NavItem.vue";
import ContactButton from "~/components/nav/ContactButton.vue";

const props = defineProps(['page'])
</script>
<script lang="ts">
export default defineComponent({
  data() {
    return {
      scrolled: false
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll(event) {
      this.scrolled = window.scrollY > 0;
    },
  }
})
</script>

<template>
  <header class="block w-full bg-uc-accent-light bg-opacity-60 fixed backdrop-blur-sm z-20 px-5 transition-all duration-100"
          :class="{'py-5' : !scrolled, 'py-3' : scrolled, 'bg-[#b04843]' : page === 'default', 'bg-[#366b96]' : page === 'error'}">
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