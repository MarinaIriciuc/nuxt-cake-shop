export default defineEventHandler(async function (event) {

  // const slug = event.context.params.slug;
  //
  // const product = await prisma.product.findFirst({
  //   where: {
  //     slug: slug
  //   },
  //   include: {
  //     category: true
  //   }
  // });
  //
  // return {
  //   product: product,
  //   slug: slug
  // }


    const slug = event.context.params.slug;
    let product;

    product = await prisma.product.findFirst({
        where: {
            slug: slug,
        },
        include: {
            category: true,
        },
    });

    if (!product) {
        return {
            error: `Produsul cu slug-ul '${slug}' nu a fost găsit.`,
        };
    }

    return {
        product: product,
        slug: slug,
    };




})
