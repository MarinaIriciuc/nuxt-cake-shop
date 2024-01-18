<script setup>

const {data: response} = await useFetch("/api/categories");
const route = useRoute();

</script>

<template>
  <p class="mt-10 text-[16px] tracking-widest text-amber-500">Categories</p>
  <div class="flex flex-col justify-center gap-3 mt-3">
    <NuxtLink to="/products">
      <div class="group">
        <p class="tracking-wider cursor-pointer capitalize text-[14px]">All products</p>
        <div class="loading-bar"></div>
      </div>
    </NuxtLink>
    <NuxtLink v-for="category in response.categories" :to="`/products/${category.name}`">
      <div class="group">
        <p class="tracking-wider cursor-pointer capitalize text-[14px]"
           :class="{ 'text-amber-500 font-semibold': route.params.category === category.name }">{{ category.name }}</p>
        <div class="loading-bar"></div>
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped>

</style>
