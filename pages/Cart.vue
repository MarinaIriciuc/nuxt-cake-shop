<script setup>
definePageMeta({
  middleware: ["auth"]
})

const {data: response, refresh: refreshProducts} = await useFetch('/api/cart');

async function deleteItemFromCart(id) {
  await useFetch('/api/cart/delete', {
    method: "DELETE",
    body: {
      id: id
    }
  })
  await refreshProducts();
}

</script>

<template>
  <div class="px-32">
    <CartTable v-if="response.cart.length > 0" :cartProducts="response.cart" :deleteItemFromCart="deleteItemFromCart"/>
    <div v-if="response.cart.length > 0" class="flex gap-4 items-center">
      <input type="text" class="input-custom w-52 mt-20" placeholder="Cupon code">
      <button class="button-custom w-64 mt-20">Aplica cuponul</button>
    </div>
    <p v-if="response.cart.length === 0" class="text-[28px] flex justify-center mt-52 font-medium tracking-wider">
      There's no product in cart</p>
    <NuxtLink to="/products" class="flex justify-center">
      <button class="mt-10 button-custom-orange">Go to products page</button>
    </NuxtLink>
  </div>
</template>

<style scoped>

</style>
