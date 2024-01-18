<script setup>

const navbarItem = ref(
    [{
      id: 1,
      name: "Home",
      path: "/"
    },
      {
        id: 2,
        name: "Menu",
        path: "/menu"
      },
      {
        id: 3,
        name: "Products",
        path: "/products"
      },
      {
        id: 4,
        name: "Photo of cakes",
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
        path: "/about"
      },
      {
        id: 7,
        name: "Contact",
        path: "/contact"
      },
      // {
      //   id: 8,
      //   name: "Blog",
      //   path: "/blog"
      // },
      {
        id: 9,
        name: "Dashboard",
        path: "/dashboard"
      }, {
      id: 10,
      guest: true,
      name: "Login",
      path: "/login"
    },
      {
        id: 11,
        icon: ['fas', 'arrow-right-from-bracket'],
        path: "/"
      },])

const {data, signOut} = useAuth();
const {path} = useRoute();
</script>

<template>

  <section v-if="path !== '/login' && path !== '/register' " id="navbar">
    <div
        class="flex xl:flex-row flex-col justify-center xl:items-center items-start xl:px-0 px-12 xl:gap-10 gap-5 xl:text-[14px] text-[12px] py-16 uppercase tracking-wider xl:h-20  shadow-2xl">
      <div v-for="item in navbarItem" class="relative group">
        <NuxtLink :to="item.path">
          <span v-if="item.name !== 'Login'" class="cursor-pointer">{{ item.name }}</span>
          <span v-if="item?.guest && !data">
              <span class="cursor-pointer">Login</span>
              <div class="loading-bar"></div>
          </span>
          <font-awesome-icon @click="signOut" v-if="data" :icon="item?.icon"/>
          <img v-if="item.image" :src="item.image" class="object-cover hidden xl:flex" alt="">
        </NuxtLink>
        <div class="loading-bar"></div>
      </div>
    </div>
  </section>

</template>

<style scoped>

</style>
