<template>
  <div class="w-full flex justify-center items-center text-center">
    <a :href="href" class="bg-opacity-50 h-fit font-rubik text-2xl transition-all
  text-center justify-center py-8 bg-uc-accent-light rounded-2xl my-2 text-white">
      {{ label }}
    </a>
  </div>
</template>

<script setup lang="ts">

import {Icon} from "@iconify/vue";

const props = defineProps(['label', 'href', 'icon'])

</script>
<script lang="ts">
export default defineComponent({
  data() {
    return {
      collapsed: true,
    }
  }
})
</script>