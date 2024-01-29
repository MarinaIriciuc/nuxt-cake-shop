import prisma from "~/utils/prisma.js";
import {categorySchema} from "~/schema/CategorySchema.js";
import {productSchema} from "~/schema/ProductSchema.js";

export default defineEventHandler(async function (event) {
  const body = await readBody(event);
  const schema = categorySchema.safeParse(body);

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


  const existingCategory = await prisma.category.findUnique({
    where: {
      name: body.name
    }
  });

  if (existingCategory) {
    return {
      success: false,
      errors: "The category already exist."
    }
  }

  const category = await prisma.category.create({
    data: {
      name: body.name
    }
  })

  return {
    success: true,
    statusCode: 200,
    data: category
  }

})
