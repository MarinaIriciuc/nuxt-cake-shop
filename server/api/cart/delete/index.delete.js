import {getServerSession} from "#auth";
import prisma from "~/utils/prisma.js";

export default defineEventHandler(async function (event) {

    const body = await readBody(event);
    const session = await getServerSession(event);

    const existingProductInCart = await prisma.shoppingCart.findUnique({
        where: {
            id: body.id,
            userId: session.user.id
        }
    });

    if (!existingProductInCart) {
        return {
            success: false,
            error: "Product doesn't exist in cart."
        }
    }

    await prisma.shoppingCart.delete({
        where: {
            id: body.id,
            userId: session.user.id
        }
    });

    return {
        success: true
    }
})
