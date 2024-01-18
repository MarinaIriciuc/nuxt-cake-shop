<script setup>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const {data} = useAuth();

</script>


<template>
  <div v-if="data" class="flex justify-end items-start">
    <NuxtLink to="/cart">
      <button class="fixed-button bg-amber-500 p-3 text-white">
        <font-awesome-icon :icon="['fas', 'cart-shopping']"/>
      </button>
    </NuxtLink>
  </div>
</template>


<style scoped>
.fixed-button {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 999;
}
</style>
