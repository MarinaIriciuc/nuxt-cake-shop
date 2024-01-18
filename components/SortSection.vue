<script setup>
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem, SelectLabel,
  SelectTrigger,
  SelectValue
} from "~/components/ui/select/index.js";




</script>

<template>
  <Select>
    <SelectTrigger class="w-[180px]">
      <SelectValue placeholder="Sort by:"/>
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectItem value="alphabetic">
          Sort by alphabetical order
        </SelectItem>
        <SelectItem value="low">
          Sort by price: low to high
        </SelectItem>
        <SelectItem value="high">
          Sort by price: high to low
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>

<style scoped>

</style>
