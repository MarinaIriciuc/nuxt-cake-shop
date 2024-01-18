<script setup>
definePageMeta({
  layout: "admin",
  middleware: ["auth"]
})


</script>

<template>
  <div class="w-full">
    <div class="py-4 md:py-7 bg-gray-10 rounded-tl-lg rounded-tr-lg">
      <div class="flex sm:flex-row flex-col sm:items-center justify-between">
        <p tabindex="0" class="text-[20px] tracking-widest text-gray-700">Products</p>
        <NuxtLink to="/add-product">
          <button class="button-custom sm:mt-0 mt-5">
            <p class="text-sm font-medium leading-none text-white">New Product</p>
          </button>
        </NuxtLink>
      </div>
    </div>
    <div class="flex sm:justify-end">
      <SortSection/>
    </div>
    <div class="xl:mt-0 mt-10">
      <ProductsTable/>
    </div>
  </div>
</template>

<style scoped>

</style>
