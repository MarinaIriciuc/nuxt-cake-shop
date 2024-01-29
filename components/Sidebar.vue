<script setup>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const sidebarItem = ref([
  {
    id: 1,
    name: "Home",
    path: "/",
    icon: ['fas', 'house']
  },
  {
    id: 2,
    name: "Products",
    path: "/dashboard",
    icon: ['fas', 'cake-candles']
  },
  {
    id: 3,
    name: "Add product",
    path: "/add-product",
    icon: ['fas', 'utensils']
  },
  {
    id: 4,
    name: "Add chef",
    path: "/add-chef",
    icon: ['fas', 'kitchen-set']
  },
  {
    id: 5,
    name: "Add coupon",
    path: "/add-coupon",
    icon: ['fas', 'percent']
  }
]);


</script>

<template>
  <div class="min-h-screen flex flex-col lg:min-w-[300px] max-w-[80px] border-r-2 border-gray-200">
    <div class="flex justify-center py-10">
      <Logo/>
    </div>
    <ul class="px-7 flex flex-col lg:items-start items-center">
      <li v-for="item in sidebarItem" class="sidebar-text lg:mt-4 mt-10">
        <NuxtLink :to="item.path">
          <div class="flex gap-3 items-center">
            <FontAwesomeIcon :icon="item.icon" class="text-[16px]"/>
            <div class="text-[14px] lg:flex hidden">{{ item.name }}</div>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

