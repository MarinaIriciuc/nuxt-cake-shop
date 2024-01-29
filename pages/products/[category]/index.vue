<script setup>

const route = useRoute();
const queries = ref(route.query);


const {data: response} = await useFetch(`/api/products?category=` + route.params.category, {
  query: queries,
  watch: [() => route.query]
});

watch(() => route.query, async function () {
  queries.value = route.query
})

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
