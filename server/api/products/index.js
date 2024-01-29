import prisma from "~/utils/prisma.js";

export default defineEventHandler(async function (event) {

  const query = getQuery(event);
  let products;

  let orderBy = 'asc';
  switch(query.sortBy) {
    case "low":
      orderBy = 'asc'
      break
    case "high":
      orderBy = 'desc'
      break
    default:
      orderBy = 'asc';


  }

  if (query.category) {
    products = await prisma.category.findFirst({
      where: {
        name: query.category,
      },
    }).products({
      include: {
        category: true,
      },
      orderBy: {
        price: orderBy
      }
    });
  } else {

    products = await prisma.product.findMany({
      include: {
        category: true,
      },
      orderBy: {
        price: orderBy
      }
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
