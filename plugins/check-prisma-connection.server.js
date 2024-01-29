import prisma from "~/utils/prisma.js";

export default defineNuxtPlugin(async nuxtApp => {
  try {
    await prisma.$queryRaw`SELECT 1`
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "Error establishing database connection"
    })
  }
})
