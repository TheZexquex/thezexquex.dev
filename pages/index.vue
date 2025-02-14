<script setup lang="ts">
import NavBar from "~/components/nav/NavBar.vue";
import {Container} from "@tsparticles/engine";
import VueTyping from "@dmncodes/vue-typing"

const onLoad = (container: Container) => {
  // Do something with the container
  container.pause()
  setTimeout(() => container.play(), 2000)
}

const twText = ['thezexquex.dev', 'development', 'design']
</script>

<template>
  <NavBar />
  <NuxtParticles
      id="tsparticles"
      url="particles/particles.json"
      @load="onLoad"
  >
  </NuxtParticles>
  <div class="flex justify-center items-center w-full h-[100vh] align-middle text-white text-8xl font-rubik">
    <div class="flex mb-32">
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
        @sentence:typed="onSentenceTyped"
    />
    </div>
  </div>
</template>

<style scoped>

</style>