<script setup>
import {notify} from "~/notifications/notifications.js";



async function sendEmail(){
  const data = await $fetch('/api/send');
}

</script>

<template>
  <form @submit.prevent="sendEmail">
    <div class="flex flex-col gap-4">
      <div class="flex">
        <input type="text" placeholder="Your name" class="p-3 outline-0">
        <input type="email" placeholder="Your email" class="p-3 outline-0">
      </div>
      <textarea placeholder="Question" class="p-3 outline-0"/>
      <button type="submit" @click="notify('Message Sent Successfully')" class="button-custom">Send a Message</button>
    </div>
  </form>
</template>

<style scoped>

</style>


