<script setup>
const cakesDescription = ref([{
  id: 1,
  name: "Chocolate Chip",
  description: "Savor the irresistible blend of rich, velvety chocolate chips embraced by our soft and chewy cookie. Indulge in the timeless classic that promises a symphony of flavors with every bite."
},
  {
    id: 2,
    name: "Snickerdoodle",
    description: "Immerse yourself in the enchanting world of our Snickerdoodle cookie. A delicate balance of cinnamon and sugar dances on your taste buds, creating a sweet symphony that lingers in your memory. Surrender to the joy of every delightful, chewy bite."
  },
  {
    id: 3,
    name: "Granola Cookies",
    description: "Embark on a wholesome journey with our Granola Cookies. Packed with hearty oats, nuts, and sweet honey, each bite is a burst of energy and flavor. Experience the perfect blend of crunch and chewiness in every delightful cookie."
  },
  {
    id: 4,
    name: "White Cookies",
    description: "Indulge in the pure elegance of our White Cookies. A canvas of buttery goodness adorned with white chocolate chips, creating a symphony of sweetness and sophistication. Delight in the richness of each heavenly, melt-in-your-mouth bite."
  },
  {
    id: 5,
    name: "Peanut Butter",
    description: "Surrender to the nutty allure of our Peanut Butter cookies. Each morsel is a harmony of creamy peanut butter, brown sugar, and a touch of sea salt. Experience the perfect balance of sweet and savory, making every bite a comforting delight."
  },
  {
    id: 6,
    name: "Chocolate Walnut",
    description: "Dive into decadence with our Chocolate Walnut cookies. Rich, velvety chocolate paired with the crunch of premium walnuts creates a symphony of textures and flavors. Indulge in the perfect combination of luscious chocolate and nutty goodness in every bite."
  },])
</script>

<template>
  <div class="grid grid-cols-3 px-32 my-20">
    <div class="flex flex-col gap-y-10">
      <div v-for="cake in cakesDescription.splice(0,3)">
        <p class="tracking-wider capitalize text-[25px] font-thin text-end">{{ cake.name }}</p>
        <p class="text-[15px] text-gray-500 mt-2 text-end">{{ cake.description }}</p>
      </div>
    </div>
    <img src="https://i.ibb.co/3CJkhgv/about-us-img-1.png" class="w-full h-[650px] object-contain" alt="">
    <div class="flex flex-col gap-y-10">
      <div v-for="cake in cakesDescription">
        <p class="tracking-wider capitalize text-[25px] font-thin">{{ cake.name }}</p>
        <p class="text-[15px] text-gray-500 mt-2">{{ cake.description }}</p>
      </div>
    </div>
  </div>


</template>

<style scoped>

</style>
