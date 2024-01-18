<script setup>

defineProps({
  product: {}
})
</script>

<template>
  <div class="flex items-center gap-10 mt-6">
    <img :src="product.image" class="w-28 h-28 rounded-full object-cover" alt="">
    <div class="text-gray-900 font-thin">
      <div class="flex">
        <p class="text-[16px] tracking-widest">{{ product.title }}</p>
        <p class="text-[10px] tracking-widest">...........................................</p>
        <p class="text-[10px] tracking-widest">${{ product.price }}</p>
      </div>
      <p class="text-[14px]">(eggs, milk, sugar, vanilla)</p>
    </div>
  </div>
</template>

<style scoped>

</style>
