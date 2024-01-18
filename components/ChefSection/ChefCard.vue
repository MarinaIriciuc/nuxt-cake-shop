<script setup>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

defineProps({
  chef: {},
  deleteChef: Function
})

const route = useRoute();
const path = route.path;


</script>


<template>
  <div class="flex flex-col">
    <button v-if="path.startsWith('/add-chef')" @click="deleteChef(chef.id)" class="flex justify-end text-gray-400">
      <font-awesome-icon :icon="['fas', 'xmark']"/>
    </button>
    <img :src="chef.image" class="object-cover" alt="">
    <p class="text-center mt-4 text-[15px]">{{ chef.name }}</p>
    <p class="text-center text-amber-500 text-[13px] mt-1 tracking-wide">Chef</p>
    <p class="text-gray-600 text-[14px] mt-2">{{ chef.description }}</p>
  </div>
</template>


<style scoped>

</style>
