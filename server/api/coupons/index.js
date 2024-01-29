import prisma from "~/utils/prisma.js";

export default  defineEventHandler(async function(){

    const coupons = await prisma.coupon.findMany();

    return {
        success: true,
        coupons: coupons
    }

})
