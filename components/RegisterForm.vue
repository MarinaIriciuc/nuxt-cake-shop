<script setup>

const {signIn} = useAuth()

async function handleRegister(event) {
  const user = {
    email: event.target.elements.email.value,
    password: event.target.elements.password.value,
  }

  // const response = await useFetch("http://localhost:8080/register.php", {
  //   method: "POST",
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(user),
  //   mode: "no-cors" // Convertirea obiectului user într-un șir JSON
  // });

  try {
    const data = await signIn('register', {
      redirect: false,
      email: user.email,
      password: user.password
    })

    if (!data.error) {
      navigateTo("/")
    }

    console.log(data)
  } catch (e) {

  }

}

</script>

<template>
  <form @submit.prevent="handleRegister" class=" justify-center flex flex-col">
    <div class="flex justify-center items-center mt-10 gap-6">
      <font-awesome-icon :icon="['fas', 'user']" class="text-amber-500 text-[20px]"/>
      <input type="email" placeholder="Email" class="outline-0 bg-gray-200 p-4 w-full" name="email"/>
    </div>
    <div class="flex justify-center items-center mt-5 gap-6">
      <font-awesome-icon :icon="['fas', 'lock']" class="text-amber-500 text-[20px]"/>
      <input type="password" placeholder="Password" class="outline-0 bg-gray-200 p-4 w-full" name="password"/>
    </div>
    <div class="flex justify-center items-center mt-5 gap-6">
      <font-awesome-icon :icon="['fas', 'lock']" class="text-amber-500 text-[20px]"/>
      <input type="text" placeholder="First name" class="outline-0 bg-gray-200 p-4 w-full" name="first_name"/>
    </div>
    <div class="flex justify-center items-center mt-5 gap-6">
      <font-awesome-icon :icon="['fas', 'lock']" class="text-amber-500 text-[20px]"/>
      <input type="text" placeholder="Last name" class="outline-0 bg-gray-200 p-4 w-full" name="last_name"/>
    </div>
    <div class="flex justify-center items-center mt-5">
      <button class="mb-10 button-custom-orange w-[300px]">Register</button>
    </div>
  </form>
</template>

<style scoped>

</style>
