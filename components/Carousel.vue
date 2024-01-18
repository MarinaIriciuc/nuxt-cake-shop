<script setup>
import 'vue3-carousel/dist/carousel.css'
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel'

defineProps({
  imageSlide: Array
})

</script>

<template>
  <carousel :items-to-show="1" class="flex items-center">
    <slide v-for="slide in imageSlide" :key="slide.id">
      <img :src="slide.image" class="w-full md:h-[800px] h-full object-cover" alt="a picture of a cake">
    </slide>
    <template #addons>
      <navigation/>
      <!--      <pagination/>-->
    </template>
  </carousel>
</template>

<style scoped>

</style>


