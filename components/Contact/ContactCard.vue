<script setup>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

defineProps({
  contactInfo: {}
})
</script>

<template>

  <div class="flex items-center rounded-xl p-8 gap-6 hover:bg-amber-500 hover:text-white transition-all w-80">
    <font-awesome-icon v-if="contactInfo.phone" :icon="['fas', 'phone']"/>
    <font-awesome-icon v-if="contactInfo.location" :icon="['fas', 'location-dot']"/>
    <font-awesome-icon v-if="contactInfo.email" :icon="['fas', 'envelope']"/>
    <div>
      <p v-if="contactInfo.location">Location</p>
      <p class="text-[13px] mt-1">{{ contactInfo.location }}</p>
      <p v-if="contactInfo.email">Email</p>
      <p class="text-[13px] mt-1">{{ contactInfo.email }}</p>
      <p v-if="contactInfo.phone">Phone</p>
      <p class="text-[13px] mt-1">{{ contactInfo.phone }}</p>
    </div>
  </div>

</template>

<style scoped>

</style>
