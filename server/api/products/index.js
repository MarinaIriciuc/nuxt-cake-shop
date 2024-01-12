export default eventHandler(async function (event) {

  const query = getQuery(event);
  console.log(query)
  const products = await prisma.product.findMany();


  return {
    success: true,
    statusCode: 200,
    products: products
  }


})
