<template>
  <a :href="href" class="block bg-opacity-50 h-fit font-uc_baloo text-2xl transition-all text-center py-8 bg-uc-accent-light rounded-2xl my-2 text-white">
    {{ label }}
    <Icon :icon="icon" class="align-middle inline ml-2 text-white" :class="!collapsed ? 'group-hover:rotate-180 transition-transform' : ''"/>
  </a>
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