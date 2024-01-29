<script setup>

import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const navbarItem = ref([{
  id: 1,
  name: "Home",
  icon: ['fas', 'house'],
  path: "/"
},
  {
    id: 2,
    name: "Menu",
    icon: ['fas', 'utensils'],
    path: "/menu"
  },
  {
    id: 3,
    name: "Products",
    icon: ['fas', 'cake-candles'],
    path: "/products"
  },
  {
    id: 4,
    name: "Photo of cakes",
    icon: ['fas', 'image'],
    path: "/cake-images"
  },
  {
    id: 5,
    name: "",
    image: "https://gracecc.ro/wp-content/uploads/2022/10/grace-black-270x100-1.png",
    path: "/"
  },
  {
    id: 6,
    name: "About us",
    icon: ['fas', 'info'],
    path: "/about"
  },
  {
    id: 7,
    name: "Contact",
    icon: ['fas', 'address-book'],
    path: "/contact"
  },
  {
    id: 8,
    name: "Dashboard",
    icon: ['fas', 'chart-line'],
    path: "/dashboard"
  }, {
    id: 9,
    guest: true,
    name: "Login",
    icon: ['fas', 'arrow-right-from-bracket'],
    path: "/login"
  },
  {
    id: 11,
    // icon: ['fas', 'arrow-right-from-bracket'],
    path: "/"
  },])

const {data, signOut} = useAuth();

let sidebarToggle = ref(false);


</script>

<template>

  <section id="navbar">
    <div
        class="flex xl:flex-row flex-col justify-center xl:items-center items-start px-0 xl:px-12 xl:gap-10 gap-5 xl:text-[14px] text-[12px] xl:py-16 py-5 uppercase tracking-wider xl:h-20  shadow-2xl">

      <div class="xl:hidden flex justify-end w-full px-10">
        <button @click="sidebarToggle = !sidebarToggle"
                class="shadow-2xl bg-gray-800 p-3 px-5 rounded-md text-gray-200">
          <font-awesome-icon :icon="['fas', 'bars']"/>
        </button>
      </div>

      <div v-if="sidebarToggle" class="sidebar flex flex-col items-center bg-gray-100 border-r border-2 min-h-screen">
        <div v-for="item in navbarItem" class="mt-10 text-[18px] text-gray-800">
          <NuxtLink :to="item.path">
            <span v-if="item.name !== 'Login'" class="cursor-pointer">
               <font-awesome-icon :icon="item?.icon"/>
            </span>
            <span v-if="item?.guest && !data">
              <span class="cursor-pointer text-[20px]">
                <font-awesome-icon :icon="['fas', 'right-to-bracket']"/>
              </span>
              <div class="loading-bar"></div>
          </span>
          </NuxtLink>
          <div class="loading-bar"></div>
        </div>
        <font-awesome-icon v-if="data" @click="signOut" :icon="['fas', 'arrow-right-to-bracket']" class="text-[20px]"/>
      </div>

      <div v-for="item in navbarItem" class="relative group xl:flex hidden">
        <NuxtLink :to="item.path">
          <span v-if="item.name !== 'Login'" class="cursor-pointer">{{ item.name }}</span>
          <span v-if="item?.guest && !data">
              <span class="cursor-pointer">Login</span>
              <div class="loading-bar"></div>
          </span>
          <!--          <font-awesome-icon @click="signOut" v-if="data && item.icon" :icon="item?.icon"/>-->
          <img v-if="item.image" :src="item.image" class="object-cover hidden xl:flex" alt="">
        </NuxtLink>
        <div class="loading-bar"></div>
      </div>
      <font-awesome-icon v-if="data" @click="signOut" :icon="['fas', 'arrow-right-to-bracket']" class="xl:flex hidden"/>
    </div>
  </section>

</template>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100px;
  min-height: 100vh;
  z-index: 1000;
}

</style>
