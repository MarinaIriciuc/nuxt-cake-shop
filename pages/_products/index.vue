<script setup>

import FilterSection from "~/components/_products/_FilterSection.vue";

let route = useRoute();
const {data: response, refresh: refreshProducts} = await useAsyncData(
  'products',
  () => $fetch(`/api/products?`, {
    query: route.query
  })
);

watch(() => route.query, async function () {
  await refreshProducts()
})
</script>

<template>
  <div class="flex">
    <FilterSection/>
    <div class="mt-10">
      <div class="flex justify-end pe-10">
        <SortSection/>
      </div>
      <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-20">
        <CakeCard v-for="product in response.products" :product="product"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
