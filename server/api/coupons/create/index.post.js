import {couponSchema} from "~/schema/CouponSchema.js";

export default defineEventHandler(async function (event) {


    const body = await readBody(event);

    console.log(body)

    const schema = couponSchema.safeParse(body);

    if (!schema.success) {
        return {
            errors: schema.error.issues.map(function (err) {
                const errorObject = {};
                errorObject[err.path] = err;
                return errorObject;
            }),
            success: false
        };
    }

    const coupon = await prisma.coupon.create({
        data: {
            code: body.code,
            discount: Number(body.discount),
            validUntil: new Date(body.validUntil)
        }
    })

    return {
        success: true,
        coupons: coupon
    }


})
