<script setup>

import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {notify} from "~/notifications/notifications.js";

const route = useRoute();
const slug = route.params.slug;
const {data: response} = await useFetch(`/api/products/${slug}`);


let quantity = ref(1);

async function addToCart(product) {
  const {data} = await useFetch('/api/cart/create', {
    method: "POST",
    body: {
      productId: product.id,
      quantity: quantity
    }
  });
  if (!data.value.errors) {
    notify("Product added in cart.")
  }
}




</script>


<template>
  <div class="grid lg:grid-cols-2 grid-cols-1 gap-20">
    <div class="flex items-center">
      <img :src="response.product.image" class="min-w-full" alt="">
    </div>
    <div class="lg:mt-10 mt-0 lg:px-0 px-10">
      <p class="text-[40px] font-thin tracking-widest">{{ response.product.title }} </p>
      <p class="text-[18px] text-orange-500">$ {{ response.product.price }}</p>
      <p class="mt-6 text-[16px] font-thin tracking-wide">{{ response.product.description }}</p>
      <div class="flex mt-10 gap-5">
        <div
            class="flex items-center gap-3 border-2 border-amber-500 hover:bg-amber-500 hover:text-white transition px-12 py-3 text-gray-600">
          <p class="tracking-wider uppercase text-[10px]">Select quantity</p>
          <button v-if="quantity>1" @click="quantity--">
            <font-awesome-icon :icon="['fas', 'chevron-left']"/>
          </button>
          <button>{{ quantity }}</button>
          <button @click="quantity++">
            <font-awesome-icon :icon="['fas', 'chevron-right']"/>
          </button>
        </div>
        <button
            @click="addToCart(response.product)"
            class="tracking-wider uppercase text-[10px] bg-amber-400 hover:bg-amber-500 transition px-16 py-3 text-white">
          Add to cart
        </button>
      </div>
      <p class="text-[15px] font-medium tracking-wide mt-16 text-gray-700 capitalize">SKU:
        {{ response.product.id }}
      </p>
      <p class="text-[15px] font-medium tracking-wide mt-2 text-gray-700 capitalize">Category:
        {{ response.product.category.name }}
      </p>
      <p class="text-[15px] font-medium tracking-wide mt-2 text-gray-700">Quantity: {{
          response.product.quantity
        }}
      </p>
    </div>
  </div>

</template>

<style>

</style>
