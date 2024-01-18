<script setup>
import { Slider } from '@/components/ui/slider'

</script>

<template>
  <p class="mt-10 text-[16px] tracking-widest text-amber-500">Price</p>
  <Slider
    :default-value="[33]" :max="100" :step="1" class="mt-4"
  />
</template>

<style scoped>

</style>
