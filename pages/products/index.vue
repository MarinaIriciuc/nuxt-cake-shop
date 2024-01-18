<script setup>
const {data: response} = await useFetch(`/api/products`);
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
