<script setup>
definePageMeta({
  layout: "admin",
  middleware: ["auth"]
})


const {data, refresh: refreshChefs} = await useFetch("/api/chefs/chefs");

async function addChef(event) {
  const form = {
    image: event.target.elements.image.value,
    name: event.target.elements.name.value,
    description: event.target.elements.description.value,
  }
  await useFetch("/api/chefs/create/chef", {
    method: "POST",
    body: {
      image: form.image,
      name: form.name,
      description: form.description,
    }
  });
  await refreshChefs();
}

async function deleteChef(chefID) {
  await useFetch("/api/chefs/delete/chef", {
    method: "DELETE",
    body: {
      chefID: chefID
    }
  });
  await refreshChefs();
}


</script>

<template>
  <p class="text-[20px] tracking-widest text-gray-700 mt-10">Add chef</p>
  <form @submit.prevent="addChef">
    <input type="file" class="input-custom" placeholder="Image" name="image">
    <input type="text" class="input-custom" placeholder="Name" name="name">
    <textarea type="text" class="input-custom mt-5" placeholder="Description" name="description"/>
    <button class="button-custom-orange mt-5">Add a chef</button>
  </form>
  <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mt-12">
    <ChefCard v-for="chef in data.chefs" :key="chef.id" :chef="chef" :deleteChef="deleteChef"/>
  </div>
</template>

<style scoped>

</style>

