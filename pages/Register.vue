<script setup>


</script>

<template>
  <div class="flex min-h-screen justify-center items-center object-contain relative"
       style="background-image: url('https://i.ibb.co/k9LjgXP/download-11.jpg'); background-size: cover;">
    <div class="absolute inset-0 backdrop-blur-[2px]"></div>
    <div class="card rounded-xl px-20 shadow-2xl ms-0 xl:ms-[800px] lg:ms-[600px] md:ms-[300px] mb-32 relative z-10">
      <p class="uppercase tracking-wider font-medium text-gray-700 text-[15px]">Register</p>
      <RegisterForm/>
      <p class="mb-5 text-gray-400 flex justify-center text-[13px] gap-3">
        Do you already have an account?
        <span>
                <NuxtLink to="login" class="text-amber-500 font-semibold">
                    Login
                </NuxtLink>
            </span>
      </p>
    </div>
  </div>

</template>

<style scoped>

</style>
