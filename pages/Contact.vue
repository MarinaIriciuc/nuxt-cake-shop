<script setup>

const contactInfo = [{id: 1, icon: "", location: "Brașov, Strada Crișului nr.18 - Centrul Comercial Magnolia"}, {
  id: 2,
  icon: "",
  email: "comenzi@lacasadeturtadulce.ro"
}, {id: 3, icon: "", phone: "0770.999.990"}];

</script>

<template>
  <section id="contact" class="px-[55px]">
    <div class="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-20">
      <div class="flex flex-col">
        <p class="text-amber-500 tracking-wider text-[23px] font-medium uppercase">Keep In Touch</p>
        <p class="text-[32px] font-medium tracking-wide uppercase">For Orders Or Other Details</p>
        <p class="mt-4 text-[16px] lg:pe-0 pe-10 text-gray-500">Your email address and the completed data are required
          so that we can reply to you. Your data will not be disclosed to anyone.</p>
        <ContactForm class="mt-6"/>
      </div>
      <ContactMap class="lg:mt-0 mt-16"/>
    </div>
    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:mt-28 mt-16 gap-10 place-items-start lg:text-left">
      <ContactCard v-for="info in contactInfo" :key="info.id" :contactInfo="info"/>
    </div>
  </section>
</template>

<style scoped>

</style>
