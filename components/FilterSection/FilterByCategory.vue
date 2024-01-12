<script setup>

const {data: response} = await useFetch("/api/categories");
const route = useRoute();

</script>

<template>
  <div class="flex justify-center mt-10 gap-14">
    <NuxtLink to="/products">
      <div class="group">
        <p class="tracking-wider cursor-pointer capitalize">All products</p>
        <div class="loading-bar"></div>
      </div>
    </NuxtLink>
    <NuxtLink v-for="category in response.categories" :to="`/products/${category.name}`">
      <div class="group">
        <p class="tracking-wider cursor-pointer capitalize"
           :class="{ 'text-amber-500 font-semibold': route.params.category === category.name }">{{ category.name }}</p>
        <div class="loading-bar"></div>
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped>

</style>
