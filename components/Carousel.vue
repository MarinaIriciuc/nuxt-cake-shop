<script setup>
import 'vue3-carousel/dist/carousel.css'
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel'


const imageSlide = [{
  id: 1,
  image: "https://i.ibb.co/3pJsc20/pagina-homepage-07.jpg"
},
  {
    id: 2,
    // image: "https://i.ibb.co/VqRHBKC/download-1.jpg"
  },
  {
    id: 3,
    image: "https://i.ibb.co/przcjw2/download.jpg"
  },
  {
    id: 4,
    image: "https://i.ibb.co/MDTZ8GT/download-2.jpg"
  }]

</script>

<template>
  <carousel :items-to-show="1">
    <slide v-for="slide in imageSlide" :key="slide.id">
      <img :src="slide.image" class="w-full h-[800px] object-cover" alt="a picture of a cake">
    </slide>
    <template #addons>
      <navigation class="text-white"/>
      <!--      <pagination/>-->
    </template>
  </carousel>
</template>

<style scoped>

</style>


