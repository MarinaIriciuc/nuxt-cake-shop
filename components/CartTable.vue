<script setup>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

defineProps({
  cartProducts: Object,
  deleteItemFromCart: Function
})


</script>

<template>

  <div class="xl:flex hidden">
    <table class="table-fixed w-full mt-16">
      <thead>
      <tr class="border-b border-gray-300 uppercase tracking-wider text-[18px]">
        <th class="font-medium"></th>
        <th class="font-medium">Product</th>
        <th class="font-medium">Price</th>
        <th class="font-medium">Quantity</th>
        <th class="font-medium">Total</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="cartProduct in cartProducts">
        <td @click="deleteItemFromCart(cartProduct.id)">
          <font-awesome-icon :icon="['fas', 'x']" class="text-gray-800 cursor-pointer"/>
        </td>
        <NuxtLink :to="`/products/${cartProduct.product.category.name}/${cartProduct.product.slug}`">
          <td class="flex items-center gap-2">
            <img :src="cartProduct.product.image" class="object-contain w-36 pl-10 my-6" alt="">
            <p class="text-[13px] tracking-wider text-gray-800"> {{ cartProduct.product.title }}</p>
          </td>
        </NuxtLink>
        <td class="pl-24 text-[15px] tracking-wider text-gray-800">{{ cartProduct.product.price }}</td>
        <td class="pl-20 text-[15px] tracking-wider text-gray-800">{{ cartProduct.quantity }}</td>
        <td class="pl-24 text-[15px] tracking-wider text-gray-800">$
          {{ cartProduct.product.price * cartProduct.quantity }}
        </td>
      </tr>
      </tbody>
    </table>
  </div>

  <div v-for="cartProduct in cartProducts" class="xl:hidden flex sm:flex-row flex-col gap-5 mt-20">
    <div>
      <font-awesome-icon @click="deleteItemFromCart(cartProduct.id)" :icon="['fas', 'xmark']" class="text-gray-600"/>
      <img :src="cartProduct.product.image" class="md:w-[400px] w-[150px] object-contain mt-2" alt="">
    </div>
    <div class="flexflex-col sm:mt-10 mt-5">
      <p class="cart-table-text">Name: {{ cartProduct.product.title }}</p>
      <p class="cart-table-text mt-3">Price: {{ cartProduct.product.price }}</p>
      <p class="cart-table-text mt-3">Weight: {{ cartProduct.product.quantity}}</p>
      <p class="tracking-wider text-gray-800 md:text-[18px] text-[15px] mt-3">Quantity: {{ cartProduct.quantity }}</p>
    </div>
  </div>

</template>

<style scoped>

</style>
