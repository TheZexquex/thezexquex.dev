<script setup lang="ts">
import VueTyping from "@dmncodes/vue-typing"
import GetToKnowMeButton from "~/components/home/GetToKnowMeButton.vue";

const twText = ['thezexquex.dev', 'development', 'design']
</script>

<template>
  <div class="w-full h-screen text-white text-8xl font-rubik content-center">
    <div class="flex justify-center">
      <div class="flex mb-40">
        <span class="text-orange-400">.</span>
        <VueTyping
            :sentences="twText"
            :minTypeSpeed="200"
            :maxTypeSpeed="300"
            :eraseSpeed="100"
            :eraseDelay="1500"
            :writeDelay="10"
            caret="|"
            :loop="true"
        />
      </div>
    </div>
    <div class="flex w-full mb-[0vh] bottom-32 justify-center absolute">
      <GetToKnowMeButton/>
    </div>
  </div>
</template>

<style scoped>

</style>