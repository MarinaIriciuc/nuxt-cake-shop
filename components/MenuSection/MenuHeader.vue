<script setup>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";


</script>

<template>
  <div class="min-h-screen relative flex-col items-center justify-center bg-gray-100 sm:flex hidden">
    <img
      src="https://i.ibb.co/CwvSjwJ/home-3-slide-1-image-1.png" alt="Image 1"
      class="animated-image from-right md:w-48 w-36 mt-[50px]">
    <div class="flex flex-col items-center">
      <p class="text-center font-bold lg:text-[150px] md:text-[120px] sm:text-[80px] text-gray-950 tracking-wide animate-fade-in mb-32">
        Bon appétit!</p>
      <font-awesome-icon :icon="['fas', 'down-long']" class="text-[30px] text-gray-950 animate-bounce"/>
    </div>
    <img
      src="https://i.ibb.co/brhkbnT/home-3-slide-1-image-3-1.png" alt="Image 2"
      class="animated-image from-right-delayed md:w-44 w-32 mt-[350px]"
    >
    <img src="https://i.ibb.co/pKp0PZk/home-3-slide-1-image-2.png" alt="Image 3"
         class="animated-image from-left md:w-48 w-36 mt-[380px]">
  </div>
</template>

<style scoped>

.animated-image {
  position: absolute;
  opacity: 0;
  animation-fill-mode: forwards;
}

.from-right {
  right: -100%;
  animation-name: slideFromRight;
  animation-duration: 1.2s;
}

.from-right-delayed {
  right: -100%;
  animation-name: slideFromRightDelayed;
  animation-duration: 1.8s;
}

.from-left {
  left: -100%;
  animation-name: slideFromLeft;
  animation-duration: 1.2s;
}

@keyframes slideFromRight {
  to {
    right: 48%;
    top: 2%; /* Ajustează valoarea pentru a poziționa în partea de sus */
    opacity: 1;
  }
}

@keyframes slideFromRightDelayed {
  to {
    right: 25%;
    top: 10%; /* Ajustează valoarea pentru a poziționa în jos și să vină puțin mai greu */
    opacity: 1;
  }
}

@keyframes slideFromLeft {
  to {
    left: 15%;
    top: 10%; /* Ajustează valoarea pentru a poziționa în jos și să vină din partea stângă */
    opacity: 1;
  }
}

.animate-fade-in {
  opacity: 0;
  animation-fill-mode: forwards;
  animation-name: fadeIn;
  animation-duration: 2.8s;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}
</style>
