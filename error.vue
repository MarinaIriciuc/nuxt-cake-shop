<script setup>
const props = defineProps({
  error: Object
})
</script>

<template>
  <div class="min-h-screen flex justify-center items-center px-[80px]"
       style="background-image: url('https://i.ibb.co/0GJnMQF/download-13.jpg'); background-size: cover; background-position: center; filter: blur(px); position: absolute; top: 0; right: 0; bottom: 0; left: 0;">
    <div class="flex flex-col justify-center items-center">
      <!--      <p v-if="error.statusCode === 500" class="text-[30px] text-amber-500">{{ error.statusCode }}</p>-->
      <!--      <p v-if="error.statusCode === 500" class="text-[30px] font-medium">{{ error.statusMessage }}</p>-->
      <!--      <p class="">{{error.message}}</p>-->
      <p class="text-[45px] font-semibold">{{ error.message }}</p>
      <p class="mt-2 tracking-wide text-[18px] text-gray-600">Don't worry, just go back to home page.</p>
      <NuxtLink to="/">
        <div class="flex justify-center">
          <button class="button-custom-orange mt-8">Back to home</button>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>

</style>
