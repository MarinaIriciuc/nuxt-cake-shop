<script setup>
import {GoogleMap, Marker} from "vue3-google-map";

const config = useRuntimeConfig();
const center = {lat: 46.7667, lng: 23.6};

</script>


<template>

  <GoogleMap :api-key="config.public.googleMapKey" style="width: 100%; height: 500px" :center="center" :zoom="15">
    <Marker :options="{ position: center }"/>
  </GoogleMap>
</template>


<style scoped>

</style>
