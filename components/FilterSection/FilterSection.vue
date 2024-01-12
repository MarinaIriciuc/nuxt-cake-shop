<script setup>

import FilterByPrice from "~/components/FilterSection/FilterByPrice.vue";
import SearchInput from "~/components/FilterSection/SearchInput.vue";
import FilterCakesButton from "~/components/FilterSection/FilterCakesButton.vue";
</script>

<template>
  <div class="flex flex-col bg-amber-500 px-20">
    <FilterByCategory/>
    <FilterByPrice/>
    <SearchInput/>
  </div>
</template>

<style scoped>

</style>
