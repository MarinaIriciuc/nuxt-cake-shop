import {getServerSession} from "#auth";
import prisma from "~/utils/prisma.js";
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

    function calculateTotal() {
        let totalCart = 0;
        for (let cartProduct of cart) {
            const {product, quantity} = cartProduct;
            const totalPrice = product.price * quantity;
            totalCart += totalPrice;
        }
        return totalCart;
    }


    return {
        calculateTotal: calculateTotal(),
        cart: cart,
        success: true,
        status: 200
    }
})
