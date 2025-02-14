<script lang="ts">
import {defineComponent} from 'vue'
import {Icon} from "@iconify/vue";
import {AccordionContent, AccordionHeader, AccordionItem, AccordionRoot, AccordionTrigger} from "radix-vue";

export default defineComponent({
  name: "NavBarDropDownMobile",
  components: {AccordionContent, AccordionHeader, AccordionRoot, AccordionTrigger, AccordionItem, Icon},
  data() {
    return {
      collapsed: true
    }
  },
  methods: {
    toggle() {
      this.collapsed = !this.collapsed;
      console.log(this.collapsed);
    }
  }
})

</script>
<script setup lang="ts">
import {Icon} from "@iconify/vue";

const props = defineProps(['accordionItems', 'icon', 'label'])
</script>

<template>
  <button @click="toggle" class="block bg-opacity-50 h-fit font-uc_baloo text-2xl transition-all text-center py-8 bg-uc-accent-light rounded-2xl my-2 text-white group">
    <div :class="{'mb-5': !collapsed}">
      {{ label }}
      <Icon :icon="icon" class="align-middle inline ml-2 text-white transition-transform" :class="{'rotate-180': !collapsed, '': collapsed}"></Icon>
    </div>
    <div class="overflow-hidden transition-all grid grid-rows-3 gap-3 mx-5" :class="{'h-0': collapsed, 'h-80': !collapsed}">
      <div class="bg-uc-accent-light flex rounded-2xl bg-opacity-50 justify-center"  v-for="item in accordionItems">
        <a class="block self-center" :href="item.href">{{ item.label }}</a>
      </div>
    </div>
  </button>
</template>