<script setup>

import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "~/components/ui/accordion/index.js";

const defaultValue = 'item-1'
const accordionItems = [
  {
    value: 'item-1',
    title: ' How can I place an order on your online bakery?',
    content: "Placing an order is easy! Simply browse our delicious selection, add items to your cart, and proceed to checkout. Follow the prompts to provide your details and complete the order."
  },
  {
    value: 'item-2',
    title: 'What payment methods do you accept?',
    content: 'We accept various payment methods, including credit cards, debit cards, and secure online payment gateways. Rest assured, your payment information is handled with the utmost security.'
  },
  {
    value: 'item-3',
    title: 'How far in advance should I place my order for a special event or celebration?',
    content: 'To ensure we can meet your requirements and provide the freshest treats, we recommend placing your order at least [X] days in advance. For larger events, it\'s advisable to contact us even earlier to secure your desired date on our baking schedule.'
  },
  {
    value: 'item-4',
    title: 'What is your delivery area and how much does it cost?',
    content: 'We currently deliver to [list of areas]. Delivery fees vary based on distance. You can view the delivery cost during the checkout process. We strive to provide efficient and reliable delivery services to bring our delightful treats right to your doorstep.'
  }]

</script>

<template>
  <Accordion type="single" class="w-full" collapsible :default-value="defaultValue">
    <AccordionItem v-for="item in accordionItems" :key="item.value" :value="item.value">
      <AccordionTrigger>{{ item.title }}</AccordionTrigger>
      <AccordionContent>
        {{ item.content }}
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</template>

<style scoped>

</style>
