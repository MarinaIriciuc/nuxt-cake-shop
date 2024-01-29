import {productSchema} from "~/schema/ProductSchema";
import prisma from "~/utils/prisma.js";
import {put} from "@vercel/blob";

export default defineEventHandler(async function (event) {

    const body = await readFormData(event);

    const image = body.get("image");
    const schema = await productSchema.safeParseAsync(body);


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


    try {

        const {url} = await put(image.name, image, {
            access: 'public'
        })

        body.set("image", url);


        const product = await prisma.product.create({
            data: {
                categoryID: Number(body.get('categoryID')),
                image: body.get('image') || "https://i.ibb.co/fDtWwty/no-image.jpg",
                title: body.get('title'),
                slug: body.get('slug'),
                price: Number(body.get('price')) ?? 0,
                quantity: Number(body.get('quantity')) ?? 1,
                description: body.get('description'),
            }
        });

        return {
            success: true,
            statusCode: 200,
            product: product,
        }
    } catch (error) {
        return {
            success: false,
            statusCode: 500,
            msg: error.message
        }
    }


})
