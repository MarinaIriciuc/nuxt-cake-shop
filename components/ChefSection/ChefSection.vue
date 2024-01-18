<script setup>
import ChefCard from "~/components/ChefSection/ChefCard.vue";

const {data} = await useFetch("/api/chefs/chefs");


</script>

<template>
  <section id="chef-section" class="px-[55px] mt-20">
    <div class="flex flex-col items-center">
      <p class="text-[48px] font-normal tracking-wide">Our Team</p>
      <p class="text-gray-300">____________</p>
      <p class="text-gray-500 w-[800px] text-[15px] lg:px-0 md:px-20 px-48 mt-3">Lorem ipsum dolor sit amet, consectetur
        adipisicing elit.
        Consectetur corporis cum dolore eius excepturi fuga ipsa quia sequi, voluptate? Dolore expedita inventore iure
        magnam minima omnis quaerat quidem quos voluptatibus.</p>
    </div>
    <div class="grid md:grid-cols-4 grid-cols-2 mt-10 gap-10">
      <ChefCard v-for="chef in data.chefs" :chef="chef"/>
    </div>
  </section>
</template>

<style scoped>

</style>
