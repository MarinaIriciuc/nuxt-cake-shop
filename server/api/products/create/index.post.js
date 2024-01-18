import prisma from "~/utils/prisma.js";

export default defineEventHandler(async function (event) {

  const body = await readBody(event);

  const product = await prisma.product.create({
    data: {
      categoryID: Number(body.categoryID),
      image: body.image,
      title: body.title,
      slug: body.slug,
      price: Number(body.price) ?? 0,
      quantity: Number(body.quantity) ?? 1,
      description: body.description,
    }
  });

  return {
    success: true,
    statusCode: 200,
    product: product,
  }

})
