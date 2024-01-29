<script setup>
import {notify} from "~/notifications/notifications.js";

definePageMeta({
  layout: "admin",
  middleware: ["auth"]
});
const {data, refresh: refreshCategories} = await useFetch("/api/categories");

let titleInput = ref("");
let slugInput = ref("");
let errors = ref({
  name: '',
  title: '',
  image: '',
  slug: '',
  quantity: '',
  price: '',
  description: ''
});

function createSlug() {
  slugInput.value = titleInput.value.split(" ").join("-").trim();
}

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

async function createCategory(event) {
  const {newCategory} = event.target.elements;
  const {data} = await useFetch("/api/categories/create", {
    method: "POST",
    body: JSON.stringify({
      name: newCategory.value
    })
  });
  if (data.value.errors) {
    addErrors(data.value);
  } else {
    errors.value = [];
  }
  if (data.value.success) {
    notify("Category added successfully")
  }
  await refreshCategories();
  newCategory.value = "";
}

async function createProduct(event) {

  const formData = new FormData(event.target)

  const data = await $fetch("/api/products/create", {
    method: "POST",
    body: formData
  });
  if (data.errors) {
    addErrors(data);
  } else {
    errors.value = [];
  }
  if (data.success) {
    titleInput.value = '';
    slugInput.value = '';
    event.target.reset();
    // errors.value.quantity = false
    notify("Product added successfully")
  }
}


</script>

<template>
  <p class="text-[20px] tracking-widest text-gray-700">Create categories</p>
  <form @submit.prevent="createCategory">
    <div class="flex items-center gap-3 mt-4">
      <input type="text" class="w-80 py-2 border border-gray-300 rounded-md outline-0 px-4" placeholder="Category"
             name="newCategory">
      <button name="addCategory" type="submit" class="button-custom-orange">Create a category</button>
    </div>
    <p class="text-red-400">{{ errors.name ? errors.name.message : "" }}</p>
  </form>
  <p class="text-[20px] tracking-widest text-gray-700 mt-10">Add product</p>
  <form @submit.prevent="createProduct" class="flex flex-col">
    <select class="select-custom capitalize" name="categoryID">
      <option value="" disabled selected>Category</option>
      <option v-for="category in data.categories" :value="category.id" :key="category.id" :name="category.name">
        {{ category.name }}
      </option>
    </select>
    <input type="file" class="input-custom" placeholder="Image" name="image">
    <p v-if="errors.image" class="text-red-400">{{ errors.image.message }}</p>
    <input v-model="titleInput" @input="createSlug" type="text" class="input-custom" placeholder="Title" name="title">
    <p v-if="errors.title" class="text-red-400">{{ errors.title.message }}</p>
    <input v-model="slugInput" @input="createSlug" type="text" class="input-custom" placeholder="Slug" name="slug">
    <p class="text-red-400"> {{ errors.slug ? errors.slug.message : " " }}</p>
    <input type="number" inputmode="numeric" class="input-custom" placeholder="Quantity" name="quantity">
    <p class="text-red-400">{{ errors.quantity ? errors.quantity.message : "" }}</p>
    <input type="number" inputmode="numeric" class="input-custom" placeholder="Price" name="price">
    <p class="text-red-400"> {{ errors.price ? errors.price.message : "" }}</p>
    <textarea type="text" class="input-custom" placeholder="Description" name="description"/>
    <p class="text-red-400"> {{ errors.description ? errors.description.message : "" }}</p>
    <button name="addProduct" type="submit" class="button-custom mt-5">Add a product</button>
  </form>
</template>

<style scoped>

</style>
