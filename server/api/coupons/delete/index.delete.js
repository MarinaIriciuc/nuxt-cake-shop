import prisma from "~/utils/prisma.js";
import {getServerSession} from "#auth";

export default defineEventHandler(async function (event) {

    const body = await readBody(event);
    const session = await getServerSession(event);

    const existingCoupon = await prisma.coupon.findUnique({
        where: {
            id: body.couponID
        }
    });

    if (!existingCoupon) {
        return {
            success: false,
            error: "Coupon doesn't exist."
        }
    }

    if (session.user.role !== "ADMIN") {
        return {
            success: false,
            message: "You can't delete coupon, because you are not ADMIN."
        }
    }

    await prisma.coupon.delete({
        where: {
            id: body.couponID
        },
    })

    return {
        success: true,
        statusCode: 200,
    }

})
