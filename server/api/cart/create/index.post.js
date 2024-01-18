import {getServerSession} from "#auth";

export default defineEventHandler(async function (event) {

    const body = await readBody(event);
    const session = await getServerSession(event)
    let product;

    const existingProduct = await prisma.shoppingCart.findFirst({
        where: {
            productId: body.productId,
            userId: session.user.id,
        },
    });

    if (!existingProduct) {
        product = await prisma.shoppingCart.create({
            data: {
                productId: body.productId,
                quantity: body.quantity,
                userId: session.user.id,
            },
        });
    } else {
        product = await prisma.shoppingCart.update({
            data: {
                quantity: existingProduct.quantity + body.quantity,
            },
            where: {
                id: existingProduct.id,
            },
        });
    }

    return {
        product: product,
        success: true,
        status: 200
    }
})
