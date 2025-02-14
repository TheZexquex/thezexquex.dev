<script lang="ts">
import {defineComponent} from 'vue'
import {Icon} from "@iconify/vue";

export default defineComponent({
  name: "NavBurger",
  components: {Icon},
  data() {
    return {
      clicked: false
    }
  },
  methods: {
    toggle() {
      this.clicked = !this.clicked;
    }
  }
})
</script>

<template>
  <button class="w-[30px]" v-on:click="toggle()">
    <Icon icon="ic:round-menu-open" class="text-white text-3xl transition-all" :class="{'size-0': clicked}"/>
    <Icon icon="ic:round-close" class="text-white text-3xl transition-all" :class="{'size-0': !clicked}"/>
  </button>
</template>

<style scoped>
</style>