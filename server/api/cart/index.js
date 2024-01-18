import {getServerSession} from "#auth";

export default defineEventHandler(async function (event) {

    const session = await getServerSession(event);

    const cart = await prisma.shoppingCart.findMany({
        where: {
            userId: session.user.id
        },
        include: {
            product: {
                include: {
                    category: true,
                },
            },
        },
    })

    return {
        cart: cart,
        success: true,
        status: 200
    }
})
