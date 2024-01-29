<script setup>
defineProps({
  image: String,
  title: String,
  description: String,
  textButton: String,
  direction: String
})
</script>
<template>
  <section id="banner">
    <div :class="`xl:flex xl:px-0 lg:px-[300px] md:px-[100px] sm:px-[100px] px-[20px] items-center  ${direction==='flex-row' ? 'flex-row' : 'flex-row-reverse' }`">
      <img :src="image" class="lg:w-[700px] w-[1050px] object-contain" alt="">
      <div class="xl:ms-16 sm:mt-0 mt-10 ms-0">
        <p class="text-[48px] font-normal tracking-wide">{{ title }}</p>
        <p class="text-gray-300">____________</p>
        <p class="text-gray-500 lg:w-[520px] md:w-[650px] w-[450px] text-[15px] mt-3">{{ description }}</p>
        <NuxtLink to="/menu">
          <button class="button-custom mt-10">
            {{ textButton }}
          </button>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
<!--
        :class="`flex xl:flex-row flex-col items-center ${direction==='flex-row' ? 'flex-row' : 'flex-row-reverse' }`"
-->

<style scoped>

</style>



