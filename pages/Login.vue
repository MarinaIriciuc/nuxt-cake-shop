<script setup>

definePageMeta({
  layout: 'guest'
})
const {data} = useAuth();


if (data.value) {
  navigateTo("/")
}


</script>

<template>
  <div class="grid md:grid-cols-2 grid-cols-1">
    <img src="https://i.ibb.co/4W8czpx/download.jpg" class="object-contain w-full" alt="">
    <LoginForm/>
  </div>
</template>

<style scoped>

</style>
