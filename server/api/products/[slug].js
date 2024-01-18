export default defineEventHandler(async function (event) {

    const slug = event.context.params.slug

    const product = await prisma.product.findFirst({
        where: {
            slug: slug
        },
        include: {
            category: true
        }
    });

    return {
        product: product,
        slug: slug
    }

})
