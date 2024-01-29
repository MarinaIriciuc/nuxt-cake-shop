<script setup>

import FilterByPrice from "~/components/_products/_FilterByPrice.vue";
import SearchInput from "~/components/FilterSection/SearchInput.vue";
import FilterByCategory from "~/components/_products/_FilterByCategory.vue";
</script>

<template>
  <div class="flex flex-col border-2 border-l-2 border-l-amber-500 px-10">
    <FilterByCategory/>
    <FilterByPrice />
    <SearchInput/>
  </div>
</template>

<style scoped>

</style>
