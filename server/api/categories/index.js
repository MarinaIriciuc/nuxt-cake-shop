export default eventHandler(async function (event) {

  const categories = await prisma.category.findMany();

  return {
    success: true,
    statusCode: 200,
    categories: categories
  }

})
