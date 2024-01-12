import prisma from "~/utils/prisma.js";

export default defineEventHandler(async function (event) {
  const body = await readBody(event);

  const existingCategory = await prisma.category.findUnique({
    where: {
      name: body.name
    }
  });

  if (existingCategory) {
    return {
      success: false,
      error: "The category already exist."
    }
  }


  const category = await prisma.category.create({
    data: {
      name: body.name
    }
  })

  return {
    success: true,
    statusCode: 200,
    data: category
  }

})
