<script setup>
const props = defineProps({
  product: Object
})


</script>

<template>
  <NuxtLink :to="`/products/${product.category.name}/${product.slug}`">
    <div class="flex flex-col items-center relative group">
      <div class="relative group-hover:opacity-100">
        <img :src="product.image" class="object-contain h-[250px] w-full">
        <div class="flex justify-center absolute bottom-0 left-0 w-full p-4 bg-amber-600 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
          <button class="text-white uppercase transition-opacity duration-300 ease-in-out text-[12px] tracking-wider">
            Add to Cart
          </button>
        </div>
      </div>
      <p class="font-thin text-center group-hover:opacity-100 text-[16px]">{{ product.title }}</p>
      <p class="font-medium mt-2 text-gray-600 group-hover:opacity-100">$ {{ product.price }}</p>
    </div>
  </NuxtLink>
</template>

<style scoped>

</style>
