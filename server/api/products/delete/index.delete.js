export default defineEventHandler(async function (request) {

  const body = await readBody(request);

  const existingProduct = await prisma.product.findUnique({
    where: {
      id: body.productID
    }
  });

  if (!existingProduct) {
    return {
      success: false,
      error: "Product doesn't exist."
    }
  }

  const deletedProduct = await prisma.product.delete({
    where: {
      id: body.productID
    },
  })

  return {
    success: true,
    statusCode: 200,
    deletedProduct: deletedProduct
  }

})
