<script setup>

const {data: response} = await useFetch("/api/products?category=donuts");


</script>


<template>

  <MenuHeader/>
  <div class="relative">
    <img src="https://i.ibb.co/9cRygDR/h9-img-8.jpg" class="w-full object-contain" alt="">
    <div class="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">
      <p class="text-gray-800 text-[50px] font-thin tracking-widest text-center">Menu</p>
      <p class="text-gray-800 mt-5 text-[15px] font-thin tracking-widest text-center mb-32">Cakes are only available in
        our cake shop, not online</p>
    </div>
    <div
        class="grid grid-cols-1 md:grid-cols-2 gap-x-24 md:absolute md:top-1/4 md:mt-20 text-white md:text-4xl font-bold md:px-24 px-8 py-20 bg-[#FFDCDB]">
      <MenuProduct v-for="product in response.products" :key="product.id" :product="product"/>
    </div>
  </div>
  <FaqSection/>

</template>


<style scoped>


</style>

