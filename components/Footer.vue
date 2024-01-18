<script setup>

import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const {path} = useRoute();

</script>

<template>
  <div v-if="path !== '/login' && path !== '/register' "
       class="grid md:grid-cols-2 grid-cols-1 mt-10 px-[55px] lg:py-20 gap-32">
    <div>
      <div class="flex lg:gap-20 gap-0">
        <div>
          <Logo class="lg:flex hidden"/>
          <SocialMediaIcons class="lg:flex hidden"/>
        </div>
        <div class="flex md:flex-col flex-row md:gap-0 gap-4 text-gray-500">
          <p class="tracking-wide mb-2 font-semibold text-black md:flex hidden">ACCES RAPID</p>
          <NuxtLink to="" class="footer-text mb-2">Home</NuxtLink>
          <NuxtLink to="/menu" class="footer-text mb-2">Menu</NuxtLink>
          <NuxtLink to="/products" class="footer-text mb-2">Products</NuxtLink>
          <NuxtLink to="/cake-images" class="footer-text mb-2">Photos</NuxtLink>
          <NuxtLink to="/about" class="footer-text mb-2">About</NuxtLink>
          <NuxtLink to="/contact" class="footer-text mb-2">Contact</NuxtLink>
        </div>
      </div>
    </div>
    <div class="md:flex flex-col hidden">
      <p class="font-bold tracking-wider">COFETĂRIE STRADA CRIȘULUI - CENTRUL COMERCIAL MAGNOLIA</p>
      <div class="footer-section mt-3">
        <font-awesome-icon :icon="['fas', 'location-dot']"/>
        <p class="footer-text">Brașov, Strada Crișului nr.18 - Centrul Comercial
          Magnolia</p>
      </div>
      <div class="footer-section mt-3">
        <font-awesome-icon :icon="['fas', 'phone']"/>
        <p class="footer-text">0766.609.990 / 0770.999.990</p>
      </div>
      <div class="footer-section mt-3">
        <font-awesome-icon :icon="['fas', 'envelope']"/>
        <p class="footer-text">comenzi@lacasadeturtadulce.ro</p>
      </div>
      <div class="footer-section mt-3">
        <font-awesome-icon :icon="['fas', 'calendar-days']"/>
        <p class="footer-text">
          L-V : 9-21
          S : 9-21
          D : 9-18
        </p>
      </div>
      <button class="button-custom mt-6">
        <font-awesome-icon :icon="['fas', 'location-dot']" class="me-3"/>
        Find us on map
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>
