export default defineEventHandler(async function (request) {

  const body = await readBody(request);

  const existingCategory = await prisma.category.findUnique({
    where: {
      name: body.name.toLowerCase()
    }
  })

  if (existingCategory) {
    return {
      success: false,
      error: "The product already exist."
    }
  }

  const deletedCategory = await prisma.category.delete({
    where: {
      name: body.name
    }
  })

  return {
    success: true,
    statusCode: 200,
    deletedCategory: deletedCategory
  }

})
