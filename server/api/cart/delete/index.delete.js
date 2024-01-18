export default defineEventHandler(async function (event) {
    const body = await readBody(event);
    const deletedProduct = await prisma.shoppingCart.delete({
        where: {
            id: body.id
        }
    })
})
