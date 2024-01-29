<script setup>
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem, SelectLabel,
  SelectTrigger,
  SelectValue
} from "~/components/ui/select/index.js";


const route = useRoute();
const selectedValue = ref(route.query.sortBy);
const router = useRouter();

watch(selectedValue, (newValue) => {
  const query = {...route.query};
  if (newValue) {
    query.sortBy = newValue;
  } else {
    delete query.sortBy;
  }

  router.push({path: route.path, query});

});



// watch(selectedValue, function (newValue){
//   console.log(selectedValue.value)
// })


</script>

<template>
  <client-only>
    <Select v-model="selectedValue" name="select">
      <SelectTrigger class="w-[180px]">
        <SelectValue placeholder="Sort by:"/>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
<!--          <SelectItem value="alphabetic">-->
<!--            Sort by alphabetical order-->
<!--          </SelectItem>-->
          <SelectItem value="low">
            Sort by price: low to high
          </SelectItem>
          <SelectItem value="high">
            Sort by price: high to low
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </client-only>
</template>

<style scoped>

</style>
