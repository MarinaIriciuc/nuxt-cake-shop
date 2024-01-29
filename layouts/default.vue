<script setup>

const {path} = useRoute();

console.log(path)
</script>

<template>
  <div>
    <Navbar v-if="path !== '/login' && path !== '/register' "/>
    <slot/>
    <CartButton/>
  </div>
  <Footer/>
</template>


