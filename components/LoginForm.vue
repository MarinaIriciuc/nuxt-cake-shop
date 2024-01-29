<script setup>
import {Github} from "lucide-vue-next";

const {signIn} = useAuth();

</script>

<template>
  <form @submit.prevent class="min-h-screen justify-center flex flex-col">
    <p class="capitalize flex justify-center text-amber-500 font-bold tracking-wider text-[32px] ">Welcome back</p>
    <!--    <div class="flex justify-center items-center mt-10 gap-6">-->
    <!--      <font-awesome-icon :icon="['fas', 'user']" class="text-amber-500 text-[20px]"/>-->
    <!--      <input type="text" placeholder="Email" class="outline-0 bg-gray-200 p-4"/>-->
    <!--    </div>-->
    <!--    <div class="flex justify-center items-center mt-5 gap-6">-->
    <!--      <font-awesome-icon :icon="['fas', 'lock']" class="text-amber-500 text-[20px]"/>-->
    <!--      <input type="password" placeholder="Password" class="outline-0 bg-gray-200 p-4"/>-->
    <!--    </div>-->
    <!--    <div class="flex justify-center items-center mt-5">-->
    <!--      <button class="mt-5 button-custom-orange w-[300px]">Login</button>-->
    <!--    </div>-->
    <div class="flex flex-col justify-center items-center mt-10">
      <p class="text-gray-500 text-[12px]">Connect with Social Media</p>
      <div class="flex gap-3">
        <button @click="signIn('github')" class="mt-6 rounded-full bg-black border-gray-800 border-2 p-2">
          <Github size="20" class="text-white"/>
        </button>
        <!--        <button @click="signIn('google')" class="mt-6 rounded-full bg-black border-gray-800 border-2 p-2">-->
        <!--          <img src="https://i.ibb.co/ctJG4Vy/google-icon-2048x2048-czn3g8x8.png" class="w-5" alt="">-->
        <!--        </button>-->
      </div>
    </div>
    <!--    <p class="tracking-wider text-gray-500 mt-32 flex justify-center items-center gap-3">Don't you have an account-->
    <!--      ?-->
    <!--      <NuxtLink to="/register">-->
    <!--        <span class="text-amber-500 cursor-pointer">Click here-->
    <!--          <font-awesome-icon :icon="['fas', 'arrow-right']"/>-->
    <!--        </span>-->
    <!--      </NuxtLink>-->
    <!--    </p>-->
  </form>
</template>

<style scoped>

</style>
