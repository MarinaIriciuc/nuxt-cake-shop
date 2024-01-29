<script setup>
import {notify} from "~/notifications/notifications.js";

definePageMeta({
  layout: "admin",
  middleware: ["auth"]
})

const {data, refresh: refreshChefs} = await useFetch("/api/chefs/chefs");
let errors = ref({
  image: '',
  name: '',
  description: ''
});
const session = useAuth();
const roleUser = session.data?.value.user?.role;

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

async function addChef(event) {
  const formData = new FormData(event.target)

  const data = await $fetch("/api/chefs/create/chef", {
    method: "POST",
    body: formData
  });
  if (data.errors) {
    addErrors(data)
  } else {
    errors.value = [];
  }
  if (data.success) {
    notify("Chef added successfully")
  }
  await refreshChefs();
}

// async function deleteChef(chefID) {
//   if (roleUser === 'ADMIN') {
//     let data = await useFetch("/api/chefs/delete/chef", {
//       method: "DELETE",
//       body: {
//         chefID: chefID
//       }
//     });
//     if (data.success) {
//       notify("The product has been successfully deleted.");
//     } else {
//       notify("This product cannot be deleted. You are not ADMIN.");
//     }
//   }
//   await refreshChefs();
// }


</script>

<template>
  <p class="text-[20px] tracking-widest text-gray-700 mt-10">Add chef</p>
  <form @submit.prevent="addChef">
    <input type="file" class="input-custom" placeholder="Image" name="image">
    <p v-if="errors.image" class="text-red-400">{{ errors.image.message }}</p>
    <input type="text" class="input-custom" placeholder="Name" name="name">
    <p v-if="errors.name" class="text-red-400">{{ errors.name.message }}</p>
    <textarea type="text" class="input-custom mt-5" placeholder="Description" name="description"/>
    <p v-if="errors.description" class="text-red-400">{{ errors.description.message }}</p>
    <button class="button-custom-orange mt-5">Add a chef</button>
  </form>
  <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mt-12">
    <ChefCard v-for="chef in data.chefs" :key="chef.id" :chef="chef" :deleteChef="deleteChef"/>
  </div>
</template>

<style scoped>

</style>

