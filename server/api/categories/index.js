import prisma from "~/utils/prisma.js";

export default defineEventHandler(async function (event) {

  const categories = await prisma.category.findMany();


  return {
    success: true,
    statusCode: 200,
    categories: categories
  }

})
