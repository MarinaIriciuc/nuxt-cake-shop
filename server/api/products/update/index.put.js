export default eventHandler(async function (event) {

  const body = await readBody(event);

  console.log(body)


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

  const updatedProduct = await prisma.product.update({
    where: {
      id: Number(body.productID)
    },
    data: {
      title: body.title,
      price: Number(body.price),
      quantity: Number(body.quantity),
      description: body.description
    }
  })

  return {
    success: true,
    statusCode: 200,
    deletedProduct: updatedProduct
  }


})
