<script setup>

const route = useRoute();
const queries = ref(route.query);

const {data: response, refresh: refreshProducts} = await useFetch(`/api/products?`, {
  query: queries,
  watch: [queries]
});

watch(() => route.query, async function() {
  queries.value = route.query
})




</script>

<template>
  <div class="flex">
    <FilterSection :data="response.products" :refreshProducts="refreshProducts"/>
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
