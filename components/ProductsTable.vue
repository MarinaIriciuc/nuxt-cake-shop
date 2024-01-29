<script setup>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {notify} from "~/notifications/notifications.js";

const session = useAuth();
const roleUser = session.data?.value.user?.role;

let noProductsMessage = computed(() => response.value.products.length === 0);
let editMode = ref(false);

const route = useRoute();
const queries = ref(route.query);

const {data: response, refresh: refreshProducts} = await useFetch(`/api/products?`, {
  query: queries,
  watch: [queries]
});

watch(() => route.query, async function () {
  queries.value = route.query
})


async function deleteProduct(productID) {
  if (roleUser === 'ADMIN') {
    let data = await useFetch("/api/products/delete", {
      method: "DELETE",
      body: {productID: productID}
    });
    if (data.success) {
      notify("The product has been successfully deleted.");
    } else {
      notify("This product cannot be deleted. You are not ADMIN.");
    }
  }


  await refreshProducts()
}


// async function updateProduct(product, event) {
//   editMode.value = !editMode.value;
//   const formData = new FormData(event.target);
//   const {data} = await useFetch("/api/products/update", {
//     method: "PUT",
//     body: formData
//   });
//   console.log(data.value);
//
//   if (data.success) {
//     notify("The product has been successfully updated.")
//   }
// }


</script>

<template>
  <p v-if="noProductsMessage"
     class="flex justify-center text-[30px] font-semibold min-h-screen items-center pb-[250px]">
    There's no product
  </p>
  <div class="bg-white shadow pt-4 md:pt-7 pb-5 overflow-y-auto xl:block hidden">
    <form @submit.prevent="">
      <table v-if="response.products.length > 0" class="w-full">
        <thead>
        <tr tabindex="0" class="focus:outline-none h-16 w-full text-sm leading-none text-gray-800">
          <th class="font-normal text-left pl-4">Product</th>
          <!--        <th class="font-normal text-left pl-12">Description</th>-->
          <th class="font-normal text-left pl-12">Category</th>
          <th class="font-normal text-left pl-20">Price</th>
          <th class="font-normal text-left pl-20">Quantity</th>
          <th class="font-normal text-left pl-20">Delete or edit</th>
        </tr>
        </thead>
        <tbody class="w-full">
        <tr v-for="product in response.products"
            tabindex="0"
            :key="product.id"
            class="focus:outline-none h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b
            border-t border-gray-100">
          <td class="pl-4 cursor-pointer">
            <NuxtLink v-if="!editMode" :to="`/products/${product.category.name}/${product.slug}`" class="">
              <div class="flex items-center gap-6">
                <div class="w-24 h-10">
                  <img
                      v-if="product.image && !editMode"
                      class="h-[65px] w-[90px] object-cover"
                      :src="product.image"
                      alt="cake image"
                  />
                  <img v-if="!product.image" class="w-full object-cover" src="https://i.ibb.co/2PFqSxJ/no-image.jpg"
                       alt="no product image"/>
                  <input v-if="editMode" type="file" class="input-custom">
                </div>
                <div class="pl-4">
                  <p v-if="!editMode" class="font-medium">{{ product.title }}</p>
                  <p v-if="!editMode" class="text-xs leading-3 text-gray-600 pt-2">
                    100 orders </p>
                  <input v-if="editMode" type="text" class="input-custom" name="title">
                </div>
              </div>
            </NuxtLink>
          </td>
          <!--        <td class="pl-12">-->
          <!--          <p class="font-medium" name="description">{{ product.description }}</p>-->
          <!--        </td>-->
          <td class="pl-12">
            <p v-if="!editMode" class="font-medium capitalize" name="category">{{ product.category.name }}</p>
            <!--          <input v-else type="text" class="input-custom">-->
          </td>
          <td class="pl-20 ">
            <p v-if="!editMode" class="font-medium" name="price">{{ product.price }}</p>
            <input v-else type="text" class="input-custom" name="price">
          </td>
          <td class="pl-20">
            <p v-if="!editMode" class="font-medium" name="quantity">{{ product.quantity }} g</p>
            <input v-else type="text" class="input-custom" name="quantity">
          </td>
          <td class="pl-20">
            <div class="flex gap-3">
              <div class="font-medium" @click="deleteProduct(product.id)">
                <font-awesome-icon :icon="['fas', 'trash']"/>
              </div>
              <!--              <div class="font-medium" @click="updateProduct(product, event)">-->
              <!--                <font-awesome-icon :icon="['fas', editMode ? 'floppy-disk' : 'pen']"/>-->
              <!--              </div>-->
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </form>
  </div>
  <div class="xl:hidden grid md:grid-cols-2 grid-cols-1">
    <CakeCard v-for="product in response.products" :product="product"/>
  </div>
</template>

<style scoped>

</style>
