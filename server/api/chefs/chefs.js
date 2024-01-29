import prisma from "~/utils/prisma.js";
export default defineEventHandler(async function (event) {

  const chefs = await prisma.chef.findMany();


  return {
    success: true,
    statusCode: 200,
    chefs: chefs,
  }


})
