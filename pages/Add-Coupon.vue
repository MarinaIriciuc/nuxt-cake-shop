<script setup>
import {notify} from "~/notifications/notifications.js";

definePageMeta({
  middleware: ["auth"],
  layout: "admin"
})

const {data: response, refresh: refreshCoupons} = await useFetch('/api/coupons');
let errors = ref({
  coupon: '',
  code: '',
  validUntil: ''
});

function addErrors(data) {
  if (!data.errors) {
    errors.value = [];
    return
  }
  errors.value = data.errors.reduce(function (acc, errorObj) {
    if (typeof errorObj === 'object' && errorObj !== null) {
      Object.keys(errorObj).forEach(function (key) {
        acc[key] = errorObj[key];
      });
    }
    return acc;
  }, {})
}

async function addCoupon(event) {
  const {code, discount, validDate} = await event.target.elements
  const data = await $fetch("/api/coupons/create", {
    method: "POST",
    body: {
      code: code.value,
      discount: Number(discount.value),
      validUntil: new Date(validDate.value)
    }
  });
  if (data.errors) {
    addErrors(data)
  } else {
    errors.value = [];
  }
  if (data.success) {
    notify("Coupon added successfully")
  }
  await refreshCoupons();
}

async function deleteCoupon(id) {
  const {data} = await useFetch('/api/coupons/delete', {
    method: "DELETE",
    body: {
      couponID: id
    }
  });
  if (data.value.success) {
    notify("Coupon deleted successfully.")
    await refreshCoupons();
  } else {
    notify("Something went wrong. You can't delete coupon, because you are not ADMIN.")
  }
}


</script>

<template>

  <div class="flex flex-col mt-10">
    <p class="text-[20px] tracking-widest text-gray-700">Add coupons</p>
    <form @submit.prevent="addCoupon">
      <input type="text" class="input-custom mt-10" placeholder="Code" name="code" required>
      <p v-if="errors.code" class="text-red-400">{{ errors.code.message }}</p>
      <input type="number" class="input-custom mt-3" placeholder="Discount" name="discount" required>
      <p v-if="errors.discount" class="text-red-400">{{ errors.discount.message }}</p>
      <input type="date" class="input-custom mt-3" placeholder="Valid Until" name="validDate" required>
      <p v-if="errors.validUntil" class="text-red-400">{{ errors.validUntil.message }}</p>
      <button type="submit" class="button-custom mt-10">Add coupon</button>
    </form>
  </div>

  <p class="text-[20px] tracking-widest text-gray-700 mt-20">Your coupons</p>

  <div v-for="coupon in response.coupons"
       class="mt-6 bg-gray-200 rounded-sm p-3 w-80 flex items-center justify-between">
    <p class="text-gray-900 tracking-widest text-[14px]">{{ coupon.code }} </p>
    <button @click="deleteCoupon(coupon.id)" class="text-gray-900 tracking-widest text-[14px]">x</button>
  </div>


</template>

<style scoped>

</style>
