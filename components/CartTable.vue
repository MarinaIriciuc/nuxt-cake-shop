<script setup>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

defineProps({
  cartProducts: Object,
  deleteItemFromCart: Function
})


</script>

<template>
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
      <td class="pl-24 text-[15px] tracking-wider text-gray-800">$ 125</td>
    </tr>
    </tbody>
  </table>
</template>

<style scoped>

</style>
