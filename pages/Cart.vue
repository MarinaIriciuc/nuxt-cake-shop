<script setup>
import {notify} from "~/notifications/notifications.js";

definePageMeta({
  middleware: ["auth"]
})

const {data: response, refresh: refreshProducts} = await useFetch('/api/cart');
const {data: coupons} = await useFetch('/api/coupons');
const couponCode = ref('');


let totalCart = computed(function () {
  return response.value.calculateTotal
});
let discountPrice = ref();
let couponError = ref({
  name: ""
})

async function deleteItemFromCart(id) {
  await useFetch('/api/cart/delete', {
    method: "DELETE",
    body: {
      id: id
    }
  })
  await refreshProducts();
}

function applyDiscount(discount, total) {
  discountPrice.value = total - (discount / 100) * total
  return discountPrice.value
}

function checkCouponExist() {
  let validCoupon = null;
  let currentDate = new Date();

  coupons.value.coupons.forEach(function (coupon) {
    if (coupon.code === couponCode.value && coupon.validUntil <= currentDate) {
      validCoupon = coupon;
    }
  });

  if (validCoupon) {
    applyDiscount(validCoupon.discount, totalCart.value);
    couponError.value.name = "";
    notify("Coupon successfully applied");
  } else {
    couponError.value.name = "Coupon doesn't exist or is not valid.";
  }
}


</script>

<template>

  <div class="px-32">
    <CartTable v-if="response.cart.length > 0" :cartProducts="response.cart" :deleteItemFromCart="deleteItemFromCart"
               totalProduct="totalProduct"/>
    <p v-if="response.cart.length > 0" class="flex justify-end text-[16px] tracking-wider text-gray-700 border-t-2">
      Total Cart: $ {{ discountPrice ? discountPrice : totalCart }}
    </p>
    <div v-if="response.cart.length > 0" class="flex gap-4 items-center">
      <form @submit.prevent="checkCouponExist" class="flex flex-col">
        <input v-model="couponCode" type="text" class="input-custom w-52 mt-20" placeholder="Cupon code">
        <p v-if="couponError.name" class="text-red-400">{{ couponError.name }}</p>
        <button class="button-custom w-64 mt-10">Apply The Coupon</button>
      </form>
    </div>
    <div v-if="response.cart.length === 0">
      <p class="text-[28px] flex justify-center mt-52 font-medium tracking-wider">
        There's no product in cart</p>
      <NuxtLink to="/products" class="flex justify-center">
        <button class="mt-10 button-custom-orange">Go to products page</button>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>

</style>
