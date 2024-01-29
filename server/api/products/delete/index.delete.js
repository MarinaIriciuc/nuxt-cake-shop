import prisma from "~/utils/prisma.js";
import {getServerSession} from "#auth";

export default defineEventHandler(async function (request) {

    const body = await readBody(request);
    const session = await getServerSession(request);

    const existingProduct = await prisma.product.findUnique({
        where: {
            id: body.productID
        }
    });

    if (!existingProduct) {
        return {
            success: false,
            statusCode: 404,
            error: "Product doesn't exist."
        }
    }

    if (session.user.role !== 'ADMIN') {
        return {
            success: false,
            error: "You are not admin, so you can't delete the products."
        }
    }

    const deletedProduct = await prisma.product.delete({
        where: {
            id: body.productID
        },
    })

    return {
        success: true,
        statusCode: 200,
        deletedProduct: deletedProduct
    }

})
