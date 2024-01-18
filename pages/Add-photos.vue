<script setup>
definePageMeta({
  layout: "admin",
  middleware: ["auth"]
})
</script>

<template>
  <p class="text-[20px] tracking-widest text-gray-700 mt-10">Add photos for portfolio</p>
  <form @submit.prevent="">
    <input type="file" class="input-custom" placeholder="Image" name="image">
    <button class="button-custom-orange mt-5">Add a photo</button>
  </form>
</template>

<style scoped>

</style>
