export default defineEventHandler(async function (event) {

  const query = getQuery(event);
  let products;


  console.log(query)


  if (query.category || query.search) {
    products = await prisma.category.findFirst({
      where: {
        name: query.category,
      },
    }).products({
      where: {
        title: {
          contains: query.search,
        },
      },
      include: {
        category: true,
      },
    });
  } else {
    products = await prisma.product.findMany({
      include: {
        category: true,
      },
    });
  }


  // if () {
  //   products = await prisma.product.findMany({
  //     where: {
  //       name: searchProduct
  //     }
  //   })
  // }

  if (!products) {
    setResponseStatus(event, 404);
  }

  return {
    success: true,
    products: products
  }


})
