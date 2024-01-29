import {chefSchema} from "~/schema/ChefSchema.js";
import prisma from "~/utils/prisma.js";
import {put} from "@vercel/blob";

export default defineEventHandler(async function (event) {
    const body = await readFormData(event);

    console.log(body.get('description'))
    const schema = await chefSchema.safeParseAsync(body);

    const image = body.get("image");

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


    const {url} = await put(image.name, image, {
        access: 'public'
    })

    body.set("image", url);

    const chef = await prisma.chef.create({
        data: {
            image: body.get('image'),
            name: body.get('name'),
            description: body.get('description')
        }
    });

    return {
        success: true,
        statusCode: 200,
        chef: chef
    }
})
