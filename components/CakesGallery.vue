<script setup>
defineProps({
  productsGallery: Array
})
</script>


<template>
  <div class="lg:flex hidden bg-gray-950">
    <div v-for="product in productsGallery" :key="product.id"
         class="relative transition-transform duration-500 transform hover:scale-105">
      <div class="flex flex-col">
        <img :src="product.image" class="object-contain" alt="">
        <p
          class="animated-text absolute bottom-16 left-0 right-0 text-center tracking-wider text-[20px] text-amber-500 font-thin bg-black bg-opacity-50 p-2 transition-transform duration-500 transform translate-y-0 hover:translate-y-2">
          {{ product.name }}
        </p>
        <p
          class="animated-text absolute bottom-6 left-0 right-0 text-center tracking-wider text-[14px] text-white font-thin bg-black p-2 transition-transform duration-500 transform translate-y-0 hover:translate-y-2">
          {{ product.description }}
        </p>
      </div>
    </div>
  </div>
</template>


<style scoped>
.animated-text {
  transition: transform 0.5s ease;
}
</style>
