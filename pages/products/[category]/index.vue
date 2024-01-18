<script setup>

const route = useRoute();

const urlSearchParams = new URLSearchParams(route.query)

const {data: response, error, refresh} = await useFetch('/api/products?category=' + route.params.category + '&' + urlSearchParams.toString());


</script>


<template>
  <div class="flex">
    <FilterSection/>
    <div>
      <div class="flex justify-end pe-10 mt-10">
        <SortSection/>
      </div>
      <div class="grid grid-cols-4 mt-20">
        <CakeCard v-for="product in response?.products" :product="product"/>
      </div>
      <p v-if="response.products.length === 0" class="text-center font-medium text-[30px] my-[200px] px-96">There's no
        product
      </p>
    </div>
  </div>
</template>


<style scoped>

</style>
