<script setup>

const imageSlide = [{
  id: 1,
  image: "https://i.ibb.co/3pJsc20/pagina-homepage-07.jpg"
},
  {
    id: 2,
    image: "https://i.ibb.co/yY3ckQT/download-1.jpg"
  },
  {
    id: 3,
    image: "https://i.ibb.co/przcjw2/download.jpg"
  },
  {
    id: 4,
    image: "https://i.ibb.co/MDTZ8GT/download-2.jpg"
  },]
const productsGallery = [{
  id: 1,
  image: "https://i.ibb.co/wRGH8cD/download.png",
  name: "CAKE",
  description: "Pastery specialties with 100%"
},
  {
    id: 2,
    image: "https://i.ibb.co/rtwVVqB/download-3.png",
    name: "LENTEN SWEET",
    description: "Pastery specialties with 100%"
  },
  {
    id: 3,
    image: "https://i.ibb.co/Fmvbr0x/download-2.png",
    name: "MAKE A WISH",
    description: "Pastery specialties with 100%"
  },
  {
    id: 4,
    image: "https://i.ibb.co/kqJ2yh5/download-1.png",
    name: "PIECE",
    description: "Pastery specialties with 100%"
  },]
</script>


<template>
  <Carousel :imageSlide="imageSlide"/>
  <CakesGallery :productsGallery="productsGallery"/>
  <Banner image="https://i.ibb.co/MZMZwKR/h1-img-20.webp" title="Choose Your Flavor"
          description="At Grace Cakes, we believe that every sweet moment deserves to be celebrated with the perfect treat. From decadent cakes to delicate pastries, our selection is a symphony of flavors waiting to enchant your taste buds. Choose from a delightful array of options, each designed to bring joy to your palate."
          textButton="See the menu" direction="flex-row"/>
  <Banner image="https://i.ibb.co/0DK8Nzg/h1-img-7.png" title="Special Of The Day"
          description="We're excited to introduce our daily masterpiece – the Special of the Day! Immerse yourself in a culinary adventure as our skilled pastry chefs craft a unique and exquisite treat each day, just for you."
          textButton="Try" direction="flex-row-reverse"
          class="mt-40"
  />
  <ChefSection/>
  <div class="mt-40">
    <SubscriptionBanner/>
  </div>
</template>


<style>

</style>
