<script setup>
definePageMeta({
  layout: "admin",
  middleware: ["auth"]
})
const {data, refresh: refreshCategories} = await useFetch("/api/categories");
let titleInput = ref("");
let slugInput = ref("");

function createSlug() {
  slugInput.value = titleInput.value.split(" ").join("-").trim();
}

async function createCategory(event) {
  const {newCategory} = event.target.elements;
  const {data: category} = await useFetch("/api/categories/create", {
    method: "POST",
    body: JSON.stringify({
      name: newCategory.value
    })
  });
  await refreshCategories();
  newCategory.value = "";
}

async function createProduct(event) {
  const form = {
    image: event.target.elements.image.value,
    category: event.target.elements.category.value,
    title: event.target.elements.title.value,
    slug: event.target.elements.slug.value,
    quantity: event.target.elements.quantity.value,
    price: event.target.elements.price.value,
    description: event.target.elements.description.value
  }
  const {data: product} = await useFetch("/api/products/create", {
    method: "POST",
    body: {
      categoryID: form.category,
      image: form.image,
      title: form.title,
      slug: form.slug,
      price: form.price,
      quantity: form.quantity,
      description: form.description,
    }
  });
}

</script>

<template>
  <p class="text-[20px] tracking-widest text-gray-700">Create categories</p>
  <form @submit.prevent="createCategory">
    <div class="flex items-center gap-3 mt-4">
      <input type="text" class="w-80 py-2 border border-gray-300 rounded-md outline-0 px-4" placeholder="Category"
             name="newCategory">
      <button class="button-custom-orange ">Create a category</button>
    </div>
  </form>
  <p class="text-[20px] tracking-widest text-gray-700 mt-10">Add product</p>
  <form @submit.prevent="createProduct">
    <select class="select-custom capitalize" name="category">
      <option value="" disabled selected>Category</option>
      <option v-for="category in data.categories" :value="category.id" :key="category.id" :name="category.name">
        {{ category.name }}
      </option>
    </select>
    <input type="file" class="input-custom" placeholder="Image" name="image">
    <input v-model="titleInput" @input="createSlug" type="text" class="input-custom" placeholder="Title" name="title">
    <input v-model="slugInput" @input="createSlug" type="text" class="input-custom" placeholder="Slug" name="slug">
    <input type="number" inputmode="numeric" class="input-custom" placeholder="Quantity" name="quantity">
    <input type="number" inputmode="numeric" class="input-custom" placeholder="Price" name="price">
    <textarea type="text" class="input-custom" placeholder="Description" name="description"/>
    <button class="button-custom mt-5">Add a product</button>
  </form>
</template>

<style scoped>

</style>
