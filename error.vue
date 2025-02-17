<script setup lang="ts">
import HeadingTitle from "~/components/common/HeadingTitle.vue";
import ReturnHomeButton from "~/components/error/ReturnHomeButton.vue";

const error = useError();
</script>

<template>
  <NuxtLayout name="error">
      <div class="h-screen flex justify-center items-center w-full">
        <div class="justify-center">
          <HeadingTitle v-if="error.statusCode !== 404" label="Dang it!"/>
          <div v-else class="w-full h-fit mb-20">
            <div class="text-9xl flex justify-center items-center h-fit">
              <span class="text-white font-rubik h-fit">404</span>
            </div>
          </div>
          <div class="text-2xl text-white font-rubik">
            <div class="flex justify-center">
              <p>
                <strong>{{ error.message }}</strong>
              </p>
            </div>
            <div class="flex justify-center">
              <p class="text-center">It looks like something broke. Sorry about that.</p>
            </div>
          </div>
          <div class="flex justify-center mt-10">
            <ReturnHomeButton/>
          </div>
        </div>
      </div>
  </NuxtLayout>
</template>

<style scoped>

</style>